/// <reference types="vite-react-ssg" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { SITE_URL, sitemapPaths } from './src/seo/routes'

// Pretty URLs: "/about/mission" is served from dist/about/mission.html, "/" from dist/index.html
const htmlFileFor = (path: string) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`)

// Writes dist/sitemap.xml from the route registry in src/seo/routes.ts and
// warns if a listed URL has no prerendered page.
const writeSitemap = () => {
  const dist = resolve(process.cwd(), 'dist')
  const paths = sitemapPaths()
  const missing = paths.filter((p) => !existsSync(resolve(dist, htmlFileFor(p))))
  if (missing.length) console.warn(`[sitemap] No prerendered page for: ${missing.join(', ')}`)
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = paths
    .map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  writeFileSync(resolve(dist, 'sitemap.xml'), xml)
}

export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // Render the catch-all route to dist/404.html; Netlify serves it with a 404 status for unknown URLs
    // /careers is handled by a server redirect (public/_redirects), so it gets no HTML stub
    includedRoutes: (paths) => [...paths.filter((p) => p !== '/careers'), '/404'],
    // index.html keeps a default <title> and description for dev/fallback use. In prerendered
    // pages the per-route tags (data-rh) replace them, so drop the defaults to avoid duplicates.
    onPageRendered: (_route, html) => {
      if (!html.includes('<title data-rh')) return html
      html = html.replace(/<title>[^<]*<\/title>\s*/, '')
      if (/<meta[^>]*data-rh="true"[^>]*name="description"|<meta[^>]*name="description"[^>]*data-rh="true"/.test(html)) {
        html = html.replace(/<meta name="description"(?![^>]*data-rh)[^>]*>\s*/, '')
      }
      return html
    },
    onFinished: writeSitemap,
  },
  // Prerendering runs in Node; bundle these so their extensionless ESM imports resolve
  ssr: {
    noExternal: [/^@mui\//, /^@emotion\//, "react-vertical-timeline-component"],
  },
})
