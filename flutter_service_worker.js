'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "0f05cbc12776c1ffb296c5b92991f73c",
"/": "0f05cbc12776c1ffb296c5b92991f73c",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "0958e650119eb85b078ff9b62549bea9",
"version.json": "9bad8e5cc3d8a4b9aaa804a339f6b8b6",
"splash/style.css": "723a00e30c55e2281aac9508485bee6b",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/light-4x.png": "6ab0ce607930cc799f2de1c285a497cc",
"splash/img/light-background.png": "15eac50bb7d09d254a0db36ef18de780",
"splash/img/light-2x.png": "801cd883d14e4dc912dcdd284b00f5b2",
"splash/img/dark-2x.png": "801cd883d14e4dc912dcdd284b00f5b2",
"splash/img/dark-background.png": "15eac50bb7d09d254a0db36ef18de780",
"splash/img/light-1x.png": "48f422478ec04a4bfd99a5aeff6b0bc9",
"splash/img/dark-4x.png": "6ab0ce607930cc799f2de1c285a497cc",
"splash/img/dark-1x.png": "48f422478ec04a4bfd99a5aeff6b0bc9",
"splash/img/light-3x.png": "cda4ce4b3b429839e78e7463f88b5371",
"splash/img/dark-3x.png": "cda4ce4b3b429839e78e7463f88b5371",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"manifest.json": "5c1754bbccece9bdb582390bec8cca57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "f4b29e0d35c00bc83f22ad61ba508119",
"assets/NOTICES": "3609ffedf9fe73fa80f6a8eae9b13025",
"assets/FontManifest.json": "4870e817e2d0fd1c43b2574be41496f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "8e9ccd2ee1b1d845d2afcb9680ae16ea",
"assets/assets/fonts/OpenSans-Light.ttf": "924463105fc8bbe8fe54e41fd87d4a0e",
"assets/assets/fonts/OpenSans-Medium.ttf": "cdda6d75a5d6419167aeff00b6cd514a",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "78563f4191948ba3d11966313f69c812",
"assets/assets/fonts/OpenSans-Regular.ttf": "dd7ca4f5cf9c67d1d028da5c01d67884",
"assets/assets/fonts/OpenSans-Bold.ttf": "2febb6f94bce387fc39728d1920bc61f",
"assets/assets/i18n/in.json": "33492f86a29f03a303f54cabcadf41b3",
"assets/assets/i18n/en.json": "a8f759de480132bb12092bbf55cfe8a0",
"assets/assets/images/islamic-icon-1.png": "bbcba4c2399c48008ec3680ae48b5ffb",
"assets/assets/images/islamic-icon-2.png": "939949d1363ab4cd99e88cb9f7c1eb13",
"assets/assets/images/surah_frame.png": "9751f397f7ca4f7184c169583427aa88",
"assets/assets/images/juz_frame.png": "474acbd692fc4315c77dbe3f97a884e2",
"assets/assets/images/islamic-icon-3.png": "81b274a2d872ecf9a76c8fdaa026c876",
"assets/assets/images/quran-calligraphy.png": "64066c3798f27db9e8daff16503d6920",
"assets/assets/images/islamic_vector.png": "6f110dc2c961de2065c6de16d5e0e877",
"icons/apple-icon-57x57.png": "5e5f4c3c5d0b5a61b49abc1ef434fe16",
"icons/ms-icon-150x150.png": "f332c544145656fb5143ee25647ad063",
"icons/favicon-16x16.png": "b71491dd96862db504d294018d2b2afa",
"icons/apple-icon-precomposed.png": "e1d8fc56e287e853904037c61a2eb1a1",
"icons/ms-icon-310x310.png": "18b7f55bf816cc3665cbbc697fc10161",
"icons/ms-icon-70x70.png": "7bf3897fa44e721c70c8ced37a3582ac",
"icons/apple-icon-76x76.png": "224590de013f9fec998c7da97f74e0ab",
"icons/apple-icon-72x72.png": "0dda98013f95b22e78a352636e318bf6",
"icons/apple-icon-180x180.png": "85f1e5a0e562ed5bd7ac65046df6c832",
"icons/favicon-32x32.png": "705c4598e650d095f96f3872c42462d0",
"icons/android-icon-96x96.png": "dedaa93cd53e878893087749a79f626f",
"icons/apple-icon-114x114.png": "ae4fec6fd7ee5fa42fabc6fc316754e3",
"icons/favicon.ico": "87d72b46a02889d0d093d5615a6ce12f",
"icons/android-icon-192x192.png": "73a1a4c24b4c7eb683b1a202d24ea858",
"icons/apple-icon.png": "e1d8fc56e287e853904037c61a2eb1a1",
"icons/android-icon-36x36.png": "a5cddbab68c30ed04419a3b27f18cbb8",
"icons/apple-icon-120x120.png": "f55d0a7cbcc5a45a945d136ad8364b81",
"icons/android-icon-144x144.png": "43ff6df530866108e99fcf1336dbefb8",
"icons/apple-icon-60x60.png": "98a1cf404bd95ecf782f76e3da55b25c",
"icons/favicon-96x96.png": "dedaa93cd53e878893087749a79f626f",
"icons/android-icon-72x72.png": "0dda98013f95b22e78a352636e318bf6",
"icons/apple-icon-152x152.png": "ce7489bab95583bb9a35c0ac0bae168d",
"icons/apple-icon-144x144.png": "43ff6df530866108e99fcf1336dbefb8",
"icons/ms-icon-144x144.png": "43ff6df530866108e99fcf1336dbefb8",
"icons/android-icon-48x48.png": "b97ecef25c3f31ac9a752fab2e60f34f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
