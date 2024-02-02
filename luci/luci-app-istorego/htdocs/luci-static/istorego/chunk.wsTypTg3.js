import{aN as j,aI as N,y as P,v as n,A as v,f as z,k as x,g as r,O as q,aO as T,aP as A,aQ as _,aR as L,D as X,E as M,J as G,aS as Y,I as D}from"./index.js?v=W-TS2S5Y";import{f as C}from"./chunk.4l65r8M5.js";var H=/\s/;function E(e){for(var i=e.length;i--&&H.test(e.charAt(i)););return i}var V=/^\s+/;function F(e){return e&&e.slice(0,E(e)+1).replace(V,"")}var W=NaN,J=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,Z=parseInt;function le(e){if(typeof e=="number")return e;if(j(e))return W;if(N(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=N(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=F(e);var c=K.test(e);return c||Q.test(e)?Z(e.slice(2),c?2:8):J.test(e)?W:+e}const U=P([n("progress",{display:"inline-block"},[n("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),v("line",`
 width: 100%;
 display: block;
 `,[n("progress-content",`
 display: flex;
 align-items: center;
 `,[n("progress-graph",{flex:1})]),n("progress-custom-content",{marginLeft:"14px"}),n("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[v("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),v("circle, dashboard",{width:"120px"},[n("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),n("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),n("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),v("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[n("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),n("progress-content",{position:"relative"}),n("progress-graph",{position:"relative"},[n("progress-graph-circle",[P("svg",{verticalAlign:"bottom"}),n("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[v("empty",{opacity:0})]),n("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),n("progress-graph-line",[v("indicator-inside",[n("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[n("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),n("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),v("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[n("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),n("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),n("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[n("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[v("processing",[P("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),P("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),ee={success:r(T,null),error:r(A,null),warning:r(_,null),info:r(L,null)},re=z({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:i}){const c=x(()=>C(e.height)),l=x(()=>e.railBorderRadius!==void 0?C(e.railBorderRadius):e.height!==void 0?C(e.height,{c:.5}):""),o=x(()=>e.fillBorderRadius!==void 0?C(e.fillBorderRadius):e.railBorderRadius!==void 0?C(e.railBorderRadius):e.height!==void 0?C(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:s,railColor:f,railStyle:d,percentage:u,unit:g,indicatorTextColor:h,status:p,showIndicator:y,fillColor:t,processing:b,clsPrefix:a}=e;return r("div",{class:`${a}-progress-content`,role:"none"},r("div",{class:`${a}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${a}-progress-graph-line`,{[`${a}-progress-graph-line--indicator-${s}`]:!0}]},r("div",{class:`${a}-progress-graph-line-rail`,style:[{backgroundColor:f,height:c.value,borderRadius:l.value},d]},r("div",{class:[`${a}-progress-graph-line-fill`,b&&`${a}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:t,height:c.value,lineHeight:c.value,borderRadius:o.value}},s==="inside"?r("div",{class:`${a}-progress-graph-line-indicator`,style:{color:h}},i.default?i.default():`${u}${g}`):null)))),y&&s==="outside"?r("div",null,i.default?r("div",{class:`${a}-progress-custom-content`,style:{color:h},role:"none"},i.default()):p==="default"?r("div",{role:"none",class:`${a}-progress-icon ${a}-progress-icon--as-text`,style:{color:h}},u,g):r("div",{class:`${a}-progress-icon`,"aria-hidden":!0},r(q,{clsPrefix:a},{default:()=>ee[p]}))):null)}}}),te={success:r(T,null),error:r(A,null),warning:r(_,null),info:r(L,null)},ie=z({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:i}){function c(l,o,s){const{gapDegree:f,viewBoxWidth:d,strokeWidth:u}=e,g=50,h=0,p=g,y=0,t=2*g,b=50+u/2,a=`M ${b},${b} m ${h},${p}
      a ${g},${g} 0 1 1 ${y},${-t}
      a ${g},${g} 0 1 1 ${-y},${t}`,$=Math.PI*2*g,S={stroke:s,strokeDasharray:`${l/100*($-f)}px ${d*8}px`,strokeDashoffset:`-${f/2}px`,transformOrigin:o?"center":void 0,transform:o?`rotate(${o}deg)`:void 0};return{pathString:a,pathStyle:S}}return()=>{const{fillColor:l,railColor:o,strokeWidth:s,offsetDegree:f,status:d,percentage:u,showIndicator:g,indicatorTextColor:h,unit:p,gapOffsetDegree:y,clsPrefix:t}=e,{pathString:b,pathStyle:a}=c(100,0,o),{pathString:$,pathStyle:S}=c(u,f,l),m=100+s;return r("div",{class:`${t}-progress-content`,role:"none"},r("div",{class:`${t}-progress-graph`,"aria-hidden":!0},r("div",{class:`${t}-progress-graph-circle`,style:{transform:y?`rotate(${y}deg)`:void 0}},r("svg",{viewBox:`0 0 ${m} ${m}`},r("g",null,r("path",{class:`${t}-progress-graph-circle-rail`,d:b,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:a})),r("g",null,r("path",{class:[`${t}-progress-graph-circle-fill`,u===0&&`${t}-progress-graph-circle-fill--empty`],d:$,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:S}))))),g?r("div",null,i.default?r("div",{class:`${t}-progress-custom-content`,role:"none"},i.default()):d!=="default"?r("div",{class:`${t}-progress-icon`,"aria-hidden":!0},r(q,{clsPrefix:t},{default:()=>te[d]})):r("div",{class:`${t}-progress-text`,style:{color:h},role:"none"},r("span",{class:`${t}-progress-text__percentage`},u),r("span",{class:`${t}-progress-text__unit`},p))):null)}}});function O(e,i,c=100){return`m ${c/2} ${c/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const oe=z({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:i}){const c=x(()=>e.percentage.map((o,s)=>`${Math.PI*o/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*s)-e.circleGap*s)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:l,strokeWidth:o,circleGap:s,showIndicator:f,fillColor:d,railColor:u,railStyle:g,percentage:h,clsPrefix:p}=e;return r("div",{class:`${p}-progress-content`,role:"none"},r("div",{class:`${p}-progress-graph`,"aria-hidden":!0},r("div",{class:`${p}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${l} ${l}`},h.map((y,t)=>r("g",{key:t},r("path",{class:`${p}-progress-graph-circle-rail`,d:O(l/2-o/2*(1+2*t)-s*t,o,l),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:u[t]},g[t]]}),r("path",{class:[`${p}-progress-graph-circle-fill`,y===0&&`${p}-progress-graph-circle-fill--empty`],d:O(l/2-o/2*(1+2*t)-s*t,o,l),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:c.value[t],strokeDashoffset:0,stroke:d[t]}})))))),f&&i.default?r("div",null,r("div",{class:`${p}-progress-text`},i.default())):null)}}}),ne=Object.assign(Object.assign({},M.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),ce=z({name:"Progress",props:ne,setup(e){const i=x(()=>e.indicatorPlacement||e.indicatorPosition),c=x(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:l,inlineThemeDisabled:o}=X(e),s=M("Progress","-progress",U,Y,e,l),f=x(()=>{const{status:u}=e,{common:{cubicBezierEaseInOut:g},self:{fontSize:h,fontSizeCircle:p,railColor:y,railHeight:t,iconSizeCircle:b,iconSizeLine:a,textColorCircle:$,textColorLineInner:S,textColorLineOuter:m,lineBgProcessing:k,fontWeightCircle:B,[D("iconColor",u)]:I,[D("fillColor",u)]:w}}=s.value;return{"--n-bezier":g,"--n-fill-color":w,"--n-font-size":h,"--n-font-size-circle":p,"--n-font-weight-circle":B,"--n-icon-color":I,"--n-icon-size-circle":b,"--n-icon-size-line":a,"--n-line-bg-processing":k,"--n-rail-color":y,"--n-rail-height":t,"--n-text-color-circle":$,"--n-text-color-line-inner":S,"--n-text-color-line-outer":m}}),d=o?G("progress",x(()=>e.status[0]),f,e):void 0;return{mergedClsPrefix:l,mergedIndicatorPlacement:i,gapDeg:c,cssVars:o?void 0:f,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{type:e,cssVars:i,indicatorTextColor:c,showIndicator:l,status:o,railColor:s,railStyle:f,color:d,percentage:u,viewBoxWidth:g,strokeWidth:h,mergedIndicatorPlacement:p,unit:y,borderRadius:t,fillBorderRadius:b,height:a,processing:$,circleGap:S,mergedClsPrefix:m,gapDeg:k,gapOffsetDegree:B,themeClass:I,$slots:w,onRender:R}=this;return R==null||R(),r("div",{class:[I,`${m}-progress`,`${m}-progress--${e}`,`${m}-progress--${o}`],style:i,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":u,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?r(ie,{clsPrefix:m,status:o,showIndicator:l,indicatorTextColor:c,railColor:s,fillColor:d,railStyle:f,offsetDegree:this.offsetDegree,percentage:u,viewBoxWidth:g,strokeWidth:h,gapDegree:k===void 0?e==="dashboard"?75:0:k,gapOffsetDegree:B,unit:y},w):e==="line"?r(re,{clsPrefix:m,status:o,showIndicator:l,indicatorTextColor:c,railColor:s,fillColor:d,railStyle:f,percentage:u,processing:$,indicatorPlacement:p,unit:y,fillBorderRadius:b,railBorderRadius:t,height:a},w):e==="multiple-circle"?r(oe,{clsPrefix:m,strokeWidth:h,railColor:s,fillColor:d,railStyle:f,viewBoxWidth:g,percentage:u,showIndicator:l,circleGap:S},w):null)}});export{ce as _,le as t};
