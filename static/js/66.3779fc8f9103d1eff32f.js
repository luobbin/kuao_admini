webpackJsonp([66],{"7hCV":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\ninput[data-v-103a67db] {\n  padding: 0 10px;\n}\n.tit[data-v-103a67db] {\n  position: relative;\n  top: 20px;\n  padding: 0 0 0 15px;\n}\n.tit .r_box[data-v-103a67db] {\n    min-width: 900px;\n}\n.tit .r_box li[data-v-103a67db] {\n      float: left;\n      margin-right: 10px;\n}\n.main .tab_foot .shanshu[data-v-103a67db] {\n  display: inline-block;\n  margin-left: 10px;\n}\n.main .tab_foot .block[data-v-103a67db] {\n  float: right;\n  margin: 30px 60px 0 0;\n}\n",""])},GL0v:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("woOf"),r=a.n(s),l=a("y3oj"),i=[{value:"",label:"全部"},{value:"0",label:"未点击"},{value:"1",label:"已点击"}],n={name:"UserReceiptsDetails",data:function(){return{DdState:"",DdOptions:i,userlist:[],userlistLoading:!1,total:0,listQuery:{page:1,limit:10,orderBy:"id",sortedBy:"asc",search:"",searchJoin:"and",searchFields:""},searchuserQuery:{dataval:"",orderStatus:"",usernameval:"",search:"",searchFields:""}}},computed:{},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;this.userlistLoading=!0,Object(l.e)(this.listQuery).then(function(t){if(200==t.data.code&&""!==t.data.data.data){e.userlist=t.data.data.data,e.total=t.data.data.total;for(var a=0;a<e.userlist.length;a++)e.userlist[a].index=(1!=t.data.data.current_page?10*t.data.data.current_page-9:1)+a,0==e.userlist[a].status?e.userlist[a].status="未点击":1==e.userlist[a].status&&(e.userlist[a].status="已点击")}e.userlistLoading=!1})},handleCurrentChange:function(e){this.listQuery.page=e,this.getUserList()},searchuser:function(){this.listQuery.searchFields="";var e=r()({},this.searchuserQuery),t=e.search;e.searchFields;e.dataval&&(t+="time:"+e.dataval+"-20;",e.searchFields+="time:=;"),""!==e.orderStatus&&(t+="status:"+e.orderStatus+";",e.searchFields+="status:=;"),""!==e.usernameval&&(t+="user.ddusername:"+e.usernameval+";",e.searchFields+="user.ddusername:=;"),this.listQuery.search=t,this.listQuery.searchFields=e.searchFields,this.listQuery.page=1,this.getUserList()}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",{staticClass:"tit"},[a("div",{staticClass:"r_box"},[a("ul",[a("li",[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("月结日期：")]),e._v(" "),a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"month",placeholder:"选择日期时间",size:"small","value-format":"yyyy-MM"},model:{value:e.searchuserQuery.dataval,callback:function(t){e.$set(e.searchuserQuery,"dataval",t)},expression:"searchuserQuery.dataval"}})],1)]),e._v(" "),a("li",[a("el-select",{staticClass:"item-choose",staticStyle:{width:"150px"},attrs:{size:"small",clearable:"",placeholder:"刷新退款订单状态"},model:{value:e.searchuserQuery.orderStatus,callback:function(t){e.$set(e.searchuserQuery,"orderStatus",t)},expression:"searchuserQuery.orderStatus"}},e._l(e.DdOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("li",[a("el-input",{staticStyle:{width:"150px"},attrs:{clearable:"",size:"small",placeholder:"请输入会员名"},model:{value:e.searchuserQuery.usernameval,callback:function(t){e.$set(e.searchuserQuery,"usernameval",t)},expression:"searchuserQuery.usernameval"}})],1),e._v(" "),a("li",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:e.searchuser}},[e._v("查询")])],1)])])]),e._v(" "),a("el-main",{staticClass:"main"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.userlistLoading,expression:"userlistLoading"}],staticStyle:{"text-align":"center"},attrs:{border:"",size:"small",data:e.userlist,"highlight-current-row":"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"序号",width:"80",prop:"index"}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"月结日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user.ddusername",label:"会员名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contract.mobile",label:"手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contract.wechat",label:"微信号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contract.account",label:"阿里妈妈账号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"刷新退款订单状态"}})],1),e._v(" "),a("div",{staticClass:"tab_foot"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-size":e.listQuery.limit,layout:"total,prev, pager, next, jumper ",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)])],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,u,!1,function(e){a("U/GG")},"data-v-103a67db",null);t.default=o.exports},"U/GG":function(e,t,a){var s=a("7hCV");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("9bd36bb6",s,!0)}});