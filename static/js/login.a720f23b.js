(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"032e":function(e,t,a){"use strict";var r=a("390d"),c=a.n(r);c.a},2977:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"container"},[a("div",[a("h3",{staticClass:"title"},[e._v("用户登录")]),a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[a("el-form-item",{attrs:{label:"",prop:"acctNm"}},[a("el-input",{attrs:{placeholder:"邮箱/手机号/8位ID"},model:{value:e.formData.acctNm,callback:function(t){e.$set(e.formData,"acctNm",t)},expression:"formData.acctNm"}})],1),a("el-form-item",{attrs:{label:"",prop:"credential"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:e.formData.credential,callback:function(t){e.$set(e.formData,"credential",t)},expression:"formData.credential"}})],1)],1),a("section",{staticClass:"rem-pwd"},[a("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")])],1),a("el-button",{staticClass:"login",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)])},c=[],n=a("f121"),o={data:function(){return{formData:{acctNm:"",credential:""},rules:{acctNm:[{required:!0,message:"请输入用户名",trigger:"blur"}],credential:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!1}},methods:{login:function(){var e=this;this.$refs["form"].validate(function(t){t&&e.$http({method:"post",url:"/login",params:{username:e.formData.acctNm,password:e.formData.credential}}).then(function(t){var a=t.data;if("success"!==t.data.status)return e.$message.error("用户名或密码错误");var r=a._login_info;if(r){var c=r.roleList;if(!c.some(function(e){return n["b"].some(function(t){return e.rlId===t})}))return e.$message.error("用户名或密码错误"),void e.logout();sessionStorage.userId=r.usrId,sessionStorage.userName=r.usrNm,sessionStorage.emailAdr=r.emailAdr,sessionStorage.usrGnd=r.usrGnd,sessionStorage.isLogin=!0}e.$router.push("/approve/realName")}).catch(function(t){console.log(t),e.$message.error("系统异常，请稍后再试")})})},logout:function(){this.$http({method:"post",url:"/logout"}).then(function(e){console.log(e),sessionStorage.clear()}).catch(function(e){console.log(e)})},toResetPwd:function(){this.$router.push("/resetPwd")},toRegister:function(){this.$router.push("/register")}}},i=o,l=(a("032e"),a("2c6d"),a("048f")),s=Object(l["a"])(i,r,c,!1,null,"18d3e590",null);s.options.__file="loginIn.vue";t["default"]=s.exports},"2c6d":function(e,t,a){"use strict";var r=a("f6d3"),c=a.n(r);c.a},"390d":function(e,t,a){},"404c":function(e,t,a){},"50b4":function(e,t,a){"use strict";var r=a("404c"),c=a.n(r);c.a},5916:function(e,t,a){},"5cb1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"reset-container"},[a("div",{staticClass:"content"},[a("h3",{staticClass:"title"},[e._v("找回密码")]),a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[a("el-form-item",{attrs:{label:"",prop:"acctNm"}},[a("el-input",{attrs:{placeholder:"请输入您的账户名"},model:{value:e.formData.acct.acctNm,callback:function(t){e.$set(e.formData.acct,"acctNm",t)},expression:"formData.acct.acctNm"}})],1),a("el-form-item",{staticClass:"reset-input-wrap",attrs:{label:"",prop:"acctPhone"}},[a("el-select",{staticClass:"my-select",attrs:{placeholder:"请选择"},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),a("el-input",{staticClass:"phone-input",attrs:{placeholder:"请输入注册手机号"},model:{value:e.formData.acct.acctPhone,callback:function(t){e.$set(e.formData.acct,"acctPhone",t)},expression:"formData.acct.acctPhone"}})],1),a("el-form-item",{staticClass:"reset-input-wrap",attrs:{label:"",prop:"veriCode"}},[a("el-input",{staticClass:"code-input",attrs:{placeholder:"请输入短信验证码"},model:{value:e.formData.veriCode,callback:function(t){e.$set(e.formData,"veriCode",t)},expression:"formData.veriCode"}}),a("el-button",{staticClass:"code-btn"},[e._v("免费获取短信验证码")])],1),a("el-form-item",{attrs:{label:"",prop:"credential"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.formData.acct.credential,callback:function(t){e.$set(e.formData.acct,"credential",t)},expression:"formData.acct.credential"}})],1),a("el-form-item",{attrs:{label:"",prop:"credentialAgain"}},[a("el-input",{attrs:{placeholder:"请再次输入密码"},model:{value:e.credentialAgain,callback:function(t){e.credentialAgain=t},expression:"credentialAgain"}})],1)],1),a("el-button",{staticClass:"confirm-btn",attrs:{type:"primary"},on:{click:e.submitReset}},[e._v("确定")])],1)])},c=[],n=a("d722"),o={name:"resetPwd",data:function(){return{credentialAgain:"",formData:{veriCode:"",acct:{acctNm:"",credential:"",acctPhone:""}},rules:{acctNm:[{required:!0,message:"请输入用户名",trigger:"blur"}],credential:[{required:!0,message:"请输入密码",trigger:"blur"}],acctPhone:[{required:!0,message:"请输入手机号",trigger:"blur"}],veriCode:[{required:!0,message:"请输入验证码",trigger:"blur"}],credentialAgain:[{required:!0,message:"请再次输入密码",trigger:"blur"}]},selectValue:"86",options:[{label:"+86(中国大陆)",value:"86"},{label:"+85(中国大陆)",value:"85"},{label:"+84(中国大陆)",value:"84"}]}},methods:{submitReset:function(){var e=this;this.$refs["form"].validate(function(t){if(t)return e.credentialAgain!==e.formData.acct.credential?e.$message.error("两次输入的密码不一致！"):void e.$axios({url:n["f"].resetPWD,method:"patch",data:e.formData}).then(function(e){console.log(e)}).catch(function(t){console.log(t),e.$message.error("系统异常，请稍后再试")})})}}},i=o,l=(a("6aef"),a("50b4"),a("048f")),s=Object(l["a"])(i,r,c,!1,null,"668177cc",null);s.options.__file="reset-pwd.vue";t["default"]=s.exports},"6aef":function(e,t,a){"use strict";var r=a("c2dd"),c=a.n(r);c.a},"72b6":function(e,t,a){},9669:function(e,t,a){"use strict";var r=a("72b6"),c=a.n(r);c.a},"9ed6":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("router-view")],1)},c=[],n={name:"login"},o=n,i=(a("be76"),a("048f")),l=Object(i["a"])(o,r,c,!1,null,"42a016f9",null);l.options.__file="index.vue";t["default"]=l.exports},b953:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"reg-container"},[a("div",[a("h3",{staticClass:"title"},[e._v("用户注册")]),a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[a("el-form-item",{attrs:{label:"",prop:"acct.acctNm"}},[a("el-input",{attrs:{placeholder:"请输入您的账户名"},model:{value:e.formData.acct.acctNm,callback:function(t){e.$set(e.formData.acct,"acctNm",t)},expression:"formData.acct.acctNm"}})],1),a("el-form-item",{attrs:{label:"",prop:"acct.credential"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.formData.acct.credential,callback:function(t){e.$set(e.formData.acct,"credential",t)},expression:"formData.acct.credential"}})],1),a("el-form-item",{attrs:{label:"",prop:"credentialAgain"}},[a("el-input",{attrs:{placeholder:"请再次输入密码"},model:{value:e.formData.credentialAgain,callback:function(t){e.$set(e.formData,"credentialAgain",t)},expression:"formData.credentialAgain"}})],1),a("el-form-item",{staticClass:"input-wrap",attrs:{label:"",prop:"acct.acctPhone"}},[a("el-select",{staticClass:"my-select",attrs:{placeholder:"请选择"},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),a("el-input",{staticClass:"phone-input",attrs:{placeholder:"请输入注册手机号"},model:{value:e.formData.acct.acctPhone,callback:function(t){e.$set(e.formData.acct,"acctPhone",t)},expression:"formData.acct.acctPhone"}})],1),a("el-form-item",{staticClass:"input-wrap",attrs:{label:"",prop:"veriCode"}},[a("el-input",{staticClass:"code-input",attrs:{placeholder:"请输入短信验证码"},model:{value:e.formData.veriCode,callback:function(t){e.$set(e.formData,"veriCode",t)},expression:"formData.veriCode"}}),a("el-button",{staticClass:"code-btn"},[e._v("免费获取短信验证码")])],1)],1),a("el-button",{staticClass:"register-btn",attrs:{type:"primary"},on:{click:e.submitRegister}},[e._v("注册")])],1)])},c=[],n=(a("ff66"),a("ea23"),a("dbff"),a("d722")),o={data:function(){return{formData:{credentialAgain:"",veriCode:"",codeSN:"",acct:{acctNm:"",acctPhone:"",credential:""}},rules:{acctNm:[{required:!0,message:"请输入用户名",trigger:"blur"}],credential:[{required:!0,message:"请输入密码",trigger:"blur"}],credentialAgain:[{required:!0,message:"请再次输入密码",trigger:"blur"}],acctPhone:[{required:!0,message:"请输入注册手机号",trigger:"blur"}],veriCode:[{required:!0,message:"请输入短信验证码",trigger:"blur"}]},selectValue:"86",options:[{label:"+86(中国大陆)",value:"86"},{label:"+85(中国大陆)",value:"85"},{label:"+84(中国大陆)",value:"84"}]}},methods:{submitRegister:function(){var e=this;this.$refs["form"].validate(function(t){if(t)return e.formData.credentialAgain!==e.formData.acct.credential?e.$message.error("两次输入的密码不一致！"):void e.$axios({method:"post",url:n["f"].register,data:e.formData,PBreq:"com.ccb.cloud.protobuf.proto.iequip.AcctRegister"}).then(function(t){if(console.log(t),"00"==!t.data.SYS_TX_STATUS)return e.$message.error("系统异常，请稍后再试");e.$message({message:"注册成功",type:"success"}),e.$router.push("/loginIn")}).catch(function(t){if(console.log(t),"插入数据失败"===t)return e.$message.error("用户名重复");e.$message.error("系统异常，请稍后再试")})})}}},i=o,l=(a("9669"),a("cb4c"),a("048f")),s=Object(l["a"])(i,r,c,!1,null,"2218bd94",null);s.options.__file="register.vue";t["default"]=s.exports},be76:function(e,t,a){"use strict";var r=a("c4d1"),c=a.n(r);c.a},c2dd:function(e,t,a){},c4d1:function(e,t,a){},cb4c:function(e,t,a){"use strict";var r=a("5916"),c=a.n(r);c.a},d722:function(e,t,a){"use strict";a.d(t,"e",function(){return r}),a.d(t,"f",function(){return c}),a.d(t,"a",function(){return n}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return l});var r={queryEntity:"/iequip/v1/portal/realNmAudits/queryEntity",rlnmAdtIdGet:function(e){return"/iequip/v1/portal/realNmAudits/".concat(e)},rlnmAuthenStPatch:function(e){return"/iequip/v1/portal/realNmAudits/".concat(e,"/rlnmAuthenSt")}},c={register:"/iequip/v1/portal/accounts",resetPWD:"/iequip/v1/portal/accounts/credential"},n={add:"/iequip/v1/portal/docs",deleteDoc:function(e){return"/iequip/v1/portal/docs/".concat(e)},editDoc:function(e){return"/iequip/v1/portal/docs/".concat(e)},query:"/iequip/v1/portal/docs/docBlngSbj/iequip",editQuery:function(e){return"/iequip/v1/portal/docs/".concat(e)}},o={query:"/iequip/v1/portal/vers/queryEntity",getVersion:function(e){return"/iequip/v1/portal/vers/".concat(e)},subApprove:function(e){return"/iequip/v1/portal/apps/".concat(e,"/vers")},getListById:function(e){return"/iequip/v1/portal/apps/".concat(e,"/vers")},handle:function(e){return"/iequip/v1/portal/vers/".concat(e,"/verSt")},queryActions:function(e){return"/iequip/v1/portal/vers/".concat(e,"/actions")}},i={query:"/iequip/v1/portal/apps/queryEntity",updateStatus:function(e,t){return"/iequip/v1/portal/apps/".concat(e,"/").concat(t)},editQuery:function(e){return"/iequip/v1/portal/apps/".concat(e)},deletePro:function(e){return"/iequip/v1/portal/apps/".concat(e)},editPro:function(e){return"/iequip/v1/portal/apps/".concat(e)}},l={queryType:function(e){return"/iequip/v1/portal/typeinfo/".concat(e)},add:"/product/v1/product",specify:function(e){return"/product/v1/products/".concat(e)},query:"/product/v1/products",edit:function(e){return"/product/v1/products/".concat(e)},deletePro:function(e,t){return"/product/v1/products/".concat(e,"/").concat(t)},bindResource:function(e){return"/product/v1/products/".concat(e,"/bind")}}},f121:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return c});a("ff66"),a("ea23"),a("dbff");var r="/home/ap/nas/iequip/",c=["IEQUIPOPM00000000001","IEQUIPOPM00000000002","IEQUIPOPM00000000003"]},f6d3:function(e,t,a){}}]);
//# sourceMappingURL=login.a720f23b.js.map