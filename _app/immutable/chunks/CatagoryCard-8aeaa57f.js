import{S as p,i as M,s as N,k as m,q as I,a as X,l as v,m as g,r as V,h as f,c as j,n as _,p as q,N as C,b as w,H as d,X as z,u as H,D as S}from"./shared-b72a6525.js";function B(s){let t,a,r,l,o,u,n,h,e,k,b;return{c(){t=m("div"),a=m("div"),r=m("div"),l=m("div"),o=I(s[4]),u=X(),n=m("h1"),h=I(s[4]),this.h()},l(i){t=v(i,"DIV",{class:!0,style:!0});var c=g(t);a=v(c,"DIV",{class:!0});var D=g(a);r=v(D,"DIV",{class:!0});var y=g(r);l=v(y,"DIV",{class:!0,style:!0});var E=g(l);o=V(E,s[4]),E.forEach(f),u=j(y),n=v(y,"H1",{});var A=g(n);h=V(A,s[4]),A.forEach(f),y.forEach(f),D.forEach(f),c.forEach(f),this.h()},h(){_(l,"class","li-overlay svelte-hufag5"),q(l,"background-image","url("+C+s[3]+")"),_(r,"class","title-container svelte-hufag5"),_(a,"class","main-container-inner svelte-hufag5"),_(t,"class","main-container svelte-hufag5"),_(t,"style",e="background-image: url("+C+s[3]+"); "+(s[0]==s[2]?"opacity: 100%; transform: translate(0%);":""))},m(i,c){w(i,t,c),d(t,a),d(a,r),d(r,l),d(l,o),d(r,u),d(r,n),d(n,h),k||(b=z(t,"click",s[5]),k=!0)},p(i,[c]){c&16&&H(o,i[4]),c&8&&q(l,"background-image","url("+C+i[3]+")"),c&16&&H(h,i[4]),c&13&&e!==(e="background-image: url("+C+i[3]+"); "+(i[0]==i[2]?"opacity: 100%; transform: translate(0%);":""))&&_(t,"style",e)},i:S,o:S,d(i){i&&f(t),k=!1,b()}}}function F(s,t,a){let{id:r,path:l,title:o,currentCatagory:u,currentArticle:n}=t;const h=()=>{a(0,u=r),a(1,n=-1*Math.random())};return s.$$set=e=>{"id"in e&&a(2,r=e.id),"path"in e&&a(3,l=e.path),"title"in e&&a(4,o=e.title),"currentCatagory"in e&&a(0,u=e.currentCatagory),"currentArticle"in e&&a(1,n=e.currentArticle)},[u,n,r,l,o,h]}class J extends p{constructor(t){super(),M(this,t,F,B,N,{id:2,path:3,title:4,currentCatagory:0,currentArticle:1})}}export{J as C};
