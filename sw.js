if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),l={module:{uri:t},exports:o,require:d};i[t]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BYZXNo6I.js",revision:null},{url:"assets/index-DLyKIWnM.css",revision:null},{url:"index.html",revision:"e9493a3fd17d60022c68f32bacce4270"},{url:"registerSW.js",revision:"0d97286a84e9d340b30f56296bd53f43"},{url:"android-chrome-192x192.png",revision:"b0bdad1afbf3cdfb266fb78b4358d5c8"},{url:"manifest.webmanifest",revision:"844da408fa1cd26efeae80f41e9a6c75"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
