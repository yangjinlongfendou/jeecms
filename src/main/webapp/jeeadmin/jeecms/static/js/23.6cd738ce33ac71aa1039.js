webpackJsonp([23],{L2Rg:function(n,e,t){"use strict";function a(n){t("vjmX")}Object.defineProperty(e,"__esModule",{value:!0});var i=t("lcoF"),s=t("2sCs"),o=t.n(s),l=t("x1ym"),r={mixins:[i.a],data:function(){var n=l.a.required("该项必填");return{params:{},rules:{name:[n],type:[n],key:[n]},checkRes:!1}},methods:{getDataInfo:function(n){var e=this,t=this.$api;o.a.all([o.a.post(t.weixinMenuGet,{id:n})]).then(o.a.spread(function(n){e.dataInfo=n.body,e.$refs.form.resetFields(),e.loading=!1,0==e.id&&(e.dataInfo.type="click",console.log(e.dataInfo))})).catch(function(n){e.loading=!1})},update:function(){this.updateDataInfo(this.$api.weixinMenuUpdate,this.dataInfo,"list")},add:function(n){this.saveDataInfo(n,this.$api.weixinMenuSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),n._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-50",attrs:{label:"菜单名称",prop:"name"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(e){n.$set(n.dataInfo,"name",e)},expression:"dataInfo.name"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50"}),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"菜单类型",prop:"type"}},[t("el-radio",{attrs:{label:"click"},model:{value:n.dataInfo.type,callback:function(e){n.$set(n.dataInfo,"type",e)},expression:"dataInfo.type"}},[n._v("点击事件")]),n._v(" "),t("el-radio",{attrs:{label:"view"},model:{value:n.dataInfo.type,callback:function(e){n.$set(n.dataInfo,"type",e)},expression:"dataInfo.type"}},[n._v("URL地址")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50"}),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"KEY",prop:"key"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.key,callback:function(e){n.$set(n.dataInfo,"key",e)},expression:"dataInfo.key"}}),n._v(" "),t("span",{staticClass:"gray"},[n._v("点击事件KEY(自定义回复关键字)")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50"}),n._v(" "),t("div",{staticClass:"form-footer"},[0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMenu/add",expression:"'/weixinMenu/add'"}],attrs:{type:"warning"},on:{click:function(e){n.add(!0)}}},[n._v("保存并继续提交")]):n._e(),n._v(" "),0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMenu/add",expression:"'/weixinMenu/add'"}],attrs:{type:"primary"},on:{click:function(e){n.add(!1)}}},[n._v("提交")]):n._e(),n._v(" "),0!=this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMenu/edit",expression:"'/weixinMenu/edit'"}],attrs:{type:"primary"},on:{click:function(e){n.update()}}},[n._v("修改")]):n._e(),n._v(" "),t("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},c=[],f={render:d,staticRenderFns:c},u=f,p=t("Mw9A"),m=a,v=p(r,u,!1,m,null,null);e.default=v.exports},UNUe:function(n,e,t){e=n.exports=t("BkJT")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},vjmX:function(n,e,t){var a=t("UNUe");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("8bSs")("77115208",a,!0)}});