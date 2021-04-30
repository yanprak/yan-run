const STATIC_CACHE_NAME = 'static-yan-run-v1';
const DYNAMIC_CACHE_NAME = 'dynamic-yan-run-v1';

const URLS = [
  '/',
  '/index.html',
  '/bundle.js',
];

self.addEventListener('install', event => {
  console.log('install');
  event.waitUntil(async () => {
    try {
      const cache = await caches.open(STATIC_CACHE_NAME);
      return cache.addAll(URLS);
    } catch (e) {
      console.log('Something went wrong')
      throw e;
    }
  });
});

self.addEventListener('activate', event => {
  console.log('activate');
});

self.addEventListener('fetch', event => {
  const { request } = event;
  event.respondWith(cacheData(request));
});

async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (error) {
    return cache.match(request);
  }
}

async function cacheData(request) {
  const cachedRequest = await caches.match(request);
  return cachedRequest || networkFirst(request);
}
