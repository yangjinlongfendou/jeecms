webpackJsonp([151],{bc80:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("lcoF"),r=t("5HJ5"),i=t("x1ym"),l={mixins:[s.a,r.a],data:function(){var e=i.a.required();return{dbType:"",url:{url1:""},dataInfo:{origName:this.$route.query.id,distName:this.$route.query.id},rules:{distName:[e]},params:{}}},methods:{update:function(){console.log("213"),this.updateDataInfo(this.url.url1,this.dataInfo,"list")}},created:function(){var e=this;this.$http.post(this.$api.frameGetDB).then(function(a){e.dbType=a.body.db,"mysql"===e.dbType&&(e.url.url1=e.$api.mysqlDataRename),"oracle"===e.dbType&&(e.url.url1=e.$api.oracleDataRename),"sqlserver"===e.dbType&&(e.url.url1=e.$api.sqlserverDataRename),"db2"===e.dbType&&(e.url.url1=e.$api.db2DataRename)}),this.loading=!1}},o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),e._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:e.dataInfo,rules:e.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-100",attrs:{label:"原名称:",prop:"origName"}},[t("el-input",{staticClass:"cms-width",attrs:{disabled:!0},model:{value:e.dataInfo.origName,callback:function(a){e.$set(e.dataInfo,"origName",a)},expression:"dataInfo.origName"}})],1),e._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"新名称:",prop:"distName"}},[t("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.distName,callback:function(a){e.$set(e.dataInfo,"distName",a)},expression:"dataInfo.distName"}})],1),e._v(" "),t("div",{staticClass:"form-footer"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/backupsDir/rename",expression:"'/backupsDir/rename'"}],attrs:{type:"primary"},on:{click:function(a){e.update()}}},[e._v("提交")]),e._v(" "),t("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},n=[],d={render:o,staticRenderFns:n},u=d,m=t("Mw9A"),c=m(l,u,!1,null,null,null);a.default=c.exports}});