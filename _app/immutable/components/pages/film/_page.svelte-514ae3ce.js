import{S as J,i as x,s as q,k as g,a as H,l as b,m as k,c as M,h,n as m,Q as ee,p as A,b as E,H as j,U as te,V as re,t as y,d as C,f as w,R as $,N as z,L as ae,T as ie,g as T,D as P,X as L,Y as Q,w as X,x as Y,y as Z,Z as F,z as G,W as le}from"../../../chunks/shared-5e55d3fc.js";import{f as D}from"../../../chunks/index-723a23c2.js";/* empty css                                                            */import{H as se}from"../../../chunks/HeroCard-2543e165.js";import{A as ne}from"../../../chunks/Article-9d3aa879.js";function R(o,e,l){const a=o.slice();return a[7]=e[l].id,a[8]=e[l].path,a[9]=e[l].data,a}function U(o){let e,l,a,d;return{c(){e=g("div"),this.h()},l(n){e=b(n,"DIV",{class:!0,style:!0}),k(e).forEach(h),this.h()},h(){m(e,"class","main-inner svelte-1taxdvp"),A(e,"background-image","url("+z+(o[1]>=0?o[3][o[0]][o[1]].path:o[2][o[0]].path)+")")},m(n,t){E(n,e,t),d=!0},p(n,t){(!d||t&3)&&A(e,"background-image","url("+z+(n[1]>=0?n[3][n[0]][n[1]].path:n[2][n[0]].path)+")")},i(n){d||(n&&ae(()=>{a&&a.end(1),l=ie(e,D,{duration:1e3,delay:1500}),l.start()}),d=!0)},o(n){l&&l.invalidate(),n&&(a=$(e,D,{duration:1e3,delay:500})),d=!1},d(n){n&&h(e),n&&a&&a.end()}}}function oe(o){let e,l,a,d,n,t;function c(r){o[6](r)}let s={id:o[3][o[0]][o[1]].id,path:o[3][o[0]][o[1]].path,data:o[3][o[0]][o[1]].data};return o[1]!==void 0&&(s.currentArticle=o[1]),a=new ne({props:s}),L.push(()=>Q(a,"currentArticle",c)),{c(){e=g("div"),l=g("div"),X(a.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var i=k(e);l=b(i,"DIV",{class:!0});var u=k(l);Y(a.$$.fragment,u),u.forEach(h),i.forEach(h),this.h()},h(){m(l,"class","inner-hero svelte-1taxdvp"),m(e,"class","main-hero svelte-1taxdvp")},m(r,i){E(r,e,i),j(e,l),Z(a,l,null),t=!0},p(r,i){const u={};i&3&&(u.id=r[3][r[0]][r[1]].id),i&3&&(u.path=r[3][r[0]][r[1]].path),i&3&&(u.data=r[3][r[0]][r[1]].data),!d&&i&2&&(d=!0,u.currentArticle=r[1],F(()=>d=!1)),a.$set(u)},i(r){t||(w(a.$$.fragment,r),n&&n.end(1),t=!0)},o(r){y(a.$$.fragment,r),r&&(n=$(e,D,{duration:500})),t=!1},d(r){r&&h(e),G(a),r&&n&&n.end()}}}function de(o){let e,l,a,d,n=o[3][o[0]],t=[];for(let s=0;s<n.length;s+=1)t[s]=W(R(o,n,s));const c=s=>y(t[s],1,1,()=>{t[s]=null});return{c(){e=g("div"),l=g("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=b(s,"DIV",{class:!0});var r=k(e);l=b(r,"DIV",{class:!0});var i=k(l);for(let u=0;u<t.length;u+=1)t[u].l(i);i.forEach(h),r.forEach(h),this.h()},h(){m(l,"class","inner-hero svelte-1taxdvp"),m(e,"class","main-hero svelte-1taxdvp")},m(s,r){E(s,e,r),j(e,l);for(let i=0;i<t.length;i+=1)t[i].m(l,null);d=!0},p(s,r){if(r&11){n=s[3][s[0]];let i;for(i=0;i<n.length;i+=1){const u=R(s,n,i);t[i]?(t[i].p(u,r),w(t[i],1)):(t[i]=W(u),t[i].c(),w(t[i],1),t[i].m(l,null))}for(T(),i=n.length;i<t.length;i+=1)c(i);C()}},i(s){if(!d){for(let r=0;r<n.length;r+=1)w(t[r]);a&&a.end(1),d=!0}},o(s){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)y(t[r]);s&&(a=$(e,D,{duration:500})),d=!1},d(s){s&&h(e),le(t,s),s&&a&&a.end()}}}function W(o){let e,l,a;function d(t){o[5](t)}let n={id:o[7],path:o[8],data:o[9]};return o[1]!==void 0&&(n.currentArticle=o[1]),e=new se({props:n}),L.push(()=>Q(e,"currentArticle",d)),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,c){Z(e,t,c),a=!0},p(t,c){const s={};c&1&&(s.id=t[7]),c&1&&(s.path=t[8]),c&1&&(s.data=t[9]),!l&&c&2&&(l=!0,s.currentArticle=t[1],F(()=>l=!1)),e.$set(s)},i(t){a||(w(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){G(e,t)}}}function K(o){let e,l,a,d,n;const t=[de,oe],c=[];function s(r,i){return r[1]<0?0:1}return l=s(o),a=c[l]=t[l](o),{c(){e=g("div"),a.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var i=k(e);a.l(i),i.forEach(h),this.h()},h(){m(e,"class","main-inner-layer grid svelte-1taxdvp")},m(r,i){E(r,e,i),c[l].m(e,null),n=!0},p(r,i){let u=l;l=s(r),l===u?c[l].p(r,i):(T(),y(c[u],1,1,()=>{c[u]=null}),C(),a=c[l],a?a.p(r,i):(a=c[l]=t[l](r),a.c()),w(a,1),a.m(e,null))},i(r){n||(w(a),d&&d.end(1),n=!0)},o(r){y(a),r&&(d=$(e,D,{duration:500})),n=!1},d(r){r&&h(e),c[l].d(),r&&d&&d.end()}}}function ce(o){let e,l=o[1],a,d,n,t,c,s,r,i,u=o[0],I,V,B,N,_=U(o),v=K(o);return{c(){e=g("div"),_.c(),a=H(),d=g("div"),n=H(),t=g("div"),c=g("video"),s=g("source"),i=H(),v.c(),this.h()},l(f){e=b(f,"DIV",{class:!0});var p=k(e);_.l(p),a=M(p),d=b(p,"DIV",{class:!0}),k(d).forEach(h),n=M(p),t=b(p,"DIV",{class:!0});var S=k(t);c=b(S,"VIDEO",{class:!0,style:!0});var O=k(c);s=b(O,"SOURCE",{src:!0,type:!0,class:!0}),O.forEach(h),i=M(S),v.l(S),S.forEach(h),p.forEach(h),this.h()},h(){m(d,"class","main-inner-mask svelte-1taxdvp"),ee(s.src,r=z+"/images/bg-1.mp4")||m(s,"src",r),m(s,"type","video/mp4"),m(s,"class","svelte-1taxdvp"),m(c,"class","video svelte-1taxdvp"),c.autoplay=!0,c.muted=!0,c.loop=!0,A(c,"position","absolute"),A(c,"z-index","-1"),A(c,"top","0"),A(c,"left","0"),A(c,"object-fit","cover"),A(c,"width","100%"),A(c,"height","100%"),m(t,"class","main-inner-layer grid svelte-1taxdvp"),m(e,"class","main-hero-container svelte-1taxdvp")},m(f,p){E(f,e,p),_.m(e,null),j(e,a),j(e,d),j(e,n),j(e,t),j(t,c),j(c,s),j(t,i),v.m(t,null),V=!0,B||(N=te(window,"keydown",re(o[4])),B=!0)},p(f,[p]){p&2&&q(l,l=f[1])?(T(),y(_,1,1,P),C(),_=U(f),_.c(),w(_,1),_.m(e,a)):_.p(f,p),p&1&&q(u,u=f[0])?(T(),y(v,1,1,P),C(),v=K(f),v.c(),w(v,1),v.m(t,null)):v.p(f,p)},i(f){V||(w(_),w(v),I&&I.end(1),V=!0)},o(f){y(_),y(v),f&&(I=$(e,D,{duration:1e3,delay:500})),V=!1},d(f){f&&h(e),_.d(f),v.d(f),f&&I&&I.end(),B=!1,N()}}}function ue(o,e,l){const a=[{id:"0",path:"",title:""}];let d=0;const n={0:[{id:"0",path:"/images/the-big-short.jpg",data:{title:"The Big Short",href:"https://www.imdb.com/title/tt1596363/"}},{id:"1",path:"/images/inglorious-basterds.jpg",data:{title:"Inglorious Basterds",href:"https://www.imdb.com/title/tt0361748/"}},{id:"2",path:"/images/the-batman-transformed.jpeg",data:{title:"The Batman",href:"https://www.imdb.com/title/tt1877830/"}},{id:"3",path:"/images/midsommar-transformed.jpeg",data:{title:"Midsommar",href:"https://www.imdb.com/title/tt8772262/"}},{id:"4",path:"/images/princess-mononoke.jpg",data:{title:"Princess Mononoke",href:"https://www.imdb.com/title/tt0119698/"}},{id:"5",path:"/images/spiderverse.png",data:{title:"Into the Spiderverse",href:"https://www.imdb.com/title/tt4633694/"}},{id:"6",path:"/images/the-social-network.jpg",data:{title:"The Social Network",href:"https://www.imdb.com/title/tt1285016/"}},{id:"7",path:"/images/interstellar2.jpg",data:{title:"Interstellar",href:"https://www.imdb.com/title/tt0816692/"}},{id:"8",path:"/images/django.jpg",data:{title:"Django",href:"https://www.imdb.com/title/tt1853728/"}},{id:"9",path:"/images/the-sting-transformed.jpeg",data:{title:"The Sting",href:"https://www.imdb.com/title/tt0070735/"}},{id:"10",path:"/images/whiplash.jpg",data:{title:"Whiplash",href:"https://www.imdb.com/title/tt2582802/"}},{id:"11",path:"/images/mulan-transformed-transformed.jpeg",data:{title:"Mulan",href:"https://www.imdb.com/title/tt0120762/"}}]};let t=-1;function c(i){switch(i.keyCode){case 37:d>0&&l(0,d-=1);break;case 38:d>0&&l(0,d-=1);break;case 39:d<a.length-1&&l(0,d+=1);break;case 40:d<a.length-1&&l(0,d+=1);break}}function s(i){t=i,l(1,t)}function r(i){t=i,l(1,t)}return[d,t,a,n,c,s,r]}class ve extends J{constructor(e){super(),x(this,e,ue,ce,q,{})}}export{ve as default};
