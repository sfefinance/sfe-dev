(window.webpackJsonp=window.webpackJsonp||[]).push([["pagesplay_web-AddTheTheme"],{"245f":function(t,e,i){"use strict";(function(e){var n=i("4ea4").default,s=n(i("6f74")),r=i("b95e"),o=n(i("4c82"));t.exports={mixins:[s.default,o.default],methods:{getForum:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&(t.forum=e)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.navigateTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){o.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};t()},mpLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",t),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",t),uni.setStorageSync("rebind",e),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(t,e){var i=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var n=uni.getStorageSync("token");""!==n&&(i.data.attributes.token=n),this.login(i,e)}},getLoginBindParams:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var n=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===i&&(n.data.attributes.rebind=1);var s=uni.getStorageSync("token");""!==s&&(n.data.attributes.token=s),this.login(n,e)}},login:function(t,i){var n=this;this.$store.dispatch("session/h5Login",t).then((function(t){if(t&&t.data&&t.data.data&&t.data.data.id&&(n.logind(),n.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&t.set_site&&t.set_site.site_mode!==r.SITE_PAY&&uni.getStorage({key:"page",success:function(t){uni.redirectTo({url:t.data})}}),t&&t.set_site&&t.set_site.site_mode===r.SITE_PAY&&n.user&&!n.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:i,duration:2e3})),t&&t.data&&t.data.errors){if("401"===t.data.errors[0].status||"402"===t.data.errors[0].status||"500"===t.data.errors[0].status){var e=n.i18n.t("core.".concat(t.data.errors[0].code));uni.showToast({icon:"none",title:e,duration:2e3})}if("403"===t.data.errors[0].status||"422"===t.data.errors[0].status){var s=n.i18n.t("core.".concat(t.data.errors[0].code))||n.i18n.t(t.data.errors[0].detail[0]);uni.showToast({icon:"none",title:s,duration:2e3})}}})).catch((function(t){return e.log(t)}))}}}}).call(this,i("5a52").default)},"368d":function(t,e,i){t.exports=i.p+"static/img/msg-warning.f35ce51f.svg"},"6f74":function(t,e,i){"use strict";var n=i("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),i=uni.getStorageSync(n.STORGE_GET_USER_TIME);if(t||(e-i)/1e3>60){var s={include:"groups,wechat"},r=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:r}}),this.$store.dispatch("jv/get",["users/".concat(r),{params:s}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(n.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},7686:function(t,e,i){var n=i("84cf");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("4f06").default)("9784d0f2",n,!0,{sourceMap:!1,shadowMode:!1})},"84cf":function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.notification-box[data-v-128f468b]{padding:%?30?%;color:var(--qui-FC-333);background-color:#fff;-webkit-transition:.4s;transition:.4s}.notification-box .addthethemw[data-v-128f468b]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?40?% 0;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-family:PingFang SC;font-size:%?26?%;font-weight:400;color:#333;border-bottom:%?2?% solid #eee}.notification-box .addthethemw .addtheth_right[data-v-128f468b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.notification-box .addth_botn[data-v-128f468b]{margin-left:%?37?%;font-family:PingFang SC;font-size:%?26?%;font-weight:400;color:#999}.notification-box .bottom_button[data-v-128f468b]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?50?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.notification-box .bottom_button[data-v-128f468b] .qui-button--button:after{border:none}',""]),t.exports=e},"8d5f":function(t,e,i){"use strict";(function(t){var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));try{n={quiPage:i("29c4").default,quiButton:i("8397").default}}catch(e){if(-1===e.message.indexOf("Cannot find module")||-1===e.message.indexOf(".vue"))throw e;t.error(e.message),t.error("1. 排查组件名称拼写是否正确"),t.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),t.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("qui-page",{attrs:{"data-qui-theme":t.theme}},[i("v-uni-view",{staticClass:"notification-box"},[t._l(25,(function(e){return i("v-uni-view",{key:e.id,staticClass:"addthethemw"},[i("v-uni-view",{staticClass:"addtheth_left"},[t._v("1.内含学习资料")]),i("v-uni-view",{staticClass:"addtheth_right"},[i("v-uni-view",{staticClass:"addth_botn"},[t._v("升序")]),i("v-uni-view",{staticClass:"addth_botn"},[t._v("降序")]),i("v-uni-view",{staticClass:"addth_botn"},[t._v("删除")])],1)],1)})),i("v-uni-view",{staticClass:"bottom_button"},[i("qui-button",{attrs:{type:"primary",size:"minpink",id:"TencentCaptcha"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.AddanexistingTheme.apply(void 0,arguments)}}},[t._v("添加已有主题")]),i("qui-button",{staticClass:"button2",attrs:{type:"primary",size:"minpink",id:"TencentCaptcha"}},[t._v("新建主题")])],1)],2)],1)},r=[]}).call(this,i("5a52").default)},"8efe":function(t,e,i){"use strict";var n=i("7686");i.n(n).a},"9aae":function(t,e,i){"use strict";var n=i("8d5f");i.d(e,"a",(function(){return n.a})),i.d(e,"b",(function(){return n.b})),i.d(e,"c",(function(){return n.c}))},b114:function(t,e,i){"use strict";i.r(e);var n=i("ba3a"),s=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=s.a},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},ba3a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{navTitle:""}},methods:{AddanexistingTheme:function(){uni.navigateTo({url:"/pagesplay_web/Addanexisting-theme"})}}};e.default=n},e7fb:function(t,e,i){"use strict";i.r(e);var n=i("9aae"),s=i("b114");for(var r in s)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("8efe");var o=i("f0c5"),a=Object(o.a)(s.default,n.b,n.c,!1,null,"128f468b",null,!1,n.a,void 0);e.default=a.exports},e972:function(t,e,i){t.exports=i.p+"static/img/msg-404.3ba2611f.svg"}}]);