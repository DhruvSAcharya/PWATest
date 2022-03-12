const staticCacheName = 'site-static';
const assets = [
    '/',
    '/lib/bootstrap/dist/css/bootstrap.min.css',
    '/css/site.css',
    '/lib/jquery/dist/jquery.min.js',
    '/lib/bootstrap/dist/js/bootstrap.bundle.min.js',
    '/js/site.js?v=4q1jwFhaPaZgr8WAUSrux6hAuh0XDg9kPS3xIVq36I0',
    '/js/app.js',
    '/ServiceWorker.js',
    '/manifest.json',
    '/favicon.ico',
    '/images/windows11/Square150x150Logo.scale-150.png'
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log("data is caching");
            cache.addAll(assets);
        })
    );
    //console.log('service worker has been installed')
    
});

//change abc
self.addEventListener('activate', evt => {
    //console.log('service worker has been activated')
});


self.addEventListener('fetch', evt => {
    console.log(evt.request.method + " " + evt.request.url)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );

});