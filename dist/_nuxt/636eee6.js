(window.webpackJsonp=window.webpackJsonp||[]).push([[28,6,10,14,19],{300:function(t,e,r){"use strict";r.r(e);var l=r(25),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-10"},[e("p",{staticClass:"text-base text-jet-light font-semibold tracking-wide uppercase"},[t._t("title")],2),t._v(" "),e("h2",{staticClass:"mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._t("heading")],2),t._v(" "),e("p",{staticClass:"mb-6 text-gray-500"},[t._t("content")],2)])}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,r){"use strict";r.r(e);var l={name:"PageHeading"},n=r(25),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"relative mx-auto pt-20 text-center pb-24"},[e("h1",{staticClass:"relative text-4xl font-bold tracking-tight text-jet-light z-50 sm:text-5xl after:content-[''] after:absolute after:border-b-4 after:border-jet-dark after:w-12 after:-bottom-7 after:left-1/2 after:-translate-x-1/2"},[t._t("title"),t._v(" "),e("span",{staticClass:"absolute left-0 bottom-8 md:bottom-10 w-full h-full z-10 text-7xl md:text-8xl text-slate-300 font-black opacity-20"},[t._t("title")],2)],2)])])}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,r){"use strict";r.r(e);var l={name:"Highlight"},n=r(25),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative md:mb-10 mb-5"},[e("dt",[e("div",{staticClass:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-jet-light text-white"},[t._t("icon")],2),t._v(" "),e("p",{staticClass:"ml-16 text-lg leading-6 font-medium text-gray-900"},[t._t("title")],2)]),t._v(" "),e("dd",{staticClass:"mt-2 ml-16 text-base text-gray-500"},[t._t("content")],2)])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(118).default)("3bc09f0a",content,!0,{sourceMap:!1})},323:function(t,e,r){"use strict";r.r(e);var l={name:"Card",props:{aircraft:Object}},n=r(25),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white rounded-lg border-2 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},[e("div",{staticClass:"bg-gradient-tui h-52"},[e("div",{staticClass:"h-full bg-pattern p-10 flex items-center"},[e("nuxt-img",{staticClass:"rounded-t-lg",attrs:{src:t.aircraft.properties.img,width:"100%",height:"100%",alt:"aircraft image"}})],1)]),t._v(" "),e("div",{staticClass:"p-5"},[e("h3",{staticClass:"mb-5 text-2xl font-^medium tracking-tight text-gray-900 dark:text-white"},[t._v("\n\t\t\t"+t._s(t.aircraft.type)+"\n\t\t")]),t._v(" "),e("ul",{staticClass:"columns-2 mb-8 space-y-3 text-left text-gray-500 dark:text-gray-400"},[e("li",{staticClass:"flex items-center text-sm space-x-3"},[e("svg",{staticClass:"w-5 h-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.seats))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm space-x-3"},[e("svg",{staticClass:"w-5 h-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.bags))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm capitalize space-x-3"},[e("svg",{staticClass:"h-5 w-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M208 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),t._v(" "),e("path",{attrs:{d:"M256 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V368M183 274a23.73 23.73 0 01-29.84 16.18h0a23.72 23.72 0 01-16.17-29.84l25-84.28A44.85 44.85 0 01205 144h102a44.85 44.85 0 0143 32.08l25 84.28a23.72 23.72 0 01-16.17 29.84h0a23.73 23.73 0 01-29.78-16.2",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),t._v(" "),e("circle",{attrs:{cx:"256",cy:"56",r:"40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),t._v(" "),e("path",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M208 192l-48 160h192l-48-160"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.fa))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm capitalize space-x-3"},[e("svg",{staticClass:"h-5 w-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"}}),t._v(" "),e("path",{attrs:{d:"M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.catering))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm capitalize space-x-3"},[e("svg",{staticClass:"h-5 w-5 text-jet-light",attrs:{viewBox:"0 0 395 395"}},[e("path",{attrs:{fill:"currentColor",d:"M229.412,130.862c-2.405-3.355-6.284-5.346-10.412-5.346h-1.266c-5.524,0-10.424,3.539-12.161,8.782l-27.534,83.09\n\t\t\t\t\t\tl-27.662-83.107c-1.743-5.233-6.639-8.765-12.156-8.765h-0.822c-0.051,0-0.104,0.003-0.153,0.003c-0.053,0-0.105-0.003-0.155-0.003\n\t\t\t\t\t\th-0.998c-5.524,0-10.425,3.539-12.163,8.782l-27.533,83.09l-27.661-83.107c-1.742-5.233-6.64-8.765-12.156-8.765h-1.268\n\t\t\t\t\t\tc-4.13,0-8.007,1.991-10.414,5.346c-2.407,3.357-3.045,7.669-1.72,11.579l40.125,118.344c1.763,5.201,6.643,8.698,12.135,8.698\n\t\t\t\t\t\th0.53c0.153,0,0.303-0.008,0.455-0.014c0.151,0.006,0.302,0.014,0.454,0.014h0.354c5.5,0,10.386-3.511,12.142-8.721l27.845-82.675\n\t\t\t\t\t\tl27.718,82.657c1.751,5.221,6.642,8.739,12.148,8.739h0.527c0.153,0,0.303-0.008,0.456-0.014c0.15,0.006,0.302,0.014,0.454,0.014\n\t\t\t\t\t\th0.355c5.491,0,10.37-3.497,12.134-8.698l40.125-118.344C232.459,138.531,231.818,134.22,229.412,130.862z"}}),t._v(" "),e("path",{attrs:{fill:"currentColor",d:"M347.88,232.295c-4.756-4.416-12.063-4.578-17.01-0.378c-8.521,7.234-19.511,11.218-30.943,11.218\n\t\t\t\t\t\tc-26.069,0-47.277-20.51-47.277-45.721c0-25.116,21.208-45.548,47.277-45.548c11.542,0,22.522,3.916,30.921,11.027\n\t\t\t\t\t\tc5.087,4.306,12.625,3.995,17.339-0.719l0.427-0.427c2.544-2.542,3.899-6.036,3.74-9.628c-0.161-3.592-1.822-6.952-4.58-9.258\n\t\t\t\t\t\tc-13.371-11.184-30.366-17.344-47.848-17.344c-40.598,0-73.628,32.253-73.628,71.898c0,39.739,33.03,72.07,73.628,72.07\n\t\t\t\t\t\tc17.454,0,34.493-6.207,47.979-17.48c2.822-2.36,4.495-5.817,4.589-9.494c0.098-3.678-1.393-7.22-4.087-9.723L347.88,232.295z"}}),t._v(" "),e("path",{attrs:{fill:"currentColor",d:"M313.001,0H81.999C36.785,0,0,36.784,0,81.998v230.993C0,358.211,36.785,395,81.999,395h231.002\n\t\t\t\t\t\tC358.216,395,395,358.211,395,312.991V81.998C395,36.784,358.216,0,313.001,0z M380,312.991C380,349.94,349.945,380,313.001,380\n\t\t\t\t\t\tH81.999C45.056,380,15,349.94,15,312.991V81.998C15,45.055,45.056,15,81.999,15h231.002C349.945,15,380,45.055,380,81.998V312.991z\n\t\t\t\t\t\t"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.toilet))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm capitalize space-x-3"},[e("svg",{staticClass:"w-5 h-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.range)+"  hours")])])]),t._v(" "),e("h4",{staticClass:"text-right text-xl"},[t._v(t._s(t.aircraft.rate)),e("span",{staticClass:"text-md"},[t._v("/h")])])])])}),[],!1,null,null,null);e.default=component.exports},361:function(t,e,r){"use strict";r(318)},362:function(t,e,r){var l=r(117)((function(i){return i[1]}));l.push([t.i,".doodle[data-v-349fbe00]{border-radius:30% 70% 67% 33%/30% 30% 70% 70%}",""]),l.locals={},t.exports=l},379:function(t,e,r){"use strict";r.r(e);var l=r(358),n=(r(359),r(315)),o={name:"Services",components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide,Highlight:n.default},directives:{swiper:l.directive},data:function(){return{title:"Services",description:"Updated 02 June 2022",swiperOptions:{slidesPerView:3,spaceBetween:30,pagination:{el:".swiper-pagination",dynamicBullets:!0},breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},listItems:["Quick offers","Dedicated support","Low fees","Easy payments"],fleet:[{type:"Light jets",rate:"€2,800",properties:{range:"3",seats:6,bags:6,catering:"snacks",toilet:"Yes",fa:"No",img:"/images/p100_side.png"}},{type:"Super light jets",rate:"€3,600",properties:{range:"3.5",seats:8,bags:7,catering:"snacks",toilet:"Yes",fa:"Yes",img:"/images/p300_side.png"}},{type:"Midsize jets",rate:"€4,200",properties:{range:"6",seats:9,bags:12,catering:"hot",toilet:"Yes",fa:"Yes",img:"/images/l500_side.png"}},{type:"Heavy jets",rate:"€4,600",properties:{range:"8",seats:13,bags:22,catering:"hot",toilet:"Yes",fa:"Yes",img:"/images/l650_side.png"}},{type:"Ultra long range",rate:"€6,000",properties:{range:"16",seats:16,bags:20,catering:"hot",toilet:"Yes",fa:"Yes",img:"/images/l500_side.png"}},{type:"VIP airliner",rate:"€8,000",properties:{range:"12",seats:19,bags:60,catering:"hot",toilet:"Yes",fa:"Yes",img:"/images/l1000_side.png"}}]}},head:function(){return{title:this.title,meta:[{hid:"services-description",name:"description",content:"At Jet Supply we provide an integrated travel solution that takes you from A to B fast, confortable and safe on the most advanced private aircraft available for charter."}]}},setup:function(){return{onSwiper:function(t){console.log(t)},onSlideChange:function(){console.log("slide change")}}}},c=o,d=(r(361),r(25)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative container px-4 sm:px-6 lg:px-8"},[e("div",{staticClass:"px-4 sm:px-6 lg:px-8"},[e("PageHeading",[e("template",{slot:"title"},[t._v("\n\t\t\t\t"+t._s(t.title)+"\n\t\t\t")])],2),t._v(" "),e("div",{staticClass:"grid container grid-cols-2 gap-y-10 place-content-center md:gap-x-8 md:gap-y-40"},[e("div",{staticClass:"col-span-2 md:col-span-1 order-1"},[e("Content",[e("template",{slot:"title"},[t._v("Executive travel ")]),t._v(" "),e("template",{slot:"heading"},[t._v("\n\t\t\t\t\t\tJet Supply: Tailored travel solutions\n\t\t\t\t\t")]),t._v(" "),e("template",{slot:"content"},[t._v("\n\t\t\t\t\t\tWe enable private travel through access to the\n\t\t\t\t\t\tglobal business jet charter market. Our team\n\t\t\t\t\t\tprovides bespoke advice when it comes to chartering\n\t\t\t\t\t\tand aircraft, based on the profile of your trip, the\n\t\t\t\t\t\taircraft type preference and budget.\n\t\t\t\t\t\t"),e("br"),e("br"),t._v("\n\t\t\t\t\t\tAll aircraft have the necessary legal permits from\n\t\t\t\t\t\tthe aviation authorities. Jet Supply’s team works\n\t\t\t\t\t\tonly with AOC – certified operators, reliable\n\t\t\t\t\t\thandling agents and best quality catering suppliers\n\t\t\t\t\t\tto ensure your private flight needs are met.\n\t\t\t\t\t\t"),e("br"),e("br"),t._v("\n\t\t\t\t\t\tFrom departure to arrival we support you throughout\n\t\t\t\t\t\tall the steps of your journey, while ensuring your\n\t\t\t\t\t\tsafety and comfort.\n\t\t\t\t\t")])],2)],1),t._v(" "),e("div",{staticClass:"col-span-2 md:col-span-1 order-2"},[e("div",{staticClass:"h-full w-full bg-gradient-tui rounded-3xl shadow-xl max-w-7xl"},[e("nuxt-img",{staticClass:"rounded-3xl",attrs:{src:"/images/global5000-exterior.jpeg",width:"100%",height:"100%",alt:"aircraft image"}})],1)]),t._v(" "),e("div",{staticClass:"col-span-2 md:col-span-1 order-4 md:order-3"},[e("div",{staticClass:"h-full w-full bg-gradient-tui rounded-3xl shadow-xl max-w-7xl"},[e("nuxt-img",{staticClass:"rounded-3xl",attrs:{src:"/images/global7500-interior.jpeg",width:"100%",height:"100%",alt:"aircraft image"}})],1)]),t._v(" "),e("div",{staticClass:"col-span-2 md:col-span-1 order-3 md:order-4"},[e("Content",[e("template",{slot:"title"},[t._v("Executive travel ")]),t._v(" "),e("template",{slot:"heading"},[t._v("\n\t\t\t\t\t\tPrivate charter benefits\n\t\t\t\t\t")]),t._v(" "),e("template",{slot:"content"},[e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 sm:gap-y-2"},[e("Highlight",[e("template",{slot:"icon"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}})])]),t._v(" "),e("template",{slot:"title"},[t._v("\n\t\t\t\t\t\t\t\t\tSave time\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("template",{slot:"content"},[t._v("\n\t\t\t\t\t\t\t\t\tFrom car to the aircraft in 5 minutes\n\t\t\t\t\t\t\t\t\tthrough private jet dedicated terminals.\n\t\t\t\t\t\t\t\t")])],2),t._v(" "),e("Highlight",[e("template",{slot:"icon"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),t._v(" "),e("template",{slot:"title"},[t._v("\n\t\t\t\t\t\t\t\t\tFlexibility\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("template",{slot:"content"},[t._v("\n\t\t\t\t\t\t\t\t\tLand or take-off from the airports that\n\t\t\t\t\t\t\t\t\tsuit you best and plan with the timings\n\t\t\t\t\t\t\t\t\tthat fit your schedule.\n\t\t\t\t\t\t\t\t")])],2),t._v(" "),e("Highlight",[e("template",{slot:"icon"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"}})])]),t._v(" "),e("template",{slot:"title"},[t._v(" Privacy ")]),t._v(" "),e("template",{slot:"content"},[t._v("\n\t\t\t\t\t\t\t\t\tTake advantage of privacy with an\n\t\t\t\t\t\t\t\t\taircraft fully dedicated to you and your\n\t\t\t\t\t\t\t\t\ttravel companions.\n\t\t\t\t\t\t\t\t")])],2),t._v(" "),e("Highlight",[e("template",{slot:"icon"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"}})])]),t._v(" "),e("template",{slot:"title"},[t._v(" Comfort ")]),t._v(" "),e("template",{slot:"content"},[t._v("\n\t\t\t\t\t\t\t\t\tEnjoy à la carte meals, the finest\n\t\t\t\t\t\t\t\t\tdrinks and stay productive while on the\n\t\t\t\t\t\t\t\t\tgo with sattelite wi-fi.\n\t\t\t\t\t\t\t\t")])],2)],1)])],2)],1),t._v(" "),e("div",{staticClass:"col-span-2 order-5"},[e("Content",{class:["text-center"]},[e("template",{slot:"title"},[t._v("Fleet")]),t._v(" "),e("template",{slot:"heading"},[t._v("Aircraft categories")]),t._v(" "),e("template",{slot:"content"},[t._v("\n\t\t\t\t\t\tDiscover the different private jet models across the\n\t\t\t\t\t\tcategories available for charter.\n\t\t\t\t\t")])],2),t._v(" "),e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.fleet,(function(t,r){return e("swiper-slide",{key:r},[e("Card",{attrs:{aircraft:t}})],1)})),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])],1)])}),[],!1,null,"349fbe00",null);e.default=component.exports;installComponents(component,{PageHeading:r(302).default,Content:r(300).default,Highlight:r(315).default,Card:r(323).default})}}]);