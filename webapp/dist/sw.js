//Service worker file


//Cache the weekend deals production
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/logo.png',
    '/destination-images/Dublin.jpg',
    '/destination-images/Rome.jpg',
    '/destination-images/Amsterdam.jpg',
    '/destination-images/Athens.jpg',
    '/destination-images/Barcelona.jpg',
    '/destination-images/Berlin.jpg',
    '/destination-images/Brussels.jpg',
    '/destination-images/Budapest.jpg',
    '/destination-images/Istanbul.jpg',
    '/destination-images/Lisbon.jpg',
    '/destination-images/Malta.jpg',
    '/destination-images/Oslo.jpg',
    '/destination-images/Paris.jpg',
    '/destination-images/Prague.jpg',
    '/destination-images/Stockholm.jpg',
    '/destination-images/Warsaw.jpg',
    '/css/app.60d39da2.css',
    '/css/chunk-vendors.d2750c2b.css',
    '/js/app.2b117161.js',
    '/js/chunk-vendors.4013ae1d.js',
    'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic%7CMaterial+Icons',
    'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
    'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2',
    'https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    'https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2',
    'https://rosian.org/images/rosian-logo-with-text-horizontal.gif',
    'https://fonts.gstatic.com/s/materialicons/v42/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                //console.log('Opened cache - adding urls to cache');
                return cache.addAll(urlsToCache);
            })
    );
});



self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        console.log('Cache hit');
                        return response;
                    }
                    console.log('Cache miss: ', event.request['url']);
                    return fetch(event.request);
                }
            )
    );
});