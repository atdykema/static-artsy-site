import{S as Q,i as x,s as S,k as g,a as B,l as k,m as y,c as O,h as _,n as p,H as ee,p as w,b as I,I as D,P as te,V as re,t as A,d as T,f as b,T as V,O as q,M as ie,U as ae,g as G,D as P,X as W,Y as X,w as Y,x as Z,y as J,Z as L,z as N,W as le}from"../../../chunks/shared-29be982c.js";import{f as E}from"../../../chunks/index-07f47786.js";/* empty css                                                            */import{H as se}from"../../../chunks/HeroCard-f80d7e01.js";import{A as ne}from"../../../chunks/Article-5a73a4fc.js";function U(o,e,l){const i=o.slice();return i[7]=e[l].id,i[8]=e[l].path,i[9]=e[l].data,i}function K(o){let e,l,i,c;return{c(){e=g("div"),this.h()},l(n){e=k(n,"DIV",{class:!0,style:!0}),y(e).forEach(_),this.h()},h(){p(e,"class","main-inner svelte-1taxdvp"),w(e,"background-image","url("+q+(o[1]>=0?o[3][o[0]][o[1]].path:o[2][o[0]].path)+")")},m(n,t){I(n,e,t),c=!0},p(n,t){(!c||t&3)&&w(e,"background-image","url("+q+(n[1]>=0?n[3][n[0]][n[1]].path:n[2][n[0]].path)+")")},i(n){c||(n&&ie(()=>{i&&i.end(1),l=ae(e,E,{duration:1e3,delay:1500}),l.start()}),c=!0)},o(n){l&&l.invalidate(),n&&(i=V(e,E,{duration:1e3,delay:500})),c=!1},d(n){n&&_(e),n&&i&&i.end()}}}function oe(o){let e,l,i,c,n,t;function u(r){o[6](r)}let s={id:o[3][o[0]][o[1]].id,path:o[3][o[0]][o[1]].path,data:o[3][o[0]][o[1]].data};return o[1]!==void 0&&(s.currentArticle=o[1]),i=new ne({props:s}),W.push(()=>X(i,"currentArticle",u)),{c(){e=g("div"),l=g("div"),Y(i.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var a=y(e);l=k(a,"DIV",{class:!0});var d=y(l);Z(i.$$.fragment,d),d.forEach(_),a.forEach(_),this.h()},h(){p(l,"class","inner-hero svelte-1taxdvp"),p(e,"class","main-hero svelte-1taxdvp")},m(r,a){I(r,e,a),D(e,l),J(i,l,null),t=!0},p(r,a){const d={};a&3&&(d.id=r[3][r[0]][r[1]].id),a&3&&(d.path=r[3][r[0]][r[1]].path),a&3&&(d.data=r[3][r[0]][r[1]].data),!c&&a&2&&(c=!0,d.currentArticle=r[1],L(()=>c=!1)),i.$set(d)},i(r){t||(b(i.$$.fragment,r),n&&n.end(1),t=!0)},o(r){A(i.$$.fragment,r),r&&(n=V(e,E,{duration:500})),t=!1},d(r){r&&_(e),N(i),r&&n&&n.end()}}}function ce(o){let e,l,i,c,n=o[3][o[0]],t=[];for(let s=0;s<n.length;s+=1)t[s]=M(U(o,n,s));const u=s=>A(t[s],1,1,()=>{t[s]=null});return{c(){e=g("div"),l=g("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=k(s,"DIV",{class:!0});var r=y(e);l=k(r,"DIV",{class:!0});var a=y(l);for(let d=0;d<t.length;d+=1)t[d].l(a);a.forEach(_),r.forEach(_),this.h()},h(){p(l,"class","inner-hero svelte-1taxdvp"),p(e,"class","main-hero svelte-1taxdvp")},m(s,r){I(s,e,r),D(e,l);for(let a=0;a<t.length;a+=1)t[a].m(l,null);c=!0},p(s,r){if(r&11){n=s[3][s[0]];let a;for(a=0;a<n.length;a+=1){const d=U(s,n,a);t[a]?(t[a].p(d,r),b(t[a],1)):(t[a]=M(d),t[a].c(),b(t[a],1),t[a].m(l,null))}for(G(),a=n.length;a<t.length;a+=1)u(a);T()}},i(s){if(!c){for(let r=0;r<n.length;r+=1)b(t[r]);i&&i.end(1),c=!0}},o(s){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)A(t[r]);s&&(i=V(e,E,{duration:500})),c=!1},d(s){s&&_(e),le(t,s),s&&i&&i.end()}}}function M(o){let e,l,i;function c(t){o[5](t)}let n={id:o[7],path:o[8],data:o[9]};return o[1]!==void 0&&(n.currentArticle=o[1]),e=new se({props:n}),W.push(()=>X(e,"currentArticle",c)),{c(){Y(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,u){J(e,t,u),i=!0},p(t,u){const s={};u&1&&(s.id=t[7]),u&1&&(s.path=t[8]),u&1&&(s.data=t[9]),!l&&u&2&&(l=!0,s.currentArticle=t[1],L(()=>l=!1)),e.$set(s)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){A(e.$$.fragment,t),i=!1},d(t){N(e,t)}}}function R(o){let e,l,i,c,n;const t=[ce,oe],u=[];function s(r,a){return r[1]<0?0:1}return l=s(o),i=u[l]=t[l](o),{c(){e=g("div"),i.c(),this.h()},l(r){e=k(r,"DIV",{class:!0});var a=y(e);i.l(a),a.forEach(_),this.h()},h(){p(e,"class","main-inner-layer grid svelte-1taxdvp")},m(r,a){I(r,e,a),u[l].m(e,null),n=!0},p(r,a){let d=l;l=s(r),l===d?u[l].p(r,a):(G(),A(u[d],1,1,()=>{u[d]=null}),T(),i=u[l],i?i.p(r,a):(i=u[l]=t[l](r),i.c()),b(i,1),i.m(e,null))},i(r){n||(b(i),c&&c.end(1),n=!0)},o(r){A(i),r&&(c=V(e,E,{duration:500})),n=!1},d(r){r&&_(e),u[l].d(),r&&c&&c.end()}}}function ue(o){let e,l=o[1],i,c,n,t,u,s,r,a,d=o[0],$,H,j,z,v=K(o),m=R(o);return{c(){e=g("div"),v.c(),i=B(),c=g("div"),n=B(),t=g("div"),u=g("video"),s=g("source"),a=B(),m.c(),this.h()},l(f){e=k(f,"DIV",{class:!0});var h=y(e);v.l(h),i=O(h),c=k(h,"DIV",{class:!0}),y(c).forEach(_),n=O(h),t=k(h,"DIV",{class:!0});var C=y(t);u=k(C,"VIDEO",{class:!0,style:!0});var F=y(u);s=k(F,"SOURCE",{src:!0,type:!0,class:!0}),F.forEach(_),a=O(C),m.l(C),C.forEach(_),h.forEach(_),this.h()},h(){p(c,"class","main-inner-mask svelte-1taxdvp"),ee(s.src,r=q+"/images/bg2-t.mp4")||p(s,"src",r),p(s,"type","video/mp4"),p(s,"class","svelte-1taxdvp"),p(u,"class","video svelte-1taxdvp"),u.autoplay=!0,u.muted=!0,u.loop=!0,w(u,"position","absolute"),w(u,"z-index","-1"),w(u,"top","0"),w(u,"left","0"),w(u,"object-fit","cover"),w(u,"width","100%"),w(u,"height","100%"),p(t,"class","main-inner-layer grid svelte-1taxdvp"),p(e,"class","main-hero-container svelte-1taxdvp")},m(f,h){I(f,e,h),v.m(e,null),D(e,i),D(e,c),D(e,n),D(e,t),D(t,u),D(u,s),D(t,a),m.m(t,null),H=!0,j||(z=te(window,"keydown",re(o[4])),j=!0)},p(f,[h]){h&2&&S(l,l=f[1])?(G(),A(v,1,1,P),T(),v=K(f),v.c(),b(v,1),v.m(e,i)):v.p(f,h),h&1&&S(d,d=f[0])?(G(),A(m,1,1,P),T(),m=R(f),m.c(),b(m,1),m.m(t,null)):m.p(f,h)},i(f){H||(b(v),b(m),$&&$.end(1),H=!0)},o(f){A(v),A(m),f&&($=V(e,E,{duration:1e3,delay:500})),H=!1},d(f){f&&_(e),v.d(f),m.d(f),f&&$&&$.end(),j=!1,z()}}}function de(o,e,l){const i=[{id:"0",path:"",title:""}];let c=0;const n={0:[{id:"0",path:"/images/hitchhikers.jpg",data:{title:"The Hitchhiker's Guide to the Galaxy",href:"https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy"}},{id:"1",path:"/images/brief.jpg",data:{title:"A Brief History of Time",href:"https://en.wikipedia.org/wiki/A_Brief_History_of_Time"}},{id:"2",path:"/images/freakonomics.webp",data:{title:"Freakonomics",href:"https://en.wikipedia.org/wiki/Freakonomics"}}]};let t=-1;function u(a){switch(a.keyCode){case 37:c>0&&l(0,c-=1);break;case 38:c>0&&l(0,c-=1);break;case 39:c<i.length-1&&l(0,c+=1);break;case 40:c<i.length-1&&l(0,c+=1);break}}function s(a){t=a,l(1,t)}function r(a){t=a,l(1,t)}return[c,t,i,n,u,s,r]}class me extends Q{constructor(e){super(),x(this,e,de,ue,S,{})}}export{me as default};