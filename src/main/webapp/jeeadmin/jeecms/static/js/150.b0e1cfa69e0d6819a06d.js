webpackJsonp([150],{mzAc:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("5HJ5"),s={mixins:[n.a],data:function(){return{dbType:"",names:"",encoding:"GBK",params:{}}},methods:{getTableData:function(a){var e=this;this.loading=!0,this.$http.post(a).then(function(a){var t=[];for(var n in a.body){var s={name:""};s.name=a.body[n],t.push(s)}e.tableData=t,e.loading=!1}).catch(function(a){e.loading=!1})},backup:function(a){var e=this,t="";"mysql"===this.dbType&&(t=this.$api.mysqlDataBackup),"oracle"===this.dbType&&(t=this.$api.oracleDataBackup),"sqlserver"===this.dbType&&(t=this.$api.sqlserverDataBackup),"db2"===this.dbType&&(t=this.$api.db2DataBackup),this.loading=!0,this.$http.post(t,{tableNames:a,encoding:this.encoding}).then(function(a){"200"==a.code&&(e.successMessage("备份成功"),e.loading=!1)})},checkIds:function(a){var e=[];for(var t in a)e.push(a[t].name);this.names=e.join(","),this.disabled=!(a.length>0)}},created:function(){var a=this;this.$http.post(this.$api.frameGetDB).then(function(e){a.loading=!1,a.dbType=e.body.db,"mysql"===e.body.db&&a.getTableData(a.$api.mysqlDataList),"oracle"===e.body.db&&a.getTableData(a.$api.oracleDataList),"sqlserver"===e.body.db&&a.getTableData(a.$api.sqlserverDataList),"db2"===e.body.db&&a.getTableData(a.$api.db2DataList)})}},i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"cms-body"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,stripe:""},on:{"selection-change":a.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),a._v(" "),t("el-table-column",{attrs:{prop:"name",label:"表名",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return t("div",{},[t("a",{on:{click:function(t){a.routerLink("/backups/seek",a.dbType,e.row.name)}}},[a._v(a._s(e.row.name))])])}}])}),a._v(" "),t("el-table-column",{attrs:{prop:"name",label:"操作",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return t("div",{},[t("a",{on:{click:function(t){a.routerLink("/backups/seek",a.dbType,e.row.name)}}},[a._v("查看")])])}}])})],1),a._v(" "),t("div",{staticClass:"cms-list-footer "},[t("div",{staticClass:"cms-left"},[t("cms-input",{attrs:{label:"备份文件编码格式"},model:{value:a.encoding,callback:function(e){a.encoding=e},expression:"encoding"}}),a._v(" "),t("span",{staticClass:"gray"},[a._v("一般win平台默认GBK linux默认UTF-8")]),a._v(" "),t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/db/backup",expression:"'/db/backup'"}],attrs:{disabled:a.disabled},nativeOn:{click:function(e){a.backup(a.names)}}},[a._v("备份")])],1)])],1)},l=[],c={render:i,staticRenderFns:l},o=c,d=t("Mw9A"),r=d(s,o,!1,null,null,null);e.default=r.exports}});