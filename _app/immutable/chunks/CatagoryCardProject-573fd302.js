import{S as H,i as P,s as S,k as v,q as E,a as N,l as g,m,r as I,h,c as T,n as _,p as A,N as C,b as w,H as d,T as z,u as V,D as j}from"./shared-82a0202b.js";function B(r){let t,a,s,i,o,u,c,f,e,k,b;return{c(){t=v("div"),a=v("div"),s=v("div"),i=v("div"),o=E(r[3]),u=N(),c=v("h1"),f=E(r[3]),this.h()},l(n){t=g(n,"DIV",{class:!0,style:!0});var l=m(t);a=g(l,"DIV",{class:!0});var p=m(a);s=g(p,"DIV",{class:!0});var y=m(s);i=g(y,"DIV",{class:!0,style:!0});var q=m(i);o=I(q,r[3]),q.forEach(h),u=T(y),c=g(y,"H1",{});var D=m(c);f=I(D,r[3]),D.forEach(h),y.forEach(h),p.forEach(h),l.forEach(h),this.h()},h(){_(i,"class","li-overlay svelte-9npqog"),A(i,"background-image","url("+C+r[2]+")"),_(s,"class","title-container svelte-9npqog"),_(a,"class","main-container-inner svelte-9npqog"),_(t,"class","main-container svelte-9npqog"),_(t,"style",e="background-image: url("+C+r[2]+"); "+(r[0]==r[1]?"opacity: 100%; transform: translate(0%);":""))},m(n,l){w(n,t,l),d(t,a),d(a,s),d(s,i),d(i,o),d(s,u),d(s,c),d(c,f),k||(b=z(t,"click",r[5]),k=!0)},p(n,[l]){l&8&&V(o,n[3]),l&4&&A(i,"background-image","url("+C+n[2]+")"),l&8&&V(f,n[3]),l&7&&e!==(e="background-image: url("+C+n[2]+"); "+(n[0]==n[1]?"opacity: 100%; transform: translate(0%);":""))&&_(t,"style",e)},i:j,o:j,d(n){n&&h(t),k=!1,b()}}}function F(r,t,a){let{id:s,path:i,title:o,currentCatagory:u,currentArticle:c}=t;const f=()=>{a(0,u=parseInt(s))};return r.$$set=e=>{"id"in e&&a(1,s=e.id),"path"in e&&a(2,i=e.path),"title"in e&&a(3,o=e.title),"currentCatagory"in e&&a(0,u=e.currentCatagory),"currentArticle"in e&&a(4,c=e.currentArticle)},[u,s,i,o,c,f]}class J extends H{constructor(t){super(),P(this,t,F,B,S,{id:1,path:2,title:3,currentCatagory:0,currentArticle:4})}}export{J as C};
