import{S as He,i as $e,s as je,k as l,a as I,q as y,l as a,m as n,c as E,h as o,r as k,n as s,H as Te,p,b as me,I as e,P as Le,V as Ne,t as _e,d as Ae,f as be,T as xe,O as Me,M as Ke,U as Xe,g as Ge,D as Oe,W as Ye,X as Ze,Y as Qe,w as et,x as tt,y as st,Z as lt,z as at}from"../../../chunks/shared-29be982c.js";import{f as De}from"../../../chunks/index-07f47786.js";/* empty css                                                            */import{H as rt}from"../../../chunks/HeroCard-f80d7e01.js";function We(D,t,d){const r=D.slice();return r[7]=t[d].id,r[8]=t[d].path,r[9]=t[d].data,r}function Je(D){let t,d,r,c;return{c(){t=l("div"),this.h()},l(h){t=a(h,"DIV",{class:!0,style:!0}),n(t).forEach(o),this.h()},h(){s(t,"class","main-inner svelte-17s2eeo"),p(t,"background-image","url("+Me+(D[1]>=0?D[3][D[0]][D[1]].path:D[2][D[0]].path)+")")},m(h,i){me(h,t,i),c=!0},p(h,i){(!c||i&3)&&p(t,"background-image","url("+Me+(h[1]>=0?h[3][h[0]][h[1]].path:h[2][h[0]].path)+")")},i(h){c||(h&&Ke(()=>{r&&r.end(1),d=Xe(t,De,{duration:1e3,delay:1500}),d.start()}),c=!0)},o(h){d&&d.invalidate(),h&&(r=xe(t,De,{duration:1e3,delay:500})),c=!1},d(h){h&&o(t),h&&r&&r.end()}}}function it(D){let t,d,r,c,h,i,f,u,v;function b(V,g){if(V[1]==0)return vt;if(V[1]==1)return dt;if(V[1]==2)return nt;if(V[1]==3)return ct}let _=b(D),w=_&&_(D);return{c(){t=l("div"),w&&w.c(),d=I(),r=l("div"),c=l("img"),this.h()},l(V){t=a(V,"DIV",{class:!0});var g=n(t);w&&w.l(g),d=E(g),r=a(g,"DIV",{class:!0});var U=n(r);c=a(U,"IMG",{class:!0,alt:!0,src:!0,width:!0,length:!0}),U.forEach(o),g.forEach(o),this.h()},h(){s(c,"class","back-button svelte-17s2eeo"),s(c,"alt","back-button"),Te(c.src,h=Me+"/images/arrow.png")||s(c,"src",h),s(c,"width","25"),s(c,"length","200"),s(r,"class","article-back-button svelte-17s2eeo"),s(t,"class","main-hero svelte-17s2eeo")},m(V,g){me(V,t,g),w&&w.m(t,null),e(t,d),e(t,r),e(r,c),f=!0,u||(v=Le(r,"click",D[6]),u=!0)},p(V,g){_!==(_=b(V))&&(w&&w.d(1),w=_&&_(V),w&&(w.c(),w.m(t,d)))},i(V){f||(i&&i.end(1),f=!0)},o(V){V&&(i=xe(t,De,{duration:500})),f=!1},d(V){V&&o(t),w&&w.d(),V&&i&&i.end(),u=!1,v()}}}function ot(D){let t,d,r,c,h=D[3][D[0]],i=[];for(let u=0;u<h.length;u+=1)i[u]=qe(We(D,h,u));const f=u=>_e(i[u],1,1,()=>{i[u]=null});return{c(){t=l("div"),d=l("div");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){t=a(u,"DIV",{class:!0});var v=n(t);d=a(v,"DIV",{class:!0});var b=n(d);for(let _=0;_<i.length;_+=1)i[_].l(b);b.forEach(o),v.forEach(o),this.h()},h(){s(d,"class","inner-hero svelte-17s2eeo"),s(t,"class","main-hero svelte-17s2eeo")},m(u,v){me(u,t,v),e(t,d);for(let b=0;b<i.length;b+=1)i[b].m(d,null);c=!0},p(u,v){if(v&11){h=u[3][u[0]];let b;for(b=0;b<h.length;b+=1){const _=We(u,h,b);i[b]?(i[b].p(_,v),be(i[b],1)):(i[b]=qe(_),i[b].c(),be(i[b],1),i[b].m(d,null))}for(Ge(),b=h.length;b<i.length;b+=1)f(b);Ae()}},i(u){if(!c){for(let v=0;v<h.length;v+=1)be(i[v]);r&&r.end(1),c=!0}},o(u){i=i.filter(Boolean);for(let v=0;v<i.length;v+=1)_e(i[v]);u&&(r=xe(t,De,{duration:500})),c=!1},d(u){u&&o(t),Ye(i,u),u&&r&&r.end()}}}function ct(D){let t,d,r,c,h,i,f,u,v,b,_,w,V,g,U,z,G,Y,B,R,S,x,M,A,j,K,se,T,m,L,C,Q,le,P,X,re,Z,W,ee,J,q,te,H,oe,ce,F,fe,he,$,ne;return{c(){t=l("div"),d=l("div"),r=l("div"),c=l("div"),h=y("> Link 1: Implemented math constant Phi (Golden Ratio) functionality to onboard Calculator application."),i=l("br"),f=l("br"),u=I(),v=l("div"),b=y("> Inspired by onboard calculator's lacks high-level math functionality and user-friendliness for anything above basic calculation."),_=l("br"),w=l("br"),V=I(),g=l("div"),U=y("> Wanted to bring more flexibility to the function of the application."),z=l("br"),G=l("br"),Y=I(),B=l("div"),R=y("> Link 2: Implemented ability to adjust time-of-day of events to 'Add Event' functionality of onboard Calender application."),S=l("br"),x=l("br"),M=I(),A=l("div"),j=y("> Event functions in the onboard Calender lacked the ability to denote a specific time of an event, only allowing the specification of a day."),K=l("br"),se=l("br"),T=I(),m=l("div"),L=y("> Worked to bring the calender application to a usable state."),C=l("br"),Q=l("br"),le=I(),P=l("div"),X=y("June-July, 2022"),re=I(),Z=l("div"),W=y("SerenityOS Contributions"),ee=I(),J=l("div"),q=l("div"),te=l("div"),H=l("div"),oe=y("🖥️ C++ 🖥️"),ce=I(),F=l("a"),fe=y("Github"),he=I(),$=l("a"),ne=y("Github"),this.h()},l(ae){t=a(ae,"DIV",{style:!0,class:!0});var O=n(t);d=a(O,"DIV",{class:!0});var ge=n(d);r=a(ge,"DIV",{class:!0});var N=n(r);c=a(N,"DIV",{class:!0});var de=n(c);h=k(de,"> Link 1: Implemented math constant Phi (Golden Ratio) functionality to onboard Calculator application."),i=a(de,"BR",{class:!0}),f=a(de,"BR",{class:!0}),de.forEach(o),u=E(N),v=a(N,"DIV",{class:!0});var ve=n(v);b=k(ve,"> Inspired by onboard calculator's lacks high-level math functionality and user-friendliness for anything above basic calculation."),_=a(ve,"BR",{class:!0}),w=a(ve,"BR",{class:!0}),ve.forEach(o),V=E(N),g=a(N,"DIV",{class:!0});var ye=n(g);U=k(ye,"> Wanted to bring more flexibility to the function of the application."),z=a(ye,"BR",{class:!0}),G=a(ye,"BR",{class:!0}),ye.forEach(o),Y=E(N),B=a(N,"DIV",{class:!0});var ke=n(B);R=k(ke,"> Link 2: Implemented ability to adjust time-of-day of events to 'Add Event' functionality of onboard Calender application."),S=a(ke,"BR",{class:!0}),x=a(ke,"BR",{class:!0}),ke.forEach(o),M=E(N),A=a(N,"DIV",{class:!0});var Ie=n(A);j=k(Ie,"> Event functions in the onboard Calender lacked the ability to denote a specific time of an event, only allowing the specification of a day."),K=a(Ie,"BR",{class:!0}),se=a(Ie,"BR",{class:!0}),Ie.forEach(o),T=E(N),m=a(N,"DIV",{class:!0});var ie=n(m);L=k(ie,"> Worked to bring the calender application to a usable state."),C=a(ie,"BR",{class:!0}),Q=a(ie,"BR",{class:!0}),ie.forEach(o),N.forEach(o),ge.forEach(o),le=E(O),P=a(O,"DIV",{class:!0,style:!0});var Ee=n(P);X=k(Ee,"June-July, 2022"),Ee.forEach(o),re=E(O),Z=a(O,"DIV",{class:!0,style:!0});var ue=n(Z);W=k(ue,"SerenityOS Contributions"),ue.forEach(o),ee=E(O),J=a(O,"DIV",{class:!0});var pe=n(J);q=a(pe,"DIV",{class:!0,style:!0});var we=n(q);te=a(we,"DIV",{class:!0,style:!0});var Ve=n(te);H=a(Ve,"DIV",{class:!0});var Be=n(H);oe=k(Be,"🖥️ C++ 🖥️"),Be.forEach(o),Ve.forEach(o),we.forEach(o),ce=E(pe),F=a(pe,"A",{class:!0,href:!0,target:!0,rel:!0});var Re=n(F);fe=k(Re,"Github"),Re.forEach(o),he=E(pe),$=a(pe,"A",{class:!0,href:!0,target:!0,rel:!0});var Se=n($);ne=k(Se,"Github"),Se.forEach(o),pe.forEach(o),O.forEach(o),this.h()},h(){s(i,"class","svelte-17s2eeo"),s(f,"class","svelte-17s2eeo"),s(c,"class","text-2 svelte-17s2eeo"),s(_,"class","svelte-17s2eeo"),s(w,"class","svelte-17s2eeo"),s(v,"class","text-4 svelte-17s2eeo"),s(z,"class","svelte-17s2eeo"),s(G,"class","svelte-17s2eeo"),s(g,"class","text-6 svelte-17s2eeo"),s(S,"class","svelte-17s2eeo"),s(x,"class","svelte-17s2eeo"),s(B,"class","text-late svelte-17s2eeo"),s(K,"class","svelte-17s2eeo"),s(se,"class","svelte-17s2eeo"),s(A,"class","text-late svelte-17s2eeo"),s(C,"class","svelte-17s2eeo"),s(Q,"class","svelte-17s2eeo"),s(m,"class","text-late svelte-17s2eeo"),s(r,"class","svelte-17s2eeo"),s(d,"class","article-left svelte-17s2eeo"),s(P,"class","project-date text-3 svelte-17s2eeo"),p(P,"overflow","visible"),p(P,"font-weight","bold"),s(Z,"class","project-title text-1 svelte-17s2eeo"),p(Z,"font-size","5rem"),s(H,"class","svelte-17s2eeo"),s(te,"class","skills-item svelte-17s2eeo"),p(te,"overflow","visible"),s(q,"class","skills-list text-3 svelte-17s2eeo"),p(q,"overflow","visible"),p(q,"font-style","oblique"),s(F,"class","text-5 svelte-17s2eeo"),s(F,"href","https://github.com/SerenityOS/serenity/pull/14228/commits/f21dc0fd3582a4e8c96cd530d8f7fb33075b4adf"),s(F,"target","_blank"),s(F,"rel","noreferrer"),s($,"class","text-5 svelte-17s2eeo"),s($,"href","https://github.com/SerenityOS/serenity/pull/14244/commits/4e1cd08ff2ceeddce2173aabb9780f5256e5c0b0"),s($,"target","_blank"),s($,"rel","noreferrer"),s(J,"class","article-right svelte-17s2eeo"),p(t,"display","flex"),p(t,"flex-direction","row"),p(t,"justify-content","center"),p(t,"align-items","center"),p(t,"height","100%"),s(t,"class","svelte-17s2eeo")},m(ae,O){me(ae,t,O),e(t,d),e(d,r),e(r,c),e(c,h),e(c,i),e(c,f),e(r,u),e(r,v),e(v,b),e(v,_),e(v,w),e(r,V),e(r,g),e(g,U),e(g,z),e(g,G),e(r,Y),e(r,B),e(B,R),e(B,S),e(B,x),e(r,M),e(r,A),e(A,j),e(A,K),e(A,se),e(r,T),e(r,m),e(m,L),e(m,C),e(m,Q),e(t,le),e(t,P),e(P,X),e(t,re),e(t,Z),e(Z,W),e(t,ee),e(t,J),e(J,q),e(q,te),e(te,H),e(H,oe),e(J,ce),e(J,F),e(F,fe),e(J,he),e(J,$),e($,ne)},d(ae){ae&&o(t)}}}function nt(D){let t,d,r,c,h,i,f,u,v,b,_,w,V,g,U,z,G,Y,B,R,S,x,M,A,j,K,se;return{c(){t=l("div"),d=l("div"),r=l("div"),c=l("div"),h=y("> Uses graphical computation algorithms, like M ̈oller-Trumbore ray-triangle intersection calculations and Phong shading."),i=l("br"),f=l("br"),u=I(),v=l("div"),b=y("> Able to handle both reflection and refraction of light rays according to material composition of objects in scene."),_=l("br"),w=l("br"),V=I(),g=l("div"),U=y("> Calculates individual ray position up to five times after initial light ray activation to achieve high detail render."),z=I(),G=l("div"),Y=y("April-May, 2022"),B=I(),R=l("div"),S=y("Dynamic Raytracing Algorithm"),x=I(),M=l("div"),A=l("div"),j=l("div"),K=l("div"),se=y("📜 Javascript 📜"),this.h()},l(T){t=a(T,"DIV",{style:!0,class:!0});var m=n(t);d=a(m,"DIV",{class:!0});var L=n(d);r=a(L,"DIV",{class:!0});var C=n(r);c=a(C,"DIV",{class:!0});var Q=n(c);h=k(Q,"> Uses graphical computation algorithms, like M ̈oller-Trumbore ray-triangle intersection calculations and Phong shading."),i=a(Q,"BR",{class:!0}),f=a(Q,"BR",{class:!0}),Q.forEach(o),u=E(C),v=a(C,"DIV",{class:!0});var le=n(v);b=k(le,"> Able to handle both reflection and refraction of light rays according to material composition of objects in scene."),_=a(le,"BR",{class:!0}),w=a(le,"BR",{class:!0}),le.forEach(o),V=E(C),g=a(C,"DIV",{class:!0});var P=n(g);U=k(P,"> Calculates individual ray position up to five times after initial light ray activation to achieve high detail render."),P.forEach(o),C.forEach(o),L.forEach(o),z=E(m),G=a(m,"DIV",{class:!0,style:!0});var X=n(G);Y=k(X,"April-May, 2022"),X.forEach(o),B=E(m),R=a(m,"DIV",{class:!0,style:!0});var re=n(R);S=k(re,"Dynamic Raytracing Algorithm"),re.forEach(o),x=E(m),M=a(m,"DIV",{class:!0});var Z=n(M);A=a(Z,"DIV",{class:!0,style:!0});var W=n(A);j=a(W,"DIV",{class:!0,style:!0});var ee=n(j);K=a(ee,"DIV",{class:!0});var J=n(K);se=k(J,"📜 Javascript 📜"),J.forEach(o),ee.forEach(o),W.forEach(o),Z.forEach(o),m.forEach(o),this.h()},h(){s(i,"class","svelte-17s2eeo"),s(f,"class","svelte-17s2eeo"),s(c,"class","text-2 svelte-17s2eeo"),s(_,"class","svelte-17s2eeo"),s(w,"class","svelte-17s2eeo"),s(v,"class","text-4 svelte-17s2eeo"),s(g,"class","text-5 svelte-17s2eeo"),s(r,"class","svelte-17s2eeo"),s(d,"class","article-left svelte-17s2eeo"),s(G,"class","project-date text-3 svelte-17s2eeo"),p(G,"overflow","visible"),p(G,"font-weight","bold"),s(R,"class","project-title text-1 svelte-17s2eeo"),p(R,"font-size","5rem"),s(K,"class","svelte-17s2eeo"),s(j,"class","skills-item svelte-17s2eeo"),p(j,"overflow","visible"),s(A,"class","skills-list svelte-17s2eeo"),p(A,"overflow","visible"),p(A,"font-style","oblique"),s(M,"class","article-right text-3 svelte-17s2eeo"),p(t,"display","flex"),p(t,"flex-direction","row"),p(t,"justify-content","center"),p(t,"align-items","center"),p(t,"height","100%"),s(t,"class","svelte-17s2eeo")},m(T,m){me(T,t,m),e(t,d),e(d,r),e(r,c),e(c,h),e(c,i),e(c,f),e(r,u),e(r,v),e(v,b),e(v,_),e(v,w),e(r,V),e(r,g),e(g,U),e(t,z),e(t,G),e(G,Y),e(t,B),e(t,R),e(R,S),e(t,x),e(t,M),e(M,A),e(A,j),e(j,K),e(K,se)},d(T){T&&o(t)}}}function dt(D){let t,d,r,c,h,i,f,u,v,b,_,w,V,g,U,z,G,Y,B,R,S,x,M,A,j,K,se,T,m,L,C,Q,le,P,X,re,Z,W,ee;return{c(){t=l("div"),d=l("div"),r=l("div"),c=l("div"),h=y("> Allows for enhanced Finder/grep-type capabilities using keywords and specified file/directory attributes."),i=l("br"),f=l("br"),u=I(),v=l("div"),b=y("> Inspired by issues relating to search results of built-in Mac file search function, which return deeply embedded files before top level applications of which were unlikely to be ones I was looking for."),_=l("br"),w=l("br"),V=I(),g=l("div"),U=y("> Incorporates speed-optimized, multithreaded BFS and DFS search algorithms, achieving 7x faster runtimes."),z=l("br"),G=l("br"),Y=I(),B=l("div"),R=y("> Designed image search algorithm based on color keywords using approximate image pixel-color composition."),S=I(),x=l("div"),M=y("May-June, 2022"),A=I(),j=l("div"),K=y("GiraffeSearch"),se=I(),T=l("div"),m=l("div"),L=l("div"),C=l("div"),Q=y("🐹 Golang 🐹"),le=I(),P=l("div"),X=l("div"),re=y("💿 Git 💿"),Z=I(),W=l("a"),ee=y("Github"),this.h()},l(J){t=a(J,"DIV",{style:!0,class:!0});var q=n(t);d=a(q,"DIV",{class:!0});var te=n(d);r=a(te,"DIV",{class:!0});var H=n(r);c=a(H,"DIV",{class:!0});var oe=n(c);h=k(oe,"> Allows for enhanced Finder/grep-type capabilities using keywords and specified file/directory attributes."),i=a(oe,"BR",{class:!0}),f=a(oe,"BR",{class:!0}),oe.forEach(o),u=E(H),v=a(H,"DIV",{class:!0});var ce=n(v);b=k(ce,"> Inspired by issues relating to search results of built-in Mac file search function, which return deeply embedded files before top level applications of which were unlikely to be ones I was looking for."),_=a(ce,"BR",{class:!0}),w=a(ce,"BR",{class:!0}),ce.forEach(o),V=E(H),g=a(H,"DIV",{class:!0});var F=n(g);U=k(F,"> Incorporates speed-optimized, multithreaded BFS and DFS search algorithms, achieving 7x faster runtimes."),z=a(F,"BR",{class:!0}),G=a(F,"BR",{class:!0}),F.forEach(o),Y=E(H),B=a(H,"DIV",{class:!0});var fe=n(B);R=k(fe,"> Designed image search algorithm based on color keywords using approximate image pixel-color composition."),fe.forEach(o),H.forEach(o),te.forEach(o),S=E(q),x=a(q,"DIV",{class:!0,style:!0});var he=n(x);M=k(he,"May-June, 2022"),he.forEach(o),A=E(q),j=a(q,"DIV",{class:!0,style:!0});var $=n(j);K=k($,"GiraffeSearch"),$.forEach(o),se=E(q),T=a(q,"DIV",{class:!0});var ne=n(T);m=a(ne,"DIV",{class:!0,style:!0});var ae=n(m);L=a(ae,"DIV",{class:!0,style:!0});var O=n(L);C=a(O,"DIV",{class:!0});var ge=n(C);Q=k(ge,"🐹 Golang 🐹"),ge.forEach(o),O.forEach(o),le=E(ae),P=a(ae,"DIV",{class:!0});var N=n(P);X=a(N,"DIV",{class:!0});var de=n(X);re=k(de,"💿 Git 💿"),de.forEach(o),N.forEach(o),ae.forEach(o),Z=E(ne),W=a(ne,"A",{class:!0,href:!0,target:!0,rel:!0});var ve=n(W);ee=k(ve,"Github"),ve.forEach(o),ne.forEach(o),q.forEach(o),this.h()},h(){s(i,"class","svelte-17s2eeo"),s(f,"class","svelte-17s2eeo"),s(c,"class","text-2 svelte-17s2eeo"),s(_,"class","svelte-17s2eeo"),s(w,"class","svelte-17s2eeo"),s(v,"class","text-4 svelte-17s2eeo"),s(z,"class","svelte-17s2eeo"),s(G,"class","svelte-17s2eeo"),s(g,"class","text-6 svelte-17s2eeo"),s(B,"class","text-late svelte-17s2eeo"),s(r,"class","svelte-17s2eeo"),s(d,"class","article-left svelte-17s2eeo"),s(x,"class","project-date text-3 svelte-17s2eeo"),p(x,"overflow","visible"),p(x,"font-weight","bold"),s(j,"class","project-title text-1 svelte-17s2eeo"),p(j,"font-size","5rem"),s(C,"class","svelte-17s2eeo"),s(L,"class","skills-item svelte-17s2eeo"),p(L,"overflow","visible"),s(X,"class","svelte-17s2eeo"),s(P,"class","skills-item svelte-17s2eeo"),s(m,"class","skills-list text-3 svelte-17s2eeo"),p(m,"overflow","visible"),p(m,"font-style","oblique"),s(W,"class","text-5 svelte-17s2eeo"),s(W,"href","https://github.com/atdykema/giraffeSearch_golang"),s(W,"target","_blank"),s(W,"rel","noreferrer"),s(T,"class","article-right svelte-17s2eeo"),p(t,"display","flex"),p(t,"flex-direction","row"),p(t,"justify-content","center"),p(t,"align-items","center"),p(t,"height","100%"),s(t,"class","svelte-17s2eeo")},m(J,q){me(J,t,q),e(t,d),e(d,r),e(r,c),e(c,h),e(c,i),e(c,f),e(r,u),e(r,v),e(v,b),e(v,_),e(v,w),e(r,V),e(r,g),e(g,U),e(g,z),e(g,G),e(r,Y),e(r,B),e(B,R),e(t,S),e(t,x),e(x,M),e(t,A),e(t,j),e(j,K),e(t,se),e(t,T),e(T,m),e(m,L),e(L,C),e(C,Q),e(m,le),e(m,P),e(P,X),e(X,re),e(T,Z),e(T,W),e(W,ee)},d(J){J&&o(t)}}}function vt(D){let t,d,r,c,h,i,f,u,v,b,_,w,V,g,U,z,G,Y,B,R,S,x,M,A,j,K,se,T,m,L,C,Q,le,P,X,re,Z,W,ee,J,q,te,H,oe,ce,F,fe,he,$,ne;return{c(){t=l("div"),d=l("div"),r=l("div"),c=l("div"),h=y("> Mobile application which ingests UMass' daily dining menus and produces healthy and sustainable meal plans based on users bio-metrics (gender, height, weight, allergens), allowing students to reduce individual carbon footprint."),i=l("br"),f=l("br"),u=I(),v=l("div"),b=y("> Built as a team project at UMass' 2022 hackathon"),_=l("br"),w=l("br"),V=I(),g=l("div"),U=y("> Personally built out Selenium web scraper using Python for collecting and storing menu data in Firebase."),z=I(),G=l("div"),Y=y("November 12-13, 2022"),B=I(),R=l("div"),S=y("UMass GreenEats"),x=I(),M=l("div"),A=l("div"),j=y("🏆 Won Best Software hack"),K=l("br"),se=y(`
                                🥈 Placed Second Place Overall (out of 65 teams/206 participants)`),T=I(),m=l("div"),L=l("div"),C=l("div"),Q=y("🐍 Python 🐍"),le=I(),P=l("div"),X=l("div"),re=y("🕊️ Swift 🕊️"),Z=I(),W=l("div"),ee=l("div"),J=y("☁️ AWS ☁️"),q=I(),te=l("div"),H=l("div"),oe=y("📃 Firebase 📃"),ce=I(),F=l("a"),fe=y("Devpost"),he=I(),$=l("a"),ne=y("Github"),this.h()},l(ae){t=a(ae,"DIV",{style:!0,class:!0});var O=n(t);d=a(O,"DIV",{class:!0});var ge=n(d);r=a(ge,"DIV",{class:!0});var N=n(r);c=a(N,"DIV",{class:!0});var de=n(c);h=k(de,"> Mobile application which ingests UMass' daily dining menus and produces healthy and sustainable meal plans based on users bio-metrics (gender, height, weight, allergens), allowing students to reduce individual carbon footprint."),i=a(de,"BR",{class:!0}),f=a(de,"BR",{class:!0}),de.forEach(o),u=E(N),v=a(N,"DIV",{class:!0});var ve=n(v);b=k(ve,"> Built as a team project at UMass' 2022 hackathon"),_=a(ve,"BR",{class:!0}),w=a(ve,"BR",{class:!0}),ve.forEach(o),V=E(N),g=a(N,"DIV",{class:!0});var ye=n(g);U=k(ye,"> Personally built out Selenium web scraper using Python for collecting and storing menu data in Firebase."),ye.forEach(o),N.forEach(o),ge.forEach(o),z=E(O),G=a(O,"DIV",{class:!0,style:!0});var ke=n(G);Y=k(ke,"November 12-13, 2022"),ke.forEach(o),B=E(O),R=a(O,"DIV",{class:!0});var Ie=n(R);S=k(Ie,"UMass GreenEats"),Ie.forEach(o),x=E(O),M=a(O,"DIV",{class:!0});var ie=n(M);A=a(ie,"DIV",{class:!0,style:!0});var Ee=n(A);j=k(Ee,"🏆 Won Best Software hack"),K=a(Ee,"BR",{class:!0}),se=k(Ee,`
                                🥈 Placed Second Place Overall (out of 65 teams/206 participants)`),Ee.forEach(o),T=E(ie),m=a(ie,"DIV",{class:!0,style:!0});var ue=n(m);L=a(ue,"DIV",{class:!0,style:!0});var pe=n(L);C=a(pe,"DIV",{class:!0});var we=n(C);Q=k(we,"🐍 Python 🐍"),we.forEach(o),pe.forEach(o),le=E(ue),P=a(ue,"DIV",{class:!0});var Ve=n(P);X=a(Ve,"DIV",{class:!0});var Be=n(X);re=k(Be,"🕊️ Swift 🕊️"),Be.forEach(o),Ve.forEach(o),Z=E(ue),W=a(ue,"DIV",{class:!0});var Re=n(W);ee=a(Re,"DIV",{class:!0});var Se=n(ee);J=k(Se,"☁️ AWS ☁️"),Se.forEach(o),Re.forEach(o),q=E(ue),te=a(ue,"DIV",{class:!0});var Ce=n(te);H=a(Ce,"DIV",{class:!0});var Pe=n(H);oe=k(Pe,"📃 Firebase 📃"),Pe.forEach(o),Ce.forEach(o),ue.forEach(o),ce=E(ie),F=a(ie,"A",{class:!0,href:!0,target:!0,rel:!0});var Ue=n(F);fe=k(Ue,"Devpost"),Ue.forEach(o),he=E(ie),$=a(ie,"A",{class:!0,href:!0,target:!0,rel:!0});var Fe=n($);ne=k(Fe,"Github"),Fe.forEach(o),ie.forEach(o),O.forEach(o),this.h()},h(){s(i,"class","svelte-17s2eeo"),s(f,"class","svelte-17s2eeo"),s(c,"class","text-2 svelte-17s2eeo"),s(_,"class","svelte-17s2eeo"),s(w,"class","svelte-17s2eeo"),s(v,"class","text-4 svelte-17s2eeo"),s(g,"class","text-6 svelte-17s2eeo"),s(r,"class","svelte-17s2eeo"),s(d,"class","article-left svelte-17s2eeo"),s(G,"class","project-date text-3 svelte-17s2eeo"),p(G,"overflow","visible"),p(G,"font-weight","bold"),s(R,"class","project-title text-1 svelte-17s2eeo"),s(K,"class","svelte-17s2eeo"),s(A,"class","text-3 svelte-17s2eeo"),p(A,"overflow","visible"),p(A,"font-weight","bold"),s(C,"class","svelte-17s2eeo"),s(L,"class","skills-item svelte-17s2eeo"),p(L,"overflow","visible"),s(X,"class","svelte-17s2eeo"),s(P,"class","skills-item svelte-17s2eeo"),s(ee,"class","svelte-17s2eeo"),s(W,"class","skills-item svelte-17s2eeo"),s(H,"class","svelte-17s2eeo"),s(te,"class","skills-item svelte-17s2eeo"),s(m,"class","skills-list text-5 svelte-17s2eeo"),p(m,"overflow","visible"),p(m,"font-style","oblique"),s(F,"class","text-late svelte-17s2eeo"),s(F,"href","https://devpost.com/software/umass-greeneats"),s(F,"target","_blank"),s(F,"rel","noreferrer"),s($,"class","text-late svelte-17s2eeo"),s($,"href","https://github.com/vdsingh/UMass-GreenEats"),s($,"target","_blank"),s($,"rel","noreferrer"),s(M,"class","article-right svelte-17s2eeo"),p(t,"display","flex"),p(t,"flex-direction","row"),p(t,"justify-content","center"),p(t,"align-items","center"),p(t,"height","100%"),s(t,"class","svelte-17s2eeo")},m(ae,O){me(ae,t,O),e(t,d),e(d,r),e(r,c),e(c,h),e(c,i),e(c,f),e(r,u),e(r,v),e(v,b),e(v,_),e(v,w),e(r,V),e(r,g),e(g,U),e(t,z),e(t,G),e(G,Y),e(t,B),e(t,R),e(R,S),e(t,x),e(t,M),e(M,A),e(A,j),e(A,K),e(A,se),e(M,T),e(M,m),e(m,L),e(L,C),e(C,Q),e(m,le),e(m,P),e(P,X),e(X,re),e(m,Z),e(m,W),e(W,ee),e(ee,J),e(m,q),e(m,te),e(te,H),e(H,oe),e(M,ce),e(M,F),e(F,fe),e(M,he),e(M,$),e($,ne)},d(ae){ae&&o(t)}}}function qe(D){let t,d,r;function c(i){D[5](i)}let h={id:D[7],path:D[8],data:D[9]};return D[1]!==void 0&&(h.currentArticle=D[1]),t=new rt({props:h}),Ze.push(()=>Qe(t,"currentArticle",c)),{c(){et(t.$$.fragment)},l(i){tt(t.$$.fragment,i)},m(i,f){st(t,i,f),r=!0},p(i,f){const u={};f&1&&(u.id=i[7]),f&1&&(u.path=i[8]),f&1&&(u.data=i[9]),!d&&f&2&&(d=!0,u.currentArticle=i[1],lt(()=>d=!1)),t.$set(u)},i(i){r||(be(t.$$.fragment,i),r=!0)},o(i){_e(t.$$.fragment,i),r=!1},d(i){at(t,i)}}}function ze(D){let t,d,r,c,h;const i=[ot,it],f=[];function u(v,b){return v[1]<0?0:1}return d=u(D),r=f[d]=i[d](D),{c(){t=l("div"),r.c(),this.h()},l(v){t=a(v,"DIV",{class:!0});var b=n(t);r.l(b),b.forEach(o),this.h()},h(){s(t,"class","main-inner-layer grid svelte-17s2eeo")},m(v,b){me(v,t,b),f[d].m(t,null),h=!0},p(v,b){let _=d;d=u(v),d===_?f[d].p(v,b):(Ge(),_e(f[_],1,1,()=>{f[_]=null}),Ae(),r=f[d],r?r.p(v,b):(r=f[d]=i[d](v),r.c()),be(r,1),r.m(t,null))},i(v){h||(be(r),c&&c.end(1),h=!0)},o(v){_e(r),v&&(c=xe(t,De,{duration:500})),h=!1},d(v){v&&o(t),f[d].d(),v&&c&&c.end()}}}function ut(D){let t,d=D[1],r,c,h,i,f,u,v,b,_,w,V,g=D[0],U,z,G,Y,B=Je(D),R=ze(D);return{c(){t=l("div"),B.c(),r=I(),c=l("div"),h=I(),i=l("div"),f=l("video"),u=l("source"),b=I(),_=l("div"),w=y("Under Construction"),V=I(),R.c(),this.h()},l(S){t=a(S,"DIV",{class:!0});var x=n(t);B.l(x),r=E(x),c=a(x,"DIV",{class:!0}),n(c).forEach(o),h=E(x),i=a(x,"DIV",{class:!0});var M=n(i);f=a(M,"VIDEO",{class:!0,style:!0});var A=n(f);u=a(A,"SOURCE",{src:!0,type:!0,class:!0}),A.forEach(o),b=E(M),_=a(M,"DIV",{style:!0,class:!0});var j=n(_);w=k(j,"Under Construction"),j.forEach(o),V=E(M),R.l(M),M.forEach(o),x.forEach(o),this.h()},h(){s(c,"class","main-inner-mask svelte-17s2eeo"),Te(u.src,v=Me+"/images/bg2-t.mp4")||s(u,"src",v),s(u,"type","video/mp4"),s(u,"class","svelte-17s2eeo"),s(f,"class","video svelte-17s2eeo"),f.autoplay=!0,f.muted=!0,f.loop=!0,p(f,"position","absolute"),p(f,"z-index","-1"),p(f,"top","0"),p(f,"left","0"),p(f,"object-fit","cover"),p(f,"width","100%"),p(f,"height","100%"),p(_,"position","absolute"),p(_,"top","50%"),p(_,"left","50%"),p(_,"color","white"),s(_,"class","svelte-17s2eeo"),s(i,"class","main-inner-layer grid svelte-17s2eeo"),s(t,"class","main-hero-container svelte-17s2eeo")},m(S,x){me(S,t,x),B.m(t,null),e(t,r),e(t,c),e(t,h),e(t,i),e(i,f),e(f,u),e(i,b),e(i,_),e(_,w),e(i,V),R.m(i,null),z=!0,G||(Y=Le(window,"keydown",Ne(D[4])),G=!0)},p(S,[x]){x&2&&je(d,d=S[1])?(Ge(),_e(B,1,1,Oe),Ae(),B=Je(S),B.c(),be(B,1),B.m(t,r)):B.p(S,x),x&1&&je(g,g=S[0])?(Ge(),_e(R,1,1,Oe),Ae(),R=ze(S),R.c(),be(R,1),R.m(i,null)):R.p(S,x)},i(S){z||(be(B),be(R),U&&U.end(1),z=!0)},o(S){_e(B),_e(R),S&&(U=xe(t,De,{duration:1e3,delay:500})),z=!1},d(S){S&&o(t),B.d(S),R.d(S),S&&U&&U.end(),G=!1,Y()}}}function ft(D,t,d){const r=[{id:"0",path:"",title:""}];let c=0;const h={0:[{id:"0",path:"",data:{title:"The Big Short",href:"https://www.imdb.com/title/tt1596363/"}},{id:"1",path:"",data:{title:"Inglorious Basterds",href:"https://www.imdb.com/title/tt0361748/"}},{id:"2",path:"",data:{title:"The Batman",href:"https://www.imdb.com/title/tt1877830/"}},{id:"3",path:"",data:{title:"Midsommar",href:"https://www.imdb.com/title/tt8772262/"}}]};let i=-1;function f(b){switch(b.keyCode){case 37:c>0&&d(0,c-=1);break;case 38:c>0&&d(0,c-=1);break;case 39:c<r.length-1&&d(0,c+=1);break;case 40:c<r.length-1&&d(0,c+=1);break}}function u(b){i=b,d(1,i)}return[c,i,r,h,f,u,()=>{d(1,i=-1*Math.random())}]}class mt extends He{constructor(t){super(),$e(this,t,ft,ut,je,{})}}export{mt as default};