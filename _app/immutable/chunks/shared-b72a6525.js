function b(){}const W=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function X(){return Object.create(null)}function w(t){t.forEach(tt)}function O(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Lt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Ht(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function Wt(t,e,n,i,r,u){if(r){const c=et(e,n,i,u);t.p(c,r)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const nt=typeof window<"u";let G=nt?()=>window.performance.now():()=>Date.now(),J=nt?t=>requestAnimationFrame(t):b;const k=new Set;function it(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&J(it)}function K(t){let e;return k.size===0&&J(it),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let L=!1;function pt(){L=!0}function yt(){L=!1}function gt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:gt(1,r,h=>e[n[h]].claim_order,l))-1;i[o]=n[_]+1;const a=_+1;n[a]=o,r=Math.max(a,r)}const u=[],c=[];let s=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);s>=o;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);u.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<u.length&&c[o].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(c[o],_)}}function xt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=ct("style");return vt(rt(t),e),e.sheet}function vt(t,e){return xt(t.head||t,e),e.sheet}function wt(t,e){if(L){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){L&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ct(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function Qt(){return Q(" ")}function Ut(){return Q("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){Nt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function kt(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Yt(t,e,n){return kt(t,e,n,ct)}function At(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function Zt(t){return At(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ne(t,e){return new t(e)}const R=new Map;let T=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:$t(e),rules:{}};return R.set(t,n),n}function z(t,e,n,i,r,u,c,s=0){const o=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=o){const y=e+(n-e)*u(p);l+=p*100+`%{${c(y,1-y)}}
`}const _=l+`100% {${c(n,1-n)}}
}`,a=`__svelte_${St(_)}_${s}`,h=rt(t),{stylesheet:f,rules:d}=R.get(h)||jt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,T+=1,a}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),T-=r,T||Mt())}function Mt(){J(()=>{T||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&st(e)}),R.clear())})}let M;function j(t){M=t}function lt(){if(!M)throw new Error("Function called outside component initialization");return M}function ie(t){lt().$$.on_mount.push(t)}function re(t){lt().$$.after_update.push(t)}const N=[],Y=[],q=[],H=[],ut=Promise.resolve();let I=!1;function at(){I||(I=!0,ut.then(ft))}function se(){return at(),ut}function A(t){q.push(t)}function ce(t){H.push(t)}const F=new Set;let E=0;function ft(){if(E!==0)return;const t=M;do{try{for(;E<N.length;){const e=N[E];E++,j(e),Ot(e.$$)}}catch(e){throw N.length=0,E=0,e}for(j(null),N.length=0,E=0;Y.length;)Y.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];F.has(n)||(F.add(n),n())}q.length=0}while(N.length);for(;H.length;)H.pop()();I=!1,F.clear(),j(t)}function Ot(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let S;function U(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function v(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const D=new Set;let g;function oe(){g={r:0,c:[],p:g}}function le(){g.r||w(g.c),g=g.p}function Pt(t,e){t&&t.i&&(D.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),g.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const V={duration:0};function ae(t,e,n){const i={direction:"in"};let r=e(t,n,i),u=!1,c,s,o=0;function l(){c&&B(t,c)}function _(){const{delay:h=0,duration:f=300,easing:d=W,tick:m=b,css:p}=r||V;p&&(c=z(t,0,1,f,h,d,p,o++)),m(0,1);const y=G()+h,C=y+f;s&&s.abort(),u=!0,A(()=>v(t,!0,"start")),s=K(x=>{if(u){if(x>=C)return m(1,0),v(t,!0,"end"),l(),u=!1;if(x>=y){const $=d((x-y)/f);m($,1-$)}}return u})}let a=!1;return{start(){a||(a=!0,B(t),O(r)?(r=r(i),U().then(_)):_())},invalidate(){a=!1},end(){u&&(l(),u=!1)}}}function fe(t,e,n){const i={direction:"out"};let r=e(t,n,i),u=!0,c;const s=g;s.r+=1;function o(){const{delay:l=0,duration:_=300,easing:a=W,tick:h=b,css:f}=r||V;f&&(c=z(t,1,0,_,l,a,f));const d=G()+l,m=d+_;A(()=>v(t,!1,"start")),K(p=>{if(u){if(p>=m)return h(0,1),v(t,!1,"end"),--s.r||w(s.c),!1;if(p>=d){const y=a((p-d)/_);h(1-y,y)}}return u})}return O(r)?U().then(()=>{r=r(i),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),u&&(c&&B(t,c),u=!1)}}}function _e(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),c=i?0:1,s=null,o=null,l=null;function _(){l&&B(t,l)}function a(f,d){const m=f.b-c;return d*=Math.abs(m),{a:c,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=W,tick:y=b,css:C}=u||V,x={start:G()+d,b:f};f||(x.group=g,g.r+=1),s||o?o=x:(C&&(_(),l=z(t,c,f,m,d,p,C)),f&&y(0,1),s=a(x,m),A(()=>v(t,f,"start")),K($=>{if(o&&$>o.start&&(s=a(o,m),o=null,v(t,s.b,"start"),C&&(_(),l=z(t,c,s.b,s.duration,0,p,u.css))),s){if($>=s.end)y(c=s.b,1-c),v(t,s.b,"end"),o||(s.b?_():--s.group.r||w(s.group.c)),s=null;else if($>=s.start){const _t=$-s.start;c=s.a+s.d*p(_t/s.duration),y(c,1-c)}}return!!(s||o)}))}return{run(f){O(u)?U().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),s=o=null}}}function de(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(tt).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):w(c),t.$$.on_mount=[]}),u.forEach(A)}function Dt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(N.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,i,r,u,c,s=[-1]){const o=M;j(t);const l=t.$$={fragment:null,ctx:[],props:u,update:b,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:X(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};c&&c(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return l.ctx&&r(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),_&&Rt(t,a)),h}):[],l.update(),_=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){pt();const a=Et(e.target);l.fragment&&l.fragment.l(a),a.forEach(st)}else l.fragment&&l.fragment.c();e.intro&&Pt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),yt(),ft()}j(o)}class ye{$destroy(){Dt(this,1),this.$destroy=b}$on(e,n){if(!O(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let Tt="",Z="",zt="";function ge(t){Z=t.base,Tt=t.assets||Z}function be(t){zt=t}export{se as A,ge as B,be as C,b as D,Tt as E,zt as F,Ht as G,wt as H,Wt as I,Gt as J,It as K,A as L,_e as M,Z as N,W as O,Ft as P,Kt as Q,ae as R,ye as S,fe as T,Y as U,de as V,ce as W,Vt as X,Lt as Y,Qt as a,Jt as b,Zt as c,le as d,Ut as e,Pt as f,oe as g,st as h,pe as i,re as j,ct as k,Yt as l,Et as m,Xt as n,ie as o,ee as p,Q as q,At as r,Bt as s,ue as t,te as u,ne as v,he as w,me as x,qt as y,Dt as z};
