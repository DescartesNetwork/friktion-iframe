var friktion;(()=>{"use strict";var e={57253:(e,r,t)=>{var o={"./bootstrap":()=>Promise.all([t.e("vendors-node_modules_sentre_connector_dist_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa"),t.e("webpack_sharing_consume_default_sentre_senhub_sentre_senhub"),t.e("src_bootstrap_app_tsx")]).then((()=>()=>t(26244)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),_=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>_})}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var _=r[o]={id:o,loaded:!1,exports:{}};return e[o].call(_.exports,_,_.exports,t),_.loaded=!0,_.exports}t.m=e,t.c=r,t.amdO={},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var _=Object.create(null);t.r(_);var a={};e=e||[null,r({}),r([]),r(r)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,t.d(_,a),_}})(),t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[])),t.u=e=>"static/js/"+e+"."+{"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js":"efe2509e","vendors-node_modules_sentre_connector_dist_index_js":"0dec7213","vendors-node_modules_react-router_esm_react-router_js":"295aec08","vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140":"58b132fe",webpack_sharing_consume_default_react_react:"737c964b","webpack_sharing_consume_default_react-dom_react-dom":"041313c1","webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa":"755562aa","webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a":"92c7510d","node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-node_modules_react_jsx-r-7486bc":"742a67f3","vendors-node_modules_antd_es_index_js":"4736a924","node_modules_copy-to-clipboard_index_js-node_modules_react-is_index_js-node_modules_babel_run-991e66":"5f1707eb","vendors-node_modules_react-dom_index_js":"290b95dd","vendors-node_modules_react-redux_es_index_js":"53495e69","node_modules_react-router-dom_esm_react-router-dom_js-_d6f00":"aa0df988",node_modules_react_index_js:"3d72e378",webpack_sharing_consume_default_sentre_senhub_sentre_senhub:"e5126156",src_bootstrap_app_tsx:"f806b712","node_modules_react-router-dom_esm_react-router-dom_js-_d6f01":"db0f4b6b",node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive:"f992b9e6"}[e]+".chunk.js",t.miniCssF=e=>"static/css/"+e+".1ed11dfc.chunk.css",t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="friktion:";t.l=(o,n,_,a)=>{if(e[o])e[o].push(n);else{var s,d;if(void 0!==_)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var c=u[i];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==r+_){s=c;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+_),s.src=o),e[o]=[n];var l=(r,t)=>{s.onerror=s.onload=null,clearTimeout(m);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(t))),r)return r(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{t.S={};var e={},r={};t.I=(o,n)=>{n||(n=[]);var _=r[o];if(_||(_=r[o]={}),!(n.indexOf(_)>=0)){if(n.push(_),e[o])return e[o];t.o(t.S,o)||(t.S[o]={});var a=t.S[o],s="friktion",d=(e,r,t,o)=>{var n=a[e]=a[e]||{},_=n[r];(!_||!_.loaded&&(!o!=!_.eager?o:s>_.from))&&(n[r]={get:t,from:s,eager:!!o})},u=[];if("default"===o)d("@reduxjs/toolkit","1.8.5",(()=>t.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>t(57853))))),d("@sentre/senhub","3.2.23",(()=>Promise.all([t.e("vendors-node_modules_sentre_connector_dist_index_js"),t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa"),t.e("webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a"),t.e("node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-node_modules_react_jsx-r-7486bc")]).then((()=>()=>t(51344))))),d("antd","4.23.0",(()=>Promise.all([t.e("vendors-node_modules_antd_es_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("node_modules_copy-to-clipboard_index_js-node_modules_react-is_index_js-node_modules_babel_run-991e66")]).then((()=>()=>t(90089))))),d("react-dom","17.0.2",(()=>Promise.all([t.e("vendors-node_modules_react-dom_index_js"),t.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>t(81108))))),d("react-redux","7.2.8",(()=>Promise.all([t.e("vendors-node_modules_react-redux_es_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(59771))))),d("react-router-dom","5.3.3",(()=>Promise.all([t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("node_modules_react-router-dom_esm_react-router-dom_js-_d6f00")]).then((()=>()=>t(9402))))),d("react","17.0.2",(()=>t.e("node_modules_react_index_js").then((()=>()=>t(7276)))));return u.length?e[o]=Promise.all(u).then((()=>e[o]=1)):e[o]=1}}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},r=(r,t)=>{r=e(r),t=e(t);for(var o=0;;){if(o>=r.length)return o<t.length&&"u"!=(typeof t[o])[0];var n=r[o],_=(typeof n)[0];if(o>=t.length)return"u"==_;var a=t[o],s=(typeof a)[0];if(_!=s)return"o"==_&&"n"==s||"s"==s||"u"==_;if("o"!=_&&"u"!=_&&n!=a)return n<a;o++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,_=1;_<e.length;_++)n--,t+="u"==(typeof(s=e[_]))[0]?"-":(n>0?".":"")+(n=2,s);return t}var a=[];for(_=1;_<e.length;_++){var s=e[_];a.push(0===s?"not("+d()+")":1===s?"("+d()+" || "+d()+")":2===s?a.pop()+" "+a.pop():o(s))}return d();function d(){return a.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],_=o<0;_&&(o=-o-1);for(var a=0,s=1,d=!0;;s++,a++){var u,i,c=s<r.length?(typeof r[s])[0]:"";if(a>=t.length||"o"==(i=(typeof(u=t[a]))[0]))return!d||("u"==c?s>o&&!_:""==c!=_);if("u"==i){if(!d||"u"!=c)return!1}else if(d)if(c==i)if(s<=o){if(u!=r[s])return!1}else{if(_?u>r[s]:u<r[s])return!1;u!=r[s]&&(d=!1)}else if("s"!=c&&"n"!=c){if(_||s<=o)return!1;d=!1,s--}else{if(s<=o||i<c!=_)return!1;d=!1}else"s"!=c&&"n"!=c&&(d=!1,s--)}}var l=[],m=l.pop.bind(l);for(a=1;a<r.length;a++){var f=r[a];l.push(1==f?m()|m():2==f?m()&m():f?n(f,t):!m())}return!!m()},_=(e,t)=>{var o=e[t];return Object.keys(o).reduce(((e,t)=>!e||!o[e].loaded&&r(e,t)?t:e),0)},a=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",s=(e,r,t,o)=>{var s=_(e,t);return n(o,s)||"undefined"!==typeof console&&console.warn&&console.warn(a(e,t,s,o)),d(e[t][s])},d=e=>(e.loaded=1,e.get()),u=e=>function(r,o,n,_){var a=t.I(r);return a&&a.then?a.then(e.bind(e,r,t.S[r],o,n,_)):e(r,t.S[r],o,n,_)},i=u(((e,r,o,n,_)=>r&&t.o(r,o)?s(r,0,o,n):_())),c={},l={92950:()=>i("default","react",[1,17,0,2],(()=>t.e("node_modules_react_index_js").then((()=>()=>t(7276))))),12181:()=>i("default","react-dom",[1,17,0,2],(()=>t.e("vendors-node_modules_react-dom_index_js").then((()=>()=>t(81108))))),55754:()=>i("default","react-redux",[1,7,2,5],(()=>Promise.all([t.e("vendors-node_modules_react-redux_es_index_js"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(59771))))),19289:()=>i("default","@reduxjs/toolkit",[1,1,6,2],(()=>t.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>t(57853))))),45055:()=>i("default","react-router-dom",[1,5,3,0],(()=>t.e("node_modules_react-router-dom_esm_react-router-dom_js-_d6f01").then((()=>()=>t(9402))))),94751:()=>i("default","antd",[1,4,21,0],(()=>t.e("vendors-node_modules_antd_es_index_js").then((()=>()=>t(90089))))),68275:()=>i("default","@sentre/senhub",[1,3],(()=>Promise.all([t.e("vendors-node_modules_sentre_connector_dist_index_js"),t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa"),t.e("webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a"),t.e("node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive")]).then((()=>()=>t(51344)))))},m={webpack_sharing_consume_default_react_react:[92950],"webpack_sharing_consume_default_react-dom_react-dom":[12181],"webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa":[55754,19289],"webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a":[45055,94751],webpack_sharing_consume_default_sentre_senhub_sentre_senhub:[68275]};t.f.consumes=(e,r)=>{t.o(m,e)&&m[e].forEach((e=>{if(t.o(c,e))return r.push(c[e]);var o=r=>{c[e]=0,t.m[e]=o=>{delete t.c[e],o.exports=r()}},n=r=>{delete c[e],t.m[e]=o=>{throw delete t.c[e],r}};try{var _=l[e]();_.then?r.push(c[e]=_.then(o).catch(n)):o(_)}catch(a){n(a)}}))}})(),(()=>{var e=e=>new Promise(((r,o)=>{var n=t.miniCssF(e),_=t.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(a=t[o]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===r))return a}var _=document.getElementsByTagName("style");for(o=0;o<_.length;o++){var a;if((n=(a=_[o]).getAttribute("data-href"))===e||n===r)return a}})(n,_))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=_=>{if(n.onerror=n.onload=null,"load"===_.type)t();else{var a=_&&("load"===_.type?"missing":_.type),s=_&&_.target&&_.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=s,n.parentNode.removeChild(n),o(d)}},n.href=r,document.head.appendChild(n)})(e,_,r,o)})),r={friktion:0};t.f.miniCss=(t,o)=>{r[t]?o.push(r[t]):0!==r[t]&&{"vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140":1}[t]&&o.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}})(),(()=>{var e={friktion:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else if(/^webpack_sharing_consume_default_(re(act(\-dom_react\-dom|_react)|duxjs_toolkit_reduxjs_toolkit\-webpack_sharing_consume_defau\-3cd5aa)|antd_antd\-webpack_sharing_consume_default_react\-router\-dom_re\-089d6a|sentre_senhub_sentre_senhub)$/.test(r))e[r]=0;else{var _=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=_);var a=t.p+t.u(r),s=new Error;t.l(a,(o=>{if(t.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var _=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+_+": "+a+")",s.name="ChunkLoadError",s.type=_,s.request=a,n[1](s)}}),"chunk-"+r,r)}};var r=(r,o)=>{var n,_,[a,s,d]=o,u=0;if(a.some((r=>0!==e[r]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(d)d(t)}for(r&&r(o);u<a.length;u++)_=a[u],t.o(e,_)&&e[_]&&e[_][0](),e[_]=0},o=globalThis.webpackChunkfriktion=globalThis.webpackChunkfriktion||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t(57253);friktion=o})();
//# sourceMappingURL=index.js.map