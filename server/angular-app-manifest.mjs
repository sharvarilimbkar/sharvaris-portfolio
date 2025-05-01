
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sharvaris-portfolio/',
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
    'index.csr.html': {size: 2419, hash: 'ff160d36865b5cbfab27088e07952f05ff3721c01ed454efe794a78dbd3852a4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1345, hash: '0a3851cf2841ce8f9f54dfd48505accdfa91af329adfc8101b44d334dc1cd0cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8911, hash: 'f01ea2e909bbf1e76bd06b5f0b94d2dbb4a4a48f05a36937720ba409430125fe', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7801, hash: 'd4d9f8af477bd431583466fc01fdc28c991059096027deb8de53e23debb19170', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 5740, hash: '49580ec2c7d174e7961fdf7ac34128e821d56ebf651f83e7c4974e9d898c9fee', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 5849, hash: '31c0c83bb5ed3d3fa5e5ad9de8e50e48a4fd73d76a07da858128a9cea28dcf19', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-SBP7AWLN.css': {size: 78227, hash: 'fa6OTdvdeDM', text: () => import('./assets-chunks/styles-SBP7AWLN_css.mjs').then(m => m.default)}
  },
};
