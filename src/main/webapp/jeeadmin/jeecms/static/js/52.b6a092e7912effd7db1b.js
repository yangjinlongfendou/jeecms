webpackJsonp([52],{NFgv:function(a,t,e){"use strict";function s(a){e("z1AQ")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("2sCs"),r=e.n(i),n={data:function(){return{dateArr:"",params:{flag:4,begin:"",statisDay:"",end:""},time:"",date:{year:"",month:"",day:""},dataInfo:{pvTotal:0,visitorTotal:0,ipTotal:0,list:[]},chartLine:null,chartPie:null,chartLineOptions:{tooltip:{trigger:"axis"},legend:{data:["浏览量(pv)","独立访客数(uv)","ip数"]},grid:{left:"5%",right:"2%",bottom:"14%"},xAxis:{type:"category",splitLine:{show:!1},boundaryGap:!0,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{splitLine:{show:!1},type:"value"},series:[{name:"浏览量(pv)",type:"line",showSymbol:!1,smooth:!0,data:[120,132,101,134,90,230,210]},{name:"独立访客数(uv)",type:"line",showSymbol:!1,smooth:!0,data:[220,182,191,234,290,330,310]},{name:"ip数",type:"line",showSymbol:!1,smooth:!0,data:[150,232,201,154,190,330,410]}]}}},methods:{rangeTime:function(a){null!=a?(this.params.begin=a[0],this.params.end=a[1],this.params.flag=3,a[0]===a[1]?this.time=a[0]:this.time=a[0]+"-"+a[1]):(this.params.begin="",this.params.end="",this.params.flag=4,this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),this.getDataInfo()},query:function(a){this.dateArr="",this.params.begin="",this.params.end="",4===a&&(this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),6===a&&(this.time=this.date.year+"-"+this.date.month+"-"+(this.date.day-1)),1===a&&(this.time=this.date.year+"-"+this.date.month),2===a&&(this.time=this.date.year),this.getDataInfo()},getDataInfo:function(){var a=this;r.a.post(this.$api.flowPvList,this.params).then(function(t){a.dataInfo.pvTotal=t.body.pvTotal,a.dataInfo.visitorTotal=t.body.visitorTotal,a.dataInfo.ipTotal=t.body.ipTotal,a.dataInfo.list=t.body.list;var e=[],s=[[],[],[]];for(var i in t.body.list)e.push(a.timeFormat(a.params.flag,t.body.list[i][4])),s[0].push(t.body.list[i][0]),s[1].push(t.body.list[i][2]),s[2].push(t.body.list[i][1]);a.setChartLineOptions(e,s)})},setChartLineOptions:function(a,t){var e={xAxis:{data:a},series:[{name:"浏览量(pv)",data:t[0]},{name:"独立访客数(uv)",smooth:!0,data:t[1]},{name:"ip数",data:t[2]}]};this.chartLine.setOption(e)},timeFormat:function(a,t){var e="0";if(4==a||6==a)switch(t){case 0:e="00:00-00:59";break;case 1:e="01:00-01:59";break;case 2:e="02:00-02:59";break;case 3:e="03:00-03:59";break;case 4:e="04:00-04:59";break;case 5:e="05:00-05:59";break;case 6:e="06:00-06:59";break;case 7:e="07:00-07:59";break;case 8:e="08:00-08:59";break;case 9:e="09:00-09:59";break;case 10:e="10:00-10:59";break;case 11:e="11:00-11:59";break;case 12:e="12:00-12:59";break;case 13:e="13:00-13:59";break;case 14:e="14:00-14:59";break;case 15:e="15:00-15:59";break;case 16:e="16:00-16:59";break;case 17:e="17:00-17:59";break;case 18:e="18:00-18:59";break;case 19:e="19:00-19:59";break;case 20:e="20:00-20:59";break;case 21:e="21:00-21:59";break;case 22:e="22:00-22:59";break;case 23:e="23:00-23:59";break;default:e="99:99:99~99:99:99:99"}if(2==a){var s=new Date;switch(t){case 1:e=s.getFullYear()+"-01";break;case 2:e=s.getFullYear()+"-02";break;case 3:e=s.getFullYear()+"-03";break;case 4:e=s.getFullYear()+"-04";break;case 5:e=s.getFullYear()+"-05";break;case 6:e=s.getFullYear()+"-06";break;case 7:e=s.getFullYear()+"-07";break;case 8:e=s.getFullYear()+"-08";break;case 9:e=s.getFullYear()+"-09";break;case 10:e=s.getFullYear()+"-10";break;case 11:e=s.getFullYear()+"-11";break;case 12:e=s.getFullYear()+"-12";break;default:e="9999-99-99"}}return 1!=a&&3!=a||(e=t),e}},created:function(){var a=new Date,t=a.getFullYear(),e=a.getMonth()+1,s=a.getDate();this.date.year=t,this.date.month=e,this.date.day=s,this.year=t,this.month=e,this.time=t+"-"+e+"-"+s,this.getDataInfo()},mounted:function(){this.chartLine=echarts.init(document.getElementById("chartLine")),this.chartLine.setOption(this.chartLineOptions)}},l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"cms-body cms-chart-box"},[e("div",{staticClass:"cms-list-header",staticStyle:{"padding-left":"0"}},[e("h5",{staticClass:"data-header-title"},[a._v("趋势分析("+a._s(a.time)+")")]),a._v(" "),e("div",{staticClass:"flex-date"},[e("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[a._v("日期：")]),a._v(" "),e("el-radio-group",{staticStyle:{"margin-right":"10px"},attrs:{size:"small"},on:{change:a.query},model:{value:a.params.flag,callback:function(t){a.$set(a.params,"flag",t)},expression:"params.flag"}},[e("el-radio-button",{attrs:{label:4}},[a._v("今日")]),a._v(" "),e("el-radio-button",{attrs:{label:6}},[a._v("昨日")]),a._v(" "),e("el-radio-button",{attrs:{label:1}},[a._v("本月")]),a._v(" "),e("el-radio-button",{attrs:{label:2}},[a._v("今年")])],1),a._v(" "),e("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",editable:!1,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:a.rangeTime},model:{value:a.dateArr,callback:function(t){a.dateArr=t},expression:"dateArr"}})],1)]),a._v(" "),e("ul",{staticClass:"clearfix"},[e("li",{staticClass:"data-item"},[a._m(0),a._v(" "),e("p",{staticClass:"data-num"},[a._v(a._s(a.dataInfo.pvTotal))])]),a._v(" "),e("li",{staticClass:"data-item"},[a._m(1),a._v(" "),e("p",{staticClass:"data-num"},[a._v(a._s(a.dataInfo.visitorTotal))])]),a._v(" "),e("li",{staticClass:"data-item"},[a._m(2),a._v(" "),e("p",{staticClass:"data-num"},[a._v(a._s(a.dataInfo.ipTotal))])])]),a._v(" "),e("div",{staticClass:"chart-style",attrs:{id:"chartLine"}}),a._v(" "),e("table",{staticClass:"data-table"},[a._m(3),a._v(" "),a._l(a.dataInfo.list,function(t,s){return e("tr",{key:s},[e("td",[a._v(a._s(a.timeFormat(a.params.flag,t[4])))]),a._v(" "),e("td",[a._v(a._s(t[0]))]),a._v(" "),e("td",[a._v(a._s(t[2]))]),a._v(" "),e("td",[a._v(a._s(t[1]))])])})],2)])},o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",{staticClass:"data-title"},[a._v("浏览量(pv)"),e("i",{staticClass:"iconfont icon-kongzhitai-zhushi"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",{staticClass:"data-title"},[a._v("独立访客数(UV)"),e("i",{staticClass:"iconfont icon-kongzhitai-zhushi"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",{staticClass:"data-title"},[a._v("IP 数"),e("i",{staticClass:"iconfont icon-kongzhitai-zhushi"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("tr",[e("th",[a._v("时段")]),a._v(" "),e("th",[a._v("浏览量(pv)")]),a._v(" "),e("th",[a._v("独立访客数(uv)")]),a._v(" "),e("th",[a._v("IP 数")])])}],c={render:l,staticRenderFns:o},d=c,h=e("Mw9A"),m=s,v=h(n,d,!1,m,"data-v-a4c8faf6",null);t.default=v.exports},Oqcl:function(a,t,e){t=a.exports=e("BkJT")(!1),t.push([a.i,"\n.data-item[data-v-a4c8faf6] {\n  float: left;\n  min-width: 170px;\n  margin-top: 30px;\n}\n.data-item .data-title[data-v-a4c8faf6] {\n    font-size: 12px;\n    color: #878d99;\n    margin-bottom: 17px;\n}\n.data-item .data-num[data-v-a4c8faf6] {\n    color: #353535;\n    font-size: 24px;\n}\n.chart-style[data-v-a4c8faf6] {\n  width: 100%;\n  height: 380px;\n  border-bottom: 1px dashed #eee;\n  margin-bottom: 15px;\n}\n",""])},z1AQ:function(a,t,e){var s=e("Oqcl");"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e("8bSs")("4d3329f5",s,!0)}});