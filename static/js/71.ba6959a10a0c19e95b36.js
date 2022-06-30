webpackJsonp([71],{kHbk:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("STSY"),n={data:function(){return{list:null,total:null,listLoading:!0,listQuery:{page:1,limit:15,orderBy:"id",sortedBy:"desc"},dialogPermissionVisible:!1,permissionData:[]}},filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(a.d)(this.listQuery).then(function(e){t.list=e.data.data,t.total=e.data.total,t.listLoading=!1})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handlePermissions:function(t){var e=this;Object(a.e)(t).then(function(t){e.permissionData=t.data.permissions,e.dialogPermissionVisible=!0})},deleteData:function(t){var e=this;Object(a.b)(t).then(function(){e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var i=e.list.indexOf(t);e.list.splice(i,1)})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"app-container",attrs:{"element-loading-text":"Loading"}},[i("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"10px"}},[i("router-link",{attrs:{to:"/permissions/role-create"}},[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"}},[t._v("添加")])],1)],1),t._v(" "),i("el-table",{attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"link-type",on:{click:function(i){t.handleUpdate(e.row)}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"权限",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"link-type",on:{click:function(i){t.handlePermissions(e.row.id)}}},[t._v("查看")])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-time"}),t._v(" "),i("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"updated_at",label:"更新时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-time"}),t._v(" "),i("span",[t._v(t._s(e.row.updated_at))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{attrs:{to:"/permissions/role-edit/"+e.row.id}},[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"}},[t._v("编辑")])],1),t._v(" "),"deleted"!=e.row.status?i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.deleteData(e.row)}}},[t._v("删除\n        ")]):t._e()]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[t.listQuery.limit],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),i("el-dialog",{attrs:{title:"权限列表",visible:t.dialogPermissionVisible},on:{"update:visible":function(e){t.dialogPermissionVisible=e}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.permissionData,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),i("el-table-column",{attrs:{prop:"http_method",label:"方法"}}),t._v(" "),i("el-table-column",{attrs:{prop:"http_path",label:"路由"}})],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPermissionVisible=!1}}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]},s=i("VU/8")(n,l,!1,null,null,null);e.default=s.exports}});