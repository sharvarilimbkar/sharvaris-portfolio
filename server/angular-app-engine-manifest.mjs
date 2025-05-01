
export default {
  basePath: 'https://sharvarilimbkar.github.io/sharvaris-portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
