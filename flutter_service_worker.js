'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c51d058236e1a0fc2b5f3d40b11693be",
".git/config": "dc4df4627e6c88cead1b833c8733a5d8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7e8d77c7ab6cbb37b2d79ef2609499eb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f041f0bfb87fc6c8f6b359019102adc",
".git/logs/refs/heads/main": "3f300cb2c48bd78c9ca97bfbbb08a338",
".git/logs/refs/remotes/origin/main": "6736045a8fae6ec28bed7e2edc7ecee6",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/12/6376727b8076fd4d01458b2bd6bbb4e5a6f12e": "d360c81e9330ea723978036ee544c768",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/279d17cc7ee505f2cc7c606bfdf2a7ed9736a5": "d3c551fa9cc4b407f54ecccda3e80e81",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/dab8d4b87cd3f13f5ec07826edb6ea2d0557e0": "b5a03d32e3c30c415fc68adde616cbc2",
".git/objects/38/41c0d3c6bd6c7e8b5bb6144b2053ca8cfb29e1": "3c9cef1af54e7ea7fc6ed00d08c42c51",
".git/objects/39/e087961fb1efddbb39b5a1c026e1713d670f2c": "addc9edb06349765fe7cd284a0081e82",
".git/objects/3b/9b05b2da2de186c8cbb85d6e98edb8da33e6b9": "f53fd1c8e8fe96acfe2c9f20e8ad0515",
".git/objects/44/dd4eda37f1935c38d88e064a7cca3e0c88dd57": "2e74b60ae9fdc37e2d184f77a66f94c8",
".git/objects/45/84249b72bd45d026071dce8a2626f4842d823c": "6e43a0f55f03b3c1f60c79518d524b84",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/03cfb53e15b630b46937d313f8b7cc219a970b": "28badac9f58866edf297415700061550",
".git/objects/50/3920608a782c5ab1a58adaf05e754ddf29b652": "f7ae8ded5ca27b2100278953e11941d7",
".git/objects/53/1d7aaa4b8c213d2ee3771e680b05569c16b27b": "02c5c508d7492f3510156e34562f8f0b",
".git/objects/55/92b0d41f477ba5091d720bde56cac4f7ad00ff": "a005ae26459edf06a23211153823842f",
".git/objects/61/f203c560efc1b27be7560bfff109ecc15bce97": "a02959436384fad98bd42e816115fbc5",
".git/objects/62/21a237b68834edc92c3393f0feebc1ffb4ba18": "1fab515511a9cfc490ae9c951c1c0fa3",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/402e318d8223bf5c4ab480751f2ebe621efa5a": "7b0f7f1f92c6d86ca13bf049e745765f",
".git/objects/68/4e3aab4a3b9d122b8a0a6fa8e0423349c24b52": "b3d54f07037b6a6a151e7484ebae29f3",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/b042db622e4ba04c756c80dcf3725caf7c10d5": "a0628ff1eb9e9891756d1f14c23e165d",
".git/objects/7f/b8c89257bc6303a923f9fd8ab2419df373d0a6": "6f81dd035f2534193aea5751814b43ef",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/44d2793c75b4f08a96cfcdb3807acdb6a07d55": "a3b59237bbf958a1b0ebac21953fd70d",
".git/objects/88/d8a801b5f8a73d408223741820883c1029a015": "c3e9188779a1f3be71fbe44f98d1d104",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/d310a27f119dc2c71244edf672c9a0fbb84c42": "56da175f3f3fb194ffac21b953b076b4",
".git/objects/8c/e3cf09d9e86dcd580310c1d6d875e71f41eff5": "934f9a10fcbf6224cce4804493d1ce6a",
".git/objects/92/de63261eb57c248056d436633356a0bb4f6d10": "e579db53dc1b5da3ccaa52530e5cea52",
".git/objects/96/7008cbf5df819254f071c709b9c31babb06678": "0d1e9c4435542b7b15f43567ac0c3a85",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/d31088d075fc3e6f6a40dc903ec61ec3706b36": "b7f9bb07737c8afd2ec3dda0572d3540",
".git/objects/9d/54080207df8c3fd543de2084b266ddd445b726": "07dc799cc33f4f52775b4311e5630429",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a7/9654e516f068114e25ff4ece7f5cacfff016f4": "00f537b2cbfa6faef41ac6393bb97538",
".git/objects/a7/bd86a59fb68729f15bee8956c7e0fe9f4f2b49": "ec14c2889a547ea07593c83aca386ecb",
".git/objects/ab/65f82da927cb1b722a8b66af77f65cd4f1c6bc": "4e018a10bab77d619bfdd398ccb55a26",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/148c2d2d33d9c3a0928da12e39c0240346792f": "8d92ee078b69a43a62b8aa85ad47f5e0",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b6/423511e57d2dcfeaa6ffa62f5aa8be0e6eef26": "2c2472ff08a73fb55d3c629ed2d773b5",
".git/objects/b9/e737ac1c367abde7f5ad33841e7c806ce41586": "8b64f33050f9a2518d9f73c63b93eec6",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/405d4b4062ca525f5ea6fe9a64e0dec04e0f71": "ed5fc0152d216bf14ef46ffb48fe27be",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/d75b6ff4952a5cba3d425b51f1c177bfd474be": "e4bb02b556cc952c8b7e5cddb3c388b5",
".git/objects/d7/1a1aeee61417e6f59dd348a9ea3aa4741b6a91": "02473eb1cd91b64e0aa4e3299116212d",
".git/objects/dc/f8517662cba6dc3458d56b7fd0b87cfa02c4aa": "2aaf807061c576cbfc9af6cd540d13af",
".git/objects/dd/d5a65b0c3607dcb85a96035be3ad60db4351fd": "a329362cfb7340ddbc4faee04f85e581",
".git/objects/de/8a7f0970e27bad6595fce49f520dacb12a9940": "f91d1a05128ea91a579b4498b967c41c",
".git/objects/df/3ef8efd23b68d3c93d594f9e607853655ad3de": "9c13e4438cae4fb1acba75c17bc77431",
".git/objects/e2/30a0ad162e979bbca5956525b573e805b527db": "7eb7c8901ca5826e452aec7b57d8ecef",
".git/objects/e2/6e1bf7f3704b48628633a2d63c06e1520564e3": "f18a95fe512634ba79a24c93c0af9d4b",
".git/objects/e4/b076a9e2bf6f455e73042223ef58e29580bbc8": "f15f1f1df92a7f04776fbdbdb88fc79a",
".git/objects/e9/67a278060242f25bdd2b9cb981c08f98887875": "265ff58d7c1c1894d5dd79272e76803a",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/ac1a6a94a543056241698730ec11e63ff511db": "29c66a9fb0ebeb9de0dd0eac72f99f27",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/fe9efa351ad4c0e29253dcd24a24ee7fa05045": "be48dc2a7c35b31e65a31dc8e09b309a",
".git/refs/heads/main": "53095fdf0cc06d971bcc9ade058044df",
".git/refs/remotes/origin/main": "53095fdf0cc06d971bcc9ade058044df",
"assets/AssetManifest.bin": "e5c3006e2a0dc6c9b3a1a00dd10b07bd",
"assets/AssetManifest.bin.json": "c81e2e6d020acf9caec6d5c77dfdec00",
"assets/AssetManifest.json": "f6ecbbd19402085b28f8f0ba62e855ac",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/background-code-grey.png": "f53957df2df4bfb7383c53d23999876f",
"assets/assets/images/background-code-grey2.png": "f307f83f4cd64d6d8c1b66fa94b7f0c6",
"assets/assets/images/background-code-hitam.png": "ace5f24e8a5daf2721878d3bcb16a5b6",
"assets/assets/images/background-code.png": "b3bcf1304c93eed9ef5c9f9e36aeaeda",
"assets/assets/images/berlindo.png": "3045c0818844cc8eb8a4de13e0b0d583",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/gdsc.png": "c24413ca8ad9a9d9184c3a343db0a44c",
"assets/assets/images/humic.png": "8925c7e4cea5faa81e4f067c51eb7ced",
"assets/assets/images/Profile.jpeg": "ded44ef48bf74ba1c9fbdaec84be764f",
"assets/assets/images/redsystem.png": "f2bfd36a7eb7a424fd620a75ed760bf2",
"assets/assets/images/sinovatif.png": "69f25a1d479b9ab658a278e64839c53b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7a63661c273c1862baabb628229138c2",
"assets/NOTICES": "71fea14198e594e68b7a37222a9eae96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "29b75dca8edda702d7406b9a6edeff50",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "3012cc2be6bbb9599064f3e5169e1d31",
"icons/Icon-192.png": "29b75dca8edda702d7406b9a6edeff50",
"icons/Icon-512.png": "29b75dca8edda702d7406b9a6edeff50",
"index.html": "9363c201135d702839f4db4cb776a420",
"/": "9363c201135d702839f4db4cb776a420",
"main.dart.js": "5a17dc3ff8d4ab491c36c49ccbfb1edf",
"manifest.json": "d8345fa724cd9d2de77418842f5e3cbd",
"version.json": "7004e2cb92b2cc9105a3d153242c31af"};
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
