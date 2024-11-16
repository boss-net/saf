import{T as _s,M as ps,H as bs}from"./components.c449e1b9.js";import{d as ms,t as xs,o as c,c as l,F as fs,r as ds,a as e,b as ts,e as a,f as gs,k as i,u as r,g as ls,h as ys,i as ws,j as ks,w as us,p as $s,_ as Ds,l as Ts}from"./entry.3ff96044.js";import{G as Gs}from"./GitHubLogo.8a015cd5.js";import{_ as Cs}from"./LoadingSpinner.93afa5d0.js";import{u as Bs,v as Fs}from"./gql.cd7129f9.js";const Hs={role:"list",class:"grid grid-cols-1 gap-2 sm:grid-cols-2"},Rs={class:"-mt-px flex divide-x divide-neutral-3 dark:divide-neutral-1"},Us={class:"flex w-0 flex-1"},Vs=["href"],js=["src","alt"],Ls={class:"-ml-px flex w-0 flex-1"},Ms=["href"],Ns=["src","alt"],qs={class:"flex w-full items-center justify-between space-x-6 p-5"},Ss={class:"flex-1 truncate"},As={key:0,class:"inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20"},Es={class:"truncate text-xl font-bold text-foreground"},Is={class:"truncate text-lg text-subtext"},Os=["href"],Ws=ms({__name:"Content",props:{contents:{type:Object,required:!0}},setup(ss){const Pt=ss,{contents:o}=xs(Pt),vt=Qt=>{const n=new Date(Qt),s=new Date;return Math.abs(n.getTime()-s.getTime())/(24*60*60*1e3)<30};return(Qt,n)=>(c(),l("ul",Hs,[(c(!0),l(fs,null,ds(r(o),s=>(c(),l("li",{key:s.email,class:"col-span-1 divide-y divide-neutral-3 dark:divide-neutral-1 rounded-lg bg-neutral-2 dark:bg-neutral-3 shadow"},[e("div",null,[e("div",Rs,[e("div",Us,[e("a",{href:s.partner.link,class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 font-semibold text-foreground"},[e("img",{class:"h-10 w-10",src:s.partner.icon.url,alt:s.partner.icon.alt},null,8,js),ts(" "+a(s.partner.name),1)],8,Vs)]),e("div",Ls,[e("a",{href:s.platform.link,class:"relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 font-semibold text-foreground"},[e("img",{class:"h-10 w-10",src:s.platform.icon.url,alt:s.platform.icon.alt},null,8,Ns),ts(" "+a(s.platform.name),1)],8,Ms)])])]),e("div",qs,[e("div",Ss,[vt(s.last_update)?(c(),l("span",As," Recently Updated ")):gs("",!0),e("h3",Es,a(s.name_long),1),e("p",Is," Last Updated: "+a(s.last_update),1)]),e("a",{href:s.source},[i(Gs,{class:"h-10 w-10 fill-[#24292f] dark:fill-white"})],8,Os)])]))),128))]))}}),zs={class:"relative mb-8 h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"},Js={key:0},Ks={class:"space-y-5 pt-5"},Ps=e("div",null,[e("h1",{class:"text-center text-2xl font-bold leading-6"}," Guidance Overview "),e("h2",{class:"text-center text-xl text-muted"}," Extra details for the guidance overview ")],-1),Qs={class:"grid grid-cols-1 sm:grid-cols-2"},Xs={class:"border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"},Ys=e("dt",{class:"text-2xl font-bold leading-6 text-foreground"}," Full name ",-1),Zs={class:"text-xl mt-1 leading-6 text-foreground sm:mt-2"},hs={class:"border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"},vs=e("dt",{class:"text-2xl font-bold leading-6 text-foreground"}," Category ",-1),te={class:"text-xl mt-1 leading-6 text-foreground sm:mt-2"},se={class:"border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"},ee=e("dt",{class:"text-2xl font-bold leading-6 text-foreground"}," Version ",-1),oe={class:"text-xl mt-1 leading-6 text-foreground sm:mt-2"},re={class:"border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"},ne=e("dt",{class:"text-2xl font-bold leading-6 text-foreground"}," Type ",-1),ae={class:"text-xl mt-1 leading-6 text-foreground sm:mt-2"},ie={class:"border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"},ce=e("dt",{class:"text-2xl font-bold leading-6 text-foreground"}," Date ",-1),le={class:"text-xl mt-1 leading-6 text-foreground sm:mt-2"},ue={class:"border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"},me=e("dt",{class:"text-2xl font-bold leading-6 text-foreground"}," Url ",-1),_e={class:"text-xl mt-1 leading-6 text-foreground sm:mt-2"},pe=["href"],be=e("div",{class:"pt-10"},[e("h2",{class:"text-center text-3xl font-bold leading-6"}," Related Content "),e("h2",{class:"text-center text-xl text-muted"}," Related hardening and validation content for the guidance ")],-1),xe=e("h3",{class:"text-center font-bold text-2xl"},"Harden",-1),fe=e("h3",{class:"text-center font-bold text-2xl"},"Validate",-1),de={key:1,class:"grid h-screen place-items-center"},De=ms({__name:"[guidance]",setup(ss){const Pt=ls(!1),o=ls(),vt=ys(),Qt=async()=>{o.value=await Bs("getGuidanceDataFromID",()=>{var n;return Fs({id:((n=vt.query.id)==null?void 0:n.toString())??""})},{initialCache:!1}).then(({data:n})=>{var u,m,Xt,Yt,_,Zt,ht,p,b,es,os,rs,ns,as,is,cs;if(!n.value||!((m=(u=n==null?void 0:n.value)==null?void 0:u.guidance)!=null&&m.data)){$s("/guidance");return}const s=n.value.guidance.data;return{name:(Xt=s==null?void 0:s.attributes)==null?void 0:Xt.name,id:s.id,type:(Yt=s==null?void 0:s.attributes)==null?void 0:Yt.type,category:(_=s==null?void 0:s.attributes)==null?void 0:_.category,source:(Zt=s==null?void 0:s.attributes)==null?void 0:Zt.source,date:(ht=s==null?void 0:s.attributes)==null?void 0:ht.date,version:((b=(p=s==null?void 0:s.attributes)==null?void 0:p.version)==null?void 0:b.length)!==0?(es=s==null?void 0:s.attributes)==null?void 0:es.version[0].version:"",hardening:(rs=(os=s==null?void 0:s.attributes)==null?void 0:os.hardening)!=null&&rs.data?(as=(ns=s==null?void 0:s.attributes)==null?void 0:ns.hardening)==null?void 0:as.data.map(t=>{var x,f,d,g,y,w,k,$,D,T,G,C,B,F,H,R,U,V,j,L,M,N,q,S,A,E,I,O,W,z,J,K,P,Q,X,Y,Z,h,v,tt,st,et,ot,rt,nt,at,it,ct,lt,ut,mt,_t,pt,bt,xt,ft,dt,gt,yt,wt,kt,$t,Dt,Tt,Gt,Ct,Bt,Ft,Ht,Rt,Ut,Vt,jt,Lt,Mt,Nt,qt,St,At,Et,It,Ot,Wt,zt,Jt,Kt;return{id:t==null?void 0:t.id,name:(x=t==null?void 0:t.attributes)==null?void 0:x.name,name_long:(f=t==null?void 0:t.attributes)==null?void 0:f.name_long,source:(d=t==null?void 0:t.attributes)==null?void 0:d.source,last_update:(g=t==null?void 0:t.attributes)==null?void 0:g.code_last_updated,platform:{name:($=(k=(w=(y=t==null?void 0:t.attributes)==null?void 0:y.platform)==null?void 0:w.data)==null?void 0:k.attributes)==null?void 0:$.name,link:(C=(G=(T=(D=t==null?void 0:t.attributes)==null?void 0:D.platform)==null?void 0:T.data)==null?void 0:G.attributes)==null?void 0:C.link,icon:{name:(U=(R=(H=(F=(B=t==null?void 0:t.attributes)==null?void 0:B.platform)==null?void 0:F.data)==null?void 0:H.attributes)==null?void 0:R.icon)!=null&&U.data?(S=(q=(N=(M=(L=(j=(V=t==null?void 0:t.attributes)==null?void 0:V.platform)==null?void 0:j.data)==null?void 0:L.attributes)==null?void 0:M.icon)==null?void 0:N.data)==null?void 0:q.attributes)==null?void 0:S.name:null,url:(W=(O=(I=(E=(A=t==null?void 0:t.attributes)==null?void 0:A.platform)==null?void 0:E.data)==null?void 0:I.attributes)==null?void 0:O.icon)!=null&&W.data?(Y=(X=(Q=(P=(K=(J=(z=t==null?void 0:t.attributes)==null?void 0:z.platform)==null?void 0:J.data)==null?void 0:K.attributes)==null?void 0:P.icon)==null?void 0:Q.data)==null?void 0:X.attributes)==null?void 0:Y.url:null,alt:(ot=(et=(st=(tt=(v=(h=(Z=t==null?void 0:t.attributes)==null?void 0:Z.platform)==null?void 0:h.data)==null?void 0:v.attributes)==null?void 0:tt.icon)==null?void 0:st.data)==null?void 0:et.attributes)==null?void 0:ot.alternativeText}},partner:{name:(it=(at=(nt=(rt=t==null?void 0:t.attributes)==null?void 0:rt.partner)==null?void 0:nt.data)==null?void 0:at.attributes)==null?void 0:it.name,name_long:(mt=(ut=(lt=(ct=t==null?void 0:t.attributes)==null?void 0:ct.partner)==null?void 0:lt.data)==null?void 0:ut.attributes)==null?void 0:mt.name_long,link:(xt=(bt=(pt=(_t=t==null?void 0:t.attributes)==null?void 0:_t.partner)==null?void 0:pt.data)==null?void 0:bt.attributes)==null?void 0:xt.link,icon:{name:(wt=(yt=(gt=(dt=(ft=t==null?void 0:t.attributes)==null?void 0:ft.partner)==null?void 0:dt.data)==null?void 0:gt.attributes)==null?void 0:yt.icon)!=null&&wt.data?(Bt=(Ct=(Gt=(Tt=(Dt=($t=(kt=t==null?void 0:t.attributes)==null?void 0:kt.partner)==null?void 0:$t.data)==null?void 0:Dt.attributes)==null?void 0:Tt.icon)==null?void 0:Gt.data)==null?void 0:Ct.attributes)==null?void 0:Bt.name:null,url:(Vt=(Ut=(Rt=(Ht=(Ft=t==null?void 0:t.attributes)==null?void 0:Ft.partner)==null?void 0:Ht.data)==null?void 0:Rt.attributes)==null?void 0:Ut.icon)!=null&&Vt.data?(At=(St=(qt=(Nt=(Mt=(Lt=(jt=t==null?void 0:t.attributes)==null?void 0:jt.partner)==null?void 0:Lt.data)==null?void 0:Mt.attributes)==null?void 0:Nt.icon)==null?void 0:qt.data)==null?void 0:St.attributes)==null?void 0:At.url:null,alt:(Kt=(Jt=(zt=(Wt=(Ot=(It=(Et=t==null?void 0:t.attributes)==null?void 0:Et.platform)==null?void 0:It.data)==null?void 0:Ot.attributes)==null?void 0:Wt.icon)==null?void 0:zt.data)==null?void 0:Jt.attributes)==null?void 0:Kt.alternativeText}}}}):null,validation:(cs=(is=s==null?void 0:s.attributes)==null?void 0:is.validation)!=null&&cs.data?s==null?void 0:s.attributes.validation.data.map(t=>{var x,f,d,g,y,w,k,$,D,T,G,C,B,F,H,R,U,V,j,L,M,N,q,S,A,E,I,O,W,z,J,K,P,Q,X,Y,Z,h,v,tt,st,et,ot,rt,nt,at,it,ct,lt,ut,mt,_t,pt,bt,xt,ft,dt,gt,yt,wt,kt,$t,Dt,Tt,Gt,Ct,Bt,Ft,Ht,Rt,Ut,Vt,jt,Lt,Mt,Nt,qt,St,At,Et,It,Ot,Wt,zt,Jt,Kt;return{id:t==null?void 0:t.id,name:(x=t==null?void 0:t.attributes)==null?void 0:x.name,name_long:(f=t==null?void 0:t.attributes)==null?void 0:f.name_long,source:(d=t==null?void 0:t.attributes)==null?void 0:d.source,last_update:(g=t==null?void 0:t.attributes)==null?void 0:g.code_last_updated,platform:{name:($=(k=(w=(y=t==null?void 0:t.attributes)==null?void 0:y.platform)==null?void 0:w.data)==null?void 0:k.attributes)==null?void 0:$.name,link:(C=(G=(T=(D=t==null?void 0:t.attributes)==null?void 0:D.platform)==null?void 0:T.data)==null?void 0:G.attributes)==null?void 0:C.link,icon:{name:(U=(R=(H=(F=(B=t==null?void 0:t.attributes)==null?void 0:B.platform)==null?void 0:F.data)==null?void 0:H.attributes)==null?void 0:R.icon)!=null&&U.data?(S=(q=(N=(M=(L=(j=(V=t==null?void 0:t.attributes)==null?void 0:V.platform)==null?void 0:j.data)==null?void 0:L.attributes)==null?void 0:M.icon)==null?void 0:N.data)==null?void 0:q.attributes)==null?void 0:S.name:null,url:(W=(O=(I=(E=(A=t==null?void 0:t.attributes)==null?void 0:A.platform)==null?void 0:E.data)==null?void 0:I.attributes)==null?void 0:O.icon)!=null&&W.data?(Y=(X=(Q=(P=(K=(J=(z=t==null?void 0:t.attributes)==null?void 0:z.platform)==null?void 0:J.data)==null?void 0:K.attributes)==null?void 0:P.icon)==null?void 0:Q.data)==null?void 0:X.attributes)==null?void 0:Y.url:null,alt:(ot=(et=(st=(tt=(v=(h=(Z=t==null?void 0:t.attributes)==null?void 0:Z.platform)==null?void 0:h.data)==null?void 0:v.attributes)==null?void 0:tt.icon)==null?void 0:st.data)==null?void 0:et.attributes)==null?void 0:ot.alternativeText}},partner:{name:(it=(at=(nt=(rt=t==null?void 0:t.attributes)==null?void 0:rt.partner)==null?void 0:nt.data)==null?void 0:at.attributes)==null?void 0:it.name,name_long:(mt=(ut=(lt=(ct=t==null?void 0:t.attributes)==null?void 0:ct.partner)==null?void 0:lt.data)==null?void 0:ut.attributes)==null?void 0:mt.name_long,link:(xt=(bt=(pt=(_t=t==null?void 0:t.attributes)==null?void 0:_t.partner)==null?void 0:pt.data)==null?void 0:bt.attributes)==null?void 0:xt.link,icon:{name:(wt=(yt=(gt=(dt=(ft=t==null?void 0:t.attributes)==null?void 0:ft.partner)==null?void 0:dt.data)==null?void 0:gt.attributes)==null?void 0:yt.icon)!=null&&wt.data?(Bt=(Ct=(Gt=(Tt=(Dt=($t=(kt=t==null?void 0:t.attributes)==null?void 0:kt.partner)==null?void 0:$t.data)==null?void 0:Dt.attributes)==null?void 0:Tt.icon)==null?void 0:Gt.data)==null?void 0:Ct.attributes)==null?void 0:Bt.name:null,url:(Vt=(Ut=(Rt=(Ht=(Ft=t==null?void 0:t.attributes)==null?void 0:Ft.partner)==null?void 0:Ht.data)==null?void 0:Rt.attributes)==null?void 0:Ut.icon)!=null&&Vt.data?(At=(St=(qt=(Nt=(Mt=(Lt=(jt=t==null?void 0:t.attributes)==null?void 0:jt.partner)==null?void 0:Lt.data)==null?void 0:Mt.attributes)==null?void 0:Nt.icon)==null?void 0:qt.data)==null?void 0:St.attributes)==null?void 0:At.url:null,alt:(Kt=(Jt=(zt=(Wt=(Ot=(It=(Et=t==null?void 0:t.attributes)==null?void 0:Et.platform)==null?void 0:It.data)==null?void 0:Ot.attributes)==null?void 0:Wt.icon)==null?void 0:zt.data)==null?void 0:Jt.attributes)==null?void 0:Kt.alternativeText}}}}):null}}),console.log("What si this: ",o)};return ws(async()=>{await ks(async()=>{await Qt(),Pt.value=!0})}),(n,s)=>{const u=_s,m=ps,Xt=bs,Yt=Ds,_=Ws,Zt=Cs,ht=Ts;return c(),l("div",null,[i(Xt,null,{default:us(()=>{var p;return[i(u,null,{default:us(()=>{var b;return[ts(a(((b=r(o))==null?void 0:b.name)??"Unknown")+" Guidance",1)]}),_:1}),i(m,{name:"description",content:`Guidance for ${((p=r(o))==null?void 0:p.name)??"Unkown"}`},null,8,["content"])]}),_:1}),e("div",null,[i(Yt),e("div",zs,[r(Pt)?(c(),l("div",Js,[e("div",Ks,[Ps,e("dl",Qs,[e("div",Xs,[Ys,e("dd",Zs,a(r(o).name),1)]),e("div",hs,[vs,e("dd",te,a(r(o).category.replaceAll("_"," ")),1)]),e("div",se,[ee,e("dd",oe,a(r(o).version),1)]),e("div",re,[ne,e("dd",ae,a(r(o).type),1)]),e("div",ie,[ce,e("dd",le,a(r(o).date),1)]),e("div",ue,[me,e("dd",_e,[e("a",{href:r(o).source},a(r(o).source),9,pe)])])]),be,xe,i(_,{contents:r(o).hardening},null,8,["contents"]),fe,i(_,{contents:r(o).validation},null,8,["contents"])])])):(c(),l("div",de,[i(Zt)]))]),i(ht)])])}}});export{De as default};
