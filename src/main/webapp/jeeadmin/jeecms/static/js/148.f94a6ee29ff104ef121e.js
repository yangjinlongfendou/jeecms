webpackJsonp([148],{ZflG:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("a3Yh"),l=t.n(i),s=t("5HJ5"),n=t("x1ym"),r=(t("2sCs"),{mixins:[s.a],data:function(){var a,e=n.a.required("此项必填");return{params:{pageNo:"",pageSize:"",queryType:""},rules:(a={name:[e],type:[e]},l()(a,"type",[e]),l()(a,"name",[e]),a),addParam:{name:"",type:"",value:""},updateParam:{id:"",name:"",value:"",type:""},dialogVisible:!1,dialogVisible1:!1,tapTipSave:!1,updateCheck:!1,addCheck:!1}},methods:{check:function(){var a=this;this.$http.post(this.$api.dictionaryCheckValue,{type:this.addParam.type,value:this.addParam.value}).then(function(e){e.body.result?a.addCheck=!0:(a.addCheck=!1,a.save()),a.loading=!1}).catch(function(e){a.dialogVisible=!1,a.loading=!1})},add:function(){this.addParam.type="",this.addParam.name="",this.addParam.value="",this.updateCheck=!1,this.dialogVisible=!0},checkUpdate:function(){var a=this;this.$http.post(this.$api.dictionaryCheckValue,{type:this.updateParam.type,value:this.updateParam.value}).then(function(e){e.body.result?a.updateCheck=!0:(a.updateCheck=!1,a.update()),a.loading=!1}).catch(function(e){a.dialogVisible=!1,a.loading=!1})},save:function(){var a=this;this.$refs.form.validate(function(e){if(!e)return!1;a.$http.post(a.$api.dictionarySave,a.addParam).then(function(e){"成功!"===e.message&&(a.dialogVisible=!1,a.initTableData(a.$api.dictionaryList,a.params)),a.loading=!1}).catch(function(e){a.dialogVisible=!1,a.loading=!1})})},edit:function(a,e,t,i){this.updateParam.name="",this.updateParam.name=a,this.updateParam.type="",this.updateParam.type=e,this.updateParam.value="",this.updateParam.value=t,this.updateParam.id=i,this.tapTipSave=!1,this.updateCheck=!1,this.dialogVisible1=!0},update:function(){var a=this;this.$refs.form1.validate(function(e){if(!e)return!1;a.$http.post(a.$api.dictionaryUpdate,a.updateParam).then(function(e){"成功!"===e.message&&(a.dialogVisible1=!1,a.initTableData(a.$api.dictionaryList,a.params)),a.loading=!1}).catch(function(e){a.dialogVisible=!1,a.loading=!1})})},handleClose:function(a){a()}},created:function(){this.initTableData(this.$api.dictionaryList,this.params)}}),o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"cms-body"},[t("div",{staticClass:"cms-list-header"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/dictionary/add",expression:"'/dictionary/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:a.add}},[a._v("添加")]),a._v(" "),t("el-select",{on:{change:a.query},model:{value:a.params.queryType,callback:function(e){a.$set(a.params,"queryType",e)},expression:"params.queryType"}},[t("el-option",{attrs:{label:"所有",value:""}}),a._v(" "),t("el-option",{attrs:{label:"scale",value:"scale"}}),a._v(" "),t("el-option",{attrs:{label:"nature",value:"nature"}}),a._v(" "),t("el-option",{attrs:{label:"industry",value:"industry"}})],1)],1),a._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,stripe:""},on:{"selection-change":a.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),a._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"value",label:"值",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"type",label:"分类",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return t("div",{},[t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/dictionary/edit",expression:"'/dictionary/edit'"}],attrs:{type:"edit"},nativeOn:{click:function(t){a.edit(e.row.name,e.row.type,e.row.value,e.row.id)}}}),a._v(" "),t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/dictionary/delete",expression:"'/dictionary/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(t){a.deleteBatch(a.$api.dictionaryDelete,e.row.id)}}})],1)}}])})],1),a._v(" "),t("div",{staticClass:"cms-list-footer "},[t("div",{staticClass:"cms-left"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/dictionary/delete",expression:"'/dictionary/delete'"}],attrs:{disabled:a.disabled},on:{click:function(e){a.deleteBatch(a.$api.dictionaryDelete,a.ids)}}},[a._v("批量删除")])],1),a._v(" "),t("cms-pagination",{attrs:{total:a.total},on:{change:a.getPages}})],1),a._v(" "),t("el-dialog",{attrs:{title:"字典 - 添加",visible:a.dialogVisible,width:"27%","before-close":a.handleClose},on:{"update:visible":function(e){a.dialogVisible=e}}},[t("span",[t("el-form",{ref:"form",attrs:{"label-width":"80px",model:a.addParam,rules:a.rules}},[t("el-form-item",{attrs:{label:"分类",prop:"type"}},[t("el-input",{staticClass:"cms-width",model:{value:a.addParam.type,callback:function(e){a.$set(a.addParam,"type",e)},expression:"addParam.type"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{staticClass:"cms-width",model:{value:a.addParam.name,callback:function(e){a.$set(a.addParam,"name",e)},expression:"addParam.name"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"值",prop:"value"}},[t("el-input",{staticClass:"cms-width",model:{value:a.addParam.value,callback:function(e){a.$set(a.addParam,"value",e)},expression:"addParam.value"}}),a._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:a.updateCheck,expression:"updateCheck"}],staticClass:"red"},[a._v("所属分类已有此值")])],1)],1)],1),a._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.dialogVisible=!1}}},[a._v("取消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:a.check}},[a._v("确定")])],1)]),a._v(" "),t("el-dialog",{attrs:{title:"字典 - 修改",visible:a.dialogVisible1,width:"30%","close-on-click-modal":!1,"before-close":a.handleClose},on:{"update:visible":function(e){a.dialogVisible1=e}}},[t("span",[t("el-form",{ref:"form1",attrs:{model:a.updateParam,rules:a.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"分类",prop:"type"}},[t("el-input",{staticClass:"cms-width",model:{value:a.updateParam.type,callback:function(e){a.$set(a.updateParam,"type",e)},expression:"updateParam.type"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{staticClass:"cms-width",model:{value:a.updateParam.name,callback:function(e){a.$set(a.updateParam,"name",e)},expression:"updateParam.name"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"值",prop:"value"}},[t("el-input",{staticClass:"cms-width",model:{value:a.updateParam.value,callback:function(e){a.$set(a.updateParam,"value",e)},expression:"updateParam.value"}}),a._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:a.updateCheck,expression:"updateCheck"}],staticClass:"red"},[a._v("所属分类已有此值")])],1)],1)],1),a._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.dialogVisible1=!1}}},[a._v("取消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:a.checkUpdate}},[a._v("确定")])],1)])],1)},d=[],c={render:o,staticRenderFns:d},p=c,u=t("Mw9A"),m=u(r,p,!1,null,null,null);e.default=m.exports}});