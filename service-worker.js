importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");importScripts("precache-manifest.24acf3153ea2add549f7aa6709ec714d.js");workbox.core.skipWaiting();workbox.core.clientsClaim();self.__precacheManifest=[].concat(self.__precacheManifest||[]);workbox.precaching.precacheAndRoute(self.__precacheManifest,{ignoreURLParametersMatching:[/./]});
workbox.routing.registerRoute("./",new workbox.strategies.NetworkFirst({plugins:[new workbox.cacheableResponse.Plugin({statuses:[200]})]}),"GET");workbox.routing.registerRoute(/vrmlWebWorker*.js/,new workbox.strategies.NetworkFirst({plugins:[new workbox.cacheableResponse.Plugin({statuses:[200]})]}),"GET");
