import{v as g,A as l,y as d,E as h,f as v,D as y,e0 as b,k as a,J as C,q as _,g as m,m as $}from"./index.js?v=W-TS2S5Y";import{f as z}from"./chunk.4l65r8M5.js";const R=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[l("color-transition",{transition:"color .3s var(--n-bezier)"}),l("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),S=Object.assign(Object.assign({},h.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),w=v({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:S,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=y(e),s=h("Icon","-icon",R,b,e,o),r=a(()=>{const{depth:t}=e,{common:{cubicBezierEaseInOut:c},self:u}=s.value;if(t!==void 0){const{color:f,[`opacity${t}Depth`]:p}=u;return{"--n-bezier":c,"--n-color":f,"--n-opacity":p}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),n=i?C("icon",a(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:a(()=>{const{size:t,color:c}=e;return{fontSize:z(t),color:c}}),cssVars:i?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:i,mergedClsPrefix:s,component:r,onRender:n,themeClass:t}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&_("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),m("i",$(this.$attrs,{role:"img",class:[`${s}-icon`,t,{[`${s}-icon--depth`]:i,[`${s}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?m(r):this.$slots)}});export{w as N};
