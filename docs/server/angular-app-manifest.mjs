
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/help"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5035, hash: '4228662bc45928ad43a10d5a9fb3df0361137f5f54b5094ab6c6f1ec12449046', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '2bad082b9200736e46d29db14b3c21b5f9dc820567975fffa27e83241bb7806e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14962, hash: 'da8dae0c2b2bdbad33c27f703c130555523c0019d227ecc9408839100626c7bd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'help/index.html': {size: 14109, hash: 'c2bf5631a12dfebc618b78ed240bdc331089afc7c427d79f318e166e087b8971', text: () => import('./assets-chunks/help_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
