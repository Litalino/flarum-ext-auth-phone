module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e){t.exports=flarum.core.compat.app},,function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}n.d(e,"a",(function(){return r}))},,,,,,,,,,,function(t,e){t.exports=flarum.extensions["fof-components"]},function(t,e){t.exports=flarum.core.compat["components/ExtensionPage"]},,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(2),i=n(13),o=n(14),u=n.n(o),c=i.settings.items.StringItem,p=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.setting=this.setting.bind(this)},n.content=function(){var t,e,n,a,r;return[m("div",{className:"SMSSettingsPage"},m("div",{className:"container"},m("div",{className:"Form-group"},m(c,Object.assign({name:"flarum-ext-auth-phone.sms_ali_access_id",setting:this.setting},(t={},t.required=!0,t)),app.translator.trans("hamzone-auth-phone.admin.settings.api_sms_ali_access_id"))),m("div",{className:"Form-group"},m(c,Object.assign({name:"flarum-ext-auth-phone.sms_ali_access_sec",setting:this.setting},(e={},e.required=!0,e)),app.translator.trans("hamzone-auth-phone.admin.settings.api_sms_ali_access_sec"))),m("div",{className:"Form-group"},m(c,Object.assign({name:"flarum-ext-auth-phone.sms_ali_sign",setting:this.setting},(n={},n.required=!0,n)),app.translator.trans("hamzone-auth-phone.admin.settings.api_sms_ali_sign"))),m("div",{className:"Form-group"},m(c,Object.assign({name:"flarum-ext-auth-phone.sms_ali_template_code",setting:this.setting},(a={},a.required=!0,a)),app.translator.trans("hamzone-auth-phone.admin.settings.api_sms_ali_template_code"))),m("div",{className:"Form-group"},m(c,Object.assign({name:"flarum-ext-auth-phone.sms_ali_expire_second",setting:this.setting},(r={},r.required=!0,r)),app.translator.trans("hamzone-auth-phone.admin.settings.api_sms_ali_expire_second"))),this.submitButton()))]},e}(u.a);r.a.initializers.add("hamzone/hamzone-auth-phone",(function(){r.a.extensionData.for("hamzone-auth-phone").registerPage(p)}))}]);
//# sourceMappingURL=admin.js.map