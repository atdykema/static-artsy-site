import{S,i as M,s as N,k as v,q as E,a as T,l as g,m as _,r as I,h as f,c as j,n as m,p as A,N as C,b as w,H as d,T as z,u as V,D as H}from"./shared-82a0202b.js";/* empty css                                                   */function B(r){let t,a,s,i,o,u,l,h,e,k,b;return{c(){t=v("div"),a=v("div"),s=v("div"),i=v("div"),o=E(r[4]),u=T(),l=v("h1"),h=E(r[4]),this.h()},l(n){t=g(n,"DIV",{class:!0,style:!0});var c=_(t);a=g(c,"DIV",{class:!0});var p=_(a);s=g(p,"DIV",{class:!0});var y=_(s);i=g(y,"DIV",{class:!0,style:!0});var q=_(i);o=I(q,r[4]),q.forEach(f),u=j(y),l=g(y,"H1",{});var D=_(l);h=I(D,r[4]),D.forEach(f),y.forEach(f),p.forEach(f),c.forEach(f),this.h()},h(){m(i,"class","li-overlay svelte-9npqog"),A(i,"background-image","url("+C+r[3]+")"),m(s,"class","title-container svelte-9npqog"),m(a,"class","main-container-inner svelte-9npqog"),m(t,"class","main-container svelte-9npqog"),m(t,"style",e="background-image: url("+C+r[3]+"); "+(r[0]==r[2]?"opacity: 100%; transform: translate(0%);":""))},m(n,c){w(n,t,c),d(t,a),d(a,s),d(s,i),d(i,o),d(s,u),d(s,l),d(l,h),k||(b=z(t,"click",r[5]),k=!0)},p(n,[c]){c&16&&V(o,n[4]),c&8&&A(i,"background-image","url("+C+n[3]+")"),c&16&&V(h,n[4]),c&13&&e!==(e="background-image: url("+C+n[3]+"); "+(n[0]==n[2]?"opacity: 100%; transform: translate(0%);":""))&&m(t,"style",e)},i:H,o:H,d(n){n&&f(t),k=!1,b()}}}function F(r,t,a){let{id:s,path:i,title:o,currentCatagory:u,currentArticle:l}=t;const h=()=>{a(0,u=parseInt(s)),a(1,l=-1*Math.random())};return r.$$set=e=>{"id"in e&&a(2,s=e.id),"path"in e&&a(3,i=e.path),"title"in e&&a(4,o=e.title),"currentCatagory"in e&&a(0,u=e.currentCatagory),"currentArticle"in e&&a(1,l=e.currentArticle)},[u,l,s,i,o,h]}class K extends S{constructor(t){super(),M(this,t,F,B,N,{id:2,path:3,title:4,currentCatagory:0,currentArticle:1})}}export{K as C};