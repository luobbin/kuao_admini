webpackJsonp([63],{"7NEH":function(t,e,a){var l=a("YR6U");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a("rjj0")("11ca50fc",l,!0)},YR6U:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\ninput[data-v-1cb3d424] {\n  padding: 0 10px;\n}\n.tit[data-v-1cb3d424] {\n  position: relative;\n  top: 20px;\n  width: 100%;\n  padding: 0 0 10px 15px;\n  height: 0 !important;\n}\n.tit .l_box li[data-v-1cb3d424] {\n    height: 10px;\n    float: left;\n    font-weight: 600;\n    color: #666;\n    letter-spacing: 1.5px;\n    line-height: 26px;\n}\n.tit .r_box[data-v-1cb3d424] {\n    float: right;\n    margin-right: 2%;\n}\n.tit .r_box li[data-v-1cb3d424] {\n      float: left;\n      margin-right: 10px;\n}\n.main[data-v-1cb3d424] {\n  padding: 65px 25px 25px 15px !important;\n}\n.main .tab_foot[data-v-1cb3d424] {\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    border: 1px solid #f5f5f5;\n    border-top: 0;\n}\n.main .tab_foot .shanshu[data-v-1cb3d424] {\n      display: inline-block;\n      margin-left: 10px;\n}\n.main .tab_foot .block[data-v-1cb3d424] {\n      -webkit-transform: translate(0, 20%);\n              transform: translate(0, 20%);\n      margin-left: 20%;\n      display: inline-block;\n}\n",""])},"keJ+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("vLgD");var n={name:"msg_list",props:{},data:function(){return{msglist:[],msglistLoading:!0,pagenumber:1,total:0,xx:[{value:"shj",label:"收件人"},{value:"fjr",label:"发件人"},{value:"wck",label:"未查看"}],xxvalue:""}},created:function(){this.getmsgList()},methods:{getmsgList:function(){var t,e=this;this.msglistLoading=!0,(t=this.pagenumber,Object(l.a)({url:"/msgs?page="+t,method:"get"})).then(function(t){console.log(t.data),e.msglist=t.data.data,e.total=t.data.total,e.msglistLoading=!1})},handleCurrentChange:function(t){console.log("当前页: "+t),this.pagenumber=" "+t,this.getmsgList()}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.msglistLoading,expression:"msglistLoading"}]},[a("el-header",{staticClass:"tit"},[a("div",{staticClass:"l_box"},[a("ul",[a("li",[a("el-button",{attrs:{type:"text"}},[t._v("【发送站内信】")])],1)])]),t._v(" "),a("div",{staticClass:"r_box"},[a("ul",[a("li",[a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("未查看站内信")])],1),t._v(" "),a("li",[t._v("\r\n          会员名 :\r\n          "),a("el-input",{staticStyle:{width:"150px"},attrs:{clearable:"",size:"small"}})],1),t._v(" "),a("li",[a("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",size:"small"},model:{value:t.xxvalue,callback:function(e){t.xxvalue=e},expression:"xxvalue"}},t._l(t.xx,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("li",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"}},[t._v("搜索")])],1),t._v(" "),a("li",[a("p",{staticStyle:{"line-height":"34px","letter-spacing":"1px","font-weight":"500"}},[t._v("共有"+t._s(t.total)+"条记录")])])])])]),t._v(" "),a("el-main",{staticClass:"main"},[a("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{border:"",size:"small",data:t.msglist,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"selection",width:"35"}}),t._v(" "),a("el-table-column",{attrs:{prop:"see",label:"状态","min-width":"20"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题","min-width":"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"内容","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"user.ddusername",label:"发件人","min-width":"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"senduser",label:"接待客服","min-width":"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"addtime",label:"发送时间","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"执行操作","min-width":"40"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("阅读")])],1)}}])})],1),t._v(" "),a("div",{staticClass:"tab_foot"},[a("div",{staticClass:"shanshu"},[a("el-button",{staticStyle:{"letter-spacing":"2px","font-size":"16px"},attrs:{type:"danger",size:"small"}},[t._v("删除")])],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.pagenumber,"page-size":15,layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)])],1)],1)},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(t){a("7NEH")},"data-v-1cb3d424",null);e.default=s.exports}});