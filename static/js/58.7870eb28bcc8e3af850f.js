webpackJsonp([58],{"9s17":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("BO1k"),a=i.n(l),s=i("woOf"),n=i.n(s),r=i("Wj20"),o=i("0xDb"),c=[{key:1,name:"营销素材"},{key:2,name:"地推素材"},{key:3,name:"每日一读"}],u=c.reduce(function(t,e){return t[e.key]=e.name,t},{}),h=[{key:0,name:"已下架"},{key:1,name:"已发布"},{key:2,name:"待发布"},{key:-1,name:"已取消"}],p=h.reduce(function(t,e){return t[e.key]=e.name,t},{}),d={data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:15,searchJoin:"and",search:"",searchFields:"",orderBy:"sort,publish_time",sortedBy:"desc",filter:""},searchQuery:{search:"",searchFields:"",is_publish:"",type:"",publish_day:null},publishOptions:h,typeOptions:c,multipleSelection:[],checkAll:0,isIndeterminate:!1}},filters:{typeFilter:function(t){return u[t]},publishFilter:function(t){return p[t]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(r.c)(this.listQuery).then(function(e){t.list=e.data.data;for(var i=t.list.length-1;i>=0;i--)t.list[i].img_list=JSON.parse(t.list[i].imgs);t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){var t=n()({},this.searchQuery),e=t.search,i=t.searchFields;if(t.publish_day){var l=Object(o.f)(Object(o.e)(t.publish_day),"{y}-{m}-{d} 00:00:00"),a=Object(o.f)(Object(o.e)(t.publish_day),"{y}-{m}-{d} 23:59:59");e+="publish_time:"+Object(o.e)(l)+","+Object(o.e)(a)+";",i+="publish_time:between;"}t.type&&(e+="type:"+t.type+";",i+="type:=;"),t.is_publish&&(e+="is_publish:"+t.is_publish+";",i+="is_publish:=;"),this.listQuery.search=e,this.listQuery.searchFields=i,this.listQuery.page=1,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleSort:function(t,e){var i=this;Object(r.d)({is_sort:e},t.id).then(function(e){200==e.data.code?(i.$message({type:"success",message:"操作成功"}),t.sort=e.data.data):$message(e.data.msg)})},handlePublishStatus:function(t,e){var i=this;Object(r.d)({is_publish:e},t.id).then(function(l){200==l.data.code?(i.$message({type:"success",message:"操作成功"}),t.is_publish=e,t.sort=0):$message(l.data.msg)})},toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t,this.multipleSelection.length==this.list.length?(this.checkAll=2,this.isIndeterminate=!0):this.multipleSelection.length>0?(this.checkAll=1,this.isIndeterminate=!0):(this.checkAll=0,this.isIndeterminate=!1)},handleDelete:function(){var t=this;if(this.multipleSelection.length<=0)return this.$notify({title:"警告",message:"请选择要删除的条目",type:"warning"}),!1;this.$confirm("此操作将数据移至回收站, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){var e="",i=!0,l=!1,s=void 0;try{for(var n,o=a()(t.multipleSelection);!(i=(n=o.next()).done);i=!0){e+=n.value.id+","}}catch(t){l=!0,s=t}finally{try{!i&&o.return&&o.return()}finally{if(l)throw s}}t.listLoading=!0,Object(r.d)({del:1},e).then(function(e){t.$message({type:"success",message:e.data.message}),t.getList(),t.listLoading=!1})}).catch(function(){})}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"app-container",attrs:{"element-loading-text":"Loading"}},[i("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"10px"}},[t._v("\n    发布时间：\n    "),i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.searchQuery.publish_day,callback:function(e){t.$set(t.searchQuery,"publish_day",e)},expression:"searchQuery.publish_day"}}),t._v(" "),i("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"类型"},model:{value:t.searchQuery.type,callback:function(e){t.$set(t.searchQuery,"type",e)},expression:"searchQuery.type"}},t._l(t.typeOptions,function(t){return i("el-option",{key:t.key,attrs:{label:t.name,value:t.key}})})),t._v(" "),i("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"发布状态"},model:{value:t.searchQuery.is_publish,callback:function(e){t.$set(t.searchQuery,"is_publish",e)},expression:"searchQuery.is_publish"}},t._l(t.publishOptions,function(t){return i("el-option",{key:t.key,attrs:{label:t.name,value:t.key}})})),t._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("筛选")]),t._v(" "),i("router-link",{attrs:{to:"/community/share_material-create"}},[i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"}},[t._v("添加")])],1)],1),t._v(" "),i("el-table",{ref:"multipleTable",attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),t._v(" "),i("el-table-column",{attrs:{label:"缩略图"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.img_list,function(e){return i("span",[i("img",{attrs:{src:e,width:"auto",height:"80"}}),t._v("  \n        ")])})}}])}),t._v(" "),i("el-table-column",{attrs:{label:"类型",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("typeFilter")(e.row.type)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"发布状态",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("publishFilter")(e.row.is_publish))+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"发布时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-time"}),t._v(" "),i("span",[t._v(t._s(t._f("parseTime")(e.row.publish_time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作人",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.admin?i("span",[t._v(t._s(e.row.admin.name))]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作时间",prop:"updated_at",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{prop:"operate",label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-col",{attrs:{span:8}},[e.row.sort>0?i("el-button",{attrs:{type:"text",size:"small",title:"取消置顶"},on:{click:function(i){t.handleSort(e.row,0)}}},[i("font",{attrs:{color:"green"}},[t._v("已置顶")])],1):0==e.row.sort&&e.row.is_publish>0?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.handleSort(e.row,1)}}},[i("font",{attrs:{color:"black"}},[t._v("置顶")])],1):i("div",{staticStyle:{color:"gray","font-size":"10px","padding-top":"6px"}},[t._v("置顶")])],1),t._v(" "),i("el-col",{attrs:{span:5}},[-1==e.row.is_publish?i("div",{staticStyle:{color:"gray","font-size":"10px","padding-top":"6px"}},[t._v("修改")]):i("router-link",{attrs:{to:"/community/share_material-edit/"+e.row.id}},[i("el-button",{attrs:{type:"text",size:"small"}},[t._v("修改")])],1)],1),t._v(" "),2==e.row.is_publish?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.handlePublishStatus(e.row,-1)}}},[i("font",{attrs:{color:"black"}},[t._v("取消发布")])],1):t._e(),t._v(" "),1==e.row.is_publish?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){t.handlePublishStatus(e.row,0)}}},[i("font",{attrs:{color:"black"}},[t._v("下架")])],1):t._e()]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[t.listQuery.limit],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var f=i("VU/8")(d,y,!1,function(t){i("naiX")},"data-v-209a6725",null);e.default=f.exports},aIyx:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.pagination-container[data-v-209a6725]{\n  margin-top: 10px;\n}\n.el-pagination[data-v-209a6725]{\n  float: right;\n}\n\n",""])},naiX:function(t,e,i){var l=i("aIyx");"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);i("rjj0")("df22d4fe",l,!0)}});