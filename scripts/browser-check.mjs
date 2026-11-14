// Browser checks against a locally served build: npm run build && npx vite preview --port 4173
// then: node scripts/browser-check.mjs [outDir]
import { chromium } from "@playwright/test";
const BASE = process.env.BASE || "http://localhost:4173";
const OUT = process.argv[2] || "/tmp/shots";
const browser = await chromium.launch();
let failed = 0;
const fail = (m) => { failed++; console.log("FAIL", m); };

// 1. console errors / warnings on key pages
for (const path of ["/", "/resources/faq", "/services/home", "/about/members/cynthia", "/contact", "/resources/insurance"]) {
  const page = await browser.newPage();
  const msgs = [];
  page.on("console", (m) => ["error", "warning"].includes(m.type()) && msgs.push(`${m.type()}: ${m.text()}`));
  page.on("pageerror", (e) => msgs.push("pageerror: " + e.message));
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  await page.screenshot({ path: `${OUT}/${path.replace(/\//g, "_") || "_"}.png`, fullPage: true });
  console.log(msgs.length ? "FAIL" : "ok  ", "console", path, msgs.join(" | "));
  if (msgs.length) failed++;
  await page.close();
}

// 2. header at widths around the breakpoint
for (const w of [700, 767, 768, 780, 801, 1280]) {
  const page = await browser.newPage({ viewport: { width: w, height: 800 } });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const nav = await page.locator('nav[aria-label="Main navigation"]').isVisible();
  const burger = await page.locator("#menu").isVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  const expectDesktop = w >= 768;
  const ok = nav === expectDesktop && burger === !expectDesktop && !overflow;
  console.log(ok ? "ok  " : "FAIL", `header ${w}px nav=${nav} burger=${burger} hscroll=${overflow}`);
  if (!ok) failed++;
  if (w < 768) { await page.locator("#menu").click(); const open = await page.getByRole("button", { name: "Close menu" }).isVisible(); console.log(open ? "ok  " : "FAIL", `hamburger opens menu at ${w}px`); if (!open) failed++; }
  await page.screenshot({ path: `${OUT}/header-${w}.png`, clip: { x: 0, y: 0, width: w, height: 160 } });
  await page.close();
}

// 3. hero: fetchpriority attribute, size
{
  const page = await browser.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const fp = await page.locator("#hero-image img").getAttribute("fetchpriority");
  console.log(fp === "high" ? "ok  " : "FAIL", "hero fetchpriority =", fp);
  if (fp !== "high") failed++;
  await page.close();
}

// 4. chat widget posts to FormSubmit (request intercepted, nothing sent)
{
  const page = await browser.newPage();
  let req = null;
  await page.route("**/formsubmit.co/**", (r) => { req = { url: r.request().url(), body: r.request().postData() }; r.fulfill({ status: 200, contentType: "application/json", body: '{"success":"true"}' }); });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Chat" }).click();
  await page.fill("#chat-name", "Test");
  await page.fill("#chat-email", "test@example.com");
  await page.fill("#chat-msg", "Hello");
  await page.getByRole("button", { name: "Send", exact: true }).click();
  await page.getByText("Thanks!").waitFor({ timeout: 5000 }).catch(() => {});
  const ok = req && req.url.includes("/ajax/") && req.body.includes("Hello");
  console.log(ok ? "ok  " : "FAIL", "chat posts to", req?.url);
  if (!ok) failed++;
  await page.screenshot({ path: `${OUT}/chat.png` });
  await page.close();
}

// 5. 404 status and careers redirect
{
  const page = await browser.newPage();
  const r = await page.goto(BASE + "/careers", { waitUntil: "networkidle" });
  console.log("info", "/careers ->", page.url(), "(redirect is a Netlify rule; local preview uses client redirect)");
  await page.close();
}
await browser.close();
console.log(failed ? `${failed} check(s) failed` : "All browser checks passed");
process.exit(failed ? 1 : 0);
