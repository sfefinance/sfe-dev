(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1053:function(e,t,r){},1189:function(e,t,r){"use strict";r(1053)},1267:function(e,t,r){"use strict";r.r(t);r(24),r(53),r(54);var n=r(8),o=r(9),l=(r(31),r(34),r(25),r(13),r(108),r(253),r(39),r(5)),c=r(715),d=r.n(c),f=r(162);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m="user,user.groups,firstPost,firstPost.images,category,threadVideo,question,question.beUser,question.beUser.groups,firstPost.postGoods,threadAudio",_={name:"Index",layout:"custom_layout",mixins:[d.a],asyncData:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,l,c,d,h,_,I,w,y,F,k,j;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.store,o=e.params,f.a.isSpider||t(null,{}),l={"filter[isDeleted]":"no",sort:"-createdAt",include:m,"page[number]":1,"page[limit]":10,"filter[isApproved]":1,"filter[userId]":o.id},c={include:m,"page[number]":1,"page[limit]":10,"filter[isApproved]":1,"filter[user_id]":o.id},d={include:m,"page[number]":1,"page[limit]":20,"filter[isApproved]":1,"filter[userId]":o.id,"filter[type]":5,"filter[answer]":"yes"},r.prev=5,h={},r.next=9,n.dispatch("jv/get",["threads",{params:l}]);case 9:return _=r.sent,r.next=12,n.dispatch("jv/get",["threads/likes",{params:c}]);case 12:return I=r.sent,r.next=15,n.dispatch("jv/get",["threads",{params:d}]);case 15:return w=r.sent,r.next=18,n.dispatch("jv/get",["users/".concat(o.id),{}]);case 18:y=r.sent,Object.keys(y).length>0&&(h.profilename=y.username),Array.isArray(_)?h.threadsData=_:_&&_._jv&&_._jv.json&&((F=_._jv.json.data||[]).forEach((function(e,t){F[t]=v(v(v({},e),e.attributes),{},{firstPost:e.relationships.firstPost.data,user:e.relationships.user.data,_jv:{id:e.id}})})),h.threadsData=F),Array.isArray(I)?h.likethreadsData=I:I&&I._jv&&I._jv.json&&((k=I._jv.json.data||[]).forEach((function(e,t){k[t]=v(v(v({},e),e.attributes),{},{firstPost:e.relationships.firstPost.data,user:e.relationships.user.data,_jv:{id:e.id}})})),h.likethreadsData=k),Array.isArray(w)?h.askthreadData=w:w&&w._jv&&w._jv.json&&((j=w._jv.json.data||[]).forEach((function(e,t){j[t]=v(v(v({},e),e.attributes),{},{firstPost:e.relationships.firstPost.data,user:e.relationships.user.data,_jv:{id:e.id}})})),h.askthreadData=j),t(null,h),r.next=29;break;case 26:r.prev=26,r.t0=r.catch(5),t(null,{_error__abc:{error_keys:Object.keys(r.t0),error:String(r.t0),errno:r.t0.errno,code:r.t0.code,syscall:r.t0.syscall,address:r.t0.address,port:r.t0.port,config:r.t0.config,request_domain:(r.t0.request||{}).domain,request_keys:Object.keys(r.t0.request||{}),response_keys:Object.keys(r.t0.response||{})}});case 29:case"end":return r.stop()}}),r,null,[[5,26]])})))()},data:function(){return{userId:"",userInfo:"",current:"",activeName:"1",profilename:"‎",can_create_dialog:!1,can_create_thread_question:!1,canBeAsked:!1,headFixed:!1,loading:!1,dialog:{id:"",name:""},chatting:!1,offsetTop:0,isShield:!1,site_name:"",threadsData:[],likethreadsData:[],askthreadData:[],unbundlingArry:[],unbundUserData:[]}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}},currentLoginId:function(){return this.$store.getters["session/get"]("userId")}},watch:{$route:function(){this.$router.go(0)},forums:{handler:function(e){e.other&&e.other.can_create_dialog&&(this.can_create_dialog=!0),e.set_site&&e.set_site.site_name&&(this.site_name=e.set_site.site_name),e.other&&e.other.can_create_thread_question&&(this.can_create_thread_question=!0)},deep:!0,immediate:!0}},created:function(){var e=this.$route.query.current;this.userId=this.$route.params.id||"",this.current=e,this.activeName=this.current?this.current:this.activeName},mounted:function(){this.getAuth(),this.getUserInfo(this.userId),window.addEventListener("scroll",this.handleScroll),this.currentLoginId&&this.getShieldData()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{ask:function(){this.$router.push("/thread/postpay?type=5&beaskId=".concat(this.userId))},handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.headFixed=e>220},changeactive:function(){},getAuth:function(){this.forums.other&&this.forums.other.can_create_dialog?this.can_create_dialog=!0:this.can_create_dialog=!1},getUserInfo:function(e){var t=this;this.loading=!0;var r={include:"groups,dialog"};l.status.run((function(){return t.$store.dispatch("jv/get",["users/".concat(e),{params:r}]).then((function(e){e.isDeleted?t.$message.error("用户不存在"):(t.loading=!1,t.dialog.id=e.dialog?e.dialog._jv.id:0,t.dialog.name=e.username,t.profilename="".concat(t.dialog.name+t.$t("profile.myperson")," - ").concat(t.site_name),t.userInfo=e,t.userInfo.groupsName=t.userInfo.groups?t.userInfo.groups[0].name:"",t.canBeAsked=e.canBeAsked)}))})).catch((function(e){t.loading=!1,t.handleError(e)}))},addFollow:function(e){var t=this;if(localStorage.getItem("access_token"))if(this.isShield2)this.$message.error("你已被屏蔽");else{var r={_jv:{type:"follow"},type:"user_follow",to_user_id:e.id.toString()};this.$store.dispatch("jv/post",r).then((function(){t.getUserInfo(t.userId),t.$refs.followers&&t.$refs.followers.getFollowerList("change")}),(function(e){return t.handleError(e)}))}},deleteFollow:function(e){var t=this;localStorage.getItem("access_token")&&this.$store.dispatch("jv/delete","follow/".concat(e.id,"/1")).then((function(){t.getUserInfo(t.userId),t.$refs.followers&&t.$refs.followers.getFollowerList("change")}))},changeFollow:function(e){this.getUserInfo(e.userId)},changeLike:function(e){this.changeFollow(e)},chat:function(){localStorage.getItem("access_token")&&(0===this.dialog.id&&this.getChatInfo(this.userId),this.chatting=!0)},getShieldData:function(){var e=this;this.loading=!0,this.$store.dispatch("jv/get","users/".concat(this.currentLoginId,"/deny")).then((function(t){e.unbundUserData=[],e.unbundUserData.push(Number(e.currentLoginId));var r=JSON.parse(JSON.stringify(t));r.forEach((function(t,i){e.unbundUserData.push(r[i].id)}));var data=r.filter((function(t){return t.id.toString()===e.userId}));e.isShield=data.length>0}),(function(t){return e.handleError(t)})).finally((function(){e.loading=!1}))},handleShield:function(){var e=this;if(localStorage.getItem("access_token")){var t={_jv:{type:"users/".concat(this.userId,"/deny")}};this.$store.dispatch("jv/post",t).then((function(){e.getShieldData()}))}},unbundlingUser:function(){var e=this;localStorage.getItem("access_token")&&this.$store.dispatch("jv/delete","users/".concat(this.userId,"/deny")).then((function(){e.$t("profile.unboundsucceed"),e.getShieldData()}))},getChatInfo:function(e){var t=this;this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"dialog"}}]).then((function(e){e.isDeleted?t.$message.error("用户不存在"):t.dialog.id=e.dialog?e.dialog._jv.id:0}))}},head:function(){return{title:this.profilename}}},I=(r(1189),r(11)),component=Object(I.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"profile"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.headFixed,expression:"headFixed"}],staticClass:"isFixed"},[r("div",{staticClass:"headcon"},[r("div",{staticClass:"hinfo"},[r("Avatar",{staticClass:"avatar",attrs:{user:e.userInfo,size:40}}),e._v(" "),r("div",{staticClass:"profile-info"},[r("span",{staticClass:"info-name"},[e._v(e._s(e.userInfo.username||""))]),e._v(" "),r("span",{staticClass:"info-actor"},[e._v("\n            "+e._s(e.userInfo.groups&&e.userInfo.groups[0]&&e.userInfo.groups[0].isDisplay?e.userInfo.groupsName:"")+"\n          ")])])],1),e._v(" "),r("el-tabs",{staticClass:"register-select",attrs:{type:"border-card"},on:{"tab-click":e.changeactive},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:e.$t("profile.topic")+" ("+(e.userInfo.threadCount||0)+")",name:"1"}}),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("profile.question")+" ("+(e.userInfo.questionCount||0)+")",name:"2"}}),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("profile.likes")+" ("+(e.userInfo.likedCount||0)+")",name:"3"}}),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("profile.following")+" ("+(e.userInfo.followCount||0)+")",name:"4"}}),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("profile.followers")+" ("+(e.userInfo.fansCount||0)+")",name:"5"}})],1),e._v(" "),e.userId!==e.currentLoginId?r("div",{staticClass:"profile-btn2"},[r("el-button",{staticClass:"h-button2",attrs:{type:"primary",plain:"",size:"small",disabled:!e.currentLoginId},on:{click:function(t){0==e.userInfo.follow?e.addFollow(e.userInfo):e.deleteFollow(e.userInfo)}}},[e._v("\n          "+e._s(0==e.userInfo.follow?"+ "+e.$t("profile.following"):1==e.userInfo.follow?e.$t("profile.followed"):e.$t("profile.mutualfollow")))]),e._v(" "),e.can_create_dialog?r("el-button",{staticClass:"h-button1",attrs:{type:"primary",plain:"",size:"small"},on:{click:e.chat}},[e._v(e._s(e.$t("profile.privateMessage")))]):e._e()],1):e._e()],1)]),e._v(" "),e.userInfo&&e.forums?r("div",{staticClass:"profile-h"},[r("Avatar",{staticClass:"avatar",attrs:{user:e.userInfo,size:80,round:!0}}),e._v(" "),r("div",{staticClass:"profile-info"},[r("span",{staticClass:"info-name"},[e._v("\n        "+e._s(e.userInfo.username||"")+"\n      ")]),e._v(" "),r("span",{staticClass:"info-actor"},[e.userInfo&&e.userInfo.isReal?r("svg-icon",{staticClass:"auth-icon",attrs:{type:"auth"}}):e._e(),e._v(" "),r("span",{staticClass:"groupname"},[e._v("\n          "+e._s(e.userInfo.groups&&e.userInfo.groups[0]&&e.userInfo.groups[0].isDisplay?e.userInfo.groupsName:"")+"\n        ")])],1),e._v(" "),e.userInfo.signature?r("p",{staticClass:"info-content"},[e._v("\n        "+e._s(e.userInfo.signature)+"\n      ")]):e._e()]),e._v(" "),e.userId!=e.currentLoginId?r("div",{staticClass:"profile-btn"},[e.isShield?r("div",{staticClass:"shield",on:{click:e.unbundlingUser}},[r("svg-icon",{staticClass:"unshield-icon",attrs:{type:"unshield"}}),e._v(e._s(e.$t("profile.deleteshield"))+"\n      ")],1):r("div",{staticClass:"shield",on:{click:e.handleShield}},[r("svg-icon",{staticClass:"canshield-icon",attrs:{type:"canshield"}}),e._v(e._s(e.$t("profile.shield"))+"\n      ")],1),e._v(" "),e.userInfo?r("el-button",{staticClass:"h-button2",attrs:{type:"primary",plain:"",size:"small",disabled:!e.currentLoginId},on:{click:function(t){0==e.userInfo.follow?e.addFollow(e.userInfo):e.deleteFollow(e.userInfo)}}},[e._v("\n        "+e._s(0==e.userInfo.follow?"+ "+e.$t("profile.following"):1==e.userInfo.follow?e.$t("profile.followed"):e.$t("profile.mutualfollow")||""))]):e._e(),e._v(" "),e.can_create_dialog?r("el-button",{staticClass:"h-button1",attrs:{type:"primary",plain:"",size:"small"},on:{click:e.chat}},[e._v(e._s(e.$t("profile.privateMessage")))]):e._e(),e._v(" "),e.can_create_thread_question&&e.canBeAsked?r("el-button",{staticClass:"h-button1 width",attrs:{type:"primary",plain:"",size:"small"},on:{click:e.ask}},[e._v("向Ta提问")]):e._e()],1):e._e(),e._v(" "),e.chatting?r("chat-box",{attrs:{dialog:e.dialog||{}},on:{close:function(t){e.chatting=!1}}}):e._e()],1):e._e(),e._v(" "),e.userInfo&&e.forums?r("div",{staticClass:"profile-c"},[r("div",{staticClass:"profile-cc"},[r("el-tabs",{staticClass:"register-select",attrs:{type:"border-card"},on:{"tab-click":e.changeactive},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:e.$t("profile.topic")+"  ("+(e.userInfo.threadCount||0)+")",name:"1"}},["1"===e.activeName?r("topic",{ref:"topic",attrs:{"user-id":e.userId,"thread-data":e.threadsData},on:{changeLike:e.changeLike}}):e._e()],1),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("profile.question")+"  ("+(e.userInfo.questionCount||0)+")",name:"2"}},["2"===e.activeName?r("question",{ref:"question",attrs:{"user-id":e.userId},on:{changeLike:e.changeLike}}):e._e()],1),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("profile.likes")+"  ("+(e.userInfo.likedCount||0)+")",name:"3"}},["3"===e.activeName?r("like",{ref:"like",attrs:{"user-id":e.userId,"likethreads-data":e.likethreadsData},on:{changeFollow:e.changeFollow}}):e._e()],1),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("profile.following")+"  ("+(e.userInfo.followCount||0)+")",name:"4"}},["4"===e.activeName?r("following",{ref:"following",attrs:{"user-id":e.userId},on:{changeFollow:e.changeFollow}}):e._e()],1),e._v(" "),r("el-tab-pane",{attrs:{label:e.$t("profile.followers")+"  ("+(e.userInfo.fansCount||0)+")",name:"5"}},["5"===e.activeName?r("follwers",{ref:"followers",attrs:{"user-id":e.userId},on:{changeFollow:e.changeFollow}}):e._e()],1)],1)],1),e._v(" "),r("div",{staticClass:"profileside"},[r("advertising"),e._v(" "),r("recommend-user",{staticClass:"recomusr"}),e._v(" "),r("copyright",{attrs:{forums:e.forums}})],1)]):e._e()])}),[],!1,null,"7b73133a",null);t.default=component.exports;installComponents(component,{Avatar:r(254).default,SvgIcon:r(62).default,ChatBox:r(900).default,Topic:r(1220).default,Question:r(1221).default,Like:r(1222).default,Following:r(1223).default,Follwers:r(1224).default,Advertising:r(762).default,RecommendUser:r(857).default,Copyright:r(763).default})},717:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return l}));r(52),r(159);var n=function(time){var e=((window.currentTime||new Date)-new Date(time))/1e3;return 0===parseInt(e)?"刚刚发布":parseInt(e)<60?"".concat(parseInt(e),"秒前"):parseInt(e/60)<60?"".concat(parseInt(e/60),"分钟前"):parseInt(e/60/60)<16?"".concat(parseInt(e/60/60),"小时前"):time.replace(/T/," ").replace(/Z/,"").substring(0,16)},o=function(e){var t=e-Math.round(new Date/1e3);return parseInt(t/86400,0)},l=function(e){var t=Math.round(new Date(e)/1e3),r=Math.round(new Date/1e3)-t,n=parseInt(r/86400,0);if(n>365){var o=parseInt(r/86400/365,0);return"".concat(o,"年")}return"".concat(n,"天")}},718:function(e,t,r){"use strict";r(159),r(794),r(36),r(13),r(32),r(24),r(35),r(34);var n=r(27),o=r(795),l=r(755);r(52);function c(){c=function(e,t){return new r(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function r(e,n,o){var c=new RegExp(e,n);return t.set(c,o||t.get(e)),Object(l.a)(c,r.prototype)}function d(e,r){var g=t.get(r);return Object.keys(g).reduce((function(t,r){return t[r]=e[g[r]],t}),Object.create(null))}return Object(o.a)(r,RegExp),r.prototype.exec=function(t){var r=e.exec.call(this,t);return r&&(r.groups=d(r,this)),r},r.prototype[Symbol.replace]=function(r,o){if("string"==typeof o){var l=t.get(this);return e[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+l[t]})))}if("function"==typeof o){var c=this;return e[Symbol.replace].call(this,r,(function(){var e=arguments;return"object"!==Object(n.a)(e[e.length-1])&&(e=[].slice.call(e)).push(d(e,c)),o.apply(this,e)}))}return e[Symbol.replace].call(this,r,o)},c.apply(this,arguments)}var d={topic:function(text){if(text){var e=c(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(e,(function(t){return t.replace(e,(function(content,e,text){var t="/topic/".concat(e);return'<a href="'.concat(t,'" class="content-topic a-blue">').concat(text,"</a> ")}))}))}},usermention:function(text){if(text){var e=c(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(e,(function(t){return t.replace(e,(function(content,e,text){var t="/user/".concat(e);return'<a href="'.concat(t,'" class="content-member a-blue">').concat(text,"</a> ")}))}))}},parseHtml1:function(text){if(text){var e=/&lt;/gim;return text.replace(e,(function(t){return t.replace(e,(function(content,e,text){return"<"}))}))}},parseHtml2:function(text){if(text){var e=/&gt;/gim;return text.replace(e,(function(t){return t.replace(e,(function(content,e,text){return">"}))}))}}};t.a={parse:function(text){for(var e in d)text=d[e](text);return text}}},793:function(e,t,r){"use strict";r(52);t.a=function(e){return e[0]===e[1]&&"0"===e[0]&&(e=e.substr(0,1)),e.replace(/[^\d.]/g,"").replace(/\.{2,}/g,".").replace(".","$#$").replace(/\./g,"").replace("$#$",".").replace(/^(-)*(\d+)\.(\d\d).*$/,"$1$2.$3").replace(/^\./g,"")}}}]);