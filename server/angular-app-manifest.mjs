
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sharvarilimbkar.github.io/sharvaris-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sharvaris-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/sharvaris-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/sharvaris-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/sharvaris-portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sharvaris-portfolio",
    "route": "/sharvaris-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2452, hash: 'c955076acf030318911b4d1f9d956bffb0693a20f5394ef67063db6922033e9f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1378, hash: 'e085786af3e177c9078d80127ccccdc0c8decd0a414a32cf1f3a4e7ded41e96e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8944, hash: '50b8bcf3bc36a9b7bfb5ce833768d9145463ae18ea943f6395694fb4f276ab02', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 5882, hash: '0f1f0d05081ce212bda0a60f674c25a66b190e437793aa7f40efda5be994185b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7834, hash: '0305a63efb9d4c00550650269ada3d774f2808bd069ff84c91fd67dadcc2dfda', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 5773, hash: '04f4438f4e5ea29acdab15fdc80f5d430c45ebcee0682ce24299419c6b1b6595', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-SBP7AWLN.css': {size: 78227, hash: 'fa6OTdvdeDM', text: () => import('./assets-chunks/styles-SBP7AWLN_css.mjs').then(m => m.default)}
  },
};
