!function e(t,i,n){function s(r,a){if(!i[r]){if(!t[r]){var l="function"==typeof require&&void 0;if(!a&&l)return l(r,!0);if(o)return o(r,!0);var u=Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[r]={exports:{}};t[r][0].call(d.exports,function(e){return s(t[r][1][e]||e)},d,d.exports,e,t,i,n)}return i[r].exports}for(var o="function"==typeof require&&void 0,r=0;r<n.length;r++)s(n[r]);return s}({1:[function(e,t,i){var n=e("./constants.js").OFF,s=e("./xhr.js"),o="TrustboxSplitTest",r=[];function a(e,t){for(t=e="";e++<36;t+=51*e&52?(15^e?8^Math.random()*(20^e?16:4):4).toString(16):"-");return t}function l(e){for(var t=function(e){if(e){var t,i;return e.expiry||(e.expiry=new Date((new Date).getTime()+864e7).toUTCString()),t=encodeURIComponent(JSON.stringify(e)),i=e.expiry,!function(e){try{return localStorage.setItem(o,e),!0}catch(e){return!1}}(t)&&(document.cookie=[o+"="+t,"path=/","domain="+function(){for(var e="weird_get_top_level_domain=cookie",t=document.location.hostname.split("."),i=t.length-1;0<=i;i--){var n=t.slice(i).join(".");if(document.cookie=e+";domain=."+n+";",-1<document.cookie.indexOf(e))return document.cookie=e.split("=")[0]+"=;domain=."+n+";expires=Thu, 01 Jan 1970 00:00:01 GMT;",n}}(),"expires="+i,"samesite=strict"].join("; ")),"expires="+e.expiry}}(e);r.length;)r.pop()(e,t)}t.exports={getABSettingsAsync:function(e,t){var i=function(e){var t=void 0;try{t=function(){var e=function(){try{return localStorage.getItem(o)}catch(e){return null}}();if(e)return e;var t=o+"=",i=document.cookie,n=i.indexOf(t);return -1<n?i.substring(n+t.length).split(";")[0]:void 0}();var i=JSON.parse(decodeURIComponent(t)),n=new Date(i.expiry);if(i.businessUnitId===e&&n>new Date)return i}catch(e){if(t)try{localStorage.removeItem(o);var s="domain="+window.location.hostname.replace(/^.*\.([^.]+\.[^.]+)/,"$1");document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;"+s}catch(e){}}}(e);if(i&&(!i.sessionStart||+new Date<i.sessionStart+18e5)){var u="expires="+i.expiry;t(i,u)}else r.push(t),1<r.length||s.xhrGet({url:"https://widget.trustpilot.com/v1/ratios/"+e,success:function(t){var s=function(e,t){if(!e||!e.groups)return null;for(var i=0,s=0,o=[],r=0;r<e.groups.length;r++)"number"==typeof e.groups[r].ratio&&(i+=e.groups[r].ratio,++s,o.push(e.groups[r]));if(0===s)return null;1===s&&i<1&&(o.push({name:n,ratio:1-i}),i=1);for(var l=0,u=Math.random()*i,d=o[0].name,c=[],h=0;h<o.length;h++)l<=u&&u<l+o[h].ratio&&(d=o[h].name),c.push(o[h].name),l+=o[h].ratio;return{allGroups:c,group:d,testId:e.testId,businessUnitId:t,session:a(),sessionStart:+new Date,anonymousId:a()}}(t,e);return i&&i.testId===s.testId?(i.session=a(),i.sessionStart=+new Date,l(i)):l(s)},error:function(){t(null)}})}}},{"./constants.js":2,"./xhr.js":8}],2:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.EMPTY_WIDGET_ID="000000000000000000000000",i.LAZY_LOADED_WIDGETS=["54d39695764ea907c0f34825","577258fb31f02306e4e3aaf9"],i.OFF="off"},{}],3:[function(e,t,i){var n=!1;function s(e){try{if(n)return;var t=document.createElement("script");t.setAttribute("type","application/ld+json"),t.innerHTML=JSON.stringify(e),document.head.appendChild(document.createComment("Added by Trustpilot")),document.head.appendChild(t),document.head.appendChild(document.createComment("/Added by Trustpilot")),n=!0}catch(e){}}var o=e("./xhr.js");t.exports=function(e){if(n)return!1;var t,i,r,a,l,u,d,c,h,f,p,m,g,y,v,w,b,I="60f537b5b0f1639de1fe048c"===e.templateId;return e.schemaType&&e.location?(t=e.businessunitId,i=e.location,r=e.locale,a=e.templateId,l="https://widget.trustpilot.com/data/jsonld/business-unit/"+t+"/location/"+i+"?"+["url="+encodeURIComponent(window.location.href),"templateId="+a,"locale="+r].join("&"),o.xhrGet({url:l,success:function(e){e.url=document.location.href,e["@id"]=document.location.href,s(e)},error:function(e){console.error(e)}}),!0):!(!e.sku||!(e.name||I&&"Product"===e.schemaType))&&(u=e.businessunitId,d=e.locale,c=e.templateId,h=e.name,f=e.sku,p=e.reviewnumber,m=e.price,g=e.priceCurrency,y=e.availability,v=d&&d.split("-")[0],w="https://widget.trustpilot.com"+("5763bccae0a06d08e809ecbb"===c?"/data/jsonld/business-unit/"+u+"/product-imported":"/data/jsonld/business-unit/"+u+"/product")+"?sku="+encodeURIComponent(f)+"&numberOfReviews="+(p||10)+(h?"&productName="+encodeURIComponent(h):"")+"&language="+v+"&templateId="+c+"&url="+encodeURIComponent(window.location.origin+window.location.pathname),b=m&&g&&y?{"@type":"Offer",priceCurrency:g,price:m,availability:y}:null,o.xhrGet({url:w,success:function(e){b&&(e.offers=b),(e.offers||e.review||e.aggregateRating)&&s(e)},error:function(e){console.error(e)}}),!0)}},{"./xhr.js":8}],4:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});var n,s=e("./constants"),o=l(e("./snippets")),r=e("./ab-settings"),a=l(e("./widget"));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return e&&e.toLowerCase&&e.toLowerCase()}var d=(n=[{key:"initialize",value:function(){var e=this;this.hasABTestElements()?(0,r.getABSettingsAsync)(this.businessUnitId,function(t,i){e.abSettings=t,e.sessionExpiry=i,e.findAndApplyWidgets()}):this.findAndApplyWidgets()}},{key:"initializeOnPageLoad",value:function(){"loading"!==this.document.readyState?this.initialize():this.document.addEventListener("DOMContentLoaded",this.initialize.bind(this))}},{key:"applyWidgetFromDomElement",value:function(e,t){var i=this;e.firstChild&&"IFRAME"===e.firstChild.tagName&&!t||("group"in e.dataset?(0,r.getABSettingsAsync)(e.dataset.businessunitId,function(t,n){i.abSettings=t,i.sessionExpiry=n,i.createWidget(e)}):this.createWidget(e))}},{key:"findAndApplyWidgets",value:function(){var e=this;this.stats.findAndApplyCalls+=1;var t=this.widgetElements;t&&0!==t.length&&(this.stats.normalElements=t.filter(function(e){return!("group"in e.dataset)}).length,this.stats.abTestElements=t.filter(function(e){return"group"in e.dataset}).length,t.forEach(function(t){return e.createWidget(t)}))}},{key:"hasABTestElements",value:function(){return[].slice.call(this.widgetElements).some(function(e){return"group"in e.dataset})}},{key:"createWidget",value:function(e){if(this.removeWidget(e),this.checkWidgetDisplayAndUpdateDataset(e)){var t=e.dataset;(0,o.default)(t);var i="group"in t&&this.abSettings,n=i?{container:e,dataset:t,session:this.abSettings.session,anonymousId:this.abSettings.anonymousId,testId:this.abSettings.testId,sessionExpiry:this.sessionExpiry}:{container:e,dataset:t},s=new a.default(n);return s.initialize(),this.stats.applied+=1,this.stats[i?"abTestApplied":"normalApplied"]+=1,this.stats.applyFromDomCalls+=1,this.widgets.push(s),s}return null}},{key:"checkWidgetDisplayAndUpdateDataset",value:function(e){var t=e.dataset;return!(this.abSettings&&"group"in t)||u(this.abSettings.group)===u(t.group)||u(this.abSettings.group)===s.OFF&&(t.templateId=s.EMPTY_WIDGET_ID,t.styleHeight="0",t.group=s.OFF,!0)}},{key:"removeWidget",value:function(e){for(;e.firstChild;)e.removeChild(e.firstChild);this.widgets.filter(function(t){return t.isLazyLoaded&&t.isSameNodeAs(e)}).forEach(function(e){e.destroy()})}},{key:"closePopups",value:function(){this.widgets.forEach(function(e){return e.closePopup()})}},{key:"businessUnitId",get:function(){return this.widgetElements[0].dataset.businessunitId}},{key:"widgetElements",get:function(){return[].slice.call(this.document.getElementsByClassName("trustpilot-widget"))}}],function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(c.prototype,n),c);function c(e,t,i){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c),this.window=e,this.document=t,this.widgets=[],this.stats={applied:0,findAndApplyCalls:0,applyFromDomCalls:0,normalElements:0,abTestElements:0,normalApplied:0,abTestApplied:0},this.version=i}i.default=d},{"./ab-settings":1,"./constants":2,"./snippets":3,"./widget":6}],5:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});var n,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o="53aa8912dec7e10d38f59f36,539adbd6dec7e10e686debee,539ad60defb9600b94d7df2c,539ad998dec7e10e686debe0,539ad0ffdec7e10e686debd7,54d0e1d8764ea9078c79e6ee,54ad5defc6454f065c28af8b".split(",");function r(e){var t="";return e&&0<e.length&&(e=e.toLowerCase(),t=/(px|\%)/i.test(e)?e:e+"px"),t}var a=(n=[{key:"getIframeOptionsFromData",value:function(){var e=this.iframeData||{styles:{}};return s({},this.defaultIframeOptions,{position:e.styles.position||"",zindex:e.styles.zindex||"",margin:e.styles.margin||"",top:e.styles.top||"",bottom:e.styles.bottom||"",left:e.styles.left||"",right:e.styles.right||"",height:e.styles.height||"",width:e.styles.width||this.defaultIframeOptions.styles.width||"",display:e.show?"block":"none",src:this.baseUrl+e.source+this.queryString,borderStyle:this.defaultIframeOptions.styles.borderStyle,overflow:this.defaultIframeOptions.styles.overflow,loading:this.dataset.loading,allow:e.allow})}},{key:"initialize",value:function(e,t){var i,n;this._iframe=(i=this.getIframeOptionsFromData(),(n=document.createElement("iframe")).style.position=i.position,n.style.zIndex=i.zindex,n.style.margin=i.margin,n.style.top=i.top,n.style.bottom=i.bottom,n.style.left=i.left,n.style.right=i.right,n.style.height=i.height,n.style.width=i.width,n.style.borderStyle=i.borderStyle,n.style.backgroundColor=i.backgroundColor,n.style.display=i.display,n.style.overflow=i.overflow,n.allowTransparency=i.allowTransparency,n.title="Customer reviews powered by Trustpilot",n.loading=i.loading||"auto",n.src=i.src,i.allow&&(n.allow=i.allow),n),e.appendChild(this._iframe),this._iframe.addEventListener("load",t)}},{key:"sendMessage",value:function(e){this._iframe.contentWindow&&(e=JSON.stringify(e),this._iframe.contentWindow.postMessage(e,"https://widget.trustpilot.com"))}},{key:"isInViewport",value:function(e){var t=this._iframe.getBoundingClientRect(),i=t.width||this._iframe.offsetWidth,n=t.height||this._iframe.offsetHeight;return 0<=t.top&&0<=t.left&&t.bottom-n*e<=(window.innerHeight||document.documentElement.clientHeight)&&t.right-i*e<=(window.innerWidth||document.documentElement.clientWidth)}},{key:"setWidgetId",value:function(e){this.sendMessage({command:"setId",widgetId:e})}},{key:"setStyle",value:function(e){var t=this;Object.keys(e).forEach(function(i){var n=e[i];t._iframe.style[i]=n})}},{key:"isScrollBlockingPopup",value:function(){return"popup"===this.name&&this.isScrollBlocking}},{key:"disablePageScroll",value:function(){this.defaultOverflowProperties=this.OVERFLOW_PROPERTIES.reduce(function(e,t){return e[t]=document.body.style.getPropertyValue(t),e},{}),document.body.style.overflow="hidden"}},{key:"restorePageScroll",value:function(){var e=!0,t=!1,i=void 0;try{for(var n,s=this.OVERFLOW_PROPERTIES[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var o=n.value;document.body.style.removeProperty(o),this.defaultOverflowProperties[o]&&document.body.style.setProperty(o,this.defaultOverflowProperties[o])}}catch(e){t=!0,i=e}finally{try{!e&&s.return&&s.return()}finally{if(t)throw i}}}},{key:"show",value:function(){this.isScrollBlockingPopup()&&!this.isVisible&&this.disablePageScroll(),this._iframe.style.display="block",this.isVisible=!0}},{key:"hide",value:function(){this.isScrollBlockingPopup()&&this.isVisible&&this.restorePageScroll(),this._iframe.style.display="none",this.isVisible=!1}},{key:"focus",value:function(){this._iframe.contentWindow.focus()}},{key:"resizeHeight",value:function(e){"number"==typeof e&&0!==e&&(this._iframe.style.height=e+"px")}},{key:"_shouldAllowRobots",value:function(){return"true"===this.dataset.allowRobots&&this.dataset.location&&-1<o.indexOf(this.templateId)}},{key:"dimensions",get:function(){return{height:r(this.dataset.styleHeight),width:r(this.dataset.styleWidth)}}},{key:"queryString",get:function(){function e(e){return e+"="+encodeURIComponent(i.dataset[e])}function t(t){return Object.keys(i.dataset).filter(t).map(e)}var i=this,n=["businessunitId","templateId"],s=t(function(e){return -1!==n.indexOf(e)}),o=t(function(e){return -1===n.indexOf(e)&&"allowRobots"!==e});return"?"+s.join("&")+"#"+o.join("&")}},{key:"templateId",get:function(){return this.dataset.templateId}},{key:"baseUrl",get:function(){return"https://widget.trustpilot.com/trustboxes/"+this.templateId+"/"}},{key:"defaultIframeOptions",get:function(){return{source:this._shouldAllowRobots()?"index_allow_robots.html":"index.html",allowTransparency:"true",styles:{borderStyle:"none",backgroundColor:"transparent",display:"block",overflow:"hidden",height:this.dimensions.height,width:this.dimensions.width,position:"relative"},show:!0}}}],function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(l.prototype,n),l);function l(e,t,i){var n=3<arguments.length&&void 0!==arguments[3]&&arguments[3];!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,l),this.OVERFLOW_PROPERTIES=["overflow","overflow-x","overflow-y"],this.name=e,this.dataset=t,this.iframeData=i||this.defaultIframeOptions,this.defaultOverflowProperties={},this.isVisible=!1,this.isScrollBlocking=n}i.default=a},{}],6:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});var n=function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e};function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=l(e("./tracking")),r=l(e("./iframe")),a=e("./../constants");function l(e){return e&&e.__esModule?e:{default:e}}var u=(n(d,null,[{key:"generateId",value:function(){for(var e=this.usedIds,t=void 0;t=Math.random(),-1!==e.indexOf(t););return this.usedIds.push(t)}}]),n(d,[{key:"isContainerInViewport",value:function(e){var t=0<arguments.length&&void 0!==e?e:200,i=this.container.getBoundingClientRect(),n=i.width||this.container.offsetWidth,s=i.height||this.container.offsetHeight;return 0<=i.top&&0<=i.left&&i.bottom-s-t<=(window.innerHeight||document.documentElement.clientHeight)&&i.right-n-t<=(window.innerWidth||document.documentElement.clientWidth)}},{key:"initialize",value:function(){!this.isLazyLoaded||this.isContainerInViewport()?(this._widgetIFrameOrigin="https://widget.trustpilot.com",this.createIFrame("main"),this.attachMessageListener()):this.lazyLoadTimeout=setTimeout(this.initialize,500)}},{key:"handleCommand",value:function(e){var t=e.data,i=e.origin;try{var n="string"==typeof t?JSON.parse(t):t;return i===this._widgetIFrameOrigin&&n.widgetId===this.id&&this.widgetIframeMessageHandler(n)}catch(e){return!1}}},{key:"attachMessageListener",value:function(){window.addEventListener("message",this.handleCommand.bind(this),!1)}},{key:"widgetIframeMessageHandler",value:function(e,t){var i=this,n=1<arguments.length&&void 0!==t?t:function(){};this.stats.events[e.command]=(this.stats.events[e.command]||0)+1;var s=e.name,o=e.style,r=e.height,a=e.targets,l=e.attachToBody,u=this.iframes[s],d={createIFrame:function(){return i.createIFrame(s,e,l)},setStyle:function(){return u.setStyle(o)},show:function(){return u.show()},hide:function(){return u.hide()},focus:function(){return u.focus()},loaded:function(){return i.iframes.main.sendMessage("loaded")},message:function(){return u.sendMessage(e)},ping:function(){i.iframes.main.sendMessage({command:"pong"}),i.stats.pongSent=!0},"resize-height":function(){return i.getIframeOrMain(s).resizeHeight(r)},impression:function(){return i.tracking.initialize()},scrollTo:function(){return i.scrollToTrustBox(a)}}[e.command];return d?(d(),!0):(n(),!1)}},{key:"createIFrame",value:function(e,t,i){var n=this,s=2<arguments.length&&void 0!==i&&i,o=new r.default(e,this.dataset,t,s);this.iframes[e]=o,this.stats.createIFrameCalls+=1,o.initialize(s?document.body:this.container,function(){o.setWidgetId(n.id),n.stats.iframeLoadEvents+=1})}},{key:"getIframeOrMain",value:function(e){return this.iframes[e]||this.iframes.main}},{key:"isInViewport",value:function(e){return this.iframes.main.isInViewport(e)}},{key:"isSameNodeAs",value:function(e){try{return this.container.isSameNode(e)}catch(e){return!1}}},{key:"destroy",value:function(){this.lazyLoadTimeout&&clearTimeout(this.lazyLoadTimeout)}},{key:"closePopup",value:function(){"popup"in this.iframes&&(this.iframes.main.sendMessage({name:"main",command:"message",message:"popup toggled",visible:!1}),this.iframes.popup.hide())}},{key:"scrollToTrustBox",value:function(e){var t=0<arguments.length&&void 0!==e?e:[],i=document.querySelector(t.map(function(e){return"[data-template-id='"+e+"']"}).join(","));if(i){var n=i.querySelector("iframe");n&&(i.scrollIntoView({behavior:"smooth"}),n.contentWindow.focus())}}},{key:"id",get:function(){return this._id||(this._id=this.constructor.generateId()),this._id}}]),d);function d(e){var t=this,i=e.container,n=e.dataset,s=e.session,r=e.anonymousId,l=e.testId,u=e.sessionExpiry;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,d);var c={container:i,dataset:n,templateId:n.templateId,businessUnitId:n.businessunitId,locale:n.locale};Object.keys(c).forEach(function(e){if(!c[e])throw"No "+e+" supplied for TrustBox"}),this.container=i,this.container.style.position="relative",this.dataset=n,this.iframes={},this.tracking=new o.default(function(e){return t.iframes.main.sendMessage(e)},function(){return t.isInViewport(.5)},{session:s,group:n.group,sessionExpiry:u,anonymousId:r,testId:l,templateId:n.templateId}),this.isLazyLoaded=-1<a.LAZY_LOADED_WIDGETS.indexOf(n.templateId),this.lazyLoadTimeout=null,this.isSameNodeAs=this.isSameNodeAs.bind(this),this.destroy=this.destroy.bind(this),this.stats={createIFrameCalls:0,iframeLoadEvents:0,events:{},pongSent:!1},this.initialize=this.initialize.bind(this)}u.usedIds=[],i.default=u},{"./../constants":2,"./iframe":5,"./tracking":7}],7:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});var n,s=e("../constants"),o=(n=[{key:"initialize",value:function(){this.sendImpressionData(),this.attachListener(),this.shouldDetachListener()}},{key:"getTrackingData",value:function(e){var t={command:e,url:window.document.URL,referrer:window.document.referrer,userAgent:window.navigator.userAgent,language:window.navigator.userLanguage||window.navigator.language,platform:window.navigator.platform};return this.session&&this.group&&(t.session=this.session,t.sessionExpiry=this.sessionExpiry),this.anonymousId&&(t.anonymousId=this.anonymousId),this.testId&&(t.testId=this.testId),t}},{key:"sendImpressionData",value:function(){if(!this.hasSentImpression){this.hasSentImpression=!0;var e=this.getTrackingData("impression-received");this.sendMessage(e)}}},{key:"sendVisibilityData",value:function(){if(!this.hasSentViewTracking){this.hasSentViewTracking=!0;var e=this.getTrackingData("trustbox-in-viewport");this.sendMessage(e)}}},{key:"attachListener",value:function(){var e,t,i=arguments,n=this,o=(e=function(){(n.templateId===s.EMPTY_WIDGET_ID||n.shouldDetachListener())&&(window.removeEventListener("scroll",a,r),window.removeEventListener("resize",l,r))},t=void 0,function(){clearTimeout(t),t=setTimeout(function(){t=null,e(i)},100)}),r={passive:!0,capture:!1},a=window.addEventListener("scroll",o,r),l=window.addEventListener("resize",o,r);o()}},{key:"shouldDetachListener",value:function(){return!!this.hasSentViewTracking||(this.hasBeenVisible?(this.hasSentImpression&&this.sendVisibilityData(),!0):!!this.isTrustBoxVisible()&&(this.hasSentImpression?(this.sendVisibilityData(),!0):this.hasBeenVisible=!0))}}],function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(r.prototype,n),r);function r(e,t,i){var n=i.session,s=i.sessionExpiry,o=i.group,a=i.anonymousId,l=i.testId,u=i.templateId;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this.hasSentImpression=!1,this.hasSentViewTracking=!1,this.sendMessage=e,this.isTrustBoxVisible=t,this.session=n,this.group=o,this.sessionExpiry=s,this.anonymousId=a,this.testId=l,this.templateId=u}i.default=o},{"../constants":2}],8:[function(e,t,i){function n(e){try{return JSON.parse(e.responseText)}catch(t){return e.responseText}}t.exports={xhrGet:function(e){var t=new window.XMLHttpRequest;t.open("GET",e.url,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.onreadystatechange=function(){4===t.readyState&&(200<=t.status&&t.status<300?e.success(n(t)):e.error&&e.error(n(t)))},t.send()}}},{}],9:[function(e,t,i){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t){var i;try{i=e("./lib/widget-management.js").default,window.Trustpilot=window.Trustpilot||{loadFromElement:function(e,t){if(e)return this.Modules.WidgetManagement&&this.Modules.WidgetManagement.applyWidgetFromDomElement(e,t);console.error('No element supplied to "Trustpilot.loadFromElement"')}},window.Trustpilot.Modules=window.Trustpilot.Modules||{},window.Trustpilot.Modules.WidgetManagement?window.Trustpilot.Modules.WidgetManagement.version!==t&&console.log("Detected legacy TrustBox bootstrap with version:",window.Trustpilot.Modules.WidgetManagement.version,", current:",t):(window.Trustpilot.Modules.WidgetManagement=new i(window,document,t),window.Trustpilot.Modules.WidgetManagement.initializeOnPageLoad(),window.addEventListener("load",function(){try{for(var e=document.getElementsByClassName("trustpilot-widget"),t=0;t<e.length;++t){var i=e[t],n=i.firstChild&&i.firstChild.tagName;n&&"IFRAME"!==n&&window.Trustpilot.loadFromElement(i)}}catch(e){console.error("Error loading trustboxes "+e)}})),window.addEventListener("click",function(){window.Trustpilot.Modules.WidgetManagement.closePopups()})}catch(e){!function(){try{var i,s;i="object"===(void 0===e?"undefined":n(e))?e.message:e,console.error("Error on bootstrap:"+i),s=["error="+encodeURIComponent(i),"uri="+encodeURIComponent(document.URL),"bootstrapVersion="+t].join("&"),document.createElement("img").src="https://widget.trustpilot.com/feedback/report-error?"+s}catch(e){console.error("Error on error reporting method:"+e)}}()}}("1.405.0")},{"./lib/widget-management.js":4}]},{},[9]);
//# sourceMappingURL=index.6b6f8601.js.map
