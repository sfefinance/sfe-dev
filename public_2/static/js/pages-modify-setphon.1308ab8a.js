(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-modify-setphon"],{"1e21":function(t,e,n){"use strict";n.r(e);var i=n("72b0"),s=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=s.a},"245f":function(t,e,n){"use strict";(function(e){var i=n("4ea4").default,s=i(n("6f74")),o=n("b95e"),r=i(n("4c82"));t.exports={mixins:[s.default,r.default],methods:{getForum:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&(t.forum=e)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.navigateTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){r.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};t()},mpLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",t),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",t),uni.setStorageSync("rebind",e),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(t,e){var n=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var i=uni.getStorageSync("token");""!==i&&(n.data.attributes.token=i),this.login(n,e)}},getLoginBindParams:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var i=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===n&&(i.data.attributes.rebind=1);var s=uni.getStorageSync("token");""!==s&&(i.data.attributes.token=s),this.login(i,e)}},login:function(t,n){var i=this;this.$store.dispatch("session/h5Login",t).then((function(t){if(t&&t.data&&t.data.data&&t.data.data.id&&(i.logind(),i.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&t.set_site&&t.set_site.site_mode!==o.SITE_PAY&&uni.getStorage({key:"page",success:function(t){uni.redirectTo({url:t.data})}}),t&&t.set_site&&t.set_site.site_mode===o.SITE_PAY&&i.user&&!i.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:n,duration:2e3})),t&&t.data&&t.data.errors){if("401"===t.data.errors[0].status||"402"===t.data.errors[0].status||"500"===t.data.errors[0].status){var e=i.i18n.t("core.".concat(t.data.errors[0].code));uni.showToast({icon:"none",title:e,duration:2e3})}if("403"===t.data.errors[0].status||"422"===t.data.errors[0].status){var s=i.i18n.t("core.".concat(t.data.errors[0].code))||i.i18n.t(t.data.errors[0].detail[0]);uni.showToast({icon:"none",title:s,duration:2e3})}}})).catch((function(t){return e.log(t)}))}}}}).call(this,n("5a52").default)},"270c":function(t,e,n){"use strict";(function(t){var i;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));try{i={quiPage:n("29c4").default,quiInputCode:n("407a").default,quiButton:n("8397").default}}catch(e){if(-1===e.message.indexOf("Cannot find module")||-1===e.message.indexOf(".vue"))throw e;t.error(e.message),t.error("1. 排查组件名称拼写是否正确"),t.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),t.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("qui-page",{staticClass:"page-setphon",attrs:{"data-qui-theme":t.theme}},[n("v-uni-view",{staticClass:"new",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toggleBox.apply(void 0,arguments)}}},[t.phon?n("v-uni-view",{staticClass:"new-phon"},[n("v-uni-view",{staticClass:"new-phon-test"},[t._v(t._s(t.i18n.t("modify.newphonnumber")))]),n("v-uni-view",{staticClass:"new-phon-number"},[n("v-uni-input",{staticClass:"new-phon-num",attrs:{type:"number",focus:!0,cursor:1,maxlength:"11"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.changeinput.apply(void 0,arguments)}},model:{value:t.newphon,callback:function(e){t.newphon=e},expression:"newphon"}}),t.sun?n("v-uni-button",{staticClass:"new-phon-send",attrs:{disabled:t.disabtype,id:"TencentCaptcha","data-appid":t.forums.qcloud&&t.forums.qcloud.qcloud_captcha_app_id||""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendsms.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("modify.sendverificode")))]):n("v-uni-button",{staticClass:"new-phon-send",attrs:{disabled:!0}},[t._v(t._s(t.second+t.i18n.t("modify.retransmission")))])],1)],1):t._e(),t.formeerro?n("v-uni-view",{staticClass:"newphon-erro"},[t._v(t._s(t.formeerro))]):t._e(),n("v-uni-view",{staticClass:"new-input",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.fourse.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"new-input-test"},[t._v(t._s(t.i18n.t("modify.placeentercode")))]),n("qui-input-code",{ref:"quiinput",attrs:{title:t.tit,text:t.test,show:t.inshow,isiphonex:t.inisIphone},on:{getdata:function(e){arguments[0]=e=t.$handleEvent(e),t.btndata.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"new-button"},[n("qui-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dingphon.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("modify.submission")))])],1)],1)],1)},o=[]}).call(this,n("5a52").default)},"368d":function(t,e,n){t.exports=n.p+"static/img/msg-warning.f35ce51f.svg"},4548:function(t,e,n){"use strict";var i=n("4705");n.n(i).a},4705:function(t,e,n){var i=n("cd1a");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("4f06").default)("dff7eed8",i,!0,{sourceMap:!1,shadowMode:!1})},6354:function(t,e){},"6f74":function(t,e,n){"use strict";var i=n("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),n=uni.getStorageSync(i.STORGE_GET_USER_TIME);if(t||(e-n)/1e3>60){var s={include:"groups,wechat"},o=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:o}}),this.$store.dispatch("jv/get",["users/".concat(o),{params:s}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(i.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"72b0":function(t,e,n){"use strict";var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("3835"));n("ac1f"),n("5319");var o=n("4b36"),r=i(n("b469")),a=i(n("6354")),u={mixins:[r.default,a.default],data:function(){return{userid:"",iptValue:"",isFocus:!1,second:60,num:5,tit:!1,test:"",sun:!0,phon:!0,newphon:"",setnum:"",icon:"none",duration:2e3,inshow:!1,inisIphone:!1,typebind:"bind",disabtype:!0,formeerro:"",novice:"",interval:"",captcha:null,ticket:"",randstr:"",captchaResult:{}}},onLoad:function(t){var e=this;this.userid=this.usersid,this.typebind=t.type||"bind",this.$u.event.$on("captchaResult",(function(t){e.ticket=t.ticket,e.randstr=t.randstr,e.btnButton(),e.setphon()})),this.$u.event.$on("closeChaReault",(function(){uni.hideLoading()}))},computed:{usersid:function(){return this.$store.getters["session/get"]("userId")}},methods:{changeinput:function(){var t=this;setTimeout((function(){t.newphon=t.newphon.replace(/[^\d]/g,"")}),30),this.newphon.length<11?this.disabtype=!0:11===this.newphon.length&&(this.disabtype=!1,this.novice=this.newphon.replace(/\s+/g,""))},fourse:function(){this.inshow=!0},btndata:function(t){this.setnum=t},sendsms:function(){if(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.novice))if(this.forums.qcloud.qcloud_captcha){if(!this.ticket||!this.randstr)return this.verification(),!1}else this.second=60,this.btnButton(),this.setphon();else uni.showToast({icon:"none",title:this.i18n.t("modify.phonerro"),duration:2e3})},verification:function(){var t=this;this.captcha=new TencentCaptcha(this.forums.qcloud.qcloud_captcha_app_id,(function(e){0===e.ret&&(t.ticket=e.ticket,t.randstr=e.randstr,t.second=60,t.btnButton(),t.setphon()),e.ret})),this.captcha.show()},btnButton:function(){var t=this;clearInterval(this.interval),this.interval=setInterval((function(){t.second-=1}),1e3),setTimeout((function(){clearInterval(t.interval),t.sun=!0}),6e4)},dingphon:function(){this.newphon&&this.bindphon()},setphon:function(){var t=this,e={_jv:{type:"sms/send"},mobile:this.novice,type:this.typebind,captcha_ticket:this.ticket,captcha_rand_str:this.randstr};o.status.run((function(){return t.$store.dispatch("jv/post",e)})).then((function(e){t.num-=1,t.second=e._jv.json.data.attributes.interval,t.sun=!1,t.ticket="",t.randstr=""})).catch((function(e){if(500===e.statusCode){var n=(0,s.default)(e.data.errors,1),i=(0,s.default)(n[0].detail,1)[0];t.formeerro=i,t.sun=!0,uni.showToast({icon:t.icon,title:i,duration:t.duration})}else if(422===e.statusCode){uni.showToast({icon:t.icon,title:e.data.errors[0].detail[0],duration:t.duration});var o=(0,s.default)(e.data.errors,1),r=(0,s.default)(o[0].detail,1)[0];t.formeerro=r,t.sun=!0}}))},bindphon:function(){var t=this,e=this,n={_jv:{type:"sms/verify"},mobile:this.newphon,code:this.setnum,type:this.typebind};o.status.run((function(){return t.$store.dispatch("jv/post",n)})).then((function(n){if(n){uni.showToast({title:t.i18n.t("modify.phontitle"),duration:1e3});e.$store.dispatch("jv/get",{_jv:{type:"forum"}}).then((function(){}));var i={_jv:{type:"users",id:t.userid}};e.$store.dispatch("jv/get",i).then((function(){})),"bind"===t.typebind?uni.navigateBack({delta:1}):uni.navigateBack({delta:2})}})).catch((function(e){if(uni.showToast({icon:t.icon,title:t.i18n.t("modify.valifailed"),duration:2e3}),422===e.statusCode)if(t.tit=!0,e.data.errors.length>1){var n=(0,s.default)(e.data.errors,2),i=(0,s.default)(n[0].detail,1)[0],o=(0,s.default)(n[1].detail,1)[0];t.formeerro=i,t.test=o}else{var r=(0,s.default)(e.data.errors,1),a=(0,s.default)(r[0].detail,1)[0];t.test=a}else 500===e.statusCode&&(t.test=t.i18n.t("modify.validionerro")+t.num+t.i18n.t("modify.frequency"),t.tit=!0,t.empty(),t.num<0&&(t.test=t.i18n.t("modify.lateron"),t.empty()))}))},toggleBox:function(){this.inshow=!1},empty:function(){var t=this.$refs.quiinput;t.deleat()}},onUnload:function(){this.$u.event.$off("captchaResult"),this.$u.event.$off("closeChaReault"),this.captcha&&this.captcha.destroy()}};e.default=u},"913c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAFVBMVEVHcExGRkZGRkZGRkZFRUVGRkZHR0eRrgNKAAAABnRSTlMAFrndSYSvQ3G1AAACxUlEQVR42u2aQW/bMAyFbcfZ2YjRnBN09XnGNp+zS87e1uY82an+/0/YujiLBawS+QgTK8Z3K9r4K0XmiaKVZSaTyWQymUwmk8lkMplMJtN/pLv7zjP08AVgbDxX79mM0vO150JOAMQfeIw1wvBnhUC8r5bOyIs+cCBHEPLMYOQdCBkZ67XyqBj11cCQfuH6ZWb+iEN+LF2/L3JUSK0B6RQghVeAnBQgkrSTIUcFSN4pQGqvAGkUIGuvADkqQEqvAKkVIML6pUEKrwA5KUDEaadAYvU7PoT5+nyPQWJpH/usnP/60ytr6yT168ITy/CricshSJPop/ImPImcAMg62Rlu5oH8PYVOYluXpF1D2f3+8R0fUhIOHlMow+UTWz6kJvS4Uyi710N3EttqZ74zRD7hJLY1zCpwF/mEE9nW7clDrOKdyLZuj44FEoekt91pElBEA4lC8rS/DtNxsI/m0Am33T3Fg5yw2xoqQjE66W61J/xXTrq3z0IpgJ1xyx01NQCE2Df+mTcUfjnI1cEidfJGILLl2vICwRJf8ALBSrhkBgJ9GUm2MgpthWSQrdQgc3ogX2GrJxTxtZW4wvibVvrUe3t2C2+/ydTfHj1UaCORGqDOF6mFW6JEc3eeN3cV2twlrKWfL1GLtqmJb/1hvkJTKEDDHe8hqyDXLXp0iLvkIfiLSxkgkUSnqH1YtC16nIsa2DkMdYQPpmW8vPIm/G7WCwwLnr4HPz99AycS0rEdbYDTaEBWGhCVoZp4zvnvDDrFszsSpNCAZJ0GROWFQKkBUXlJIzQw6ouzRgOy0oDkGhBR6skQlRfMEgMjvyqXGBj9pb9g79rR70hsYQjjIgaees4VHLSKOZdjYANzHAhqYLy7V5vlVysLu2uyeh4kuwMYzDtk0II9V2wI94rix0eAYTKZTCaTyWQymUwmk8lkMr0l/QQpFrC5b3mvpgAAAABJRU5ErkJggg=="},"9c9f":function(t,e,n){"use strict";n.r(e);var i=n("c635"),s=n("1e21");for(var o in s)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(o);n("4548");var r=n("f0c5"),a=Object(r.a)(s.default,i.b,i.c,!1,null,"52b4c0b9",null,!1,i.a,void 0);e.default=a.exports},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},c635:function(t,e,n){"use strict";var i=n("270c");n.d(e,"a",(function(){return i.a})),n.d(e,"b",(function(){return i.b})),n.d(e,"c",(function(){return i.c}))},cd1a:function(t,e,n){(e=n("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.page-setphon[data-v-52b4c0b9] {background-color:var(--qui-BG-2);box-sizing:border-box}.page-setphon[data-v-52b4c0b9] .new{width:100vw;background-color:var(--qui-BG-2);box-sizing:border-box}.page-setphon[data-v-52b4c0b9] .new-phon{width:%?710?%;margin-left:%?40?%;font-size:%?52?%;font-weight:700;line-height:%?100?%;border-bottom:%?2?% solid var(--qui-BOR-ED);box-sizing:border-box}.page-setphon[data-v-52b4c0b9] .new-phon-test{font-size:%?30?%;font-weight:400;line-height:%?100?%;color:var(--qui-FC-777)}.page-setphon[data-v-52b4c0b9] .new-phon-number{display:-webkit-box;display:-webkit-flex;display:flex}.page-setphon[data-v-52b4c0b9] .new-phon-num{width:%?399?%;height:%?100?%;font-size:%?52?%;font-weight:700;line-height:%?100?%;color:var(--qui-FC-333)}.page-setphon[data-v-52b4c0b9] .newphon-erro{margin:%?20?% 0 0 %?40?%;font-size:%?26?%;font-weight:400;color:var(--qui-RED)}.page-setphon[data-v-52b4c0b9] .new-phon-send{display:block;height:%?70?%;min-width:%?180?%;margin:%?15?% %?20?% 0 %?50?%;font-size:%?30?%;font-weight:400;line-height:%?70?%;color:var(--qui-FC-FFF);text-align:center;background:var(--qui-BG-HIGH-LIGHT);background:#ea3d5a;border-radius:%?5?%}.page-setphon[data-v-52b4c0b9] .new-input{width:%?710?%;margin:0 0 0 %?40?%}.page-setphon[data-v-52b4c0b9] .new-input-test{font-size:%?30?%;font-weight:400;line-height:%?100?%;color:var(--qui-FC-777);opacity:1}.page-setphon[data-v-52b4c0b9] .new-vftion-input{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?100?%}.page-setphon[data-v-52b4c0b9] .new-button{margin:%?52?% %?40?% 0}.new-button[data-v-52b4c0b9] .qui-button--button[size="large"]{font-size:%?30?%;color:var(--qui-FC-FFF);border-radius:%?7?%}',""]),t.exports=e},e972:function(t,e,n){t.exports=n.p+"static/img/msg-404.3ba2611f.svg"}}]);