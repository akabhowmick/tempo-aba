// Generates WebP copies (same pixel dimensions, quality 80) of images in src/assets that are
// larger than 150 KB. Originals are never modified or deleted. Re-running is safe: existing
// .webp files are skipped unless --force is passed.
//
//   node scripts/optimize-images.mjs           convert
//   node scripts/optimize-images.mjs --list    only list candidates
//   node scripts/optimize-images.mjs --all     include images no source file imports
//
// Logo files (names starting with "logo") are skipped so they stay exactly as designed.
// WebP keeps PNG transparency, so alpha is preserved for everything else.
import { readdir, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const ROOT = "src/assets";
const MIN_BYTES = 150 * 1024;
const QUALITY = 80;
const listOnly = process.argv.includes("--list");
const force = process.argv.includes("--force");
const includeUnused = process.argv.includes("--all");

// Only convert images that source code actually imports (matched by file name)
const sourceText = [];
for await (const f of walk("src")) {
  if (/\.(tsx?|css)$/.test(f)) sourceText.push(await readFile(f, "utf8"));
}
const sources = sourceText.join("\n");
const isUsed = (file) => sources.includes(`/${basename(file)}`);

const kb = (n) => `${Math.round(n / 1024)} KB`;
let before = 0;
let after = 0;

for await (const file of walk(ROOT)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  if (basename(file).toLowerCase().startsWith("logo")) continue;
  const { size } = await stat(file);
  if (size <= MIN_BYTES) continue;
  if (!includeUnused && !isUsed(file)) continue;
  const out = file.replace(extname(file), ".webp");
  if (listOnly) {
    console.log(`${kb(size).padStart(9)}  ${file}`);
    continue;
  }
  if (existsSync(out) && !force) continue;
  await sharp(file).rotate().webp({ quality: QUALITY, alphaQuality: 90 }).toFile(out);
  const { size: outSize } = await stat(out);
  before += size;
  after += outSize;
  console.log(`${kb(size).padStart(9)} -> ${kb(outSize).padStart(8)}  ${out}`);
}
if (!listOnly && before) console.log(`\nTotal: ${kb(before)} -> ${kb(after)}`);
