(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(118).default)("7e0cfe6e",content,!0,{sourceMap:!1})},210:function(t,e,n){"use strict";var r={name:"default"},l=n(25),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col h-screen justify-between relative"},[e("NavBar"),t._v(" "),e("Nuxt"),t._v(" "),e("TailwindFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:n(296).default,TailwindFooter:n(297).default})},213:function(t,e,n){n(214),t.exports=n(215)},268:function(t,e,n){"use strict";n(192)},269:function(t,e,n){var r=n(117)((function(i){return i[1]}));r.push([t.i,".accordion-enter-active[data-v-536fc325],.accordion-leave-active[data-v-536fc325]{will-change:height,opacity;transition:height .3s ease,opacity .3s ease;overflow:hidden}.accordion-enter[data-v-536fc325],.accordion-leave-to[data-v-536fc325]{height:0!important;opacity:0}",""]),r.locals={},t.exports=r},296:function(t,e,n){"use strict";n.r(e);var r={name:"NavBar",data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen},start:function(t){t.style.height=t.scrollHeight+"px"},end:function(t){t.style.height=""}}},l=(n(268),n(25)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"container px-4 md:px-6"},[e("div",{staticClass:"flex items-center justify-between border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10"},[e("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[e("NuxtLink",{staticClass:"text-2xl font-semibold",attrs:{to:"/"}},[t._v("\n\t\t\t\t\tJet"),e("span",{staticClass:"text-jet-light"},[t._v("Supply")])])],1),t._v(" "),e("div",{staticClass:"-my-2 -mr-2 md:hidden"},[e("button",{staticClass:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button","aria-expanded":"false"},on:{click:t.toggle}},[e("span",{staticClass:"sr-only"},[t._v("Open menu")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}})])])]),t._v(" "),e("nav",{staticClass:"hidden space-x-10 md:flex"},[e("NuxtLink",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{to:"/"}},[t._v("\n\t\t\t\t\tHome\n\t\t\t\t")]),t._v(" "),e("NuxtLink",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{to:"/about"}},[t._v("\n\t\t\t\t\tAbout\n\t\t\t\t")])],1)])]),t._v(" "),e("transition",{attrs:{name:"accordion"},on:{enter:t.start,"after-enter":t.end,"before-leave":t.start,"after-leave":t.end}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"absolute z-50 inset-x-0 top-0 z-100 origin-top-right transform transition md:hidden"},[e("div",{staticClass:"rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},[e("div",{staticClass:"px-4 pt-5 pb-6"},[e("div",{staticClass:"flex items-center justify-between"},[e("NuxtLink",{staticClass:"text-2xl font-semibold",attrs:{to:"/"}},[t._v("\n\t\t\t\t\t\t\tJet"),e("span",{staticClass:"text-jet-light"},[t._v("Supply")])]),t._v(" "),e("div",{staticClass:"-my-2 -mr-2"},[e("button",{staticClass:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"},on:{click:t.toggle}},[e("span",{staticClass:"sr-only"},[t._v("Close menu")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])])],1),t._v(" "),e("div",{staticClass:"mt-6"},[e("nav",{staticClass:"grid gap-y-8"},[e("NuxtLink",{staticClass:"-m-3 flex items-center rounded-md p-3 hover:bg-gray-50",attrs:{to:"/"},nativeOn:{click:function(e){return t.toggle.apply(null,arguments)}}},[e("svg",{staticClass:"h-6 w-6 flex-shrink-0 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}})]),t._v(" "),e("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v("\n\t\t\t\t\t\t\t\t\tHome\n\t\t\t\t\t\t\t\t")])]),t._v(" "),e("NuxtLink",{staticClass:"-m-3 flex items-center rounded-md p-3 hover:bg-gray-50",attrs:{to:"/about"},nativeOn:{click:function(e){return t.toggle.apply(null,arguments)}}},[e("svg",{staticClass:"w-6 h-6 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"}})]),t._v(" "),e("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v("\n\t\t\t\t\t\t\t\t\tAbout\n\t\t\t\t\t\t\t\t")])]),t._v(" "),e("NuxtLink",{staticClass:"-m-3 flex items-center rounded-md p-3 hover:bg-gray-50",attrs:{to:"/privacypolicy"},nativeOn:{click:function(e){return t.toggle.apply(null,arguments)}}},[e("svg",{staticClass:"h-6 w-6 flex-shrink-0 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"}})]),t._v(" "),e("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v("\n\t\t\t\t\t\t\t\t\tPrivacy policy\n\t\t\t\t\t\t\t\t")])])],1)])])])])])],1)}),[],!1,null,"536fc325",null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);var r={name:"TailwindFooter"},l=n(25),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"p-4 mt-20 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900"},[e("div",{staticClass:"max-w-7xl mx-auto"},[e("div",{staticClass:"flex flex-wrap justify-between items-start"},[e("NuxtLink",{staticClass:"flex items-center mb-4 sm:mb-0 text-2xl font-semibold w-full md:max-w-min",attrs:{to:"/"}},[t._v("\n\t\t\t\tJet"),e("span",{staticClass:"text-jet-light"},[t._v("Supply")])]),t._v(" "),e("div",{staticClass:"mb-8 md:mb-0"},[e("h2",{staticClass:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"},[t._v("\n\t\t\t\t\tNavigation\n\t\t\t\t")]),t._v(" "),e("ul",{staticClass:"text-gray-600 dark:text-gray-400"},[e("li",{staticClass:"mb-4"},[e("NuxtLink",{staticClass:"hover:text-gray-900",attrs:{to:"/"}},[t._v("\n\t\t\t\t\t\t\tHome\n\t\t\t\t\t\t")])],1),t._v(" "),e("li",{staticClass:"mb-4"},[e("NuxtLink",{staticClass:"hover:text-gray-900",attrs:{to:"/about"}},[t._v("\n\t\t\t\t\t\t\tAbout\n\t\t\t\t\t\t")])],1),t._v(" "),e("li",{staticClass:"mb-4"},[e("NuxtLink",{staticClass:"hover:text-gray-900",attrs:{to:"/faq"}},[t._v("\n\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t")])],1),t._v(" "),e("li",{staticClass:"mb-4"},[e("NuxtLink",{staticClass:"hover:text-gray-900",attrs:{to:"/privacypolicy"}},[t._v("\n\t\t\t\t\t\t\tPrivacy policy\n\t\t\t\t\t\t")])],1)])]),t._v(" "),t._m(0)],1)]),t._v(" "),e("hr",{staticClass:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),t._v(" "),e("span",{staticClass:"block text-sm text-gray-500 sm:text-center dark:text-gray-400"},[t._v("\n\t\t© 2022\n\t\t"),e("NuxtLink",{attrs:{to:"/"}},[t._v("JetSupply")]),t._v(". All Rights Reserved.\n\t")],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-8 md:mb-0"},[e("h2",{staticClass:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"},[t._v("\n\t\t\t\t\tContact\n\t\t\t\t")]),t._v(" "),e("ul",{staticClass:"text-gray-600 dark:text-gray-400"},[e("li",{staticClass:"mb-4"},[e("a",{attrs:{href:"mailto:sales@jet-supply.com"}},[t._v("\n\t\t\t\t\t\t\tsales@jet-supply.com\n\t\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"mb-4"},[e("p",[t._v("+48 603 951 000")])]),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\tHenryka Sienkiewicza 85/87, "),e("br"),t._v("lok.8, 95-057 Łódź\n\t\t\t\t\t")])])])}],!1,null,null,null);e.default=component.exports},53:function(t,e,n){"use strict";var r={layout:"error",props:["error"]},l=n(25),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"},[e("div",{staticClass:"mx-auto max-w-screen-sm text-center"},[404===t.error.statusCode?e("h1",{staticClass:"mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-jet-light dark:text-jet-light"},[t._v("\n\t\t\t404\n\t\t")]):e("h1",{staticClass:"mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-jet-light dark:text-jet-light"},[t._v("\n\t\t\tAn error occurred\n\t\t")]),t._v(" "),e("p",{staticClass:"mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"},[t._v("\n\t\t\tSomething's missing.\n\t\t")]),t._v(" "),e("p",{staticClass:"mb-4 text-lg font-light text-gray-500 dark:text-gray-400"},[t._v("\n\t\t\tSorry, we can't find that page. You'll find lots to explore on\n\t\t\tthe home page.\n\t\t")]),t._v(" "),e("NuxtLink",{staticClass:"inline-flex text-white bg-jet-dark hover:bg-jet-light focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 transition-all duration-200 my-4",attrs:{to:"/"}},[t._v("\n\t\t\tBack to Homepage\n\t\t")])],1)])}),[],!1,null,null,null);e.a=component.exports}},[[213,28,1,29]]]);