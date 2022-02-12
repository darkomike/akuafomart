'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "08ec1e5ed7d91bd96950dc229f1cecb4",
".git/logs/HEAD": "7c7a9e89dad872ab78dc8cddf15b4bc2",
".git/logs/refs/remotes/origin/master": "e64e664c8d6c85819f71af05fd70fb1a",
".git/logs/refs/heads/master": "7c7a9e89dad872ab78dc8cddf15b4bc2",
".git/objects/8e/4a67687aabaad44d45bba2f99b4715c23b86f3": "caa0bed78bcdb58ebfce30a0d2d6c1ed",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/72/5ee416ea12babaa69f812e3360ce68faa064fd": "31202ac3599410a9714d1d2985b55512",
".git/objects/1e/276a4e3b90868d3e687cb5dae8a794cf2b244f": "2ae1889efad240d54ce36afcabc26f93",
".git/objects/1e/6af470edeee08c5a80cf839cd2d7738f423176": "0e4e7fb446cd1767f58b5f1ae83e1e44",
".git/objects/f3/ded168830742a6e3b98c5c0f0c8dbc9ea743f0": "99687cb0adb52614a19a3beaa4fc5abf",
".git/objects/cc/3523e83960030273273ad37e645c84ff4b7c48": "b370895157c3446ddadb3fdf05be94ed",
".git/objects/c6/57e6cbcaeb9f02a65779857aa87a2aa7e588ab": "52dca262c604c70d5436246e818f1c0c",
".git/objects/c6/0e87f2ce4b87fd9a1f4ce70bba2fa1a6f74681": "f9593fbd87a80877ac2301bd818b80ab",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/2c/a33d5fbc7c5de59801a2e25d112d73ca9375aa": "bf6181197c3888e02806fc88931cbd1c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/98/0edda4ae738c9e3a55dfae6d429ba991ab43e6": "d1961ba9cfbc64daf9395ec75f302814",
".git/objects/47/26bcad350ad917ac113212c8fcb6b314592d64": "516379cac540f77f083d9834bd14d118",
".git/objects/46/bba24c6c5e1d7e873fd1c538f3778fd641a299": "398b757b9c6af6339ad11a21bb4554b8",
".git/objects/ac/2e271d70d37b17e58d94101b0bc968156fa564": "714861a49e993808c08898d265db9da4",
".git/objects/8f/5b0bf5b96401572e51934dc63646737c402578": "28c9e61c40cc71856fed31bada500cce",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/7a/f2ba97a03109d3c16f812c51611ab337f2d49e": "e34cebbbdb06a40d646739541062f56c",
".git/objects/5e/bad7777a2f175feea8c63476d625177ddcfa92": "fbd2aa5066d8002f76b0854d1a4d6445",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/38/d4cff9329a7c8cba1ebc7c8f936a38ddd92082": "4f860963e25a0323db1d2308257f6f96",
".git/objects/d4/b02c5cecca6a496b57cf7be5350fa79b1964e9": "87e65bd99a88e7c3ca08f4a2609fc14e",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f8/27cc63714dbad3ca80067e33dc415c345766e3": "b510f931e610a6fdd9eb24074c597cb1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/cd/b88584a9bafb6e5c1fc0567f6e4c300ab6415a": "6dd7b8a824ee13f73d63d74bd5d62a5e",
".git/objects/c8/bb16beae6d5808cce9a7d14b3cc243ce6187dc": "a2a38b8cfc93436a12b69141f3d8d100",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/01/de1871c8b5707a4b2b8717d8a583af66bfb0ff": "e9f532732c15e4ac66142ee287172fe2",
".git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/13f12f243cc24aa7b2e5535a9c0dbab18e0adc": "372d1d4d8ba4b8a04e1ae2f8c11bf027",
".git/objects/a5/b5ba32b2b614380c0f606ded8f0c4edc67a06b": "c8509419bedf87c61b1202d34952aad2",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/17/a01226f81c2dfdd6e19f5ddba398f46f344bf7": "3cd2b1497d8e2704866323e1e9cc7411",
".git/objects/f0/622f5d25a3a6a2fd92ce2b636a0e2f471acde9": "b2c34d3e7f1659db3fbc776ce3234d3b",
".git/objects/87/4be753abcb72b551fa69d486e5f77adc8e56b7": "3d2b51efe79fc9f6caf9dac26775b305",
".git/objects/b6/c5c9a4893c7cbee996f1b6cd7c6578454429c4": "2037736cc45c3e93a0bfeb1d67c220db",
".git/objects/37/0c3a146c970fea43e03d8092a4cf2a434b2b99": "63116f5bcf4ad9841dcd2e896730e313",
".git/objects/55/f63ca3df3f9ec50a534b2757f7151f750ec12c": "5ffc3df19faa86cb72494320e5c49854",
".git/objects/55/2fd15c7c956875bd0705f90cbc0ae5967955d5": "7e2f679923dfb3cd74421f6f7f493517",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/bb/87eaf96bfbc17be21cfb67392c6b4a52d75d95": "53cf21da1b2bd31f8139978fbc1388ce",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/56/0bb2afa713b92b5b67e4d4745aac4c7a80fd86": "04085a551004fc4cf5cfcfa8e54dc742",
".git/objects/6f/d5d9b584b22a2810a31544d6304f98a2d57232": "b3982c5ed3600178d853b675369cbef2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/config": "b1277e37c784204f0bb10b9986ca2566",
".git/index": "e9746668ffe1f775ac8036cc5c435ccb",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "4b682c0b57423afb3a202e212e7de720",
".git/refs/heads/master": "4b682c0b57423afb3a202e212e7de720",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/workspace.xml": "10ca435d1f91c463dfcf9c6fb24e4ede",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
"main.dart.js": "a0fcba1658750de8d2904df51f543d89",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"img/welcome.png": "26f523072fa51ad66c0ec621ca24ffff",
"index.html": "db71f2c2cec42a6f39c6e9299ac283ac",
"/": "db71f2c2cec42a6f39c6e9299ac283ac",
"manifest.json": "73d7c865e492b1727f2bcbebea2a7a30",
"style.css": "01ddf5811b8593a3d721ede630e064d4",
"version.json": "695088a0330e52e4d4c5d90b10da99eb",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "2ea67a76909729b72317dc50dee7c25a",
"assets/NOTICES": "afee7019eb211dd7436f9543561473e6",
"assets/AssetManifest.json": "87fcd4b96b150b4204b8cc323efaaa55",
"assets/assets/fonts/Fugaz_One/FugazOne-Regular.ttf": "85d7f13eca6e725d74f84ef0ce5f5789",
"assets/assets/fonts/Lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lato/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/Lato/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Quicksand/Quicksand-Medium.ttf": "db0ad2fc713ab72ea682687be4bd1021",
"assets/assets/fonts/Quicksand/Quicksand-Bold.ttf": "05fcffc56e72bc6889ecea672078dc4f",
"assets/assets/fonts/Quicksand/Quicksand-Regular.ttf": "6cbafd2cb6e973c96ade779edc39c62a",
"assets/assets/images/farm.jpg": "915302dec405b9e2a1a27456d1bd09fc",
"assets/assets/images/drones.jpg": "05b36f212c43a7c1a3b13339216b53b6",
"assets/assets/images/portriat%2520girl.jpg": "ac6902b1bab046711ee43581307ba4d4",
"assets/assets/images/harvesting-wheat.jpg": "ac5822bf24b63135527159b0b713fff5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
