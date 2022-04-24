(function(){"use strict";var t={8219:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var a=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center v-toolbar__title"},[t._v("Contact App For Test")]),n("v-spacer")],1),n("router-view")],1)},i=[],o=a.Z.extend({name:"App",components:{},data:function(){return{loading:!1,selection:1}}}),s=o,c=n(1001),l=n(3453),u=n.n(l),v=n(7524),d=n(7345),m=n(9762),p=(0,c.Z)(s,r,i,!1,null,null,null),f=p.exports;u()(p,{VApp:v.Z,VAppBar:d.Z,VSpacer:m.Z});var h=n(8345),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-form",{staticClass:"mt-14"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[t.isLoading?n("div",[n("v-progress-circular",{attrs:{indeterminate:t.isLoading,color:"primary"}})],1):t._e(),t.isLoading?t._e():n("div",[n("div",{staticClass:"title"},[t._v(t._s(t.count)+" Contact(s)")])])]),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"search...",outlined:"",clearable:""},on:{input:function(e){return t.onChange()},"click:clear":function(e){return t.restore()}},model:{value:t.change,callback:function(e){t.change=e},expression:"change"}})],1)],1)],1)],1),n("OneContact",{attrs:{contacts:t.contacts}})],1)},C=[],g=n(6198),b=(n(7327),n(1539),n(6699),n(2023),n(5666),n(6486)),Z=n.n(b),x=n(9669),w=n.n(x),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{"no-gutters":""}},t._l(t.contactsData,(function(e){return n("v-col",{key:e.id,attrs:{cols:3}},[n("v-card",{staticClass:"my-2",attrs:{"max-width":"280","max-height":"340",to:"/detail/"+e.id}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),n("v-img",{staticClass:"mx-1",attrs:{"max-height":"240","max-width":"280",src:""+e.avatar}}),n("v-card-title",[t._v(" "+t._s(e.first_name)+" "+t._s(e.last_name))]),n("v-card-text",[n("div",{staticClass:"my-0"},[n("v-icon",[t._v(" mdi-email ")]),t._v(" "+t._s(e.email)+" ")],1)])],2)],1)})),1)],1)},V=[],k=n(5706),O=a.Z.extend({name:"App",components:{},props:["contacts"],setup:function(t){var e=(0,k.Fl)((function(){return t.contacts}));return{contactsData:e}}}),T=O,j=n(3237),S=n(7118),L=n(2102),R=n(9846),B=n(6428),P=n(7047),$=n(1079),E=n(2877),H=(0,c.Z)(T,y,V,!1,null,"b270dc8e",null),A=H.exports;u()(H,{VCard:j.Z,VCardText:S.ZB,VCardTitle:S.EB,VCol:L.Z,VContainer:R.Z,VIcon:B.Z,VImg:P.Z,VProgressLinear:$.Z,VRow:E.Z});var F=n(5407),I=a.Z.extend({components:{OneContact:A},setup:function(){var t=(0,k.iH)(null),e=(0,k.iH)([]),n=(0,k.iH)(null),a=(0,k.iH)(!0);function r(){a.value=!0;var t=JSON.parse(localStorage.getItem("allContact"));e.value=t,a.value=!1,n.value=e.value.length}function i(){return o.apply(this,arguments)}function o(){return o=(0,g.Z)(regeneratorRuntime.mark((function i(){var o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!t.value){i.next=9;break}return a.value=!0,o=Z().filter(e.value,(function(e){return e.first_name.includes(t.value)||e.first_name.toLowerCase().includes(t.value)||e.last_name.includes(t.value)||e.last_name.toLowerCase().includes(t.value)})),e.value=o,a.value=!1,n.value=e.value.length,i.abrupt("return",{contacts:e,count:n});case 9:r();case 10:case"end":return i.stop()}}),i)}))),o.apply(this,arguments)}return(0,k.bv)((0,g.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:w()("https://random-data-api.com/api/users/random_user?size=100").then((function(t){e.value=t.data,a.value=!1,(0,F.y$C)("allContact",e.value),n.value=e.value.length}));case 1:case"end":return t.stop()}}),t)})))),{change:t,contacts:e,isLoading:a,count:n,restore:r,onChange:i}}}),D=I,M=n(6232),N=n(624),J=n(3913),z=(0,c.Z)(D,_,C,!1,null,"1e7ffad5",null),G=z.exports;u()(z,{VCol:L.Z,VContainer:R.Z,VForm:M.Z,VProgressCircular:N.Z,VRow:E.Z,VTextField:J.Z});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container mt-16"},[n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"col col-6"},[n("v-btn",{attrs:{depressed:"",to:"/home"}},[n("router-link",{attrs:{to:"/home"}}),n("v-icon",{attrs:{left:""}},[t._v(" mdi-arrow-left ")]),t._v("Go Back To Contact List")],1),n("v-card",{staticClass:"my-2",attrs:{"max-width":"600","max-height":"400"}},[n("template",{slot:"progress"}),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col col-4 align-self-center"},[n("v-img",{staticClass:"mx-1",attrs:{"max-width":"300",src:""+t.contact.avatar}})],1),n("div",{staticClass:"col"},[n("h1",{staticClass:"text-h4"},[t._v(" "+t._s(t.contact.first_name)+" "+t._s(t.contact.last_name)+" ")]),n("v-card-text",[n("v-card-item-subtitle",{staticClass:"ml-8"},[t._v("Phone")]),n("div",{staticClass:"my-0"},[n("v-icon",{staticClass:"mr-2 mb-2"},[t._v(" mdi-phone ")]),t._v(" "+t._s(t.contact.phone_number)+" ")],1)],1),n("v-card-text",[n("v-card-item-subtitle",{staticClass:"ml-8"},[t._v("Date Bird")]),n("div",{staticClass:"my-0"},[n("v-icon",{staticClass:"mr-2 mb-2"},[t._v(" mdi-cake ")]),t._v(" "+t._s(t.contact.date_of_birth)+" ")],1)],1),n("v-card-text",[n("v-card-item-subtitle",{staticClass:"ml-8"},[t._v("Social Number")]),n("div",{staticClass:"my-0"},[n("v-icon",{staticClass:"mr-2 mb-2"},[t._v(" mdi-card-account-details ")]),t._v(" "+t._s(t.contact.social_insurance_number)+" ")],1)],1),n("v-card-text",[n("v-card-item-subtitle",{staticClass:"ml-8"},[t._v("Job")]),n("div",{staticClass:"my-0"},[t.contact.employment?n("div",[n("v-icon",{staticClass:"mr-2 mb-2"},[t._v(" mdi-briefcase ")]),t._v(" "+t._s(t.contact.employment.title)+" ")],1):t._e()])],1)],1)])])],2)],1)])])])},K=[],Q=(n(9653),a.Z.extend({name:"DetailContact",components:{},setup:function(){var t=(0,k.iH)({}),e=(0,k.iH)(null);return(0,k.bv)((0,g.Z)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=Number(nt.app.$route.params.id),e.value=a,n.next=4,w()(" https://random-data-api.com/api/users/random_user?id=".concat(e.value)).then((function(e){t.value=e.data}));case 4:case"end":return n.stop()}}),n)})))),{contact:t,params:e}}})),U=Q,W=n(4345),X=(0,c.Z)(U,q,K,!1,null,null,null),Y=X.exports;u()(X,{VBtn:W.Z,VCard:j.Z,VCardText:S.ZB,VIcon:B.Z,VImg:P.Z}),a.Z.use(h.Z);var tt=[{path:"/home",component:G},{path:"/",redirect:"/home",name:"home",component:G},{path:"/detail/:id",component:Y},{path:"/",component:f,children:[{path:"/detail/:id",component:Y}]}],et=new h.Z({mode:"history",base:"/",routes:tt}),nt=et,at=n(858);a.Z.use(at.Z);var rt=new at.Z({});a.Z.config.productionTip=!1,new a.Z({router:nt,vuetify:rt,render:function(t){return t(f)}}).$mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,i){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],i=t[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(e&&e(a);l<o.length;l++)i=o[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},a=self["webpackChunktest_tsc"]=self["webpackChunktest_tsc"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8219)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.ee192942.js.map