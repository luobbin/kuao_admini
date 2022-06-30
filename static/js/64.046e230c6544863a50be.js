webpackJsonp([64],{"+oQ7":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("BO1k"),l=i.n(n),a=i("woOf"),r=i.n(a),s=i("FE1k");i("0xDb");var o=[{key:"iid",name:"商品ID"},{key:"keyword",name:"关键词"},{key:"uname",name:"会员名"},{key:"uid",name:"会员id"}],c={data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:15,searchJoin:"and",search:"",searchFields:"",orderBy:"id",sortedBy:"desc",filter:""},searchQuery:{search:"",searchFields:"",field:"",keyword:""},fieldOptions:o,multipleSelection:[],checkAll:0,isIndeterminate:!1}},created:function(){this.getList()},methods:{getList:function(){var e,t=this;this.listLoading=!0,(e=this.listQuery,Object(s.a)({url:"/buylog",method:"get",params:e})).then(function(e){t.list=e.data.data,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){var e=r()({},this.searchQuery),t=e.search,i=e.searchFields;e.field&&e.keyword&&("uname"==e.field?(t+="user.ddusername:"+e.keyword+";",i+="user.ddusername:=;"):(t+=e.field+":"+e.keyword+";",i+=e.field+":=;")),this.listQuery.search=t,this.listQuery.searchFields=i,this.listQuery.page=1,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e,this.multipleSelection.length==this.list.length?(this.checkAll=2,this.isIndeterminate=!0):this.multipleSelection.length>0?(this.checkAll=1,this.isIndeterminate=!0):(this.checkAll=0,this.isIndeterminate=!1)},handleDelete:function(){var e=this;if(this.multipleSelection.length<=0)return this.$notify({title:"警告",message:"请选择要删除的条目",type:"warning"}),!1;this.$confirm("此操作将数据彻底删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){var t="",i=!0,n=!1,a=void 0;try{for(var r,o=l()(e.multipleSelection);!(i=(r=o.next()).done);i=!0){t+=r.value.id+","}}catch(e){n=!0,a=e}finally{try{!i&&o.return&&o.return()}finally{if(n)throw a}}e.listLoading=!0,function(e){return Object(s.a)({url:"/buylog/"+e,method:"delete"})}(t).then(function(t){e.$message({type:"success",message:t.data.message}),e.getList(),e.listLoading=!1})}).catch(function(){})}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"app-container",attrs:{"element-loading-text":"Loading"}},[i("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"10px"}},[i("el-alert",{staticStyle:{width:"300px",display:"inline","margin-right":"20px"},attrs:{title:"[系统会自动删除10天前的购物记录]",type:"info"}}),e._v(" "),i("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"搜索字段"},model:{value:e.searchQuery.field,callback:function(t){e.$set(e.searchQuery,"field",t)},expression:"searchQuery.field"}},e._l(e.fieldOptions,function(e){return i("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})})),e._v("\n    :\n    "),i("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"关键字"},model:{value:e.searchQuery.keyword,callback:function(t){e.$set(e.searchQuery,"keyword",t)},expression:"searchQuery.keyword"}}),e._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("筛选")])],1),e._v(" "),i("el-table",{ref:"multipleTable",attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"35"}}),e._v(" "),i("el-table-column",{attrs:{prop:"id",label:"ID",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{label:"会员名",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!=t.row.user?i("a",{staticClass:"link-type"},[e._v("\n          "+e._s(t.row.user.ddusername)+"\n        ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"搜索记录",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("a",{staticClass:"link-type",attrs:{href:"http://item.taobao.com/item.html?id="+t.row.iid}},[e._v("\n          http://item.taobao.com/item.html?id="+e._s(t.row.iid)+"\n        ")])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"记录时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.day)+"\n      ")]}}])})],1),e._v(" "),i("div",{staticClass:"pagination-container"},[0==e.checkAll?i("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:function(t){e.toggleSelection(e.list)}}},[e._v("全选")]):1==e.checkAll?i("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:function(t){e.toggleSelection(e.list)}}},[e._v("反选")]):i("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:function(t){e.toggleSelection()}}},[e._v("取消全选")]),e._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){e.handleDelete()}}},[e._v("彻底删除")]),e._v(" "),i("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[e.listQuery.limit],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var u=i("VU/8")(c,d,!1,function(e){i("8xmg")},"data-v-16d9d1b4",null);t.default=u.exports},"8hVp":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.pagination-container[data-v-16d9d1b4]{\n  margin-top: 10px;\n}\n.el-pagination[data-v-16d9d1b4]{\n  float: right;\n}\n.el-form-item[data-v-16d9d1b4]{\n\tmargin-bottom: 10px;\n}\n\n",""])},"8xmg":function(e,t,i){var n=i("8hVp");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("336d4350",n,!0)}});