const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
export const u = (p = '') => base + String(p).replace(/^\//, '');
