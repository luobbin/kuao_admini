webpackJsonp([40],{"8BJP":function(e,t,n){var a=n("dH40");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("8447d858",a,!0)},GHNb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("FE1k");var l={props:{type:{type:String,default:"zong"}},data:function(){return{tableKey:0,list:null,total:310,listLoading:!0,listQuery:{page:1,limit:31,filter:""}}},filters:{numFilter:function(e){var t=Number(e).toFixed(2);return Number(t)}},created:function(){this.getList()},methods:{getList:function(){var e,t=this;this.listLoading=!0,"tao"==this.type?this.listQuery.filter="id;do_day;tao_goods_sum;tao_zsy;tao_tradenum;tao_tradenum_ok;tao_bd_jifenbao;tao_fx_jifenbao":"mall"==this.type?this.listQuery.filter="id;do_day;mall_goods_sum;mall_zsy;mall_tradenum;mall_order_ok;mall_order_no;mall_order_faild;mall_no_user;mall_fx_jifenbao;mall_bd_jifenbao":"pdd"==this.type&&(this.listQuery.filter="id;do_day;pdd_goods_sum;pdd_zsy;pdd_tradenum;pdd_order_ok;pdd_order_no;pdd_fx_jifenbao;pdd_bd_jifenbao"),(e=this.listQuery,this.type,Object(a.a)({url:"/daily_reports",method:"get",params:e})).then(function(e){for(var n=e.data.length-1;n>=0;n--)e.data[n].upstatus=1;t.list=e.data,t.listLoading=!1})},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleModifyStatus:function(e,t){var n,l=this;(n=e,Object(a.a)({url:"/daily_reports/"+n.id+"/edit",method:"get",data:n})).then(function(n){l.$message({message:n.data.message,type:"success"}),e.upstatus=t})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"日期",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.do_day))])]}}])}),e._v(" "),"zong"==e.type?n("el-table-column",{attrs:{label:"总交易额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.tao_goods_sum+t.row.mall_goods_sum+t.row.pdd_goods_sum/100)))])]}}])}):e._e(),e._v(" "),"zong"==e.type?n("el-table-column",{attrs:{label:"总收益（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.tao_zsy+t.row.mall_zsy+t.row.pdd_zsy/100)))])]}}])}):e._e(),e._v(" "),"zong"==e.type?n("el-table-column",{attrs:{label:"总支出(元)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.tixian_sum))])]}}])}):e._e(),e._v(" "),"zong"==e.type?n("el-table-column",{attrs:{label:"总交易量（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.tao_tradenum+t.row.mall_tradenum+t.row.pdd_tradenum))])]}}])}):e._e(),e._v(" "),"zong"==e.type?n("el-table-column",{attrs:{label:"总有效订单",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.tao_tradenum_ok+t.row.mall_order_ok+t.row.pdd_order_ok))])]}}])}):e._e(),e._v(" "),"zong"==e.type?n("el-table-column",{attrs:{label:"会员数（个）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user_sum)+"\n      ")]}}])}):e._e(),e._v(" "),"zong"==e.type?n("el-table-column",{attrs:{label:"有效会员（个）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user_youixao_sum)+"\n      ")]}}])}):e._e(),e._v(" "),"tao"==e.type?n("el-table-column",{attrs:{label:"总交易额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.tao_goods_sum)+"\n      ")]}}])}):e._e(),e._v(" "),"tao"==e.type?n("el-table-column",{attrs:{label:"总收益（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.tao_zsy)+"\n      ")]}}])}):e._e(),e._v(" "),"tao"==e.type?n("el-table-column",{attrs:{label:"总交易量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.tao_tradenum)+"\n      ")]}}])}):e._e(),e._v(" "),"tao"==e.type?n("el-table-column",{attrs:{label:"已确认订单数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.tao_tradenum_ok))])]}}])}):e._e(),e._v(" "),"tao"==e.type?n("el-table-column",{attrs:{label:"未认领订单数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.tao_tradenum_unclaim))])]}}])}):e._e(),e._v(" "),"tao"==e.type?n("el-table-column",{attrs:{label:"被动收入（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.tao_bd_jifenbao/100)))])]}}])}):e._e(),e._v(" "),"tao"==e.type?n("el-table-column",{attrs:{label:"分享奖金（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.tao_fx_jifenbao/100)))])]}}])}):e._e(),e._v(" "),"mall"==e.type?n("el-table-column",{attrs:{label:"总交易额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.mall_goods_sum))])]}}])}):e._e(),e._v(" "),"mall"==e.type?n("el-table-column",{attrs:{label:"总收益（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.mall_zsy))])]}}])}):e._e(),e._v(" "),"mall"==e.type?n("el-table-column",{attrs:{label:"总交易量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.mall_tradenum))])]}}])}):e._e(),e._v(" "),"mall"==e.type?n("el-table-column",{attrs:{label:"有效订单数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.mall_order_ok))])]}}])}):e._e(),e._v(" "),"mall"==e.type?n("el-table-column",{attrs:{label:"未核对订单数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.mall_order_no))])]}}])}):e._e(),e._v(" "),"mall"==e.type?n("el-table-column",{attrs:{label:"失效订单数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.mall_order_faild))])]}}])}):e._e(),e._v(" "),"mall"==e.type?n("el-table-column",{attrs:{label:"未认领订单数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.mall_no_user))])]}}])}):e._e(),e._v(" "),"mall"==e.type?n("el-table-column",{attrs:{label:"分享奖金（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.mall_fx_jifenbao/100)))])]}}])}):e._e(),e._v(" "),"mall"==e.type?n("el-table-column",{attrs:{label:"被动收入（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.mall_bd_jifenbao/100)))])]}}])}):e._e(),e._v(" "),"pdd"==e.type?n("el-table-column",{attrs:{label:"总交易额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.pdd_goods_sum/100)))])]}}])}):e._e(),e._v(" "),"pdd"==e.type?n("el-table-column",{attrs:{label:"总收益（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.pdd_zsy/100)))])]}}])}):e._e(),e._v(" "),"pdd"==e.type?n("el-table-column",{attrs:{label:"总交易量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.pdd_tradenum))])]}}])}):e._e(),e._v(" "),"pdd"==e.type?n("el-table-column",{attrs:{label:"有效订单数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.pdd_order_ok))])]}}])}):e._e(),e._v(" "),"pdd"==e.type?n("el-table-column",{attrs:{label:"失效订单数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.pdd_order_no))])]}}])}):e._e(),e._v(" "),"pdd"==e.type?n("el-table-column",{attrs:{label:"分享奖金（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.pdd_fx_jifenbao/100)))])]}}])}):e._e(),e._v(" "),"pdd"==e.type?n("el-table-column",{attrs:{label:"被动收入（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("numFilter")(t.row.pdd_bd_jifenbao/100)))])]}}])}):e._e(),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"150","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"!=t.row.upstatus?n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){e.handleModifyStatus(t.row,"0")}}},[e._v("更新\n        ")]):e._e(),e._v(" "),"1"!=t.row.upstatus?n("span",{attrs:{size:"mini"}},[e._v("更新中\n        ")]):e._e()]}}])})],1),e._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[e.listQuery.limit],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]},r={name:"tab",components:{list:n("VU/8")(l,o,!1,null,null,null).exports},data:function(){return{tabMapOptions:[{label:"总数据",key:"zong"},{label:"淘宝数据",key:"tao"},{label:"商城数据",key:"mall"},{label:"拼多多数据",key:"pdd"}],activeName:"zong",createdTimes:0}},methods:{showCreatedTimes:function(){this.createdTimes=this.createdTimes+1}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-container"},[n("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.tabMapOptions,function(t){return n("el-tab-pane",{key:t.key,attrs:{label:t.label,name:t.key}},[n("keep-alive",[e.activeName==t.key?n("list",{attrs:{type:t.key},on:{create:e.showCreatedTimes}}):e._e()],1)],1)}))],1)},staticRenderFns:[]};var _=n("VU/8")(r,s,!1,function(e){n("8BJP")},"data-v-7799e3a0",null);t.default=_.exports},dH40:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.tab-container[data-v-7799e3a0]{\n  margin: 30px;\n}\n",""])}});