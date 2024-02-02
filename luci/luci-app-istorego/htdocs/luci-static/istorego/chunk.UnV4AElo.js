import{v as I,B as t,cQ as M,y as N,A as o,z as E,f as se,D as ce,E as L,d0 as de,az as ue,r as P,C as he,k as z,I as b,b0 as H,cY as r,J as fe,d1 as U,g as a,ac as v,cS as be,aL as ve,H as j}from"./index.js?v=W-TS2S5Y";import{u as ge}from"./chunk.k96eJale.js";const we=I("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),I("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[M({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),N("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),o("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),E("disabled",[E("icon",[o("rubber-band",[o("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[N("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),o("active",[o("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[N("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),o("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[M()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),o("active",[t("rail","background-color: var(--n-rail-color-active);")]),o("loading",[t("rail",`
 cursor: wait;
 `)]),o("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),me=Object.assign(Object.assign({},L.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let x;const ke=se({name:"Switch",props:me,setup(e){x===void 0&&(typeof CSS!="undefined"?typeof CSS.supports!="undefined"?x=CSS.supports("width","max(1px)"):x=!1:x=!0);const{mergedClsPrefixRef:S,inlineThemeDisabled:m}=ce(e),V=L("Switch","-switch",we,de,e,S),l=ue(e),{mergedSizeRef:_,mergedDisabledRef:h}=l,p=P(e.defaultValue),$=he(e,"value"),f=ge($,p),y=z(()=>f.value===e.checkedValue),g=P(!1),n=P(!1),s=z(()=>{const{railStyle:i}=e;if(i)return i({focused:n.value,checked:y.value})});function c(i){const{"onUpdate:value":C,onChange:B,onUpdateValue:R}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=l;C&&j(C,i),R&&j(R,i),B&&j(B,i),p.value=i,F(),T()}function O(){const{nTriggerFormFocus:i}=l;i()}function Y(){const{nTriggerFormBlur:i}=l;i()}function X(){e.loading||h.value||(f.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue))}function J(){n.value=!0,O()}function Q(){n.value=!1,Y(),g.value=!1}function q(i){e.loading||h.value||i.key===" "&&(f.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue),g.value=!1)}function G(i){e.loading||h.value||i.key===" "&&(i.preventDefault(),g.value=!0)}const A=z(()=>{const{value:i}=_,{self:{opacityDisabled:C,railColor:B,railColorActive:R,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:Z,loadingColor:ee,textColor:te,iconColor:ie,[b("buttonHeight",i)]:d,[b("buttonWidth",i)]:ne,[b("buttonWidthPressed",i)]:ae,[b("railHeight",i)]:u,[b("railWidth",i)]:k,[b("railBorderRadius",i)]:oe,[b("buttonBorderRadius",i)]:re},common:{cubicBezierEaseInOut:le}}=V.value;let D,W,K;return x?(D=`calc((${u} - ${d}) / 2)`,W=`max(${u}, ${d})`,K=`max(${k}, calc(${k} + ${d} - ${u}))`):(D=H((r(u)-r(d))/2),W=H(Math.max(r(u),r(d))),K=r(u)>r(d)?k:H(r(k)+r(d)-r(u))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ne,"--n-button-width-pressed":ae,"--n-button-height":d,"--n-height":W,"--n-offset":D,"--n-opacity-disabled":C,"--n-rail-border-radius":oe,"--n-rail-color":B,"--n-rail-color-active":R,"--n-rail-height":u,"--n-rail-width":k,"--n-width":K,"--n-box-shadow-focus":Z,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ie}}),w=m?fe("switch",z(()=>_.value[0]),A,e):void 0;return{handleClick:X,handleBlur:Q,handleFocus:J,handleKeyup:q,handleKeydown:G,mergedRailStyle:s,pressed:g,mergedClsPrefix:S,mergedValue:f,checked:y,mergedDisabled:h,cssVars:m?void 0:A,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:S,checked:m,mergedRailStyle:V,onRender:l,$slots:_}=this;l==null||l();const{checked:h,unchecked:p,icon:$,"checked-icon":f,"unchecked-icon":y}=_,g=!(U($)&&U(f)&&U(y));return a("div",{role:"switch","aria-checked":m,class:[`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,m&&`${e}-switch--active`,S&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:V},v(h,n=>v(p,s=>n||s?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),n),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),s)):null)),a("div",{class:`${e}-switch__button`},v($,n=>v(f,s=>v(y,c=>a(be,null,{default:()=>this.loading?a(ve,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(s||n)?a("div",{class:`${e}-switch__button-icon`,key:s?"checked-icon":"icon"},s||n):!this.checked&&(c||n)?a("div",{class:`${e}-switch__button-icon`,key:c?"unchecked-icon":"icon"},c||n):null})))),v(h,n=>n&&a("div",{key:"checked",class:`${e}-switch__checked`},n)),v(p,n=>n&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},n)))))}});export{ke as _};
