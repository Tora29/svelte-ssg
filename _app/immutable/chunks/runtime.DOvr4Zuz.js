var Tn=Array.isArray,mn=Array.from,An=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptors,gn=Object.prototype,xn=Array.prototype,Ut=Object.getPrototypeOf;const Rn=()=>{};function Sn(t){return t()}function Bt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,it=4,L=8,X=16,y=32,G=64,D=128,U=256,p=512,x=1024,M=2048,P=4096,j=8192,Vt=16384,ft=32768,Dn=65536,Kt=1<<18,_t=1<<19,lt=Symbol("$state");function ct(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function vt(t){return!$t(t,this.v)}function Gt(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function zt(){throw new Error("effect_update_depth_exceeded")}function kn(){throw new Error("hydration_failed")}function On(t){throw new Error("props_invalid_value")}function In(){throw new Error("state_descriptors_fixed")}function Nn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}function tt(t){return{f:0,v:t,reactions:null,equals:ct,version:0}}function Pn(t){return pt(tt(t))}function Xt(t,n=!1){var e;const r=tt(t);return n||(r.equals=vt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function bn(t,n=!1){return pt(Xt(t,n))}function pt(t){return a!==null&&a.f&T&&(E===null?vn([t]):E.push(t)),t}function Cn(t,n){return a!==null&&et()&&a.f&(T|X)&&(E===null||!E.includes(t))&&Qt(),tn(t,n)}function tn(t,n){return t.equals(n)||(t.v=n,t.version=Ft(),ht(t,x),et()&&o!==null&&o.f&p&&!(o.f&y)&&(c!==null&&c.includes(t)?(w(o,x),W(o)):g===null?pn([t]):g.push(t))),n}function ht(t,n){var r=t.reactions;if(r!==null)for(var e=et(),s=r.length,l=0;l<s;l++){var u=r[l],i=u.f;i&x||!e&&u===o||(w(u,n),i&(p|D)&&(i&T?ht(u,M):W(u)))}}const Fn=1,qn=2,Ln=4,Mn=8,jn=16,Yn=1,Hn=2,nn="[",rn="[!",en="]",dt={},Un=Symbol();function Et(t){console.warn("hydration_mismatch")}let S=!1;function Bn(t){S=t}let d;function B(t){if(t===null)throw Et(),dt;return d=t}function Vn(){return B(k(d))}function Kn(t){if(S){if(k(d)!==null)throw Et(),dt;d=t}}function $n(t=1){if(S){for(var n=t,r=d;n--;)r=k(r);d=r}}function Gn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===en){if(t===0)return n;t-=1}else(r===nn||r===rn)&&(t+=1)}var e=k(n);n.remove(),n=e}}var ut,yt,wt;function Zn(){if(ut===void 0){ut=window;var t=Element.prototype,n=Node.prototype;yt=st(n,"firstChild").get,wt=st(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function Tt(t=""){return document.createTextNode(t)}function z(t){return yt.call(t)}function k(t){return wt.call(t)}function Wn(t){if(!S)return z(t);var n=z(d);return n===null&&(n=d.appendChild(Tt())),B(n),n}function zn(t,n){if(!S){var r=z(t);return r instanceof Comment&&r.data===""?k(r):r}return d}function Jn(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=k(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var l=Tt();return e==null||e.before(l),B(l),l}return B(e),e}function Qn(t){t.textContent=""}function sn(t){var n=T|x;o===null?n|=D:o.f|=_t;const r={children:null,deps:null,equals:ct,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(a!==null&&a.f&T){var e=a;(e.children??(e.children=[])).push(r)}return r}function Xn(t){const n=sn(t);return n.equals=vt,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?nt(e):C(e)}}}function At(t){var n,r=o;$(t.parent);try{mt(t),n=qt(t)}finally{$(r)}return n}function gt(t){var n=At(t),r=(O||t.f&D)&&t.deps!==null?M:p;w(t,r),t.equals(n)||(t.v=n,t.version=Ft())}function nt(t){mt(t),q(t,0),w(t,j),t.v=t.children=t.deps=t.reactions=null}function xt(t){o===null&&a===null&&Wt(),a!==null&&a.f&D&&Zt(),rt&&Gt()}function ln(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&G)!==0,l=o,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{ot(!0),Z(u),u.f|=Vt}catch(v){throw C(u),v}finally{ot(i)}}else n!==null&&W(u);var m=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&_t)===0;if(!m&&!s&&e&&(l!==null&&ln(u,l),a!==null&&a.f&T)){var _=a;(_.children??(_.children=[])).push(u)}return u}function tr(t){const n=b(L,null,!1);return w(n,p),n.teardown=t,n}function nr(t){xt();var n=o!==null&&(o.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:a})}else{var e=Rt(t);return e}}function rr(t){return xt(),un(t)}function er(t){const n=b(G,t,!0);return()=>{C(n)}}function Rt(t){return b(it,t,!1)}function un(t){return b(L,t,!0)}function sr(t){return on(t)}function on(t,n=0){return b(L|X|n,t,!0)}function lr(t,n=!0){return b(L|y,t,!0,n)}function St(t){var n=t.teardown;if(n!==null){const r=rt,e=a;at(!0),K(null);try{n.call(null)}finally{at(r),K(e)}}}function Dt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)nt(n[r])}}function kt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function an(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Dt(t),kt(t,n&&!r),q(t,0),w(t,j);var u=t.transitions;if(u!==null)for(const m of u)m.stop();St(t);var i=t.parent;i!==null&&i.first!==null&&Ot(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ot(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ur(t,n){var r=[];It(t,r,!0),fn(r,()=>{C(t),n&&n()})}function fn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function It(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&ft)!==0||(e.f&y)!==0;It(e,n,l?r:!1),e=s}}}function or(t){Nt(t,!0)}function Nt(t,n){if(t.f&P){t.f^=P,Y(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ft)!==0||(r.f&y)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,J=[];function Pt(){V=!1;const t=J.slice();J=[],Bt(t)}function ar(t){V||(V=!0,queueMicrotask(Pt)),J.push(t)}function _n(){V&&Pt()}const bt=0,cn=1;let H=bt,F=!1,I=!1,rt=!1;function ot(t){I=t}function at(t){rt=t}let R=[],N=0;let a=null;function K(t){a=t}let o=null;function $(t){o=t}let E=null;function vn(t){E=t}let c=null,h=0,g=null;function pn(t){g=t}let Ct=0,O=!1,f=null;function Ft(){return++Ct}function et(){return f!==null&&f.l===null}function Y(t){var u,i;var n=t.f;if(n&x)return!0;if(n&M){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(Y(l)&&gt(l),e&&o!==null&&!O&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function hn(t,n,r){throw t}function qt(t){var A;var n=c,r=h,e=g,s=a,l=O,u=E,i=t.f;c=null,h=0,g=null,a=i&(y|G)?null:t,O=!I&&(i&D)!==0,E=null;try{var m=(0,t.fn)(),_=t.deps;if(c!==null){var v;if(q(t,h),_!==null&&h>0)for(_.length=h+c.length,v=0;v<c.length;v++)_[h+v]=c[v];else t.deps=_=c;if(!O)for(v=h;v<_.length;v++)((A=_[v]).reactions??(A.reactions=[])).push(t)}else _!==null&&h<_.length&&(q(t,h),_.length=h);return m}finally{c=n,h=r,g=e,a=s,O=l,E=u}}function dn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(c===null||!c.includes(n))&&(w(n,M),n.f&(D|U)||(n.f^=U),q(n,0))}function q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)dn(t,r[e])}function Z(t){var n=t.f;if(!(n&j)){w(t,p);var r=o,e=f;o=t,f=t.ctx;try{Dt(t),n&X?an(t):kt(t),St(t);var s=qt(t);t.teardown=typeof s=="function"?s:null,t.version=Ct}catch(l){hn(l)}finally{o=r,f=e}}}function Lt(){N>1e3&&(N=0,zt()),N++}function Mt(t){var n=t.length;if(n!==0){Lt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];jt(s,l),En(l)}}finally{I=r}}}function En(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|P))&&Y(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ot(e):e.fn=null))}}function yn(){if(F=!1,N>1001)return;const t=R;R=[],Mt(t),F||(N=0)}function W(t){H===bt&&(F||(F=!0,queueMicrotask(yn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|y)){if(!(r&p))return;n.f^=p}}R.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&y)!==0,u=l&&(s&p)!==0;if(!u&&!(s&P))if(s&L){l?r.f^=p:Y(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&it&&e.push(r);var m=r.next;if(m===null){let A=r.parent;for(;A!==null;){if(t===A)break t;var _=A.next;if(_!==null){r=_;continue t}A=A.parent}}r=m}for(var v=0;v<e.length;v++)i=e[v],n.push(i),jt(i,n)}function Yt(t){var n=H,r=R;try{Lt();const s=[];H=cn,R=s,F=!1,Mt(r);var e=t==null?void 0:t();return _n(),(R.length>0||s.length>0)&&Yt(),N=0,e}finally{H=n,R=r}}async function ir(){await Promise.resolve(),Yt()}function fr(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=At(t);return nt(t),e}if(a!==null){E!==null&&E.includes(t)&&Jt();var s=a.deps;c===null&&s!==null&&s[h]===t?h++:c===null?c=[t]:c.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&y)&&g.includes(t)&&(w(o,x),W(o))}else if(r&&t.deps===null){var l=t,u=l.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(l))&&(u.deriveds??(u.deriveds=[])).push(l)}return r&&(l=t,Y(l)&&gt(l)),t.v}function _r(t){const n=a;try{return a=null,t()}finally{a=n}}const wn=~(x|M|p);function w(t,n){t.f=t.f&wn|n}function cr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:tt(!1)})}function vr(t){const n=f;if(n!==null){const u=n.e;if(u!==null){var r=o,e=a;n.e=null;try{for(var s=0;s<u.length;s++){var l=u[s];$(l.effect),K(l.reaction),Rt(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(lt in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&lt in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ht(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{xn as $,o as A,Zn as B,z as C,k as D,dt as E,Bn as F,B as G,nn as H,Vn as I,d as J,en as K,Et as L,kn as M,Qn as N,mn as O,er as P,Tt as Q,lr as R,S,Ut as T,Ht as U,Rn as V,Xt as W,Yn as X,Hn as Y,lt as Z,gn as _,nr as a,tt as a0,In as a1,Un as a2,st as a3,Nn as a4,on as a5,or as a6,ur as a7,ft as a8,rn as a9,Gn as aa,On as ab,Dn as ac,y as ad,G as ae,qn as af,Xn as ag,Ln as ah,j as ai,vt as aj,Fn as ak,Mn as al,jn as am,Rt as an,un as ao,Yt as ap,ir as aq,Pn as ar,$t as as,_r as b,f as c,Sn as d,pr as e,sn as f,fr as g,zn as h,vr as i,Wn as j,Kn as k,Jn as l,bn as m,$n as n,tr as o,cr as p,ar as q,Bt as r,Cn as s,sr as t,rr as u,K as v,$ as w,An as x,Tn as y,a as z};