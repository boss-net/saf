import{_ as l}from"./LibraryPage.vue.e4cf1611.js";import{u as c,t as u}from"./gql.cd7129f9.js";import{g as e,i as y,j as m,v as p,u as t,o as _}from"./entry.3ff96044.js";import"./components.c449e1b9.js";const P={__name:"emass-client",setup(b){const r=e(!1),n=e(""),s=e(""),i=async()=>{await c("getLibraryPageByName",()=>u({name:"eMASS Client"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,s.value=a.value.libraryPages.data[0].attributes.library})};return y(async()=>{await m(async()=>{await i(),r.value=!0})}),(a,g)=>{const o=l;return _(),p(o,{"is-loaded":t(r),"page-title":t(s),"library-content":t(n)},null,8,["is-loaded","page-title","library-content"])}}};export{P as default};