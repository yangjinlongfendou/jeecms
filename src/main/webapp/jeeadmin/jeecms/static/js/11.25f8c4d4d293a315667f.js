webpackJsonp([11],{"3HKL":function(a,e,t){"use strict";function s(a){t("MxoX")}Object.defineProperty(e,"__esModule",{value:!0});var i=t("lcoF"),n=t("2sCs"),o=t.n(n),l=t("x1ym"),d={mixins:[i.a],data:function(){var a=l.a.required(),e=l.a.number();return{params:{},rules:{id:[a],name:[a],imgHeight:[a,e],imgWidth:[a,e],disabled:[a],hasImage:[a]},checkResClass:"cms-width",checkRes:!1}},methods:{checkId:function(a){var e=this;new RegExp("^[0-9]*$").test(a)?o.a.post(this.$api.typeCheckId,{id:a}).then(function(a){e.checkRes=a.body.result,e.checkResClass=a.body.result?"border-red cms-width":"cms-width",e.loading=!1}).catch(function(a){e.loading=!1}):this.errorMessage("ID必须为1-999999的正整数")},getDataInfo:function(a){var e=this,t=this.$api;o.a.all([o.a.post(t.typeGet,{id:a})]).then(o.a.spread(function(a){e.dataInfo=a.body,e.$refs.form.resetFields(),e.loading=!1})).catch(function(a){e.loading=!1})},update:function(){this.updateDataInfo(this.$api.typeUpdate,this.dataInfo,"list")},add:function(a){this.checkRes||this.saveDataInfo(a,this.$api.typeSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),a._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:a.dataInfo,rules:a.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-50",attrs:{label:"ID",prop:"id"}},[0==this.id?t("el-input",{class:a.checkResClass,on:{change:a.checkId},model:{value:a.dataInfo.id,callback:function(e){a.$set(a.dataInfo,"id",e)},expression:"dataInfo.id"}}):t("span",[a._v(a._s(a.dataInfo.id))]),a._v(" "),a.checkRes?t("span",{staticClass:"red"},[a._v("内容类型ID重复")]):a._e()],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"名称",prop:"name"}},[t("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.name,callback:function(e){a.$set(a.dataInfo,"name",e)},expression:"dataInfo.name"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"是否有图片",prop:"hasImage"}},[t("el-radio",{attrs:{label:!0},model:{value:a.dataInfo.hasImage,callback:function(e){a.$set(a.dataInfo,"hasImage",e)},expression:"dataInfo.hasImage"}},[a._v("是")]),a._v(" "),t("el-radio",{attrs:{label:!1},model:{value:a.dataInfo.hasImage,callback:function(e){a.$set(a.dataInfo,"hasImage",e)},expression:"dataInfo.hasImage"}},[a._v("否")])],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"禁用",prop:"disabled"}},[t("el-radio",{attrs:{label:!0},model:{value:a.dataInfo.disabled,callback:function(e){a.$set(a.dataInfo,"disabled",e)},expression:"dataInfo.disabled"}},[a._v("是")]),a._v(" "),t("el-radio",{attrs:{label:!1},model:{value:a.dataInfo.disabled,callback:function(e){a.$set(a.dataInfo,"disabled",e)},expression:"dataInfo.disabled"}},[a._v("否")])],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"图片宽度",prop:"imgWidth"}},[t("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.imgWidth,callback:function(e){a.$set(a.dataInfo,"imgWidth",e)},expression:"dataInfo.imgWidth"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"图片高度",prop:"imgHeight"}},[t("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.imgHeight,callback:function(e){a.$set(a.dataInfo,"imgHeight",e)},expression:"dataInfo.imgHeight"}})],1),a._v(" "),t("div",{staticClass:"form-footer"},[0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/type/add",expression:"'/type/add'"}],attrs:{type:"warning"},on:{click:function(e){a.add(!0)}}},[a._v("提交并继续添加")]):a._e(),a._v(" "),0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/type/add",expression:"'/type/add'"}],attrs:{type:"primary"},on:{click:function(e){a.add(!1)}}},[a._v("提交")]):a._e(),a._v(" "),0!=this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/type/edit",expression:"'/type/edit'"}],attrs:{type:"primary"},on:{click:function(e){a.update()}}},[a._v("修改")]):a._e(),a._v(" "),t("el-button",{attrs:{type:"info"},on:{click:a.reset}},[a._v("重置")])],1)],1)],1)},c=[],f={render:r,staticRenderFns:c},m=f,p=t("Mw9A"),u=s,h=p(d,m,!1,u,null,null);e.default=h.exports},MxoX:function(a,e,t){var s=t("wWBq");"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);t("8bSs")("e46d3686",s,!0)},wWBq:function(a,e,t){e=a.exports=t("BkJT")(!1),e.push([a.i,"\n.red{\n      color: #f56c6c;\n}\n.el-form-item__content .border-red input{\n    border-color : #f56c6c  !important;\n}\n",""])}});