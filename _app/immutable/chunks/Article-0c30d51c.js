import{S as E,i as V,s as j,k as m,l as _,m as g,h as v,n as d,p as o,N as A,b as p,H as f,Q as q,D as b,q as H,a as C,r as M,c as S,Z as z,u as G}from"./shared-e576ffd9.js";/* empty css                                              */function N(c){let t,a,e,l;return{c(){t=m("div"),a=m("div"),this.h()},l(i){t=_(i,"DIV",{class:!0,style:!0});var s=g(t);a=_(s,"DIV",{class:!0});var n=g(a);n.forEach(v),s.forEach(v),this.h()},h(){d(a,"class","main-container-inner svelte-l86rwt"),d(t,"class","main-container svelte-l86rwt"),o(t,"background-image","url("+A+c[2]+")")},m(i,s){p(i,t,s),f(t,a),e||(l=q(t,"click",c[4]),e=!0)},p(i,[s]){s&4&&o(t,"background-image","url("+A+i[2]+")")},i:b,o:b,d(i){i&&v(t),e=!1,l()}}}function Q(c,t,a){let{currentArticle:e,id:l,path:i,data:s}=t;const n=()=>{a(0,e=l)};return c.$$set=r=>{"currentArticle"in r&&a(0,e=r.currentArticle),"id"in r&&a(1,l=r.id),"path"in r&&a(2,i=r.path),"data"in r&&a(3,s=r.data)},[e,l,i,s,n]}class K extends E{constructor(t){super(),V(this,t,Q,N,j,{currentArticle:0,id:1,path:2,data:3})}}function Z(c){let t,a,e,l=c[1].title+"",i,s,n,r,y,k,D;return{c(){t=m("div"),a=m("div"),e=m("div"),i=H(l),s=C(),n=m("div"),r=m("img"),this.h()},l(h){t=_(h,"DIV",{class:!0});var u=g(t);a=_(u,"DIV",{class:!0});var I=g(a);e=_(I,"DIV",{class:!0,style:!0});var w=g(e);i=M(w,l),w.forEach(v),I.forEach(v),s=S(u),n=_(u,"DIV",{class:!0});var x=g(n);r=_(x,"IMG",{class:!0,alt:!0,src:!0,width:!0,length:!0}),x.forEach(v),u.forEach(v),this.h()},h(){d(e,"class","title svelte-2vjv90"),o(e,"display","flex"),o(e,"flex-direction","column"),o(e,"width","100%"),o(e,"letter-spacing","2rem"),o(e,"font-size","7rem"),o(e,"text-align","center"),d(a,"class","article-body-inner svelte-2vjv90"),d(r,"class","back-button svelte-2vjv90"),d(r,"alt","back-button"),z(r.src,y=A+"/images/arrow.png")||d(r,"src",y),d(r,"width","25"),d(r,"length","200"),d(n,"class","article-back-button svelte-2vjv90"),d(t,"class","article-body svelte-2vjv90")},m(h,u){p(h,t,u),f(t,a),f(a,e),f(e,i),f(t,s),f(t,n),f(n,r),k||(D=q(n,"click",c[2]),k=!0)},p(h,[u]){u&2&&l!==(l=h[1].title+"")&&G(i,l)},i:b,o:b,d(h){h&&v(t),k=!1,D()}}}function B(c,t,a){let{data:e,currentArticle:l}=t;const i=()=>{a(0,l=-1*Math.random())};return c.$$set=s=>{"data"in s&&a(1,e=s.data),"currentArticle"in s&&a(0,l=s.currentArticle)},[l,e,i]}class L extends E{constructor(t){super(),V(this,t,B,Z,j,{data:1,currentArticle:0})}}export{L as A,K as H};
