"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{6312:function(e,t,r){r.d(t,{F:function(){return u}});var i=r(7536),a=function(e,t,r){if(e&&"reportValidity"in e){var a=(0,i.U2)(r,t);e.setCustomValidity(a&&a.message||""),e.reportValidity()}},s=function(e,t){var r=function(r){var i=t.fields[r];i&&i.ref&&"reportValidity"in i.ref?a(i.ref,r,e):i.refs&&i.refs.forEach(function(t){return a(t,r,e)})};for(var i in t.fields)r(i)},l=function(e,t){t.shouldUseNativeValidation&&s(e,t);var r={};for(var a in e){var l=(0,i.U2)(t.fields,a);(0,i.t8)(r,a,Object.assign(e[a],{ref:l&&l.ref}))}return r},n=function(e,t){for(var r={};e.length;){var a=e[0],s=a.code,l=a.message,n=a.path.join(".");if(!r[n]){if("unionErrors"in a){var u=a.unionErrors[0].errors[0];r[n]={message:u.message,type:u.code}}else r[n]={message:l,type:s}}if("unionErrors"in a&&a.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),t){var o=r[n].types,f=o&&o[a.code];r[n]=(0,i.KN)(n,t,r,s,f?[].concat(f,a.message):a.message)}e.shift()}return r},u=function(e,t,r){return void 0===r&&(r={}),function(i,a,u){try{return Promise.resolve(function(a,l){try{var n=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](i,t)).then(function(e){return u.shouldUseNativeValidation&&s({},u),{errors:{},values:r.rawValues?i:e}})}catch(o){return l(o)}return n&&n.then?n.then(void 0,l):n}(0,function(e){return{values:{},errors:e.isEmpty?{}:l(n(e.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(o){return Promise.reject(o)}}}},7536:function(e,t,r){r.d(t,{KN:function(){return S},U2:function(){return m},cI:function(){return eh},t8:function(){return E}});var i=r(7294),a=e=>"checkbox"===e.type,s=e=>e instanceof Date,l=e=>null==e;let n=e=>"object"==typeof e;var u=e=>!l(e)&&!Array.isArray(e)&&n(e)&&!s(e),o=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,f=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,d=(e,t)=>e.has(f(t)),c=e=>Array.isArray(e)?e.filter(Boolean):[],y=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;let i=c(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return y(i)||i===e?y(e[t])?r:e[t]:i};let h={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},v={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},g={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};i.createContext(null);var p=(e,t,r,i=!0)=>{let a={defaultValues:t._defaultValues};for(let s in e)Object.defineProperty(a,s,{get(){let a=s;return t._proxyFormState[a]!==v.all&&(t._proxyFormState[a]=!i||v.all),r&&(r[a]=!0),e[a]}});return a},b=e=>u(e)&&!Object.keys(e).length,V=(e,t,r)=>{let{name:i,...a}=e;return b(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!r||v.all))},w=e=>Array.isArray(e)?e:[e],A=e=>"string"==typeof e,_=(e,t,r,i)=>{let a=Array.isArray(e);return A(e)?(i&&t.watch.add(e),m(r,e)):a?e.map(e=>(i&&t.watch.add(e),m(r,e))):(i&&(t.watchAll=!0),r)},F=e=>"function"==typeof e,k=e=>{for(let t in e)if(F(e[t]))return!0;return!1},S=(e,t,r,i,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:a||!0}}:{},x=e=>/^\w*$/.test(e),D=e=>c(e.replace(/["|']|\]/g,"").split(/\.|\[/));function E(e,t,r){let i=-1,a=x(t)?[t]:D(t),s=a.length,l=s-1;for(;++i<s;){let n=a[i],o=r;if(i!==l){let f=e[n];o=u(f)||Array.isArray(f)?f:isNaN(+a[i+1])?{}:[]}e[n]=o,e=e[n]}return e}let C=(e,t,r)=>{for(let i of r||Object.keys(e)){let a=m(e,i);if(a){let{_f:s,...l}=a;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else u(l)&&C(l,t)}}};var O=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),U=(e,t,r)=>{let i=c(m(e,r));return E(i,"root",t[r]),E(e,r,i),e},T=e=>"boolean"==typeof e,N=e=>"file"===e.type,j=e=>A(e)||i.isValidElement(e),L=e=>"radio"===e.type,B=e=>e instanceof RegExp;let M={value:!1,isValid:!1},q={value:!0,isValid:!0};var P=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!y(e[0].attributes.value)?y(e[0].value)||""===e[0].value?q:{value:e[0].value,isValid:!0}:q:M}return M};let R={isValid:!1,value:null};var H=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,R):R;function I(e,t,r="validate"){if(j(e)||Array.isArray(e)&&e.every(j)||T(e)&&!e)return{type:r,message:j(e)?e:"",ref:t}}var $=e=>u(e)&&!B(e)?e:{value:e,message:""},K=async(e,t,r,i,s)=>{let{ref:n,refs:o,required:f,maxLength:d,minLength:c,min:y,max:m,pattern:h,validate:v,name:p,valueAsNumber:V,mount:w,disabled:_}=e._f;if(!w||_)return{};let k=o?o[0]:n,x=e=>{i&&A(e)&&(k.setCustomValidity(e),k.reportValidity())},D={},E=L(n),C=a(n),O=(V||N(n))&&!n.value||""===t||Array.isArray(t)&&!t.length,U=S.bind(null,p,r,D),M=(e,t,r,i=g.maxLength,a=g.minLength)=>{let s=e?t:r;D[p]={type:e?i:a,message:s,ref:n,...U(e?i:a,s)}};if(s?!Array.isArray(t)||!t.length:f&&(!(E||C)&&(O||l(t))||T(t)&&!t||C&&!P(o).isValid||E&&!H(o).isValid)){let{value:q,message:R}=j(f)?{value:!!f,message:f}:$(f);if(q&&(D[p]={type:g.required,message:R,ref:k,...U(g.required,R)},!r))return x(R),D}if(!O&&(!l(y)||!l(m))){let K,G;let W=$(m),z=$(y);if(l(t)||isNaN(t)){let J=n.valueAsDate||new Date(t),Q=e=>new Date(new Date().toDateString()+" "+e),X="time"==n.type,Y="week"==n.type;A(W.value)&&t&&(K=X?Q(t)>Q(W.value):Y?t>W.value:J>new Date(W.value)),A(z.value)&&t&&(G=X?Q(t)<Q(z.value):Y?t<z.value:J<new Date(z.value))}else{let Z=n.valueAsNumber||(t?+t:t);l(W.value)||(K=Z>W.value),l(z.value)||(G=Z<z.value)}if((K||G)&&(M(!!K,W.message,z.message,g.max,g.min),!r))return x(D[p].message),D}if((d||c)&&!O&&(A(t)||s&&Array.isArray(t))){let ee=$(d),et=$(c),er=!l(ee.value)&&t.length>ee.value,ei=!l(et.value)&&t.length<et.value;if((er||ei)&&(M(er,ee.message,et.message),!r))return x(D[p].message),D}if(h&&!O&&A(t)){let{value:ea,message:es}=$(h);if(B(ea)&&!t.match(ea)&&(D[p]={type:g.pattern,message:es,ref:n,...U(g.pattern,es)},!r))return x(es),D}if(v){if(F(v)){let el=await v(t),en=I(el,k);if(en&&(D[p]={...en,...U(g.validate,en.message)},!r))return x(en.message),D}else if(u(v)){let eu={};for(let eo in v){if(!b(eu)&&!r)break;let ef=I(await v[eo](t),k,eo);ef&&(eu={...ef,...U(eo,ef.message)},x(ef.message),r&&(D[p]=eu))}if(!b(eu)&&(D[p]={ref:k,...eu},!r))return D}}return x(!0),D},G=e=>{let t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},W="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function z(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(W&&(e instanceof Blob||e instanceof FileList))&&(r||u(e))))return e;else if(t=r?[]:{},Array.isArray(e)||G(e))for(let i in e)t[i]=z(e[i]);else t=e;return t}var J=e=>({isOnSubmit:!e||e===v.onSubmit,isOnBlur:e===v.onBlur,isOnChange:e===v.onChange,isOnAll:e===v.all,isOnTouch:e===v.onTouched});function Q(e,t){let r;let i=x(t)?[t]:D(t),a=1==i.length?e:function(e,t){let r=t.slice(0,-1).length,i=0;for(;i<r;)e=y(e)?i++:e[t[i++]];return e}(e,i),s=i[i.length-1];a&&delete a[s];for(let l=0;l<i.slice(0,-1).length;l++){let n,o=-1,f=i.slice(0,-(l+1)),d=f.length-1;for(l>0&&(r=e);++o<f.length;){let c=f[o];n=n?n[c]:e[c],d===o&&(u(n)&&b(n)||Array.isArray(n)&&function(e){for(let t in e)if(!y(e[t]))return!1;return!0}(n))&&(r?delete r[c]:delete e[c]),r=n}}return e}function X(){let e=[],t=t=>{for(let r of e)r.next(t)},r=t=>(e.push(t),{unsubscribe(){e=e.filter(e=>e!==t)}}),i=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:i}}var Y=e=>l(e)||!n(e);function Z(e,t){if(Y(e)||Y(t))return e===t;if(s(e)&&s(t))return e.getTime()===t.getTime();let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let a of r){let l=e[a];if(!i.includes(a))return!1;if("ref"!==a){let n=t[a];if(s(l)&&s(n)||u(l)&&u(n)||Array.isArray(l)&&Array.isArray(n)?!Z(l,n):l!==n)return!1}}return!0}var ee=e=>{let t=e?e.ownerDocument:0,r=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof r},et=e=>"select-multiple"===e.type,er=e=>L(e)||a(e),ei=e=>ee(e)&&e.isConnected;function ea(e,t={}){let r=Array.isArray(e);if(u(e)||r)for(let i in e)Array.isArray(e[i])||u(e[i])&&!k(e[i])?(t[i]=Array.isArray(e[i])?[]:{},ea(e[i],t[i])):l(e[i])||(t[i]=!0);return t}var es=(e,t)=>(function e(t,r,i){let a=Array.isArray(t);if(u(t)||a)for(let s in t)Array.isArray(t[s])||u(t[s])&&!k(t[s])?y(r)||Y(i[s])?i[s]=Array.isArray(t[s])?ea(t[s],[]):{...ea(t[s])}:e(t[s],l(r)?{}:r[s],i[s]):Z(t[s],r[s])?delete i[s]:i[s]=!0;return i})(e,t,ea(t)),el=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>y(e)?e:t?""===e?NaN:e?+e:e:r&&A(e)?new Date(e):i?i(e):e;function en(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:N(t)?t.files:L(t)?H(e.refs).value:et(t)?[...t.selectedOptions].map(({value:e})=>e):a(t)?P(e.refs).value:el(y(t.value)?e.ref.value:t.value,e)}var eu=(e,t,r,i)=>{let a={};for(let s of e){let l=m(t,s);l&&E(a,s,l._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:i}},eo=e=>y(e)?void 0:B(e)?e.source:u(e)?B(e.value)?e.value.source:e.value:e,ef=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ed(e,t,r){let i=m(e,r);if(i||x(r))return{error:i,name:r};let a=r.split(".");for(;a.length;){let s=a.join("."),l=m(t,s),n=m(e,s);if(l&&!Array.isArray(l)&&r!==s)break;if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var ec=(e,t,r,i,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?i.isOnBlur:a.isOnBlur)?!e:(r?!i.isOnChange:!a.isOnChange)||e),ey=(e,t)=>!c(m(e,t)).length&&Q(e,t);let em={mode:v.onSubmit,reValidateMode:v.onChange,shouldFocusError:!0};function eh(e={}){let t=i.useRef(),[r,n]=i.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...em,...e},i={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},u=z(r.defaultValues)||{},f=r.shouldUnregister?{}:z(u),g={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},V=0,k={},S={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={watch:X(),array:X(),state:X()},D=J(r.mode),j=J(r.reValidateMode),L=r.criteriaMode===v.all,B=e=>t=>{clearTimeout(V),V=window.setTimeout(e,t)},M=async()=>{let e=!1;return S.isValid&&(e=r.resolver?b((await $()).errors):await ea(n,!0))!==i.isValid&&(i.isValid=e,x.state.next({isValid:e})),e},q=(e,t=[],r,a,s=!0,l=!0)=>{if(a&&r){if(g.action=!0,l&&Array.isArray(m(n,e))){let o=r(m(n,e),a.argA,a.argB);s&&E(n,e,o)}if(S.errors&&l&&Array.isArray(m(i.errors,e))){let d=r(m(i.errors,e),a.argA,a.argB);s&&E(i.errors,e,d),ey(i.errors,e)}if(S.touchedFields&&l&&Array.isArray(m(i.touchedFields,e))){let c=r(m(i.touchedFields,e),a.argA,a.argB);s&&E(i.touchedFields,e,c)}S.dirtyFields&&(i.dirtyFields=es(u,f)),x.state.next({isDirty:ev(e,t),dirtyFields:i.dirtyFields,errors:i.errors,isValid:i.isValid})}else E(f,e,t)},P=(e,t)=>{E(i.errors,e,t),x.state.next({errors:i.errors})},R=(e,t,r,i)=>{let a=m(n,e);if(a){let s=m(f,e,y(r)?m(u,e):r);y(s)||i&&i.defaultChecked||t?E(f,e,t?s:en(a._f)):eb(e,s),g.mount&&M()}},H=(e,t,r,a,s)=>{let l=!1,n={name:e},o=m(i.touchedFields,e);if(S.isDirty){let f=i.isDirty;i.isDirty=n.isDirty=ev(),l=f!==n.isDirty}if(S.dirtyFields&&(!r||a)){let d=m(i.dirtyFields,e),c=Z(m(u,e),t);c?Q(i.dirtyFields,e):E(i.dirtyFields,e,!0),n.dirtyFields=i.dirtyFields,l=l||d!==m(i.dirtyFields,e)}return r&&!o&&(E(i.touchedFields,e,r),n.touchedFields=i.touchedFields,l=l||S.touchedFields&&o!==r),l&&s&&x.state.next(n),l?n:{}},I=(r,a,s,l)=>{let n=m(i.errors,r),u=S.isValid&&T(a)&&i.isValid!==a;if(e.delayError&&s?(t=B(()=>P(r,s)))(e.delayError):(clearTimeout(V),t=null,s?E(i.errors,r,s):Q(i.errors,r)),(s?!Z(n,s):n)||!b(l)||u){let o={...l,...u&&T(a)?{isValid:a}:{},errors:i.errors,name:r};i={...i,...o},x.state.next(o)}k[r]--,S.isValidating&&!Object.values(k).some(e=>e)&&(x.state.next({isValidating:!1}),k={})},$=async e=>r.resolver?await r.resolver({...f},r.context,eu(e||p.mount,n,r.criteriaMode,r.shouldUseNativeValidation)):{},G=async e=>{let{errors:t}=await $();if(e)for(let r of e){let a=m(t,r);a?E(i.errors,r,a):Q(i.errors,r)}else i.errors=t;return t},ea=async(e,t,a={valid:!0})=>{for(let s in e){let l=e[s];if(l){let{_f:n,...u}=l;if(n){let o=p.array.has(n.name),d=await K(l,m(f,n.name),L,r.shouldUseNativeValidation,o);if(d[n.name]&&(a.valid=!1,t))break;t||(m(d,n.name)?o?U(i.errors,d,n.name):E(i.errors,n.name,d[n.name]):Q(i.errors,n.name))}u&&await ea(u,t,a)}}return a.valid},eh=()=>{for(let e of p.unMount){let t=m(n,e);t&&(t._f.refs?t._f.refs.every(e=>!ei(e)):!ei(t._f.ref))&&eE(e)}p.unMount=new Set},ev=(e,t)=>(e&&t&&E(f,e,t),!Z(eF(),u)),eg=(e,t,r)=>{let i={...g.mount?f:y(t)?u:A(e)?{[e]:t}:t};return _(e,p,i,r)},ep=t=>c(m(g.mount?f:u,t,e.shouldUnregister?m(u,t,[]):[])),eb=(e,t,r={})=>{let i=m(n,e),s=t;if(i){let u=i._f;u&&(u.disabled||E(f,e,el(t,u)),s=W&&ee(u.ref)&&l(t)?"":t,et(u.ref)?[...u.ref.options].forEach(e=>e.selected=s.includes(e.value)):u.refs?a(u.ref)?u.refs.length>1?u.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(s)?!!s.find(t=>t===e.value):s===e.value)):u.refs[0]&&(u.refs[0].checked=!!s):u.refs.forEach(e=>e.checked=e.value===s):N(u.ref)?u.ref.value="":(u.ref.value=s,u._c&&x.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&H(e,s,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&e_(e)},eV=(e,t,r)=>{for(let i in t){let a=t[i],l=`${e}.${i}`,u=m(n,l);!p.array.has(e)&&Y(a)&&(!u||u._f)||s(a)?eb(l,a,r):eV(l,a,r)}},ew=(e,t,r={})=>{let a=m(n,e),s=p.array.has(e),o=z(t);E(f,e,o),s?(x.array.next({name:e,values:f}),(S.isDirty||S.dirtyFields)&&r.shouldDirty&&(i.dirtyFields=es(u,f),x.state.next({name:e,dirtyFields:i.dirtyFields,isDirty:ev(e,o)}))):!a||a._f||l(o)?eb(e,o,r):eV(e,o,r),O(e,p)&&x.state.next({}),x.watch.next({name:e})},eA=async e=>{let a=e.target,s=a.name,l=m(n,s);if(l){let u,d;let c=a.type?en(l._f):o(e),y=e.type===h.BLUR||e.type===h.FOCUS_OUT,v=!ef(l._f)&&!r.resolver&&!m(i.errors,s)&&!l._f.deps||ec(y,m(i.touchedFields,s),i.isSubmitted,j,D),g=O(s,p,y);E(f,s,c),y?(l._f.onBlur&&l._f.onBlur(e),t&&t(0)):l._f.onChange&&l._f.onChange(e);let V=H(s,c,y,!1),w=!b(V)||g;if(y||x.watch.next({name:s,type:e.type}),v)return S.isValid&&M(),w&&x.state.next({name:s,...g?{}:V});if(!y&&g&&x.state.next({}),k[s]=k[s]?k[s]+1:1,x.state.next({isValidating:!0}),r.resolver){let{errors:A}=await $([s]),_=ed(i.errors,n,s),F=ed(A,n,_.name||s);u=F.error,s=F.name,d=b(A)}else u=(await K(l,m(f,s),L,r.shouldUseNativeValidation))[s],M();l._f.deps&&e_(l._f.deps),I(s,d,u,V)}},e_=async(e,t={})=>{let a,s;let l=w(e);if(x.state.next({isValidating:!0}),r.resolver){let u=await G(y(e)?e:l);a=b(u),s=e?!l.some(e=>m(u,e)):a}else e?((s=(await Promise.all(l.map(async e=>{let t=m(n,e);return await ea(t&&t._f?{[e]:t}:t)}))).every(Boolean))||i.isValid)&&M():s=a=await ea(n);return x.state.next({...!A(e)||S.isValid&&a!==i.isValid?{}:{name:e},...r.resolver||!e?{isValid:a}:{},errors:i.errors,isValidating:!1}),t.shouldFocus&&!s&&C(n,e=>e&&m(i.errors,e),e?l:p.mount),s},eF=e=>{let t={...u,...g.mount?f:{}};return y(e)?t:A(e)?m(t,e):e.map(e=>m(t,e))},ek=(e,t)=>({invalid:!!m((t||i).errors,e),isDirty:!!m((t||i).dirtyFields,e),isTouched:!!m((t||i).touchedFields,e),error:m((t||i).errors,e)}),eS=e=>{e?w(e).forEach(e=>Q(i.errors,e)):i.errors={},x.state.next({errors:i.errors})},ex=(e,t,r)=>{let a=(m(n,e,{_f:{}})._f||{}).ref;E(i.errors,e,{...t,ref:a}),x.state.next({name:e,errors:i.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},eD=(e,t)=>F(e)?x.watch.subscribe({next:r=>e(eg(void 0,t),r)}):eg(e,t,!0),eE=(e,t={})=>{for(let a of e?w(e):p.mount)p.mount.delete(a),p.array.delete(a),m(n,a)&&(t.keepValue||(Q(n,a),Q(f,a)),t.keepError||Q(i.errors,a),t.keepDirty||Q(i.dirtyFields,a),t.keepTouched||Q(i.touchedFields,a),r.shouldUnregister||t.keepDefaultValue||Q(u,a));x.watch.next({}),x.state.next({...i,...t.keepDirty?{isDirty:ev()}:{}}),t.keepIsValid||M()},eC=(e,t={})=>{let i=m(n,e),a=T(t.disabled);return E(n,e,{...i||{},_f:{...i&&i._f?i._f:{ref:{name:e}},name:e,mount:!0,...t}}),p.mount.add(e),i?a&&E(f,e,t.disabled?void 0:m(f,e,en(i._f))):R(e,!0,t.value),{...a?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:eo(t.min),max:eo(t.max),minLength:eo(t.minLength),maxLength:eo(t.maxLength),pattern:eo(t.pattern)}:{},name:e,onChange:eA,onBlur:eA,ref(a){if(a){eC(e,t),i=m(n,e);let s=y(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,l=er(s),o=i._f.refs||[];(l?o.find(e=>e===s):s===i._f.ref)||(E(n,e,{_f:{...i._f,...l?{refs:[...o.filter(ei),s,...Array.isArray(m(u,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),R(e,!1,void 0,s))}else(i=m(n,e,{}))._f&&(i._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(d(p.array,e)&&g.action)&&p.unMount.add(e)}}},eO=()=>r.shouldFocusError&&C(n,e=>e&&m(i.errors,e),p.mount),eU=(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let s=!0,l=z(f);x.state.next({isSubmitting:!0});try{if(r.resolver){let{errors:u,values:o}=await $();i.errors=u,l=o}else await ea(n);b(i.errors)?(x.state.next({errors:{},isSubmitting:!0}),await e(l,a)):(t&&await t({...i.errors},a),eO())}catch(d){throw s=!1,d}finally{i.isSubmitted=!0,x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:b(i.errors)&&s,submitCount:i.submitCount+1,errors:i.errors})}},eT=(e,t={})=>{m(n,e)&&(y(t.defaultValue)?ew(e,m(u,e)):(ew(e,t.defaultValue),E(u,e,t.defaultValue)),t.keepTouched||Q(i.touchedFields,e),t.keepDirty||(Q(i.dirtyFields,e),i.isDirty=t.defaultValue?ev(e,m(u,e)):ev()),!t.keepError&&(Q(i.errors,e),S.isValid&&M()),x.state.next({...i}))},eN=(t,r={})=>{let a=t||u,s=z(a),l=t&&!b(t)?s:u;if(r.keepDefaultValues||(u=a),!r.keepValues){if(r.keepDirtyValues)for(let o of p.mount)m(i.dirtyFields,o)?E(l,o,m(f,o)):ew(o,m(l,o));else{if(W&&y(t))for(let d of p.mount){let c=m(n,d);if(c&&c._f){let h=Array.isArray(c._f.refs)?c._f.refs[0]:c._f.ref;if(ee(h)){let v=h.closest("form");if(v){v.reset();break}}}}n={}}f=e.shouldUnregister?r.keepDefaultValues?z(u):{}:s,x.array.next({values:l}),x.watch.next({values:l})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!S.isValid||!!r.keepIsValid,g.watch=!!e.shouldUnregister,x.state.next({submitCount:r.keepSubmitCount?i.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?i.isDirty:!!(r.keepDefaultValues&&!Z(t,u)),isSubmitted:!!r.keepIsSubmitted&&i.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?i.dirtyFields:r.keepDefaultValues&&t?es(u,t):{},touchedFields:r.keepTouched?i.touchedFields:{},errors:r.keepErrors?i.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},ej=(e,t)=>eN(F(e)?e(f):e,t),eL=(e,t={})=>{let r=m(n,e),i=r&&r._f;if(i){let a=i.refs?i.refs[0]:i.ref;a.focus&&(a.focus(),t.shouldSelect&&a.select())}};return{control:{register:eC,unregister:eE,getFieldState:ek,_executeSchema:$,_focusError:eO,_getWatch:eg,_getDirty:ev,_updateValid:M,_removeUnmounted:eh,_updateFieldArray:q,_getFieldArray:ep,_subjects:x,_proxyFormState:S,get _fields(){return n},get _formValues(){return f},get _stateFlags(){return g},set _stateFlags(value){g=value},get _defaultValues(){return u},get _names(){return p},set _names(value){p=value},get _formState(){return i},set _formState(value){i=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:e_,register:eC,handleSubmit:eU,watch:eD,setValue:ew,getValues:eF,reset:ej,resetField:eT,clearErrors:eS,unregister:eE,setError:ex,setFocus:eL,getFieldState:ek}}(e),formState:r});let u=t.current.control;return u._options=e,!function(e){let t=i.useRef(e);t.current=e,i.useEffect(()=>{let r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:u._subjects.state,callback:i.useCallback(e=>{V(e,u._proxyFormState,!0)&&(u._formState={...u._formState,...e},n({...u._formState}))},[u])}),i.useEffect(()=>{u._stateFlags.mount||(u._proxyFormState.isValid&&u._updateValid(),u._stateFlags.mount=!0),u._stateFlags.watch&&(u._stateFlags.watch=!1,u._subjects.state.next({})),u._removeUnmounted()}),i.useEffect(()=>{r.submitCount&&u._focusError()},[u,r.submitCount]),t.current.formState=p(r,u),t.current}}}]);