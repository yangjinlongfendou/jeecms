webpackJsonp([19],{ol3m:function(n,t,e){t=n.exports=e("BkJT")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},pp0J:function(n,t,e){"use strict";function a(n){e("up2O")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("lcoF"),i=e("2sCs"),o=e.n(i),r=e("x1ym"),c={mixins:[s.a],data:function(){var n=r.a.required("该项必填"),t=r.a.number("只能是正整数");return{params:{},rules:{name:[n],priority:[n,t],score:[n,t]}}},methods:{getPath:function(n){this.dataInfo.imagePath=n},getDataInfo:function(n){var t=this,e=this.$api;o.a.all([o.a.post(e.scoreitemGet,{id:n})]).then(o.a.spread(function(n){t.dataInfo=n.body,t.$refs.form.resetFields(),t.loading=!1})).catch(function(n){t.loading=!1})},update:function(){this.updateDataInfo(this.$api.scoreitemUpdate,this.dataInfo,"list")},add:function(n){this.dataInfo.groupId=this.type,this.saveDataInfo(n,this.$api.scoreitemSave,this.dataInfo,"list")},saveDataInfo:function(n,t,e,a){var s=this;this.$refs.form.validate(function(i){if(!i)return!1;s.loading=!0,o.a.post(t,e).then(function(t){"200"==t.code&&(s.successMessage("添加成功"),n?s.reset():setTimeout(function(){s.routerLink(a,"",s.type)},1e3)),s.loading=!1}).catch(function(n){s.loading=!1})})},updateDataInfo:function(n,t,e){var a=this;this.$refs.form.validate(function(s){if(!s)return!1;a.loading=!0,o.a.post(n,t).then(function(n){if(a.loading=!1,"200"==n.code){if(a.successMessage("修改成功"),""==e)return!1;setTimeout(function(){a.routerLink(e,"",a.type)},1e3)}}).catch(function(n){a.loading=!1})})}},created:function(){this.getDataInfo(this.id)}},l=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"评分文本",prop:"name"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(t){n.$set(n.dataInfo,"name",t)},expression:"dataInfo.name"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50"}),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"分值",prop:"score"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.score,callback:function(t){n.$set(n.dataInfo,"score",t)},expression:"dataInfo.score"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50"}),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"排列顺序",prop:"priority"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.priority,callback:function(t){n.$set(n.dataInfo,"priority",t)},expression:"dataInfo.priority"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50"}),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"图片路径",prop:"imagePath"}},[e("cms-upload",{attrs:{src:n.dataInfo.imagePath,isMark:!1},on:{change:n.getPath}})],1),n._v(" "),e("div",{staticClass:"form-footer"},[0==this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoreitem/add",expression:"'/scoreitem/add'"}],attrs:{type:"warning"},on:{click:function(t){n.add(!0)}}},[n._v("保存并继续添加")]):n._e(),n._v(" "),0==this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoreitem/add",expression:"'/scoreitem/add'"}],attrs:{type:"primary"},on:{click:function(t){n.add(!1)}}},[n._v("提交")]):n._e(),n._v(" "),0!=this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoreitem/edit",expression:"'/scoreitem/edit'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("修改")]):n._e(),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},d=[],f={render:l,staticRenderFns:d},m=f,u=e("Mw9A"),p=a,v=u(c,m,!1,p,null,null);t.default=v.exports},up2O:function(n,t,e){var a=e("ol3m");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("8bSs")("7df3e000",a,!0)}});