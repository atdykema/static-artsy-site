import{S as it,i as rt,s as Ne,k as l,a as p,l as i,m as a,c as _,h as r,n as t,Z as et,p as w,b as Se,H as e,T as tt,U as at,t as Re,d as Te,f as Be,L as st,Q as Oe,N as qe,R as lt,g as He,D as Ke,Y as ct,V as ot,W as vt,w as nt,x as dt,y as ut,X as ft,z as ht,q as D,r as V}from"../../../chunks/shared-9a366846.js";import{f as Ce}from"../../../chunks/index-fc33d853.js";/* empty css                                                            */import{H as bt}from"../../../chunks/HeroCard-a795928e.js";function Qe(B,s,o){const f=B.slice();return f[7]=s[o].id,f[8]=s[o].path,f[9]=s[o].data,f}function Xe(B){let s,o,f,h;return{c(){s=l("div"),this.h()},l(d){s=i(d,"DIV",{class:!0,style:!0}),a(s).forEach(r),this.h()},h(){t(s,"class","main-inner svelte-1kuiw8v"),w(s,"background-image","url("+qe+(B[1]>=0?B[3][B[0]][B[1]].path:B[2][B[0]].path)+")")},m(d,v){Se(d,s,v),h=!0},p(d,v){(!h||v&3)&&w(s,"background-image","url("+qe+(d[1]>=0?d[3][d[0]][d[1]].path:d[2][d[0]].path)+")")},i(d){h||(d&&st(()=>{f&&f.end(1),o=lt(s,Ce,{duration:1e3,delay:1500}),o.start()}),h=!0)},o(d){o&&o.invalidate(),d&&(f=Oe(s,Ce,{duration:1e3,delay:500})),h=!1},d(d){d&&r(s),d&&f&&f.end()}}}function kt(B){let s,o,f,h,d,v,b,c,n;function u(y,k){if(y[1]==0)return gt;if(y[1]==1)return mt;if(y[1]==2)return _t;if(y[1]==3)return pt}let m=u(B),x=m&&m(B);return{c(){s=l("div"),x&&x.c(),o=p(),f=l("div"),h=l("img"),this.h()},l(y){s=i(y,"DIV",{class:!0});var k=a(s);x&&x.l(k),o=_(k),f=i(k,"DIV",{class:!0});var S=a(f);h=i(S,"IMG",{class:!0,alt:!0,src:!0,width:!0,length:!0}),S.forEach(r),k.forEach(r),this.h()},h(){t(h,"class","back-button svelte-1kuiw8v"),t(h,"alt","back-button"),et(h.src,d=qe+"/images/arrow.png")||t(h,"src",d),t(h,"width","25"),t(h,"length","200"),t(f,"class","article-back-button svelte-1kuiw8v"),t(s,"class","main-hero svelte-1kuiw8v")},m(y,k){Se(y,s,k),x&&x.m(s,null),e(s,o),e(s,f),e(f,h),b=!0,c||(n=tt(f,"click",B[6]),c=!0)},p(y,k){m!==(m=u(y))&&(x&&x.d(1),x=m&&m(y),x&&(x.c(),x.m(s,o)))},i(y){b||(v&&v.end(1),b=!0)},o(y){y&&(v=Oe(s,Ce,{duration:500})),b=!1},d(y){y&&r(s),x&&x.d(),y&&v&&v.end(),c=!1,n()}}}function wt(B){let s,o,f,h,d=B[3][B[0]],v=[];for(let c=0;c<d.length;c+=1)v[c]=Ye(Qe(B,d,c));const b=c=>Re(v[c],1,1,()=>{v[c]=null});return{c(){s=l("div"),o=l("div");for(let c=0;c<v.length;c+=1)v[c].c();this.h()},l(c){s=i(c,"DIV",{class:!0});var n=a(s);o=i(n,"DIV",{class:!0});var u=a(o);for(let m=0;m<v.length;m+=1)v[m].l(u);u.forEach(r),n.forEach(r),this.h()},h(){t(o,"class","inner-hero svelte-1kuiw8v"),t(s,"class","main-hero svelte-1kuiw8v")},m(c,n){Se(c,s,n),e(s,o);for(let u=0;u<v.length;u+=1)v[u].m(o,null);h=!0},p(c,n){if(n&11){d=c[3][c[0]];let u;for(u=0;u<d.length;u+=1){const m=Qe(c,d,u);v[u]?(v[u].p(m,n),Be(v[u],1)):(v[u]=Ye(m),v[u].c(),Be(v[u],1),v[u].m(o,null))}for(He(),u=d.length;u<v.length;u+=1)b(u);Te()}},i(c){if(!h){for(let n=0;n<d.length;n+=1)Be(v[n]);f&&f.end(1),h=!0}},o(c){v=v.filter(Boolean);for(let n=0;n<v.length;n+=1)Re(v[n]);c&&(f=Oe(s,Ce,{duration:500})),h=!1},d(c){c&&r(s),ct(v,c),c&&f&&f.end()}}}function pt(B){let s,o,f,h,d,v,b,c,n,u,m,x,y,k,S,j,G,g,E,R,F,A,H,W,oe,J,P,M,O,K,I,N,z,ve,$,ne,U,T,C,se,de,le,Z,we,ee,Q,X,te,Y,be,ge,ie,Ie,re,ae,ye,L,pe,ce,ke;return{c(){s=l("div"),o=l("div"),f=D("June-July, 2022"),h=p(),d=l("div"),v=D("SerenityOS Contributions"),b=p(),c=l("div"),n=l("div"),u=l("div"),m=l("div"),x=D("🖥️ C++ 🖥️"),y=p(),k=l("a"),S=D(`Github
                                `),j=l("div"),G=p(),g=l("div"),E=p(),R=l("div"),F=p(),A=l("a"),H=D(`Github
                                `),W=l("div"),oe=p(),J=l("div"),P=p(),M=l("div"),O=p(),K=l("div"),I=l("div"),N=l("div"),z=D("> Link 1: Implemented math constant Phi (Golden Ratio) functionality to onboard Calculator application."),ve=l("br"),$=l("br"),ne=p(),U=l("div"),T=D("> Inspired by onboard calculator's lacks high-level math functionality and user-friendliness for anything above basic calculation."),C=l("br"),se=l("br"),de=p(),le=l("div"),Z=D("> Wanted to bring more flexibility to the function of the application."),we=l("br"),ee=l("br"),Q=p(),X=l("div"),te=D("> Link 2: Implemented ability to adjust time-of-day of events to 'Add Event' functionality of onboard Calender application."),Y=l("br"),be=l("br"),ge=p(),ie=l("div"),Ie=D("> Event functions in the onboard Calender lacked the ability to denote a specific time of an event, only allowing the specification of a day."),re=l("br"),ae=l("br"),ye=p(),L=l("div"),pe=D("> Worked to bring the calender application to a usable state."),ce=l("br"),ke=l("br"),this.h()},l(he){s=i(he,"DIV",{style:!0,class:!0});var q=a(s);o=i(q,"DIV",{class:!0,style:!0});var Ue=a(o);f=V(Ue,"June-July, 2022"),Ue.forEach(r),h=_(q),d=i(q,"DIV",{class:!0,style:!0});var Fe=a(d);v=V(Fe,"SerenityOS Contributions"),Fe.forEach(r),b=_(q),c=i(q,"DIV",{class:!0});var ue=a(c);n=i(ue,"DIV",{class:!0,style:!0});var xe=a(n);u=i(xe,"DIV",{class:!0,style:!0});var Ee=a(u);m=i(Ee,"DIV",{class:!0});var We=a(m);x=V(We,"🖥️ C++ 🖥️"),We.forEach(r),Ee.forEach(r),xe.forEach(r),y=_(ue),k=i(ue,"A",{class:!0,href:!0,target:!0,rel:!0});var De=a(k);S=V(De,`Github
                                `),j=i(De,"DIV",{class:!0,id:!0}),a(j).forEach(r),G=_(De),g=i(De,"DIV",{class:!0,id:!0}),a(g).forEach(r),E=_(De),R=i(De,"DIV",{class:!0,id:!0}),a(R).forEach(r),De.forEach(r),F=_(ue),A=i(ue,"A",{class:!0,href:!0,target:!0,rel:!0});var Ve=a(A);H=V(Ve,`Github
                                `),W=i(Ve,"DIV",{class:!0,id:!0}),a(W).forEach(r),oe=_(Ve),J=i(Ve,"DIV",{class:!0,id:!0}),a(J).forEach(r),P=_(Ve),M=i(Ve,"DIV",{class:!0,id:!0}),a(M).forEach(r),Ve.forEach(r),ue.forEach(r),O=_(q),K=i(q,"DIV",{class:!0});var Je=a(K);I=i(Je,"DIV",{class:!0});var fe=a(I);N=i(fe,"DIV",{class:!0});var Ae=a(N);z=V(Ae,"> Link 1: Implemented math constant Phi (Golden Ratio) functionality to onboard Calculator application."),ve=i(Ae,"BR",{class:!0}),$=i(Ae,"BR",{class:!0}),Ae.forEach(r),ne=_(fe),U=i(fe,"DIV",{class:!0});var je=a(U);T=V(je,"> Inspired by onboard calculator's lacks high-level math functionality and user-friendliness for anything above basic calculation."),C=i(je,"BR",{class:!0}),se=i(je,"BR",{class:!0}),je.forEach(r),de=_(fe),le=i(fe,"DIV",{class:!0});var Ge=a(le);Z=V(Ge,"> Wanted to bring more flexibility to the function of the application."),we=i(Ge,"BR",{class:!0}),ee=i(Ge,"BR",{class:!0}),Ge.forEach(r),Q=_(fe),X=i(fe,"DIV",{class:!0});var _e=a(X);te=V(_e,"> Link 2: Implemented ability to adjust time-of-day of events to 'Add Event' functionality of onboard Calender application."),Y=i(_e,"BR",{class:!0}),be=i(_e,"BR",{class:!0}),_e.forEach(r),ge=_(fe),ie=i(fe,"DIV",{class:!0});var me=a(ie);Ie=V(me,"> Event functions in the onboard Calender lacked the ability to denote a specific time of an event, only allowing the specification of a day."),re=i(me,"BR",{class:!0}),ae=i(me,"BR",{class:!0}),me.forEach(r),ye=_(fe),L=i(fe,"DIV",{class:!0});var Me=a(L);pe=V(Me,"> Worked to bring the calender application to a usable state."),ce=i(Me,"BR",{class:!0}),ke=i(Me,"BR",{class:!0}),Me.forEach(r),fe.forEach(r),Je.forEach(r),q.forEach(r),this.h()},h(){t(o,"class","project-date text-3 svelte-1kuiw8v"),w(o,"overflow","visible"),w(o,"font-weight","bold"),t(d,"class","project-title text-1 svelte-1kuiw8v"),w(d,"font-size","5rem"),t(m,"class","svelte-1kuiw8v"),t(u,"class","skills-item svelte-1kuiw8v"),w(u,"overflow","visible"),t(n,"class","skills-list text-3 svelte-1kuiw8v"),w(n,"overflow","visible"),t(j,"class","circle svelte-1kuiw8v"),t(j,"id","cir1"),t(g,"class","circle svelte-1kuiw8v"),t(g,"id","cir2"),t(R,"class","circle svelte-1kuiw8v"),t(R,"id","cir3"),t(k,"class","text-5 svelte-1kuiw8v"),t(k,"href","https://github.com/SerenityOS/serenity/pull/14228/commits/f21dc0fd3582a4e8c96cd530d8f7fb33075b4adf"),t(k,"target","_blank"),t(k,"rel","noreferrer"),t(W,"class","circle svelte-1kuiw8v"),t(W,"id","cir1"),t(J,"class","circle svelte-1kuiw8v"),t(J,"id","cir2"),t(M,"class","circle svelte-1kuiw8v"),t(M,"id","cir3"),t(A,"class","text-5 svelte-1kuiw8v"),t(A,"href","https://github.com/SerenityOS/serenity/pull/14244/commits/4e1cd08ff2ceeddce2173aabb9780f5256e5c0b0"),t(A,"target","_blank"),t(A,"rel","noreferrer"),t(c,"class","article-right svelte-1kuiw8v"),t(ve,"class","svelte-1kuiw8v"),t($,"class","svelte-1kuiw8v"),t(N,"class","text-2 svelte-1kuiw8v"),t(C,"class","svelte-1kuiw8v"),t(se,"class","svelte-1kuiw8v"),t(U,"class","text-4 svelte-1kuiw8v"),t(we,"class","svelte-1kuiw8v"),t(ee,"class","svelte-1kuiw8v"),t(le,"class","text-6 svelte-1kuiw8v"),t(Y,"class","svelte-1kuiw8v"),t(be,"class","svelte-1kuiw8v"),t(X,"class","text-late svelte-1kuiw8v"),t(re,"class","svelte-1kuiw8v"),t(ae,"class","svelte-1kuiw8v"),t(ie,"class","text-late svelte-1kuiw8v"),t(ce,"class","svelte-1kuiw8v"),t(ke,"class","svelte-1kuiw8v"),t(L,"class","text-late svelte-1kuiw8v"),t(I,"class","svelte-1kuiw8v"),t(K,"class","article-left svelte-1kuiw8v"),w(s,"display","flex"),w(s,"flex-direction","row"),w(s,"justify-content","center"),w(s,"align-items","center"),w(s,"height","100%"),t(s,"class","svelte-1kuiw8v")},m(he,q){Se(he,s,q),e(s,o),e(o,f),e(s,h),e(s,d),e(d,v),e(s,b),e(s,c),e(c,n),e(n,u),e(u,m),e(m,x),e(c,y),e(c,k),e(k,S),e(k,j),e(k,G),e(k,g),e(k,E),e(k,R),e(c,F),e(c,A),e(A,H),e(A,W),e(A,oe),e(A,J),e(A,P),e(A,M),e(s,O),e(s,K),e(K,I),e(I,N),e(N,z),e(N,ve),e(N,$),e(I,ne),e(I,U),e(U,T),e(U,C),e(U,se),e(I,de),e(I,le),e(le,Z),e(le,we),e(le,ee),e(I,Q),e(I,X),e(X,te),e(X,Y),e(X,be),e(I,ge),e(I,ie),e(ie,Ie),e(ie,re),e(ie,ae),e(I,ye),e(I,L),e(L,pe),e(L,ce),e(L,ke)},d(he){he&&r(s)}}}function _t(B){let s,o,f,h,d,v,b,c,n,u,m,x,y,k,S,j,G,g,E,R,F,A,H,W,oe,J,P;return{c(){s=l("div"),o=l("div"),f=D("April-May, 2022"),h=p(),d=l("div"),v=D("Dynamic Raytracing Algorithm"),b=p(),c=l("div"),n=l("div"),u=l("div"),m=l("div"),x=D("📜 Javascript 📜"),y=p(),k=l("div"),S=l("div"),j=l("div"),G=D("> Uses graphical computation algorithms, like M ̈oller-Trumbore ray-triangle intersection calculations and Phong shading."),g=l("br"),E=l("br"),R=p(),F=l("div"),A=D("> Able to handle both reflection and refraction of light rays according to material composition of objects in scene."),H=l("br"),W=l("br"),oe=p(),J=l("div"),P=D("> Calculates individual ray position up to five times after initial light ray activation to achieve high detail render."),this.h()},l(M){s=i(M,"DIV",{style:!0,class:!0});var O=a(s);o=i(O,"DIV",{class:!0,style:!0});var K=a(o);f=V(K,"April-May, 2022"),K.forEach(r),h=_(O),d=i(O,"DIV",{class:!0,style:!0});var I=a(d);v=V(I,"Dynamic Raytracing Algorithm"),I.forEach(r),b=_(O),c=i(O,"DIV",{class:!0});var N=a(c);n=i(N,"DIV",{class:!0,style:!0});var z=a(n);u=i(z,"DIV",{class:!0,style:!0});var ve=a(u);m=i(ve,"DIV",{class:!0});var $=a(m);x=V($,"📜 Javascript 📜"),$.forEach(r),ve.forEach(r),z.forEach(r),N.forEach(r),y=_(O),k=i(O,"DIV",{class:!0});var ne=a(k);S=i(ne,"DIV",{class:!0});var U=a(S);j=i(U,"DIV",{class:!0});var T=a(j);G=V(T,"> Uses graphical computation algorithms, like M ̈oller-Trumbore ray-triangle intersection calculations and Phong shading."),g=i(T,"BR",{class:!0}),E=i(T,"BR",{class:!0}),T.forEach(r),R=_(U),F=i(U,"DIV",{class:!0});var C=a(F);A=V(C,"> Able to handle both reflection and refraction of light rays according to material composition of objects in scene."),H=i(C,"BR",{class:!0}),W=i(C,"BR",{class:!0}),C.forEach(r),oe=_(U),J=i(U,"DIV",{class:!0});var se=a(J);P=V(se,"> Calculates individual ray position up to five times after initial light ray activation to achieve high detail render."),se.forEach(r),U.forEach(r),ne.forEach(r),O.forEach(r),this.h()},h(){t(o,"class","project-date text-3 svelte-1kuiw8v"),w(o,"overflow","visible"),w(o,"font-weight","bold"),t(d,"class","project-title text-1 svelte-1kuiw8v"),w(d,"font-size","5rem"),t(m,"class","svelte-1kuiw8v"),t(u,"class","skills-item svelte-1kuiw8v"),w(u,"overflow","visible"),t(n,"class","skills-list svelte-1kuiw8v"),w(n,"overflow","visible"),t(c,"class","article-right text-3 svelte-1kuiw8v"),t(g,"class","svelte-1kuiw8v"),t(E,"class","svelte-1kuiw8v"),t(j,"class","text-2 svelte-1kuiw8v"),t(H,"class","svelte-1kuiw8v"),t(W,"class","svelte-1kuiw8v"),t(F,"class","text-4 svelte-1kuiw8v"),t(J,"class","text-5 svelte-1kuiw8v"),t(S,"class","svelte-1kuiw8v"),t(k,"class","article-left svelte-1kuiw8v"),w(s,"display","flex"),w(s,"flex-direction","row"),w(s,"justify-content","center"),w(s,"align-items","center"),w(s,"height","100%"),t(s,"class","svelte-1kuiw8v")},m(M,O){Se(M,s,O),e(s,o),e(o,f),e(s,h),e(s,d),e(d,v),e(s,b),e(s,c),e(c,n),e(n,u),e(u,m),e(m,x),e(s,y),e(s,k),e(k,S),e(S,j),e(j,G),e(j,g),e(j,E),e(S,R),e(S,F),e(F,A),e(F,H),e(F,W),e(S,oe),e(S,J),e(J,P)},d(M){M&&r(s)}}}function mt(B){let s,o,f,h,d,v,b,c,n,u,m,x,y,k,S,j,G,g,E,R,F,A,H,W,oe,J,P,M,O,K,I,N,z,ve,$,ne,U,T,C,se,de,le,Z,we;return{c(){s=l("div"),o=l("div"),f=D("May-June, 2022"),h=p(),d=l("div"),v=D("GiraffeSearch"),b=p(),c=l("div"),n=l("div"),u=l("div"),m=l("div"),x=D("🐹 Golang 🐹"),y=p(),k=l("div"),S=l("div"),j=D("💿 Git 💿"),G=p(),g=l("a"),E=D(`Github
                                `),R=l("div"),F=p(),A=l("div"),H=p(),W=l("div"),oe=p(),J=l("div"),P=l("div"),M=l("div"),O=D("> Allows for enhanced Finder/grep-type capabilities using keywords and specified file/directory attributes."),K=l("br"),I=l("br"),N=p(),z=l("div"),ve=D("> Inspired by issues relating to search results of built-in Mac file search function, which return deeply embedded files before top level applications of which were unlikely to be ones I was looking for."),$=l("br"),ne=l("br"),U=p(),T=l("div"),C=D("> Incorporates speed-optimized, multithreaded BFS and DFS search algorithms, achieving 7x faster runtimes."),se=l("br"),de=l("br"),le=p(),Z=l("div"),we=D("> Designed image search algorithm based on color keywords using approximate image pixel-color composition."),this.h()},l(ee){s=i(ee,"DIV",{style:!0,class:!0});var Q=a(s);o=i(Q,"DIV",{class:!0,style:!0});var X=a(o);f=V(X,"May-June, 2022"),X.forEach(r),h=_(Q),d=i(Q,"DIV",{class:!0,style:!0});var te=a(d);v=V(te,"GiraffeSearch"),te.forEach(r),b=_(Q),c=i(Q,"DIV",{class:!0});var Y=a(c);n=i(Y,"DIV",{class:!0,style:!0});var be=a(n);u=i(be,"DIV",{class:!0,style:!0});var ge=a(u);m=i(ge,"DIV",{class:!0});var ie=a(m);x=V(ie,"🐹 Golang 🐹"),ie.forEach(r),ge.forEach(r),y=_(be),k=i(be,"DIV",{class:!0});var Ie=a(k);S=i(Ie,"DIV",{class:!0});var re=a(S);j=V(re,"💿 Git 💿"),re.forEach(r),Ie.forEach(r),be.forEach(r),G=_(Y),g=i(Y,"A",{class:!0,href:!0,target:!0,rel:!0});var ae=a(g);E=V(ae,`Github
                                `),R=i(ae,"DIV",{class:!0,id:!0}),a(R).forEach(r),F=_(ae),A=i(ae,"DIV",{class:!0,id:!0}),a(A).forEach(r),H=_(ae),W=i(ae,"DIV",{class:!0,id:!0}),a(W).forEach(r),ae.forEach(r),Y.forEach(r),oe=_(Q),J=i(Q,"DIV",{class:!0});var ye=a(J);P=i(ye,"DIV",{class:!0});var L=a(P);M=i(L,"DIV",{class:!0});var pe=a(M);O=V(pe,"> Allows for enhanced Finder/grep-type capabilities using keywords and specified file/directory attributes."),K=i(pe,"BR",{class:!0}),I=i(pe,"BR",{class:!0}),pe.forEach(r),N=_(L),z=i(L,"DIV",{class:!0});var ce=a(z);ve=V(ce,"> Inspired by issues relating to search results of built-in Mac file search function, which return deeply embedded files before top level applications of which were unlikely to be ones I was looking for."),$=i(ce,"BR",{class:!0}),ne=i(ce,"BR",{class:!0}),ce.forEach(r),U=_(L),T=i(L,"DIV",{class:!0});var ke=a(T);C=V(ke,"> Incorporates speed-optimized, multithreaded BFS and DFS search algorithms, achieving 7x faster runtimes."),se=i(ke,"BR",{class:!0}),de=i(ke,"BR",{class:!0}),ke.forEach(r),le=_(L),Z=i(L,"DIV",{class:!0});var he=a(Z);we=V(he,"> Designed image search algorithm based on color keywords using approximate image pixel-color composition."),he.forEach(r),L.forEach(r),ye.forEach(r),Q.forEach(r),this.h()},h(){t(o,"class","project-date text-3 svelte-1kuiw8v"),w(o,"overflow","visible"),w(o,"font-weight","bold"),t(d,"class","project-title text-1 svelte-1kuiw8v"),w(d,"font-size","5rem"),t(m,"class","svelte-1kuiw8v"),t(u,"class","skills-item svelte-1kuiw8v"),w(u,"overflow","visible"),t(S,"class","svelte-1kuiw8v"),t(k,"class","skills-item svelte-1kuiw8v"),t(n,"class","skills-list text-3 svelte-1kuiw8v"),w(n,"overflow","visible"),t(R,"class","circle svelte-1kuiw8v"),t(R,"id","cir1"),t(A,"class","circle svelte-1kuiw8v"),t(A,"id","cir2"),t(W,"class","circle svelte-1kuiw8v"),t(W,"id","cir3"),t(g,"class","text-5 svelte-1kuiw8v"),t(g,"href","https://github.com/atdykema/giraffeSearch_golang"),t(g,"target","_blank"),t(g,"rel","noreferrer"),t(c,"class","article-right svelte-1kuiw8v"),t(K,"class","svelte-1kuiw8v"),t(I,"class","svelte-1kuiw8v"),t(M,"class","text-2 svelte-1kuiw8v"),t($,"class","svelte-1kuiw8v"),t(ne,"class","svelte-1kuiw8v"),t(z,"class","text-4 svelte-1kuiw8v"),t(se,"class","svelte-1kuiw8v"),t(de,"class","svelte-1kuiw8v"),t(T,"class","text-6 svelte-1kuiw8v"),t(Z,"class","text-late svelte-1kuiw8v"),t(P,"class","svelte-1kuiw8v"),t(J,"class","article-left svelte-1kuiw8v"),w(s,"display","flex"),w(s,"flex-direction","row"),w(s,"justify-content","center"),w(s,"align-items","center"),w(s,"height","100%"),t(s,"class","svelte-1kuiw8v")},m(ee,Q){Se(ee,s,Q),e(s,o),e(o,f),e(s,h),e(s,d),e(d,v),e(s,b),e(s,c),e(c,n),e(n,u),e(u,m),e(m,x),e(n,y),e(n,k),e(k,S),e(S,j),e(c,G),e(c,g),e(g,E),e(g,R),e(g,F),e(g,A),e(g,H),e(g,W),e(s,oe),e(s,J),e(J,P),e(P,M),e(M,O),e(M,K),e(M,I),e(P,N),e(P,z),e(z,ve),e(z,$),e(z,ne),e(P,U),e(P,T),e(T,C),e(T,se),e(T,de),e(P,le),e(P,Z),e(Z,we)},d(ee){ee&&r(s)}}}function gt(B){let s,o,f,h,d,v,b,c,n,u,m,x,y,k,S,j,G,g,E,R,F,A,H,W,oe,J,P,M,O,K,I,N,z,ve,$,ne,U,T,C,se,de,le,Z,we,ee,Q,X,te,Y,be,ge,ie,Ie,re,ae,ye,L,pe,ce,ke;return{c(){s=l("div"),o=l("div"),f=D("November 12-13, 2022"),h=p(),d=l("div"),v=D("UMass GreenEats"),b=p(),c=l("div"),n=l("div"),u=D("🏆 Won Best Software hack"),m=l("br"),x=D(`
                                🥈 Placed Second Place Overall (out of 65 teams/206 participants)`),y=p(),k=l("div"),S=l("div"),j=l("div"),G=D("🐍 Python 🐍"),g=p(),E=l("div"),R=l("div"),F=D("🕊️ Swift 🕊️"),A=p(),H=l("div"),W=l("div"),oe=D("☁️ AWS ☁️"),J=p(),P=l("div"),M=l("div"),O=D("📃 Firebase 📃"),K=p(),I=l("a"),N=D(`Devpost
                                `),z=l("div"),ve=p(),$=l("div"),ne=p(),U=l("div"),T=p(),C=l("a"),se=D(`Github
                                `),de=l("div"),le=p(),Z=l("div"),we=p(),ee=l("div"),Q=p(),X=l("div"),te=l("div"),Y=l("div"),be=D("> Mobile application which ingests UMass' daily dining menus and produces healthy and sustainable meal plans based on users bio-metrics (gender, height, weight, allergens), allowing students to reduce individual carbon footprint."),ge=l("br"),ie=l("br"),Ie=p(),re=l("div"),ae=D("> Built as a team project at UMass' 2022 hackathon"),ye=l("br"),L=l("br"),pe=p(),ce=l("div"),ke=D("> Personally built out Selenium web scraper using Python for collecting and storing menu data in Firebase."),this.h()},l(he){s=i(he,"DIV",{style:!0,class:!0});var q=a(s);o=i(q,"DIV",{class:!0,style:!0});var Ue=a(o);f=V(Ue,"November 12-13, 2022"),Ue.forEach(r),h=_(q),d=i(q,"DIV",{class:!0});var Fe=a(d);v=V(Fe,"UMass GreenEats"),Fe.forEach(r),b=_(q),c=i(q,"DIV",{class:!0});var ue=a(c);n=i(ue,"DIV",{class:!0,style:!0});var xe=a(n);u=V(xe,"🏆 Won Best Software hack"),m=i(xe,"BR",{class:!0}),x=V(xe,`
                                🥈 Placed Second Place Overall (out of 65 teams/206 participants)`),xe.forEach(r),y=_(ue),k=i(ue,"DIV",{class:!0,style:!0});var Ee=a(k);S=i(Ee,"DIV",{class:!0,style:!0});var We=a(S);j=i(We,"DIV",{class:!0});var De=a(j);G=V(De,"🐍 Python 🐍"),De.forEach(r),We.forEach(r),g=_(Ee),E=i(Ee,"DIV",{class:!0});var Ve=a(E);R=i(Ve,"DIV",{class:!0});var Je=a(R);F=V(Je,"🕊️ Swift 🕊️"),Je.forEach(r),Ve.forEach(r),A=_(Ee),H=i(Ee,"DIV",{class:!0});var fe=a(H);W=i(fe,"DIV",{class:!0});var Ae=a(W);oe=V(Ae,"☁️ AWS ☁️"),Ae.forEach(r),fe.forEach(r),J=_(Ee),P=i(Ee,"DIV",{class:!0});var je=a(P);M=i(je,"DIV",{class:!0});var Ge=a(M);O=V(Ge,"📃 Firebase 📃"),Ge.forEach(r),je.forEach(r),Ee.forEach(r),K=_(ue),I=i(ue,"A",{class:!0,href:!0,target:!0,rel:!0});var _e=a(I);N=V(_e,`Devpost
                                `),z=i(_e,"DIV",{class:!0,id:!0}),a(z).forEach(r),ve=_(_e),$=i(_e,"DIV",{class:!0,id:!0}),a($).forEach(r),ne=_(_e),U=i(_e,"DIV",{class:!0,id:!0}),a(U).forEach(r),_e.forEach(r),T=_(ue),C=i(ue,"A",{class:!0,href:!0,target:!0,rel:!0});var me=a(C);se=V(me,`Github
                                `),de=i(me,"DIV",{class:!0,id:!0}),a(de).forEach(r),le=_(me),Z=i(me,"DIV",{class:!0,id:!0}),a(Z).forEach(r),we=_(me),ee=i(me,"DIV",{class:!0,id:!0}),a(ee).forEach(r),me.forEach(r),ue.forEach(r),Q=_(q),X=i(q,"DIV",{class:!0});var Me=a(X);te=i(Me,"DIV",{class:!0});var Pe=a(te);Y=i(Pe,"DIV",{class:!0});var ze=a(Y);be=V(ze,"> Mobile application which ingests UMass' daily dining menus and produces healthy and sustainable meal plans based on users bio-metrics (gender, height, weight, allergens), allowing students to reduce individual carbon footprint."),ge=i(ze,"BR",{class:!0}),ie=i(ze,"BR",{class:!0}),ze.forEach(r),Ie=_(Pe),re=i(Pe,"DIV",{class:!0});var Le=a(re);ae=V(Le,"> Built as a team project at UMass' 2022 hackathon"),ye=i(Le,"BR",{class:!0}),L=i(Le,"BR",{class:!0}),Le.forEach(r),pe=_(Pe),ce=i(Pe,"DIV",{class:!0});var $e=a(ce);ke=V($e,"> Personally built out Selenium web scraper using Python for collecting and storing menu data in Firebase."),$e.forEach(r),Pe.forEach(r),Me.forEach(r),q.forEach(r),this.h()},h(){t(o,"class","project-date text-3 svelte-1kuiw8v"),w(o,"overflow","visible"),w(o,"font-weight","bold"),t(d,"class","project-title text-1 svelte-1kuiw8v"),t(m,"class","svelte-1kuiw8v"),t(n,"class","text-3 svelte-1kuiw8v"),w(n,"overflow","visible"),w(n,"font-weight","bold"),t(j,"class","svelte-1kuiw8v"),t(S,"class","skills-item svelte-1kuiw8v"),w(S,"overflow","visible"),t(R,"class","svelte-1kuiw8v"),t(E,"class","skills-item svelte-1kuiw8v"),t(W,"class","svelte-1kuiw8v"),t(H,"class","skills-item svelte-1kuiw8v"),t(M,"class","svelte-1kuiw8v"),t(P,"class","skills-item svelte-1kuiw8v"),t(k,"class","skills-list text-5 svelte-1kuiw8v"),w(k,"overflow","visible"),t(z,"class","circle svelte-1kuiw8v"),t(z,"id","cir1"),t($,"class","circle svelte-1kuiw8v"),t($,"id","cir2"),t(U,"class","circle svelte-1kuiw8v"),t(U,"id","cir3"),t(I,"class","text-late svelte-1kuiw8v"),t(I,"href","https://devpost.com/software/umass-greeneats"),t(I,"target","_blank"),t(I,"rel","noreferrer"),t(de,"class","circle svelte-1kuiw8v"),t(de,"id","cir1"),t(Z,"class","circle svelte-1kuiw8v"),t(Z,"id","cir2"),t(ee,"class","circle svelte-1kuiw8v"),t(ee,"id","cir3"),t(C,"class","text-late svelte-1kuiw8v"),t(C,"href","https://github.com/vdsingh/UMass-GreenEats"),t(C,"target","_blank"),t(C,"rel","noreferrer"),t(c,"class","article-right svelte-1kuiw8v"),t(ge,"class","svelte-1kuiw8v"),t(ie,"class","svelte-1kuiw8v"),t(Y,"class","text-2 svelte-1kuiw8v"),t(ye,"class","svelte-1kuiw8v"),t(L,"class","svelte-1kuiw8v"),t(re,"class","text-4 svelte-1kuiw8v"),t(ce,"class","text-6 svelte-1kuiw8v"),t(te,"class","svelte-1kuiw8v"),t(X,"class","article-left svelte-1kuiw8v"),w(s,"display","flex"),w(s,"flex-direction","row"),w(s,"justify-content","center"),w(s,"align-items","center"),w(s,"height","100%"),t(s,"class","svelte-1kuiw8v")},m(he,q){Se(he,s,q),e(s,o),e(o,f),e(s,h),e(s,d),e(d,v),e(s,b),e(s,c),e(c,n),e(n,u),e(n,m),e(n,x),e(c,y),e(c,k),e(k,S),e(S,j),e(j,G),e(k,g),e(k,E),e(E,R),e(R,F),e(k,A),e(k,H),e(H,W),e(W,oe),e(k,J),e(k,P),e(P,M),e(M,O),e(c,K),e(c,I),e(I,N),e(I,z),e(I,ve),e(I,$),e(I,ne),e(I,U),e(c,T),e(c,C),e(C,se),e(C,de),e(C,le),e(C,Z),e(C,we),e(C,ee),e(s,Q),e(s,X),e(X,te),e(te,Y),e(Y,be),e(Y,ge),e(Y,ie),e(te,Ie),e(te,re),e(re,ae),e(re,ye),e(re,L),e(te,pe),e(te,ce),e(ce,ke)},d(he){he&&r(s)}}}function Ye(B){let s,o,f;function h(v){B[5](v)}let d={id:B[7],path:B[8],data:B[9]};return B[1]!==void 0&&(d.currentArticle=B[1]),s=new bt({props:d}),ot.push(()=>vt(s,"currentArticle",h)),{c(){nt(s.$$.fragment)},l(v){dt(s.$$.fragment,v)},m(v,b){ut(s,v,b),f=!0},p(v,b){const c={};b&1&&(c.id=v[7]),b&1&&(c.path=v[8]),b&1&&(c.data=v[9]),!o&&b&2&&(o=!0,c.currentArticle=v[1],ft(()=>o=!1)),s.$set(c)},i(v){f||(Be(s.$$.fragment,v),f=!0)},o(v){Re(s.$$.fragment,v),f=!1},d(v){ht(s,v)}}}function Ze(B){let s,o,f,h,d;const v=[wt,kt],b=[];function c(n,u){return n[1]<0?0:1}return o=c(B),f=b[o]=v[o](B),{c(){s=l("div"),f.c(),this.h()},l(n){s=i(n,"DIV",{class:!0});var u=a(s);f.l(u),u.forEach(r),this.h()},h(){t(s,"class","main-inner-layer grid svelte-1kuiw8v")},m(n,u){Se(n,s,u),b[o].m(s,null),d=!0},p(n,u){let m=o;o=c(n),o===m?b[o].p(n,u):(He(),Re(b[m],1,1,()=>{b[m]=null}),Te(),f=b[o],f?f.p(n,u):(f=b[o]=v[o](n),f.c()),Be(f,1),f.m(s,null))},i(n){d||(Be(f),h&&h.end(1),d=!0)},o(n){Re(f),n&&(h=Oe(s,Ce,{duration:500})),d=!1},d(n){n&&r(s),b[o].d(),n&&h&&h.end()}}}function yt(B){let s,o=B[1],f,h,d,v,b,c,n,u,m=B[0],x,y,k,S,j,G=Xe(B),g=Ze(B);return{c(){s=l("div"),G.c(),f=p(),h=l("div"),d=p(),v=l("div"),b=l("video"),c=l("source"),u=p(),g.c(),this.h()},l(E){s=i(E,"DIV",{class:!0});var R=a(s);G.l(R),f=_(R),h=i(R,"DIV",{class:!0}),a(h).forEach(r),d=_(R),v=i(R,"DIV",{class:!0});var F=a(v);b=i(F,"VIDEO",{class:!0,style:!0});var A=a(b);c=i(A,"SOURCE",{src:!0,type:!0,class:!0}),A.forEach(r),u=_(F),g.l(F),F.forEach(r),R.forEach(r),this.h()},h(){t(h,"class","main-inner-mask svelte-1kuiw8v"),et(c.src,n=qe+"/images/bg-1.mp4")||t(c,"src",n),t(c,"type","video/mp4"),t(c,"class","svelte-1kuiw8v"),t(b,"class","video svelte-1kuiw8v"),b.autoplay=!0,b.muted=!0,b.loop=!0,w(b,"position","absolute"),w(b,"z-index","-1"),w(b,"top","0"),w(b,"left","0"),w(b,"object-fit","cover"),w(b,"width","100%"),w(b,"height","100%"),t(v,"class","main-inner-layer grid svelte-1kuiw8v"),t(s,"class","main-hero-container svelte-1kuiw8v")},m(E,R){Se(E,s,R),G.m(s,null),e(s,f),e(s,h),e(s,d),e(s,v),e(v,b),e(b,c),e(v,u),g.m(v,null),k=!0,S||(j=tt(window,"keydown",at(B[4])),S=!0)},p(E,[R]){R&2&&Ne(o,o=E[1])?(He(),Re(G,1,1,Ke),Te(),G=Xe(E),G.c(),Be(G,1),G.m(s,f)):G.p(E,R),R&1&&Ne(m,m=E[0])?(He(),Re(g,1,1,Ke),Te(),g=Ze(E),g.c(),Be(g,1),g.m(v,null)):g.p(E,R)},i(E){k||(Be(G),Be(g),E&&st(()=>{y&&y.end(1),x=lt(s,Ce,{duration:1e3,delay:1500}),x.start()}),k=!0)},o(E){Re(G),Re(g),x&&x.invalidate(),E&&(y=Oe(s,Ce,{duration:1e3,delay:500})),k=!1},d(E){E&&r(s),G.d(E),g.d(E),E&&y&&y.end(),S=!1,j()}}}function Et(B,s,o){const f=[{id:"0",path:"",title:""}];let h=0;const d={0:[{id:"0",path:"/images/greeneats-transformed.jpeg",data:{title:"The Big Short",href:"https://www.imdb.com/title/tt1596363/"}},{id:"1",path:"/images/giraffe-search-transformed-transformed.jpeg",data:{title:"Inglorious Basterds",href:"https://www.imdb.com/title/tt0361748/"}},{id:"2",path:"/images/raytracing-transformed.j",data:{title:"The Batman",href:"https://www.imdb.com/title/tt1877830/"}},{id:"3",path:"/images/serenity-transformed.jpeg",data:{title:"Midsommar",href:"https://www.imdb.com/title/tt8772262/"}}]};let v=-1;function b(u){switch(u.keyCode){case 37:h>0&&o(0,h-=1);break;case 38:h>0&&o(0,h-=1);break;case 39:h<f.length-1&&o(0,h+=1);break;case 40:h<f.length-1&&o(0,h+=1);break}}function c(u){v=u,o(1,v)}return[h,v,f,d,b,c,()=>{o(1,v=-1*Math.random())}]}class Rt extends it{constructor(s){super(),rt(this,s,Et,yt,Ne,{})}}export{Rt as default};
