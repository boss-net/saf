import{T as j,M as I,H as P}from"./components.c449e1b9.js";import{d as z,g as m,h as J,i as K,j as O,o as p,c as f,k as s,w as v,b as U,e as W,a as E,p as X,_ as Y,l as Z}from"./entry.3ff96044.js";import{_ as ee}from"./ReadingPage.vue.3442885a.js";import{_ as te}from"./LoadingSpinner.93afa5d0.js";import{u as se,h as ne}from"./gql.cd7129f9.js";import"./scrollToTop.vue.09a05aa1.js";const oe={key:0},ae=["innerHTML"],re={key:1,class:"grid h-screen place-items-center"},fe=z({__name:"[question]",setup(ue){const q=m(!1),t=m(),G=J(),b=m(""),R=async()=>{t.value=await se("getFaqByQuestionNumber",()=>ne({number:parseInt(G.params.question.toString(),10)})).then(({data:e})=>{var a,r,u,i,l,c,_,n,o,h,g,w,x,k,y,N,T,H,M,B,A,D,F,L,Q,S,$,V,C;if(!e.value||!((r=(a=e==null?void 0:e.value)==null?void 0:a.faqs)!=null&&r.data[0])){X("/faq");return}const d=new Date((c=(l=(i=(u=e==null?void 0:e.value)==null?void 0:u.faqs)==null?void 0:i.data[0])==null?void 0:l.attributes)==null?void 0:c.updatedAt);return b.value=((h=(o=(n=(_=e==null?void 0:e.value)==null?void 0:_.faqs)==null?void 0:n.data[0])==null?void 0:o.attributes)==null?void 0:h.answer)??"Error",{question:(k=(x=(w=(g=e==null?void 0:e.value)==null?void 0:g.faqs)==null?void 0:w.data[0])==null?void 0:x.attributes)==null?void 0:k.question,answer:(H=(T=(N=(y=e==null?void 0:e.value)==null?void 0:y.faqs)==null?void 0:N.data[0])==null?void 0:T.attributes)==null?void 0:H.answer,questionNumber:(D=(A=(B=(M=e==null?void 0:e.value)==null?void 0:M.faqs)==null?void 0:B.data[0])==null?void 0:A.attributes)==null?void 0:D.question_number,updated:d.toDateString(),author:(C=(V=($=(S=(Q=(L=(F=e==null?void 0:e.value)==null?void 0:F.faqs)==null?void 0:L.data[0])==null?void 0:Q.attributes)==null?void 0:S.author)==null?void 0:$.data)==null?void 0:V.attributes)==null?void 0:C.name}})};return K(async()=>{await O(async()=>{await R(),q.value=!0})}),(e,d)=>{const a=j,r=I,u=P,i=Y,l=ee,c=te,_=Z;return p(),f("div",null,[s(u,null,{default:v(()=>{var n;return[s(a,null,{default:v(()=>{var o;return[U("Question "+W(((o=t.value)==null?void 0:o.questionNumber)??0),1)]}),_:1}),s(r,{name:"description",content:`Answer to question ${((n=t.value)==null?void 0:n.questionNumber)??"error"}`},null,8,["content"])]}),_:1}),E("div",null,[s(i),q.value&&t.value?(p(),f("div",oe,[s(l,{title:t.value.question,"last-updated":t.value.updated,author:t.value.author,"go-back-link":"/faq"},{default:v(()=>[E("div",{class:"prose prose-xl max-w-full mx-auto mt-8 text-left leading-8 dark:prose-invert prose-code:text-start prose-li:text-start",innerHTML:b.value},null,8,ae)]),_:1},8,["title","last-updated","author"])])):(p(),f("div",re,[s(c)])),s(_)])])}}});export{fe as default};
