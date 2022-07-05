import{f as it,g as st,h as re,u as ie,i as L,j as me,k as ut,l as b,m as ct,t as dt,n as x,q as Xe,s as Ue,v as ft,x as c,y as V,z as f,A as ge,B as vt,C as ht,D as Ve,E as pt,F as ae,G as Ke,H as gt,I as xt,J as Ye,V as Ee,K as _e,L as mt,M as wt,T as bt,N as H,O as q,P as $e}from"./index.b832e2a6.js";const yt=t=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),St={name:"Carousel",common:it,self:yt};var Ct=St;function Ae(t){return window.TouchEvent&&t instanceof window.TouchEvent}function Be(t,a){let o=t.clientWidth,r=t.clientHeight;if(a){const p=getComputedStyle(t);return o=o-parseFloat(p.getPropertyValue("padding-left"))-parseFloat(p.getPropertyValue("padding-right")),r=r-parseFloat(p.getPropertyValue("padding-top"))-parseFloat(p.getPropertyValue("padding-bottom")),{width:o,height:r}}return{width:o,height:r}}function Le(t,a,o){return t<a?a:t>o?o:t}function Rt(t){if(t===void 0)return 0;if(typeof t=="number")return t;const a=/^((\d+)?\.?\d+?)(ms|s)?$/,o=t.match(a);if(o){const[,r,,p="ms"]=o;return Number(r)*(p==="ms"?1:1e3)}return 0}function Me(t,a,o){return o?t===0?a-3:t===a-1?0:t-1:t}function je(t,a){return a?t+1:t}function Pt(t,a,o){return t<0?null:t===0?o?a-1:null:t-1}function It(t,a,o){return t>a-1?null:t===a-1?o?0:null:t+1}const zt=(...t)=>t,se=st("n-carousel-methods"),kt={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean};var Dt=re({name:"CarouselDots",props:kt,setup(t){const{mergedClsPrefixRef:a}=ie(t),o=L([]),r=me(se,null);function p(d,v){switch(d.key){case"Enter":case" ":r.to(v);return}t.keyboard&&C(d)}function R(d){t.trigger==="hover"&&r.to(d)}function y(d){t.trigger==="click"&&r.to(d)}function C(d){var v;const{code:S}=d,D=r.isVertical(),M=S==="PageUp"||S==="ArrowUp",j=S==="PageDown"||S==="ArrowDown",I=S==="PageUp"||S==="ArrowRight",m=S==="PageDown"||S==="ArrowLeft";if(D&&(M&&r.isNextDisabled()||j&&r.isPrevDisabled())||!D&&(I&&r.isNextDisabled()||m&&r.isPrevDisabled())||d.shiftKey||d.altKey||d.ctrlKey||d.metaKey)return;const P=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();P==="input"||P==="textarea"||((D?M:I)?(d.preventDefault(),r.next(),z(r.getCurrentIndex())):(D?j:m)&&(d.preventDefault(),r.prev(),z(r.getCurrentIndex())))}function z(d=t.currentIndex){const{value:v}=o;d>=0&&d<v.length&&v[d].focus()}return ut(()=>o.value.length=0),{mergedClsPrefix:a,dotEls:o,handleKeydown:p,handleMouseenter:R,handleClick:y}},render(){const{mergedClsPrefix:t,dotEls:a}=this;return b("div",{class:[`${t}-carousel__dots`,`${t}-carousel__dots--${this.dotType}`],role:"tablist"},ct(this.total,o=>{const r=o===this.currentIndex;return b("div",{"aria-selected":r,ref:p=>a.push(p),role:"button",tabindex:"0",class:[`${t}-carousel__dot`,r&&`${t}-carousel__dot--active`],key:o,onClick:()=>this.handleClick(o),onMouseenter:()=>this.handleMouseenter(o),onKeydown:p=>this.handleKeydown(p,o)})}))}});const Tt=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Nt=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})));var Vt=re({name:"CarouselArrow",setup(t){const{mergedClsPrefixRef:a}=ie(t),{isVertical:o,isPrevDisabled:r,isNextDisabled:p,prev:R,next:y}=me(se,null);return{mergedClsPrefix:a,isVertical:o,isPrevDisabled:r,isNextDisabled:p,prev:R,next:y}},render(){const{mergedClsPrefix:t}=this;return b("div",{class:`${t}-carousel__arrow-group`},b("div",{class:[`${t}-carousel__arrow`,this.isPrevDisabled()&&`${t}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Tt),b("div",{class:[`${t}-carousel__arrow`,this.isNextDisabled()&&`${t}-carousel__arrow--disabled`],role:"button",onClick:this.next},Nt))}}),Et=re({name:"CarouselItem",setup(t){const{mergedClsPrefixRef:a}=ie(t),o=me(se,null);o||dt("carousel-item","`n-carousel-item` must be placed inside `n-carousel`.");const r=L(),p=x(()=>{const{value:v}=r;return Boolean(v&&o.isPrev(v))}),R=x(()=>{const{value:v}=r;return Boolean(v&&o.isNext(v))}),y=x(()=>{const{value:v}=r;return Boolean(v&&o.isActive(v))}),C=x(()=>{const{value:v}=r;return v&&o.getSlideStyle(v)}),z=x(()=>{const{value:v}=r;return v&&o.getSlideIndex(v)});function d(v){const{value:S}=z;S!==void 0&&(o==null||o.onCarouselItemClick(S,v))}return Xe(()=>o.addSlide(r.value)),Ue(()=>{o.removeSlide(r.value)}),{mergedClsPrefix:a,selfElRef:r,isPrev:p,isNext:R,isActive:y,index:z,style:C,prevSlideStyle:o.prevSlideStyleRef,nextSlideStyle:o.nextSlideStyleRef,handleClick:d}},render(){var t;const{$slots:a,mergedClsPrefix:o,isPrev:r,isNext:p,isActive:R,index:y,style:C}=this,z=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:R,[`${o}-carousel__slide--prev`]:r,[`${o}-carousel__slide--next`]:p}];return b("div",{ref:"selfElRef",class:z,role:"option",tabindex:"-1","data-index":y,"aria-hidden":!R,style:[C,r?this.prevSlideStyle:"",p?this.nextSlideStyle:""],onClickCapture:this.handleClick},(t=a.default)===null||t===void 0?void 0:t.call(a,{isPrev:r,isNext:p,isActive:R,index:y}))}}),_t=ft("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 touch-action: pan-y;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[V("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[V("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[V("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 font-size: 18px;
 `,[V("svg",`
 height: 1em;
 width: 1em;
 `),V("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",[c("slides",`
 flex-direction: column;
 touch-action: pan-x;
 `),f("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[c("slides",[V(">",[V("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[V("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[V("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 `,[f("current",`
 opacity: 1;
 `)])]),f("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);const $t=zt("transitionDuration","transitionTimingFunction"),At=Object.assign(Object.assign({},Ke.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let xe=!1;var Mt=re({name:"Carousel",props:At,setup(t){const{mergedClsPrefixRef:a,inlineThemeDisabled:o}=ie(t),r=L(null),p=L([]),R={value:[]},y=x(()=>t.effect==="custom"),C=x(()=>!y.value&&t.effect==="slide"),z=x(()=>t.loop&&t.slidesPerView===1),d=x(()=>C.value&&z.value),v=x(()=>y.value||t.centeredSlides||t.effect!=="slide"?1:t.slidesPerView),S=x(()=>y.value?1:t.slidesPerView),D=x(()=>v.value==="auto"||t.slidesPerView==="auto"&&t.centeredSlides),M=x(()=>t.transitionStyle?$e(t.transitionStyle,$t):{}),j=x(()=>y.value?0:Rt(M.value.transitionDuration)),I=x(()=>t.direction==="vertical"),m=x(()=>I.value?"height":"width"),P=L({width:0,height:0}),k=x(()=>{const{value:e}=p,{length:n}=e;if(!n)return[];if(D.value)return e.map(h=>Be(h));const{value:l}=S,{value:u}=P,{value:s}=m;let i=u[s];if(l!=="auto"){const{spaceBetween:h}=t,w=i-(l-1)*h,g=1/Math.max(1,l);i=w*g}return e.map(()=>Object.assign(Object.assign({},u),{[s]:i}))}),E=x(()=>{const{value:e}=k,{length:n}=e;if(!n)return[];const{centeredSlides:l,spaceBetween:u}=t,{value:s}=m,{[s]:i}=P.value;let h=0;return e.map(({[s]:w})=>{let g=h;return l&&(g+=(w-i)/2),h+=w+u,g})});let we=!1;const be=x(()=>{const{value:e}=k,{length:n}=e;if(!n)return[];const{value:l}=m;if(y.value)return e.map(g=>({[l]:`${g[l]}px`}));const{effect:u,spaceBetween:s}=t,{value:i}=I,h=i?"bottom":"right",w=[];for(let g=0;g<n;g++){const X=e[g][l],Ne={[l]:`${X}px`,[`margin-${h}`]:`${s}px`};we&&(u==="fade"||u==="card")&&Object.assign(Ne,M.value),w.push(Ne)}return w}),A=x(()=>{const{value:e}=v,{length:n}=p.value;if(e!=="auto")return n-e+1;{const{value:l}=k,{length:u}=l;if(!u)return n;const{value:s}=E,{value:i}=m,h=P.value[i];let w=l[l.length-1][i],g=u;for(;g>1&&w<h;)g--,w+=s[g]-s[g-1];return g!==u&&g++,g<1&&(g=1),g}}),U=x(()=>{const{value:e}=A;return d.value&&e>3?e-2:e}),ue=t.defaultIndex+(d.value?1:0),_=L(Me(ue,A.value,d.value)),ye=L(ue),T=L(ue);let O=0;function G(e,n=j.value){var l,u;const{value:s}=A;if((e=Le(e,0,s-1))!==T.value){const{value:i}=_;d.value&&U.value>2&&(i===0&&e===U.value?e=0:i===U.value-1&&e===1&&(e=s-1));const h=_.value=Me(e,A.value,d.value);ye.value=e,T.value=je(h,d.value),C.value?fe(e,n):(!y.value&&n>0&&($=!0),ne()),h!==i&&((l=t["onUpdate:currentIndex"])===null||l===void 0||l.call(t,h,i),(u=t.onUpdateCurrentIndex)===null||u===void 0||u.call(t,h,i))}}function J(e=T.value){return Pt(e,A.value,t.loop)}function Q(e=T.value){return It(e,A.value,t.loop)}function Fe(e){const n=Y(e);return n!==null&&J()===n}function We(e){const n=Y(e);return n!==null&&Q()===n}function Se(e){return T.value===Y(e)}function Ze(e){return _.value===e}function Ce(){return J()===null}function Re(){return Q()===null}function K(e){const n=je(e,d.value);(e!==_.value||n!==T.value)&&G(n)}function ce(){const e=J();e!==null&&G(e)}function ee(){const e=Q();e!==null&&G(e)}const de=L({});let $=!1;function te(e,n=0){const l=t.direction==="vertical";de.value=Object.assign({},M.value,{transform:l?`translateY(${-e}px)`:`translateX(${-e}px)`,transitionDuration:`${n}ms`})}function ne(e=0){C.value?fe(T.value,e):O!==0&&te(O=0,e)}function fe(e,n=j.value){const l=Pe(e);l!==O&&n>0&&($=!0),te(l,n),O=Pe(T.value)}function Pe(e){let n;return e>=A.value-1?n=Ie():n=E.value[e]||0,n}function Ie(){if(v.value==="auto"){const{value:e}=m,{[e]:n}=P.value,{value:l}=E,u=l[l.length-1];let s;if(u===void 0)s=n;else{const{value:i}=k;s=u+i[i.length-1][e]}return s-n}else{const{value:e}=E;return e[A.value-1]||0}}function He(e){!e||p.value.push(e)}function qe(e){if(!e)return;const n=Y(e);n!==-1&&p.value.splice(n,1)}function Y(e){return typeof e=="number"?e:p.value.indexOf(e)}function Ge(e){const n=Y(e);if(n!==-1)return be.value[n]}function Je(e,n){let u=!$&&!(N&28);t.effect==="card"&&!y.value&&!(N&8)&&!Se(e)&&(K(e),u=!1),u||(n.preventDefault(),n.stopPropagation())}const ze={to:K,prev:()=>{(!$||!d.value)&&ce()},next:()=>{(!$||!d.value)&&ee()},isVertical:()=>I.value,isHorizontal:()=>!I.value,isPrev:Fe,isNext:We,isActive:Se,isPrevDisabled:Ce,isNextDisabled:Re,getCurrentIndex:()=>_.value,getSlideIndex:Y,getSlideStyle:Ge,addSlide:He,removeSlide:qe,onCarouselItemClick:Je,prevSlideStyleRef:ge(t,"prevSlideStyle"),nextSlideStyleRef:ge(t,"nextSlideStyle")};vt(se,ze);let oe=null;function F(e){oe&&(clearInterval(oe),oe=null);const{autoplay:n,interval:l}=t;n&&l&&!e&&(oe=window.setInterval(ee,l))}function ke(){const{autoplay:e}=t;e?F():U.value<2&&F(!0)}let ve=0,he=0,B=0,pe=0,N=1;function Qe(e){if(xe)return;pe=Date.now(),N=2,xe=!0,F(!0),e.type!=="touchstart"&&!e.target.isContentEditable&&e.preventDefault();const n=Ae(e)?e.touches[0]:e;I.value?he=n.clientY:ve=n.clientX,t.touchable&&(H("touchmove",document,le),H("touchend",document,W),H("touchcancel",document,W)),t.draggable&&(H("mousemove",document,le),H("mouseup",document,W))}function le(e){const{value:n}=I,l=n?"height":"width",u=P.value[l],s=Ae(e)?e.touches[0]:e,i=n?s.clientY-he:s.clientX-ve;B=Le(i,-u,u),N=4,C.value&&te(O-B,0)}function W(){const e=Date.now()-pe,{value:n}=m,{value:l}=T,{value:u}=C;let s=l;if(!$&&u&&B!==0){const i=O-B,h=[...E.value.slice(0,A.value-1),Ie()];let w=null;for(let g=0;g<h.length;g++){const X=Math.abs(h[g]-i);if(w!==null&&w<X)break;w=X,s=g}}if(s===l){const i=P.value[n];B>i/2||B/e>.4?s=J(l):(B<-i/2||B/e<-.4)&&(s=Q(l))}s!==null&&s!==l?(N=8,G(s)):(N&4?N=16:N=32,ne(j.value)),ke(),De()}function De(){N&1||(xe=!1,N&6&&(N=1)),ve=0,he=0,B=0,pe=0,q("touchmove",document,le),q("touchend",document,W),q("touchcancel",document,W),q("mousemove",document,le),q("mouseup",document,W)}function et(){const{value:e}=ye,{value:n}=T;$&&e!==n?fe(n,0):F(),C.value&&(de.value.transitionDuration="0ms"),$=!1}function tt(e){if(e.preventDefault(),$)return;const{value:n}=I;let{deltaX:l,deltaY:u}=e;e.shiftKey&&!l&&(l=u);const s=-1,i=1,h=(l||u)>0?i:s;let w=0,g=0;n?g=h:w=h;const X=10;(g*u>=X||w*l>=X)&&(h===i&&!Re()?ee():h===s&&!Ce()&&ce())}function nt(){P.value=Be(r.value,!0),F()}function ot(){var e,n;D.value&&((n=(e=k.effect).scheduler)===null||n===void 0||n.call(e),k.effect.run())}Xe(()=>{ht(ke),Ve(()=>we=!0)}),Ue(()=>{De(),F(!0)}),pt(()=>{const{value:e}=p,{value:n}=R,l=new Map,u=i=>l.has(i)?l.get(i):-1;let s=!1;for(let i=0;i<e.length;i++){const h=n.findIndex(w=>w.el===e[i]);h!==i&&(s=!0),l.set(e[i],h)}s&&e.sort((i,h)=>u(i)-u(h))}),ae(ge(t,"currentIndex"),e=>e!==void 0&&K(e)),ae(d,()=>void Ve(()=>K(_.value))),ae(E,()=>C.value&&ne(),{deep:!0}),ae(C,e=>{e?ne():($=!1,te(O=0))});const lt={arrowSlotProps:x(()=>Object.assign({total:U.value,currentIndex:_.value},$e(ze,["to","prev","next","isPrevDisabled","isNextDisabled"]))),dotSlotProps:x(()=>({total:U.value,currentIndex:_.value,to:K}))},at={getCurrentIndex:()=>_.value,to:K,prev:ce,next:ee},rt=Ke("Carousel","-carousel",_t,Ct,t,a),Te=x(()=>{const{common:{cubicBezierEaseInOut:e},self:{dotSize:n,dotColor:l,dotColorActive:u,dotColorFocus:s,dotLineWidth:i,dotLineWidthActive:h,arrowColor:w}}=rt.value;return{"--n-bezier":e,"--n-dot-color":l,"--n-dot-color-focus":s,"--n-dot-color-active":u,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":h,"--n-arrow-color":w}}),Z=o?gt("carousel",void 0,Te,t):void 0;return Object.assign(Object.assign(Object.assign({mergedClsPrefix:a,selfElRef:r,slideVNodes:R,duplicatedable:d,userWantsControl:y,autoSlideSize:D,displayIndex:_,realIndex:T,slideStyles:be,translateStyle:de,handleTouchstart:Qe,handleTransitionEnd:et,handleMousewheel:tt,handleResize:nt,handleSlideResize:ot,isActive:Ze},lt),at),{cssVars:o?void 0:Te,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender})},render(){var t;const{mergedClsPrefix:a,showArrow:o,userWantsControl:r,draggable:p,touchable:R,slideStyles:y,dotType:C,dotPlacement:z,transitionProps:d={},arrowSlotProps:v,dotSlotProps:S,$slots:{default:D,dots:M,arrow:j}}=this,I=D&&xt(D())||[];let m=Bt(I);m.length||(m=I.map(k=>b(Et,null,{default:()=>Ye(k)})));const{length:P}=m;return P>1&&this.duplicatedable&&(m.push(Oe(m[0],0,"append")),m.unshift(Oe(m[P-1],P-1,"prepend"))),this.slideVNodes.value=m,this.autoSlideSize&&(m=m.map(k=>b(Ee,{onResize:this.handleSlideResize},{default:()=>k}))),(t=this.onRender)===null||t===void 0||t.call(this),b("div",{ref:"selfElRef",class:[this.themeClass,`${a}-carousel`,this.direction==="vertical"&&`${a}-carousel--vertical`,this.showArrow&&`${a}-carousel--show-arrow`,`${a}-carousel--${z}`,`${a}-carousel--${this.direction}`,`${a}-carousel--${this.effect}`,r&&`${a}-carousel--usercontrol`],style:this.cssVars},b(Ee,{onResize:this.handleResize},{default:()=>b("div",{class:`${a}-carousel__slides`,role:"listbox",style:this.translateStyle,onMousedown:p?this.handleTouchstart:void 0,onTouchstart:R?this.handleTouchstart:void 0,onWheel:this.mousewheel?this.handleMousewheel:void 0,onTransitionend:this.handleTransitionEnd},r?m.map((k,E)=>b("div",{style:y[E],key:E},mt(b(bt,Object.assign({},d),{default:()=>k}),[[wt,this.isActive(E)]]))):m)}),this.showDots&&_e(M,S,()=>[S.total>1&&b(Dt,{key:C+z,total:S.total,currentIndex:S.currentIndex,dotType:C,trigger:this.trigger,keyboard:this.keyboard})]),o&&_e(j,v,()=>[b(Vt,null)]))}});function Bt(t,a=[]){return Array.isArray(t)&&t.forEach(o=>{o.type&&o.type.name==="CarouselItem"&&a.push(o)}),a}function Oe(t,a,o){return Ye(t,{key:`carousel-item-duplicate-${a}-${o}`})}export{Mt as N};
