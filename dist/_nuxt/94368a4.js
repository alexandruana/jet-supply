(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{311:function(t,n,e){var content=e(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(91).default)("9db41c0a",content,!0,{sourceMap:!1})},321:function(t,n,e){"use strict";e(311)},322:function(t,n,e){var o=e(90)((function(i){return i[1]}));o.push([t.i,".pdf-container[data-v-66eebe80]{height:100vh}",""]),o.locals={},t.exports=o},333:function(t,n,e){"use strict";e.r(n);var o=e(10),r=(e(54),e(9),e(37),e(38),{name:"PSPDFKit",props:{pdfFile:{type:String,required:!0}},PSPDFKit:null,mounted:function(){var t=this;this.loadPSPDFKit().then((function(n){t.$emit("loaded",n)}))},watch:{pdfFile:function(t){t&&this.loadPSPDFKit()}},methods:{loadPSPDFKit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.e(17).then(e.t.bind(null,328,7)).then((function(n){return t.PSPDFKit=n,n.unload(".pdf-container"),n.load({document:t.pdfFile,container:".pdf-container",baseUrl:"http://localhost:3000/"})})).catch((function(t){console.error(t)}));case 1:case"end":return n.stop()}}),n)})))()}}}),c=(e(321),e(25)),component=Object(c.a)(r,(function(){return(0,this._self._c)("div",{staticClass:"pdf-container"})}),[],!1,null,"66eebe80",null);n.default=component.exports}}]);