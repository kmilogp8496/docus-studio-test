import{d as y,r as d,aj as k,ak as w,x,b as s,c as l,e as m,g as v,w as S,X as _,J as f,T as $,n as C,a8 as b,p as I,i as P,k as h,t as z,f as N,Z as T}from"./entry.2aed4cdf.js";const V=e=>(I("data-v-d5d0d23f"),e=e(),P(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=d(),{copy:t}=k();w(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=x(),o=d("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(p=>{console.warn("Couldn't copy to clipboard!",p)})};return(B,p)=>{const u=b;return s(),l("button",{ref_key:"copyButtonRef",ref:a,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[v($,{name:"fade"},{default:S(()=>{var r,i;return[o.value==="copied"?(s(),_(u,{key:0,name:(r=f(c).copyButton)==null?void 0:r.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(u,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const j=h(R,[["__scopeId","data-v-d5d0d23f"]]),D={key:0,class:"filename"},E=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=d(!1);return(a,t)=>{const c=j;return s(),l("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),l("span",D,z(e.filename),1)):N("",!0),T(a.$slots,"default",{},void 0,!0),v(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const O=h(E,[["__scopeId","data-v-646ffd8d"]]);export{O as default};
