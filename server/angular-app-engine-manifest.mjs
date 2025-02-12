
export default {
  basePath: 'https://mohamed-sellami.github.io/amalgroup',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
