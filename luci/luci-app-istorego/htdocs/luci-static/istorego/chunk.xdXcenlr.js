import{f as N,df as xo,a9 as je,b$ as wo,aV as yo,k as A,r as R,u as Ie,cY as Me,b0 as ge,g as r,m as Co,W as Te,dj as zo,v as _,B as v,y as P,D as Ke,E as we,dk as So,j as Ue,aJ as Ro,I as ie,J as Ye,O as se,cQ as _o,cO as Ge,C as Be,cS as Io,aF as ae,aL as To,i as Bo,w as Ae,cV as Ao,A as V,z as le,dl as Eo,az as Fo,b1 as ko,U as Le,l as Po,ab as $o,ac as me,N as Mo,F as Lo,dm as Vo,aG as Ve,e as De,H as k,cZ as Do,c as We}from"./index.js?v=W-TS2S5Y";import{g as Wo,h as Re,d as Ho,u as No}from"./chunk.k96eJale.js";import{u as Xe}from"./chunk.Bl57umnh.js";function He(t){return t&-t}class Oo{constructor(l,n){this.l=l,this.min=n;const b=new Array(l+1);for(let m=0;m<l+1;++m)b[m]=0;this.ft=b}add(l,n){if(n===0)return;const{l:b,ft:m}=this;for(l+=1;l<=b;)m[l]+=n,l+=He(l)}get(l){return this.sum(l+1)-this.sum(l)}sum(l){if(l===void 0&&(l=this.l),l<=0)return 0;const{ft:n,min:b,l:m}=this;if(l>m)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=l*b;for(;l>0;)u+=n[l],l-=He(l);return u}getBound(l){let n=0,b=this.l;for(;b>n;){const m=Math.floor((n+b)/2),u=this.sum(m);if(u>l){b=m;continue}else if(u<l){if(n===m)return this.sum(n+1)<=l?n+1:m;n=m}else return m}return n}}let be;function jo(){return typeof document=="undefined"?!1:(be===void 0&&("matchMedia"in window?be=window.matchMedia("(pointer:coarse)").matches:be=!1),be)}let _e;function Ne(){return typeof document=="undefined"?1:(_e===void 0&&(_e="chrome"in window?window.devicePixelRatio:1),_e)}const Ko=Re(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Re("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Re("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),un=N({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(t){const l=xo();Ko.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Wo,ssr:l}),je(()=>{const{defaultScrollIndex:a,defaultScrollKey:f}=t;a!=null?E({index:a}):f!=null&&E({key:f})});let n=!1,b=!1;wo(()=>{if(n=!1,!b){b=!0;return}E({top:p.value,left:i})}),yo(()=>{n=!0,b||(b=!0)});const m=A(()=>{const a=new Map,{keyField:f}=t;return t.items.forEach((y,B)=>{a.set(y[f],B)}),a}),u=R(null),g=R(void 0),d=new Map,h=A(()=>{const{items:a,itemSize:f,keyField:y}=t,B=new Oo(a.length,f);return a.forEach((I,F)=>{const z=I[y],T=d.get(z);T!==void 0&&B.add(F,T)}),B}),c=R(0);let i=0;const p=R(0),x=Ie(()=>Math.max(h.value.getBound(p.value-Me(t.paddingTop))-1,0)),D=A(()=>{const{value:a}=g;if(a===void 0)return[];const{items:f,itemSize:y}=t,B=x.value,I=Math.min(B+Math.ceil(a/y+1),f.length-1),F=[];for(let z=B;z<=I;++z)F.push(f[z]);return F}),E=(a,f)=>{if(typeof a=="number"){$(a,f,"auto");return}const{left:y,top:B,index:I,key:F,position:z,behavior:T,debounce:H=!0}=a;if(y!==void 0||B!==void 0)$(y,B,T);else if(I!==void 0)ce(I,T,H);else if(F!==void 0){const ee=m.value.get(F);ee!==void 0&&ce(ee,T,H)}else z==="bottom"?$(0,Number.MAX_SAFE_INTEGER,T):z==="top"&&$(0,0,T)};let O,L=null;function ce(a,f,y){const{value:B}=h,I=B.sum(a)+Me(t.paddingTop);if(!y)u.value.scrollTo({left:0,top:I,behavior:f});else{O=a,L!==null&&window.clearTimeout(L),L=window.setTimeout(()=>{O=void 0,L=null},16);const{scrollTop:F,offsetHeight:z}=u.value;if(I>F){const T=B.get(a);I+T<=F+z||u.value.scrollTo({left:0,top:I+T-z,behavior:f})}else u.value.scrollTo({left:0,top:I,behavior:f})}}function $(a,f,y){u.value.scrollTo({left:a,top:f,behavior:y})}function Y(a,f){var y,B,I;if(n||t.ignoreItemResize||U(f.target))return;const{value:F}=h,z=m.value.get(a),T=F.get(z),H=(I=(B=(y=f.borderBoxSize)===null||y===void 0?void 0:y[0])===null||B===void 0?void 0:B.blockSize)!==null&&I!==void 0?I:f.contentRect.height;if(H===T)return;H-t.itemSize===0?d.delete(a):d.set(a,H-t.itemSize);const X=H-T;if(X===0)return;F.add(z,X);const j=u.value;if(j!=null){if(O===void 0){const oe=F.sum(z);j.scrollTop>oe&&j.scrollBy(0,X)}else if(z<O)j.scrollBy(0,X);else if(z===O){const oe=F.sum(z);H+oe>j.scrollTop+j.offsetHeight&&j.scrollBy(0,X)}M()}c.value++}const Q=!jo();let W=!1;function ye(a){var f;(f=t.onScroll)===null||f===void 0||f.call(t,a),(!Q||!W)&&M()}function K(a){var f;if((f=t.onWheel)===null||f===void 0||f.call(t,a),Q){const y=u.value;if(y!=null){if(a.deltaX===0&&(y.scrollTop===0&&a.deltaY<=0||y.scrollTop+y.offsetHeight>=y.scrollHeight&&a.deltaY>=0))return;a.preventDefault(),y.scrollTop+=a.deltaY/Ne(),y.scrollLeft+=a.deltaX/Ne(),M(),W=!0,Ho(()=>{W=!1})}}}function G(a){if(n||U(a.target)||a.contentRect.height===g.value)return;g.value=a.contentRect.height;const{onResize:f}=t;f!==void 0&&f(a)}function M(){const{value:a}=u;a!=null&&(p.value=a.scrollTop,i=a.scrollLeft)}function U(a){let f=a;for(;f!==null;){if(f.style.display==="none")return!0;f=f.parentElement}return!1}return{listHeight:g,listStyle:{overflow:"auto"},keyToIndex:m,itemsStyle:A(()=>{const{itemResizable:a}=t,f=ge(h.value.sum());return c.value,[t.itemsStyle,{boxSizing:"content-box",height:a?"":f,minHeight:a?f:"",paddingTop:ge(t.paddingTop),paddingBottom:ge(t.paddingBottom)}]}),visibleItemsStyle:A(()=>(c.value,{transform:`translateY(${ge(h.value.sum(x.value))})`})),viewportItems:D,listElRef:u,itemsElRef:R(null),scrollTo:E,handleListResize:G,handleListScroll:ye,handleListWheel:K,handleItemResize:Y}},render(){const{itemResizable:t,keyField:l,keyToIndex:n,visibleItemsTag:b}=this;return r(Te,{onResize:this.handleListResize},{default:()=>{var m,u;return r("div",Co(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(b,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(g=>{const d=g[l],h=n.get(d),c=this.$slots.default({item:g,index:h})[0];return t?r(Te,{key:d,onResize:i=>this.handleItemResize(d,i)},{default:()=>c}):(c.key=d,c)})})]):(u=(m=this.$slots).empty)===null||u===void 0?void 0:u.call(m)])}})}}),Uo=N({name:"Eye",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),r("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Yo=N({name:"EyeOff",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),r("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),r("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),r("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),r("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Go=N({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Xo=N({name:"ChevronDown",render(){return r("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Zo=zo("clear",r("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},r("g",{fill:"currentColor","fill-rule":"nonzero"},r("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),qo=_("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[v("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[P("+",[v("description",`
 margin-top: 8px;
 `)])]),v("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),v("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Jo=Object.assign(Object.assign({},we.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),dn=N({name:"Empty",props:Jo,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:n}=Ke(t),b=we("Empty","-empty",qo,So,t,l),{localeRef:m}=Xe("Empty"),u=Ue(Ro,null),g=A(()=>{var i,p,x;return(i=t.description)!==null&&i!==void 0?i:(x=(p=u==null?void 0:u.mergedComponentPropsRef.value)===null||p===void 0?void 0:p.Empty)===null||x===void 0?void 0:x.description}),d=A(()=>{var i,p;return((p=(i=u==null?void 0:u.mergedComponentPropsRef.value)===null||i===void 0?void 0:i.Empty)===null||p===void 0?void 0:p.renderIcon)||(()=>r(Go,null))}),h=A(()=>{const{size:i}=t,{common:{cubicBezierEaseInOut:p},self:{[ie("iconSize",i)]:x,[ie("fontSize",i)]:D,textColor:E,iconColor:O,extraTextColor:L}}=b.value;return{"--n-icon-size":x,"--n-font-size":D,"--n-bezier":p,"--n-text-color":E,"--n-icon-color":O,"--n-extra-text-color":L}}),c=n?Ye("empty",A(()=>{let i="";const{size:p}=t;return i+=p[0],i}),h,t):void 0;return{mergedClsPrefix:l,mergedRenderIcon:d,localizedDescription:A(()=>g.value||m.value.description),cssVars:n?void 0:h,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:t,mergedClsPrefix:l,onRender:n}=this;return n==null||n(),r("div",{class:[`${l}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${l}-empty__icon`},t.icon?t.icon():r(se,{clsPrefix:l},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${l}-empty__description`},t.default?t.default():this.localizedDescription):null,t.extra?r("div",{class:`${l}-empty__extra`},t.extra()):null)}}),Qo=_("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[P(">",[v("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[P("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),P("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),v("placeholder",`
 display: flex;
 `),v("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[_o({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ee=N({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return Ge("-base-clear",Qo,Be(t,"clsPrefix")),{handleMouseDown(l){l.preventDefault()}}},render(){const{clsPrefix:t}=this;return r("div",{class:`${t}-base-clear`},r(Io,null,{default:()=>{var l,n;return this.show?r("div",{key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},ae(this.$slots.icon,()=>[r(se,{clsPrefix:t},{default:()=>r(Zo,null)})])):r("div",{key:"icon",class:`${t}-base-clear__placeholder`},(n=(l=this.$slots).placeholder)===null||n===void 0?void 0:n.call(l))}}))}}),en=N({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:l}){return()=>{const{clsPrefix:n}=t;return r(To,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?r(Ee,{clsPrefix:n,show:t.showClear,onClear:t.onClear},{placeholder:()=>r(se,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>ae(l.default,()=>[r(Xo,null)])})}):null})}}}),Ze=Bo("n-input");function tn(t){let l=0;for(const n of t)l++;return l}function xe(t){return t===""||t==null}function on(t){const l=R(null);function n(){const{value:u}=t;if(!(u!=null&&u.focus)){m();return}const{selectionStart:g,selectionEnd:d,value:h}=u;if(g==null||d==null){m();return}l.value={start:g,end:d,beforeText:h.slice(0,g),afterText:h.slice(d)}}function b(){var u;const{value:g}=l,{value:d}=t;if(!g||!d)return;const{value:h}=d,{start:c,beforeText:i,afterText:p}=g;let x=h.length;if(h.endsWith(p))x=h.length-p.length;else if(h.startsWith(i))x=i.length;else{const D=i[c-1],E=h.indexOf(D,c-1);E!==-1&&(x=E+1)}(u=d.setSelectionRange)===null||u===void 0||u.call(d,x,x)}function m(){l.value=null}return Ae(t,m),{recordCursor:n,restoreCursor:b}}const Oe=N({name:"InputWordCount",setup(t,{slots:l}){const{mergedValueRef:n,maxlengthRef:b,mergedClsPrefixRef:m,countGraphemesRef:u}=Ue(Ze),g=A(()=>{const{value:d}=n;return d===null||Array.isArray(d)?0:(u.value||tn)(d)});return()=>{const{value:d}=b,{value:h}=n;return r("span",{class:`${m.value}-input-word-count`},Ao(l.default,{value:h===null||Array.isArray(h)?"":h},()=>[d===void 0?g.value:`${g.value} / ${d}`]))}}}),nn=_("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[v("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),v("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),v("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[P("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),P("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),P("&:-webkit-autofill ~",[v("placeholder","display: none;")])]),V("round",[le("textarea","border-radius: calc(var(--n-height) / 2);")]),v("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[P("span",`
 width: 100%;
 display: inline-block;
 `)]),V("textarea",[v("placeholder","overflow: visible;")]),le("autosize","width: 100%;"),V("autosize",[v("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),_("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),v("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),v("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[P("&[type=password]::-ms-reveal","display: none;"),P("+",[v("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),le("textarea",[v("placeholder","white-space: nowrap;")]),v("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),V("textarea","width: 100%;",[_("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),V("resizable",[_("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),v("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),v("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),V("pair",[v("input-el, placeholder","text-align: center;"),v("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[_("icon",`
 color: var(--n-icon-color);
 `),_("base-icon",`
 color: var(--n-icon-color);
 `)])]),V("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[v("border","border: var(--n-border-disabled);"),v("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),v("placeholder","color: var(--n-placeholder-color-disabled);"),v("separator","color: var(--n-text-color-disabled);",[_("icon",`
 color: var(--n-icon-color-disabled);
 `),_("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),_("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),v("suffix, prefix","color: var(--n-text-color-disabled);",[_("icon",`
 color: var(--n-icon-color-disabled);
 `),_("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),le("disabled",[v("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[P("&:hover",`
 color: var(--n-icon-color-hover);
 `),P("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),P("&:hover",[v("state-border","border: var(--n-border-hover);")]),V("focus","background-color: var(--n-color-focus);",[v("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),v("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),v("state-border",`
 border-color: #0000;
 z-index: 1;
 `),v("prefix","margin-right: 4px;"),v("suffix",`
 margin-left: 4px;
 `),v("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[_("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),_("base-clear",`
 font-size: var(--n-icon-size);
 `,[v("placeholder",[_("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),P(">",[_("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),_("base-icon",`
 font-size: var(--n-icon-size);
 `)]),_("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>V(`${t}-status`,[le("disabled",[_("base-loading",`
 color: var(--n-loading-color-${t})
 `),v("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),v("state-border",`
 border: var(--n-border-${t});
 `),P("&:hover",[v("state-border",`
 border: var(--n-border-hover-${t});
 `)]),P("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[v("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),V("focus",`
 background-color: var(--n-color-focus-${t});
 `,[v("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]),rn=_("input",[V("disabled",[v("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),ln=Object.assign(Object.assign({},we.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),fn=N({name:"Input",props:ln,setup(t){const{mergedClsPrefixRef:l,mergedBorderedRef:n,inlineThemeDisabled:b,mergedRtlRef:m}=Ke(t),u=we("Input","-input",nn,Vo,t,l);Eo&&Ge("-input-safari",rn,l);const g=R(null),d=R(null),h=R(null),c=R(null),i=R(null),p=R(null),x=R(null),D=on(x),E=R(null),{localeRef:O}=Xe("Input"),L=R(t.defaultValue),ce=Be(t,"value"),$=No(ce,L),Y=Fo(t),{mergedSizeRef:Q,mergedDisabledRef:W,mergedStatusRef:ye}=Y,K=R(!1),G=R(!1),M=R(!1),U=R(!1);let a=null;const f=A(()=>{const{placeholder:e,pair:o}=t;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[O.value.placeholder]:[e]}),y=A(()=>{const{value:e}=M,{value:o}=$,{value:s}=f;return!e&&(xe(o)||Array.isArray(o)&&xe(o[0]))&&s[0]}),B=A(()=>{const{value:e}=M,{value:o}=$,{value:s}=f;return!e&&s[1]&&(xe(o)||Array.isArray(o)&&xe(o[1]))}),I=Ie(()=>t.internalForceFocus||K.value),F=Ie(()=>{if(W.value||t.readonly||!t.clearable||!I.value&&!G.value)return!1;const{value:e}=$,{value:o}=I;return t.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(G.value||o):!!e&&(G.value||o)}),z=A(()=>{const{showPasswordOn:e}=t;if(e)return e;if(t.showPasswordToggle)return"click"}),T=R(!1),H=A(()=>{const{textDecoration:e}=t;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),ee=R(void 0),X=()=>{var e,o;if(t.type==="textarea"){const{autosize:s}=t;if(s&&(ee.value=(o=(e=E.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!d.value||typeof s=="boolean")return;const{paddingTop:C,paddingBottom:S,lineHeight:w}=window.getComputedStyle(d.value),Z=Number(C.slice(0,-2)),q=Number(S.slice(0,-2)),J=Number(w.slice(0,-2)),{value:ne}=h;if(!ne)return;if(s.minRows){const re=Math.max(s.minRows,1),Se=`${Z+q+J*re}px`;ne.style.minHeight=Se}if(s.maxRows){const re=`${Z+q+J*s.maxRows}px`;ne.style.maxHeight=re}}},j=A(()=>{const{maxlength:e}=t;return e===void 0?void 0:Number(e)});je(()=>{const{value:e}=$;Array.isArray(e)||ze(e)});const oe=ko().proxy;function ue(e,o){const{onUpdateValue:s,"onUpdate:value":C,onInput:S}=t,{nTriggerFormInput:w}=Y;s&&k(s,e,o),C&&k(C,e,o),S&&k(S,e,o),L.value=e,w()}function de(e,o){const{onChange:s}=t,{nTriggerFormChange:C}=Y;s&&k(s,e,o),L.value=e,C()}function qe(e){const{onBlur:o}=t,{nTriggerFormBlur:s}=Y;o&&k(o,e),s()}function Je(e){const{onFocus:o}=t,{nTriggerFormFocus:s}=Y;o&&k(o,e),s()}function Qe(e){const{onClear:o}=t;o&&k(o,e)}function et(e){const{onInputBlur:o}=t;o&&k(o,e)}function tt(e){const{onInputFocus:o}=t;o&&k(o,e)}function ot(){const{onDeactivate:e}=t;e&&k(e)}function nt(){const{onActivate:e}=t;e&&k(e)}function rt(e){const{onClick:o}=t;o&&k(o,e)}function lt(e){const{onWrapperFocus:o}=t;o&&k(o,e)}function it(e){const{onWrapperBlur:o}=t;o&&k(o,e)}function at(){M.value=!0}function st(e){M.value=!1,e.target===p.value?fe(e,1):fe(e,0)}function fe(e,o=0,s="input"){const C=e.target.value;if(ze(C),e instanceof InputEvent&&!e.isComposing&&(M.value=!1),t.type==="textarea"){const{value:w}=E;w&&w.syncUnifiedContainer()}if(a=C,M.value)return;D.recordCursor();const S=ct(C);if(S)if(!t.pair)s==="input"?ue(C,{source:o}):de(C,{source:o});else{let{value:w}=$;Array.isArray(w)?w=[w[0],w[1]]:w=["",""],w[o]=C,s==="input"?ue(w,{source:o}):de(w,{source:o})}oe.$forceUpdate(),S||Ve(D.restoreCursor)}function ct(e){const{countGraphemes:o,maxlength:s,minlength:C}=t;if(o){let w;if(s!==void 0&&(w===void 0&&(w=o(e)),w>Number(s))||C!==void 0&&(w===void 0&&(w=o(e)),w<Number(s)))return!1}const{allowInput:S}=t;return typeof S=="function"?S(e):!0}function ut(e){et(e),e.relatedTarget===g.value&&ot(),e.relatedTarget!==null&&(e.relatedTarget===i.value||e.relatedTarget===p.value||e.relatedTarget===d.value)||(U.value=!1),he(e,"blur"),x.value=null}function dt(e,o){tt(e),K.value=!0,U.value=!0,nt(),he(e,"focus"),o===0?x.value=i.value:o===1?x.value=p.value:o===2&&(x.value=d.value)}function ft(e){t.passivelyActivated&&(it(e),he(e,"blur"))}function ht(e){t.passivelyActivated&&(K.value=!0,lt(e),he(e,"focus"))}function he(e,o){e.relatedTarget!==null&&(e.relatedTarget===i.value||e.relatedTarget===p.value||e.relatedTarget===d.value||e.relatedTarget===g.value)||(o==="focus"?(Je(e),K.value=!0):o==="blur"&&(qe(e),K.value=!1))}function vt(e,o){fe(e,o,"change")}function pt(e){rt(e)}function gt(e){Qe(e),Fe()}function Fe(){t.pair?(ue(["",""],{source:"clear"}),de(["",""],{source:"clear"})):(ue("",{source:"clear"}),de("",{source:"clear"}))}function mt(e){const{onMousedown:o}=t;o&&o(e);const{tagName:s}=e.target;if(s!=="INPUT"&&s!=="TEXTAREA"){if(t.resizable){const{value:C}=g;if(C){const{left:S,top:w,width:Z,height:q}=C.getBoundingClientRect(),J=14;if(S+Z-J<e.clientX&&e.clientX<S+Z&&w+q-J<e.clientY&&e.clientY<w+q)return}}e.preventDefault(),K.value||ke()}}function bt(){var e;G.value=!0,t.type==="textarea"&&((e=E.value)===null||e===void 0||e.handleMouseEnterWrapper())}function xt(){var e;G.value=!1,t.type==="textarea"&&((e=E.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function wt(){W.value||z.value==="click"&&(T.value=!T.value)}function yt(e){if(W.value)return;e.preventDefault();const o=C=>{C.preventDefault(),We("mouseup",document,o)};if(De("mouseup",document,o),z.value!=="mousedown")return;T.value=!0;const s=()=>{T.value=!1,We("mouseup",document,s)};De("mouseup",document,s)}function Ct(e){t.onKeyup&&k(t.onKeyup,e)}function zt(e){switch(t.onKeydown&&k(t.onKeydown,e),e.key){case"Escape":Ce();break;case"Enter":St(e);break}}function St(e){var o,s;if(t.passivelyActivated){const{value:C}=U;if(C){t.internalDeactivateOnEnter&&Ce();return}e.preventDefault(),t.type==="textarea"?(o=d.value)===null||o===void 0||o.focus():(s=i.value)===null||s===void 0||s.focus()}}function Ce(){t.passivelyActivated&&(U.value=!1,Ve(()=>{var e;(e=g.value)===null||e===void 0||e.focus()}))}function ke(){var e,o,s;W.value||(t.passivelyActivated?(e=g.value)===null||e===void 0||e.focus():((o=d.value)===null||o===void 0||o.focus(),(s=i.value)===null||s===void 0||s.focus()))}function Rt(){var e;!((e=g.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function _t(){var e,o;(e=d.value)===null||e===void 0||e.select(),(o=i.value)===null||o===void 0||o.select()}function It(){W.value||(d.value?d.value.focus():i.value&&i.value.focus())}function Tt(){const{value:e}=g;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&Ce()}function Bt(e){if(t.type==="textarea"){const{value:o}=d;o==null||o.scrollTo(e)}else{const{value:o}=i;o==null||o.scrollTo(e)}}function ze(e){const{type:o,pair:s,autosize:C}=t;if(!s&&C)if(o==="textarea"){const{value:S}=h;S&&(S.textContent=(e!=null?e:"")+`\r
`)}else{const{value:S}=c;S&&(e?S.textContent=e:S.innerHTML="&nbsp;")}}function At(){X()}const Pe=R({top:"0"});function Et(e){var o;const{scrollTop:s}=e.target;Pe.value.top=`${-s}px`,(o=E.value)===null||o===void 0||o.syncUnifiedContainer()}let ve=null;Le(()=>{const{autosize:e,type:o}=t;e&&o==="textarea"?ve=Ae($,s=>{!Array.isArray(s)&&s!==a&&ze(s)}):ve==null||ve()});let pe=null;Le(()=>{t.type==="textarea"?pe=Ae($,e=>{var o;!Array.isArray(e)&&e!==a&&((o=E.value)===null||o===void 0||o.syncUnifiedContainer())}):pe==null||pe()}),Po(Ze,{mergedValueRef:$,maxlengthRef:j,mergedClsPrefixRef:l,countGraphemesRef:Be(t,"countGraphemes")});const Ft={wrapperElRef:g,inputElRef:i,textareaElRef:d,isCompositing:M,clear:Fe,focus:ke,blur:Rt,select:_t,deactivate:Tt,activate:It,scrollTo:Bt},kt=$o("Input",m,l),$e=A(()=>{const{value:e}=Q,{common:{cubicBezierEaseInOut:o},self:{color:s,borderRadius:C,textColor:S,caretColor:w,caretColorError:Z,caretColorWarning:q,textDecorationColor:J,border:ne,borderDisabled:re,borderHover:Se,borderFocus:Pt,placeholderColor:$t,placeholderColorDisabled:Mt,lineHeightTextarea:Lt,colorDisabled:Vt,colorFocus:Dt,textColorDisabled:Wt,boxShadowFocus:Ht,iconSize:Nt,colorFocusWarning:Ot,boxShadowFocusWarning:jt,borderWarning:Kt,borderFocusWarning:Ut,borderHoverWarning:Yt,colorFocusError:Gt,boxShadowFocusError:Xt,borderError:Zt,borderFocusError:qt,borderHoverError:Jt,clearSize:Qt,clearColor:eo,clearColorHover:to,clearColorPressed:oo,iconColor:no,iconColorDisabled:ro,suffixTextColor:lo,countTextColor:io,countTextColorDisabled:ao,iconColorHover:so,iconColorPressed:co,loadingColor:uo,loadingColorError:fo,loadingColorWarning:ho,[ie("padding",e)]:vo,[ie("fontSize",e)]:po,[ie("height",e)]:go}}=u.value,{left:mo,right:bo}=Do(vo);return{"--n-bezier":o,"--n-count-text-color":io,"--n-count-text-color-disabled":ao,"--n-color":s,"--n-font-size":po,"--n-border-radius":C,"--n-height":go,"--n-padding-left":mo,"--n-padding-right":bo,"--n-text-color":S,"--n-caret-color":w,"--n-text-decoration-color":J,"--n-border":ne,"--n-border-disabled":re,"--n-border-hover":Se,"--n-border-focus":Pt,"--n-placeholder-color":$t,"--n-placeholder-color-disabled":Mt,"--n-icon-size":Nt,"--n-line-height-textarea":Lt,"--n-color-disabled":Vt,"--n-color-focus":Dt,"--n-text-color-disabled":Wt,"--n-box-shadow-focus":Ht,"--n-loading-color":uo,"--n-caret-color-warning":q,"--n-color-focus-warning":Ot,"--n-box-shadow-focus-warning":jt,"--n-border-warning":Kt,"--n-border-focus-warning":Ut,"--n-border-hover-warning":Yt,"--n-loading-color-warning":ho,"--n-caret-color-error":Z,"--n-color-focus-error":Gt,"--n-box-shadow-focus-error":Xt,"--n-border-error":Zt,"--n-border-focus-error":qt,"--n-border-hover-error":Jt,"--n-loading-color-error":fo,"--n-clear-color":eo,"--n-clear-size":Qt,"--n-clear-color-hover":to,"--n-clear-color-pressed":oo,"--n-icon-color":no,"--n-icon-color-hover":so,"--n-icon-color-pressed":co,"--n-icon-color-disabled":ro,"--n-suffix-text-color":lo}}),te=b?Ye("input",A(()=>{const{value:e}=Q;return e[0]}),$e,t):void 0;return Object.assign(Object.assign({},Ft),{wrapperElRef:g,inputElRef:i,inputMirrorElRef:c,inputEl2Ref:p,textareaElRef:d,textareaMirrorElRef:h,textareaScrollbarInstRef:E,rtlEnabled:kt,uncontrolledValue:L,mergedValue:$,passwordVisible:T,mergedPlaceholder:f,showPlaceholder1:y,showPlaceholder2:B,mergedFocus:I,isComposing:M,activated:U,showClearButton:F,mergedSize:Q,mergedDisabled:W,textDecorationStyle:H,mergedClsPrefix:l,mergedBordered:n,mergedShowPasswordOn:z,placeholderStyle:Pe,mergedStatus:ye,textAreaScrollContainerWidth:ee,handleTextAreaScroll:Et,handleCompositionStart:at,handleCompositionEnd:st,handleInput:fe,handleInputBlur:ut,handleInputFocus:dt,handleWrapperBlur:ft,handleWrapperFocus:ht,handleMouseEnter:bt,handleMouseLeave:xt,handleMouseDown:mt,handleChange:vt,handleClick:pt,handleClear:gt,handlePasswordToggleClick:wt,handlePasswordToggleMousedown:yt,handleWrapperKeydown:zt,handleWrapperKeyup:Ct,handleTextAreaMirrorResize:At,getTextareaScrollContainer:()=>d.value,mergedTheme:u,cssVars:b?void 0:$e,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender})},render(){var t,l;const{mergedClsPrefix:n,mergedStatus:b,themeClass:m,type:u,countGraphemes:g,onRender:d}=this,h=this.$slots;return d==null||d(),r("div",{ref:"wrapperElRef",class:[`${n}-input`,m,b&&`${n}-input--${b}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:u==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&u!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},r("div",{class:`${n}-input-wrapper`},me(h.prefix,c=>c&&r("div",{class:`${n}-input__prefix`},c)),u==="textarea"?r(Mo,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,i;const{textAreaScrollContainerWidth:p}=this,x={width:this.autosize&&p&&`${p}px`};return r(Lo,null,r("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:g?void 0:this.maxlength,minlength:g?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(i=this.inputProps)===null||i===void 0?void 0:i.style,x],onBlur:this.handleInputBlur,onFocus:D=>{this.handleInputFocus(D,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?r("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,x],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?r(Te,{onResize:this.handleTextAreaMirrorResize},{default:()=>r("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):r("div",{class:`${n}-input__input`},r("input",Object.assign({type:u==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":u},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(t=this.inputProps)===null||t===void 0?void 0:t.class],style:[this.textDecorationStyle[0],(l=this.inputProps)===null||l===void 0?void 0:l.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:g?void 0:this.maxlength,minlength:g?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,0)},onInput:c=>{this.handleInput(c,0)},onChange:c=>{this.handleChange(c,0)}})),this.showPlaceholder1?r("div",{class:`${n}-input__placeholder`},r("span",null,this.mergedPlaceholder[0])):null,this.autosize?r("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&me(h.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?r("div",{class:`${n}-input__suffix`},[me(h["clear-icon-placeholder"],i=>(this.clearable||i)&&r(Ee,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>i,icon:()=>{var p,x;return(x=(p=this.$slots)["clear-icon"])===null||x===void 0?void 0:x.call(p)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?r(en,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?r(Oe,null,{default:i=>{var p;return(p=h.count)===null||p===void 0?void 0:p.call(h,i)}}):null,this.mergedShowPasswordOn&&this.type==="password"?r("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ae(h["password-visible-icon"],()=>[r(se,{clsPrefix:n},{default:()=>r(Uo,null)})]):ae(h["password-invisible-icon"],()=>[r(se,{clsPrefix:n},{default:()=>r(Yo,null)})])):null]):null)),this.pair?r("span",{class:`${n}-input__separator`},ae(h.separator,()=>[this.separator])):null,this.pair?r("div",{class:`${n}-input-wrapper`},r("div",{class:`${n}-input__input`},r("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:g?void 0:this.maxlength,minlength:g?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,1)},onInput:c=>{this.handleInput(c,1)},onChange:c=>{this.handleChange(c,1)}}),this.showPlaceholder2?r("div",{class:`${n}-input__placeholder`},r("span",null,this.mergedPlaceholder[1])):null),me(h.suffix,c=>(this.clearable||c)&&r("div",{class:`${n}-input__suffix`},[this.clearable&&r(Ee,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var i;return(i=h["clear-icon"])===null||i===void 0?void 0:i.call(h)},placeholder:()=>{var i;return(i=h["clear-icon-placeholder"])===null||i===void 0?void 0:i.call(h)}}),c]))):null,this.mergedBordered?r("div",{class:`${n}-input__border`}):null,this.mergedBordered?r("div",{class:`${n}-input__state-border`}):null,this.showCount&&u==="textarea"?r(Oe,null,{default:c=>{var i;const{renderCount:p}=this;return p?p(c):(i=h.count)===null||i===void 0?void 0:i.call(h,c)}}):null)}});export{dn as N,un as V,fn as _,en as a};
