webpackJsonp([115],{"2vfI":function(t,e,i){e=t.exports=i("BkJT")(!1),e.push([t.i,"\n.model-select[data-v-3701f172]{\n   margin-bottom: 12px;\n}\n",""])},"59X9":function(t,e,i){"use strict";function n(t){i("EtHf")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("lcoF"),l=i("2sCs"),o=i.n(l),s=i("x1ym"),d={mixins:[a.a],data:function(){var t=s.a.required(),e=s.a.number(),i=s.a.string();return{params:this.$route.query,dataState:!1,rules:{name:[t],path:[t,i],parentId:[t],modelId:[t,e],priority:[t,e],display:[t]},channelInfo:{},channelList:[{hasChild:!0,id:"",name:"根栏目"}],itemList:[],modelList:[],tplList:[],groupList:[],tplAll:[],info:{parentId:"",modelId:"",modelIds:[],tpls:[],mtpls:[]},tplContentVisbile:!1,ue:[]}},methods:{back:function(){this.routerLink("/channel/list","list",this.params.parentId)},addChannel:function(t){var e={parentId:this.params.id,modelId:t};this.routerLink("/channel/save","save",0,e)},getChannelId:function(t,e){t.isChild?(this.params.id=t.id,this.getChannelInfo(this.params.id)):this.routerLink("/channel/list","list",t.id)},getFieldImg:function(t,e,i,n){this.info[e]=t},getMediaPath:function(t,e){this.info[e]=t},getPath:function(t){var e=this;o.a.post(this.$api.channelCreatPath,{name:t.target.value}).then(function(t){e.info.path=t.body})},getUeditor:function(t,e){this.ue[e]=t},getTitleImg:function(t){this.info.titleImg=t},getContentImg:function(t){this.info.contentImg=t},getChannelInfo:function(t){var e=this;o.a.post(this.$api.channelGet,{id:t}).then(function(t){e.channelInfo=t.body,e.params.modelId=t.body.modelId,e.info.modelId=t.body.modelId,e.params.parentId=t.body.parentId,e.getAllList(),e.getDataInfo()})},getDataInfo:function(){var t=this;this.loading=!0;var e={modelId:this.params.modelId,isChannel:!0};o.a.post(this.$api.itemList,e).then(function(e){t.$refs.form.resetFields();var i=e.body;for(var n in i)i[n].custom?(i[n].dataType,t.$set(t.info,"attr_"+i[n].field,t.channelInfo["attr_"+i[n].field])):(i[n].dataType,t.$set(t.info,i[n].field,t.channelInfo[i[n].field]));t.loading=!1,t.itemList=i,t.getDefaultInfo()}).catch(function(e){t.loading=!1})},getDefaultInfo:function(){var t=this,e=this.$api;this.$set(this.info,"modelId",this.channelInfo.modelId),this.$set(this.info,"staticChannel",this.channelInfo.staticChannel),this.$set(this.info,"staticContent",this.channelInfo.staticContent),this.$set(this.info,"accessByDir",this.channelInfo.accessByDir),this.$set(this.info,"listChild",this.channelInfo.listChild),this.$set(this.info,"pageSize",this.channelInfo.pageSize),this.$set(this.info,"hasTitleImg",this.channelInfo.hasTitleImg),this.$set(this.info,"hasContentImg",this.channelInfo.hasContentImg),this.$set(this.info,"blank",this.channelInfo.blank),""!=this.params.parentId?o.a.post(e.channelGet,{id:this.params.parentId}).then(function(e){t.info.parentId=e.body.nodeIds}):this.info.parentId=[""],this.dataState=!0},getAllList:function(){var t=this,e=this.$api;o.a.all([o.a.post(e.fullTextSearchChannelList,{hasContentOnly:!1,excludeId:this.params.id}),o.a.post(e.modelList,{containDisabled:!1}),o.a.post(e.tplModelList,{modelId:this.params.modelId}),o.a.post(e.groupList),o.a.post(e.tplSelectContentModel)]).then(o.a.spread(function(e,i,n,a,l){t.channelList=t.channelList.concat(e.body),t.modelList=i.body,t.tplList=n.body,t.groupList=a.body,t.tplAll=l.body;for(var o in t.tplAll)t.channelInfo.models[o]?(t.info.modelIds.push(t.channelInfo.models[o].id),t.info.tpls.push(t.channelInfo.tpls[o]),t.info.mtpls.push(t.channelInfo.mtpls[o])):(t.info.modelIds.push(""),t.info.tpls.push(""),t.info.mtpls.push(""))})).catch(function(e){t.loading=!1})},getEditorContent:function(){void 0!=this.info.txt&&(this.info.txt=this.ue[0].getContent()),void 0!=this.info.txt1&&(this.info.txt1=this.ue[1].getContent()),void 0!=this.info.txt2&&(this.info.txt2=this.ue[2].getContent()),void 0!=this.info.txt3&&(this.info.txt3=this.ue[3].getContent())},getParams:function(){var t={};this.getEditorContent();for(var e in this.info)this.info[e]instanceof Array?t[e]=this.info[e].join(","):t[e]=this.info[e];return t.parentId=t.parentId.substring(t.parentId.lastIndexOf(",")+1),t.id=this.params.id,t},update:function(t){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.loading=!0,o.a.post(e.$api.channelUpdate,e.getParams()).then(function(t){e.loading=!1,"200"==t.code&&(e.successMessage("修改成功"),setTimeout(function(){e.back()},1e3))}).catch(function(t){e.loading=!1})})}},created:function(){this.$store.dispatch("setCollapse",!0),this.getChannelInfo(this.params.id)}},c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"cms-body"},[i("a",{staticClass:"cms-back",attrs:{href:"javascript:void(0)"},on:{click:t.back}}),t._v(" "),i("cms-tree",{attrs:{copy:!0},on:{change:t.getChannelId}}),t._v(" "),i("div",{staticClass:"cms-content-right"},[i("el-dropdown",{staticStyle:{margin:"12px 0 0 68px"},on:{command:t.addChannel}},[i("el-button",{attrs:{type:"primary"}},[i("i",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/save",expression:"'/channel/save'"}],staticClass:"el-icon-plus "}),t._v(" 添加子栏目\n             ")]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.modelList,function(e){return i("el-dropdown-item",{key:e.id,attrs:{command:e.id}},[t._v("\n                 "+t._s(e.name))])}))],1),t._v(" "),i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"form",staticClass:"cms-form",staticStyle:{margin:"0",padding:"0"},attrs:{model:t.info,rules:t.rules,"label-width":"162px"}},[i("el-form-item",{staticClass:"flex-50",attrs:{label:"上级栏目",prop:"parentId"}},[t.dataState?i("el-cascader",{staticClass:"cms-width",attrs:{props:{value:"id",label:"name",children:"child"},options:t.channelList,"change-on-select":"",filterable:""},model:{value:t.info.parentId,callback:function(e){t.$set(t.info,"parentId",e)},expression:"info.parentId"}}):t._e()],1),t._v(" "),i("el-form-item",{staticClass:"flex-50",attrs:{label:"栏目模型",prop:"modelId"}},[i("el-select",{staticClass:"cms-width",attrs:{placeholder:"选择模型",disabled:!0},model:{value:t.info.modelId,callback:function(e){t.$set(t.info,"modelId",e)},expression:"info.modelId"}},t._l(t.modelList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),t._l(t.itemList,function(e,n){return"workflowId"!=e.field?i("el-form-item",{key:n,class:[e.single?"flex-100":"flex-50"],attrs:{label:e.label,prop:e.field}},[1==e.dataType&&e.custom?i("el-input",{staticClass:"cms-width",model:{value:t.info["attr_"+e.field],callback:function(i){t.$set(t.info,"attr_"+e.field,i)},expression:"info['attr_'+item.field]"}}):t._e(),t._v(" "),1!=e.dataType||e.custom||"titleImg"==e.field||"contentImg"==e.field||"name"==e.field?t._e():i("el-input",{staticClass:"cms-width",model:{value:t.info[e.field],callback:function(i){t.$set(t.info,e.field,i)},expression:"info[item.field]"}}),t._v(" "),"name"==e.field?i("el-input",{staticClass:"cms-width",on:{blur:t.getPath},model:{value:t.info[e.field],callback:function(i){t.$set(t.info,e.field,i)},expression:"info[item.field]"}}):t._e(),t._v(" "),"titleImg"==e.field?i("cms-upload",{attrs:{src:t.info[e.field],isMark:!1},on:{change:t.getTitleImg}}):t._e(),t._v(" "),"contentImg"==e.field?i("cms-upload",{attrs:{src:t.info[e.field],isMark:!1},on:{change:t.getContentImg}}):t._e(),t._v(" "),2==e.dataType&&e.custom?i("el-input",{staticClass:"cms-width",attrs:{type:"number",min:"0"},model:{value:t.info["attr_"+e.field],callback:function(i){t.$set(t.info,"attr_"+e.field,t._n(i))},expression:"info['attr_'+item.field]"}}):t._e(),t._v(" "),2!=e.dataType||e.custom?t._e():i("el-input",{staticClass:"cms-width",model:{value:t.info[e.field],callback:function(i){t.$set(t.info,e.field,i)},expression:"info[item.field]"}}),t._v(" "),3==e.dataType&&e.custom?i("el-input",{staticClass:"cms-width",model:{value:t.info["attr_"+e.field],callback:function(i){t.$set(t.info,"attr_"+e.field,i)},expression:"info['attr_'+item.field]"}}):t._e(),t._v(" "),4==e.dataType&&e.custom?i("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.info["attr_"+e.field],callback:function(i){t.$set(t.info,"attr_"+e.field,i)},expression:"info['attr_'+item.field]"}}):t._e(),t._v(" "),4!=e.dataType||e.custom||"txt"==e.field||"txt1"==e.field||"txt2"==e.field||"txt3"==e.field||"channelStatic"==e.field||"contentStatic"==e.field?t._e():i("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.info[e.field],callback:function(i){t.$set(t.info,e.field,i)},expression:"info[item.field]"}}),t._v(" "),"channelStatic"==e.field?i("div",[i("el-checkbox",{model:{value:t.info.staticChannel,callback:function(e){t.$set(t.info,"staticChannel",e)},expression:"info.staticChannel"}},[t._v("开启")]),t._v(" "),i("el-checkbox",{model:{value:t.info.accessByDir,callback:function(e){t.$set(t.info,"accessByDir",e)},expression:"info.accessByDir"}},[t._v("使用目录访问")]),t._v(" "),i("el-checkbox",{model:{value:t.info.listChild,callback:function(e){t.$set(t.info,"listChild",e)},expression:"info.listChild"}},[t._v("子栏目列表")]),t._v(" "),i("label",{attrs:{for:""}},[t._v("每页记录数")]),t._v(" "),i("el-input",{staticClass:"w50",attrs:{type:"number"},model:{value:t.info.pageSize,callback:function(e){t.$set(t.info,"pageSize",t._n(e))},expression:"info.pageSize"}})],1):t._e(),t._v(" "),"contentStatic"==e.field?i("div",[i("el-checkbox",{model:{value:t.info.staticContent,callback:function(e){t.$set(t.info,"staticContent",e)},expression:"info.staticContent"}},[t._v("开启")])],1):t._e(),t._v(" "),5==e.dataType?i("el-date-picker",{staticClass:"cms-width",attrs:{type:"datetime"},model:{value:t.info["attr_"+e.field],callback:function(i){t.$set(t.info,"attr_"+e.field,i)},expression:"info['attr_'+item.field]"}}):t._e(),t._v(" "),6==e.dataType&&e.custom?i("el-select",{staticClass:"cms-width",model:{value:t.info["attr_"+e.field],callback:function(i){t.$set(t.info,"attr_"+e.field,i)},expression:"info['attr_'+item.field]"}},t._l(e.optValue,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:t}})})):t._e(),t._v(" "),"tplChannel"==e.field?i("el-select",{staticClass:"cms-width",model:{value:t.info[e.field],callback:function(i){t.$set(t.info,e.field,i)},expression:"info[item.field]"}},[i("el-option",{attrs:{label:"默认",value:""}}),t._v(" "),t._l(t.tplList.channelTpl,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:t}})})],2):t._e(),t._v(" "),"tplMobileChannel"==e.field?i("el-select",{staticClass:"cms-width",model:{value:t.info[e.field],callback:function(i){t.$set(t.info,e.field,i)},expression:"info[item.field]"}},[i("el-option",{attrs:{label:"默认",value:""}}),t._v(" "),t._l(t.tplList.channelMobileTpl,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:t}})})],2):t._e(),t._v(" "),"afterCheck"==e.field?i("el-select",{staticClass:"cms-width",model:{value:t.info.afterCheck,callback:function(e){t.$set(t.info,"afterCheck",e)},expression:"info['afterCheck']"}},[i("el-option",{attrs:{label:"默认",value:""}}),t._v(" "),i("el-option",{attrs:{label:"不能修改删除",value:1}}),t._v(" "),i("el-option",{attrs:{label:"修改后退回",value:2}}),t._v(" "),i("el-option",{attrs:{label:"修改后不变",value:3}})],1):t._e(),t._v(" "),"tplContent"==e.field?i("div",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.tplContentVisbile=!0}}},[t._v("选择模型模板")]),t._v(" "),i("span",{staticClass:"gray"},[t._v("\n                     留空则继承上级栏目设置，顶层为空则所有可用模型                      \n                     ")])],1):t._e(),t._v(" "),7==e.dataType&&e.custom?i("el-checkbox-group",{model:{value:t.info["attr_"+e.field],callback:function(i){t.$set(t.info,"attr_"+e.field,i)},expression:"info['attr_'+item.field]"}},t._l(e.optValue,function(t,e){return i("el-checkbox",{key:e,attrs:{label:t}})})):t._e(),t._v(" "),7!=e.dataType||e.custom||"viewGroupIds"!=e.field?t._e():i("el-checkbox-group",{model:{value:t.info.viewGroupIds,callback:function(e){t.$set(t.info,"viewGroupIds",e)},expression:"info['viewGroupIds']"}},t._l(t.groupList,function(e,n){return i("el-checkbox",{key:n,attrs:{label:e.id}},[t._v(t._s(e.name))])})),t._v(" "),7!=e.dataType||e.custom||"contriGroupIds"!=e.field?t._e():i("el-checkbox-group",{model:{value:t.info.contriGroupIds,callback:function(e){t.$set(t.info,"contriGroupIds",e)},expression:"info['contriGroupIds']"}},t._l(t.groupList,function(e,n){return i("el-checkbox",{key:n,attrs:{label:e.id}},[t._v(t._s(e.name))])})),t._v(" "),8==e.dataType&&e.custom?i("el-radio-group",{model:{value:t.info["attr_"+e.field],callback:function(i){t.$set(t.info,"attr_"+e.field,i)},expression:"info['attr_'+item.field]"}},t._l(e.optValue,function(t,e){return i("el-radio",{key:e,attrs:{label:t}})})):t._e(),t._v(" "),8!=e.dataType||e.custom||"display"!=e.field?t._e():i("div",[i("el-radio-group",{model:{value:t.info[e.field],callback:function(i){t.$set(t.info,e.field,i)},expression:"info[item.field]"}},[i("el-radio",{attrs:{label:!0}},[t._v("是")]),t._v(" "),i("el-radio",{attrs:{label:!1}},[t._v("否")])],1),t._v(" "),i("el-checkbox",{model:{value:t.info.blank,callback:function(e){t.$set(t.info,"blank",e)},expression:"info.blank"}},[t._v("是否打开新窗口")])],1),t._v(" "),8!=e.dataType||e.custom||"docImg"!=e.field?t._e():i("div",[i("el-checkbox",{model:{value:t.info.hasTitleImg,callback:function(e){t.$set(t.info,"hasTitleImg",e)},expression:"info.hasTitleImg"}},[t._v("开启文档标题图")]),t._v(" "),i("el-checkbox",{model:{value:t.info.hasContentImg,callback:function(e){t.$set(t.info,"hasContentImg",e)},expression:"info.hasContentImg"}},[t._v("开启文档内容图")])],1),t._v(" "),8!=e.dataType||e.custom||"commentControl"!=e.field?t._e():i("div",[i("el-radio-group",{model:{value:t.info.commentControl,callback:function(e){t.$set(t.info,"commentControl",e)},expression:"info['commentControl']"}},[i("el-radio",{attrs:{label:0}},[t._v("游客模式")]),t._v(" "),i("el-radio",{attrs:{label:1}},[t._v("登录评论一次")]),t._v(" "),i("el-radio",{attrs:{label:3}},[t._v("登录评论多次")]),t._v(" "),i("el-radio",{attrs:{label:2}},[t._v("关闭评论")])],1)],1),t._v(" "),8!=e.dataType||e.custom||"allowUpdown"!=e.field?t._e():i("div",[i("el-radio-group",{model:{value:t.info.allowUpdown,callback:function(e){t.$set(t.info,"allowUpdown",e)},expression:"info['allowUpdown']"}},[i("el-radio",{attrs:{label:!0}},[t._v("允许")]),t._v(" "),i("el-radio",{attrs:{label:!1}},[t._v("不允许")])],1)],1),t._v(" "),8!=e.dataType||e.custom||"allowShare"!=e.field?t._e():i("el-radio-group",{model:{value:t.info.allowShare,callback:function(e){t.$set(t.info,"allowShare",e)},expression:"info['allowShare']"}},[i("el-radio",{attrs:{label:!0}},[t._v("允许")]),t._v(" "),i("el-radio",{attrs:{label:!1}},[t._v("不允许")])],1),t._v(" "),8!=e.dataType||e.custom||"allowScore"!=e.field?t._e():i("el-radio-group",{model:{value:t.info.allowScore,callback:function(e){t.$set(t.info,"allowScore",e)},expression:"info['allowScore']"}},[i("el-radio",{attrs:{label:!0}},[t._v("允许")]),t._v(" "),i("el-radio",{attrs:{label:!1}},[t._v("不允许")])],1),t._v(" "),9==e.dataType&&e.custom?i("cms-multiple-upload",{attrs:{src:t.info["attr_"+e.field],multiple:!1,field:"attr_"+e.field,propList:t.info["attr_"+e.field],btnLabel:"上传"},on:{get:t.getMediaPath}}):t._e(),t._v(" "),10==e.dataType&&e.custom?i("cms-upload",{attrs:{src:t.info["attr_"+e.field],field:"attr_"+e.field},on:{get:t.getFieldImg}}):t._e(),t._v(" "),"txt"==e.field&&t.dataState?i("cms-editor",{attrs:{defaultMsg:t.info.txt,index:0},on:{ready:t.getUeditor}}):t._e(),t._v(" "),"txt1"==e.field&&t.dataState?i("cms-editor",{attrs:{defaultMsg:t.info.txt1,index:1},on:{ready:t.getUeditor}}):t._e(),t._v(" "),"txt2"==e.field&&t.dataState?i("cms-editor",{attrs:{defaultMsg:t.info.txt2,index:2},on:{ready:t.getUeditor}}):t._e(),t._v(" "),"txt3"==e.field&&t.dataState?i("cms-editor",{attrs:{defaultMsg:t.info.txt3,index:3},on:{ready:t.getUeditor}}):t._e()],1):t._e()}),t._v(" "),i("el-dialog",{attrs:{title:"选择模型模板",visible:t.tplContentVisbile,width:"60%"},on:{"update:visible":function(e){t.tplContentVisbile=e}}},t._l(t.tplAll,function(e,n){return i("div",{key:e.id,staticClass:"model-select"},[i("el-checkbox",{attrs:{"true-label":e.id,"false-label":" "},model:{value:t.info.modelIds[n],callback:function(e){t.$set(t.info.modelIds,n,e)},expression:"info.modelIds[index]"}},[t._v(t._s(e.name))]),t._v(" "),i("el-select",{model:{value:t.info.tpls[n],callback:function(e){t.$set(t.info.tpls,n,e)},expression:"info.tpls[index]"}},[i("el-option",{attrs:{value:"",label:"默认"}}),t._v(" "),t._l(e.contentTpl,function(t){return i("el-option",{key:t,attrs:{value:t}})})],2),t._v(" "),i("el-select",{model:{value:t.info.mtpls[n],callback:function(e){t.$set(t.info.mtpls,n,e)},expression:"info.mtpls[index]"}},[i("el-option",{attrs:{value:"",label:"默认"}}),t._v(" "),t._l(e.mobileContentTpl,function(t){return i("el-option",{key:t,attrs:{value:t}})})],2)],1)})),t._v(" "),i("div",{staticClass:"form-footer"},[0==this.id?i("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/save",expression:"'/channel/save'"}],attrs:{type:"warning"},on:{click:function(e){t.add(!0)}}},[t._v("提交并继续添加")]):t._e(),t._v(" "),0==this.id?i("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/save",expression:"'/channel/save'"}],attrs:{type:"primary"},on:{click:function(e){t.add(!1)}}},[t._v("提交")]):t._e(),t._v(" "),0!=this.id?i("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/update",expression:"'/channel/update'"}],attrs:{type:"primary"},on:{click:function(e){t.update()}}},[t._v("修改")]):t._e(),t._v(" "),i("el-button",{attrs:{type:"info"},on:{click:t.reset}},[t._v("重置")])],1)],2)],1)],1)},r=[],f={render:c,staticRenderFns:r},p=f,u=i("Mw9A"),m=n,h=u(d,p,!1,m,"data-v-3701f172",null);e.default=h.exports},EtHf:function(t,e,i){var n=i("2vfI");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("8bSs")("5767ad38",n,!0)}});