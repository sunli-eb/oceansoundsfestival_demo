/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;var g=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof a},h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}return function(b,c,d){c&&a(b.prototype,c);d&&a(b,d);return b}}(),i=function(){function a(a,b){var c=[],d=!0,e=!1,f=undefined;try{for(var a=a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),g;!(d=(g=a.next()).done);d=!0){c.push(g.value);if(b&&c.length===b)break}}catch(a){e=!0,f=a}finally{try{!d&&a["return"]&&a["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;else if((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(b))return a(b,c);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function j(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});f.ensureModuleRegistered("SignalsFBEventsLogging",function(){return function(g,h,i,j){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsNetworkUtils"),b=a.sendPOST;a=f.getFbeventsModules("SignalsFBEventsUtils");var c=a.isInstanceOf,d=f.getFbeventsModules("SignalsParamList"),h=!1;function i(){h=!0}var j=!0;function k(){j=!1}a="console";var l="warn",m=g[a]&&g[a][l]?g[a][l].bind(g[a]):function(){},n=!1;function o(){n=!0}function p(a){if(n)return;m("[Facebook Pixel] - "+a)}var q="Facebook Pixel Error",r=g.postMessage?g.postMessage.bind(g):function(){},s={};function t(a){switch(a.type){case"FBQ_NO_METHOD_NAME":return"You must provide an argument to fbq().";case"INVALID_FBQ_METHOD":var b=a.method;return"\"fbq('"+b+"', ...);\" is not a valid fbq command.";case"INVALID_PIXEL_ID":b=a.pixelID;return"Invalid PixelID: "+b+".";case"DUPLICATE_PIXEL_ID":b=a.pixelID;return"Duplicate Pixel ID: "+b+".";case"SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":b=a.metadataValue;var c=a.pixelID;return"Trying to set argument "+b+" for uninitialized Pixel ID "+c+".";case"CONFLICTING_VERSIONS":return"Multiple pixels with conflicting versions were detected on this page.";case"MULTIPLE_PIXELS":return"Multiple pixels were detected on this page.";case"UNSUPPORTED_METADATA_ARGUMENT":b=a.metadata;return"Unsupported metadata argument: "+b+".";case"REQUIRED_PARAM_MISSING":c=a.param;b=a.eventName;return"Required parameter '"+c+"' is missing for event '"+b+"'.";case"INVALID_PARAM":c=a.param;b=a.eventName;return"Parameter '"+c+"' is invalid for event '"+b+"'.";case"NO_EVENT_NAME":return'Missing event name. Track events must be logged with an event name fbq("track", eventName)';case"NONSTANDARD_EVENT":c=a.eventName;return"You are sending a non-standard event '"+c+"'. The preferred way to send these events is using trackCustom. See 'https://developers.facebook.com/docs/ads-for-websites/pixel-events/#events' for more information.";case"NEGATIVE_EVENT_PARAM":b=a.param;c=a.eventName;return"Parameter '"+b+"' is negative for event '"+c+"'.";case"PII_INVALID_TYPE":b=a.key_type;c=a.key_val;return"An invalid "+b+" was specified for '"+c+"'. This data will not be sent with any events for this Pixel.";case"PII_UNHASHED_PII":b=a.key;return"The value for the '"+b+"' key appeared to be PII. This data will not be sent with any events for this Pixel.";case"INVALID_CONSENT_ACTION":c=a.action;return"\"fbq('"+c+"', ...);\" is not a valid fbq('consent', ...) action. Valid actions are 'await' and 'grant'.";case"INVALID_JSON_LD":b=a.jsonLd;return"Unable to parse JSON-LD tag. Malformed JSON found: '"+b+"'.";case"SITE_CODELESS_OPT_OUT":c=a.pixelID;return"Unable to open Codeless events interface for pixel as the site has opted out. Pixel ID: "+c+".";case"PIXEL_NOT_INITIALIZED":b=a.pixelID;return"Pixel "+b+" not found";default:w(new Error("INVALID_USER_ERROR - "+a.type+" - "+JSON.stringify(a)));return"Invalid User Error."}}function u(a,e){try{var f=Math.random(),h=g.fbq&&g.fbq._releaseSegment?g.fbq._releaseSegment:"unknown";if(j&&f<.01||h==="canary"){f=new d(null);f.append("p","pixel");f.append("v",g.fbq&&g.fbq.version?g.fbq.version:"unknown");f.append("e",a.toString());c(a,Error)&&(f.append("f",a.fileName),f.append("s",a.stackTrace||a.stack));f.append("ue",e?"1":"0");f.append("rs",h);b(f,"https://connect.facebook.net/log/error")}}catch(a){}}function v(a){var b=JSON.stringify(a);if(!Object.prototype.hasOwnProperty.call(s,b))s[b]=!0;else return;b=t(a);p(b);r({action:"FB_LOG",logType:q,logMessage:b},"*");u(new Error(b),!0)}function w(a){u(a,!1),h&&p(a.toString())}l={consoleWarn:m,logError:w,logUserError:v,enableVerboseDebugLogging:i,disableAllLogging:o,disableSampling:k};e.exports=l})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsNetworkUtils",function(){return function(g,h,i,d){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsProxyState"),b=f.getFbeventsModules("SignalsFBEventsQE"),c=f.getFbeventsModules("SignalsFBEventsUtils"),d=c.listenOnce;function i(b,c){return c!=null&&a.getShouldProxy()?c:b}var k={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4};c=function c(){var e=this;j(this,c);this.sendGET=function(b,c,d){var f=b.toQueryString();f=i(c,d)+"?"+f;if(f.length<2048){var g=new Image();if(d!=null){var h=a.getShouldProxy();g.onerror=function(){a.setShouldProxy(!0),h||e.sendGET(b,c,d)}}g.src=f;return!0}return!1};this.sendPOST=function(a,c,d){var f=b.get("xhr_cors_post");if(f){a.append("exp",f.code);if(f.isInExperimentGroup)return e._sendXHRPost(a,c,d)}return e._sendFormPOST(a,c,d)};this._sendXHRPost=function(b,c,d){var f=new XMLHttpRequest(),g=function(){if(d!=null){var f=a.getShouldProxy();a.setShouldProxy(!0);f||e.sendPOST(b,c,d)}};if("withCredentials"in f)f.withCredentials=!0,f.open("POST",c,!1),f.onreadystatechange=function(){if(f.readyState!==k.DONE)return;f.status!==200&&g()};else if(XDomainRequest!=undefined)f=new XDomainRequest(),f.open("POST",c),f.onerror=g;else return!1;f.send(b.toFormData());return!0};this._sendFormPOST=function(b,c,f){var j="fb"+Math.random().toString().replace(".",""),k=h.createElement("form");k.method="post";k.action=i(c,f);k.target=j;k.acceptCharset="utf-8";k.style.display="none";var l=!!(g.attachEvent&&!g.addEventListener),m=h.createElement("iframe");l&&(m.name=j);m.src="about:blank";m.id=j;m.name=j;k.appendChild(m);d(m,"load",function(){b.each(function(a,b){var c=h.createElement("input");c.name=decodeURIComponent(a);c.value=b;k.appendChild(c)}),d(m,"load",function(){k.parentNode&&k.parentNode.removeChild(k)}),k.submit()});if(f!=null){var n=a.getShouldProxy();m.onerror=function(){a.setShouldProxy(!0),n||e.sendPOST(b,c,f)}}h.body!=null&&h.body.appendChild(k);return!0};this.sendBeacon=function(b,c,d){if(g.navigator&&g.navigator.sendBeacon){var f=g.navigator.sendBeacon(i(c,d),b.toFormData());if(d!=null&&!f){f=a.getShouldProxy();a.setShouldProxy(!0);f||e.sendBeacon(b,c,d)}return!0}return!1}};e.exports=new c()})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsPlugin",function(){return function(f,g,h,i){var j={exports:{}};j.exports;(function(){"use strict";function a(a){this.plugin=a;this.__fbEventsPlugin=1;return this}j.exports=a})();return j.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsProxyState",function(){return function(f,g,h,i){var j={exports:{}};j.exports;(function(){"use strict";var a=!1;j.exports={getShouldProxy:function(){return a},setShouldProxy:function(b){a=b}}})();return j.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsQE",function(){return function(f,g,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=function(){return Math.random()};function b(c){var b=a();for(var d=0;d<c.length;d++){var e=c[d],f=e.passRate,g=i(e.range,2),h=g[0];g=g[1];if(f<0||f>1)throw new Error("passRate should be between 0 and 1 in "+e.name);if(b>=h&&b<g){h=a()<f;return{name:e.name,isInExperimentGroup:h,code:e.code+(h?"1":"0")}}}return null}var c=function(){function a(){j(this,a),this._groups=[],this._result=null,this._hasRolled=!1}h(a,[{key:"setExperimentGroups",value:function(a){this._groups=a,this._result=null,this._hasRolled=!1}},{key:"get",value:function(a){if(!this._hasRolled){var c=b(this._groups);c!=null&&(this._result=c);this._hasRolled=!0}if(a==null||a==="")return this._result;return this._result!=null&&this._result.name===a?this._result:null}}]);return a}();e.exports=new c()})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEventsUtils",function(){return function(f,i,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=Object.prototype.toString,b=!("addEventListener"in i);function c(a,b){return typeof b==="function"&&a instanceof b}function d(b){return Array.isArray?Array.isArray(b):a.call(b)==="[object Array]"}function f(a){return typeof a==="number"||typeof a==="string"&&/^\d+$/.test(a)}var k=Number.isInteger||function(a){return typeof a==="number"&&isFinite(a)&&Math.floor(a)===a};function l(a,c,d){var e=b?"on"+c:c;c=b?a.attachEvent:a.addEventListener;var f=b?a.detachEvent:a.removeEventListener,g=function b(){f&&f.call(a,e,b,!1),d()};c&&c.call(a,e,g,!1)}var m=Object.prototype.hasOwnProperty,n=!{toString:null}.propertyIsEnumerable("toString"),o=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=o.length;function q(a){if(Object.keys)return Object.keys(a);if((typeof a==="undefined"?"undefined":g(a))!=="object"&&(typeof a!=="function"||a===null))throw new TypeError("Object.keys called on non-object");var b=[];for(var c in a)m.call(a,c)&&b.push(c);if(n)for(var d=0;d<p;d++)m.call(a,o[d])&&b.push(o[d]);return b}function r(a,b){if(Array.prototype.map)return Array.prototype.map.call(a,b);var c=void 0,d=void 0;if(a==null)throw new TypeError(" array is null or not defined");a=Object(a);var e=a.length>>>0;if(typeof b!=="function")throw new TypeError(b+" is not a function");c=new Array(e);d=0;while(d<e){var f;d in a&&(f=a[d],f=b.call(null,f,d,a),c[d]=f);d++}return c}function s(a){if(this==null)throw new TypeError("Array.prototype.some called on null or undefined");if(Array.prototype.some)return Array.prototype.some.call(this,a);if(typeof a!=="function")throw new TypeError();var b=Object(this),c=b.length>>>0,d=arguments.length>=2?arguments[1]:void 0;for(var e=0;e<c;e++)if(e in b&&a.call(d,b[e],e,b))return!0;return!1}function t(a){return q(a).length===0}function u(a){if(this===void 0||this===null)throw new TypeError();var b=Object(this),c=b.length>>>0;if(typeof a!=="function")throw new TypeError();var d=[],e=arguments.length>=2?arguments[1]:void 0;for(var f=0;f<c;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d}var v=function(){function a(b){j(this,a),this.items=b||[]}h(a,[{key:"has",value:function(a){return s.call(this.items,function(b){return b===a})}},{key:"add",value:function(a){this.items.push(a)}}]);return a}();function w(a){return a}d={isArray:d,isEmptyObject:t,isNumber:f,isInteger:k,isInstanceOf:c,keys:q,listenOnce:l,map:r,FBSet:v,each:function(a,b){r.call(this,a,b)},some:function(a,b){return s.call(a,b)},filter:function(a,b){return u.call(a,b)},castTo:w};e.exports=d})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsParamList",function(){return function(f,i,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a="deep",b="shallow";function c(a){if(JSON===undefined||JSON===null||!JSON.stringify)return Object.prototype.toString.call(a);else return JSON.stringify(a)}function d(a){if(a===null||a===undefined)return!0;a=typeof a==="undefined"?"undefined":g(a);return a==="number"||a==="boolean"||a==="string"}var f=function(){function e(a){j(this,e),this._params=[],this._piiTranslator=a}h(e,[{key:"containsKey",value:function(a){for(var b=0;b<this._params.length;b++)if(this._params[b].name===a)return!0;return!1}},{key:"get",value:function(a){a=a;for(var b=0;b<this._params.length;b++)if(this._params[b].name===a)return this._params[b].value;return null}},{key:"getAllParams",value:function(){return this._params}},{key:"addRange",value:function(a){var c=this;a.each(function(a,d){return c._append(a,d,b,!1)})}},{key:"append",value:function(b,c){var d=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;this._append(encodeURIComponent(b),c,a,d);return this}},{key:"appendHash",value:function(b){var c=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;for(var d in b)Object.prototype.hasOwnProperty.call(b,d)&&this._append(encodeURIComponent(d),b[d],a,c);return this}},{key:"_append",value:function(b,e,f,g){d(e)?this._appendPrimitive(b,e,g):f===a?this._appendObject(b,e,g):this._appendPrimitive(b,c(e),g)}},{key:"_translateValue",value:function(a,b,c){if(typeof b==="boolean")return b?"true":"false";if(!c)return""+b;if(!this._piiTranslator)throw new Error();return this._piiTranslator(a,""+b)}},{key:"_appendPrimitive",value:function(a,b,c){if(b!=null){b=this._translateValue(a,b,c);b!=null&&this._params.push({name:a,value:b})}}},{key:"_appendObject",value:function(a,c,d){var e=null;for(var f in c)if(Object.prototype.hasOwnProperty.call(c,f)){var g=a+"["+encodeURIComponent(f)+"]";try{this._append(g,c[f],b,d)}catch(a){e==null&&(e=a)}}if(e!=null)throw e}},{key:"each",value:function(a){for(var b=0;b<this._params.length;b++){var c=this._params[b],d=c.name;c=c.value;a(d,c)}}},{key:"toQueryString",value:function(){var a=[];this.each(function(b,c){a.push(b+"="+encodeURIComponent(c))});return a.join("&")}},{key:"toFormData",value:function(){var a=new FormData();this.each(function(b,c){a.append(b,c)});return a}}],[{key:"fromHash",value:function(a,b){return new e(b).appendHash(a)}}]);return e}();e.exports=f})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("sha256_with_dependencies_new",function(){return function(f,g,h,i){var j={exports:{}};j.exports;(function(){var a=function(a){var b="",c,d;for(var e=0;e<a.length;e++)c=a.charCodeAt(e),d=e+1<a.length?a.charCodeAt(e+1):0,55296<=c&&c<=56319&&56320<=d&&d<=57343&&(c=65536+((c&1023)<<10)+(d&1023),e++),c<=127?b+=String.fromCharCode(c):c<=2047?b+=String.fromCharCode(192|c>>>6&31,128|c&63):c<=65535?b+=String.fromCharCode(224|c>>>12&15,128|c>>>6&63,128|c&63):c<=2097151&&(b+=String.fromCharCode(240|c>>>18&7,128|c>>>12&63,128|c>>>6&63,128|c&63));return b};function b(a,b){return b>>>a|b<<32-a}function c(a,b,c){return a&b^~a&c}function d(a,b,c){return a&b^a&c^b&c}function e(a){return b(2,a)^b(13,a)^b(22,a)}function f(a){return b(6,a)^b(11,a)^b(25,a)}function g(a){return b(7,a)^b(18,a)^a>>>3}function h(a){return b(17,a)^b(19,a)^a>>>10}function i(a,b){return a[b&15]+=h(a[b+14&15])+a[b+9&15]+g(a[b+1&15])}var k=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),l=new Array(8),m=new Array(2),n=new Array(64),o=new Array(16),p="0123456789abcdef";function q(a,b){var c=(a&65535)+(b&65535);a=(a>>16)+(b>>16)+(c>>16);return a<<16|c&65535}function r(){m[0]=m[1]=0,l[0]=1779033703,l[1]=3144134277,l[2]=1013904242,l[3]=2773480762,l[4]=1359893119,l[5]=2600822924,l[6]=528734635,l[7]=1541459225}function s(){var a,b,g,h,j,m,p,r,s,t;a=l[0];b=l[1];g=l[2];h=l[3];j=l[4];m=l[5];p=l[6];r=l[7];for(var u=0;u<16;u++)o[u]=n[(u<<2)+3]|n[(u<<2)+2]<<8|n[(u<<2)+1]<<16|n[u<<2]<<24;for(var u=0;u<64;u++)s=r+f(j)+c(j,m,p)+k[u],u<16?s+=o[u]:s+=i(o,u),t=e(a)+d(a,b,g),r=p,p=m,m=j,j=q(h,s),h=g,g=b,b=a,a=q(s,t);l[0]+=a;l[1]+=b;l[2]+=g;l[3]+=h;l[4]+=j;l[5]+=m;l[6]+=p;l[7]+=r}function t(a,b){var c,d,e=0;d=m[0]>>3&63;var f=b&63;(m[0]+=b<<3)<b<<3&&m[1]++;m[1]+=b>>29;for(c=0;c+63<b;c+=64){for(var g=d;g<64;g++)n[g]=a.charCodeAt(e++);s();d=0}for(var g=0;g<f;g++)n[g]=a.charCodeAt(e++)}function u(){var a=m[0]>>3&63;n[a++]=128;if(a<=56)for(var b=a;b<56;b++)n[b]=0;else{for(var b=a;b<64;b++)n[b]=0;s();for(var b=0;b<56;b++)n[b]=0}n[56]=m[1]>>>24&255;n[57]=m[1]>>>16&255;n[58]=m[1]>>>8&255;n[59]=m[1]&255;n[60]=m[0]>>>24&255;n[61]=m[0]>>>16&255;n[62]=m[0]>>>8&255;n[63]=m[0]&255;s()}function v(){var a=new String();for(var b=0;b<8;b++)for(var c=28;c>=0;c-=4)a+=p.charAt(l[b]>>>c&15);return a}function w(a){var b=0;for(var c=0;c<8;c++)for(var d=28;d>=0;d-=4)a[b++]=p.charCodeAt(l[c]>>>d&15)}function x(b,a){r();t(b,b.length);u();if(a)w(a);else return v()}function y(c,d,b){if(c===null||c===undefined)return null;d=typeof d=="undefined"?!0:d;d&&(c=a(c));return x(c,b)}j.exports=y})();return j.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEvents.plugins.identity",function(){return function(g,h,i,j){var e={exports:{}};e.exports;(function(){"use strict";var a=f.getFbeventsModules("SignalsFBEventsLogging"),b=a.logUserError;a=f.getFbeventsModules("SignalsFBEventsPlugin");var c=f.getFbeventsModules("SignalsFBEventsUtils");c=c.FBSet;var d=f.getFbeventsModules("sha256_with_dependencies_new"),g=/^[A-Fa-f0-9]{64}$|^[A-Fa-f0-9]{32}$/,h=/^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i,i=/^\s+|\s+$/g;Object.prototype.hasOwnProperty;var j=new c(["ud[uid]"]);function k(a){return!!a&&h.test(a)}function l(a){return a.replace(i,"")}function m(a){return a.toLowerCase()}function n(a,c){if(a==="ud[em]"||a==="ud[email]"){var d=typeof c==="string"?l(m(c)):"";if(d==null||d=="")return null;if(!k(d)){a=/ud\[(em|email)\]/.exec(a)[1];b({type:"PII_INVALID_TYPE",key_type:"email address",key_val:a});throw new Error()}return d}return c}function o(a,c){if(c==null)return null;if(j.has(a)){if(k(c)){b({type:"PII_UNHASHED_PII",key:a});throw new Error()}return c}if(g.test(c))return c.toLowerCase();else{c=n(a,c);if(c!=null)return d(c)}return null}c=new a(function(a){a.piiTranslator=o});c.piiTranslator=o;e.exports=c})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.identity");f.registerPlugin&&f.registerPlugin("fbevents.plugins.identity",e.exports);f.ensureModuleRegistered("fbevents.plugins.identity",function(){return e.exports})})()})(window,document,location,history);