webpackJsonp([99],{LCIg:function(t,a,e){var n=e("MI+d");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("d089eb2a",n,!0)},"MI+d":function(t,a,e){a=t.exports=e("BkJT")(!1),a.push([t.i,"\n.data-item[data-v-4955131a] {\n  float: left;\n  min-width: 170px;\n  margin-top: 30px;\n}\n.data-item .data-title[data-v-4955131a] {\n    font-size: 12px;\n    color: #878d99;\n    margin-bottom: 17px;\n}\n.data-item .data-num[data-v-4955131a] {\n    color: #353535;\n    font-size: 24px;\n}\n.chart-style[data-v-4955131a] {\n  width: 100%;\n  height: 380px;\n  border-bottom: 1px dashed #eee;\n  margin-bottom: 15px;\n}\n",""])},x9nS:function(t,a,e){"use strict";function n(t){e("LCIg")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("2sCs"),i=e.n(s),l={data:function(){return{dateArr:"",time:"",date:{year:"",month:"",day:""},params:{view:"viewDay",channelLevel:1},dataInfo:{}}},methods:{query:function(t){"viewDay"===t&&(this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),"viewMonth"===t&&(this.time=this.date.year+"-"+this.date.month),"view"===t&&(this.time=this.date.year),this.getDataInfo()},getDataInfo:function(){var t=this;i.a.post(this.$api.statisticChannelList,this.params).then(function(a){t.dataInfo=a.body})}},created:function(){var t=new Date,a=t.getFullYear(),e=t.getMonth()+1,n=t.getDate();this.date.year=a,this.date.month=e,this.date.day=n,this.year=a,this.month=e,this.time=a+"-"+e+"-"+n,this.getDataInfo()}},r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"cms-body cms-chart-box"},[e("div",{staticClass:"cms-list-header",staticStyle:{"padding-left":"0"}},[e("h5",{staticClass:"data-header-title"},[t._v("栏目访问量("+t._s(t.time)+")")]),t._v(" "),e("div",{staticClass:"flex-date"},[e("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[t._v("日期：")]),t._v(" "),e("el-radio-group",{staticStyle:{"margin-right":"10px"},attrs:{size:"small"},on:{change:t.query},model:{value:t.params.view,callback:function(a){t.$set(t.params,"view",a)},expression:"params.view"}},[e("el-radio-button",{attrs:{label:"view"}},[t._v("今年")]),t._v(" "),e("el-radio-button",{attrs:{label:"viewMonth"}},[t._v("本月")]),t._v(" "),e("el-radio-button",{attrs:{label:"viewDay"}},[t._v("今日")])],1)],1),t._v(" "),e("div",{staticClass:"flex-date"},[e("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[t._v("选择栏目: ")]),t._v(" "),e("el-radio-group",{staticStyle:{"margin-right":"10px"},attrs:{size:"small"},on:{change:t.query},model:{value:t.params.channelLevel,callback:function(a){t.$set(t.params,"channelLevel",a)},expression:"params.channelLevel"}},[e("el-radio-button",{attrs:{label:1}},[t._v("顶层栏目")]),t._v(" "),e("el-radio-button",{attrs:{label:2}},[t._v("底层栏目")])],1)],1)]),t._v(" "),e("table",{staticClass:"data-table"},[t._m(0),t._v(" "),t._l(t.dataInfo,function(a,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.views))])])})],2)])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("排名")]),t._v(" "),e("th",[t._v("栏目")]),t._v(" "),e("th",[t._v("访问量")])])}],d={render:r,staticRenderFns:o},v=d,c=e("Mw9A"),h=n,m=c(l,v,!1,h,"data-v-4955131a",null);a.default=m.exports}});