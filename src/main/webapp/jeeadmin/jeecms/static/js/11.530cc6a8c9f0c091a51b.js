webpackJsonp([11],{ekt7:function(n,e,t){"use strict";function a(n){t("qe6K")}Object.defineProperty(e,"__esModule",{value:!0});var i=t("lcoF"),s=t("5HJ5"),o=t("2sCs"),l=t.n(o),r=t("x1ym"),c={mixins:[i.a,s.a],data:function(){return{params:{},parent:"",rules:{name:[r.a.required("该项必填")]},checkRes:!1}},methods:{getDataInfo:function(n){var e=this,t=this.$api;l.a.all([l.a.post(t.weixinMenuGet,{id:n})]).then(l.a.spread(function(t){e.dataInfo=t.body,e.$refs.form.resetFields(),e.loading=!1,0==n&&(e.dataInfo.type="click")})).catch(function(n){e.loading=!1})},update:function(){this.dataInfo.parentId=this.type,this.updateDataInfo(this.$api.weixinMenuUpdate,this.dataInfo,"list")},add:function(n){this.dataInfo.parentId=this.type,this.saveDataInfo(n,this.$api.weixinMenuSave,this.dataInfo,"list")},saveDataInfo:function(n,e,t,a){var i=this;this.$refs.form.validate(function(s){if(!s)return!1;i.loading=!0,l.a.post(e,t).then(function(e){"200"==e.code&&(i.successMessage("添加成功"),n?i.reset():setTimeout(function(){i.routerLink(a,"",i.type)},1e3)),i.loading=!1}).catch(function(n){i.loading=!1})})},updateDataInfo:function(n,e,t){var a=this;this.$refs.form.validate(function(i){if(!i)return!1;a.loading=!0,l.a.post(n,e).then(function(n){if(a.loading=!1,"200"==n.code){if(a.successMessage("修改成功"),""==t)return!1;setTimeout(function(){a.routerLink(t,"",a.type)},1e3)}}).catch(function(n){a.loading=!1})})}},created:function(){this.parent=this.type,this.getDataInfo(this.id)}},d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),n._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-50",attrs:{label:"菜单名称",prop:"name"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(e){n.$set(n.dataInfo,"name",e)},expression:"dataInfo.name"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50"}),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"菜单类型",prop:"type"}},[t("el-radio",{attrs:{label:"click"},model:{value:n.dataInfo.type,callback:function(e){n.$set(n.dataInfo,"type",e)},expression:"dataInfo.type"}},[n._v("点击事件")]),n._v(" "),t("el-radio",{attrs:{label:"view"},model:{value:n.dataInfo.type,callback:function(e){n.$set(n.dataInfo,"type",e)},expression:"dataInfo.type"}},[n._v("URL事件")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50"}),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"KEY",prop:"key"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.key,callback:function(e){n.$set(n.dataInfo,"key",e)},expression:"dataInfo.key"}}),n._v(" "),t("span",{staticClass:"gray"},[n._v("点击事件KEY(自定义回复关键字)")])],1),n._v(" "),t("el-form-item",{staticClass:"flex-50"}),n._v(" "),t("div",{staticClass:"form-footer"},[0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMenu/add",expression:"'/weixinMenu/add'"}],attrs:{type:"warning"},on:{click:function(e){n.add(!0)}}},[n._v("保存并继续添加")]):n._e(),n._v(" "),0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMenu/add",expression:"'/weixinMenu/add'"}],attrs:{type:"primary"},on:{click:function(e){n.add(!1)}}},[n._v("提交")]):n._e(),n._v(" "),0!=this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMenu/edit",expression:"'/weixinMenu/edit'"}],attrs:{type:"primary"},on:{click:function(e){n.update()}}},[n._v("修改")]):n._e(),n._v(" "),t("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},f=[],u={render:d,staticRenderFns:f},p=u,m=t("Mw9A"),v=a,h=m(c,p,!1,v,null,null);e.default=h.exports},lDE9:function(n,e,t){e=n.exports=t("BkJT")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},qe6K:function(n,e,t){var a=t("lDE9");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("8bSs")("21b07d82",a,!0)}});