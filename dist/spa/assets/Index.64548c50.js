import{k as se,i as Ce,W as ne,c as b,h as N,l as ue,X as Be,Z as Ne,g as de,r as F,V as Oe,o as $e,E as Qe,aj as Le,w as G,au as le,x as ee,S as He,z as Ke,ai as Ze,R as Me,Y as Ue,K as Ge,L as Ye,p as Fe,ah as We,d as ce,aB as pe,a2 as fe,a4 as H,a5 as me,a6 as Q,a9 as i,a7 as Z,ag as z,aa as X,ac as oe,F as ie,j as q,a8 as Te,af as Ie,aC as Se,a3 as ye,ad as xe,aD as be}from"./index.6185568e.js";import{k as Ve,u as Xe,x as Je,a as et,y as tt,c as at,b as nt,z as qe,t as je,B as ot,G as ge,H as he,I as _e,A as it,Q as st}from"./base-store.cb407e92.js";var ve=se({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:r}){const{proxy:{$q:v}}=de(),g=Ce(Be,ne);if(g===ne)return console.error("QPage needs to be a deep child of QLayout"),ne;if(Ce(Ne,ne)===ne)return console.error("QPage needs to be child of QPageContainer"),ne;const f=b(()=>{const y=(g.header.space===!0?g.header.size:0)+(g.footer.space===!0?g.footer.size:0);if(typeof e.styleFn=="function"){const I=g.isContainer.value===!0?g.containerHeight.value:v.screen.height;return e.styleFn(y,I)}return{minHeight:g.isContainer.value===!0?g.containerHeight.value-y+"px":v.screen.height===0?y!==0?`calc(100vh - ${y}px)`:"100vh":v.screen.height-y+"px"}}),s=b(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>N("main",{class:s.value,style:f.value},ue(r.default))}});const lt={ratio:[String,Number]};function rt(e,r){return b(()=>{const v=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(v)!==!0&&v>0?{paddingBottom:`${100/v}%`}:null})}const ut=1.7778;var dt=se({name:"QImg",props:{...lt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ut},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:v}){const g=F(e.initialRatio),d=rt(e,g),f=de(),{registerTimeout:s,removeTimeout:y}=Ve(),{registerTimeout:I,removeTimeout:w}=Ve(),$=b(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),h=b(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),P=[F(null),F($.value)],u=F(0),C=F(!1),j=F(!1),L=b(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),Y=b(()=>({width:e.width,height:e.height})),A=b(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),_=b(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function R(){if(w(),e.loadingShowDelay===0){C.value=!0;return}I(()=>{C.value=!0},e.loadingShowDelay)}function T(){w(),C.value=!1}function O({target:t}){le(f)===!1&&(y(),g.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,D(t,1))}function D(t,c){c===1e3||le(f)===!0||(t.complete===!0?te(t):s(()=>{D(t,c+1)},50))}function te(t){le(f)!==!0&&(u.value=u.value^1,P[u.value].value=null,T(),t.getAttribute("__qerror")!=="true"&&(j.value=!1),v("load",t.currentSrc||t.src))}function o(t){y(),T(),j.value=!0,P[u.value].value=h.value,P[u.value^1].value=$.value,v("error",t)}function n(t){const c=P[t].value,m={key:"img_"+t,class:A.value,style:_.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...c};return u.value===t?Object.assign(m,{class:m.class+"current",onLoad:O,onError:o}):m.class+="loaded",N("div",{class:"q-img__container absolute-full",key:"img"+t},N("img",m))}function l(){return C.value===!1?N("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ue(r[j.value===!0?"error":"default"])):N("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[N(Le,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){G(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,c=>{y(),j.value=!1,c===null?(T(),P[u.value^1].value=$.value):R(),P[u.value].value=c},{immediate:!0})};Oe.value===!0?$e(t):t()}return()=>{const t=[];return d.value!==null&&t.push(N("div",{key:"filler",style:d.value})),P[0].value!==null&&t.push(n(0)),P[1].value!==null&&t.push(n(1)),t.push(N(Qe,{name:"q-transition--fade"},l)),N("div",{key:"main",class:L.value,style:Y.value,role:"img","aria-label":e.alt},t)}}}),Ae=se({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:r}){const v=b(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>N(e.tag,{class:v.value},ue(r.default))}});const ze={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},re={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Pe=Object.keys(re);Pe.forEach(e=>{re[e].regex=new RegExp(re[e].pattern)});const ct=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Pe.join("")+"])|(.)","g"),Ee=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),ft={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function mt(e,r,v,g){let d,f,s,y,I,w;const $=F(null),h=F(u());function P(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}G(()=>e.type+e.autogrow,j),G(()=>e.mask,o=>{if(o!==void 0)L(h.value,!0);else{const n=D(h.value);j(),e.modelValue!==n&&r("update:modelValue",n)}}),G(()=>e.fillMask+e.reverseFillMask,()=>{$.value===!0&&L(h.value,!0)}),G(()=>e.unmaskedValue,()=>{$.value===!0&&L(h.value)});function u(){if(j(),$.value===!0){const o=T(D(e.modelValue));return e.fillMask!==!1?te(o):o}return e.modelValue}function C(o){if(o<d.length)return d.slice(-o);let n="",l=d;const t=l.indexOf(V);if(t!==-1){for(let c=o-l.length;c>0;c--)n+=V;l=l.slice(0,t)+n+l.slice(t)}return l}function j(){if($.value=e.mask!==void 0&&e.mask.length!==0&&P(),$.value===!1){y=void 0,d="",f="";return}const o=ze[e.mask]===void 0?e.mask:ze[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",l=n.replace(Ee,"\\$&"),t=[],c=[],m=[];let M=e.reverseFillMask===!0,p="",x="";o.replace(ct,(E,a,S,U,K)=>{if(U!==void 0){const B=re[U];m.push(B),x=B.negate,M===!0&&(c.push("(?:"+x+"+)?("+B.pattern+"+)?(?:"+x+"+)?("+B.pattern+"+)?"),M=!1),c.push("(?:"+x+"+)?("+B.pattern+")?")}else if(S!==void 0)p="\\"+(S==="\\"?"":S),m.push(S),t.push("([^"+p+"]+)?"+p+"?");else{const B=a!==void 0?a:K;p=B==="\\"?"\\\\\\\\":B.replace(Ee,"\\\\$&"),m.push(B),t.push("([^"+p+"]+)?"+p+"?")}});const J=new RegExp("^"+t.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),W=c.length-1,k=c.map((E,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+l+"*"+E):a===W?new RegExp("^"+E+"("+(x===""?".":x)+"+)?"+(e.reverseFillMask===!0?"$":l+"*")):new RegExp("^"+E));s=m,y=E=>{const a=J.exec(e.reverseFillMask===!0?E:E.slice(0,m.length+1));a!==null&&(E=a.slice(1).join(""));const S=[],U=k.length;for(let K=0,B=E;K<U;K++){const ae=k[K].exec(B);if(ae===null)break;B=B.slice(ae.shift().length),S.push(...ae)}return S.length!==0?S.join(""):E},d=m.map(E=>typeof E=="string"?E:V).join(""),f=d.split(V).join(n)}function L(o,n,l){const t=g.value,c=t.selectionEnd,m=t.value.length-c,M=D(o);n===!0&&j();const p=T(M),x=e.fillMask!==!1?te(p):p,J=h.value!==x;t.value!==x&&(t.value=x),J===!0&&(h.value=x),document.activeElement===t&&ee(()=>{if(x===f){const k=e.reverseFillMask===!0?f.length:0;t.setSelectionRange(k,k,"forward");return}if(l==="insertFromPaste"&&e.reverseFillMask!==!0){const k=t.selectionEnd;let E=c-1;for(let a=I;a<=E&&a<k;a++)d[a]!==V&&E++;A.right(t,E);return}if(["deleteContentBackward","deleteContentForward"].indexOf(l)!==-1){const k=e.reverseFillMask===!0?c===0?x.length>p.length?1:0:Math.max(0,x.length-(x===f?0:Math.min(p.length,m)+1))+1:c;t.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(J===!0){const k=Math.max(0,x.length-(x===f?0:Math.min(p.length,m+1)));k===1&&c===1?t.setSelectionRange(k,k,"forward"):A.rightReverse(t,k)}else{const k=x.length-m;t.setSelectionRange(k,k,"backward")}else if(J===!0){const k=Math.max(0,d.indexOf(V),Math.min(p.length,c)-1);A.right(t,k)}else{const k=c-1;A.right(t,k)}});const W=e.unmaskedValue===!0?D(x):x;String(e.modelValue)!==W&&(e.modelValue!==null||W!=="")&&v(W,!0)}function Y(o,n,l){const t=T(D(o.value));n=Math.max(0,d.indexOf(V),Math.min(t.length,n)),I=n,o.setSelectionRange(n,l,"forward")}const A={left(o,n){const l=d.slice(n-1).indexOf(V)===-1;let t=Math.max(0,n-1);for(;t>=0;t--)if(d[t]===V){n=t,l===!0&&n++;break}if(t<0&&d[n]!==void 0&&d[n]!==V)return A.right(o,0);n>=0&&o.setSelectionRange(n,n,"backward")},right(o,n){const l=o.value.length;let t=Math.min(l,n+1);for(;t<=l;t++)if(d[t]===V){n=t;break}else d[t-1]===V&&(n=t);if(t>l&&d[n-1]!==void 0&&d[n-1]!==V)return A.left(o,l);o.setSelectionRange(n,n,"forward")},leftReverse(o,n){const l=C(o.value.length);let t=Math.max(0,n-1);for(;t>=0;t--)if(l[t-1]===V){n=t;break}else if(l[t]===V&&(n=t,t===0))break;if(t<0&&l[n]!==void 0&&l[n]!==V)return A.rightReverse(o,0);n>=0&&o.setSelectionRange(n,n,"backward")},rightReverse(o,n){const l=o.value.length,t=C(l),c=t.slice(0,n+1).indexOf(V)===-1;let m=Math.min(l,n+1);for(;m<=l;m++)if(t[m-1]===V){n=m,n>0&&c===!0&&n--;break}if(m>l&&t[n-1]!==void 0&&t[n-1]!==V)return A.leftReverse(o,l);o.setSelectionRange(n,n,"forward")}};function _(o){r("click",o),w=void 0}function R(o){if(r("keydown",o),He(o)===!0||o.altKey===!0)return;const n=g.value,l=n.selectionStart,t=n.selectionEnd;if(o.shiftKey||(w=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&w===void 0&&(w=n.selectionDirection==="forward"?l:t);const c=A[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),c(n,w===l?t:l),o.shiftKey){const m=n.selectionStart;n.setSelectionRange(Math.min(w,m),Math.max(w,m),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&l===t?(A.left(n,l),n.setSelectionRange(n.selectionStart,t,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&l===t&&(A.rightReverse(n,t),n.setSelectionRange(l,n.selectionEnd,"forward"))}function T(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return O(o);const n=s;let l=0,t="";for(let c=0;c<n.length;c++){const m=o[l],M=n[c];if(typeof M=="string")t+=M,m===M&&l++;else if(m!==void 0&&M.regex.test(m))t+=M.transform!==void 0?M.transform(m):m,l++;else return t}return t}function O(o){const n=s,l=d.indexOf(V);let t=o.length-1,c="";for(let m=n.length-1;m>=0&&t!==-1;m--){const M=n[m];let p=o[t];if(typeof M=="string")c=M+c,p===M&&t--;else if(p!==void 0&&M.regex.test(p))do c=(M.transform!==void 0?M.transform(p):p)+c,t--,p=o[t];while(l===m&&p!==void 0&&M.regex.test(p));else return c}return c}function D(o){return typeof o!="string"||y===void 0?typeof o=="number"?y(""+o):o:y(o)}function te(o){return f.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?f.slice(0,-o.length)+o:o+f.slice(o.length)}return{innerValue:h,hasMask:$,moveCursorForPaste:Y,updateMaskValue:L,onMaskedKeydown:R,onMaskedClick:_}}function gt(e,r){function v(){const g=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(g)===g&&("length"in g?Array.from(g):[g]).forEach(f=>{d.items.add(f)}),{files:d.files}}catch{return{files:void 0}}}return r===!0?b(()=>{if(e.type==="file")return v()}):b(v)}var ke=se({name:"QInput",inheritAttrs:!1,props:{...Xe,...ft,...Je,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...et,"paste","change","keydown","click","animationend"],setup(e,{emit:r,attrs:v}){const{proxy:g}=de(),{$q:d}=g,f={};let s=NaN,y,I,w=null,$;const h=F(null),P=tt(e),{innerValue:u,hasMask:C,moveCursorForPaste:j,updateMaskValue:L,onMaskedKeydown:Y,onMaskedClick:A}=mt(e,r,p,h),_=gt(e,!0),R=b(()=>qe(u.value)),T=ot(m),O=at(),D=b(()=>e.type==="textarea"||e.autogrow===!0),te=b(()=>D.value===!0||["text","search","url","tel","password"].includes(e.type)),o=b(()=>{const a={...O.splitAttrs.listeners.value,onInput:m,onPaste:c,onChange:J,onBlur:W,onFocus:Me};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=T,C.value===!0&&(a.onKeydown=Y,a.onClick=A),e.autogrow===!0&&(a.onAnimationend=M),a}),n=b(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:P.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return D.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});G(()=>e.type,()=>{h.value&&(h.value.value=e.modelValue)}),G(()=>e.modelValue,a=>{if(C.value===!0){if(I===!0&&(I=!1,String(a)===s))return;L(a)}else u.value!==a&&(u.value=a,e.type==="number"&&f.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete f.value));e.autogrow===!0&&ee(x)}),G(()=>e.autogrow,a=>{a===!0?ee(x):h.value!==null&&v.rows>0&&(h.value.style.height="auto")}),G(()=>e.dense,()=>{e.autogrow===!0&&ee(x)});function l(){je(()=>{const a=document.activeElement;h.value!==null&&h.value!==a&&(a===null||a.id!==O.targetUid.value)&&h.value.focus({preventScroll:!0})})}function t(){h.value!==null&&h.value.select()}function c(a){if(C.value===!0&&e.reverseFillMask!==!0){const S=a.target;j(S,S.selectionStart,S.selectionEnd)}r("paste",a)}function m(a){if(!a||!a.target)return;if(e.type==="file"){r("update:modelValue",a.target.files);return}const S=a.target.value;if(a.target.qComposing===!0){f.value=S;return}if(C.value===!0)L(S,!1,a.inputType);else if(p(S),te.value===!0&&a.target===document.activeElement){const{selectionStart:U,selectionEnd:K}=a.target;U!==void 0&&K!==void 0&&ee(()=>{a.target===document.activeElement&&S.indexOf(a.target.value)===0&&a.target.setSelectionRange(U,K)})}e.autogrow===!0&&x()}function M(a){r("animationend",a),x()}function p(a,S){$=()=>{w=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==a&&s!==a&&(s=a,S===!0&&(I=!0),r("update:modelValue",a),ee(()=>{s===a&&(s=NaN)})),$=void 0},e.type==="number"&&(y=!0,f.value=a),e.debounce!==void 0?(w!==null&&clearTimeout(w),f.value=a,w=setTimeout($,e.debounce)):$()}function x(){requestAnimationFrame(()=>{const a=h.value;if(a!==null){const S=a.parentNode.style,{scrollTop:U}=a,{overflowY:K,maxHeight:B}=d.platform.is.firefox===!0?{}:window.getComputedStyle(a),ae=K!==void 0&&K!=="scroll";ae===!0&&(a.style.overflowY="hidden"),S.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",ae===!0&&(a.style.overflowY=parseInt(B,10)<a.scrollHeight?"auto":"hidden"),S.marginBottom="",a.scrollTop=U}})}function J(a){T(a),w!==null&&(clearTimeout(w),w=null),$!==void 0&&$(),r("change",a.target.value)}function W(a){a!==void 0&&Me(a),w!==null&&(clearTimeout(w),w=null),$!==void 0&&$(),y=!1,I=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{h.value!==null&&(h.value.value=u.value!==void 0?u.value:"")})}function k(){return f.hasOwnProperty("value")===!0?f.value:u.value!==void 0?u.value:""}Ke(()=>{W()}),$e(()=>{e.autogrow===!0&&x()}),Object.assign(O,{innerValue:u,fieldClass:b(()=>`q-${D.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:h,emitValue:p,hasValue:R,floatingLabel:b(()=>R.value===!0&&(e.type!=="number"||isNaN(u.value)===!1)||qe(e.displayValue)),getControl:()=>N(D.value===!0?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...o.value,...e.type!=="file"?{value:k()}:_.value}),getShadowControl:()=>N("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(D.value===!0?"":" text-no-wrap")},[N("span",{class:"invisible"},k()),N("span",e.shadowText)])});const E=nt(O);return Object.assign(g,{focus:l,select:t,getNativeElement:()=>h.value}),Ze(g,"nativeEl",()=>h.value),E}}),ht=se({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:r,emit:v}){const g=de(),d=F(null);let f=0;const s=[];function y(u){const C=typeof u=="boolean"?u:e.noErrorFocus!==!0,j=++f,L=(_,R)=>{v("validation"+(_===!0?"Success":"Error"),R)},Y=_=>{const R=_.validate();return typeof R.then=="function"?R.then(T=>({valid:T,comp:_}),T=>({valid:!1,comp:_,err:T})):Promise.resolve({valid:R,comp:_})};return(e.greedy===!0?Promise.all(s.map(Y)).then(_=>_.filter(R=>R.valid!==!0)):s.reduce((_,R)=>_.then(()=>Y(R).then(T=>{if(T.valid===!1)return Promise.reject(T)})),Promise.resolve()).catch(_=>[_])).then(_=>{if(_===void 0||_.length===0)return j===f&&L(!0),!0;if(j===f){const{comp:R,err:T}=_[0];if(T!==void 0&&console.error(T),L(!1,R),C===!0){const O=_.find(({comp:D})=>typeof D.focus=="function"&&le(D.$)===!1);O!==void 0&&O.comp.focus()}}return!1})}function I(){f++,s.forEach(u=>{typeof u.resetValidation=="function"&&u.resetValidation()})}function w(u){u!==void 0&&Fe(u);const C=f+1;y().then(j=>{C===f&&j===!0&&(e.onSubmit!==void 0?v("submit",u):u!==void 0&&u.target!==void 0&&typeof u.target.submit=="function"&&u.target.submit())})}function $(u){u!==void 0&&Fe(u),v("reset"),ee(()=>{I(),e.autofocus===!0&&e.noResetFocus!==!0&&h()})}function h(){je(()=>{if(d.value===null)return;const u=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),C=>C.tabIndex!==-1);u!=null&&u.focus({preventScroll:!0})})}Ue(We,{bindComponent(u){s.push(u)},unbindComponent(u){const C=s.indexOf(u);C!==-1&&s.splice(C,1)}});let P=!1;return Ge(()=>{P=!0}),Ye(()=>{P===!0&&e.autofocus===!0&&h()}),$e(()=>{e.autofocus===!0&&h()}),Object.assign(g.proxy,{validate:y,resetValidation:I,submit:w,reset:$,focus:h,getValidationComponents:()=>s}),()=>N("form",{class:"q-form",ref:d,onSubmit:w,onReset:$},ue(r.default))}});const vt=ge(),pt=ce({name:"Homepage",setup(){he();const e=b(()=>vt.getTheme);return{slide:F(1),autoplay:F(!0),isFullHeight:F(),enrollDialog:F(!1),name:F(""),phone:F(""),text:F(""),theme:e,aboutImageDesktop:F(""),aboutTextDesktop:F("")}},created(){this.$q.platform.is.desktop&&(this.aboutImageDesktop="about-image-desktop",this.aboutTextDesktop="about-image-desktop")},methods:{async submitForm(){try{if(this.name==""||this.phone==""||this.text==""){await pe.create({message:this.$t("dialog.empty"),position:"center"});return}const e="6409688318:AAF-CjpBJuT2exP2oZQ7r4cUHyR6orIaiD0",r="@voixfeedbacks",v=`\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ${this.name} \u0441 \u043D\u043E\u043C\u0435\u0440\u043E\u043C ${this.phone} \u043E\u0441\u0442\u0430\u0432\u0438\u043B \u0437\u0430\u044F\u0432\u043A\u0443. \u0422\u0435\u043A\u0441\u0442: ${this.text}.`;await this.$api.post(`https://api.telegram.org/bot${e}/sendMessage`,{chat_id:r,text:v}),this.name="",this.phone="",this.text="",await pe.create({message:this.$t("dialog.sent"),position:"center"})}catch(e){throw pe.create({message:`${e.message}`,position:"center"}),e}}}}),yt={id:"about"},xt=i("img",{src:"images/about.jpg",alt:"\u0424\u043E\u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",ratio:16/9,style:{"border-radius":"10px","max-width":"100%"}},null,-1),bt=[xt],kt={class:"text-container",style:{"max-width":"800px"}},wt={style:{"font-size":"40px"}},_t={class:"row",style:{display:"flex","flex-wrap":"wrap","justify-content":"center"}},$t={style:{"font-size":"30px","font-weight":"bold","margin-top":"0px","margin-bottom":"20px"}},St={style:{"font-size":"20px","white-space":"pre-line"}},Ct=i("hr",{style:{margin:"80px","margin-top":"0px"}},null,-1),Mt={id:"enroll"},Ft={class:"q-md row d-flex justify-center",style:{margin:"auto","max-width":"1500px","margin-top":"20px"}},Tt={class:"q-md col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center",style:{padding:"10px"}},Vt={class:"absolute-center",style:{background:"rgba(33, 33, 33, 0.8)"}},qt={style:{"font-size":"large","font-weight":"bold"}},zt={style:{"font-size":"large"}},Et={style:{"font-size":"medium","font-weight":"bold","text-shadow":"1px rgb(35, 35, 35)"}},Rt={class:"text-center"},Dt={class:"q-pa-md row items-start q-gutter-md"};function It(e,r,v,g,d,f){return H(),me(ve,null,{default:Q(()=>[i("section",yt,[i("div",{class:Z(`body-content ${e.aboutImageDesktop}`),style:{"padding-top":"20px"}},[i("div",{class:Z(`${e.aboutImageDesktop}`),style:{"max-width":"600px","margin-bottom":"20px","margin-inline":"10px"}},bt,2),i("div",kt,[i("p",wt,z(e.$t("about.title")),1),i("p",{class:Z(`text-container ${e.aboutTextDesktop}`),style:{"font-size":"23px"}},z(e.$t("about.text")),3)])],2)]),i("div",_t,[(H(),X(ie,null,oe(3,s=>i("div",{class:"custom-item text-center",key:s},[q(Se,{size:"170px",icon:e.$t(`list.icon${s}`)},null,8,["icon"]),i("p",$t,z(e.$t(`list.title${s}`)),1),i("p",St,z(e.$t(`list.text${s}`)),1)])),64))]),Ct,i("section",Mt,[i("div",Ft,[i("div",Tt,[q(_e,{dark:"",class:"my-card"},{default:Q(()=>[q(dt,{src:"images/feedback.jpg",alt:"\u0424\u043E\u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",ratio:16/12},{default:Q(()=>[i("div",Vt,[i("p",qt,z(e.$t("content.title")),1),i("p",zt,z(e.$t("content.text")),1),i("p",Et,[q(Te,{outline:"",rounded:"",color:"white",onClick:r[0]||(r[0]=s=>e.enrollDialog=!0),label:e.$t("content.show")},null,8,["label"])])])]),_:1})]),_:1})])])]),q(it,{modelValue:e.enrollDialog,"onUpdate:modelValue":r[4]||(r[4]=s=>e.enrollDialog=s)},{default:Q(()=>[q(_e,{class:Z(e.theme)},{default:Q(()=>[i("div",Rt,[q(Ae,{style:{"font-size":"30px"}},{default:Q(()=>[Ie(z(e.$t("dialog.title")),1)]),_:1}),i("div",Dt,[q(ht,{onSubmit:e.submitForm,class:"q-gutter-md",style:{"max-width":"600px",margin:"0 auto"}},{default:Q(()=>[q(ke,{modelValue:e.name,"onUpdate:modelValue":r[1]||(r[1]=s=>e.name=s),square:"",filled:"",type:"text",label:e.$t("dialog.name"),outlined:""},null,8,["modelValue","label"]),q(ke,{modelValue:e.phone,"onUpdate:modelValue":r[2]||(r[2]=s=>e.phone=s),square:"",filled:"",type:"tel",label:e.$t("dialog.phone"),outlined:""},null,8,["modelValue","label"]),q(ke,{modelValue:e.text,"onUpdate:modelValue":r[3]||(r[3]=s=>e.text=s),square:"",filled:"",type:"textarea",label:e.$t("dialog.text"),outlined:""},null,8,["modelValue","label"]),q(Te,{type:"submit",label:e.$t("dialog.button"),size:"large",class:"q-mt-md",style:{"background-color":"#000000",color:"#ffffff"},dense:"",flat:""},null,8,["label"])]),_:1},8,["onSubmit"])])])]),_:1},8,["class"])]),_:1},8,["modelValue"])]),_:1})}var jt=fe(pt,[["render",It]]);const we=ge(),At=ce({name:"Info",setup(){const e=he(),r=b(()=>we.getTheme),v=b(()=>we.getAltTheme),g=e.platform.is.desktop?"desktop":"mobile",d=we.getIconsInfo;return{theme:r,altTheme:v,deviceType:g,icons:d,aboutImageDesktop:F(""),aboutTextDesktop:F("")}},created(){this.$q.platform.is.desktop&&(this.aboutImageDesktop="about-image-desktop",this.aboutTextDesktop="about-image-desktop")},data(){return{links:["http://nodejs.org/","http://quasar.dev/","http://golang.org/","https://facebook.github.io/react/","http://www.postgresql.org/","https://www.java.com/"],images:["images/nodejs.svg","images/quasar.svg","images/golang.svg","images/react.svg","images/posgresql.svg","images/java.svg"]}}}),Pt={id:"about"},Bt=i("img",{src:"images/expertise.jpg",alt:"\u0424\u043E\u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",ratio:16/9,style:{"border-radius":"10px","max-width":"100%",height:"auto"}},null,-1),Nt=[Bt],Ot={class:"text-container",style:{"max-width":"800px","white-space":"pre-wrap"}},Qt={style:{"font-size":"40px"}},Lt={id:"about"},Ht=i("hr",{style:{"margin-inline":"100px","margin-top":"50px"}},null,-1),Kt={class:"body-content"},Zt={style:{"max-width":"800px"}},Ut={style:{"font-size":"34px","font-weight":"bolder","margin-top":"0px"}},Gt={class:"row",style:{display:"flex","flex-wrap":"wrap","justify-content":"center","white-space":"pre-wrap"}},Yt={class:"custom-item text-center"},Wt={style:{"font-size":"20px","font-weight":"bold","margin-top":"15px","margin-bottom":"10px"}},Xt=i("hr",{style:{"margin-inline":"100px","margin-bottom":"50px"}},null,-1),Jt={id:"about"},ea={class:"body-content"},ta=i("div",{style:{"max-width":"600px","margin-top":"20px","margin-bottom":"20px","margin-inline":"40px"}},[i("img",{src:"images/mobiledevelopment.jpg",alt:"\u0424\u043E\u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",ratio:16/9,style:{"border-radius":"10px","max-width":"100%",height:"auto"}})],-1),aa={class:"text-container",style:{"max-width":"800px","white-space":"pre-wrap"}},na={style:{"font-size":"40px","margin-top":"10px","margin-bottom":"30px"}},oa={style:{"font-size":"21px"}},ia={style:{"margin-top":"30px","margin-bottom":"20px"}},sa={style:{"font-size":"23px","font-weight":"bolder"}},la=i("br",null,null,-1),ra={id:"competency"},ua={class:"text-center"},da={class:"row justify-center q-gutter-sm"},ca=["href"],fa=["src"];function ma(e,r,v,g,d,f){return H(),me(ve,null,{default:Q(()=>[i("section",Pt,[i("div",{class:Z(`body-content ${e.aboutImageDesktop}`),style:{"padding-top":"20px"}},[i("div",{class:Z(`${e.aboutImageDesktop}`),style:{"max-width":"600px","margin-bottom":"20px","margin-inline":"40px"}},Nt,2),i("div",Ot,[i("p",Qt,z(e.$t("expertise.title")),1),i("p",{class:Z(`text-container ${e.aboutTextDesktop}`),style:{"font-size":"23px"}},z(e.$t("expertise.text")),3)])],2)]),i("section",Lt,[Ht,i("div",Kt,[i("div",Zt,[i("p",Ut,z(e.$t("softwareDevelopment.title")),1)]),i("div",Gt,[(H(!0),X(ie,null,oe(e.icons,(s,y)=>(H(),X("div",Yt,[q(Se,{size:"70px",icon:s.icon},null,8,["icon"]),i("p",Wt,z(e.$t(`softwareDevelopment.text${y+1}`)),1)]))),256))])]),Xt]),i("section",Jt,[i("div",ea,[ta,i("div",aa,[i("p",na,z(e.$t("mobileDevelopment.title")),1),i("p",oa,z(e.$t("mobileDevelopment.text1")),1),i("div",ia,[i("p",sa,z(e.$t("mobileDevelopment.text2")),1),(H(),X(ie,null,oe(7,s=>q(st,{square:"",ripple:!1,class:Z(`${e.altTheme} ${e.deviceType}`)},{default:Q(()=>[Ie(z(e.$t(`mobileDevelopment.chip${s}`)),1)]),_:2},1032,["class"])),64))])])])]),la,i("section",ra,[i("h3",ua,z(e.$t("competency.title")),1),i("div",da,[(H(),X(ie,null,oe(6,s=>q(_e,{flat:"",bordered:"",class:"col-4 col-sm-3 col-md-2",style:{border:"2px solid grey",margin:"20px"}},{default:Q(()=>[q(Ae,{class:Z(`${e.theme} row items-center justify-center`)},{default:Q(()=>[i("a",{href:e.links[s-1]},[i("img",{src:e.images[s-1],style:{height:"50px",width:"50px"}},null,8,fa)],8,ca)]),_:2},1032,["class"])]),_:2},1024)),64))])])]),_:1})}var ga=fe(At,[["render",ma]]);const Re=ge(),ha=ce({name:"GE",setup(){he();const e=b(()=>Re.getTheme),r=Re.getIconsGE;return{theme:e,icons:r}}}),va={id:"about"},pa=i("div",{style:{"max-width":"600px","margin-bottom":"20px"}},[i("img",{src:"images/ge1.jpg",alt:"\u0424\u043E\u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",ratio:16/9,style:{"border-radius":"10px","max-width":"100%",height:"auto"}})],-1),ya={class:"text-container",style:{"max-width":"800px"}},xa={style:{"font-size":"40px","margin-top":"10px"}},ba=i("br",null,null,-1),ka={id:"about"},wa={class:"body-content"},_a=i("div",{style:{"max-width":"700px","margin-bottom":"50px"}},[i("img",{src:"images/ge2.png",ratio:16/9,style:{"border-radius":"10px","max-width":"100%",height:"auto"}})],-1),$a={style:{"max-width":"800px"}},Sa={style:{"font-size":"34px","font-weight":"bolder","margin-top":"0px"}},Ca={class:"row",style:{display:"flex","flex-wrap":"wrap","justify-content":"center","white-space":"pre-wrap"}},Ma={style:{"font-size":"20px","font-weight":"bold","margin-top":"15px","margin-bottom":"10px"}};function Fa(e,r,v,g,d,f){return H(),me(ve,null,{default:Q(()=>[i("section",va,[i("div",{class:Z(`${e.theme} body-content`)},[pa,i("div",ya,[i("p",xa,z(e.$t("ge.title1")),1),(H(),X(ie,null,oe(3,s=>i("p",{style:{"font-size":"23px","margin-top":"25px","margin-bottom":"50px"},key:s},z(e.$t(`ge.text1p${s}`)),1)),64)),ba])],2)]),i("section",ka,[i("div",wa,[_a,i("div",$a,[i("p",Sa,z(e.$t("ge.title2")),1)]),i("div",Ca,[(H(!0),X(ie,null,oe(e.icons,(s,y)=>(H(),X("div",{key:s,class:"custom-item text-center"},[q(Se,{size:"70px",icon:s.icon},null,8,["icon"]),i("p",Ma,z(e.$t(`ge.li${y+1}`)),1)]))),128))])])])]),_:1})}var Ta=fe(ha,[["render",Fa]]);const De=ge(),Va=ce({name:"Index",setup(){he();const e=b(()=>De.getTheme),r=b(()=>De.getSectionChoice);return{theme:e,sectionChoice:r}},components:{Homepage:jt,Info:ga,GE:Ta}}),qa={id:"homepage"},za={id:"info"},Ea={id:"ge"};function Ra(e,r,v,g,d,f){const s=ye("Homepage"),y=ye("Info"),I=ye("GE");return H(),me(ve,null,{default:Q(()=>[xe(i("section",qa,[q(s)],512),[[be,e.sectionChoice=="homepage"]]),xe(i("section",za,[q(y)],512),[[be,e.sectionChoice=="info"]]),xe(i("section",Ea,[q(I)],512),[[be,e.sectionChoice=="ge"]])]),_:1})}var ja=fe(Va,[["render",Ra]]);export{ja as default};
