webpackJsonp([148],{Bwzv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("5HJ5"),i={mixins:[l.a],data:function(){return{params:{}}},methods:{getTableData:function(e){var t=this;this.loading=!0,this.$http.post(e,{tablename:this.$route.query.id}).then(function(e){t.tableData=e.body,t.loading=!1}).catch(function(e){t.loading=!1})}},created:function(){console.log(this.$route.query.type),"mysql"===this.$route.query.type&&this.getTableData(this.$api.mysqlDataListfields),"oracle"===this.$route.query.type&&this.getTableData(this.$api.oracleDataListfields),"sqlserver"===this.$route.query.type&&this.getTableData(this.$api.sqlserverDataListfields),"db2"===this.$route.query.type&&this.getTableData(this.$api.db2DataListfields)}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("cms-back"),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[a("el-table-column",{attrs:{prop:"name",label:"表名",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fieldType",label:"字段类型",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fieldProperty",label:"字段属性",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fieldDefault",label:"默认值",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"extra",label:"附加属性",align:"center"}})],1)],1)},n=[],r={render:s,staticRenderFns:n},o=r,c=a("Mw9A"),u=c(i,o,!1,null,null,null);t.default=u.exports}});