webpackJsonp([1],{"7PBM":function(t,e){},M7FK:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},a,!1,function(t){i("M7FK")},null,null).exports,o=i("/ocq"),r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"uk-navbar-container",attrs:{"uk-navbar":""}},[i("div",{staticClass:"uk-navbar-center"},[i("a",{staticClass:"uk-navbar-item",attrs:{href:"javascript:void(0);"},on:{click:function(e){t.$emit("switch",0)}}},[t._v("首页")]),t._v(" "),i("a",{staticClass:"uk-navbar-item",attrs:{href:"javascript:void(0);"},on:{click:function(e){t.$emit("switch",1)}}},[t._v("模板代码")]),t._v(" "),i("a",{staticClass:"uk-navbar-item",attrs:{href:"javascript:void(0);"},on:{click:function(e){t.$emit("switch",2)}}},[t._v("像素画布")])])])},staticRenderFns:[]};var c=i("VU/8")({name:"menus"},r,!1,function(t){i("kNlR")},null,null).exports,l=i("gRt3"),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-container uk-margin-top"},[i("div",{attrs:{"uk-alert":""}},[t._v("\n          通过模板生成重复代码,占位符是\n    "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.holder,expression:"holder"}],staticClass:"tempMark",attrs:{type:"text"},domProps:{value:t.holder},on:{input:function(e){e.target.composing||(t.holder=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"uk-grid",attrs:{"uk-grid":""}},[i("div",{staticClass:"uk-width-1-2"},[i("div",[i("div",{staticClass:"uk-form-label"},[t._v("template:")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.template,expression:"template"}],staticClass:"tempText uk-textarea",attrs:{name:"template",id:"template",cols:"30",rows:"10"},domProps:{value:t.template},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"tab",9,e.key,"Tab")?t.tabMarkdown(e):null},input:function(e){e.target.composing||(t.template=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"uk-margin-top"},[i("button",{staticClass:"uk-button uk-button-primary",on:{click:t.generateTemplate}},[t._v("生成")]),t._v(" "),i("button",{staticClass:"uk-button uk-button-danger",class:{"uk-hidden":!t.status},on:{click:t.clear}},[t._v("重置")]),t._v(" "),i("div",{staticClass:"uk-align-right"},[i("button",{staticClass:"uk-button uk-button-secondary",class:{"uk-hidden":!t.status},on:{click:function(e){t.getCode(1)}}},[t._v("增加")]),t._v(" "),i("button",{staticClass:"uk-button uk-button-secondary",class:{"uk-hidden":!t.status},on:{click:function(e){t.getCode(0)}}},[t._v("覆盖")])])])]),t._v(" "),i("div",{staticClass:"uk-width-1-2"},t._l(t.markList,function(e,n){return i("div",{},[i("div",{staticClass:"uk-form-label"},[t._v(t._s(n)+":")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.markList[n],expression:"markList[index]"}],staticClass:"uk-input",attrs:{type:"text"},domProps:{value:t.markList[n]},on:{focus:t.focus,input:function(e){e.target.composing||t.$set(t.markList,n,e.target.value)}}})])}),0)]),t._v(" "),i("div",{staticClass:"uk-grid uk-margin-top",class:{"uk-hidden":!t.status},attrs:{"uk-grid":""}},[i("div",{staticClass:"uk-width-1-1@l"},[i("div",{staticClass:"uk-form-label"},[t._v("生成代码:")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.generateCode,expression:"generateCode"}],staticClass:"uk-textarea",attrs:{name:"result",id:"result",cols:"30",rows:"10"},domProps:{value:t.generateCode},on:{input:function(e){e.target.composing||(t.generateCode=e.target.value)}}})])])])},staticRenderFns:[]};var d=function(t){i("sU3i")},h=i("VU/8")(l.a,u,!1,d,null,null).exports,p=i("Icdr");i("Vb+l"),i("4UDB"),i("GbHy"),i("Oq2I"),i("80cc"),i("ILx8"),i("miEh"),i("2tOJ");var v={name:"Chart",data:function(){return{chart:""}},props:{id:{type:String},width:{type:String,default:"100%"},height:{type:String,default:"400px"},option:{type:Object}},computed:{style:function(){return{height:this.height,width:this.width}}},mounted:function(){this.init()},watch:{option:{handler:function(t,e){this.chart?t&&this.chart.setOption(t):this.init()},deep:!0}},methods:{init:function(){this.chart=p.init(document.getElementById(this.id)),this.chart.setOption(this.option),window.addEventListener("resize",this.chart.resize)}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{style:this.style,attrs:{id:this.id,height:this.height}})},staticRenderFns:[]},f={name:"gold-price",components:{Chart:i("VU/8")(v,m,!1,null,null,null).exports},data:function(){return{goldPrices:{visualMap:{show:!1,type:"continuous",seriesIndex:0,min:0,max:400},title:{left:"center",text:"Gold Price"},tooltip:{trigger:"axis"},xAxis:{data:[],boundaryGap:!1},yAxis:{splitLine:{show:!1},type:"value",scale:!0},series:[]},priceList:{},isView:!1}},mounted:function(){this.getGoldPrices()},methods:{getGoldPrices:function(){var t=this;this.$http.get("http://localhost:8080/api/task/golds").then(function(e){var i=e.data;"000000"==i.rspCode&&(t.priceList=i.data,t.initGoldPrices(i.data),t.isView=!0)}).catch(function(e){console.log("failed"),t.isView=!1})},initGoldPrices:function(t){console.log(t),t.sort(function(t,e){return t.createTime-e.createTime});var e={name:"price",type:"line",showSymbol:!1,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},data:[]};for(var i in t){this.goldPrices.xAxis.data.push(t[i].time);var n=t[i].price;n=parseFloat(n).toFixed(2),e.data.push(n)}this.goldPrices.series.push(e)}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.isView?e("chart",{staticClass:"chart",attrs:{id:"goldChart",option:this.goldPrices}}):this._e()],1)},staticRenderFns:[]};var g={name:"index",data:function(){return{msg:"index"}},components:{GoldPrice:i("VU/8")(f,k,!1,function(t){i("7PBM")},"data-v-5e497782",null).exports},mounted:function(){}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"uk-container"},[e("div",{staticClass:"uk-grid",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-1-1@m"},[e("gold-price")],1)])])},staticRenderFns:[]};var _=i("VU/8")(g,C,!1,function(t){i("ROo2")},"data-v-5cb18c97",null).exports,w=i("Zzkc"),x=i("2Pnh"),b=i.n(x),y=i("NpXC"),P=i.n(y),E={name:"pixelcanvas",data:function(){return{canvasSize:1e3,row:40,color:{hex:"#000000",hex8:"#000000FF"},defaultColor:"#9e9e9e2b",leftClick:!1,isEraser:!1,prevColor:""}},components:{"photoshop-picker":w.Photoshop,"sketch-picker":w.Sketch},watch:{row:function(t){t&&(this.row=parseInt(t),this.$nextTick(function(){document.getElementById("pixel").style.width=16*this.row+5+"px"}))}},mounted:function(){},methods:{changeBg:function(){event.target.style.backgroundColor=this.color.hex8},overChangeBg:function(){var t=event.target;1==event.which&&(t.style.backgroundColor=this.color.hex8)},resetBlock:function(){for(var t=document.getElementsByClassName("col"),e=0;e<t.length;e++)t[e].style.backgroundColor=this.defaultColor},noDrag:function(){return event.preventDefault(),!1},earserBlock:function(){0==this.isEraser&&(this.prevColor=this.color.hex8,this.color.hex8=this.defaultColor,this.isEraser=!0)},blockKeyUp:function(){console.log("left key up"),this.isEraser&&(this.isEraser=!1,this.color.hex8=this.prevColor)},savePixel:function(){b()(document.getElementById("pixel")).then(function(t){var e=document.getElementById("pixel"),i=e.offsetWidth,n=e.offsetHeight;P.a.saveAsPNG(t,i,n)})}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"uk-container"},[i("div",{attrs:{"uk-grid":""}},[i("div",{staticClass:"uk-width-1-3@m"},[i("div",{staticClass:"uk-margin-top"},[i("div",{staticClass:"uk-form-label"},[t._v("格子个数:"+t._s(t.row))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.row,expression:"row"}],staticClass:"uk-range",attrs:{type:"range",min:"0",max:"100",step:"1"},domProps:{value:t.row},on:{__r:function(e){t.row=e.target.value}}})])]),t._v(" "),i("div",{staticClass:"uk-width-1-3"},[i("div",{staticClass:"uk-margin-top"},[i("button",{staticClass:"uk-button uk-button-primary",on:{click:t.resetBlock}},[t._v("重置")]),t._v(" "),i("button",{staticClass:"uk-button",on:{click:t.earserBlock}},[t._v("橡皮檫")]),t._v(" "),i("button",{staticClass:"uk-button uk-button-primary",on:{click:t.savePixel}},[t._v("保存图片")])])])]),t._v(" "),i("div",{staticClass:"out-main",attrs:{"uk-grid":""}},[i("div",{staticClass:"uk-width-expand@m"},[i("div",{attrs:{id:"pixel"},on:{mouseleave:t.blockKeyUp}},t._l(t.row,function(e){return i("div",{staticClass:"row"},t._l(t.row,function(e){return i("div",{staticClass:"col",class:{eraserCur:t.isEraser},on:{click:t.changeBg,mouseover:t.overChangeBg,dragstart:t.noDrag,mouseup:t.blockKeyUp}})}),0)}),0)]),t._v(" "),i("div",{staticClass:"colorPlat uk-width-auto"},[i("sketch-picker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)])])},staticRenderFns:[]};var L=i("VU/8")(E,B,!1,function(t){i("Nwno")},null,null).exports,N={name:"layouts",data:function(){return{showComponent:_,componentMap:{0:_,1:h,2:L}}},components:{menus:c,templateCode:h,index:_,pixelcanvas:L},methods:{switchComponent:function(t){this.showComponent=this.componentMap[t]}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("menus",{on:{switch:this.switchComponent}}),this._v(" "),e("keep-alive",[e(this.showComponent,{tag:"component"})],1)],1)},staticRenderFns:[]};var R=i("VU/8")(N,$,!1,function(t){i("c66I")},"data-v-640688ec",null).exports;n.a.use(o.a);var F=new o.a({routes:[{path:"/",name:"layouts",component:R}]}),U=i("mtWM"),V=i.n(U),I=i("2EC8"),M=i.n(I),S=i("/zV6"),T=i.n(S);i("tNi4");M.a.use(T.a);n.a.config.productionTip=!1,n.a.prototype.$http=V.a,n.a.use(function(t,e){t.prototype.$uikit=M.a}),new n.a({el:"#app",router:F,components:{App:s},template:"<App/>"})},Nwno:function(t,e){},ROo2:function(t,e){},c66I:function(t,e){},gRt3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={name:"templateCode",data:function(){return{holder:"%%",template:"",markList:[],generateCode:"",status:!1}},mounted:function(){var t=window.localStorage.holder;this.holder=void 0==t||""==t||"undefined"==t?"%%":t},watch:{holder:function(t){window.localStorage.holder=t}},methods:{generateTemplate:function generateTemplate(){this.status=!0,this.generateCode="";var len=(this.template.match(eval("/"+this.holder+"/g"))||[]).length;this.markList=[];for(var i=0;i<len;i++)this.markList.push("")},clear:function(){this.template="",this.markList=[],this.generateCode="",this.status=!1},getCode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;for(var e in this.temp=this.template+"\n",this.markList)this.temp=this.temp.replace(this.holder,this.markList[e]);0==t?this.generateCode=this.temp:this.generateCode+=this.temp},tabMarkdown:function(t){t.preventDefault(),this.textarea=document.getElementById("template");var e=this.textarea.selectionStart,i=this.textarea.selectionEnd,n=window.getSelection().toString();n="    "+n.replace(/\n/g,"\n    "),this.textarea.value=this.textarea.value.substring(0,e)+n+this.textarea.value.substring(i),this.textarea.setSelectionRange(e+"    ".length,e+n.length)},focus:function(t){t.currentTarget.select()}}}},kNlR:function(t,e){},sU3i:function(t,e){},tNi4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.343001e4594cea725117.js.map