(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{313:function(t,e,r){var content=r(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(118).default)("e22437b6",content,!0,{sourceMap:!1})},354:function(t,e,r){"use strict";r(313)},355:function(t,e,r){var o=r(117)((function(i){return i[1]}));o.push([t.i,".accordion-enter-active[data-v-5cd8c6b2],.accordion-leave-active[data-v-5cd8c6b2]{will-change:height,opacity;transition:height .3s ease,opacity .3s ease;overflow:hidden}.accordion-enter[data-v-5cd8c6b2],.accordion-leave-to[data-v-5cd8c6b2]{height:0!important;opacity:0}",""]),o.locals={},t.exports=o},372:function(t,e,r){"use strict";r.r(e);var o={name:"NavBarAlt",data:function(){return{isOpen:!1,showFlyout:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen},toggleFlyout:function(){this.showFlyout=!this.showFlyout},start:function(t){t.style.height=t.scrollHeight+"px"},end:function(t){t.style.height=""}}},n=(r(354),r(25)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative bg-white"},[e("div",{staticClass:"mx-auto px-4 md:px-6 max-w-7xl"},[e("div",{staticClass:"flex items-center justify-between border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10"},[e("div",{staticClass:"flex justify-start lg:w-0 lg:flex-1"},[e("NuxtLink",{staticClass:"text-2xl font-semibold",attrs:{to:"/"}},[t._v("\n\t\t\t\t\tJet"),e("span",{staticClass:"text-jet-light"},[t._v("Supply")])])],1),t._v(" "),e("div",{staticClass:"-my-2 -mr-2 md:hidden"},[e("button",{staticClass:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button","aria-expanded":"false"},on:{click:t.toggle}},[e("span",{staticClass:"sr-only"},[t._v("Open menu")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}})])])]),t._v(" "),e("nav",{staticClass:"hidden space-x-10 md:flex"},[e("NuxtLink",{staticClass:"text-base font-medium text-gray-500 hover:text-gray-900",attrs:{to:"/"}},[t._v("\n\t\t\t\t\tHome\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"relative"},[e("button",{staticClass:"text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",attrs:{type:"button","aria-expanded":"false"},on:{click:function(e){return t.toggleFlyout()}}},[e("span",[t._v("About")]),t._v(" "),e("svg",{staticClass:"text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlyout,expression:"showFlyout"}],staticClass:"absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"},[e("div",{staticClass:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"},[e("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},[e("NuxtLink",{staticClass:"flex items-start text-base font-medium text-gray-500 hover:text-gray-900",attrs:{to:"/FAQ"}},[e("svg",{staticClass:"w-6 h-6 flex-shrink-0 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"}})]),t._v(" "),e("div",{staticClass:"ml-4"},[e("p",[t._v("FAQ")])])]),t._v(" "),e("NuxtLink",{staticClass:"flex items-start text-base font-medium text-gray-500 hover:text-gray-900",attrs:{to:"/privacypolicy"}},[e("svg",{staticClass:"h-6 w-6 flex-shrink-0 text-jet-light",attrs:{"x-description":"Heroicon name: outline/lifebuoy",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"}})]),t._v(" "),e("div",{staticClass:"ml-4"},[e("p",[t._v("Privacy policy")])])])],1)])])])],1)])]),t._v(" "),e("transition",{attrs:{name:"accordion"},on:{enter:t.start,"after-enter":t.end,"before-leave":t.start,"after-leave":t.end}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"absolute z-50 inset-x-0 top-0 origin-top-right transform transition md:hidden"},[e("div",{staticClass:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},[e("div",{staticClass:"rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},[e("div",{staticClass:"px-4 pt-5 pb-6"},[e("div",{staticClass:"flex items-center justify-between"},[e("NuxtLink",{staticClass:"text-2xl font-semibold",attrs:{to:"/"}},[t._v("\n\t\t\t\t\t\t\t\tJet"),e("span",{staticClass:"text-jet-light"},[t._v("Supply")])]),t._v(" "),e("div",{staticClass:"-my-2 -mr-2"},[e("button",{staticClass:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"},on:{click:t.toggle}},[e("span",{staticClass:"sr-only"},[t._v("Close menu")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])])],1),t._v(" "),e("div",{staticClass:"mt-6"},[e("nav",{staticClass:"grid gap-y-8"},[e("NuxtLink",{staticClass:"-m-3 flex items-center rounded-md p-3 hover:bg-gray-50",attrs:{to:"/"}},[e("svg",{staticClass:"h-6 w-6 flex-shrink-0 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}})]),t._v(" "),e("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v("\n\t\t\t\t\t\t\t\t\t\tHome\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("NuxtLink",{staticClass:"-m-3 flex items-center rounded-md p-3 hover:bg-gray-50",attrs:{to:"/privacypolicy"}},[e("svg",{staticClass:"h-6 w-6 flex-shrink-0 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"}})]),t._v(" "),e("span",{staticClass:"ml-3 text-base font-medium text-gray-900"},[t._v("\n\t\t\t\t\t\t\t\t\t\tPrivacy policy\n\t\t\t\t\t\t\t\t\t")])])],1)]),t._v(" "),e("div",{staticClass:"space-y-6 py-6 px-5"},[e("div",{staticClass:"grid grid-cols-2 gap-y-4 gap-x-8"},[e("a",{staticClass:"text-base font-medium text-gray-900 hover:text-gray-700",attrs:{href:"#"}},[t._v("Pricing")]),t._v(" "),e("a",{staticClass:"text-base font-medium text-gray-900 hover:text-gray-700",attrs:{href:"#"}},[t._v("Docs")]),t._v(" "),e("a",{staticClass:"text-base font-medium text-gray-900 hover:text-gray-700",attrs:{href:"#"}},[t._v("Help Center")]),t._v(" "),e("a",{staticClass:"text-base font-medium text-gray-900 hover:text-gray-700",attrs:{href:"#"}},[t._v("Guides")]),t._v(" "),e("a",{staticClass:"text-base font-medium text-gray-900 hover:text-gray-700",attrs:{href:"#"}},[t._v("Events")]),t._v(" "),e("a",{staticClass:"text-base font-medium text-gray-900 hover:text-gray-700",attrs:{href:"#"}},[t._v("Security")])])])])])])])])],1)}),[],!1,null,"5cd8c6b2",null);e.default=component.exports}}]);