!function(t){function e(e){for(var i,a,o=e[0],l=e[1],u=e[2],h=0,d=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(c&&c(e);d.length;)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={3:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([193,0]),n()}({10:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=window.nodecg;window.NodeCG},11:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));var i=n(1);function s(t="value",e="input"){return i.a.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const r=s();e.a=r},119:function(t,e,n){"use strict";var i=n(79),s=n.n(i);e.default=s.a},120:function(t,e,n){"use strict";var i=n(80),s=n.n(i);e.default=s.a},121:function(t,e,n){"use strict";var i=n(81),s=n.n(i);e.default=s.a},122:function(t,e,n){"use strict";var i=n(82),s=n.n(i);e.default=s.a},123:function(t,e,n){"use strict";var i=n(83),s=n.n(i);e.default=s.a},124:function(t,e,n){"use strict";var i=n(84),s=n.n(i);e.default=s.a},13:function(t,e,n){"use strict";n.d(e,"b",(function(){return a}));var i=n(1),s=n(0);const r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(t=[]){return i.a.extend({name:"positionable",props:t.length?Object(s.h)(r,t):r})}e.a=a()},14:function(t,e,n){"use strict";var i=n(1),s=n(12),r=n(0);e.a=i.a.extend({name:"routable",directives:{Ripple:s.a},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},methods:{click(t){this.$emit("click",t)},generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,click:this.click},ref:"link"};if(void 0===this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,s=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),s=`${s} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,activeClass:i,exactActiveClass:s,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t="_vnode.data.class."+`${this.activeClass} ${this.proxyClass||""}`.trim();this.$nextTick(()=>{Object(r.j)(this.$refs.link,t)&&this.toggle()})},toggle:()=>{}}})},16:function(t,e,n){"use strict";n(36);var i=n(28),s=n(7),r=n(1).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{["elevation-"+this.elevation]:!0}}}}),a=n(24),o=n(23),l=n(5),u=n(2);e.a=Object(u.a)(i.a,s.a,r,a.a,o.a,l.a).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},18:function(t,e,n){"use strict";var i=n(16);e.a=i.a},193:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n(26),r=n(4),a=n(33),o=i.a.extend({}),l=n(8),u=n(119),c=n(9),h=n.n(c),d=n(45),v=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("\n    "+t._s(t.$t("alertText"))+"\n    "),n("br"),n("br"),t._v(t._s(t.$t("alertText2"))+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("div",{style:{float:"right"}},[n("v-btn",{on:{click:function(e){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])}),[],!1,null,null,null);"function"==typeof u.default&&Object(u.default)(v);var p=v.exports;h()(v,{VBtn:d.a});var f=i.a.extend({}),m=n(120),b=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v(t._s(t.$t("alertText")))]),t._v(" "),n("br"),t._v(" "),n("div",{style:{float:"right"}},[n("v-btn",{on:{click:function(e){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])}),[],!1,null,null,null);"function"==typeof m.default&&Object(m.default)(b);var g=b.exports;h()(b,{VBtn:d.a});var _=i.a.extend({}),x=n(121),y=Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("\n    "+t._s(t.$t("alertText"))+"\n    "),n("br"),n("br"),t._v(t._s(t.$t("alertText2"))+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("div",{style:{float:"right"}},[n("v-btn",{on:{click:function(e){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])}),[],!1,null,null,null);"function"==typeof x.default&&Object(x.default)(y);var $=y.exports;h()(y,{VBtn:d.a});var C=i.a.extend({props:{alertData:{type:Object,default:function(){return{}}}}}),k=n(122),B=Object(l.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("\n    "+t._s(t.$t("alertText"))+"\n    "),t.alertData.runData&&t.alertData.runData.game&&t.alertData.runData.category?n("div",{staticStyle:{"margin-top":"10px","font-style":"italic"}},[t.alertData.runData.game?n("span",[t._v("\n        "+t._s(t.alertData.runData.game)+"\n      ")]):t._e(),t._v(" "),t.alertData.runData.game&&t.alertData.runData.category?n("span",[t._v("\n        -\n      ")]):t._e(),t._v(" "),t.alertData.runData.category?n("span",[t._v("\n        "+t._s(t.alertData.runData.category)+"\n      ")]):t._e()]):t._e()]),t._v(" "),n("br"),t._v(" "),n("div",{style:{float:"right"}},[n("v-btn",{on:{click:function(e){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])}),[],!1,null,null,null);"function"==typeof k.default&&Object(k.default)(B);var w=B.exports;h()(B,{VBtn:d.a});var j=i.a.extend({}),O=n(123),S=Object(l.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v(t._s(t.$t("alertText")))]),t._v(" "),n("br"),t._v(" "),n("div",{style:{float:"right"}},[n("v-btn",{on:{click:function(e){return t.$emit("confirm")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("cancel"))+"\n    ")])],1)])}),[],!1,null,null,null);"function"==typeof O.default&&Object(O.default)(S);var T=S.exports;h()(S,{VBtn:d.a});var D=i.a.extend({}),z=n(124),E=Object(l.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v(t._s(t.$t("alertText")))]),t._v(" "),n("br"),t._v(" "),n("div",{style:{float:"right"}},[n("v-btn",{on:{click:function(e){return t.$emit("dismiss")}}},[t._v("\n      "+t._s(t.$t("ok"))+"\n    ")])],1)])}),[],!1,null,null,null);"function"==typeof z.default&&Object(z.default)(E);var A=E.exports;h()(E,{VBtn:d.a});var N=n(10),R=i.a.extend({data:function(){return{dialog:void 0,currentComponent:void 0,alertData:{},callbackFunc:void 0}},mounted:function(){var t=this;this.dialog=N.a.getDialog("alert-dialog"),window.open=function(e){return t.open(e)},this.dialog.getElementsByTagName("paper-dialog-scrollable")[0].style.marginBottom="12px",N.a.listenFor("triggerAlert",(function(e){t.open({name:e})}))},methods:{open:function(t){var e=this;this.dialog.open(),document.addEventListener("dialog-opened",(function(){e.currentComponent=function(t){switch(t){case"ImportConfirm":return p;case"ReturnToStartConfirm":return g;case"RemoveAllRunsConfirm":return $;case"RemoveRunConfirm":return w;case"TwitchLogoutConfirm":return T;case"NoTwitchGame":return A;default:return}}(t.name),e.callbackFunc=t.func,e.alertData=t.data?t.data:{}}),{once:!0}),document.addEventListener("dialog-confirmed",this.confirm,{once:!0}),document.addEventListener("dialog-dismissed",this.dismiss,{once:!0})},close:function(t){this.callbackFunc&&this.callbackFunc(t),this.dialog._updateClosingReasonConfirmed(t),this.dialog.close(),this.currentComponent=void 0,this.alertData={},this.callbackFunc=void 0},confirm:function(){document.removeEventListener("dialog-dismissed",this.dismiss)},dismiss:function(){document.removeEventListener("dialog-confirmed",this.confirm)}}}),L=n(210),F=Object(l.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n(t.currentComponent,{tag:"component",attrs:{"alert-data":t.alertData},on:{confirm:function(e){return t.close(!0)},dismiss:function(e){return t.close(!1)}}})],1)}),[],!1,null,null,null),V=F.exports;h()(F,{VApp:L.a}),r.a().then((function(){new i.a({vuetify:a.a,i18n:s.a,el:"#App",render:function(t){return t(V)}})}))},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var i=n(1),s=n(3);function r(t,e){return()=>Object(s.c)(`The ${t} component must be used inside a ${e}`)}function a(t,e,n){const s=e&&n?{register:r(e,n),unregister:r(e,n)}:null;return i.a.extend({name:"registrable-inject",inject:{[t]:{default:s}}})}function o(t,e=!1){return i.a.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},21:function(t,e,n){"use strict";n(69);var i=n(7),s=n(0);e.a=i.a.extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:Object(s.d)(this.calculatedSize),width:Object(s.d)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:"v-progress-circular__"+t,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},22:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(20);function s(t,e,n){return Object(i.a)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:()=>({isActive:!1}),computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}s("itemGroup")},23:function(t,e,n){"use strict";var i=n(1);e.a=i.a.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"==typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"==typeof e){const n=e.split(" ");for(const e of n)t.push("rounded-"+e)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},24:function(t,e,n){"use strict";var i=n(0),s=n(1);e.a=s.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=Object(i.d)(this.height),n=Object(i.d)(this.minHeight),s=Object(i.d)(this.minWidth),r=Object(i.d)(this.maxHeight),a=Object(i.d)(this.maxWidth),o=Object(i.d)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),s&&(t.minWidth=s),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},30:function(t,e,n){"use strict";var i=n(1);e.a=i.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},36:function(t,e,n){},39:function(t,e,n){},45:function(t,e,n){"use strict";n(39);var i=n(18),s=n(21).a,r=n(22),a=n(11),o=n(13),l=n(14),u=n(30),c=n(2),h=n(3);const d=Object(c.a)(i.a,l.a,o.a,u.a,Object(r.a)("btnToggle"),Object(a.b)("inputValue"));e.a=d.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...l.a.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},contained(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},isFlat(){return Boolean(this.icon||this.text||this.outlined)},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){[["flat","text"],["outline","outlined"],["round","rounded"]].forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(h.a)(t,e,this)})},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(s,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],n=this.isFlat?this.setTextColor:this.setBackgroundColor,{tag:i,data:s}=this.generateRouteLink();return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:n(this.color,s),e)}})},69:function(t,e,n){},79:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Importing will remove all currently added runs, continue?","alertText2":"The currently active run will not be modified."},"ja":{"alertText":"インポートを行うと現在追加されている走者情報が全て削除されますが、続行しますか？","alertText2":"現在実行中の走者情報は変更されません。"}}'),delete t.options._Ctor}},80:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Are you sure you want to return to the start?"},"ja":{"alertText":"走者情報を最初に戻してもよろしいですか？"}}'),delete t.options._Ctor}},81:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Are you sure you want to remove all runs?","alertText2":"This will also remove the currently active run."},"ja":{"alertText":"全ての走者情報を削除してもよろしいですか？","alertText2":"これは現在実行中の走者情報も削除します。"}}'),delete t.options._Ctor}},82:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Are you sure you want to delete this run?"},"ja":{"alertText":"この走者情報を削除してもよろしいですか？"}}'),delete t.options._Ctor}},83:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"Are you sure you want to logout from the Twitch integration?"},"ja":{"alertText":"Twitch連携をログアウトしてもよろしいですか？"}}'),delete t.options._Ctor}},84:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"alertText":"The Twitch game directory could not be set correctly, it has been set to default. Change this manually if possible."},"ja":{"alertText":"Twitchゲームカテゴリーを正しく設定することが出来なかった為、デフォルト設定に変更しました。可能であれば手動で変更してください。"}}'),delete t.options._Ctor}}});