/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/photoswipe@5.4.3/dist/photoswipe-lightbox.esm.min.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
  * PhotoSwipe Lightbox 5.4.3 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */
function t(t,e,i){const s=document.createElement(e);return t&&(s.className=t),i&&i.appendChild(s),s}function e(t,e,i){t.style.width="number"==typeof e?`${e}px`:e,t.style.height="number"==typeof i?`${i}px`:i}const i="idle",s="loading",n="loaded",h="error";function a(t,e,i=document){let s=[];if(t instanceof Element)s=[t];else if(t instanceof NodeList||Array.isArray(t))s=Array.from(t);else{const n="string"==typeof t?t:e;n&&(s=Array.from(i.querySelectorAll(n)))}return s}function l(){return!(!navigator.vendor||!navigator.vendor.match(/apple/i))}class o{constructor(t,e){this.type=t,this.defaultPrevented=!1,e&&Object.assign(this,e)}preventDefault(){this.defaultPrevented=!0}}class r{constructor(e,i){if(this.element=t("pswp__img pswp__img--placeholder",e?"img":"div",i),e){const t=this.element;t.decoding="async",t.alt="",t.src=e,t.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,i){this.element&&("IMG"===this.element.tagName?(e(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=function(t,e,i){let s=`translate3d(${t}px,${e||0}px,0)`;return void 0!==i&&(s+=` scale3d(${i},${i},1)`),s}(0,0,t/250)):e(this.element,t,i))}destroy(){var t;null!==(t=this.element)&&void 0!==t&&t.parentNode&&this.element.remove(),this.element=null}}class d{constructor(t,e,s){this.instance=e,this.data=t,this.index=s,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=i,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout((()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)}),1e3)}load(e,i){if(this.slide&&this.usePlaceholder())if(this.placeholder){const t=this.placeholder.element;t&&!t.parentElement&&this.slide.container.prepend(t)}else{const t=this.instance.applyFilters("placeholderSrc",!(!this.data.msrc||!this.slide.isFirstSlide)&&this.data.msrc,this);this.placeholder=new r(t,this.slide.container)}this.element&&!i||this.instance.dispatch("contentLoad",{content:this,isLazy:e}).defaultPrevented||(this.isImageContent()?(this.element=t("pswp__img","img"),this.displayedImageWidth&&this.loadImage(e)):(this.element=t("pswp__content","div"),this.element.innerHTML=this.data.html||""),i&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){var e,i;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;const n=this.element;this.updateSrcsetSizes(),this.data.srcset&&(n.srcset=this.data.srcset),n.src=null!==(e=this.data.src)&&void 0!==e?e:"",n.alt=null!==(i=this.data.alt)&&void 0!==i?i:"",this.state=s,n.complete?this.onLoaded():(n.onload=()=>{this.onLoaded()},n.onerror=()=>{this.onError()})}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=n,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),this.state!==n&&this.state!==h||this.removePlaceholder())}onError(){this.state=h,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===s,this)}isError(){return this.state===h}isImageContent(){return"image"===this.type}setDisplayedSize(t,i){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,i),!this.instance.dispatch("contentResize",{content:this,width:t,height:i}).defaultPrevented&&(e(this.element,t,i),this.isImageContent()&&!this.isError()))){const e=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=i,e?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:i,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==h,this)}updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;const t=this.element,e=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||e>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=e+"px",t.dataset.largestUsedSize=String(e))}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=void 0,this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented||(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}displayError(){if(this.slide){var e,i;let s=t("pswp__error-msg","div");s.innerText=null!==(e=null===(i=this.instance.options)||void 0===i?void 0:i.errorMsg)&&void 0!==e?e:"",s=this.instance.applyFilters("contentErrorElement",s,this),this.element=t("pswp__content pswp__error-msg-container","div"),this.element.appendChild(s),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===h)return void this.displayError();if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||l())?(this.isDecoding=!0,this.element.decode().catch((()=>{})).finally((()=>{this.isDecoding=!1,this.appendImage()}))):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){!this.instance.dispatch("contentActivate",{content:this}).defaultPrevented&&this.slide&&(this.isImageContent()&&this.isDecoding&&!l()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,this.instance.dispatch("contentRemove",{content:this}).defaultPrevented||(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),this.state!==n&&this.state!==h||this.removePlaceholder()))}}function p(t,e,i,s,n){let h=0;if(e.paddingFn)h=e.paddingFn(i,s,n)[t];else if(e.padding)h=e.padding[t];else{const i="padding"+t[0].toUpperCase()+t.slice(1);e[i]&&(h=e[i])}return Number(h)||0}class c{constructor(t,e,i,s){this.pswp=s,this.options=t,this.itemData=e,this.index=i,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}update(t,e,i){const s={x:t,y:e};this.elementSize=s,this.panAreaSize=i;const n=i.x/s.x,h=i.y/s.y;this.fit=Math.min(1,n<h?n:h),this.fill=Math.min(1,n>h?n:h),this.vFill=Math.min(1,h),this.initial=this.t(),this.secondary=this.i(),this.max=Math.max(this.initial,this.secondary,this.o()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}l(t){const e=t+"ZoomLevel",i=this.options[e];if(i)return"function"==typeof i?i(this):"fill"===i?this.fill:"fit"===i?this.fit:Number(i)}i(){let t=this.l("secondary");return t||(t=Math.min(1,3*this.fit),this.elementSize&&t*this.elementSize.x>4e3&&(t=4e3/this.elementSize.x),t)}t(){return this.l("initial")||this.fit}o(){return this.l("max")||Math.max(1,4*this.fit)}}function m(t,e,i){const s=e.createContentFromData(t,i);let n;const{options:h}=e;if(h){let a;n=new c(h,t,-1),a=e.pswp?e.pswp.viewportSize:function(t,e){if(t.getViewportSizeFn){const i=t.getViewportSizeFn(t,e);if(i)return i}return{x:document.documentElement.clientWidth,y:window.innerHeight}}(h,e);const l=function(t,e,i,s){return{x:e.x-p("left",t,e,i,s)-p("right",t,e,i,s),y:e.y-p("top",t,e,i,s)-p("bottom",t,e,i,s)}}(h,a,t,i);n.update(s.width,s.height,l)}return s.lazyLoad(),n&&s.setDisplayedSize(Math.ceil(s.width*n.initial),Math.ceil(s.height*n.initial)),s}class u extends class extends class{constructor(){this.u={},this.p={},this.pswp=void 0,this.options=void 0}addFilter(t,e,i=100){var s,n,h;this.p[t]||(this.p[t]=[]),null===(s=this.p[t])||void 0===s||s.push({fn:e,priority:i}),null===(n=this.p[t])||void 0===n||n.sort(((t,e)=>t.priority-e.priority)),null===(h=this.pswp)||void 0===h||h.addFilter(t,e,i)}removeFilter(t,e){this.p[t]&&(this.p[t]=this.p[t].filter((t=>t.fn!==e))),this.pswp&&this.pswp.removeFilter(t,e)}applyFilters(t,...e){var i;return null===(i=this.p[t])||void 0===i||i.forEach((t=>{e[0]=t.fn.apply(this,e)})),e[0]}on(t,e){var i,s;this.u[t]||(this.u[t]=[]),null===(i=this.u[t])||void 0===i||i.push(e),null===(s=this.pswp)||void 0===s||s.on(t,e)}off(t,e){var i;this.u[t]&&(this.u[t]=this.u[t].filter((t=>e!==t))),null===(i=this.pswp)||void 0===i||i.off(t,e)}dispatch(t,e){var i;if(this.pswp)return this.pswp.dispatch(t,e);const s=new o(t,e);return null===(i=this.u[t])||void 0===i||i.forEach((t=>{t.call(this,s)})),s}}{getNumItems(){var t;let e=0;const i=null===(t=this.options)||void 0===t?void 0:t.dataSource;i&&"length"in i?e=i.length:i&&"gallery"in i&&(i.items||(i.items=this.v(i.gallery)),i.items&&(e=i.items.length));const s=this.dispatch("numItems",{dataSource:i,numItems:e});return this.applyFilters("numItems",s.numItems,i)}createContentFromData(t,e){return new d(t,this,e)}getItemData(t){var e;const i=null===(e=this.options)||void 0===e?void 0:e.dataSource;let s={};Array.isArray(i)?s=i[t]:i&&"gallery"in i&&(i.items||(i.items=this.v(i.gallery)),s=i.items[t]);let n=s;n instanceof Element&&(n=this.m(n));const h=this.dispatch("itemData",{itemData:n||{},index:t});return this.applyFilters("itemData",h.itemData,t)}v(t){var e,i;return null!==(e=this.options)&&void 0!==e&&e.children||null!==(i=this.options)&&void 0!==i&&i.childSelector?a(this.options.children,this.options.childSelector,t)||[]:[t]}m(t){const e={element:t},i="A"===t.tagName?t:t.querySelector("a");if(i){e.src=i.dataset.pswpSrc||i.href,i.dataset.pswpSrcset&&(e.srcset=i.dataset.pswpSrcset),e.width=i.dataset.pswpWidth?parseInt(i.dataset.pswpWidth,10):0,e.height=i.dataset.pswpHeight?parseInt(i.dataset.pswpHeight,10):0,e.w=e.width,e.h=e.height,i.dataset.pswpType&&(e.type=i.dataset.pswpType);const n=t.querySelector("img");var s;if(n)e.msrc=n.currentSrc||n.src,e.alt=null!==(s=n.getAttribute("alt"))&&void 0!==s?s:"";(i.dataset.pswpCropped||i.dataset.cropped)&&(e.thumbCropped=!0)}return this.applyFilters("domItemData",e,t,i)}lazyLoadData(t,e){return m(t,this,e)}}{constructor(t){super(),this.options=t||{},this.g=0,this.shouldOpen=!1,this._=void 0,this.onThumbnailsClick=this.onThumbnailsClick.bind(this)}init(){a(this.options.gallery,this.options.gallerySelector).forEach((t=>{t.addEventListener("click",this.onThumbnailsClick,!1)}))}onThumbnailsClick(t){if(function(t){return"button"in t&&1===t.button||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey}(t)||window.pswp)return;let e={x:t.clientX,y:t.clientY};e.x||e.y||(e=null);let i=this.getClickedIndex(t);i=this.applyFilters("clickedIndex",i,t,this);const s={gallery:t.currentTarget};i>=0&&(t.preventDefault(),this.loadAndOpen(i,s,e))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const e=t.target,i=a(this.options.children,this.options.childSelector,t.currentTarget).findIndex((t=>t===e||t.contains(e)));return-1!==i?i:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,e,i){if(window.pswp||!this.options)return!1;if(!e&&this.options.gallery&&this.options.children){const t=a(this.options.gallery);t[0]&&(e={gallery:t[0]})}return this.options.index=t,this.options.initialPointerPos=i,this.shouldOpen=!0,this.preload(t,e),!0}preload(t,e){const{options:i}=this;e&&(i.dataSource=e);const s=[],n=typeof i.pswpModule;if("function"==typeof(h=i.pswpModule)&&h.prototype&&h.prototype.goTo)s.push(Promise.resolve(i.pswpModule));else{if("string"===n)throw new Error("pswpModule as string is no longer supported");if("function"!==n)throw new Error("pswpModule is not valid");s.push(i.pswpModule())}var h;"function"==typeof i.openPromise&&s.push(i.openPromise()),!1!==i.preloadFirstSlide&&t>=0&&(this._=function(t,e){const i=e.getItemData(t);if(!e.dispatch("lazyLoadSlide",{index:t,itemData:i}).defaultPrevented)return m(i,e,t)}(t,this));const a=++this.g;Promise.all(s).then((t=>{if(this.shouldOpen){const e=t[0];this.I(e,a)}}))}I(t,e){if(e!==this.g&&this.shouldOpen)return;if(this.shouldOpen=!1,window.pswp)return;const i="object"==typeof t?new t.default(this.options):new t(this.options);this.pswp=i,window.pswp=i,Object.keys(this.u).forEach((t=>{var e;null===(e=this.u[t])||void 0===e||e.forEach((e=>{i.on(t,e)}))})),Object.keys(this.p).forEach((t=>{var e;null===(e=this.p[t])||void 0===e||e.forEach((e=>{i.addFilter(t,e.fn,e.priority)}))})),this._&&(i.contentLoader.addToCache(this._),this._=void 0),i.on("destroy",(()=>{this.pswp=void 0,delete window.pswp})),i.init()}destroy(){var t;null===(t=this.pswp)||void 0===t||t.destroy(),this.shouldOpen=!1,this.u={},a(this.options.gallery,this.options.gallerySelector).forEach((t=>{t.removeEventListener("click",this.onThumbnailsClick,!1)}))}}export{u as default};
