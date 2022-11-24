(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{308:function(t,e,o){"use strict";o.r(e);o(20),o(21),o(30),o(31);var r=o(8),n=(o(74),o(40),o(22),o(41),o(9),o(17),o(90)),l=o.n(n);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={name:"ContactForm",data:function(){return{showModal:!1,show:!0,form:{firstName:"",lastName:"",email:"",message:""}}},methods:{encode:function(data){return Object.keys(data).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(data[t]))})).join("&")},handleSubmit:function(){l.a.post("/",this.encode(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"form-name":"Contact"},this.form)),{header:{"Content-Type":"application/x-www-form-urlencoded"}})},toggle:function(){this.showModal=!this.showModal,this.resetForm()},resetForm:function(){var t=this;Object.keys(this.form).forEach((function(e,o){t.form[e]=""}))}}},d=c,f=o(25),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("form",{attrs:{name:"Contact",method:"POST","data-netlify":"true","netlify-honeypot":"bot-field"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("input",{attrs:{type:"hidden",name:"form-name",value:"Contact"}}),t._v(" "),e("div",{staticClass:"flex flex-wrap -mx-3"},[e("div",{staticClass:"w-full md:w-1/2 px-3 mb-3 md:mb-6 md:mb-0"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2",attrs:{for:"first_name"}},[t._v("\n\t\t\t\tFirst name\n\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstName,expression:"form.firstName"}],staticClass:"appearance-none block w-full bg-transparent text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"first_name",type:"text",name:"firstName",placeholder:"Jane",required:""},domProps:{value:t.form.firstName},on:{input:function(e){e.target.composing||t.$set(t.form,"firstName",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full md:w-1/2 px-3 mb-3 md:mb-6 md:mb-0"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2",attrs:{for:"last_name"}},[t._v("\n\t\t\t\tLast name\n\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastName,expression:"form.lastName"}],staticClass:"appearance-none block w-full bg-transparent text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"last_name",type:"text",name:"lastName",placeholder:"Doe",required:""},domProps:{value:t.form.lastName},on:{input:function(e){e.target.composing||t.$set(t.form,"lastName",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"flex flex-wrap -mx-3 mb-3 md:mb-6"},[e("div",{staticClass:"w-full px-3"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2",attrs:{for:"email"}},[t._v("\n\t\t\t\tE-mail\n\t\t\t")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"email",type:"email",name:"email",placeholder:"jane@doe.com",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"flex flex-wrap -mx-3 mb-3 md:mb-6"},[e("div",{staticClass:"w-full px-3"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2",attrs:{for:"message"}},[t._v("\n\t\t\t\tMessage\n\t\t\t")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"no-resize appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none",attrs:{id:"message",name:"message",required:""},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),t._v(" "),e("p",{staticClass:"text-sm text-slate-400"},[t._v("\n\t\t\t\tBy submitting this form you agree to our\n\t\t\t\t"),e("NuxtLink",{staticClass:"text-jet-light hover:text-jet-dark",attrs:{to:"/privacypolicy"}},[t._v("\n\t\t\t\t\tprivacy policy\n\t\t\t\t")]),t._v("\n\t\t\t\twhich explains how we may collect, use and disclose your\n\t\t\t\tpersonal information including to third parties.\n\t\t\t")],1)])]),t._v(" "),t._m(0),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("LazyFormModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{close:t.toggle}})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"md:w-1/3"},[t("button",{staticClass:"shadow bg-jet-light hover:bg-jet-dark focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded",attrs:{type:"submit"}},[this._v("\n\t\t\tSend\n\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);