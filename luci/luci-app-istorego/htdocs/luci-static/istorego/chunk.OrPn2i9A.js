import{aW as N,i as D,v as z,ao as G,y as _,ap as U,B as O,f as M,D as B,r as R,j as H,k as p,E as w,aX as X,I as Y,J as W,aY as q,a9 as J,U as Z,b as Q,w as ee,aF as te,g as i,ac as ne,W as re,aZ as ae,ab as ie,F as oe}from"./index.js?v=W-TS2S5Y";import{t as se}from"./chunk.hhB8SqlY.js";const le=N&&"loading"in document.createElement("img"),de=(e={})=>{var t;const{root:d=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof d=="string"?document.querySelector(d):d)||document.documentElement})}},P=new WeakMap,T=new WeakMap,I=new WeakMap,ce=(e,t,d)=>{if(!e)return()=>{};const c=de(t),{root:v}=c.options;let s;const h=P.get(v);h?s=h:(s=new Map,P.set(v,s));let f,a;s.has(c.hash)?(a=s.get(c.hash),a[1].has(e)||(f=a[0],a[1].add(e),f.observe(e))):(f=new IntersectionObserver(m=>{m.forEach(g=>{if(g.isIntersecting){const b=T.get(g.target),E=I.get(g.target);b&&b(),E&&(E.value=!0)}})},c.options),f.observe(e),a=[f,new Set([e])],s.set(c.hash,a));let l=!1;const r=()=>{l||(T.delete(e),I.delete(e),l=!0,a[1].has(e)&&(a[0].unobserve(e),a[1].delete(e)),a[1].size<=0&&s.delete(c.hash),s.size||P.delete(v))};return T.set(e,r),I.set(e,d),r},he=D("n-avatar-group"),ue=z("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[G(_("&","--n-merged-color: var(--n-color-modal);")),U(_("&","--n-merged-color: var(--n-color-popover);")),_("img",`
 width: 100%;
 height: 100%;
 `),O("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),z("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),O("text","line-height: 1.25")]),ve=Object.assign(Object.assign({},w.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),xe=M({name:"Avatar",props:ve,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:d}=B(e),c=R(!1);let v=null;const s=R(null),h=R(null),f=()=>{const{value:n}=s;if(n&&(v===null||v!==n.innerHTML)){v=n.innerHTML;const{value:o}=h;if(o){const{offsetWidth:u,offsetHeight:y}=o,{offsetWidth:x,offsetHeight:C}=n,$=.9,L=Math.min(u/x*$,y/C*$,1);n.style.transform=`translateX(-50%) translateY(-50%) scale(${L})`}}},a=H(he,null),l=p(()=>{const{size:n}=e;if(n)return n;const{size:o}=a||{};return o||"medium"}),r=w("Avatar","-avatar",ue,X,e,t),m=H(se,null),g=p(()=>{if(a)return!0;const{round:n,circle:o}=e;return n!==void 0||o!==void 0?n||o:m?m.roundRef.value:!1}),b=p(()=>a?!0:e.bordered||!1),E=p(()=>{const n=l.value,o=g.value,u=b.value,{color:y}=e,{self:{borderRadius:x,fontSize:C,color:$,border:L,colorModal:A,colorPopover:V},common:{cubicBezierEaseInOut:K}}=r.value;let F;return typeof n=="number"?F=`${n}px`:F=r.value.self[Y("height",n)],{"--n-font-size":C,"--n-border":u?L:"none","--n-border-radius":o?"50%":x,"--n-color":y||$,"--n-color-modal":y||A,"--n-color-popover":y||V,"--n-bezier":K,"--n-merged-size":`var(--n-avatar-size-override, ${F})`}}),S=d?W("avatar",p(()=>{const n=l.value,o=g.value,u=b.value,{color:y}=e;let x="";return n&&(typeof n=="number"?x+=`a${n}`:x+=n[0]),o&&(x+="b"),u&&(x+="c"),y&&(x+=q(y)),x}),E,e):void 0,j=R(!e.lazy);J(()=>{if(e.lazy&&e.intersectionObserverOptions){let n;const o=Z(()=>{n==null||n(),n=void 0,e.lazy&&(n=ce(h.value,e.intersectionObserverOptions,j))});Q(()=>{o(),n==null||n()})}}),ee(()=>{var n;return e.src||((n=e.imgProps)===null||n===void 0?void 0:n.src)},()=>{c.value=!1});const k=R(!e.lazy);return{textRef:s,selfRef:h,mergedRoundRef:g,mergedClsPrefix:t,fitTextTransform:f,cssVars:d?void 0:E,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,hasLoadError:c,shouldStartLoading:j,loaded:k,mergedOnError:n=>{if(!j.value)return;c.value=!0;const{onError:o,imgProps:{onError:u}={}}=e;o==null||o(n),u==null||u(n)},mergedOnLoad:n=>{const{onLoad:o,imgProps:{onLoad:u}={}}=e;o==null||o(n),u==null||u(n),k.value=!0}}},render(){var e,t;const{$slots:d,src:c,mergedClsPrefix:v,lazy:s,onRender:h,loaded:f,hasLoadError:a,imgProps:l={}}=this;h==null||h();let r;const m=!f&&!a&&(this.renderPlaceholder?this.renderPlaceholder():(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e));return this.hasLoadError?r=this.renderFallback?this.renderFallback():te(d.fallback,()=>[i("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):r=ne(d.default,g=>{if(g)return i(re,{onResize:this.fitTextTransform},{default:()=>i("span",{ref:"textRef",class:`${v}-avatar__text`},g)});if(c||l.src){const b=this.src||l.src;return i("img",Object.assign(Object.assign({},l),{loading:le&&!this.intersectionObserverOptions&&s?"lazy":"eager",src:s&&this.intersectionObserverOptions?this.shouldStartLoading?b:void 0:b,"data-image-src":b,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[l.style||"",{objectFit:this.objectFit},m?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),i("span",{ref:"selfRef",class:[`${v}-avatar`,this.themeClass],style:this.cssVars},r,s&&m)}}),fe=z("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[z("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),z("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[z("thing-header-wrapper",`
 flex: 1;
 `)]),z("thing-main",`
 flex-grow: 1;
 `,[z("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[O("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),O("description",[_("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),O("content",[_("&:not(:first-child)",`
 margin-top: 12px;
 `)]),O("footer",[_("&:not(:first-child)",`
 margin-top: 12px;
 `)]),O("action",[_("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),ge=Object.assign(Object.assign({},w.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),ye=M({name:"Thing",props:ge,setup(e,{slots:t}){const{mergedClsPrefixRef:d,inlineThemeDisabled:c,mergedRtlRef:v}=B(e),s=w("Thing","-thing",fe,ae,e,d),h=ie("Thing",v,d),f=p(()=>{const{self:{titleTextColor:l,textColor:r,titleFontWeight:m,fontSize:g},common:{cubicBezierEaseInOut:b}}=s.value;return{"--n-bezier":b,"--n-font-size":g,"--n-text-color":r,"--n-title-font-weight":m,"--n-title-text-color":l}}),a=c?W("thing",void 0,f,e):void 0;return()=>{var l;const{value:r}=d,m=h?h.value:!1;return(l=a==null?void 0:a.onRender)===null||l===void 0||l.call(a),i("div",{class:[`${r}-thing`,a==null?void 0:a.themeClass,m&&`${r}-thing--rtl`],style:c?void 0:f.value},t.avatar&&e.contentIndented?i("div",{class:`${r}-thing-avatar`},t.avatar()):null,i("div",{class:`${r}-thing-main`},!e.contentIndented&&(t.header||e.title||t["header-extra"]||e.titleExtra||t.avatar)?i("div",{class:`${r}-thing-avatar-header-wrapper`},t.avatar?i("div",{class:`${r}-thing-avatar`},t.avatar()):null,t.header||e.title||t["header-extra"]||e.titleExtra?i("div",{class:`${r}-thing-header-wrapper`},i("div",{class:`${r}-thing-header`},t.header||e.title?i("div",{class:`${r}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?i("div",{class:`${r}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null),t.description||e.description?i("div",{class:[`${r}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},t.description?t.description():e.description):null):null):i(oe,null,t.header||e.title||t["header-extra"]||e.titleExtra?i("div",{class:`${r}-thing-header`},t.header||e.title?i("div",{class:`${r}-thing-header__title`},t.header?t.header():e.title):null,t["header-extra"]||e.titleExtra?i("div",{class:`${r}-thing-header__extra`},t["header-extra"]?t["header-extra"]():e.titleExtra):null):null,t.description||e.description?i("div",{class:[`${r}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},t.description?t.description():e.description):null),t.default||e.content?i("div",{class:[`${r}-thing-main__content`,e.contentClass],style:e.contentStyle},t.default?t.default():e.content):null,t.footer?i("div",{class:`${r}-thing-main__footer`},t.footer()):null,t.action?i("div",{class:`${r}-thing-main__action`},t.action()):null))}}});export{xe as _,ye as a};
