webpackJsonp([110],{KwuB:function(a,e,t){var i=t("Sjpf");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);t("8bSs")("9b4db3a0",i,!0)},Sjpf:function(a,e,t){e=a.exports=t("BkJT")(!1),e.push([a.i,"\n.el-dialog__body[data-v-383dbff7]{\n    min-height: 150px;\n}\n",""])},kIK3:function(a,e,t){"use strict";function i(a){t("KwuB")}Object.defineProperty(e,"__esModule",{value:!0});var s=t("5HJ5"),l=t("x1ym"),o=(t("P9l9"),t("2sCs"),{mixins:[s.a],data:function(){var a=l.a.checkTagName(""),e=l.a.required("此项必填");return{params:{queryName:"",pageNo:"",pageSize:""},rules:{name:[e,a],updateName:[e]},addParams:{name:""},updateParams:{updateId:"",updateName:""},dialogVisible:!1,dialogVisible1:!1,tapTipSave:!1,regDefId:0}},methods:{save:function(){var a=this;this.$refs.form.validate(function(e){if(!e)return!1;a.$http.post(a.$api.wordTagSave,{name:a.addParams.name}).then(function(e){a.dialogVisible=!1,"200"==e.code&&(a.addParams.name="",a.successMessage("添加成功"),a.initTableData(a.$api.wordTagList,a.params)),a.loading=!1}).catch(function(e){a.dialogVisible=!1,a.loading=!1})})},edit:function(a,e){this.updateParams.updateName="",this.updateParams.updateName=a,this.updateParams.updateId=e;var t=[l.a.required("此项必填")];t.push(l.a.checkTagName(e)),this.rules.updateName=t,this.tapTipSave=!1,this.dialogVisible1=!0},update:function(){var a=this;this.$refs.form1.validate(function(e){if(!e)return!1;a.$http.post(a.$api.wordTagUpdate,{id:a.updateParams.updateId,name:a.updateParams.updateName}).then(function(e){a.dialogVisible1=!1,"200"==e.code&&(a.successMessage("修改成功"),a.updateParams.updateId="",a.initTableData(a.$api.wordTagList,a.params)),a.loading=!1}).catch(function(e){a.dialogVisible=!1,a.loading=!1})})},handleClose:function(a){this.updateParams.updateId="",a()}},created:function(){this.initTableData(this.$api.wordTagList,this.params)}}),r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"cms-body"},[t("div",{staticClass:"cms-list-header"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/tag/add",expression:"'/word/tag/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){a.dialogVisible=!0}}},[a._v("添加")]),a._v(" "),t("cms-input",{attrs:{label:"名称"},model:{value:a.params.queryName,callback:function(e){a.$set(a.params,"queryName",e)},expression:"params.queryName"}}),a._v(" "),t("el-button",{on:{click:a.query}},[a._v("查询")])],1),a._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,stripe:""},on:{"selection-change":a.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),a._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"name",label:"名称",align:"left"}}),a._v(" "),t("el-table-column",{attrs:{prop:"count",label:"文档数",align:"right"}}),a._v(" "),t("el-table-column",{attrs:{prop:"name",label:"操作",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return t("div",{},[t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/tag/edit",expression:"'/word/tag/edit'"}],attrs:{type:"edit"},nativeOn:{click:function(t){a.edit(e.row.name,e.row.id)}}}),a._v(" "),t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/tag/delete",expression:"'/word/tag/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(t){a.deleteBatch(a.$api.wordTagDelete,e.row.id)}}})],1)}}])})],1),a._v(" "),t("div",{staticClass:"cms-list-footer "},[t("div",{staticClass:"cms-left"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/tag/delete",expression:"'/word/tag/delete'"}],attrs:{disabled:a.disabled},on:{click:function(e){a.deleteBatch(a.$api.wordTagDelete,a.ids)}}},[a._v("批量删除")])],1),a._v(" "),t("cms-pagination",{attrs:{total:a.total},on:{change:a.getPages}})],1),a._v(" "),t("el-dialog",{attrs:{title:"Tag管理 - 添加",visible:a.dialogVisible,width:"30%","before-close":a.handleClose},on:{"update:visible":function(e){a.dialogVisible=e}}},[t("span",[t("el-form",{ref:"form",attrs:{model:a.addParams,rules:a.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{model:{value:a.addParams.name,callback:function(e){a.$set(a.addParams,"name",e)},expression:"addParams.name"}})],1)],1)],1),a._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.dialogVisible=!1}}},[a._v("取消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:a.save}},[a._v("确定")])],1)]),a._v(" "),t("el-dialog",{attrs:{title:"Tag管理 - 修改",visible:a.dialogVisible1,width:"30%","close-on-click-modal":!1,"before-close":a.handleClose},on:{"update:visible":function(e){a.dialogVisible1=e}}},[t("span",[t("el-form",{ref:"form1",attrs:{model:a.updateParams,rules:a.rules,"label-width":"80px"}},[t("el-form-item",{staticClass:"flex-100",attrs:{label:"名称",prop:"updateName"}},[t("el-input",{staticClass:"cms-width",model:{value:a.updateParams.updateName,callback:function(e){a.$set(a.updateParams,"updateName",e)},expression:"updateParams.updateName"}})],1)],1)],1),a._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.dialogVisible1=!1}}},[a._v("取消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:a.update}},[a._v("确定")])],1)])],1)},n=[],d={render:r,staticRenderFns:n},c=d,p=t("Mw9A"),u=i,m=p(o,c,!1,u,"data-v-383dbff7",null);e.default=m.exports}});