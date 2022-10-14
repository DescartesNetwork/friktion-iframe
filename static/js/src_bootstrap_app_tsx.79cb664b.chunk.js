/*! For license information please see src_bootstrap_app_tsx.79cb664b.chunk.js.LICENSE.txt */
(globalThis.webpackChunkfriktion=globalThis.webpackChunkfriktion||[]).push([["src_bootstrap_app_tsx"],{45597:(e,t,r)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return a.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return i.default}});var n=s(r(37270)),o=s(r(78578)),a=s(r(69363)),i=s(r(83272));function s(e){return e&&e.__esModule?e:{default:e}}const c=[n.default,o.default];t.h0=c},26244:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Page:()=>x,__esModule:()=>k.X$,logo:()=>k.jY,panels:()=>k.h0,readme:()=>k.ng});var n=r(55754),o=r(49471),a=r(45263),i=r(92950),s=r(80754);const c=function(e){var t=e.appId,r=e.src,n=e.title,o=e.wallet,c=e.verbose,l=void 0!==c&&c;return(0,i.useEffect)((function(){return new s.Gateway(o,l).terminate}),[]),(0,a.jsx)("iframe",{id:t+"-iframe",src:r,title:n||"".concat(t," on Senhub"),style:{height:"100vh",margin:-12,border:"none",width:"calc(100% + 24px)"},loading:"lazy",allowFullScreen:!0})};const l={appId:"friktion",url:"https://descartesnetwork.github.io/friktion-iframe/index.js"},u={devnet:{node:"https://api.devnet.solana.com"},testnet:{node:"https://api.testnet.solana.com"},mainnet:{node:"https://api.mainnet-beta.solana.com"}},f={manifest:{development:{...l},production:{...l}}[o.env],sol:u[o.net]},{manifest:{appId:p}}=f,d=()=>(0,a.jsx)(c,{appId:p,src:"https://friktion.fi/",title:"Your destination for smarter and safer returns on crypto",wallet:window.sentre.solana});var b=r(19289),y=r(93838),m=r(48744),g=r.n(m),h=r(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const j={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof y.PublicKey||e instanceof g()||h.isBuffer(e)}},v="main",O=(0,b.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:r}=t;const{main:{counter:n}}=r();return{counter:n+1}})),w=(0,b.createSlice)({name:v,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(O.fulfilled,((e,t)=>{let{payload:r}=t;Object.assign(e,r)}))}}).reducer,_=(0,b.configureStore)({middleware:e=>e(j),devTools:!1,reducer:{main:w}});var k=r(45597);const{manifest:{appId:S}}=f,x=()=>(0,a.jsx)(o.AntdProvider,{appId:S,children:(0,a.jsx)(n.Provider,{store:_,children:(0,a.jsx)(d,{})})})},25882:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,c=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(c[u]=i[u]);if(t){s=t(i);for(var f=0;f<s.length;f++)n.call(i,s[f])&&(c[s[f]]=i[s[f]])}}return c}},62175:(e,t,r)=>{"use strict";r(25882);var n=r(92950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},45263:(e,t,r)=>{"use strict";e.exports=r(62175)},83272:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/README.fb62c857ab1436933e4b.md"},69363:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/logo.419a12ec7860a9f74f31.png"},37270:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel1.94e627ed02a2ebd779f3.jpeg"},78578:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/panel2.10b35f6342c1363089c6.jpeg"},7420:()=>{},95856:()=>{},46601:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx.79cb664b.chunk.js.map