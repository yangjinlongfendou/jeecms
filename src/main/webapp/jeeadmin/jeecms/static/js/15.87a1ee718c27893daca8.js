webpackJsonp([15],{"03nb":function(t,a,e){a=t.exports=e("BkJT")(!1),a.push([t.i,"\n.tree-left{\n  width: 200px;\n  float: left;\n}\n.tree-right{\n  margin-left: 200px;\n}\n.font-bold{\n  font-weight: bold;\n}\n.iconfont{\n  color: #409EFF;\n}\n.red-color{\n  color: red;\n}\n  \n",""])},UQkM:function(t,a,e){var s=e("03nb");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("8bSs")("fe262e20",s,!0)},oLXO:function(t,a,e){"use strict";function s(t){e("UQkM")}Object.defineProperty(a,"__esModule",{value:!0});var l=e("lcoF"),i=e("5HJ5"),o=e("2sCs"),n=e.n(o),c=e("x1ym"),r={mixins:[i.a,l.a],data:function(){var t=c.a.required("此项必填");c.a.number("只能输入数字");return{params:{querySiteId:"",pageNo:"",pageSize:"",root:""},ftpList:[],ossList:[],tplList:[],editTable:!1,dateList:!0,domainCheck:!1,accessPathCheck:!1,siteIdCheckRes:!1,rules:{name:[t],shortName:[t],path:[t],relativePath:[t],protocol:[t],dynamicSuffix:[t],staticSuffix:[t],afterCheck:[t],master:[t],resycleOn:[t],mobileStaticSync:[t],resouceSync:[t],pageSync:[t],staticIndex:[t],domain:[t],accessPath:[""]}}},methods:{siteIdCheck:function(t){var a=this;if(!t)return this.siteIdCheckRes=!1,!1;n.a.post(this.$api.siteCheckMaster,{siteId:this.params.querySiteId,accessPath:this.dataInfo.accessPath}).then(function(t){t.body.result||(a.siteIdCheckRes=!0,a.loading=!1)}).catch(function(t){a.loading=!1})},checkDomain:function(t){var a=this;if(""==t)return this.domainCheck=!1,!1;n.a.post(this.$api.siteCheckDomain,{siteId:this.params.querySiteId,domain:t}).then(function(t){a.loading=!1,t.body.result?a.domainCheck=!1:a.domainCheck=!0}).catch(function(t){a.loading=!1})},checkAccessPath:function(t){var a=this;if(""==t)return this.accessPathCheck=!1,!1;n.a.post(this.$api.siteCheckAccessPath,{siteId:this.params.querySiteId,accessPath:t}).then(function(t){t.body.result?(a.accessPathCheck=!1,a.loading=!1):(a.accessPathCheck=!0,a.loading=!1)}).catch(function(t){a.loading=!1})},update:function(){this.domainCheck||this.accessPathCheck||this.siteIdCheckRes||this.updateDataInfo(this.$api.siteUpdate,this.dataInfo,"")},edit:function(t){this.params.querySiteId=t,this.getDataInfo(),this.editTable=!0,this.dateList=!1},getTableData:function(t){var a=this;this.loading=!0,this.$http.post(this.listUrl,t).then(function(t){t.totalCount&&(a.total=t.totalCount),a.tableData=t.body,a.loading=!1}).catch(function(t){a.loading=!1})},getDataInfo:function(){var t=this;this.domainCheck=!1,this.accessPathCheck=!1,this.siteIdCheckRes=!1;var a=this.$api;""===this.params.querySiteId&&(this.params.querySiteId=0),n.a.all([n.a.post(a.configGet),n.a.post(a.siteGet,{id:this.params.querySiteId,root:""}),n.a.post(a.ftpList),n.a.post(a.ossList),n.a.post(a.tplList)]).then(n.a.spread(function(a,e,s,l,i){a.body.insideSite&&(t.rules.accessPath=[c.a.required("此项必填")]),t.dataInfo=e.body,t.ftpList=s.body,t.ossList=l.body,t.tplList=i.body,t.$refs.form.resetFields(),t.loading=!1})).catch(function(a){t.loading=!1})},nodeClik:function(t){console.log(t),this.params.querySiteId=t.id,t.hasChild||""==t.id?(this.editTable=!1,this.dateList=!0,this.params.root=t.id,this.getTableData(this.params)):(this.editTable=!0,this.dateList=!1,this.getDataInfo())}},created:function(){this.initTableData(this.$api.siteList,this.params)}},d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[e("section",{staticClass:"tree-left"},[e("cmsSiteTree",{on:{"node-click":t.nodeClik}})],1),t._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:t.dateList,expression:"dateList"},{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"tree-right"},[e("div",{staticClass:"cms-list-header"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/site/add",expression:"'/globel/site/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(a){t.routerLink("/site/add","save","0")}}},[t._v("添加")])],1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""},on:{"selection-change":t.checkIds}},[e("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),t._v(" "),e("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"domain",label:"域名",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"accessPath",label:"站点访问路径",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"站点名称",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"path",label:"远程路径",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"dynamicSuffix",label:"动态页后缀",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"staticSuffix",label:"动态页前缀",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return e("div",{},[e("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/site/edit",expression:"'/globel/site/edit'"}],attrs:{type:"edit"},nativeOn:{click:function(e){t.edit(a.row.id)}}}),t._v(" "),e("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/site/delete",expression:"'/globel/site/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(e){t.deleteBatch(t.$api.siteDelete,a.row.id)}}})],1)}}])})],1),t._v(" "),e("div",{staticClass:"cms-list-footer"},[e("div",{staticClass:"cms-left"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/site/delete",expression:"'/globel/site/delete'"}],attrs:{disabled:t.disabled},on:{click:function(a){t.deleteBatch(t.$api.siteDelete,t.ids)}}},[t._v("批量删除")])],1)])],1),t._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:t.editTable,expression:"editTable"}],staticClass:"tree-right"},[e("div",{staticClass:"cms-list-header"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/site/add",expression:"'/globel/site/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(a){t.routerLink("/site/add","save","0",{pid:t.dataInfo.id})}}},[t._v("添加")])],1),t._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"名称",prop:"name"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.name,callback:function(a){t.$set(t.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"站点简称",prop:"shortName"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.shortName,callback:function(a){t.$set(t.dataInfo,"shortName",a)},expression:"dataInfo.shortName"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"关键字",prop:"keywords"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.keywords,callback:function(a){t.$set(t.dataInfo,"keywords",a)},expression:"dataInfo.keywords"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"描述",prop:"description"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.description,callback:function(a){t.$set(t.dataInfo,"description",a)},expression:"dataInfo.description"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"域名",prop:"domain"}},[e("el-input",{staticClass:"cms-width",on:{change:t.checkDomain},model:{value:t.dataInfo.domain,callback:function(a){t.$set(t.dataInfo,"domain",a)},expression:"dataInfo.domain"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.domainCheck,expression:"domainCheck"}],staticClass:"red"},[t._v("域名已被其他站点占用")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"路径",prop:"path"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.path,callback:function(a){t.$set(t.dataInfo,"path",a)},expression:"dataInfo.path"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v("各站点资源的存放路径")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"域名别名"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.domainAlias,callback:function(a){t.$set(t.dataInfo,"domainAlias",a)},expression:"dataInfo.domainAlias"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v('多个请用","分开')])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"域名重定向",prop:"domainRedirect"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.domainRedirect,callback:function(a){t.$set(t.dataInfo,"domainRedirect",a)},expression:"dataInfo.domainRedirect"}}),t._v(" "),e("span",{staticClass:"gray"},[t._v('多个请用","分开')])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"站点访问路径",prop:"accessPath"}},[e("el-input",{staticClass:"cms-width",on:{change:t.checkAccessPath},model:{value:t.dataInfo.accessPath,callback:function(a){t.$set(t.dataInfo,"accessPath",a)},expression:"dataInfo.accessPath"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.accessPathCheck,expression:"accessPathCheck"}],staticClass:"red"},[t._v("访问路径已被其他站点占用")]),t._v(" "),e("span",{staticClass:"gray"},[t._v("内网模式下，站点访问路径为必填；反之，非必填")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"使用相对路径",prop:"relativePath"}},[e("el-radio",{attrs:{label:!0},model:{value:t.dataInfo.relativePath,callback:function(a){t.$set(t.dataInfo,"relativePath",a)},expression:"dataInfo.relativePath"}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1},model:{value:t.dataInfo.relativePath,callback:function(a){t.$set(t.dataInfo,"relativePath",a)},expression:"dataInfo.relativePath"}},[t._v("否")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"访问协议"}},[e("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.protocol,callback:function(a){t.$set(t.dataInfo,"protocol",a)},expression:"dataInfo.protocol"}},[e("el-option",{attrs:{value:"http://",label:"http://"}}),t._v(" "),e("el-option",{attrs:{value:"https://",label:"https://"}})],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"动态页后缀"}},[e("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.dynamicSuffix,callback:function(a){t.$set(t.dataInfo,"dynamicSuffix",a)},expression:"dataInfo.dynamicSuffix"}},[e("el-option",{attrs:{value:".jhtm",label:".jhtm"}}),t._v(" "),e("el-option",{attrs:{value:".html",label:".html"}})],1),t._v(" "),e("span",{staticClass:"gray"},[t._v("建议使用.Jhtml为后缀，以避免冲突")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"静态页后缀"}},[e("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.staticSuffix,callback:function(a){t.$set(t.dataInfo,"staticSuffix",a)},expression:"dataInfo.staticSuffix"}},[e("el-option",{attrs:{value:".html",label:".html"}}),t._v(" "),e("el-option",{attrs:{value:".shtml",label:".shtml"}})],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"静态页目录",prop:"staticDir"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.staticDir,callback:function(a){t.$set(t.dataInfo,"staticDir",a)},expression:"dataInfo.staticDir"}}),t._v(" "),e("el-checkbox",{attrs:{label:!0},model:{value:t.dataInfo.indexToRoot,callback:function(a){t.$set(t.dataInfo,"indexToRoot",a)},expression:"dataInfo.indexToRoot"}},[t._v("使用根目录")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"手机静态页目录",prop:"staticMobileDir"}},[e("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.staticMobileDir,callback:function(a){t.$set(t.dataInfo,"staticMobileDir",a)},expression:"dataInfo.staticMobileDir"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"手机静态页同步生成",prop:"mobileStaticSync"}},[e("el-radio",{attrs:{label:!0},model:{value:t.dataInfo.mobileStaticSync,callback:function(a){t.$set(t.dataInfo,"mobileStaticSync",a)},expression:"dataInfo.mobileStaticSync"}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1},model:{value:t.dataInfo.mobileStaticSync,callback:function(a){t.$set(t.dataInfo,"mobileStaticSync",a)},expression:"dataInfo.mobileStaticSync"}},[t._v("否")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"资源自动同步FTP",prop:"resouceSync"}},[e("el-radio",{attrs:{label:!0},model:{value:t.dataInfo.resouceSync,callback:function(a){t.$set(t.dataInfo,"resouceSync",a)},expression:"dataInfo.resouceSync"}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1},model:{value:t.dataInfo.resouceSync,callback:function(a){t.$set(t.dataInfo,"resouceSync",a)},expression:"dataInfo.resouceSync"}},[t._v("否")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"静态页自动同步FTP",prop:"pageSync"}},[e("el-radio",{attrs:{label:!0},model:{value:t.dataInfo.pageSync,callback:function(a){t.$set(t.dataInfo,"pageSync",a)},expression:"dataInfo.pageSync"}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1},model:{value:t.dataInfo.pageSync,callback:function(a){t.$set(t.dataInfo,"pageSync",a)},expression:"dataInfo.pageSync"}},[t._v("否")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"静态页同步FTP"}},[e("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.syncPageFtpId,callback:function(a){t.$set(t.dataInfo,"syncPageFtpId",a)},expression:"dataInfo.syncPageFtpId"}},[e("el-option",{attrs:{label:"无",value:""}}),t._v(" "),t._l(t.ftpList,function(a,s){return e("el-option",{key:s,attrs:{value:a.id,label:a.name}},[t._v(t._s(a.name))])})],2)],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"开启静态首页",prop:"staticIndex"}},[e("el-radio",{attrs:{label:!0},model:{value:t.dataInfo.staticIndex,callback:function(a){t.$set(t.dataInfo,"staticIndex",a)},expression:"dataInfo.staticIndex"}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1},model:{value:t.dataInfo.staticIndex,callback:function(a){t.$set(t.dataInfo,"staticIndex",a)},expression:"dataInfo.staticIndex"}},[t._v("否")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"附件FTP"}},[e("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.uploadFtpId,callback:function(a){t.$set(t.dataInfo,"uploadFtpId",a)},expression:"dataInfo.uploadFtpId"}},[e("el-option",{attrs:{value:"",label:"无"}},[t._v("无")]),t._v(" "),t._l(t.ftpList,function(a,s){return e("el-option",{key:s,attrs:{value:a.id,label:a.name}},[t._v(t._s(a.name))])})],2)],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"开启回收站",prop:"resycleOn"}},[e("el-radio",{attrs:{label:!0},model:{value:t.dataInfo.resycleOn,callback:function(a){t.$set(t.dataInfo,"resycleOn",a)},expression:"dataInfo.resycleOn"}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1},model:{value:t.dataInfo.resycleOn,callback:function(a){t.$set(t.dataInfo,"resycleOn",a)},expression:"dataInfo.resycleOn"}},[t._v("否")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"审核后",prop:"afterCheck"}},[e("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.afterCheck,callback:function(a){t.$set(t.dataInfo,"afterCheck",a)},expression:"dataInfo.afterCheck"}},[e("el-option",{attrs:{value:1,label:"不能修改删除"}},[t._v("不能修改删除")]),t._v(" "),e("el-option",{attrs:{value:2,label:"修改后退回"}},[t._v("修改后退回")]),t._v(" "),e("el-option",{attrs:{value:3,label:"修改后不变"}},[t._v("修改后不变")])],1)],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"是否主站",prop:"master"}},[e("el-radio",{attrs:{label:!0},on:{change:t.siteIdCheck},model:{value:t.dataInfo.master,callback:function(a){t.$set(t.dataInfo,"master",a)},expression:"dataInfo.master"}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:!1},on:{change:t.siteIdCheck},model:{value:t.dataInfo.master,callback:function(a){t.$set(t.dataInfo,"master",a)},expression:"dataInfo.master"}},[t._v("否")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.siteIdCheckRes,expression:"siteIdCheckRes"}],staticClass:"red"},[t._v("主站点已存在！")])],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"云储存"}},[e("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.ossId,callback:function(a){t.$set(t.dataInfo,"ossId",a)},expression:"dataInfo.ossId"}},[e("el-option",{attrs:{value:"",label:"无"}},[t._v("无")]),t._v(" "),t._l(t.ossList,function(t,a){return e("el-option",{key:a,attrs:{value:t.id,label:t.bucketName}})})],2)],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"}),t._v(" "),e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/site/edit",expression:"'/globel/site/edit'"}],attrs:{type:"primary"},on:{click:function(a){t.update()}}},[t._v("修改")]),t._v(" "),e("el-button",{attrs:{type:"info"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)])},f=[],m={render:d,staticRenderFns:f},p=m,u=e("Mw9A"),v=s,h=u(r,p,!1,v,null,null);a.default=h.exports}});