webpackJsonp([28],{"8GbC":function(n,t,e){var a=e("x/rA");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("8bSs")("70b028a1",a,!0)},CMYX:function(n,t,e){"use strict";function a(n){e("8GbC")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("lcoF"),i=e("2sCs"),c=e.n(i),r={mixins:[s.a],data:function(){return{}},methods:{mak:function(){var n=this;c.a.post(this.$api.staticIndex).then(function(t){n.$alert(t.message,"提示",{confirmButtonText:"确定",callback:function(n){}})})},del:function(){var n=this;c.a.post(this.$api.staticIndexRemove).then(function(t){"200"==t.code&&n.successMessage("生成成功!")})}},created:function(){}},l=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"cms-body ",staticStyle:{"text-align":"center","padding-top":"24px"}},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/statically/indexStatic",expression:"'/statically/indexStatic'"}],attrs:{type:"primary"},on:{click:n.mak}},[n._v("生成首页HTML")]),n._v(" "),e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/statically/indexDel",expression:"'/statically/indexDel'"}],attrs:{type:"primary",plain:""},on:{click:n.del}},[n._v("删除首页HTML")])],1)},o=[],u={render:l,staticRenderFns:o},p=u,d=e("Mw9A"),m=a,f=d(r,p,!1,m,null,null);t.default=f.exports},"x/rA":function(n,t,e){t=n.exports=e("BkJT")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});