SlardarLite.plugin.report=function(){"use strict";var p=function(){return(p=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function l(t,n){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,o,i=r.call(t),u=[];try{for(;(void 0===n||0<n--)&&!(e=i.next()).done;)u.push(e.value)}catch(t){o={error:t}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}var u=function(t){return Object.prototype.toString.call(t)};function a(t){return"[object Array]"===u(t)}var i=" > ",c=3,f=5,s=80;function v(t,n,r,e){if(void 0===n&&(n=0),void 0===r&&(r=0),void 0===e&&(e=[]),t&&n++<f){var o=function(r){if(!r||!r.tagName)return"";var e=r.tagName.toLowerCase();return r.id&&(e+="#"+r.id),r.className&&r.className.split(/\s+/).forEach(function(t){return e+="."+t}),["type","name","title","alt"].forEach(function(t){var n=r.getAttribute(t);n&&(e+="["+t+'="'+n+'"]')}),e}(t);if("html"!==o&&!(1<n&&r+e.length*c+o.length>=s))return e.unshift(o),v(t.parentNode,n,r+o.length,e)}return e.join(i)}function h(t,n){return t=t.config.plugins[n],"object"!=typeof(n=t)||null===n||a(n)?{}:t}function y(n,t){return n&&t&&t.some(function(t){return n.match(t)})}function b(t){var n=document.createElement("a");return n.href=t,{url:n.href,protocol:n.protocol,domain:n.hostname,query:n.search,hash:n.hash,path:n.pathname}}function d(t){return JSON.stringify({ev_type:"batch",list:t})}var g=10,w=1e3;function n(){if("object"==typeof window&&("object"==typeof(t=window)&&null!==t))return window;var t}function r(){var t=n()&&n()&&window.location;return null==t?void 0:t.href}function o(o){var t,r,e,i,n,u,a,c,f,s=E(o.config.domain||_,k),v=(e=(t={endpoint:s,transport:q}).transport,i=t.endpoint,n=t.size,u=void 0===n?g:n,a=void 0===(t=t.wait)?w:t,c=[],f=0,{getSize:function(){return u},getWait:function(){return a},setSize:function(t){u=t},setWait:function(t){a=t},getEndpoint:function(){return i},setEndpoint:function(t){i=t},send:function(t){c.push(t),c.length>=u&&m.call(this),clearTimeout(f),f=setTimeout(m.bind(this),a)},flush:function(){clearTimeout(f),m.call(this)},getBatchData:function(){return c.length?d(c):""},clear:function(){clearTimeout(f),c=[]},fail:function(t){r=t}});function m(){var n;c.length&&(n=this.getBatchData(),e.post({url:i,data:n,fail:function(t){r&&r(t,n)}}),c=[])}return addEventListener("beforeunload",function(){var t=v.getBatchData();t&&navigator.sendBeacon(s,t)}),o.m=s,function(t,n){var r,e;void 0===n&&(n=o),(t=o.bs&&t?o.bs(t):t)&&(r=x(O(T(j(t)),n),n),e=function(){return v.send(S.build(r))},t.ev_type?e():t.p=function(t){var n=l(t,2),t=n[0],n=n[1];r.ev_type=t,r.payload=n,e()})}}var _="mon-va.byteoversea.com",k="/monitor_browser/collect/batch/",j=function(t){var n={url:r(),timestamp:Date.now(),sdk_version:"1.2.15",sdk_name:"SDK_LITE"};return p(p({},t),{extra:p(p({},n),t.extra||{})})},E=function(t,n){return void 0===n&&(n=k),(t&&0<=t.indexOf("//")?"":"https://")+t+n},S={build:function(t){return{ev_type:t.ev_type,payload:t.payload,common:p(p({},t.extra||{}),t.overrides||{})}}},x=function(t,n){var r=n.config,n={};return n.bid=r.bid,n.pid=r.pid,n.view_id=r.viewId,n.user_id=r.userId,n.device_id=r.deviceId,n.session_id=r.sessionId,n.release=r.release,n.env=r.env,p(p({},t),{extra:p(p({},n),t.extra||{})})},O=function(t,n){var r=n.ctx,n=n.config.context,n=void 0===n?{}:n;return t.extra.context=r?p(p({},n),r.toString()):n,t},T=function(t){var n=navigator.connection;return n&&(t.extra.network_type=n.effectiveType),t},q={post:function(t){var n=new XMLHttpRequest;n.open("POST",t.url),n.send(t.data)},get:function(){}},e=/(cookie|auth|jwt|token|key|ticket|secret|credential|session|password|x-tt-token)/i,m=/(bearer|session)/i,N=function(t,n){return!(!t||!n)&&(e.test(t)||m.test(n))};function D(t){return t.split("\r\n").reduce(function(t,n){return t.concat([n.split(": ")])},[]).reduce(function(t,n){var r=l(n,2),e=r[0],n=r[1],r=void 0===n?"":n;return e&&!N(e,r)?p(p({},t),((n={})[e]=r,n)):t},{})}function L(t){var n=(r=l(t,2))[0],t=r[1],r="<unknown>";try{r=v(t.target||t)}catch(t){}return{category:"ui."+(0===n?"click":"keypress"),message:r,type:"dom",timestamp:t.timeStamp}}var H,M="performance_longtask";function z(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.reduce(function(r,t){return"function"==typeof Headers&&new Headers(t||{}).forEach(function(t,n){return!N(n,t)&&(r[n]=t)}),r},{})}var B=["xmlhttprequest","fetch","beacon"];return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(r,t){return n.reduce(function(t,n){return n(r,t)},t)}}(function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(i,t){return t&&i.s(function(r){function e(t){var t=(n=l(t,2))[0],n=n[1];return(t=o[t])&&t(n,i)}var o=n.reduce(function(t,n){var r=l(n,2),n=r[0],r=r[1];return t[n]=r,t},{});t.u(function(n){if(!a(n))return r(n),void(n.c=function(t){t=e(t);t&&(n.p||r)(t)});var t=e(n);t&&r({ev_type:t[0],payload:t[1]})})})}}([1,function(t,n){var r=l(t,4),e=r[0],o=r[1],i=r[2],u=r[3],a=e.a,c=e.e,f=void 0===c?{}:c,s=e.v,v=e.r,m=e.status,t=e.response,r=h(n,"ajax"),c=r.ignoreUrls,r=r.collectBodyOnError;if(n.m!==s&&!y(s,c)){s=b(s),r=r&&400<=m||void 0;return["http",{api:"ajax",request:p(p({headers:f,method:a},s),{timestamp:o,body:r&&""+v}),response:{status:m||0,timing:u,timestamp:o+i,is_custom_error:!1,headers:D(e.getAllResponseHeaders()),body:r&&""+t},duration:i}]}}],[3,function(t){return["performance",p({type:"perf"},t)]}],[2,function(t,n){var r=l(t,2),e=r[0],t=r[1],o=(r=e).reason||r.detail&&r.detail.reason||r.error;r=o,/\[object (Error|Exception|DOMException)\]/.test(u(r))||r instanceof Error||"string"==typeof(o="[object Object]"===u(o)?{message:JSON.stringify(o)}:o)&&(o={message:o});var i,r=h(n,"jsError"),n=r.ignoreErrors,r=r.dedupe;if(o&&!y(o.message,n))return i=o,o=["message","name","fileName","lineNumber","columnNumber","stack","stacktrace","framesToPop"].reduce(function(t,n){return t[n]=i[n],t},{}),!1===r||!H||["stack","message"].some(function(t){return o[t]!==H[t]})?["js_error",{error:H=o,timestamp:e.timeStamp,breadcrumbs:t&&t.map(L)||[]}]:void 0}],[0,function(t,n){var r=l(t,4),e=r[0],o=r[1],i=r[2],u=r[3],t=b(i),r=h(n,"resourceError"),n=r.ignoreUrls,r=r.includeUrls;if(!(r&&!y(i,r)||y(i,n)))return["resource_error",p(p({type:e},t),{url:i,timing:u,timestamp:o})]}],[4,function(t){t=l(t,2);return["pageview",{pid:t[0],source:t[1]}]}],[5,function(t){t=l(t,1)[0];return["performance_timing",{timing:performance.timing,navigation_timing:performance.getEntriesByType("navigation")[0],isBounced:t}]}],[6,function(t,n){n=n.config.sample;return!((!n||!n.rules[M])&&Math.random()<.01)&&[M,{type:"perf",longtasks:t}]}],[7,function(t,n){var r=l(t,6),e=r[0],o=r[1],i=r[2],u=r[3],a=r[4],c=r[5],f=(d=e).url||d,s=o||{},v=s.method,m=s.headers,t=s.body,r=a||{},d=r.headers,o=r.status,s=void 0===o?0:o,a=r.body,o=h(n,"fetch"),r=o.ignoreUrls,o=o.collectBodyOnError;if(f.match(/^(https?:|\/)/)&&n.m!==f&&!y(f,r)){f=b(f),o=o&&400<=s||void 0,t=o&&""+(e.body||t),a=o&&""+a;return["http",{api:"fetch",request:p(p({headers:z(e.headers,m),method:(e.method||v||"get").toLowerCase()},f),{timestamp:i,body:t}),response:{status:s,timing:c,timestamp:i+u,is_custom_error:!1,headers:z(d),body:a},duration:u}]}}],[8,function(t,n){return!B.includes(t.initiatorType)&&!y(t.name,h(n,"resource").ignoreUrls)&&["resource",t]}],[9,function(t){t=l(t,3);return["blank_screen",{timestamp:t[0],score:t[1],screenshot:t[2]}]}]),function(o,t){var n=o.plugin.sample;return n?n(o,t):t&&o.s(function(n){var r=new o.$,e=0;t.u(function(t){e||(o.h("sample",!!o.config.sample)(o,r).u(n),e=1),r.n(t)})})},function(r,t){r.cached=[];function n(t,n){r.manual&&r.cached?t&&r.cached.push(t):e(t,n)}var e=o(r);r.sender=n,r.onload&&r.onload(),t&&t.u(n)})}();
