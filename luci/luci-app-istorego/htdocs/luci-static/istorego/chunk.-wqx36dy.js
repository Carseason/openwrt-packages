import{a7 as G,aI as V,j as A,k as w,aJ as Q,y as H,v as N,A as O,B as D,f as B,D as K,r as E,a9 as U,w as k,C as z,E as M,J,g as y,aK as Z,aL as ee,i as ne,x as te,l as oe,N as re,T as ie,aM as le,aG as W,q as F}from"./index.js?v=W-TS2S5Y";import{u as se}from"./chunk.Bl57umnh.js";import{t as q}from"./chunk.wsTypTg3.js";var P=function(){return G.Date.now()},ae="Expected a function",ce=Math.max,ue=Math.min;function de(n,e,t){var r,a,d,b,l,p,f=0,S=!1,j=!1,x=!0;if(typeof n!="function")throw new TypeError(ae);e=q(e)||0,V(t)&&(S=!!t.leading,j="maxWait"in t,d=j?ce(q(t.maxWait)||0,e):d,x="trailing"in t?!!t.trailing:x);function i(o){var m=r,C=a;return r=a=void 0,f=o,b=n.apply(C,m),b}function v(o){return f=o,l=setTimeout(c,e),S?i(o):b}function h(o){var m=o-p,C=o-f,_=e-m;return j?ue(_,d-C):_}function g(o){var m=o-p,C=o-f;return p===void 0||m>=e||m<0||j&&C>=d}function c(){var o=P();if(g(o))return s(o);l=setTimeout(c,h(o))}function s(o){return l=void 0,x&&r?i(o):(r=a=void 0,b)}function u(){l!==void 0&&clearTimeout(l),f=0,r=p=a=l=void 0}function R(){return l===void 0?b:s(P())}function T(){var o=P(),m=g(o);if(r=arguments,a=this,p=o,m){if(l===void 0)return v(p);if(j)return clearTimeout(l),l=setTimeout(c,e),i(p)}return l===void 0&&(l=setTimeout(c,e)),b}return T.cancel=u,T.flush=R,T}var fe="Expected a function";function he(n,e,t){var r=!0,a=!0;if(typeof n!="function")throw new TypeError(fe);return V(t)&&(r="leading"in t?!!t.leading:r,a="trailing"in t?!!t.trailing:a),de(n,e,{leading:r,maxWait:e,trailing:a})}function X(n,e){const t=A(Q,null);return w(()=>n.hljs||(t==null?void 0:t.mergedHljsRef.value))}const ge=H([N("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[O("show-line-numbers",`
 display: flex;
 `),D("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),O("word-wrap",[H("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),H("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),H("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:n})=>{const e=`${n.bPrefix}code`;return[`${e} .hljs-comment,
 ${e} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${e} .hljs-doctag,
 ${e} .hljs-keyword,
 ${e} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${e} .hljs-section,
 ${e} .hljs-name,
 ${e} .hljs-selector-tag,
 ${e} .hljs-deletion,
 ${e} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${e} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${e} .hljs-string,
 ${e} .hljs-regexp,
 ${e} .hljs-addition,
 ${e} .hljs-attribute,
 ${e} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${e} .hljs-built_in,
 ${e} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${e} .hljs-attr,
 ${e} .hljs-variable,
 ${e} .hljs-template-variable,
 ${e} .hljs-type,
 ${e} .hljs-selector-class,
 ${e} .hljs-selector-attr,
 ${e} .hljs-selector-pseudo,
 ${e} .hljs-number {
 color: var(--n-hue-6);
 }`,`${e} .hljs-symbol,
 ${e} .hljs-bullet,
 ${e} .hljs-link,
 ${e} .hljs-meta,
 ${e} .hljs-selector-id,
 ${e} .hljs-title {
 color: var(--n-hue-2);
 }`,`${e} .hljs-emphasis {
 font-style: italic;
 }`,`${e} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${e} .hljs-link {
 text-decoration: underline;
 }`]}]),me=Object.assign(Object.assign({},M.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ve=B({name:"Code",props:me,setup(n,{slots:e}){const{internalNoHighlight:t}=n,{mergedClsPrefixRef:r,inlineThemeDisabled:a}=K(),d=E(null),b=t?{value:void 0}:X(n),l=(i,v,h)=>{const{value:g}=b;return!g||!(i&&g.getLanguage(i))?null:g.highlight(h?v.trim():v,{language:i}).value},p=w(()=>n.inline||n.wordWrap?!1:n.showLineNumbers),f=()=>{if(e.default)return;const{value:i}=d;if(!i)return;const{language:v}=n,h=n.uri?window.decodeURIComponent(n.code):n.code;if(v){const c=l(v,h,n.trim);if(c!==null){if(n.inline)i.innerHTML=c;else{const s=i.querySelector(".__code__");s&&i.removeChild(s);const u=document.createElement("pre");u.className="__code__",u.innerHTML=c,i.appendChild(u)}return}}if(n.inline){i.textContent=h;return}const g=i.querySelector(".__code__");if(g)g.textContent=h;else{const c=document.createElement("pre");c.className="__code__",c.textContent=h,i.innerHTML="",i.appendChild(c)}};U(f),k(z(n,"language"),f),k(z(n,"code"),f),t||k(b,f);const S=M("Code","-code",ge,Z,n,r),j=w(()=>{const{common:{cubicBezierEaseInOut:i,fontFamilyMono:v},self:{textColor:h,fontSize:g,fontWeightStrong:c,lineNumberTextColor:s,"mono-3":u,"hue-1":R,"hue-2":T,"hue-3":o,"hue-4":m,"hue-5":C,"hue-5-2":_,"hue-6":L,"hue-6-2":$}}=S.value,{internalFontSize:I}=n;return{"--n-font-size":I?`${I}px`:g,"--n-font-family":v,"--n-font-weight-strong":c,"--n-bezier":i,"--n-text-color":h,"--n-mono-3":u,"--n-hue-1":R,"--n-hue-2":T,"--n-hue-3":o,"--n-hue-4":m,"--n-hue-5":C,"--n-hue-5-2":_,"--n-hue-6":L,"--n-hue-6-2":$,"--n-line-number-text-color":s}}),x=a?J("code",w(()=>`${n.internalFontSize||"a"}`),j,n):void 0;return{mergedClsPrefix:r,codeRef:d,mergedShowLineNumbers:p,lineNumbers:w(()=>{let i=1;const v=[];let h=!1;for(const g of n.code)g===`
`?(h=!0,v.push(i++)):h=!1;return h||v.push(i++),v.join(`
`)}),cssVars:a?void 0:j,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){var n,e;const{mergedClsPrefix:t,wordWrap:r,mergedShowLineNumbers:a,onRender:d}=this;return d==null||d(),y("code",{class:[`${t}-code`,this.themeClass,r&&`${t}-code--word-wrap`,a&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?y("pre",{class:`${t}-code__line-numbers`},this.lineNumbers):null,(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))}}),be=B({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:se("Log").localeRef}},render(){const{clsPrefix:n}=this;return y("div",{class:`${n}-log-loader`},y(ee,{clsPrefix:n,strokeWidth:24,scale:.85}),y("span",{class:`${n}-log-loader__content`},this.locale.loading))}}),Y=ne("n-log"),pe=B({props:{line:{type:String,default:""}},setup(n){const{trimRef:e,highlightRef:t,languageRef:r,mergedHljsRef:a}=A(Y),d=E(null),b=w(()=>e.value?n.line.trim():n.line);function l(){d.value&&(d.value.innerHTML=p(r.value,b.value))}function p(f,S){const{value:j}=a;return j&&f&&j.getLanguage(f)?j.highlight(S,{language:f}).value:S}return U(()=>{t.value&&l()}),k(z(n,"line"),()=>{t.value&&l()}),{highlight:t,selfRef:d,maybeTrimmedLines:b}},render(){const{highlight:n,maybeTrimmedLines:e}=this;return y("pre",{ref:"selfRef"},n?null:e)}}),je=N("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[H("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),N("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[te(),D("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),N("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),xe=Object.assign(Object.assign({},M.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),ye=B({name:"Log",props:xe,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=K(n),r=E(!1),a=w(()=>n.language!==void 0),d=w(()=>`calc(${Math.round(n.rows*n.lineHeight*n.fontSize)}px)`),b=w(()=>{const{log:s}=n;return s?s.split(`
`):n.lines}),l=E(null),p=M("Log","-log",je,le,n,e);function f(s){const u=s.target,R=u.firstElementChild;if(r.value){W(()=>{r.value=!1});return}const T=u.offsetHeight,o=u.scrollTop,m=R.offsetHeight,C=o,_=m-o-T;if(C<=n.offsetTop){const{onReachTop:L,onRequireMore:$}=n;$&&$("top"),L&&L()}if(_<=n.offsetBottom){const{onReachBottom:L,onRequireMore:$}=n;$&&$("bottom"),L&&L()}}const S=he(j,300);function j(s){if(r.value){W(()=>{r.value=!1});return}if(l.value){const{containerRef:u,contentRef:R}=l.value;if(u&&R){const T=u.offsetHeight,o=u.scrollTop,m=R.offsetHeight,C=o,_=m-o-T,L=s.deltaY;if(C===0&&L<0){const{onRequireMore:$}=n;$&&$("top")}if(_<=0&&L>0){const{onRequireMore:$}=n;$&&$("bottom")}}}}function x(s){const{value:u}=l;if(!u)return;const{silent:R,top:T,position:o}=s;R&&(r.value=!0),T!==void 0?u.scrollTo({left:0,top:T}):(o==="bottom"||o==="top")&&u.scrollTo({position:o})}function i(s=!1){F("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),x({position:"top",silent:s})}function v(s=!1){F("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),x({position:"bottom",silent:s})}oe(Y,{languageRef:z(n,"language"),mergedHljsRef:X(n),trimRef:z(n,"trim"),highlightRef:a});const h={scrollTo:x},g=w(()=>{const{self:{loaderFontSize:s,loaderTextColor:u,loaderColor:R,loaderBorder:T,loadingColor:o},common:{cubicBezierEaseInOut:m}}=p.value;return{"--n-bezier":m,"--n-loader-font-size":s,"--n-loader-border":T,"--n-loader-color":R,"--n-loader-text-color":u,"--n-loading-color":o}}),c=t?J("log",void 0,g,n):void 0;return Object.assign(Object.assign({},h),{mergedClsPrefix:e,scrollbarRef:l,mergedTheme:p,styleHeight:d,mergedLines:b,scrollToTop:i,scrollToBottom:v,handleWheel:S,handleScroll:f,cssVars:t?void 0:g,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender})},render(){const{mergedClsPrefix:n,mergedTheme:e,onRender:t}=this;return t==null||t(),y("div",{class:[`${n}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[y(re,{ref:"scrollbarRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>y(ve,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:e.peers.Code,themeOverrides:e.peerOverrides.Code},{default:()=>this.mergedLines.map((r,a)=>y(pe,{key:a,line:r}))})}),y(ie,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?y(be,{clsPrefix:n}):null})])}});export{ye as _};
