// SEO sanity checks against the built site. Run after `npm run build`:
//   npm run check:seo
// Exits 1 and prints a list of problems if anything is wrong. Plain Node, no dependencies.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const SITE = "https://tempoaba.com";
const NOINDEX_PAGES = new Set(["/404", "/services/center"]);

if (!existsSync(DIST)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}

const problems = [];
const fail = (page, msg) => problems.push(`${page}: ${msg}`);

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const htmlFiles = walk(DIST).filter((f) => f.endsWith(".html"));

// "dist/about/mission.html" -> "/about/mission"; "dist/index.html" -> "/"
const pathOf = (file) => {
  const rel = "/" + relative(DIST, file).replace(/\.html$/, "");
  return rel === "/index" ? "/" : rel;
};
// Member pages also exist under the first-name-as-written alias (/Cynthia); both canonicalize to lowercase
const canonicalPathOf = (path) => (path.startsWith("/about/members/") ? path.toLowerCase() : path);

const count = (html, re) => (html.match(re) || []).length;
const jsonLdTypes = (blocks) =>
  blocks.flatMap((b) => {
    const nodes = b["@graph"] ?? [b];
    return nodes.flatMap((n) => (Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]]));
  });

for (const file of htmlFiles) {
  const path = pathOf(file);
  const html = readFileSync(file, "utf8");
  const is404 = path === "/404";
  const noindexExpected = NOINDEX_PAGES.has(path);

  // --- head metadata ---
  if (count(html, /<title[\s>]/g) !== 1) fail(path, `expected 1 <title>, found ${count(html, /<title[\s>]/g)}`);
  if (count(html, /<meta[^>]*name="description"/g) !== 1)
    fail(path, `expected 1 meta description, found ${count(html, /<meta[^>]*name="description"/g)}`);
  const canonicals = [...html.matchAll(/<link[^>]*rel="canonical"[^>]*>/g)].map((m) => m[0]);
  if (canonicals.length !== 1) fail(path, `expected 1 canonical, found ${canonicals.length}`);
  else {
    const href = canonicals[0].match(/href="([^"]*)"/)?.[1];
    const want = SITE + canonicalPathOf(path);
    if (href !== want) fail(path, `canonical is ${href}, expected ${want}`);
  }
  for (const prop of ["og:title", "og:description", "og:url", "og:image", "og:type"])
    if (!new RegExp(`<meta[^>]*property="${prop}"`).test(html)) fail(path, `missing ${prop}`);
  for (const name of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"])
    if (!new RegExp(`<meta[^>]*name="${name}"`).test(html)) fail(path, `missing ${name}`);
  const charsetAt = html.search(/<meta charset=/i);
  if (charsetAt === -1 || charsetAt > 1024) fail(path, "<meta charset> missing or after the first 1024 bytes");

  // --- robots ---
  const noindex = /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html);
  if (noindexExpected && !noindex) fail(path, "should be noindex");
  if (!noindexExpected && noindex) fail(path, "is noindex but should be indexable");

  // --- headings ---
  const headings = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const h1s = headings.filter((l) => l === 1).length;
  if (h1s !== 1) fail(path, `expected exactly 1 <h1>, found ${h1s}`);
  let prev = 0;
  for (const level of headings) {
    if (prev && level > prev + 1) fail(path, `heading level skips from h${prev} to h${level}`);
    prev = level;
  }

  // --- JSON-LD ---
  const blocks = [];
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      blocks.push(JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&")));
    } catch {
      fail(path, "JSON-LD block is not valid JSON");
    }
  }
  if (/TODO/.test(html)) fail(path, 'contains "TODO" in the page HTML');
  const types = jsonLdTypes(blocks);
  const need = (t) => !types.includes(t) && fail(path, `missing JSON-LD ${t}`);
  if (path === "/") ["Organization", "MedicalBusiness", "WebSite"].forEach(need);
  else if (!noindexExpected) need("BreadcrumbList");
  if (path.startsWith("/about/members/")) need("Person");
  if (path.startsWith("/services/") && !noindexExpected) need("Service");
  if (path === "/resources/faq") need("FAQPage");
  if (noindexExpected && blocks.length) fail(path, "noindex page should not carry JSON-LD");

  // --- images ---
  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = img[0];
    for (const attr of ["alt", "width", "height"])
      if (!new RegExp(`\\s${attr}=`).test(tag)) fail(path, `<img> missing ${attr}: ${tag.slice(0, 80)}`);
  }
}

// --- sitemap + robots.txt ---
const sitemapFile = join(DIST, "sitemap.xml");
if (!existsSync(sitemapFile)) fail("sitemap.xml", "missing");
else {
  const urls = [...readFileSync(sitemapFile, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const url of urls) {
    const path = url.replace(SITE, "") || "/";
    const file = join(DIST, path === "/" ? "index.html" : `${path.slice(1)}.html`);
    if (!existsSync(file)) fail("sitemap.xml", `${url} has no prerendered file`);
    else if (/name="robots"[^>]*noindex/.test(readFileSync(file, "utf8"))) fail("sitemap.xml", `${url} is noindex`);
  }
  console.log(`sitemap.xml: ${urls.length} URLs`);
}
const robots = join(DIST, "robots.txt");
if (!existsSync(robots)) fail("robots.txt", "missing");
else if (!/^Sitemap:\s*https:\/\/tempoaba\.com\/sitemap\.xml/im.test(readFileSync(robots, "utf8")))
  fail("robots.txt", "does not reference the sitemap");

// --- redirects: a catch-all 200 would turn real 404s into 200s ---
const redirects = join(DIST, "_redirects");
if (existsSync(redirects)) {
  for (const line of readFileSync(redirects, "utf8").split("\n")) {
    const parts = line.trim().split(/\s+/);
    if (!line.trim() || line.trim().startsWith("#")) continue;
    if (parts[0] === "/*" && /^200/.test(parts[2] ?? ""))
      fail("_redirects", `catch-all rewrite would turn 404s into 200s: ${line.trim()}`);
  }
}

// --- web manifest ---
const manifestFile = join(DIST, "site.webmanifest");
if (!existsSync(manifestFile)) fail("site.webmanifest", "missing");
else {
  const m = JSON.parse(readFileSync(manifestFile, "utf8"));
  if (!m.name) fail("site.webmanifest", "missing name");
  if (!m.short_name) fail("site.webmanifest", "missing short_name");
  if (!m.icons?.length) fail("site.webmanifest", "no icons");
  for (const icon of m.icons ?? [])
    if (!existsSync(join(DIST, icon.src))) fail("site.webmanifest", `icon not found: ${icon.src}`);
}

console.log(`Checked ${htmlFiles.length} HTML pages.`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n` + problems.map((p) => `  - ${p}`).join("\n"));
  process.exit(1);
}
console.log("All SEO checks passed.");
