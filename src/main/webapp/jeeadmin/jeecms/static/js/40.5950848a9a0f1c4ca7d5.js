webpackJsonp([40],{biqx:function(e,t,a){var s=a("woo2");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("8bSs")("594e24f4",s,!0)},tN8a:function(e,t,a){"use strict";function s(e){a("biqx")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("HzJ8"),o=a.n(n),l=a("5HJ5"),i=a("2sCs"),c=a.n(i),r=a("QmSG"),p={mixins:[l.a],data:function(){return{globalUrl:Object(r.a)(),params:{queryChecked:"",queryCtgId:"",queryRecommend:"",pageNo:1,pageSize:10},checks:[],replyContent:[],guestbookContent:[],guestbookTypes:[]}},methods:{clickguestbook:function(e){this.tableData[e].guestbookDisabled=!0,this.tableData[e].guestbookDisplayDisabled=!1,this.guestbookContent[e]=this.tableData[e].content},cancelguestbook:function(e){this.tableData[e].guestbookDisplayDisabled=!0,this.tableData[e].guestbookDisabled=!1},submitguestbook:function(e,t){var a=this,s=this.guestbookContent[e];if(""==s||void 0===s)return this.errorMessage("请填写留言内容"),!1;this.loading=!0;var n=this.tableData[e],o={};o.id=t,o.checked=n.checked,o.recommend=n.recommend,o.reply=n.reply,o.content=s,o.ctgId=n.ctgId,o.title=n.title,o.reply=n.reply,o.email=n.email,o.phone=n.phone,c.a.post(this.$api.guestbookUpdate,o).then(function(t){a.loading=!1,"200"==t.code&&(a.successMessage("修改留言成功"),a.tableData[e].content=a.guestbookContent[e],a.tableData[e].guestbookDisabled=!1,a.tableData[e].guestbookDisplayDisabled=!0)}).catch(function(e){a.loading=!1})},clickReply:function(e){"update"==this.tableData[e].replyOperate&&(this.replyContent[e]=this.tableData[e].reply,this.tableData[e].replyDisplayDisabled=!1),this.tableData[e].replyDisabled=!0},cancelReply:function(e){"update"==this.tableData[e].replyOperate&&(this.tableData[e].replyDisplayDisabled=!0),this.tableData[e].replyDisabled=!1},submitReply:function(e,t){var a=this,s=this.replyContent[e],n=this.tableData[e];if(""==s||void 0===s)return this.errorMessage("请填写回复内容"),!1;this.loading=!0;var o={id:t,ctgId:n.ctgId,title:n.title,content:n.content,reply:s,email:n.email,phone:n.phone,qq:n.qq,checked:n.checked,recommend:n.reCommend};c.a.post(this.$api.guestbookUpdate,o).then(function(t){if(a.loading=!1,"200"==t.code){var s="update"==a.tableData[e].replyOperate?"修改回复成功":"回复成功";a.successMessage(s),a.tableData[e].reply=a.replyContent[e],a.tableData[e].replyDisabled=!1,a.tableData[e].replyDisplayDisabled=!0,a.tableData[e].replyBtnDisabled=!0,"reply"==a.tableData[e].replyOperate&&(a.tableData[e].replyOperate="update")}}).catch(function(e){a.loading=!1})},clickRecommend:function(e,t){var a=this;this.loading=!0;var s=this.tableData[e].id;c.a.post(this.$api.guestbookRecommend,{id:s,isRecommend:t}).then(function(s){a.loading=!1,"200"==s.code&&(a.successMessage("操作成功"),a.tableData[e].recommend=t)}).catch(function(e){a.loading=!1})},aduit:function(e,t){var a=this;this.loading=!0,c.a.post(this.$api.guestbookCheck,{ids:e,isCheck:t}).then(function(e){a.loading=!1,"200"==e.code&&(a.successMessage("操作成功"),a.getTableData())}).catch(function(e){a.loading=!1})},custQuery:function(){""==this.queryChecked&&delete this.params.queryChecked,""==this.queryRecommend&&delete this.params.queryRecommend,this.getTableData()},getGuestBookType:function(){var e=this;c.a.post(this.$api.guestbookTypeList).then(function(t){"200"==t.code&&(e.guestbookTypes=t.body)})},getTableData:function(){var e=this;this.loading=!0,c.a.post(this.$api.guestbookList,this.params).then(function(t){if(e.loading=!1,"200"==t.code){e.tableData=[],e.checks=[],e.disabled=!0,e.total=t.totalCount;var a=!0,s=!1,n=void 0;try{for(var l,i=o()(t.body);!(a=(l=i.next()).done);a=!0){var c=l.value,r=c,p=""!=r.reply,d=""==r.reply?"reply":"update";r.replyDisplayDisabled=p,r.replyDisabled=!1,r.replyBtnDisabled=p,r.replyOperate=d,r.guestbookDisabled=!1,r.guestbookDisplayDisabled=!0,e.tableData.push(r),e.checks.push(!1)}}catch(e){s=!0,n=e}finally{try{!a&&i.return&&i.return()}finally{if(s)throw n}}e.checks.push(!1)}}).catch(function(t){e.loading=!1})},check:function(e){if(-1==e)this.checks[this.checks.length-1]?(this.checks=this.checks.map(function(e){return!0}),this.disabled=!1):(this.checks=this.checks.map(function(e){return!1}),this.disabled=!0);else{for(var t=0,a=0;a<this.checks.length-1;a++)this.checks[a]&&t++;this.checks[e]?(this.disabled=!1,t==this.checks.length-1&&(this.checks[this.checks.length-1]=!0)):(this.disabled=!(t>0),this.checks[this.checks.length-1]=!1)}for(var s=[],n=0;n<this.checks.length-1;n++)this.checks[n]&&s.push(this.tableData[n].id);this.ids=s.join(",")}},created:function(){this.getTableData(),this.getGuestBookType()}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("div",{staticClass:"cms-list-header"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/add",expression:"'/guestbook/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.routerLink("/guestbook/save","save",0)}}},[e._v("添加\n        ")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbookType/list",expression:"'/guestbookType/list'"}],on:{click:function(t){e.routerLink("/guestbookType/list","list",0)}}},[e._v("留言类型管理\n        ")])],1),e._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:12}},[a("el-select",{on:{change:e.custQuery},model:{value:e.params.queryCtgId,callback:function(t){e.$set(e.params,"queryCtgId",t)},expression:"params.queryCtgId"}},[a("el-option",{attrs:{label:"留言类型",value:""}}),e._v(" "),e._l(e.guestbookTypes,function(t,s){return a("el-option",{key:s,attrs:{label:e.guestbookTypes[s].name,value:e.guestbookTypes[s].id}})})],2),e._v(" "),a("el-select",{on:{change:e.custQuery},model:{value:e.params.queryChecked,callback:function(t){e.$set(e.params,"queryChecked",t)},expression:"params.queryChecked"}},[a("el-option",{attrs:{label:"审核状态",value:""}}),e._v(" "),a("el-option",{attrs:{label:"待审核",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"审核通过",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"审核不通过",value:"2"}})],1),e._v(" "),a("el-select",{on:{change:e.custQuery},model:{value:e.params.queryRecommend,callback:function(t){e.$set(e.params,"queryRecommend",t)},expression:"params.queryRecommend"}},[a("el-option",{attrs:{label:"是否推荐",value:""}}),e._v(" "),a("el-option",{attrs:{label:"是",value:"true"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"false"}})],1)],1)],1)],1),e._v(" "),e._l(e.tableData,function(t,s){return a("section",{key:s},[a("header",{staticClass:"header"},[a("el-row",[a("el-col",{staticClass:"title",attrs:{span:8}},[a("el-checkbox",{on:{change:function(t){e.check(s)}},model:{value:e.checks[s],callback:function(t){e.$set(e.checks,s,t)},expression:"checks[index]"}}),e._v("  \n            留言类型:"),a("a",{attrs:{href:"javasvript:;"}},[e._v("["+e._s(e.tableData[s].ctgName)+"]")]),e._v(" "),a("a",{attrs:{href:"",target:"_blank"}})],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("span",{staticClass:"contentId"},[e._v("留言ID："+e._s(e.tableData[s].id))])])],1)],1),e._v(" "),a("section",{staticClass:"container"},[a("div",{staticClass:"content-container"},[a("el-row",[a("el-col",{attrs:{span:18}},[a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.tableData[s].guestbookDisplayDisabled,expression:"tableData[index].guestbookDisplayDisabled"}]},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"tip primy tip-right"},[e._v("\n                    留言内容\n                  ")])]),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",{staticClass:"content-textarea"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.tableData[s].recommend,expression:"tableData[index].recommend"}],staticClass:"read-color"},[e._v("[推荐]")]),e._v("\n                    "+e._s(e.tableData[s].content)+"\n                  ")])])],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.tableData[s].guestbookDisabled,expression:"tableData[index].guestbookDisabled"}],staticClass:"reply guestbook"},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"tip primy tip-right"},[e._v("\n                    留言内容\n                  ")])]),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",{staticClass:"reply-textarea guestbook-textarea"},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入留言内容"},model:{value:e.guestbookContent[s],callback:function(t){e.$set(e.guestbookContent,s,t)},expression:"guestbookContent[index]"}}),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"small-btn submit",on:{click:function(t){e.submitguestbook(s,e.tableData[s].id)}}},[e._v("提交")]),e._v(" "),a("el-button",{staticClass:"small-btn cancel",on:{click:function(t){e.cancelguestbook(s)}}},[e._v("取消")])],1)],1)])],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.tableData[s].replyDisplayDisabled,expression:"tableData[index].replyDisplayDisabled"}],staticClass:"reply"},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"tip warn tip-right"},[e._v("回复内容")])]),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",{staticClass:"content-textarea"},[e._v("\n                    "+e._s(e.tableData[s].reply)+"\n                  ")])])],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.tableData[s].replyDisabled,expression:"tableData[index].replyDisabled "}],staticClass:"reply"},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"tip warn tip-right"},[e._v("回复内容")])]),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",{staticClass:"reply-textarea"},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入回复内容"},model:{value:e.replyContent[s],callback:function(t){e.$set(e.replyContent,s,t)},expression:"replyContent[index]"}}),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"small-btn submit",on:{click:function(t){e.submitReply(s,e.tableData[s].id)}}},[e._v("提交")]),e._v(" "),a("el-button",{staticClass:"small-btn cancel",on:{click:function(t){e.cancelReply(s)}}},[e._v("取消")])],1)],1)])],1)],1),e._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:6}},[a("p",[a("span",{staticClass:"gray"},[e._v("审核状态：")]),e._v(" "),0==e.tableData[s].checked?a("span",{staticClass:"green-color"},[e._v("待审核")]):1==e.tableData[s].checked?a("span",{staticClass:"read-color"},[e._v("审核通过")]):2==e.tableData[s].checked?a("span",{staticClass:"gray"},[e._v("审核不通过")]):e._e()])])],1)],1),e._v(" "),a("footer",{staticClass:"footer"},[a("el-row",[a("el-col",{staticClass:"gray",attrs:{span:12}},[a("span",[e._v("邮箱："+e._s(e.tableData[s].email))]),e._v(" "),a("span",[e._v("联系电话："+e._s(e.tableData[s].phone))]),e._v(" "),a("span",[e._v("QQ："+e._s(e.tableData[s].qq))])]),e._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:12}},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/check",expression:"'/guestbook/check'"}],staticClass:"small-btn",on:{click:function(t){e.aduit(e.tableData[s].id,1)}}},[e._v("审核通过")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/check",expression:"'/guestbook/check'"}],staticClass:"small-btn",on:{click:function(t){e.aduit(e.tableData[s].id,2)}}},[e._v("审核不通过")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/update",expression:"'/guestbook/update'"}],staticClass:"small-btn",on:{click:function(t){e.clickguestbook(s)}}},[e._v("修改留言")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/update",expression:"'/guestbook/update'"},{name:"show",rawName:"v-show",value:!e.tableData[[s]].replyBtnDisabled,expression:"!tableData[[index]].replyBtnDisabled"}],staticClass:"small-btn",on:{click:function(t){e.clickReply(s)}}},[e._v("回复")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/update",expression:"'/guestbook/update'"},{name:"show",rawName:"v-show",value:e.tableData[[s]].replyBtnDisabled,expression:"tableData[[index]].replyBtnDisabled"}],staticClass:"small-btn",on:{click:function(t){e.clickReply(s)}}},[e._v("修改回复")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/reCommend",expression:"'/guestbook/reCommend'"},{name:"show",rawName:"v-show",value:!e.tableData[s].recommend,expression:"!tableData[index].recommend"}],staticClass:"small-btn",on:{click:function(t){e.clickRecommend(s,!0)}}},[e._v("推荐")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/reCommend",expression:"'/guestbook/reCommend'"},{name:"show",rawName:"v-show",value:e.tableData[s].recommend,expression:"tableData[index].recommend"}],staticClass:"small-btn",on:{click:function(t){e.clickRecommend(s,!1)}}},[e._v("取消推荐")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/delete",expression:"'/guestbook/delete'"}],staticClass:"small-btn",on:{click:function(t){e.deleteBatch(e.$api.guestbookDelete,e.tableData[s].id)}}},[e._v("删除")])],1)],1)],1)])])}),e._v(" "),a("div",{staticClass:"cms-list-footer"},[a("div",{staticClass:"cms-left"},[a("el-checkbox",{on:{change:function(t){e.check(-1)}},model:{value:e.checks[e.tableData.length],callback:function(t){e.$set(e.checks,e.tableData.length,t)},expression:"checks[tableData.length]"}}),e._v("  \n      \n      "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/check",expression:"'/guestbook/check'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.aduit(e.ids,1)}}},[e._v("审核通过")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/check",expression:"'/guestbook/check'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.aduit(e.ids,2)}}},[e._v("审核不通过")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/delete",expression:"'/guestbook/delete'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.deleteBatch(e.$api.guestbookDelete,e.ids)}}},[e._v("删除")])],1),e._v(" "),a("div"),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],2)},b=[],u={render:d,staticRenderFns:b},h=u,v=a("Mw9A"),m=s,g=v(p,h,!1,m,null,null);t.default=g.exports},woo2:function(e,t,a){t=e.exports=a("BkJT")(!1),t.push([e.i,"\n.container{\n  width: 100%;\n  padding: 20px 24px;\n  border-bottom: 1px dashed #e7ecf3;\n}\n.content-container{\n  min-height: 60px;\n}\n.header,.container,.gray{\n  font-size: 14px;\n}\n.gray{\n  display: inline-block;\n}\n.read-color{\n  color: red;\n}\n.green-color{\n  color: #29D785;\n}\n.small-btn{\n  padding: 5px 8px;\n  min-width:50px;\n}\n.header{\n  padding: 0px 24px;\n  height: 50px;\n  line-height: 50px;\n  background-color: #F7F7F7;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.header .el-row{\n  border-top: 1px #E7ECF3 solid；\n  border-top\n}\n.header .title{\n  overflow: hidden;\n  min-width: 300px;\n}\n.header .title a{\n  color: #5C93BF;\n}\n.header .contentId{\n  color: #acb5bb\n}\n.footer{\n  margin-top: 20px;\n}\n.footer .gray span{\n  margin-right: 20px;\n  padding-left: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.content-textarea{\n  min-height: 50px;\n  max-height: 150px;\n  overflow: hidden;\n  line-height: 30px;\n}\n.reply{\n  margin-top: 30px;\n}\n.reply-textarea{\n  position: relative;\n  border:1px #EEE9DD solid;\n  border-radius: 4px;\n}\n.reply-textarea textarea{\n  border: 0px ;\n  resize: none;\n}\n.reply-textarea .btn-group{\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\n.reply-textarea .btn-group span{\n  color: #ffffff ;\n}\n.reply-textarea .submit{\n  background-color: #00AEFF;\n}\n.reply-textarea .cancel{\n  background-color: #C7C7C7;\n}\n.guestbook{\n  margin-top: 0px;\n}\n.guestbook-textarea{\n  border:1px #E7ECF3 solid !important;\n}\n.el-dialog__body{\n    min-height: 150px;\n}\n",""])}});