import{T as v,M as S,H as y}from"./components.c449e1b9.js";import{d as w,g as m,i as G,j as T,o as d,c as r,k as e,w as u,b as k,a as t,u as l,_ as M,l as H,ag as b,ah as I,af as C}from"./entry.3ff96044.js";import{_ as L}from"./LoadingSpinner.93afa5d0.js";import{u as B,m as N}from"./gql.cd7129f9.js";const P=n=>(b("data-v-de484ad7"),n=n(),I(),n),V={class:"max-w-8xl relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"},A={key:0},E={class:"sm:flex sm:items-center"},F={class:"sm:flex-auto"},$=P(()=>t("h1",{class:"text-center text-5xl font-bold text-header"},[t("strong",null,"Getting Started")],-1)),j=["innerHTML"],q={key:1,class:"text-center my-5"},D=w({__name:"index",setup(n){const p=m(!1),_=m(),x=async()=>{_.value=await B("getGettingStartedPage",()=>N()).then(({data:s})=>{var i,a,o,c;return(c=(o=(a=(i=s==null?void 0:s.value)==null?void 0:i.gettingStartedPage)==null?void 0:a.data)==null?void 0:o.attributes)==null?void 0:c.content})};return G(async()=>{await T(async()=>{await x(),p.value=!0})}),(s,i)=>{const a=v,o=S,c=y,g=M,f=L,h=H;return d(),r("div",null,[e(c,null,{default:u(()=>[e(a,null,{default:u(()=>[k("Getting Started")]),_:1}),e(o,{name:"description",content:"Getting started content for MITRE SAF©"})]),_:1}),t("div",null,[e(g),t("div",V,[l(p)&&l(_)?(d(),r("div",A,[t("div",E,[t("div",F,[$,t("div",{class:"prose-img prose prose-xl mx-auto mb-6 mt-8 max-w-5xl text-left leading-8 dark:prose-invert prose-code:text-start prose-li:text-start",style:{},innerHTML:l(_)},null,8,j)])])])):(d(),r("div",q,[e(f)])),e(h)])])])}}});const O=C(D,[["__scopeId","data-v-de484ad7"]]);export{O as default};
