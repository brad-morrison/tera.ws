
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/brad/Documents/GitHub/tera.ws/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/brad/Documents/GitHub/tera.ws/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/brad/Documents/GitHub/tera.ws/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/brad/Documents/GitHub/tera.ws/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Users/brad/Documents/GitHub/tera.ws/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/brad/Documents/GitHub/tera.ws/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Users/brad/Documents/GitHub/tera.ws/src/templates/using-dsg.js"))
}

