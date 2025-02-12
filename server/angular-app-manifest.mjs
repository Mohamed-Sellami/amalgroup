
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/amalgroup/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/amalgroup"
  },
  {
    "renderMode": 2,
    "route": "/amalgroup/about"
  },
  {
    "renderMode": 2,
    "route": "/amalgroup/services"
  },
  {
    "renderMode": 2,
    "route": "/amalgroup/products"
  },
  {
    "renderMode": 2,
    "route": "/amalgroup/projects"
  },
  {
    "renderMode": 2,
    "route": "/amalgroup/contact"
  },
  {
    "renderMode": 2,
    "route": "/amalgroup/clients"
  },
  {
    "renderMode": 2,
    "redirectTo": "/amalgroup",
    "route": "/amalgroup/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 492, hash: 'e62942e2af0e3ec7a24498ee459677d21ef3bd2804dfef6808c644791cbdb5b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: 'abf818909bf5c3924993768416dfb40f6aa3134ab68d5e05f06a5ba74639afdb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6067, hash: '019a340f5ae68e71207fdb194bda4815644850324c68476321fba01e82da0790', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 7936, hash: '96c9d90bbc1cc3862edc997559003fd62a8a439c523db38f104413de592df885', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 5829, hash: '692201eab12ab4ce6401b6793f2e910cca46bcf019146215a5447dfa17d48471', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10261, hash: 'daed0da1023918c17ad39d9e973e5b50ca861f1402e6b12baba27175a97804b3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10496, hash: 'e1a689ab5299b78480e69ed6a4c8d67590f62fb686e14809bced2a70c5806e47', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'clients/index.html': {size: 5824, hash: 'ae43b8dfa8941c570bd81ef77649e58a97f7db63e4d0e5385466188c3c7cdab2', text: () => import('./assets-chunks/clients_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 5829, hash: '24bae9589f7374c86606faaa1b9881accd647f700e61b08e4e18c931d691d19c', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)}
  },
};
