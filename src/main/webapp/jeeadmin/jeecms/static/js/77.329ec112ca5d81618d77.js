webpackJsonp([77],{"0lxT":function(n,t,a){t=n.exports=a("BkJT")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},O67K:function(n,t,a){"use strict";function e(n){a("nCj/")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("lcoF"),o=a("2sCs"),i=a.n(o),l=a("x1ym"),r={mixins:[s.a],data:function(){var n=l.a.required();l.a.number();return{params:{queryUsername:"",https:""},rules:{name:[n],nature:[n],scale:[n],longitude:[n]},scaleList:[],natureList:[],industryList:[]}},methods:{getDataInfo:function(){var n=this,t=this.$api;i.a.all([i.a.post(t.configCompanyGet),i.a.post(t.dictionaryType,{type:"scale"}),i.a.post(t.dictionaryType,{type:"nature"}),i.a.post(t.dictionaryType,{type:"industry"})]).then(i.a.spread(function(t,a,e,s){n.dataInfo=t.body,n.scaleList=a.body,n.natureList=e.body,n.industryList=s.body,n.$refs.form.resetFields(),n.loading=!1})).catch(function(t){n.loading=!1})},update:function(){this.updateDataInfo(this.$api.configCompanyUpdate,this.dataInfo,"")}},created:function(){this.getDataInfo(this.id)}},c=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("div",{staticClass:"cms-list-header"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/siteConfig/edit",expression:"'/siteConfig/edit'"}],attrs:{type:"primary"},on:{click:function(t){n.routerLink("/siteConfig","update",0)}}},[n._v("基本设置")])],1),n._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"公司名称",prop:"name"}},[a("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(t){n.$set(n.dataInfo,"name",t)},expression:"dataInfo.name"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"公司规模",prop:"scale"}},[a("el-select",{model:{value:n.dataInfo.scale,callback:function(t){n.$set(n.dataInfo,"scale",t)},expression:"dataInfo.scale"}},n._l(n.scaleList,function(t,e){return a("el-option",{key:e,attrs:{value:t.value}},[n._v(n._s(t.name))])}))],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"公司性质",prop:"nature"}},[a("el-select",{model:{value:n.dataInfo.nature,callback:function(t){n.$set(n.dataInfo,"nature",t)},expression:"dataInfo.nature"}},n._l(n.natureList,function(t,e){return a("el-option",{key:e,attrs:{value:t.value}},[n._v(n._s(t.name))])}))],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"公司行业",prop:"industry"}},[a("el-select",{model:{value:n.dataInfo.industry,callback:function(t){n.$set(n.dataInfo,"industry",t)},expression:"dataInfo.industry"}},n._l(n.industryList,function(t,e){return a("el-option",{key:e,attrs:{value:t.value}},[n._v(n._s(t.name))])}))],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"公司地址",prop:"address"}},[a("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.address,callback:function(t){n.$set(n.dataInfo,"address",t)},expression:"dataInfo.address"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"公司联系方式",prop:"contact"}},[a("el-input",{attrs:{type:"textarea",rows:4},model:{value:n.dataInfo.contact,callback:function(t){n.$set(n.dataInfo,"contact",t)},expression:"dataInfo.contact"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"公司简介",prop:"companyDescription"}},[a("el-input",{attrs:{type:"textarea",rows:4},model:{value:n.dataInfo.companyDescription,callback:function(t){n.$set(n.dataInfo,"companyDescription",t)},expression:"dataInfo.companyDescription"}})],1),n._v(" "),a("div",{staticClass:"form-footer"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/companyUpdate",expression:"'/globel/companyUpdate'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("修改")]),n._v(" "),a("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},d=[],u={render:c,staticRenderFns:d},p=u,f=a("Mw9A"),m=e,v=f(r,p,!1,m,null,null);t.default=v.exports},"nCj/":function(n,t,a){var e=a("0lxT");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("8bSs")("450b317c",e,!0)}});