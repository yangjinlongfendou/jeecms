webpackJsonp([102],{Rgao:function(e,t,a){"use strict";function n(e){a("g7e+")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("HzJ8"),l=a.n(s),i=a("5HJ5"),o=a("2sCs"),c=a.n(o),r=a("QmSG"),m={mixins:[i.a],data:function(){return{globalUrl:Object(r.a)(),params:{queryChecked:"",queryContentId:"",queryRecommend:"",pageNo:1,pageSize:10},checks:[],replyContent:[],commentContent:[],commentTypes:[]}},methods:{clickComment:function(e){this.tableData[e].commentDisabled=!0,this.tableData[e].commentDisplayDisabled=!1,this.commentContent[e]=this.tableData[e].text},cancelComment:function(e){this.tableData[e].commentDisplayDisabled=!0,this.tableData[e].commentDisabled=!1},submitComment:function(e,t){var a=this,n=this.commentContent[e];if(""==n||void 0===n)return this.errorMessage("请填写评论信息"),!1;this.loading=!0;var s={};s.id=t,s.checked=this.tableData[e].checked,s.recommend=this.tableData[e].recommend,s.reply=this.tableData[e].reply,s.text=n,c.a.post(this.$api.commentUpdate,s).then(function(t){a.loading=!1,"200"==t.code&&(a.successMessage("修改评论成功"),a.tableData[e].text=a.commentContent[e],a.tableData[e].commentDisabled=!1,a.tableData[e].commentDisplayDisabled=!0)}).catch(function(e){a.loading=!1})},clickReply:function(e){"update"==this.tableData[e].replyOperate&&(this.replyContent[e]=this.tableData[e].replyContent,this.tableData[e].replyDisplayDisabled=!1),this.tableData[e].replyDisabled=!0},cancelReply:function(e){"update"==this.tableData[e].replyOperate&&(this.tableData[e].replyDisplayDisabled=!0),this.tableData[e].replyDisabled=!1},submitReply:function(e,t){var a=this,n=this.replyContent[e];if(""==n||void 0===n)return this.errorMessage("请填写回复信息"),!1;this.loading=!0,c.a.post(this.$api.commentReply,{id:t,reply:n}).then(function(t){if(a.loading=!1,"200"==t.code){var n="update"==a.tableData[e].replyOperate?"修改回复成功":"回复成功";a.successMessage(n),a.tableData[e].replyContent=a.replyContent[e],a.tableData[e].replyDisabled=!1,a.tableData[e].replyDisplayDisabled=!0,a.tableData[e].replyBtnDisabled=!0,"reply"==a.tableData[e].replyOperate&&(a.tableData[e].replyOperate="update")}}).catch(function(e){a.loading=!1})},clickRecommend:function(e,t){var a=this;this.loading=!0;var n=this.tableData[e].id;c.a.post(this.$api.commentRecommend,{id:n,isRecommend:t}).then(function(n){a.loading=!1,"200"==n.code&&(a.successMessage("操作成功"),a.tableData[e].recommend=t)}).catch(function(e){a.loading=!1})},aduit:function(e,t){var a=this;this.loading=!0,c.a.post(this.$api.commentCheck,{ids:e,isCheck:t}).then(function(e){a.loading=!1,"200"==e.code&&(a.successMessage("操作成功"),a.getTableData())}).catch(function(e){a.loading=!1})},custQuery:function(){""==this.queryChecked&&delete this.params.queryChecked,""==this.queryRecommend&&delete this.params.queryRecommend,this.getTableData()},getTableData:function(){var e=this;this.loading=!0,c.a.post(this.$api.commentList,this.params).then(function(t){if(e.loading=!1,"200"==t.code){e.tableData=[],e.checks=[],e.disabled=!0,e.total=t.totalCount;var a=!0,n=!1,s=void 0;try{for(var i,o=l()(t.body);!(a=(i=o.next()).done);a=!0){var c=i.value,r=c,m=""!=r.replyContent,p=""==r.replyContent?"reply":"update";r.replyDisplayDisabled=m,r.replyDisabled=!1,r.replyBtnDisabled=m,r.replyOperate=p,r.commentDisabled=!1,r.commentDisplayDisabled=!0,e.tableData.push(r),e.checks.push(!1)}}catch(e){n=!0,s=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw s}}e.checks.push(!1)}}).catch(function(t){e.loading=!1})},check:function(e){if(-1==e)this.checks[this.checks.length-1]?(this.checks=this.checks.map(function(e){return!0}),this.disabled=!1):(this.checks=this.checks.map(function(e){return!1}),this.disabled=!0);else{for(var t=0,a=0;a<this.checks.length-1;a++)this.checks[a]&&t++;this.checks[e]?(this.disabled=!1,t==this.checks.length-1&&(this.checks[this.checks.length-1]=!0)):(this.disabled=!(t>0),this.checks[this.checks.length-1]=!1)}for(var n=[],s=0;s<this.checks.length-1;s++)this.checks[s]&&n.push(this.tableData[s].id);this.ids=n.join(",")}},created:function(){this.getTableData()}},p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("div",{staticClass:"cms-list-header"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-select",{on:{change:e.custQuery},model:{value:e.params.queryChecked,callback:function(t){e.$set(e.params,"queryChecked",t)},expression:"params.queryChecked"}},[a("el-option",{attrs:{label:"审核状态",value:""}}),e._v(" "),a("el-option",{attrs:{label:"等待审核",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"审核通过",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"审核不通过",value:"2"}})],1),e._v(" "),a("el-select",{on:{change:e.custQuery},model:{value:e.params.queryRecommend,callback:function(t){e.$set(e.params,"queryRecommend",t)},expression:"params.queryRecommend"}},[a("el-option",{attrs:{label:"是否推荐",value:""}}),e._v(" "),a("el-option",{attrs:{label:"是",value:"true"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"false"}})],1)],1),e._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:12}},[a("cms-input",{attrs:{label:"文章ID"},model:{value:e.params.queryContentId,callback:function(t){e.$set(e.params,"queryContentId",t)},expression:"params.queryContentId"}}),e._v(" "),a("el-button",{on:{click:e.custQuery}},[e._v("查询")])],1)],1)],1),e._v(" "),e._l(e.tableData,function(t,n){return a("section",{key:n},[a("header",{staticClass:"header"},[a("el-row",[a("el-col",{staticClass:"title",attrs:{span:8}},[a("el-checkbox",{on:{change:function(t){e.check(n)}},model:{value:e.checks[n],callback:function(t){e.$set(e.checks,n,t)},expression:"checks[index]"}}),e._v("  \n            "),a("span",[e._v("["+e._s(e.tableData[n].channelName)+"]")]),e._v(" "),a("a",{attrs:{href:e.tableData[n].contentURL,target:"_blank"}},[e._v(e._s(e.tableData[n].contentTitle))])],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("span",{staticClass:"contentId"},[e._v("文章ID："+e._s(e.tableData[n].contentId))])]),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/view",expression:"'/comment/view'"}],staticClass:"small-btn",on:{click:function(t){e.routerLink("/comment/itemList","list",e.tableData[n].contentId)}}},[e._v("查看")])],1)],1)],1),e._v(" "),a("section",{staticClass:"container"},[a("div",{staticClass:"content-container"},[a("el-row",[a("el-col",{attrs:{span:18}},[a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.tableData[n].commentDisplayDisabled,expression:"tableData[index].commentDisplayDisabled"}]},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"tip primy tip-right"},[e._v("\n                   评论内容\n                  ")])]),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",{staticClass:"content-textarea"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.tableData[n].recommend,expression:"tableData[index].recommend"}],staticClass:"read-color"},[e._v("[推荐]")]),e._v("\n                    "+e._s(e.tableData[n].text)+"\n                  ")])])],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.tableData[n].commentDisabled,expression:"tableData[index].commentDisabled"}],staticClass:"reply comment"},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"tip primy tip-right"},[e._v("\n                    评论内容\n                  ")])]),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",{staticClass:"reply-textarea comment-textarea"},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入评论内容"},model:{value:e.commentContent[n],callback:function(t){e.$set(e.commentContent,n,t)},expression:"commentContent[index]"}}),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"small-btn submit",on:{click:function(t){e.submitComment(n,e.tableData[n].id)}}},[e._v("提交")]),e._v(" "),a("el-button",{staticClass:"small-btn cancel",on:{click:function(t){e.cancelComment(n)}}},[e._v("取消")])],1)],1)])],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.tableData[n].replyDisplayDisabled,expression:"tableData[index].replyDisplayDisabled"}],staticClass:"reply"},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"tip warn tip-right"},[e._v("回复内容")])]),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",{staticClass:"content-textarea"},[e._v("\n                    "+e._s(e.tableData[n].replyContent)+"\n                  ")])])],1),e._v(" "),a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.tableData[n].replyDisabled,expression:"tableData[index].replyDisabled "}],staticClass:"reply"},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"tip warn tip-right"},[e._v("回复内容")])]),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",{staticClass:"reply-textarea"},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入回复内容"},model:{value:e.replyContent[n],callback:function(t){e.$set(e.replyContent,n,t)},expression:"replyContent[index]"}}),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"small-btn submit",on:{click:function(t){e.submitReply(n,e.tableData[n].id)}}},[e._v("提交")]),e._v(" "),a("el-button",{staticClass:"small-btn cancel",on:{click:function(t){e.cancelReply(n)}}},[e._v("取消")])],1)],1)])],1)],1),e._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:6}},[a("p",[a("span",{staticClass:"gray"},[e._v("审核状态：")]),e._v(" "),0==e.tableData[n].checked?a("span",{staticClass:"green-color"},[e._v("等待审核")]):1==e.tableData[n].checked?a("span",{staticClass:"read-color"},[e._v("审核通过")]):2==e.tableData[n].checked?a("span",{staticClass:"gray"},[e._v("审核不通过")]):e._e()])])],1)],1),e._v(" "),a("footer",{staticClass:"footer"},[a("el-row",[a("el-col",{staticClass:"gray",attrs:{span:12}},[a("span",[e._v("评论者："+e._s(e.tableData[n].commenteUsername))]),e._v(" "),a("span",[e._v("评论时间："+e._s(e.tableData[n].createTime))]),e._v(" "),a("span",[e._v("IP："+e._s(e.tableData[n].ip))])]),e._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:12}},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/aduit",expression:"'/comment/aduit'"}],staticClass:"small-btn",on:{click:function(t){e.aduit(e.tableData[n].id,1)}}},[e._v("审核通过")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/aduit",expression:"'/comment/aduit'"}],staticClass:"small-btn",on:{click:function(t){e.aduit(e.tableData[n].id,2)}}},[e._v("审核不通过")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/updateComment",expression:"'/comment/updateComment'"}],staticClass:"small-btn",on:{click:function(t){e.clickComment(n)}}},[e._v("修改评论")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/reply",expression:"'/comment/reply'"},{name:"show",rawName:"v-show",value:!e.tableData[[n]].replyBtnDisabled,expression:"!tableData[[index]].replyBtnDisabled"}],staticClass:"small-btn",on:{click:function(t){e.clickReply(n)}}},[e._v("回复")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/reply",expression:"'/comment/reply'"},{name:"show",rawName:"v-show",value:e.tableData[[n]].replyBtnDisabled,expression:"tableData[[index]].replyBtnDisabled"}],staticClass:"small-btn",on:{click:function(t){e.clickReply(n)}}},[e._v("修改回复")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/reCommend",expression:"'/comment/reCommend'"},{name:"show",rawName:"v-show",value:!e.tableData[n].recommend,expression:"!tableData[index].recommend"}],staticClass:"small-btn",on:{click:function(t){e.clickRecommend(n,!0)}}},[e._v("推荐")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/reCommend",expression:"'/comment/reCommend'"},{name:"show",rawName:"v-show",value:e.tableData[n].recommend,expression:"tableData[index].recommend"}],staticClass:"small-btn",on:{click:function(t){e.clickRecommend(n,!1)}}},[e._v("取消推荐")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/delete",expression:"'/comment/delete'"}],staticClass:"small-btn",on:{click:function(t){e.deleteBatch(e.$api.commentDelete,e.tableData[n].id)}}},[e._v("删除")])],1)],1)],1)])])}),e._v(" "),a("div",{staticClass:"cms-list-footer"},[a("div",{staticClass:"cms-left"},[a("el-checkbox",{on:{change:function(t){e.check(-1)}},model:{value:e.checks[e.tableData.length],callback:function(t){e.$set(e.checks,e.tableData.length,t)},expression:"checks[tableData.length]"}}),e._v("  \n      \n      "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/aduit",expression:"'/comment/aduit'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.aduit(e.ids,1)}}},[e._v("审核通过")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/aduit",expression:"'/comment/aduit'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.aduit(e.ids,2)}}},[e._v("审核不通过")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/comment/delete",expression:"'/comment/delete'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.deleteBatch(e.$api.commentDelete,e.ids)}}},[e._v("批量删除")])],1),e._v(" "),a("div"),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],2)},d=[],b={render:p,staticRenderFns:d},h=b,u=a("Mw9A"),v=n,D=u(m,h,!1,v,null,null);t.default=D.exports},UQjl:function(e,t,a){t=e.exports=a("BkJT")(!1),t.push([e.i,"\n.container{\n  width: 100%;\n  padding: 20px 24px;\n  border-bottom: 1px dashed #e7ecf3;\n}\n.content-container{\n  min-height: 60px;\n}\n.header,.container,.gray{\n  font-size: 14px;\n}\n.gray{\n  display: inline-block;\n}\n.read-color{\n  color: red;\n}\n.green-color{\n  color: #29D785;\n}\n.small-btn{\n  padding: 5px 8px;\n  min-width:50px;\n}\n.header{\n  padding: 0px 24px;\n  height: 50px;\n  line-height: 50px;\n  background-color: #F7F7F7;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.header .el-row{\n  border-top: 1px #E7ECF3 solid；\n  border-top\n}\n.header .title{\n  overflow: hidden;\n  min-width: 300px;\n}\n.header .title a{\n  color: #5C93BF;\n}\n.header .contentId{\n  color: #acb5bb\n}\n.footer{\n  margin-top: 20px;\n}\n.footer .gray span{\n  margin-right: 20px;\n  padding-left: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.content-textarea{\n  min-height: 50px;\n  line-height: 30px;\n}\n.reply{\n  margin-top: 30px;\n}\n.reply-textarea{\n  position: relative;\n  border:1px #EEE9DD solid;\n  border-radius: 4px;\n}\n.reply-textarea textarea{\n  border: 0px ;\n  resize: none;\n}\n.reply-textarea .btn-group{\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\n.reply-textarea .btn-group span{\n  color: #ffffff ;\n}\n.reply-textarea .submit{\n  background-color: #00AEFF;\n}\n.reply-textarea .cancel{\n  background-color: #C7C7C7;\n}\n.comment{\n  margin-top: 0px;\n}\n.comment-textarea{\n  border:1px #E7ECF3 solid;\n}\n",""])},"g7e+":function(e,t,a){var n=a("UQjl");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("35a404c8",n,!0)}});