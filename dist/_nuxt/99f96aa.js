(window.webpackJsonp=window.webpackJsonp||[]).push([[27,6,10,18],{300:function(t,e,r){"use strict";r.r(e);var l=r(25),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-10"},[e("h4",{staticClass:"text-base text-jet-light font-semibold tracking-wide uppercase"},[t._t("title")],2),t._v(" "),e("h2",{staticClass:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._t("heading")],2),t._v(" "),e("p",{staticClass:"mt-4 mb-6 text-gray-500"},[t._t("content")],2)])}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,r){"use strict";r.r(e);var l={name:"PageHeading"},n=r(25),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"relative mx-auto pt-20 text-center pb-24"},[e("h1",{staticClass:"relative text-4xl font-bold tracking-tight text-jet-light z-50 sm:text-5xl after:content-[''] after:absolute after:border-b-4 after:border-jet-dark after:w-12 after:-bottom-7 after:left-1/2 after:-translate-x-1/2"},[t._t("title"),t._v(" "),e("span",{staticClass:"absolute left-0 bottom-8 md:bottom-10 w-full h-full z-10 text-7xl md:text-8xl text-slate-300 font-black opacity-20"},[t._t("title")],2)],2)])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);var l={name:"Card",props:{aircraft:Object}},n=r(25),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white rounded-lg border-2 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},[e("div",{staticClass:"bg-gradient-tui h-52"},[e("div",{staticClass:"h-full bg-pattern p-10 flex items-center"},[e("nuxt-img",{staticClass:"rounded-t-lg",attrs:{src:t.aircraft.properties.img,width:"100%",height:"100%",alt:"aircraft image"}})],1)]),t._v(" "),e("div",{staticClass:"p-5"},[e("h3",{staticClass:"mb-5 text-2xl font-^medium tracking-tight text-gray-900 dark:text-white"},[t._v("\n\t\t\t"+t._s(t.aircraft.type)+"\n\t\t")]),t._v(" "),e("ul",{staticClass:"columns-2 mb-8 space-y-3 text-left text-gray-500 dark:text-gray-400"},[e("li",{staticClass:"flex items-center text-sm space-x-3"},[e("svg",{staticClass:"w-5 h-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.seats))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm space-x-3"},[e("svg",{staticClass:"w-5 h-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.bags))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm capitalize space-x-3"},[e("svg",{staticClass:"h-5 w-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M208 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),t._v(" "),e("path",{attrs:{d:"M256 368v104a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V368M183 274a23.73 23.73 0 01-29.84 16.18h0a23.72 23.72 0 01-16.17-29.84l25-84.28A44.85 44.85 0 01205 144h102a44.85 44.85 0 0143 32.08l25 84.28a23.72 23.72 0 01-16.17 29.84h0a23.73 23.73 0 01-29.78-16.2",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),t._v(" "),e("circle",{attrs:{cx:"256",cy:"56",r:"40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}}),t._v(" "),e("path",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M208 192l-48 160h192l-48-160"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.fa))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm capitalize space-x-3"},[e("svg",{staticClass:"h-5 w-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"}}),t._v(" "),e("path",{attrs:{d:"M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.catering))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm capitalize space-x-3"},[e("svg",{staticClass:"h-5 w-5 text-jet-light",attrs:{viewBox:"0 0 395 395"}},[e("path",{attrs:{fill:"currentColor",d:"M229.412,130.862c-2.405-3.355-6.284-5.346-10.412-5.346h-1.266c-5.524,0-10.424,3.539-12.161,8.782l-27.534,83.09\n\t\t\t\t\t\tl-27.662-83.107c-1.743-5.233-6.639-8.765-12.156-8.765h-0.822c-0.051,0-0.104,0.003-0.153,0.003c-0.053,0-0.105-0.003-0.155-0.003\n\t\t\t\t\t\th-0.998c-5.524,0-10.425,3.539-12.163,8.782l-27.533,83.09l-27.661-83.107c-1.742-5.233-6.64-8.765-12.156-8.765h-1.268\n\t\t\t\t\t\tc-4.13,0-8.007,1.991-10.414,5.346c-2.407,3.357-3.045,7.669-1.72,11.579l40.125,118.344c1.763,5.201,6.643,8.698,12.135,8.698\n\t\t\t\t\t\th0.53c0.153,0,0.303-0.008,0.455-0.014c0.151,0.006,0.302,0.014,0.454,0.014h0.354c5.5,0,10.386-3.511,12.142-8.721l27.845-82.675\n\t\t\t\t\t\tl27.718,82.657c1.751,5.221,6.642,8.739,12.148,8.739h0.527c0.153,0,0.303-0.008,0.456-0.014c0.15,0.006,0.302,0.014,0.454,0.014\n\t\t\t\t\t\th0.355c5.491,0,10.37-3.497,12.134-8.698l40.125-118.344C232.459,138.531,231.818,134.22,229.412,130.862z"}}),t._v(" "),e("path",{attrs:{fill:"currentColor",d:"M347.88,232.295c-4.756-4.416-12.063-4.578-17.01-0.378c-8.521,7.234-19.511,11.218-30.943,11.218\n\t\t\t\t\t\tc-26.069,0-47.277-20.51-47.277-45.721c0-25.116,21.208-45.548,47.277-45.548c11.542,0,22.522,3.916,30.921,11.027\n\t\t\t\t\t\tc5.087,4.306,12.625,3.995,17.339-0.719l0.427-0.427c2.544-2.542,3.899-6.036,3.74-9.628c-0.161-3.592-1.822-6.952-4.58-9.258\n\t\t\t\t\t\tc-13.371-11.184-30.366-17.344-47.848-17.344c-40.598,0-73.628,32.253-73.628,71.898c0,39.739,33.03,72.07,73.628,72.07\n\t\t\t\t\t\tc17.454,0,34.493-6.207,47.979-17.48c2.822-2.36,4.495-5.817,4.589-9.494c0.098-3.678-1.393-7.22-4.087-9.723L347.88,232.295z"}}),t._v(" "),e("path",{attrs:{fill:"currentColor",d:"M313.001,0H81.999C36.785,0,0,36.784,0,81.998v230.993C0,358.211,36.785,395,81.999,395h231.002\n\t\t\t\t\t\tC358.216,395,395,358.211,395,312.991V81.998C395,36.784,358.216,0,313.001,0z M380,312.991C380,349.94,349.945,380,313.001,380\n\t\t\t\t\t\tH81.999C45.056,380,15,349.94,15,312.991V81.998C15,45.055,45.056,15,81.999,15h231.002C349.945,15,380,45.055,380,81.998V312.991z\n\t\t\t\t\t\t"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.toilet))])]),t._v(" "),e("li",{staticClass:"flex items-center text-sm capitalize space-x-3"},[e("svg",{staticClass:"w-5 h-5 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" "),e("span",[t._v(t._s(t.aircraft.properties.range)+"  hours")])])]),t._v(" "),e("h4",{staticClass:"text-right text-xl"},[t._v(t._s(t.aircraft.rate)),e("span",{staticClass:"text-md"},[t._v("/h")])])])])}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,r){"use strict";r.r(e);var l=r(356),n=(r(357),{name:"Services",components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide},directives:{swiper:l.directive},data:function(){return{title:"Services",description:"Updated 02 June 2022",swiperOptions:{slidesPerView:3,spaceBetween:30,pagination:{el:".swiper-pagination",dynamicBullets:!0},breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},fleet:[{type:"Light jets",rate:"€2,800",properties:{range:"3",seats:6,bags:6,catering:"snacks",toilet:"Yes",fa:"No",img:"/images/p100_side.png"}},{type:"Super light jets",rate:"€3,600",properties:{range:"3.5",seats:8,bags:7,catering:"snacks",toilet:"Yes",fa:"Yes",img:"/images/p300_side.png"}},{type:"Midsize jets",rate:"€4,200",properties:{range:"6",seats:9,bags:12,catering:"hot",toilet:"Yes",fa:"Yes",img:"/images/l500_side.png"}},{type:"Heavy jets",rate:"€4,600",properties:{range:"8",seats:13,bags:22,catering:"hot",toilet:"Yes",fa:"Yes",img:"/images/l650_side.png"}},{type:"Ultra long range",rate:"€6,000",properties:{range:"16",seats:16,bags:20,catering:"hot",toilet:"Yes",fa:"Yes",img:"/images/l500_side.png"}},{type:"VIP airliner",rate:"€8,000",properties:{range:"12",seats:19,bags:60,catering:"hot",toilet:"Yes",fa:"Yes",img:"/images/l1000_side.png"}}]}},head:function(){return{title:this.title,meta:[{hid:"about-description",name:"description",content:"At JetSupply we provide an integrated travel solution that takes you from A to B fast, confortable and safe on the most advanced private aircraft available for charter."}]}},setup:function(){return{onSwiper:function(t){console.log(t)},onSlideChange:function(){console.log("slide change")}}}}),o=n,c=r(25),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative container px-4 sm:px-6 lg:px-8"},[e("div",{staticClass:"px-4 sm:px-6 lg:px-8"},[e("PageHeading",[e("template",{slot:"title"},[t._v("\n\t\t\t\t"+t._s(t.title)+"\n\t\t\t")])],2),t._v(" "),e("div",{staticClass:"grid container grid-cols-2 gap-y-10 md:gap-x-8 md:gap-y-40"},[e("div",{staticClass:"col-span-2 md:col-span-1"},[e("Content",[e("template",{slot:"title"},[t._v("Executive travel ")]),t._v(" "),e("template",{slot:"heading"},[t._v("Private jet charter")]),t._v(" "),e("template",{slot:"content"},[t._v("\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing\n\t\t\t\t\t\telit. Aliquam pharetra sapien eget purus ullamcorper\n\t\t\t\t\t\tsuscipit. Suspendisse semper risus efficitur lacus\n\t\t\t\t\t\tpulvinar facilisis. Fusce semper suscipit nisl, sit\n\t\t\t\t\t\tamet faucibus turpis pharetra sed. Aliquam erat\n\t\t\t\t\t\tvolutpat. Nulla convallis tellus et arcu pretium,\n\t\t\t\t\t\tfeugiat ornare velit tristique. Aenean molestie, ex\n\t\t\t\t\t\tin ornare condimentum, odio tellus pulvinar ante, eu\n\t\t\t\t\t\tsemper eros ex at tellus. Nunc ultrices purus et sem\n\t\t\t\t\t\tvestibulum, id pharetra sapien pretium. Etiam quis\n\t\t\t\t\t\torci at sapien consectetur feugiat. Duis consectetur\n\t\t\t\t\t\tlibero tellus, eget ullamcorper metus vestibulum\n\t\t\t\t\t\tquis.\n\t\t\t\t\t")])],2)],1),t._v(" "),e("div",{staticClass:"col-span-2 md:col-span-1 h-full w-full rounded-2xl bg-gradient-tui rounded-3xl shadow-xl max-w-7xl"},[t._v("\n\t\t\t\tImage\n\t\t\t")]),t._v(" "),e("div",{staticClass:"col-span-2"},[e("Content",{class:["text-center"]},[e("template",{slot:"title"},[t._v("Fleet")]),t._v(" "),e("template",{slot:"heading"},[t._v("Aircraft categories")]),t._v(" "),e("template",{slot:"content"},[t._v("\n\t\t\t\t\t\tDiscover the different private jet models across the categories available for charter.\n\t\t\t\t\t")])],2),t._v(" "),e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.fleet,(function(t,r){return e("swiper-slide",{key:r},[e("Card",{attrs:{aircraft:t}})],1)})),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:r(302).default,Content:r(300).default,Card:r(321).default})}}]);