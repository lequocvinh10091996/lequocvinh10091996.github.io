(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.dD(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.bf(b)
return new t(c,this)}:function(){if(t===null)t=A.bf(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.bf(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
bi(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bg(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.bh==null){A.ds()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.bz("Return interceptor for "+A.r(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.aW
if(p==null)p=$.aW=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dx(a)
if(q!=null)return q
if(typeof a=="function")return B.n
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.aW
if(p==null)p=$.aW=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.b,enumerable:false,writable:true,configurable:true})
return B.b}return B.b},
a8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ah.prototype
return J.ai.prototype}if(typeof a=="string")return J.R.prototype
if(a==null)return J.Q.prototype
if(typeof a=="boolean")return J.ag.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
if(typeof a=="symbol")return J.U.prototype
if(typeof a=="bigint")return J.S.prototype
return a}if(a instanceof A.k)return a
return J.bg(a)},
c_(a){if(typeof a=="string")return J.R.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
if(typeof a=="symbol")return J.U.prototype
if(typeof a=="bigint")return J.S.prototype
return a}if(a instanceof A.k)return a
return J.bg(a)},
dm(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
if(typeof a=="symbol")return J.U.prototype
if(typeof a=="bigint")return J.S.prototype
return a}if(a instanceof A.k)return a
return J.bg(a)},
bj(a){return J.dm(a).gB(a)},
bk(a){return J.c_(a).gm(a)},
c9(a){return J.a8(a).gi(a)},
ab(a){return J.a8(a).h(a)},
af:function af(){},
ag:function ag(){},
Q:function Q(){},
T:function T(){},
B:function B(){},
au:function au(){},
a0:function a0(){},
A:function A(){},
S:function S(){},
U:function U(){},
p:function p(a){this.$ti=a},
aI:function aI(a){this.$ti=a},
O:function O(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aj:function aj(){},
ah:function ah(){},
ai:function ai(){},
R:function R(){}},A={b6:function b6(){},
c2(a){var t,s
for(t=$.z.length,s=0;s<t;++s)if(a===$.z[s])return!0
return!1},
aJ:function aJ(a){this.a=a},
V:function V(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
l:function l(){},
c7(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
dX(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
r(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ab(a)
return t},
aK(a){return A.cq(a)},
cq(a){var t,s,r,q
if(a instanceof A.k)return A.n(A.a9(a),null)
t=J.a8(a)
if(t===B.m||t===B.o||u.o.b(a)){s=B.c(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.n(A.a9(a),null)},
cw(a){if(typeof a=="number"||A.bd(a))return J.ab(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.E)return a.h(0)
return"Instance of '"+A.aK(a)+"'"},
I(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
cv(a){var t=A.I(a).getFullYear()+0
return t},
ct(a){var t=A.I(a).getMonth()+1
return t},
cr(a){var t=A.I(a).getDate()+0
return t},
bu(a){var t=A.I(a).getHours()+0
return t},
bv(a){var t=A.I(a).getMinutes()+0
return t},
cu(a){var t=A.I(a).getSeconds()+0
return t},
cs(a){var t=A.I(a).getMilliseconds()+0
return t},
u(a,b){if(a==null)J.bk(a)
throw A.b(A.bY(a,b))},
bY(a,b){var t,s="index"
if(!A.bT(b))return new A.N(!0,b,s,null)
t=J.bk(a)
if(b<0||b>=t)return A.cl(b,t,a,s)
return new A.aL(null,null,!0,b,s,"Value not in range")},
b(a){return A.c1(new Error(),a)},
c1(a,b){var t
if(b==null)b=new A.aR()
a.dartException=b
t=A.dF
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
dF(){return J.ab(this.dartException)},
dC(a){throw A.b(a)},
c6(a,b){throw A.c1(b,a)},
dE(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.c6(A.cZ(a,b,c),t)},
cZ(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.aT("'"+t+"': Cannot "+p+" "+m+l+o)},
dB(a){throw A.b(A.bq(a))},
ch(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aO().constructor.prototype):Object.create(new A.ad(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bp(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.cd(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bp(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
cd(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.cb)}throw A.b("Error in functionType of tearoff")},
ce(a,b,c,d){var t=A.bo
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bp(a,b,c,d){if(c)return A.cg(a,b,d)
return A.ce(b.length,d,a,b)},
cf(a,b,c,d){var t=A.bo,s=A.cc
switch(b?-1:a){case 0:throw A.b(new A.aM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
cg(a,b,c){var t,s
if($.bm==null)$.bm=A.bl("interceptor")
if($.bn==null)$.bn=A.bl("receiver")
t=b.length
s=A.cf(t,c,a,b)
return s},
bf(a){return A.ch(a)},
cb(a,b){return A.aY(v.typeUniverse,A.a9(a.a),b)},
bo(a){return a.a},
cc(a){return a.b},
bl(a){var t,s,r,q=new A.ad("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.b(A.ca("Field name "+a+" not found."))},
dY(a){throw A.b(new A.aU(a))},
dn(a){return v.getIsolateTag(a)},
dx(a){var t,s,r,q,p,o=A.bN($.c0.$1(a)),n=$.b0[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.b4[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.cX($.bW.$2(a,o))
if(r!=null){n=$.b0[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.b4[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.b5(t)
$.b0[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.b4[o]=t
return t}if(q==="-"){p=A.b5(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.c3(a,t)
if(q==="*")throw A.b(A.bz(o))
if(v.leafTags[o]===true){p=A.b5(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.c3(a,t)},
c3(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bi(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
b5(a){return J.bi(a,!1,null,!!a.$io)},
dz(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.b5(t)
else return J.bi(t,c,null,null)},
ds(){if(!0===$.bh)return
$.bh=!0
A.dt()},
dt(){var t,s,r,q,p,o,n,m
$.b0=Object.create(null)
$.b4=Object.create(null)
A.dr()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.c4.$1(p)
if(o!=null){n=A.dz(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
dr(){var t,s,r,q,p,o,n=B.f()
n=A.L(B.h,A.L(B.i,A.L(B.d,A.L(B.d,A.L(B.j,A.L(B.k,A.L(B.l(B.c),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.c0=new A.b1(q)
$.bW=new A.b2(p)
$.c4=new A.b3(o)},
L(a,b){return a(b)||b},
dl(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
E:function E(){},
aC:function aC(){},
aQ:function aQ(){},
aO:function aO(){},
ad:function ad(a,b){this.a=a
this.b=b},
aU:function aU(a){this.a=a},
aM:function aM(a){this.a=a},
b1:function b1(a){this.a=a},
b2:function b2(a){this.a=a},
b3:function b3(a){this.a=a},
F(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.bY(b,a))},
ak:function ak(){},
Y:function Y(){},
al:function al(){},
H:function H(){},
W:function W(){},
X:function X(){},
am:function am(){},
an:function an(){},
ao:function ao(){},
ap:function ap(){},
aq:function aq(){},
ar:function ar(){},
as:function as(){},
Z:function Z(){},
at:function at(){},
a1:function a1(){},
a2:function a2(){},
a3:function a3(){},
a4:function a4(){},
bw(a,b){var t=b.c
return t==null?b.c=A.ba(a,b.x,!0):t},
b7(a,b){var t=b.c
return t==null?b.c=A.a6(a,"bs",[b.x]):t},
bx(a){var t=a.w
if(t===6||t===7||t===8)return A.bx(a.x)
return t===12||t===13},
cx(a){return a.as},
bZ(a){return A.ay(v.typeUniverse,a,!1)},
D(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.D(a0,t,a2,a3)
if(s===t)return a1
return A.bK(a0,s,!0)
case 7:t=a1.x
s=A.D(a0,t,a2,a3)
if(s===t)return a1
return A.ba(a0,s,!0)
case 8:t=a1.x
s=A.D(a0,t,a2,a3)
if(s===t)return a1
return A.bI(a0,s,!0)
case 9:r=a1.y
q=A.K(a0,r,a2,a3)
if(q===r)return a1
return A.a6(a0,a1.x,q)
case 10:p=a1.x
o=A.D(a0,p,a2,a3)
n=a1.y
m=A.K(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.b8(a0,o,m)
case 11:l=a1.x
k=a1.y
j=A.K(a0,k,a2,a3)
if(j===k)return a1
return A.bJ(a0,l,j)
case 12:i=a1.x
h=A.D(a0,i,a2,a3)
g=a1.y
f=A.di(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.bH(a0,h,f)
case 13:e=a1.y
a3+=e.length
d=A.K(a0,e,a2,a3)
p=a1.x
o=A.D(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.b9(a0,o,d,!0)
case 14:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.b(A.ac("Attempted to substitute unexpected RTI kind "+a))}},
K(a,b,c,d){var t,s,r,q,p=b.length,o=A.aZ(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.D(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
dj(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.aZ(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.D(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
di(a,b,c,d){var t,s=b.a,r=A.K(a,s,c,d),q=b.b,p=A.K(a,q,c,d),o=b.c,n=A.dj(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.aw()
t.a=r
t.b=p
t.c=n
return t},
aA(a,b){a[v.arrayRti]=b
return a},
bX(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.dq(t)
return a.$S()}return null},
du(a,b){var t
if(A.bx(b))if(a instanceof A.E){t=A.bX(a)
if(t!=null)return t}return A.a9(a)},
a9(a){if(a instanceof A.k)return A.bR(a)
if(Array.isArray(a))return A.b_(a)
return A.bc(J.a8(a))},
b_(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bR(a){var t=a.$ti
return t!=null?t:A.bc(a)},
bc(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.d5(a,t)},
d5(a,b){var t=a instanceof A.E?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.cT(v.typeUniverse,t.name)
b.$ccache=s
return s},
dq(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.ay(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
dp(a){return A.G(A.bR(a))},
dh(a){var t=a instanceof A.E?A.bX(a):null
if(t!=null)return t
if(u.R.b(a))return J.c9(a).a
if(Array.isArray(a))return A.b_(a)
return A.a9(a)},
G(a){var t=a.r
return t==null?a.r=A.bO(a):t},
bO(a){var t,s,r=a.as,q=r.replace(/\*/g,"")
if(q===r)return a.r=new A.aX(a)
t=A.ay(v.typeUniverse,q,!0)
s=t.r
return s==null?t.r=A.bO(t):s},
v(a){return A.G(A.ay(v.typeUniverse,a,!1))},
d4(a){var t,s,r,q,p,o,n=this
if(n===u.K)return A.x(n,a,A.da)
if(!A.y(n))t=n===u._
else t=!0
if(t)return A.x(n,a,A.de)
t=n.w
if(t===7)return A.x(n,a,A.d2)
if(t===1)return A.x(n,a,A.bU)
s=t===6?n.x:n
r=s.w
if(r===8)return A.x(n,a,A.d6)
if(s===u.S)q=A.bT
else if(s===u.i||s===u.H)q=A.d9
else if(s===u.N)q=A.dc
else q=s===u.y?A.bd:null
if(q!=null)return A.x(n,a,q)
if(r===9){p=s.x
if(s.y.every(A.dv)){n.f="$i"+p
if(p==="e")return A.x(n,a,A.d8)
return A.x(n,a,A.dd)}}else if(r===11){o=A.dl(s.x,s.y)
return A.x(n,a,o==null?A.bU:o)}return A.x(n,a,A.d0)},
x(a,b,c){a.b=c
return a.b(b)},
d3(a){var t,s=this,r=A.d_
if(!A.y(s))t=s===u._
else t=!0
if(t)r=A.cY
else if(s===u.K)r=A.cW
else{t=A.aa(s)
if(t)r=A.d1}s.a=r
return s.a(a)},
az(a){var t=a.w,s=!0
if(!A.y(a))if(!(a===u._))if(!(a===u.A))if(t!==7)if(!(t===6&&A.az(a.x)))s=t===8&&A.az(a.x)||a===u.P||a===u.T
return s},
d0(a){var t=this
if(a==null)return A.az(t)
return A.dw(v.typeUniverse,A.du(a,t),t)},
d2(a){if(a==null)return!0
return this.x.b(a)},
dd(a){var t,s=this
if(a==null)return A.az(s)
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.a8(a)[t]},
d8(a){var t,s=this
if(a==null)return A.az(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.a8(a)[t]},
d_(a){var t=this
if(a==null){if(A.aa(t))return a}else if(t.b(a))return a
A.bP(a,t)},
d1(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.bP(a,t)},
bP(a,b){throw A.b(A.cJ(A.bA(a,A.n(b,null))))},
bA(a,b){return A.aG(a)+": type '"+A.n(A.dh(a),null)+"' is not a subtype of type '"+b+"'"},
cJ(a){return new A.ax("TypeError: "+a)},
m(a,b){return new A.ax("TypeError: "+A.bA(a,b))},
d6(a){var t=this,s=t.w===6?t.x:t
return s.x.b(a)||A.b7(v.typeUniverse,s).b(a)},
da(a){return a!=null},
cW(a){if(a!=null)return a
throw A.b(A.m(a,"Object"))},
de(a){return!0},
cY(a){return a},
bU(a){return!1},
bd(a){return!0===a||!1===a},
dM(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.m(a,"bool"))},
dO(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.m(a,"bool"))},
dN(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.m(a,"bool?"))},
dP(a){if(typeof a=="number")return a
throw A.b(A.m(a,"double"))},
dR(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"double"))},
dQ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"double?"))},
bT(a){return typeof a=="number"&&Math.floor(a)===a},
bb(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.m(a,"int"))},
dT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.m(a,"int"))},
dS(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.m(a,"int?"))},
d9(a){return typeof a=="number"},
dU(a){if(typeof a=="number")return a
throw A.b(A.m(a,"num"))},
dV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"num"))},
cV(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"num?"))},
dc(a){return typeof a=="string"},
bN(a){if(typeof a=="string")return a
throw A.b(A.m(a,"String"))},
dW(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.m(a,"String"))},
cX(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.m(a,"String?"))},
bV(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.n(a[r],b)
return t},
dg(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.bV(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.n(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
bQ(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){t=a5.length
if(a4==null)a4=A.aA([],u.s)
else a2=a4.length
s=a4.length
for(r=t;r>0;--r)B.a.l(a4,"T"+(s+r))
for(q=u.X,p=u._,o="<",n="",r=0;r<t;++r,n=a1){m=a4.length
l=m-1-r
if(!(l>=0))return A.u(a4,l)
o=o+n+a4[l]
k=a5[r]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===q))m=k===p
else m=!0
if(!m)o+=" extends "+A.n(k,a4)}o+=">"}else o=""
q=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.n(q,a4)
for(a="",a0="",r=0;r<g;++r,a0=a1)a+=a0+A.n(h[r],a4)
if(e>0){a+=a0+"["
for(a0="",r=0;r<e;++r,a0=a1)a+=a0+A.n(f[r],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",r=0;r<c;r+=3,a0=a1){a+=a0
if(d[r+1])a+="required "
a+=A.n(d[r+2],a4)+" "+d[r]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
n(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6)return A.n(a.x,b)
if(m===7){t=a.x
s=A.n(t,b)
r=t.w
return(r===12||r===13?"("+s+")":s)+"?"}if(m===8)return"FutureOr<"+A.n(a.x,b)+">"
if(m===9){q=A.dk(a.x)
p=a.y
return p.length>0?q+("<"+A.bV(p,b)+">"):q}if(m===11)return A.dg(a,b)
if(m===12)return A.bQ(a,b,null)
if(m===13)return A.bQ(a.x,b,a.y)
if(m===14){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.u(b,o)
return b[o]}return"?"},
dk(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
cU(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cT(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.ay(a,b,!1)
else if(typeof n=="number"){t=n
s=A.a7(a,5,"#")
r=A.aZ(t)
for(q=0;q<t;++q)r[q]=s
p=A.a6(a,b,r)
o[b]=p
return p}else return n},
cR(a,b){return A.bL(a.tR,b)},
cQ(a,b){return A.bL(a.eT,b)},
ay(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bE(A.bC(a,null,b,c))
s.set(b,t)
return t},
aY(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bE(A.bC(a,b,c,!0))
r.set(c,s)
return s},
cS(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.b8(a,b,c.w===10?c.y:[c])
q.set(t,r)
return r},
w(a,b){b.a=A.d3
b.b=A.d4
return b},
a7(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.q(null,null)
t.w=b
t.as=c
s=A.w(a,t)
a.eC.set(c,s)
return s},
bK(a,b,c){var t,s=b.as+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.cO(a,b,s,c)
a.eC.set(s,t)
return t},
cO(a,b,c,d){var t,s,r
if(d){t=b.w
if(!A.y(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.q(null,null)
r.w=6
r.x=b
r.as=c
return A.w(a,r)},
ba(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cN(a,b,s,c)
a.eC.set(s,t)
return t},
cN(a,b,c,d){var t,s,r,q
if(d){t=b.w
s=!0
if(!A.y(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aa(b.x)
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.x
if(r.w===8&&A.aa(r.x))return r
else return A.bw(a,b)}}q=new A.q(null,null)
q.w=7
q.x=b
q.as=c
return A.w(a,q)},
bI(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cL(a,b,s,c)
a.eC.set(s,t)
return t},
cL(a,b,c,d){var t,s
if(d){t=b.w
if(A.y(b)||b===u.K||b===u._)return b
else if(t===1)return A.a6(a,"bs",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.q(null,null)
s.w=8
s.x=b
s.as=c
return A.w(a,s)},
cP(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.q(null,null)
t.w=14
t.x=b
t.as=r
s=A.w(a,t)
a.eC.set(r,s)
return s},
a5(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
cK(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
a6(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.a5(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.q(null,null)
s.w=9
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.w(a,s)
a.eC.set(q,r)
return r},
b8(a,b,c){var t,s,r,q,p,o
if(b.w===10){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.a5(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.q(null,null)
p.w=10
p.x=t
p.y=s
p.as=r
o=A.w(a,p)
a.eC.set(r,o)
return o},
bJ(a,b,c){var t,s,r="+"+(b+"("+A.a5(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.q(null,null)
t.w=11
t.x=b
t.y=c
t.as=r
s=A.w(a,t)
a.eC.set(r,s)
return s},
bH(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.a5(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.a5(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.cK(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.q(null,null)
q.w=12
q.x=b
q.y=c
q.as=s
p=A.w(a,q)
a.eC.set(s,p)
return p},
b9(a,b,c,d){var t,s=b.as+("<"+A.a5(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cM(a,b,c,s,d)
a.eC.set(s,t)
return t},
cM(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.aZ(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.D(a,b,s,0)
n=A.K(a,c,s,0)
return A.b9(a,o,n,c!==n)}}m=new A.q(null,null)
m.w=13
m.x=b
m.y=c
m.as=d
return A.w(a,m)},
bC(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bE(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.cE(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.bD(a,s,m,l,!1)
else if(r===46)s=A.bD(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.C(a.u,a.e,l.pop()))
break
case 94:l.push(A.cP(a.u,l.pop()))
break
case 35:l.push(A.a7(a.u,5,"#"))
break
case 64:l.push(A.a7(a.u,2,"@"))
break
case 126:l.push(A.a7(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.cG(a,l)
break
case 38:A.cF(a,l)
break
case 42:q=a.u
l.push(A.bK(q,A.C(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.ba(q,A.C(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.bI(q,A.C(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.cD(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.bF(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.cI(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.C(a.u,a.e,n)},
cE(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bD(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===10)p=p.x
o=A.cU(t,p.x)[q]
if(o==null)A.dC('No "'+q+'" in "'+A.cx(p)+'"')
d.push(A.aY(t,p,o))}else d.push(q)
return n},
cG(a,b){var t,s=a.u,r=A.bB(a,b),q=b.pop()
if(typeof q=="string")b.push(A.a6(s,q,r))
else{t=A.C(s,a.e,q)
switch(t.w){case 12:b.push(A.b9(s,t,r,a.n))
break
default:b.push(A.b8(s,t,r))
break}}},
cD(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.bB(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.C(q,a.e,p)
r=new A.aw()
r.a=t
r.b=o
r.c=n
b.push(A.bH(q,s,r))
return
case-4:b.push(A.bJ(q,b.pop(),t))
return
default:throw A.b(A.ac("Unexpected state under `()`: "+A.r(p)))}},
cF(a,b){var t=b.pop()
if(0===t){b.push(A.a7(a.u,1,"0&"))
return}if(1===t){b.push(A.a7(a.u,4,"1&"))
return}throw A.b(A.ac("Unexpected extended operation "+A.r(t)))},
bB(a,b){var t=b.splice(a.p)
A.bF(a.u,a.e,t)
a.p=b.pop()
return t},
C(a,b,c){if(typeof c=="string")return A.a6(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.cH(a,b,c)}else return c},
bF(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.C(a,b,c[t])},
cI(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.C(a,b,c[t])},
cH(a,b,c){var t,s,r=b.w
if(r===10){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==9)throw A.b(A.ac("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.b(A.ac("Bad index "+c+" for "+b.h(0)))},
dw(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.i(a,b,null,c,null,!1)?1:0
s.set(c,t)}if(0===t)return!1
if(1===t)return!0
return!0},
i(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.y(d))t=d===u._
else t=!0
if(t)return!0
s=b.w
if(s===4)return!0
if(A.y(b))return!1
t=b.w
if(t===1)return!0
r=s===14
if(r)if(A.i(a,c[b.x],c,d,e,!1))return!0
q=d.w
t=b===u.P||b===u.T
if(t){if(q===8)return A.i(a,b,c,d.x,e,!1)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.i(a,b.x,c,d,e,!1)
if(s===6)return A.i(a,b.x,c,d,e,!1)
return s!==7}if(s===6)return A.i(a,b.x,c,d,e,!1)
if(q===6){t=A.bw(a,d)
return A.i(a,b,c,t,e,!1)}if(s===8){if(!A.i(a,b.x,c,d,e,!1))return!1
return A.i(a,A.b7(a,b),c,d,e,!1)}if(s===7){t=A.i(a,u.P,c,d,e,!1)
return t&&A.i(a,b.x,c,d,e,!1)}if(q===8){if(A.i(a,b,c,d.x,e,!1))return!0
return A.i(a,b,c,A.b7(a,d),e,!1)}if(q===7){t=A.i(a,b,c,u.P,e,!1)
return t||A.i(a,b,c,d.x,e,!1)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.L)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.i(a,k,c,j,e,!1)||!A.i(a,j,e,k,c,!1))return!1}return A.bS(a,b.x,c,d.x,e,!1)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.bS(a,b,c,d,e,!1)}if(s===9){if(q!==9)return!1
return A.d7(a,b,c,d,e,!1)}if(p&&q===11)return A.db(a,b,c,d,e,!1)
return!1},
bS(a2,a3,a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.i(a2,a3.x,a4,a5.x,a6,!1))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.i(a2,q[i],a6,h,a4,!1))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.i(a2,q[p+i],a6,h,a4,!1))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.i(a2,l[i],a6,h,a4,!1))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.i(a2,f[b+2],a6,h,a4,!1))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
d7(a,b,c,d,e,f){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aY(a,b,s[p])
return A.bM(a,q,null,c,d.y,e,!1)}return A.bM(a,b.y,null,c,d.y,e,!1)},
bM(a,b,c,d,e,f,g){var t,s=b.length
for(t=0;t<s;++t)if(!A.i(a,b[t],d,e[t],f,!1))return!1
return!0},
db(a,b,c,d,e,f){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e,!1))return!1
return!0},
aa(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.y(a))if(t!==7)if(!(t===6&&A.aa(a.x)))s=t===8&&A.aa(a.x)
return s},
dv(a){var t
if(!A.y(a))t=a===u._
else t=!0
return t},
y(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
bL(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aZ(a){return a>0?new Array(a):v.typeUniverse.sEA},
q:function q(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
aw:function aw(){this.c=this.b=this.a=null},
aX:function aX(a){this.a=a},
aV:function aV(){},
ax:function ax(a){this.a=a},
bG(a,b,c){return 0},
t:function t(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
J:function J(a,b){this.a=a
this.$ti=b},
h:function h(){},
by(a,b,c){var t=J.bj(b)
if(!t.j())return a
if(c.length===0){do a+=A.r(t.gp())
while(t.j())}else{a+=A.r(t.gp())
for(;t.j();)a=a+c+A.r(t.gp())}return a},
ci(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
br(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ae(a){if(a>=10)return""+a
return"0"+a},
aG(a){if(typeof a=="number"||A.bd(a)||a==null)return J.ab(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cw(a)},
ac(a){return new A.aB(a)},
ca(a){return new A.N(!1,null,null,a)},
cl(a,b,c,d){return new A.aH(b,!0,a,d,"Index out of range")},
bz(a){return new A.aS(a)},
cy(a){return new A.aN(a)},
bq(a){return new A.aD(a)},
cp(a,b,c){var t,s
if(A.c2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.aA([],u.s)
B.a.l($.z,a)
try{A.df(a,t)}finally{if(0>=$.z.length)return A.u($.z,-1)
$.z.pop()}s=A.by(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
bt(a,b,c){var t,s
if(A.c2(a))return b+"..."+c
t=new A.aP(b)
B.a.l($.z,a)
try{s=t
s.a=A.by(s.a,a,", ")}finally{if(0>=$.z.length)return A.u($.z,-1)
$.z.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
df(a,b){var t,s,r,q,p,o,n,m,l,k,j=a.$ti,i=new A.t(a.a(),j.k("t<1>"))
j=j.c
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!i.j())return
r=i.b
q=A.r(r==null?j.a(r):r)
B.a.l(b,q)
t+=q.length+2;++s}if(!i.j()){if(s<=5)return
if(0>=b.length)return A.u(b,-1)
p=b.pop()
if(0>=b.length)return A.u(b,-1)
o=b.pop()}else{n=i.b
if(n==null)n=j.a(n);++s
if(!i.j()){if(s<=4){B.a.l(b,A.r(n))
return}p=A.r(n)
if(0>=b.length)return A.u(b,-1)
o=b.pop()
t+=p.length+2}else{m=i.b
if(m==null)m=j.a(m);++s
for(;i.j();n=m,m=l){l=i.b
if(l==null)l=j.a(l);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return A.u(b,-1)
t-=b.pop().length+2;--s}B.a.l(b,"...")
return}}o=A.r(n)
p=A.r(m)
t+=p.length+o.length+4}}if(s>b.length+2){t+=5
k="..."}else k=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return A.u(b,-1)
t-=b.pop().length+2
if(k==null){t+=5
k="..."}}if(k!=null)B.a.l(b,k)
B.a.l(b,o)
B.a.l(b,p)},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(){},
aB:function aB(a){this.a=a},
aR:function aR(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aL:function aL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aH:function aH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aT:function aT(a){this.a=a},
aS:function aS(a){this.a=a},
aN:function aN(a){this.a=a},
aD:function aD(a){this.a=a},
d:function d(){},
a_:function a_(){},
k:function k(){},
aP:function aP(a){this.a=a},
dD(a){A.c6(new A.aJ("Field '"+a+"' has been assigned during initialization."),new Error())},
c5(){return new A.J(A.dA(),u.e)},
dA(){return function(){var t=0,s=1,r,q,p,o,n,m,l
return function $async$c5(a,b,c){if(b===1){r=c
t=s}while(true)switch(t){case 0:q=0
case 2:if(!(q<3)){t=4
break}p=B.p[q]
o=p==="Feed",n=p+" the ",m=0
case 5:if(!(m<2)){t=7
break}l=B.q[m]
t=l!=="cats"||o?8:9
break
case 8:t=10
return a.b=n+l,1
case 10:case 9:case 6:++m
t=5
break
case 7:case 3:++q
t=2
break
case 4:return 0
case 1:return a.c=r,3}}}},
dy(){var t,s,r,q,p=new A.aE(Date.now(),0,!1),o=self,n=u.m,m=u.z.a(n.a(o.document).querySelector("#output"))
if(m==null)m=n.a(m)
m.textContent="The time is "+A.bu(p)+":"+A.bv(p)+" and your Dart web app is running!"
for(t=A.c5(),s=t.$ti,t=new A.t(t.a(),s.k("t<1>")),s=s.c;t.j();){r=t.b
if(r==null)r=s.a(r)
q=n.a(n.a(o.document).createElement("li"))
q.textContent=r
n.a(m.appendChild(q))}}},B={}
var w=[A,J,B]
var $={}
A.b6.prototype={}
J.af.prototype={
h(a){return"Instance of '"+A.aK(a)+"'"},
gi(a){return A.G(A.bc(this))}}
J.ag.prototype={
h(a){return String(a)},
gi(a){return A.G(u.y)},
$ic:1,
$ibe:1}
J.Q.prototype={
h(a){return"null"},
$ic:1}
J.T.prototype={$ij:1}
J.B.prototype={
h(a){return String(a)}}
J.au.prototype={}
J.a0.prototype={}
J.A.prototype={
h(a){var t=a[$.c8()]
if(t==null)return this.E(a)
return"JavaScript function for "+J.ab(t)}}
J.S.prototype={
h(a){return String(a)}}
J.U.prototype={
h(a){return String(a)}}
J.p.prototype={
l(a,b){A.b_(a).c.a(b)
a.$flags&1&&A.dE(a,29)
a.push(b)},
h(a){return A.bt(a,"[","]")},
gB(a){return new J.O(a,a.length,A.b_(a).k("O<1>"))},
gm(a){return a.length},
$id:1,
$ie:1}
J.aI.prototype={}
J.O.prototype={
gp(){var t=this.d
return t==null?this.$ti.c.a(t):t},
j(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.dB(r)
throw A.b(r)}t=s.c
if(t>=q){s.sD(null)
return!1}s.sD(r[t]);++s.c
return!0},
sD(a){this.d=this.$ti.k("1?").a(a)},
$iP:1}
J.aj.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){return A.G(u.H)},
$if:1,
$iM:1}
J.ah.prototype={
gi(a){return A.G(u.S)},
$ic:1,
$ia:1}
J.ai.prototype={
gi(a){return A.G(u.i)},
$ic:1}
J.R.prototype={
h(a){return a},
gi(a){return A.G(u.N)},
gm(a){return a.length},
$ic:1,
$iav:1}
A.aJ.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.V.prototype={
gp(){var t=this.d
return t==null?this.$ti.c.a(t):t},
j(){var t,s=this,r=s.a,q=J.c_(r),p=q.gm(r)
if(s.b!==p)throw A.b(A.bq(r))
t=s.c
if(t>=p){s.sC(null)
return!1}s.sC(q.n(r,t));++s.c
return!0},
sC(a){this.d=this.$ti.k("1?").a(a)},
$iP:1}
A.l.prototype={}
A.E.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.c7(s==null?"unknown":s)+"'"},
gG(){return this},
$C:"$1",
$R:1,
$D:null}
A.aC.prototype={$C:"$2",$R:2}
A.aQ.prototype={}
A.aO.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.c7(t)+"'"}}
A.ad.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aK(this.a)+"'")}}
A.aU.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.aM.prototype={
h(a){return"RuntimeError: "+this.a}}
A.b1.prototype={
$1(a){return this.a(a)}}
A.b2.prototype={
$2(a,b){return this.a(a,b)}}
A.b3.prototype={
$1(a){return this.a(A.bN(a))}}
A.ak.prototype={
gi(a){return B.r},
$ic:1}
A.Y.prototype={}
A.al.prototype={
gi(a){return B.t},
$ic:1}
A.H.prototype={
gm(a){return a.length},
$io:1}
A.W.prototype={
n(a,b){A.F(b,a,a.length)
return a[b]},
$id:1,
$ie:1}
A.X.prototype={$id:1,$ie:1}
A.am.prototype={
gi(a){return B.u},
$ic:1}
A.an.prototype={
gi(a){return B.v},
$ic:1}
A.ao.prototype={
gi(a){return B.w},
n(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.ap.prototype={
gi(a){return B.x},
n(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.aq.prototype={
gi(a){return B.y},
n(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.ar.prototype={
gi(a){return B.z},
n(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.as.prototype={
gi(a){return B.A},
n(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.Z.prototype={
gi(a){return B.B},
gm(a){return a.length},
n(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.at.prototype={
gi(a){return B.C},
gm(a){return a.length},
n(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.a1.prototype={}
A.a2.prototype={}
A.a3.prototype={}
A.a4.prototype={}
A.q.prototype={
k(a){return A.aY(v.typeUniverse,this,a)},
H(a){return A.cS(v.typeUniverse,this,a)}}
A.aw.prototype={}
A.aX.prototype={
h(a){return A.n(this.a,null)}}
A.aV.prototype={
h(a){return this.a}}
A.ax.prototype={}
A.t.prototype={
gp(){var t=this.b
return t==null?this.$ti.c.a(t):t},
F(a,b){var t,s,r
a=A.bb(a)
b=b
t=this.a
for(;!0;)try{s=t(this,a,b)
return s}catch(r){b=r
a=1}},
j(){var t,s,r,q,p=this,o=null,n=null,m=0
for(;!0;){t=p.d
if(t!=null)try{if(t.j()){p.sq(t.gp())
return!0}else p.sv(o)}catch(s){n=s
m=1
p.sv(o)}r=p.F(m,n)
if(1===r)return!0
if(0===r){p.sq(o)
q=p.e
if(q==null||q.length===0){p.a=A.bG
return!1}if(0>=q.length)return A.u(q,-1)
p.a=q.pop()
m=0
n=null
continue}if(2===r){m=0
n=null
continue}if(3===r){n=p.c
p.c=null
q=p.e
if(q==null||q.length===0){p.sq(o)
p.a=A.bG
throw n
return!1}if(0>=q.length)return A.u(q,-1)
p.a=q.pop()
m=1
continue}throw A.b(A.cy("sync*"))}return!1},
I(a){var t,s,r=this
if(a instanceof A.J){t=a.a()
s=r.e
if(s==null)s=r.e=[]
B.a.l(s,r.a)
r.a=t
return 2}else{r.sv(J.bj(a))
return 2}},
sq(a){this.b=this.$ti.k("1?").a(a)},
sv(a){this.d=this.$ti.k("P<1>?").a(a)},
$iP:1}
A.J.prototype={
gB(a){return new A.t(this.a(),this.$ti.k("t<1>"))}}
A.h.prototype={
gB(a){return new A.V(a,this.gm(a),A.a9(a).k("V<h.E>"))},
h(a){return A.bt(a,"[","]")}}
A.aE.prototype={
h(a){var t=this,s=A.ci(A.cv(t)),r=A.ae(A.ct(t)),q=A.ae(A.cr(t)),p=A.ae(A.bu(t)),o=A.ae(A.bv(t)),n=A.ae(A.cu(t)),m=A.br(A.cs(t)),l=t.b,k=l===0?"":A.br(l)
return s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m+k}}
A.aF.prototype={}
A.aB.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aG(t)
return"Assertion failed"}}
A.aR.prototype={}
A.N.prototype={
gu(){return"Invalid argument"+(!this.a?"(s)":"")},
gt(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gu()+r+p
if(!t.a)return o
return o+t.gt()+": "+A.aG(t.gA())},
gA(){return this.b}}
A.aL.prototype={
gA(){return A.cV(this.b)},
gu(){return"RangeError"},
gt(){var t,s=this.e
if(s==null)t=""
else t=": Not greater than or equal to "+A.r(s)
return t}}
A.aH.prototype={
gA(){return A.bb(this.b)},
gu(){return"RangeError"},
gt(){if(A.bb(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gm(a){return this.f}}
A.aT.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aS.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aN.prototype={
h(a){return"Bad state: "+this.a}}
A.aD.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aG(t)+"."}}
A.d.prototype={
gm(a){var t,s=new A.t(this.a(),this.$ti.k("t<1>"))
for(t=0;s.j();)++t
return t},
h(a){return A.cp(this,"(",")")}}
A.a_.prototype={
h(a){return"null"}}
A.k.prototype={$ik:1,
h(a){return"Instance of '"+A.aK(this)+"'"},
gi(a){return A.dp(this)},
toString(){return this.h(this)}}
A.aP.prototype={
gm(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}};(function aliases(){var t=J.B.prototype
t.E=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.k,null)
r(A.k,[A.b6,J.af,J.O,A.aF,A.V,A.l,A.E,A.q,A.aw,A.aX,A.t,A.d,A.h,A.aE,A.a_,A.aP])
r(J.af,[J.ag,J.Q,J.T,J.S,J.U,J.aj,J.R])
r(J.T,[J.B,J.p,A.ak,A.Y])
r(J.B,[J.au,J.a0,J.A])
s(J.aI,J.p)
r(J.aj,[J.ah,J.ai])
r(A.aF,[A.aJ,A.aU,A.aM,A.aV,A.aB,A.aR,A.N,A.aT,A.aS,A.aN,A.aD])
r(A.E,[A.aC,A.aQ,A.b1,A.b3])
r(A.aQ,[A.aO,A.ad])
s(A.b2,A.aC)
r(A.Y,[A.al,A.H])
r(A.H,[A.a1,A.a3])
s(A.a2,A.a1)
s(A.W,A.a2)
s(A.a4,A.a3)
s(A.X,A.a4)
r(A.W,[A.am,A.an])
r(A.X,[A.ao,A.ap,A.aq,A.ar,A.as,A.Z,A.at])
s(A.ax,A.aV)
s(A.J,A.d)
r(A.N,[A.aL,A.aH])
t(A.a1,A.h)
t(A.a2,A.l)
t(A.a3,A.h)
t(A.a4,A.l)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",f:"double",M:"num",av:"String",be:"bool",a_:"Null",e:"List",k:"Object",dK:"Map"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.cR(v.typeUniverse,JSON.parse('{"au":"B","a0":"B","A":"B","ag":{"be":[],"c":[]},"Q":{"c":[]},"T":{"j":[]},"B":{"j":[]},"p":{"e":["1"],"j":[],"d":["1"]},"aI":{"p":["1"],"e":["1"],"j":[],"d":["1"]},"O":{"P":["1"]},"aj":{"f":[],"M":[]},"ah":{"f":[],"a":[],"M":[],"c":[]},"ai":{"f":[],"M":[],"c":[]},"R":{"av":[],"c":[]},"V":{"P":["1"]},"ak":{"j":[],"c":[]},"Y":{"j":[]},"al":{"j":[],"c":[]},"H":{"o":["1"],"j":[]},"W":{"h":["f"],"e":["f"],"o":["f"],"j":[],"d":["f"],"l":["f"]},"X":{"h":["a"],"e":["a"],"o":["a"],"j":[],"d":["a"],"l":["a"]},"am":{"h":["f"],"e":["f"],"o":["f"],"j":[],"d":["f"],"l":["f"],"c":[],"h.E":"f"},"an":{"h":["f"],"e":["f"],"o":["f"],"j":[],"d":["f"],"l":["f"],"c":[],"h.E":"f"},"ao":{"h":["a"],"e":["a"],"o":["a"],"j":[],"d":["a"],"l":["a"],"c":[],"h.E":"a"},"ap":{"h":["a"],"e":["a"],"o":["a"],"j":[],"d":["a"],"l":["a"],"c":[],"h.E":"a"},"aq":{"h":["a"],"e":["a"],"o":["a"],"j":[],"d":["a"],"l":["a"],"c":[],"h.E":"a"},"ar":{"h":["a"],"e":["a"],"o":["a"],"j":[],"d":["a"],"l":["a"],"c":[],"h.E":"a"},"as":{"h":["a"],"e":["a"],"o":["a"],"j":[],"d":["a"],"l":["a"],"c":[],"h.E":"a"},"Z":{"h":["a"],"e":["a"],"o":["a"],"j":[],"d":["a"],"l":["a"],"c":[],"h.E":"a"},"at":{"h":["a"],"e":["a"],"o":["a"],"j":[],"d":["a"],"l":["a"],"c":[],"h.E":"a"},"t":{"P":["1"]},"J":{"d":["1"]},"f":{"M":[]},"a":{"M":[]},"co":{"e":["a"],"d":["a"]},"cC":{"e":["a"],"d":["a"]},"cB":{"e":["a"],"d":["a"]},"cm":{"e":["a"],"d":["a"]},"cz":{"e":["a"],"d":["a"]},"cn":{"e":["a"],"d":["a"]},"cA":{"e":["a"],"d":["a"]},"cj":{"e":["f"],"d":["f"]},"ck":{"e":["f"],"d":["f"]}}'))
A.cQ(v.typeUniverse,JSON.parse('{"H":1}'))
var u=(function rtii(){var t=A.bZ
return{Z:t("dJ"),U:t("d<@>"),s:t("p<av>"),b:t("p<@>"),T:t("Q"),m:t("j"),g:t("A"),p:t("o<@>"),j:t("e<@>"),P:t("a_"),K:t("k"),L:t("dL"),N:t("av"),R:t("c"),o:t("a0"),e:t("J<av>"),y:t("be"),i:t("f"),S:t("a"),A:t("0&*"),_:t("k*"),O:t("bs<a_>?"),z:t("j?"),X:t("k?"),H:t("M")}})();(function constants(){var t=hunkHelpers.makeConstList
B.m=J.af.prototype
B.a=J.p.prototype
B.n=J.A.prototype
B.o=J.T.prototype
B.e=J.au.prototype
B.b=J.a0.prototype
B.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.l=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.h=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.k=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.j=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.i=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.d=function(hooks) { return hooks; }

B.p=A.aA(t(["Walk","Wash","Feed"]),u.s)
B.q=A.aA(t(["cats","dogs"]),u.s)
B.r=A.v("dG")
B.t=A.v("dH")
B.u=A.v("cj")
B.v=A.v("ck")
B.w=A.v("cm")
B.x=A.v("cn")
B.y=A.v("co")
B.z=A.v("cz")
B.A=A.v("cA")
B.B=A.v("cB")
B.C=A.v("cC")})();(function staticFields(){$.aW=null
$.z=A.aA([],A.bZ("p<k>"))
$.bn=null
$.bm=null
$.c0=null
$.bW=null
$.c4=null
$.b0=null
$.b4=null
$.bh=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"dI","c8",()=>A.dn("_$dart_dartClosure"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ak,ArrayBufferView:A.Y,DataView:A.al,Float32Array:A.am,Float64Array:A.an,Int16Array:A.ao,Int32Array:A.ap,Int8Array:A.aq,Uint16Array:A.ar,Uint32Array:A.as,Uint8ClampedArray:A.Z,CanvasPixelArray:A.Z,Uint8Array:A.at})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.H.$nativeSuperclassTag="ArrayBufferView"
A.a1.$nativeSuperclassTag="ArrayBufferView"
A.a2.$nativeSuperclassTag="ArrayBufferView"
A.W.$nativeSuperclassTag="ArrayBufferView"
A.a3.$nativeSuperclassTag="ArrayBufferView"
A.a4.$nativeSuperclassTag="ArrayBufferView"
A.X.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.dy
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map
