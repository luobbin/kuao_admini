webpackJsonp([20],{TZ6v:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.pagination-container[data-v-7f16d736]{\r\n  margin-top: 10px;\n}\n.el-pagination[data-v-7f16d736]{\r\n  float: right;\n}\r\n\r\n",""])},hRjj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("BO1k"),l=n.n(i),a=n("woOf"),s=n.n(a),r=n("iVC1"),o={data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:15,searchJoin:"and",search:"",searchFields:"",orderBy:"id",sortedBy:"desc",filter:""},searchQuery:{search:"",searchFields:"",field:"",keyword:""},multipleSelection:[],checkAll:0,isIndeterminate:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(r.d)(this.listQuery).then(function(e){console.log("获取列表数据",e),t.list=e.data,t.total=e.data.length,t.listLoading=!1})},handleFilter:function(){var t=s()({},this.searchQuery),e=t.search,n=t.searchFields;t.keyword&&(e+="title:"+t.keyword+";",n+="title:like;"),this.listQuery.search=e,this.listQuery.searchFields=n,this.listQuery.page=1,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t,this.multipleSelection.length===this.list.length?(this.checkAll=2,this.isIndeterminate=!0):this.multipleSelection.length>0?(this.checkAll=1,this.isIndeterminate=!0):(this.checkAll=0,this.isIndeterminate=!1)},handleDelete:function(){var t=this;if(this.multipleSelection.length<=0)return this.$notify({title:"警告",message:"请选择要删除的条目",type:"warning"}),!1;this.$confirm("此操作将数据彻底删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){var e="",n=!0,i=!1,a=void 0;try{for(var s,o=l()(t.multipleSelection);!(n=(s=o.next()).done);n=!0){e+=s.value.id+","}}catch(t){i=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(i)throw a}}t.listLoading=!0,Object(r.b)(e).then(function(e){t.$message({type:"success",message:e.data.message}),t.getList(),t.listLoading=!1})}).catch(function(){})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"app-container",attrs:{"element-loading-text":"Loading"}},[n("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"10px"}},[n("router-link",{attrs:{to:"/jobs/job-create"}},[n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"}},[t._v("添加")])],1)],1),t._v(" "),n("el-table",{ref:"multipleTable",attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"35"}}),t._v(" "),n("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),t._v(" "),n("el-table-column",{attrs:{label:"岗位名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/jobs/job-edit/"+e.row.id}},[n("span",{staticClass:"link-type"},[t._v(t._s(e.row.title))])])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"工作经验"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.jingyan))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"学历要求"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.demand))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"薪资待遇"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.salary))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"create_at",label:"添加时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"operate",label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/jobs/job-edit/"+e.row.id}},[n("el-button",{attrs:{type:"primary",size:"small"}},[t._v("修改")])],1)]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-container"},[0==t.checkAll?n("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:function(e){t.toggleSelection(t.list)}}},[t._v("全选")]):1==t.checkAll?n("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:function(e){t.toggleSelection(t.list)}}},[t._v("反选")]):n("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:function(e){t.toggleSelection()}}},[t._v("取消全选")]),t._v(" "),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){t.handleDelete()}}},[t._v("删除")])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(o,c,!1,function(t){n("tOtY")},"data-v-7f16d736",null);e.default=u.exports},tOtY:function(t,e,n){var i=n("TZ6v");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("a64581be",i,!0)}});