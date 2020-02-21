(function(t){function e(e){for(var o,i,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);h&&h(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6abdf680"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var l=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var h=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"76b7":function(t,e,n){"use strict";var o=n("e9ae"),r=n.n(o);r.a},"85ec":function(t,e,n){},9962:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("d4ec"),r=n("bee2"),a=n("2b0e"),i=n("5a75"),c=n.n(i),s=function(){function t(){Object(o["a"])(this,t),console.log("AuthService constructor()"),this.applicationConfig={clientID:"1723e7cd-e4ea-4759-a11f-aa64ec41c4d5",graphScopes:["user.read"]},a["a"].use(c.a,{auth:{clientId:this.applicationConfig.clientID,requireAuthOnInitialize:!1,navigateToLoginRequestUrl:!1,redirectUri:"http://localhost:8080/",tokenRefreshUri:window.location.origin+"/auth.html",onAuthentication:function(t,e,n){console.log("MS Auth onAuthentication()"),n?console.log(n):e&&(console.log("error:"),console.log(e))}},scopes:this.applicationConfig.graphScopes,graph:{onResponse:function(t,e){console.log("MS GRAPH RESPONSE"),console.log(e)}}}),console.log("end of auth.service. constructor")}return Object(r["a"])(t,[{key:"login",value:function(){return console.log("login()"),console.log(this.$msal),this.$msal.loginPopup(this.applicationConfig.graphScopes).then((function(t){console.log("idToken:",t);var e=c.a.getUser();return e||null}),(function(){return null}))}},{key:"logout",value:function(){console.log("logout()"),this.$msal.signOut()}},{key:"getToken",value:function(){return this.$msal.acquireToken(this.applicationConfig.graphScopes).then((function(t){return t}),(function(t){}))}}]),t}()},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),c={},s=Object(i["a"])(c,r,a,!1,null,null,null),l=s.exports,u=(n("d3b7"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"svg_wrapper"},[n("svg",{staticClass:"logo",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"114px",height:"25px",viewBox:"0 0 471.4 109.8","enable-background":"new 0 0 471.4 109.8","xml:space":"preserve",fill:"#ffffff"}},[n("g",{attrs:{id:"FUEL"}},[n("path",{attrs:{d:"M13.4,74.5L52.1,5.3h99l-5.6,9.9H89.7l-8.2,14.7h29.9l-5.5,9.9H76L56.5,74.5H13.4z"}}),t._v(" "),n("path",{attrs:{d:"M248.5,5.3l-19.5,31.8c-4.7,7.6-8.5,13.4-11.5,17.5c-3.9,5.2-7.8,9.3-11.6,12.2c-4.9,3.7-10.8,6.4-17.6,8 c-6.5,1.6-14.9,2.4-25.1,2.5c-10,0.1-17.9-0.3-23.9-1.4c-7.7-1.3-13.3-3.7-16.9-7.2c-3.4-3.3-5-7.6-4.8-12.9 c0.2-5.8,2.5-12.7,7-20.7l16.7-29.9h43.1l-25.5,45.3c-1.4,2.5-2.1,4.7-2.1,6.7c0,2.2,0.8,4.1,2.5,5.7c2.9,2.8,7.7,4.2,14.1,4.2 c14.1,0,17.2-5.1,24.7-15.6l27.8-46.3H248.5z"}}),t._v(" "),n("path",{attrs:{d:"M238.8,74.5c-5,0-8.7-1.2-11.1-3.7c-1.6-1.6-2.5-3.5-2.7-5.6c-0.2-2.4,0.3-4.8,1.7-7.3l29.4-52.5h94.4l-5.5,9.9h-51.2 l-8.3,14.7h28.1l-5.5,9.9h-28.1l-11,19.7c-0.7,1.3-0.8,2.5-0.3,3.5c0.6,1,1.5,1.5,3,1.5h111l-5.6,9.9H238.8z"}}),t._v(" "),n("path",{attrs:{d:"M354.4,74.5c-5.5,0-9.3-1.8-11.5-5.5c-1-1.7-1.4-3.4-1.4-5.1c0-1.9,0.5-3.8,1.6-5.8l29.5-52.8h43.1l-30.2,54 c-0.8,1.5-1,2.8-0.4,3.8c0.5,1,1.6,1.5,3.1,1.5h68.5l-6,9.9H354.4z"}})]),t._v(" "),n("g",{attrs:{id:"MEDICAL"}},[n("path",{attrs:{d:"M258,95.5c-0.1-2.2-0.2-4.9-0.2-7.5h-0.1c-0.6,2.3-1.4,5-2.1,7.1l-2.2,7.2h-3.2l-2-7.1c-0.6-2.2-1.2-4.8-1.7-7.2h-0.1 c-0.1,2.5-0.2,5.3-0.3,7.6l-0.4,7h-3.8l1.2-18.4h5.5l1.8,6.1c0.6,2.1,1.1,4.4,1.6,6.6h0.1c0.5-2.1,1.1-4.5,1.7-6.6l1.9-6.1h5.4 l1,18.4h-4L258,95.5z"}}),t._v(" "),n("path",{attrs:{d:"M292.8,94.8h-6.8v4.4h7.5v3.4h-11.7V84.2h11.3v3.4h-7.2v3.8h6.8V94.8z"}}),t._v(" "),n("path",{attrs:{d:"M312.8,84.4c1.5-0.2,3.5-0.4,5.6-0.4c3.5,0,5.8,0.7,7.5,2c1.9,1.4,3.1,3.7,3.1,6.9c0,3.5-1.3,5.9-3,7.4 c-1.9,1.6-4.9,2.4-8.5,2.4c-2.2,0-3.7-0.1-4.7-0.3V84.4z M316.9,99.4c0.4,0.1,1,0.1,1.4,0.1c3.8,0,6.3-2,6.3-6.4 c0-3.8-2.2-5.8-5.8-5.8c-0.9,0-1.5,0.1-1.9,0.2V99.4z"}}),t._v(" "),n("path",{attrs:{d:"M352.2,84.2v18.4h-4.1V84.2H352.2z"}}),t._v(" "),n("path",{attrs:{d:"M385.6,102c-0.7,0.4-2.5,0.8-4.7,0.8c-6.3,0-9.6-4-9.6-9.2c0-6.3,4.5-9.7,10-9.7c2.2,0,3.8,0.4,4.5,0.8L385,88 c-0.8-0.4-2-0.7-3.5-0.7c-3.3,0-5.8,2-5.8,6.1c0,3.7,2.2,6,5.9,6c1.3,0,2.6-0.2,3.5-0.6L385.6,102z"}}),t._v(" "),n("path",{attrs:{d:"M409.3,97.8l-1.3,4.7h-4.3l5.6-18.4h5.4l5.7,18.4h-4.5l-1.4-4.7H409.3z M413.9,94.7l-1.1-3.9c-0.3-1.1-0.7-2.5-0.9-3.5 h-0.1c-0.3,1.1-0.5,2.5-0.8,3.5l-1.1,3.9H413.9z"}}),t._v(" "),n("path",{attrs:{d:"M439.2,84.2h4.1V99h7.3v3.5h-11.4V84.2z"}})])])]),n("UserAuth")],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"userAuth"},[n("h2",[t._v("Login")]),n("div",{staticClass:"mssignin-wrapper"},[n("button",{staticClass:"mssignin-button",on:{click:function(e){return t.msSignIn()}}},[t._v("Sign-In with Microsoft")])]),n("div",{staticClass:"input_wrapper"},[n("label",[n("span",[t._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("label",[n("span",[t._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"sign-in-button",on:{click:function(e){return t.postPost()}}},[t._v("Sign-In")])])])},f=[],g=n("d4ec"),v=n("bee2"),m=n("99de"),b=n("7e84"),w=n("262e"),y=n("9ab4"),_=n("60a3"),k=n("bc3a"),O=n.n(k),j=function(t){function e(){return Object(g["a"])(this,e),Object(m["a"])(this,Object(b["a"])(e).apply(this,arguments))}return Object(w["a"])(e,t),Object(v["a"])(e,[{key:"mounted",value:function(){this.email="email@email.com",this.password="password"}},{key:"postPost",value:function(){console.log("postPost()"),console.log("this.email:",this.email),console.log("this.password",this.password),O.a.post("http://jsonplaceholder.typicode.com/posts",{body:{email:this.email,password:this.password}}).then((function(t){console.log("server response:"),console.log(t)})).catch((function(t){console.log("errors:"),console.log(t)}))}},{key:"msSignIn",value:function(){console.log("msSignIn()"),this.$msal.isAuthenticated()||(console.log("This user is NOT authenticated!"),this.$msal.signIn())}}]),e}(_["b"]);j=Object(y["c"])([Object(_["a"])({data:function(){return{email:"",password:"",serverResponse:{}}}})],j);var S=j,x=S,M=(n("76b7"),Object(i["a"])(x,d,f,!1,null,"749f86ce",null)),C=M.exports,P={name:"Home",components:{UserAuth:C},data:function(){return{userInput:{email:"",password:""}}}},A=P,I=(n("d503"),Object(i["a"])(A,h,p,!1,null,"a5ecd204",null)),z=I.exports;o["a"].use(u["a"]);var $=[{path:"/",name:"Home",component:z},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("about").then(n.bind(null,"7277"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],H=new u["a"]({mode:"history",base:"/",routes:$}),T=H,E=n("9962"),L=function(){function t(){Object(g["a"])(this,t),this.graphUrl="https://graph.microsoft.com/v1.0/"}return Object(v["a"])(t,[{key:"getUserInfo",value:function(t){var e=new Headers({Authorization:"Bearer ".concat(t)}),n={headers:e};return fetch("".concat(this.graphUrl,"/me"),n).then((function(t){return t.json()})).catch((function(t){throw new Error(t.text())}))}}]),t}();o["a"].prototype.$http=O.a,o["a"].config.productionTip=!1,new o["a"]({router:T,render:function(t){return t(l)},data:function(){return{info:{},user:{},userInfo:null,apiCallFailed:!1,loginFailed:!1,token:null,authService:null}},created:function(){var t=this;console.log("app created"),this.authService=new E["a"],this.graphService=new L,console.log("user auth: ",this.$msal.isAuthenticated()),this.$msal.isAuthenticated()&&(console.log("user is authenticated"),this.$msal.acquireToken().then((function(e){console.log("token acquired!"),console.log(e),t.token=e,t.$router.push("/dashboard")})))},methods:{callAPI:function(){var t=this;this.apiCallFailed=!1,this.authService.getToken().then((function(e){t.graphService.getUserInfo(e).then((function(e){t.userInfo=e}),(function(e){console.error(e),t.apiCallFailed=!0}))}),(function(e){console.error(e),t.apiCallFailed=!0}))},logout:function(){console.log("do logout!"),this.authService.logout()},login:function(){var t=this;this.loginFailed=!1,this.authService.login().then((function(e){e?t.user=e:t.loginFailed=!0}),(function(){t.loginFailed=!0}))}},mounted:function(){var t=this;console.log("app mounted"),O.a.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){t.info=e}))}}).$mount("#app")},cd4e:function(t,e,n){},d503:function(t,e,n){"use strict";var o=n("cd4e"),r=n.n(o);r.a},e9ae:function(t,e,n){}});
//# sourceMappingURL=app.fec65613.js.map