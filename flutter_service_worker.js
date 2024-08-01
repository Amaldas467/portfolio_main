'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a17a7e3c4a3541e23c0f8d329778833d",
"assets/AssetManifest.bin.json": "e7077f58f43bc23ea1fa76cc0fe65d75",
"assets/AssetManifest.json": "4af69f5d6bd6599615460ecaecc3bec4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/amaldasdev.png": "a1ae31e09696cc03047a398fd8e70042",
"assets/assets/images/ddstechvira.png": "e8468c1307955ea1f2e64bb5b3f14a80",
"assets/assets/images/flutterscope.png": "bf9d96f9660b19b398e0b02316f65523",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/logo.jpg": "9cf01aef5a220c54dcdd39a7e79a7c6b",
"assets/assets/images/logo1.png": "fb80a69aeb2f559e6a1aae532e49032e",
"assets/assets/images/logo2.png": "eb1620f133820d29c94b7f5d9085f2fb",
"assets/assets/images/luminar.png": "415c4812cafa901ff7b0a747b9d47bc3",
"assets/assets/images/mlsa.png": "ac77090e37e75814439d7134e6f38d28",
"assets/assets/images/mms.png": "a8433784455e9ee9315e59d1fc1e1357",
"assets/assets/images/nibm.png": "b0842646385fb6105a447c069b668579",
"assets/assets/images/phone_frame.webp": "f25e231ab5e53749b8e1b915cb30cb79",
"assets/assets/images/project/screenshots/expense_tracker/expense_tracker_add_record.png": "6b2026582d888156c845a978bc486b02",
"assets/assets/images/project/screenshots/expense_tracker/expense_tracker_summary.png": "9d61947a96ecdfc8827f1e1321b75e5d",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_cart.png": "53369dcc1c0eb2fbdf12db32462dddb4",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_categories.png": "7d838be62e1f80a732abd376ffa3fdf6",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_checkout.png": "30a7bec40b7c60e7b1f712ff10e53a5e",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_favorites.png": "a9b5945754bd6e32d5e47a92a22ba8f2",
"assets/assets/images/project/screenshots/grocery_store/grocery_store_home.png": "8ef7818859dee05e607077927039afaf",
"assets/assets/images/project/screenshots/grocery_store/Screenshot_1718776012.png": "c0936860be41f04024c8f2db1d56a36c",
"assets/assets/images/project/screenshots/instagram_ui/instagram_account_selection.jpg": "148db175744fc4337431f8fc0ff84bfd",
"assets/assets/images/project/screenshots/instagram_ui/instagram_home.jpg": "0415c2ddd7a54664943c3c69cf10f685",
"assets/assets/images/project/screenshots/instagram_ui/instagram_login_page.jpg": "7a7afb2f871afda5c28fa199393abdf5",
"assets/assets/images/project/screenshots/instagram_ui/instagram_search.jpg": "088327720044b7fbd615ed7434e6f580",
"assets/assets/images/project/screenshots/news_app/news_app_category.jpg": "798cafd9b4f81cf137c7c8d0dd1edc6e",
"assets/assets/images/project/screenshots/news_app/news_app_details.jpg": "90a511b744e8ac312d4ad44e231c3cd8",
"assets/assets/images/project/screenshots/news_app/news_app_drawer.jpg": "6ad75bb083125dcbfcbd309ab61777e4",
"assets/assets/images/project/screenshots/news_app/news_app_home.jpg": "43639d24407989f0dcd966283cb760df",
"assets/assets/images/project/screenshots/news_app/news_app_saved.jpg": "b4ecba7f3b51018bc84d8d898e282665",
"assets/assets/images/project/screenshots/news_app/news_app_search.jpg": "5dc7627be42d474cb5eeeab229d8b6d4",
"assets/assets/images/project/screenshots/notes_app/notes_app_add_note.png": "16739f9d27e68e995dc6c5c48f9a6c2f",
"assets/assets/images/project/screenshots/notes_app/notes_app_home.png": "7b6f95f1cb2256ff5f9be6d32312c6ee",
"assets/assets/images/project/screenshots/quiz_app/quiz_home.png": "5ac92e230a95bd833b91145ca0beff13",
"assets/assets/images/project/screenshots/quiz_app/quiz_questions.png": "2a2b176036b152bc06e5558dec2fdaa1",
"assets/assets/images/project/screenshots/quiz_app/quiz_questions_correct.png": "0bd823c1fdb383a238a6ea96ab37f248",
"assets/assets/images/project/screenshots/quiz_app/quiz_summary.png": "45bbfdf331689a048c10da26875a4e44",
"assets/assets/images/project/screenshots/todo_app/todo_app_add_Item.png": "90c46f30506560f7a43bd57ef2e006f4",
"assets/assets/images/project/screenshots/todo_app/todo_app_home.png": "d7428f4a09cf45aebd23bee1c8de1403",
"assets/assets/images/project/screenshots/zomato_ui/zomato_delivery_page.png": "b413a17c8961b494fab2f828f298507e",
"assets/assets/images/project/screenshots/zomato_ui/zomato_dining_page.png": "178d4ec5befe55cee72eb5ef7e5aa5a2",
"assets/assets/images/project/screenshots/zomato_ui/zomato_dishes_page.png": "738d100a5938d42f567cfae6dd14a3e9",
"assets/assets/images/project/screenshots/zomato_ui/zomato_dish_details.png": "83cbfec531bc610376881ba3a430248b",
"assets/assets/images/project/screenshots/zomato_ui/zomato_filter.png": "ccc391dd6102b49d8c493b1d3d1e7787",
"assets/assets/images/project/screenshots/zomato_ui/zomato_login.png": "5aff6dcf1ec823a177ec834518dc0330",
"assets/assets/images/project/screenshots/zomato_ui/zomato_menu.png": "843d18d81b1ad1a5acd108f043065cd6",
"assets/assets/images/project/screenshots/zomato_ui/zomato_profile.png": "5ee8bc697037a8ebf84c75d1aef66ea2",
"assets/assets/images/project/screenshots/zomato_ui/zomato_restaurant_page.png": "99fa0e7d3266021a4d8263d2f09617b8",
"assets/assets/images/schoologo.png": "f977cedcfe7c6bfe882ec210b97d7e50",
"assets/assets/images/sngist.png": "e6ded270776290282154294abfaadb5a",
"assets/FontManifest.json": "87de03ecc9865fb1e8d4050e8aa4cb40",
"assets/fonts/MaterialIcons-Regular.otf": "8d2912c245a70730bcd710695567a256",
"assets/NOTICES": "66a603627d8ac1e5c46472bb157d7c6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9f7753bfe3a880e6e2088c1f8f9da415",
"icons/apple-touch-icon.png": "709f9d7ff23a2ae2d93af4202849ad42",
"icons/favicon.png": "aeda2397e0a8fb3735548e8a8ee16b29",
"icons/icon-192-maskable.png": "ab4377767208ce642a5ca62a90c6f3a1",
"icons/icon-192.png": "ab4377767208ce642a5ca62a90c6f3a1",
"icons/icon-512-maskable.png": "b67e5abced0aa3c6a845ed277c0f0a95",
"icons/icon-512.png": "b67e5abced0aa3c6a845ed277c0f0a95",
"index.html": "cac89a7dbe9c45053e366e57aa664ae5",
"/": "cac89a7dbe9c45053e366e57aa664ae5",
"main.dart.js": "0dec892a68669dcc7f7ad01c9e8c7c75",
"manifest.json": "2a2d5be403c80f2b4e9ed7e61f93dfdd",
"version.json": "86b1fdb296af4bcd299ac85078f1500d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
