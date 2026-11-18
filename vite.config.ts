/// <reference types="vite-react-ssg" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // Render the catch-all route to dist/404.html; Netlify serves it with a 404 status for unknown URLs
    // /careers is handled by a server redirect (public/_redirects), so it gets no HTML stub
    includedRoutes: (paths) => [...paths.filter((p) => p !== '/careers'), '/404'],
  },
  // Prerendering runs in Node; bundle these so their extensionless ESM imports resolve
  ssr: {
    noExternal: [/^@mui\//, /^@emotion\//, "react-vertical-timeline-component"],
  },
})
