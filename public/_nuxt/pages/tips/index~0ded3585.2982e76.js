(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1067:function(t,e,o){"use strict";o(970)},1226:function(t,e,o){"use strict";o.r(e);var r={layout:"error_layout",computed:{isLogin:function(){return this.$store.getters["session/get"]("isLogin")},forums:function(){return this.$store.state.site.info.attributes||{}}},methods:{login:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type?this.$router.push("/user/login"):this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type?this.$router.push("/user/phone-login-register"):this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type?this.forums&&this.forums.passport&&this.forums.passport.oplatform_close&&this.forums.passport.offiaccount_close?this.$router.push("/user/wechat"):this.forums&&this.forums.qcloud&&this.forums.qcloud.qcloud_sms?this.$router.push("/user/phone-login-register"):this.$router.push("/user/login"):this.$router.push("/user/login")}}},n=(o(1067),o(11)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("svg-icon",{staticStyle:{"font-size":"100px"},attrs:{type:"lock"}}),t._v(" "),o("h1",{staticClass:"tip"},[t._v(t._s(t.$t("core.permission_denied3")))]),t._v(" "),o("span",{staticClass:"detail"},[t._v(t._s(t.$t("core.permission_denied4")))]),t._v(" "),t.isLogin?t._e():o("button",{on:{click:t.login}},[t._v("\n    "+t._s(t.$t("core.back_login"))+"\n  ")]),t._v(" "),t.isLogin?o("NuxtLink",{attrs:{to:"/"}},[o("button",[t._v("\n      "+t._s(t.$t("core.back_home"))+"\n    ")])]):t._e()],1)}),[],!1,null,"75db7c94",null);e.default=component.exports;installComponents(component,{SvgIcon:o(62).default})},970:function(t,e,o){}}]);