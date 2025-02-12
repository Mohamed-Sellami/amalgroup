
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: 'https://mohamed-sellami.github.io/amalgroup/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https:/mohamed-sellami.github.io/amalgroup"
  },
  {
    "renderMode": 2,
    "route": "/https:/mohamed-sellami.github.io/amalgroup/about"
  },
  {
    "renderMode": 2,
    "route": "/https:/mohamed-sellami.github.io/amalgroup/services"
  },
  {
    "renderMode": 2,
    "route": "/https:/mohamed-sellami.github.io/amalgroup/products"
  },
  {
    "renderMode": 2,
    "route": "/https:/mohamed-sellami.github.io/amalgroup/projects"
  },
  {
    "renderMode": 2,
    "route": "/https:/mohamed-sellami.github.io/amalgroup/contact"
  },
  {
    "renderMode": 2,
    "route": "/https:/mohamed-sellami.github.io/amalgroup/clients"
  },
  {
    "renderMode": 2,
    "redirectTo": "/https://mohamed-sellami.github.io/amalgroup",
    "route": "/https:/mohamed-sellami.github.io/amalgroup/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 525, hash: '0c30f50d377ee1256963befaaa3d2535f40f84d230c95fde7da05fff847e0787', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: '4d1ffc14e1ee38471bef11ccbfd01c4058c87a52cd2bf9e29783c4f40d0f6f5c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'https:/mohamed-sellami.github.io/amalgroup/index.html': {size: 10657, hash: '78c35e82db8e54cfb7cfc377f4867447ddc75434ee037400d9cfd371b1988a51', text: () => import('./assets-chunks/https:_mohamed-sellami_github_io_amalgroup_index_html.mjs').then(m => m.default)},
    'https:/mohamed-sellami.github.io/amalgroup/products/index.html': {size: 10657, hash: '78c35e82db8e54cfb7cfc377f4867447ddc75434ee037400d9cfd371b1988a51', text: () => import('./assets-chunks/https:_mohamed-sellami_github_io_amalgroup_products_index_html.mjs').then(m => m.default)},
    'https:/mohamed-sellami.github.io/amalgroup/about/index.html': {size: 10657, hash: '78c35e82db8e54cfb7cfc377f4867447ddc75434ee037400d9cfd371b1988a51', text: () => import('./assets-chunks/https:_mohamed-sellami_github_io_amalgroup_about_index_html.mjs').then(m => m.default)},
    'https:/mohamed-sellami.github.io/amalgroup/projects/index.html': {size: 10657, hash: '78c35e82db8e54cfb7cfc377f4867447ddc75434ee037400d9cfd371b1988a51', text: () => import('./assets-chunks/https:_mohamed-sellami_github_io_amalgroup_projects_index_html.mjs').then(m => m.default)},
    'https:/mohamed-sellami.github.io/amalgroup/contact/index.html': {size: 10657, hash: '78c35e82db8e54cfb7cfc377f4867447ddc75434ee037400d9cfd371b1988a51', text: () => import('./assets-chunks/https:_mohamed-sellami_github_io_amalgroup_contact_index_html.mjs').then(m => m.default)},
    'https:/mohamed-sellami.github.io/amalgroup/clients/index.html': {size: 10657, hash: '78c35e82db8e54cfb7cfc377f4867447ddc75434ee037400d9cfd371b1988a51', text: () => import('./assets-chunks/https:_mohamed-sellami_github_io_amalgroup_clients_index_html.mjs').then(m => m.default)},
    'https:/mohamed-sellami.github.io/amalgroup/services/index.html': {size: 10657, hash: '78c35e82db8e54cfb7cfc377f4867447ddc75434ee037400d9cfd371b1988a51', text: () => import('./assets-chunks/https:_mohamed-sellami_github_io_amalgroup_services_index_html.mjs').then(m => m.default)}
  },
};
