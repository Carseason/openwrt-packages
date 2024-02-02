import{v as d,B as t,A as u,R as H,y as j,f as F,D as M,E as C,ab as O,k as p,J as N,r as V,g as r,P as W,dg as D,cZ as J,I as i,m as K,dh as Q,aF as Z,O as q,aP as G,aQ as U,aR as X,aO as Y,ac as ee}from"./index.js?v=W-TS2S5Y";const oe=d("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[t("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),u("closable",[d("alert-body",[t("title",`
 padding-right: 24px;
 `)])]),t("icon",{color:"var(--n-icon-color)"}),d("alert-body",{padding:"var(--n-padding)"},[t("title",{color:"var(--n-title-text-color)"}),t("content",{color:"var(--n-content-text-color)"})]),H({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),t("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),t("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),u("show-icon",[d("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),u("right-adjust",[d("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),d("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[t("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[j("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),re=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ie=F({name:"Alert",inheritAttrs:!1,props:re,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:l,inlineThemeDisabled:g,mergedRtlRef:v}=M(n),h=C("Alert","-alert",oe,D,n,e),z=O("Alert",v,e),b=p(()=>{const{common:{cubicBezierEaseInOut:a},self:o}=h.value,{fontSize:x,borderRadius:R,titleFontWeight:I,lineHeight:_,iconSize:A,iconMargin:m,iconMarginRtl:P,closeIconSize:$,closeBorderRadius:w,closeSize:B,closeMargin:T,closeMarginRtl:k,padding:S}=o,{type:s}=n,{left:E,right:L}=J(m);return{"--n-bezier":a,"--n-color":o[i("color",s)],"--n-close-icon-size":$,"--n-close-border-radius":w,"--n-close-color-hover":o[i("closeColorHover",s)],"--n-close-color-pressed":o[i("closeColorPressed",s)],"--n-close-icon-color":o[i("closeIconColor",s)],"--n-close-icon-color-hover":o[i("closeIconColorHover",s)],"--n-close-icon-color-pressed":o[i("closeIconColorPressed",s)],"--n-icon-color":o[i("iconColor",s)],"--n-border":o[i("border",s)],"--n-title-text-color":o[i("titleTextColor",s)],"--n-content-text-color":o[i("contentTextColor",s)],"--n-line-height":_,"--n-border-radius":R,"--n-font-size":x,"--n-title-font-weight":I,"--n-icon-size":A,"--n-icon-margin":m,"--n-icon-margin-rtl":P,"--n-close-size":B,"--n-close-margin":T,"--n-close-margin-rtl":k,"--n-padding":S,"--n-icon-margin-left":E,"--n-icon-margin-right":L}}),c=g?N("alert",p(()=>n.type[0]),b,n):void 0,f=V(!0),y=()=>{const{onAfterLeave:a,onAfterHide:o}=n;a&&a(),o&&o()};return{rtlEnabled:z,mergedClsPrefix:e,mergedBordered:l,visible:f,handleCloseClick:()=>{var a;Promise.resolve((a=n.onClose)===null||a===void 0?void 0:a.call(n)).then(o=>{o!==!1&&(f.value=!1)})},handleAfterLeave:()=>{y()},mergedTheme:h,cssVars:g?void 0:b,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),r(W,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:l}=this,g={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},K(this.$attrs,g)),this.closable&&r(Q,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&r("div",{class:`${e}-alert__border`}),this.showIcon&&r("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},Z(l.icon,()=>[r(q,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return r(Y,null);case"info":return r(X,null);case"warning":return r(U,null);case"error":return r(G,null);default:return null}}})])),r("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},ee(l.header,v=>{const h=v||this.title;return h?r("div",{class:`${e}-alert-body__title`},h):null}),l.default&&r("div",{class:`${e}-alert-body__content`},l))):null}})}});export{ie as _};
