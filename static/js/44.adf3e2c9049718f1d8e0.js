webpackJsonp([44],{Ntt0:function(a,t,e){var n=e("yS9O");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("rjj0")("47161860",n,!0)},vA37:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("FE1k");var l={data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:15,searchJoin:"and",search:"",searchFields:"",orderBy:"id",sortedBy:"desc"},searchQuery:{field:"",keyword:"",stime:"",etime:"",search:"",searchFields:""},analyse:{taoyj:0,taolr:0,paiyj:0,pailr:0,mallyj:0,malllr:0}}},filters:{xiaoshuFilter:function(a){return a.toFixed(2)}},created:function(){this.getDetail(),this.getList()},methods:{getList:function(){var a,t=this;this.listLoading=!0,(a=this.listQuery,Object(n.a)({url:"/statements",method:"get",params:a})).then(function(a){t.list=a.data.data,t.total=a.data.total,t.listLoading=!1})},getDetail:function(){var a=this;this.loading=!0,Object(n.a)({url:"/statements/create",method:"get"}).then(function(t){a.analyse=t.data,a.loading=!1})},handleCurrentChange:function(a){this.listQuery.page=a,this.getList()},handleModifyStatus:function(a,t){var e,l=this;(e=a,Object(n.a)({url:"/statements/"+e.id+"/edit",method:"get",data:e})).then(function(e){l.$message({message:e.data.message,type:"success"}),a.gamelr=t})}}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticClass:"app-container",attrs:{"element-loading-text":"Loading"}},[e("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"10px"}},[e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"panel-group",attrs:{data:a.analyse,"element-loading-text":"Loading",gutter:40}},[e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:4}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[a._v("淘宝总佣金(元)")]),a._v(" "),e("b",{staticClass:"card-panel-num"},[a._v(a._s(a.analyse.taoyj))])])])]),a._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:4}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[a._v("淘宝总利润(元)")]),a._v(" "),e("b",{staticClass:"card-panel-num"},[a._v(a._s(a._f("xiaoshuFilter")(a.analyse.taolr)))])])])]),a._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:4}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[a._v("商城总佣金(元)")]),a._v(" "),e("b",{staticClass:"card-panel-num"},[a._v(a._s(a._f("xiaoshuFilter")(a.analyse.paiyj)))])])])]),a._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:4}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[a._v("商城总利润(元)")]),a._v(" "),e("b",{staticClass:"card-panel-num"},[a._v(a._s(a._f("xiaoshuFilter")(a.analyse.pailr)))])])])]),a._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:4}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[a._v("拼多多总佣金(元)")]),a._v(" "),e("b",{staticClass:"card-panel-num"},[a._v(a._s(a._f("xiaoshuFilter")(a.analyse.mallyj)))])])])]),a._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:4}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[a._v("拼多多总利润(元)")]),a._v(" "),e("b",{staticClass:"card-panel-num"},[a._v(a._s(a._f("xiaoshuFilter")(a.analyse.malllr)))])])])])],1)],1),a._v(" "),e("el-table",{attrs:{data:a.list,border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row.id)+"\n      ")]}}])}),a._v(" "),e("el-table-column",{attrs:{label:"月份",align:"center"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",[a._v(a._s(t.row.date))])]}}])}),a._v(" "),e("el-table-column",{attrs:{label:"淘宝佣金(元)",align:"center",width:"120"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("span",[a._v(a._s(t.row.taoyj))])]}}])}),a._v(" "),e("el-table-column",{attrs:{label:"淘宝利润(元)",align:"center",width:"120"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row.taolr)+"\n      ")]}}])}),a._v(" "),e("el-table-column",{attrs:{label:"商城佣金(元)",align:"center",width:"120"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row.mallyj)+"\n      ")]}}])}),a._v(" "),e("el-table-column",{attrs:{label:"商城利润(元)",align:"center",width:"120"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row.malllr)+"\n      ")]}}])}),a._v(" "),e("el-table-column",{attrs:{label:"拼多多佣金(元)",align:"center",width:"120"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row.paiyj)+"\n      ")]}}])}),a._v(" "),e("el-table-column",{attrs:{label:"拼多多利润(元)",align:"center",width:"120"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v("\n        "+a._s(t.row.pailr)+"\n      ")]}}])}),a._v(" "),e("el-table-column",{attrs:{align:"center",prop:"stime",label:"开始时间",width:"200"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("i",{staticClass:"el-icon-time"}),a._v(" "),e("span",[a._v(a._s(t.row.stime))])]}}])}),a._v(" "),e("el-table-column",{attrs:{align:"center",prop:"dtime",label:"结束时间",width:"200"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("i",{staticClass:"el-icon-time"}),a._v(" "),e("span",[a._v(a._s(t.row.dtime))])]}}])}),a._v(" "),e("el-table-column",{attrs:{align:"center",label:"操作",width:"150","class-name":"small-padding fixed-width"},scopedSlots:a._u([{key:"default",fn:function(t){return["0"==t.row.gamelr?e("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(e){a.handleModifyStatus(t.row,"1")}}},[a._v("更新\n        ")]):a._e(),a._v(" "),"0"!=t.row.gamelr?e("span",{attrs:{size:"mini"}},[a._v("更新中\n        ")]):a._e()]}}])})],1),a._v(" "),e("div",{staticClass:"pagination-container"},[e("el-pagination",{attrs:{background:"","current-page":a.listQuery.page,"page-sizes":[a.listQuery.limit],"page-size":a.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:a.total},on:{"current-change":a.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var i=e("VU/8")(l,s,!1,function(a){e("Ntt0")},"data-v-6549a7b9",null);t.default=i.exports},yS9O:function(a,t,e){(a.exports=e("FZ+f")(!1)).push([a.i,"\n.panel-group[data-v-6549a7b9] {\n  margin-top: 3px;\n}\n.panel-group .card-panel-col[data-v-6549a7b9] {\n    margin-bottom: 5px;\n}\n.panel-group .card-panel[data-v-6549a7b9] {\n    font-size: 12px;\n    position: relative;\n    overflow: hidden;\n    color: #666;\n    background: #fff;\n    -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05);\n            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05);\n    border-color: rgba(0, 0, 0, 0.05);\n}\n.panel-group .card-panel:hover .card-panel-col[data-v-6549a7b9] {\n      background: #C1C1C1;\n}\n.panel-group .card-panel .card-panel-description[data-v-6549a7b9] {\n      float: left;\n      font-weight: bold;\n      margin: 6px;\n      margin-left: 0px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-text[data-v-6549a7b9] {\n        line-height: 18px;\n        color: rgba(0, 0, 0, 0.45);\n        font-size: 14px;\n        margin-bottom: 8px;\n        text-align: center;\n}\n.panel-group .card-panel .card-panel-description .card-panel-num[data-v-6549a7b9] {\n        font-size: 20px;\n}\n",""])}});