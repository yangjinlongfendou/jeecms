webpackJsonp([119],{N9dj:function(t,a,n){a=t.exports=n("BkJT")(!1),a.push([t.i,"\n.cms-body[data-v-2a093fbf]{\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n}\n.content[data-v-2a093fbf]{\n  width: 60%;\n  border-right: 1px solid #ccc;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.prven[data-v-2a093fbf]{\n    width: 40%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.qrcode[data-v-2a093fbf]{\n  position: relative;\n   margin-left: 122px;\n   width: 200px;\n   height: 200px;\n   border: 1px dashed #d9d9d9;\n}\n.qrcode img[data-v-2a093fbf]{\n  width: 198px;\n  height: 198px;\n}\n.qr-tip[data-v-2a093fbf]{\n    color: #606266;\n    display: block;\n    text-align: center;\n     height: 60px;\n     width: 100px;\n     position: absolute;\n     left: 50%;\n     top: 50%;\n     margin-top: -30px;\n     margin-left: -50px;\n}\n.form-footer[data-v-2a093fbf]{\n  text-align: center;\n}\n.download[data-v-2a093fbf]{\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  margin-top: 20px;\n  margin-left:-40px;\n}\n.download-tip[data-v-2a093fbf]{\n  text-align: center;\n  width: 140px;\n  line-height: 20px;\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  margin-top: 20px;\n  margin-left:-70px;\n}\n",""])},"c/X8":function(t,a,n){"use strict";function e(t){n("kwlk")}Object.defineProperty(a,"__esModule",{value:!0});var o=n("2sCs"),i=n.n(o),s=n("x1ym"),l=n("QmSG"),r=n("2RFS"),d=n("lcoF"),c={mixins:[d.a],data:function(){var t=s.a.required("此项必填"),a=s.a.number("只能输入数字");return{rules:{content:[t],fontSize:[t,a],size:[t,a]},downloadImgFlage:!1,qrcodeUrl:""}},methods:{getPath:function(t){this.dataInfo.logoPicPath=t},getDataInfo:function(){var t={content:"",logoPicPath:"",logoWord:"",fontSize:"10",size:"100",qrcodeUrl:""};this.dataInfo=t,this.loading=!1},grenQR:function(){var t=this;this.loading=!0,this.downloadImgFlage=!1,i.a.post(this.$api.dimensioncodeCreate,this.dataInfo).then(function(a){"200"==a.code&&(t.downloadImgFlage=!0,t.qrcodeUrl=Object(l.a)()+a.body.url+"?str="+Object(r.a)()),t.loading=!1}).catch(function(a){t.loading=!1})}},created:function(){this.getDataInfo()}},f=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[n("div",{staticClass:"content"},[n("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[n("el-form-item",{staticClass:"flex-10 ",attrs:{label:"二维码LOGO图片",prop:"imagePath"}},[n("cms-upload",{attrs:{src:t.dataInfo.imagePath,isMark:!1},on:{change:t.getPath}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-100 ",attrs:{label:"二维码内容",prop:"content"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.dataInfo.content,callback:function(a){t.$set(t.dataInfo,"content",a)},expression:"dataInfo.content"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-100 ",attrs:{label:"logo文字",prop:"logoWord"}},[n("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.logoWord,callback:function(a){t.$set(t.dataInfo,"logoWord",a)},expression:"dataInfo.logoWord"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-100 ",attrs:{label:"logo文字大小",prop:"fontSize"}},[n("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.fontSize,callback:function(a){t.$set(t.dataInfo,"fontSize",a)},expression:"dataInfo.fontSize"}})],1),t._v(" "),n("el-form-item",{staticClass:"flex-100 ",attrs:{label:"二维码尺寸",prop:"size"}},[n("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.size,callback:function(a){t.$set(t.dataInfo,"size",a)},expression:"dataInfo.size"}}),t._v(" "),n("span",{staticClass:"gray"},[t._v("规定生成之后图片的宽和高")])],1),t._v(" "),n("div",{staticClass:"form-footer"},[n("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/drawApply/create",expression:"'/drawApply/create'"}],attrs:{type:"primary"},on:{click:function(a){t.grenQR()}}},[t._v("生成二维码")]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1),t._v(" "),n("div",{staticClass:"prven"},[n("el-form",{ref:"form1",staticClass:"cms-form"},[n("el-form-item",{staticClass:"flex-50 ",attrs:{label:"二维码预览"}},[n("div",{staticClass:"qrcode"},[t.downloadImgFlage?n("img",{attrs:{src:t.qrcodeUrl}}):n("span",{staticClass:"qr-tip"},[t._v("左侧输入内容，点击生成二维码")]),t._v(" "),n("span",{staticClass:"gray download-tip"},[t._v("下载提示：鼠标移动至图片，右键另存为即可")])])]),t._v(" "),n("div",{staticClass:"form-footer"})],1)],1)])},p=[],m={render:f,staticRenderFns:p},g=m,b=n("Mw9A"),x=e,v=b(c,g,!1,x,"data-v-2a093fbf",null);a.default=v.exports},kwlk:function(t,a,n){var e=n("N9dj");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("8bSs")("324947b9",e,!0)}});