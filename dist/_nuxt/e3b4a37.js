(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{375:function(t,o,l){"use strict";l.r(o);var n={name:"ScrollToTopButton",mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=this.$refs.scrollTopButton;window.scrollY>0?t.classList.remove("invisible"):t.classList.add("invisible")},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},e=l(25),component=Object(e.a)(n,(function(){var t=this._self._c;return t("div",{ref:"scrollTopButton",staticClass:"invisible sticky w-full flex justify-end bottom-0 pb-3 pr-5 lg:pr-16 transition"},[t("div",{staticClass:"text-gray-400 hover:text-blue-400 transition"},[t("button",{on:{click:this.scrollToTop}},[t("svg",{staticClass:"w-10 h-10 text-jet-light",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])])])])}),[],!1,null,null,null);o.default=component.exports}}]);