import{H as f,T as _,M as g}from"./components.c449e1b9.js";import{af as y,c as i,k as s,w as o,a as c,aI as x,o as r,b as D,_ as v,l as V}from"./entry.3ff96044.js";import{_ as k}from"./Table.vue.7d36b4f8.js";import{_ as T}from"./LoadingSpinner.93afa5d0.js";import{u as w,x as S}from"./gql.cd7129f9.js";import"./scrollToTop.vue.09a05aa1.js";import"./GitHubLogo.8a015cd5.js";import"./useSlugify.31da7e80.js";const I={data(){return{categorizedData:{"Cloud Service Providers":[],"Virtual Platforms":[],"Operating Systems":[],Databases:[],Network:[],"Application Logic":[],"Web Servers":[]},guidanceData:[],validationData:[],isLoaded:!1}},mounted(){this.$nextTick(async()=>{await this.getGuidance(),this.getValidationData(),this.isLoaded=!0})},methods:{async getGuidance(){this.guidanceData=await w("getValidateData",()=>S()).then(({data:a})=>a.value.guidances.data.map(e=>({name:e.attributes.name,id:e.id,type:e.attributes.type,category:e.attributes.category,source:e.attributes.source,date:e.attributes.date,version:e.attributes.version.length!==0?e.attributes.version[0].version:0,validation:e.attributes.validation.data.map(t=>({id:t.id,name:t.attributes.name,name_long:t.attributes.name_long,source:t.attributes.source,platform:{name:t.attributes.platform.data.attributes.name,link:t.attributes.platform.data.attributes.link,icon:{name:t.attributes.platform.data.attributes.icon.data?t.attributes.platform.data.attributes.icon.data.attributes.name:null,url:t.attributes.platform.data.attributes.icon.data?t.attributes.platform.data.attributes.icon.data.attributes.url:null,alt:t.attributes.platform.data.attributes.icon.data?t.attributes.platform.data.attributes.icon.data.attributes.alternativeText:null}},partner:{name:t.attributes.partner.data.attributes.name,name_long:t.attributes.partner.data.attributes.name_long,link:t.attributes.partner.data.attributes.link,icon:{name:t.attributes.partner.data.attributes.icon.data?t.attributes.partner.data.attributes.icon.data.attributes.name:null,url:t.attributes.partner.data.attributes.icon.data?t.attributes.partner.data.attributes.icon.data.attributes.url:null,alt:t.attributes.partner.data.attributes.icon.data?t.attributes.partner.data.attributes.icon.data.attributes.alternativeText:null}}}))})))},getValidationData(){for(let a=0;a<this.guidanceData.length;a+=1)this.guidanceData[a].validation.forEach(e=>{const t=e;t.category=this.guidanceData[a].category,t.version=this.guidanceData[a].version,t.benchmarkID=this.guidanceData[a].id,this.validationData.push(t)});for(let a=0;a<this.validationData.length;a+=1)this.categorizedData[this.validationData[a].category.replaceAll("_"," ")].push(this.validationData[a])}}},L={class:"relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"},A={key:0},E=x('<div class="sm:flex sm:items-center"><div class="sm:flex-auto"><h1 class="text-5xl font-bold text-header">Validate</h1><p class="mt-2 text-xl"> These open source community-based InSpec profiles validate the security of common system components. MITRE is helping to provide stewardship over these profiles, hosted here and at other community vendor sites. If you are interested in new profiles, please contact us at <a href="mailto:saf@groups.mitre.org" class="underline">saf@groups.mitre.org</a>. If you are interested in developing and contributing your own profiles, please see our <a href="/training" class="underline">training material</a>. All assessment tests under MITRE SAF <sup>©</sup> are associated with NIST SP 800-53 Security Controls. </p><h2 class="mt-2 text-2xl font-bold text-header">Usage</h2><p class="mt-2 text-xl">The Validation Library contents are collections of test definitions that can be used in conjunction with testing tools such as Progress Chef recipes to validate system components against baselines. Specific usage instructions for each piece of validation content can be found in their repository README files.</p></div></div>',1),M={key:1,class:"grid h-screen place-items-center"};function N(a,e,t,$,n,C){const l=_,u=g,d=f,m=v,p=k,b=T,h=V;return r(),i("div",null,[s(d,null,{default:o(()=>[s(l,null,{default:o(()=>[D("Validate Library")]),_:1}),s(u,{name:"description",content:"Validate library content"})]),_:1}),c("div",null,[s(m),c("div",L,[n.isLoaded?(r(),i("div",A,[E,s(p,{entries:n.categorizedData},null,8,["entries"])])):(r(),i("div",M,[s(b)]))]),s(h)])])}const q=y(I,[["render",N]]);export{q as default};