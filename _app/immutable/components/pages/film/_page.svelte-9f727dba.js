import{S as Q,i as x,s as O,k as v,a as M,l as b,m as k,c as H,h as f,n as m,H as ee,p as A,b as E,I as j,P as te,V as re,t as y,d as C,f as w,T as $,O as P,M as ie,U as ae,g as T,D as U,X,Y,w as Z,x as F,y as G,Z as J,z as L,W as le}from"../../../chunks/shared-29be982c.js";import{f as I}from"../../../chunks/index-07f47786.js";/* empty css                                                                 */import{H as se}from"../../../chunks/HeroCard-b3b65d26.js";import{A as ne}from"../../../chunks/Article-0ef9dba1.js";function W(o,e,l){const i=o.slice();return i[7]=e[l].id,i[8]=e[l].path,i[9]=e[l].data,i}function K(o){let e,l,i,d;return{c(){e=v("div"),this.h()},l(n){e=b(n,"DIV",{class:!0,style:!0}),k(e).forEach(f),this.h()},h(){m(e,"class","main-inner svelte-pu55gh"),A(e,"background-image","url("+P+(o[1]>=0?o[3][o[0]][o[1]].path:o[2][o[0]].path)+")")},m(n,t){E(n,e,t),d=!0},p(n,t){(!d||t&3)&&A(e,"background-image","url("+P+(n[1]>=0?n[3][n[0]][n[1]].path:n[2][n[0]].path)+")")},i(n){d||(n&&ie(()=>{i&&i.end(1),l=ae(e,I,{duration:1e3,delay:1500}),l.start()}),d=!0)},o(n){l&&l.invalidate(),n&&(i=$(e,I,{duration:1e3,delay:500})),d=!1},d(n){n&&f(e),n&&i&&i.end()}}}function oe(o){let e,l,i,d,n,t;function u(r){o[6](r)}let s={id:o[3][o[0]][o[1]].id,path:o[3][o[0]][o[1]].path,data:o[3][o[0]][o[1]].data};return o[1]!==void 0&&(s.currentArticle=o[1]),i=new ne({props:s}),X.push(()=>Y(i,"currentArticle",u)),{c(){e=v("div"),l=v("div"),Z(i.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=k(e);l=b(a,"DIV",{class:!0});var c=k(l);F(i.$$.fragment,c),c.forEach(f),a.forEach(f),this.h()},h(){m(l,"class","inner-hero svelte-pu55gh"),m(e,"class","main-hero svelte-pu55gh")},m(r,a){E(r,e,a),j(e,l),G(i,l,null),t=!0},p(r,a){const c={};a&3&&(c.id=r[3][r[0]][r[1]].id),a&3&&(c.path=r[3][r[0]][r[1]].path),a&3&&(c.data=r[3][r[0]][r[1]].data),!d&&a&2&&(d=!0,c.currentArticle=r[1],J(()=>d=!1)),i.$set(c)},i(r){t||(w(i.$$.fragment,r),n&&n.end(1),t=!0)},o(r){y(i.$$.fragment,r),r&&(n=$(e,I,{duration:500})),t=!1},d(r){r&&f(e),L(i),r&&n&&n.end()}}}function de(o){let e,l,i,d,n=o[3][o[0]],t=[];for(let s=0;s<n.length;s+=1)t[s]=N(W(o,n,s));const u=s=>y(t[s],1,1,()=>{t[s]=null});return{c(){e=v("div"),l=v("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=b(s,"DIV",{class:!0});var r=k(e);l=b(r,"DIV",{class:!0});var a=k(l);for(let c=0;c<t.length;c+=1)t[c].l(a);a.forEach(f),r.forEach(f),this.h()},h(){m(l,"class","inner-hero svelte-pu55gh"),m(e,"class","main-hero svelte-pu55gh")},m(s,r){E(s,e,r),j(e,l);for(let a=0;a<t.length;a+=1)t[a].m(l,null);d=!0},p(s,r){if(r&11){n=s[3][s[0]];let a;for(a=0;a<n.length;a+=1){const c=W(s,n,a);t[a]?(t[a].p(c,r),w(t[a],1)):(t[a]=N(c),t[a].c(),w(t[a],1),t[a].m(l,null))}for(T(),a=n.length;a<t.length;a+=1)u(a);C()}},i(s){if(!d){for(let r=0;r<n.length;r+=1)w(t[r]);i&&i.end(1),d=!0}},o(s){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)y(t[r]);s&&(i=$(e,I,{duration:500})),d=!1},d(s){s&&f(e),le(t,s),s&&i&&i.end()}}}function N(o){let e,l,i;function d(t){o[5](t)}let n={id:o[7],path:o[8],data:o[9]};return o[1]!==void 0&&(n.currentArticle=o[1]),e=new se({props:n}),X.push(()=>Y(e,"currentArticle",d)),{c(){Z(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,u){G(e,t,u),i=!0},p(t,u){const s={};u&1&&(s.id=t[7]),u&1&&(s.path=t[8]),u&1&&(s.data=t[9]),!l&&u&2&&(l=!0,s.currentArticle=t[1],J(()=>l=!1)),e.$set(s)},i(t){i||(w(e.$$.fragment,t),i=!0)},o(t){y(e.$$.fragment,t),i=!1},d(t){L(e,t)}}}function R(o){let e,l,i,d,n;const t=[de,oe],u=[];function s(r,a){return r[1]<0?0:1}return l=s(o),i=u[l]=t[l](o),{c(){e=v("div"),i.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=k(e);i.l(a),a.forEach(f),this.h()},h(){m(e,"class","main-inner-layer grid svelte-pu55gh")},m(r,a){E(r,e,a),u[l].m(e,null),n=!0},p(r,a){let c=l;l=s(r),l===c?u[l].p(r,a):(T(),y(u[c],1,1,()=>{u[c]=null}),C(),i=u[l],i?i.p(r,a):(i=u[l]=t[l](r),i.c()),w(i,1),i.m(e,null))},i(r){n||(w(i),d&&d.end(1),n=!0)},o(r){y(i),r&&(d=$(e,I,{duration:500})),n=!1},d(r){r&&f(e),u[l].d(),r&&d&&d.end()}}}function ue(o){let e,l=o[1],i,d,n,t,u,s,r,a,c=o[0],D,V,B,q,_=K(o),g=R(o);return{c(){e=v("div"),_.c(),i=M(),d=v("div"),n=M(),t=v("div"),u=v("video"),s=v("source"),a=M(),g.c(),this.h()},l(h){e=b(h,"DIV",{class:!0});var p=k(e);_.l(p),i=H(p),d=b(p,"DIV",{class:!0}),k(d).forEach(f),n=H(p),t=b(p,"DIV",{class:!0});var S=k(t);u=b(S,"VIDEO",{class:!0,style:!0});var z=k(u);s=b(z,"SOURCE",{src:!0,type:!0,class:!0}),z.forEach(f),a=H(S),g.l(S),S.forEach(f),p.forEach(f),this.h()},h(){m(d,"class","main-inner-mask svelte-pu55gh"),ee(s.src,r=P+"/images/bg2-t.mp4")||m(s,"src",r),m(s,"type","video/mp4"),m(s,"class","svelte-pu55gh"),m(u,"class","video svelte-pu55gh"),u.autoplay=!0,u.muted=!0,u.loop=!0,A(u,"position","absolute"),A(u,"z-index","-1"),A(u,"top","0"),A(u,"left","0"),A(u,"object-fit","cover"),A(u,"width","100%"),A(u,"height","100%"),m(t,"class","main-inner-layer grid svelte-pu55gh"),m(e,"class","main-hero-container svelte-pu55gh")},m(h,p){E(h,e,p),_.m(e,null),j(e,i),j(e,d),j(e,n),j(e,t),j(t,u),j(u,s),j(t,a),g.m(t,null),V=!0,B||(q=te(window,"keydown",re(o[4])),B=!0)},p(h,[p]){p&2&&O(l,l=h[1])?(T(),y(_,1,1,U),C(),_=K(h),_.c(),w(_,1),_.m(e,i)):_.p(h,p),p&1&&O(c,c=h[0])?(T(),y(g,1,1,U),C(),g=R(h),g.c(),w(g,1),g.m(t,null)):g.p(h,p)},i(h){V||(w(_),w(g),D&&D.end(1),V=!0)},o(h){y(_),y(g),h&&(D=$(e,I,{duration:1e3,delay:500})),V=!1},d(h){h&&f(e),_.d(h),g.d(h),h&&D&&D.end(),B=!1,q()}}}function ce(o,e,l){const i=[{id:"0",path:"",title:""}];let d=0;const n={0:[{id:"0",path:"/images/the-big-short.jpg",data:{title:"The Big Short",href:"https://www.imdb.com/title/tt1596363/"}},{id:"1",path:"/images/inglorious-basterds.jpg",data:{title:"Inglorious Basterds",href:"https://www.imdb.com/title/tt0361748/"}},{id:"2",path:"/images/the-batman-transformed.jpeg",data:{title:"The Batman",href:"https://www.imdb.com/title/tt1877830/"}},{id:"3",path:"/images/midsommar-transformed.jpeg",data:{title:"Midsommar",href:"https://www.imdb.com/title/tt8772262/"}},{id:"4",path:"/images/princess-mononoke.jpg",data:{title:"Princess Mononoke",href:"https://www.imdb.com/title/tt0119698/"}},{id:"5",path:"/images/spiderverse.png",data:{title:"Into the Spiderverse",href:"https://www.imdb.com/title/tt4633694/"}},{id:"6",path:"/images/the-social-network.jpg",data:{title:"The Social Network",href:"https://www.imdb.com/title/tt1285016/"}},{id:"7",path:"/images/interstellar2.jpg",data:{title:"Interstellar",href:"https://www.imdb.com/title/tt0816692/"}},{id:"8",path:"/images/django.jpg",data:{title:"Django",href:"https://www.imdb.com/title/tt1853728/"}},{id:"9",path:"/images/the-sting-transformed.jpeg",data:{title:"The Sting",href:"https://www.imdb.com/title/tt0070735/"}},{id:"10",path:"/images/whiplash.jpg",data:{title:"Whiplash",href:"https://www.imdb.com/title/tt2582802/"}},{id:"11",path:"/images/mulan-transformed-transformed.jpeg",data:{title:"Mulan",href:"https://www.imdb.com/title/tt0120762/"}}]};let t=-1;function u(a){switch(a.keyCode){case 37:d>0&&l(0,d-=1);break;case 38:d>0&&l(0,d-=1);break;case 39:d<i.length-1&&l(0,d+=1);break;case 40:d<i.length-1&&l(0,d+=1);break}}function s(a){t=a,l(1,t)}function r(a){t=a,l(1,t)}return[d,t,i,n,u,s,r]}class ge extends Q{constructor(e){super(),x(this,e,ce,ue,O,{})}}export{ge as default};
