webpackJsonp([29],{"/cVs":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.pagination-container[data-v-7e026e66]{\n  margin-top: 10px;\n}\n.el-pagination[data-v-7e026e66]{\n  float: right;\n}\n.el-form-item[data-v-7e026e66]{\n\tmargin-bottom: 10px;\n}\n\n",""])},Bp56:function(e,t,a){var l=a("/cVs");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("2d070ff6",l,!0)},MmP3:function(e,t,a){"use strict";t.b=function(e){return Object(l.a)({url:"/tixians",method:"get",params:e})},t.c=function(e,t){return Object(l.a)({url:"/tixians/"+t,method:"put",params:e})},t.a=function(e){return Object(l.a)({url:"/tixians/"+e,method:"delete"})};var l=a("vLgD")},mY3h:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("BO1k"),i=a.n(l),s=a("woOf"),n=a.n(s),r=a("MmP3"),o=a("0xDb"),c=[{key:"code",name:"支付宝账号"},{key:"realname",name:"姓名"},{key:"mobile",name:"手机号"},{key:"why",name:"提现原因"},{key:"uname",name:"会员名"},{key:"uid",name:"会员id"}],m=[{key:"自动提现",name:"自动提现"},{key:"app提现",name:"app提现"},{key:null,name:"全部"}],u=[{key:2,name:"提现失败"},{key:0,name:"待审核"},{key:1,name:"提现成功"},{key:null,name:"全部"}],p=m.reduce(function(e,t){return e[t.key]=t.name,e},{}),d=u.reduce(function(e,t){return e[t.key]=t.name,e},{}),f={data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:15,searchJoin:"and",search:"del:0;",searchFields:"del:=;",orderBy:"id",sortedBy:"desc",filter:""},searchQuery:{search:"del:0;",searchFields:"del:=;",field:"",keyword:"",status:"",remark:"",min:0,max:0,month:null},fieldOptions:c,statusOptions:u,remarkOptions:m,multipleSelection:[],checkAll:0,isIndeterminate:!1,temp:{id:void 0,item_title:"",shop_title:"",seller_nick:"",num_iid:"",pay_price:0,item_num:0,real_pay_fee:0,commission_rate:0,commission:0,fxje:0,jifenbao:0,jifen:0,uname:"",create_time:"",pay_time:"",status:null},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{order_sn:[{required:!0,message:"请输入订单号",trigger:"blur"}],goods_name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},filters:{titleFilter:function(e){return e.length>10?e.substr(0,20)+"...":e},statusFilter:function(e){return d[e]},remarkFilter:function(e){return p[e]}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(r.b)(this.listQuery).then(function(t){e.list=t.data.data,e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){var e=n()({},this.searchQuery),t=e.search,a=e.searchFields;if(e.field&&e.keyword&&("uname"==e.field?(t+="user.ddusername:"+e.keyword+";",a+="user.ddusername:=;"):(t+=e.field+":"+e.keyword+";",a+=e.field+":=;")),e.remark&&(t+="remark:"+e.remark+";",a+="remark:=;"),e.status&&(t+="status:"+e.status+";",a+="status:=;"),e.min<e.max&&e.min>0&&(t+="money:"+e.min+","+e.max+";",a+="money:between;"),e.month){this.listQuery.month=Object(o.f)(Object(o.e)(e.month),"{y}-{m}");var l=this.listQuery.month.split("-"),i=Object(o.d)(l[0],l[1]),s=Object(o.c)(l[0],l[1]);t+="addtime:"+Object(o.e)(i)+","+Object(o.e)(s)+";",a+="addtime:between;"}this.listQuery.search=t,this.listQuery.searchFields=a,this.listQuery.page=1,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e,this.multipleSelection.length==this.list.length?(this.checkAll=2,this.isIndeterminate=!0):this.multipleSelection.length>0?(this.checkAll=1,this.isIndeterminate=!0):(this.checkAll=0,this.isIndeterminate=!1)},handleDelete:function(){var e=this;if(this.multipleSelection.length<=0)return this.$notify({title:"警告",message:"请选择要删除的条目",type:"warning"}),!1;this.$confirm("此操作将数据移至回收站, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){var t="",a=!0,l=!1,s=void 0;try{for(var n,o=i()(e.multipleSelection);!(a=(n=o.next()).done);a=!0){t+=n.value.id+","}}catch(e){l=!0,s=e}finally{try{!a&&o.return&&o.return()}finally{if(l)throw s}}e.listLoading=!0,Object(r.c)({del:1},t).then(function(t){e.$message({type:"success",message:t.data.message}),e.getList(),e.listLoading=!1})}).catch(function(){})},resetTemp:function(e){this.temp=e||{id:void 0,item_title:"",shop_title:"",seller_nick:"",num_iid:"",pay_price:0,item_num:0,real_pay_fee:0,commission_rate:0,commission:0,fxje:0,jifenbao:0,jifen:0,uname:"",create_time:"",pay_time:"",status:null}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=this;this.$refs.dataForm.validate(function(t){t&&createData(e.temp).then(function(){e.temp.goods_count=0,e.temp.sys=0,e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})}),handleUpdate:function(e){var t=this;this.resetTemp(e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a=n()({},e.temp);Object(r.c)(a).then(function(){var t=!0,a=!1,l=void 0;try{for(var s,n=i()(e.list);!(t=(s=n.next()).done);t=!0){var r=s.value;if(r.id===e.temp.id){var o=e.list.indexOf(r);e.list.splice(o,1,e.temp);break}}}catch(e){a=!0,l=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw l}}e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"app-container",attrs:{"element-loading-text":"Loading"}},[a("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"10px"}},[a("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"搜索字段"},model:{value:e.searchQuery.field,callback:function(t){e.$set(e.searchQuery,"field",t)},expression:"searchQuery.field"}},e._l(e.fieldOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})})),e._v("\n      :\n      "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"关键字"},model:{value:e.searchQuery.keyword,callback:function(t){e.$set(e.searchQuery,"keyword",t)},expression:"searchQuery.keyword"}}),e._v(" "),a("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"状态"},model:{value:e.searchQuery.status,callback:function(t){e.$set(e.searchQuery,"status",t)},expression:"searchQuery.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})})),e._v(" "),a("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"类型"},model:{value:e.searchQuery.remark,callback:function(t){e.$set(e.searchQuery,"remark",t)},expression:"searchQuery.remark"}},e._l(e.remarkOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})})),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"最小金额(分)"},model:{value:e.searchQuery.min,callback:function(t){e.$set(e.searchQuery,"min",t)},expression:"searchQuery.min"}}),e._v("\n      -\n      "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"最大金额(分)"},model:{value:e.searchQuery.max,callback:function(t){e.$set(e.searchQuery,"max",t)},expression:"searchQuery.max"}}),e._v(" "),a("el-date-picker",{attrs:{type:"month",placeholder:"选择月份"},model:{value:e.searchQuery.month,callback:function(t){e.$set(e.searchQuery,"month",t)},expression:"searchQuery.month"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("筛选")]),e._v(" "),a("router-link",{attrs:{to:"/tixian/tixian-reycle"}},[a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-delete"}},[e._v("回收站")])],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"35"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{label:"会员",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!=t.row.user?a("a",{staticClass:"link-type"},[e._v("\n            "+e._s(t.row.user.ddusername)+"\n          ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"money",label:"提现额(分)",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"提现类型",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(e._f("remarkFilter")(t.row.remark))+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"realname",label:"姓名",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"支付宝账号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"原因:"+t.row.why,placement:"bottom-start"}},[a("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(e._f("statusFilter")(t.row.status)))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"blue"}},[e._v("创建:"+e._s(e._f("parseTime")(t.row.addtime)))]),a("br"),e._v(" "),a("span",{staticStyle:{color:"green"}},[e._v("更新:"+e._s(t.row.update_time))]),a("br"),e._v(" "),"0"!=t.row.dotime?a("span",{staticStyle:{color:"red"}},[e._v("处理:"+e._s(e._f("parseTime")(t.row.dotime)))]):a("span",{staticStyle:{color:"red"}},[e._v("处理:--")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"ip",label:"IP"}}),e._v(" "),a("el-table-column",{attrs:{label:"金额类型",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.type?a("span",[e._v("集分宝")]):a("span",[e._v("商城")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"operate",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[0==e.checkAll?a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:function(t){e.toggleSelection(e.list)}}},[e._v("全选")]):1==e.checkAll?a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:function(t){e.toggleSelection(e.list)}}},[e._v("反选")]):a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:function(t){e.toggleSelection()}}},[e._v("取消全选")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){e.handleDelete()}}},[e._v("删除")]),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[e.listQuery.limit],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"90px"}},[a("el-form-item",{attrs:{label:"商品",prop:"item_title"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.item_title,callback:function(t){e.$set(e.temp,"item_title",t)},expression:"temp.item_title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店铺",prop:"shop_title"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.shop_title,callback:function(t){e.$set(e.temp,"shop_title",t)},expression:"temp.shop_title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"掌柜",prop:"seller_nick"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.seller_nick,callback:function(t){e.$set(e.temp,"seller_nick",t)},expression:"temp.seller_nick"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品id",prop:"num_iid"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.num_iid,callback:function(t){e.$set(e.temp,"num_iid",t)},expression:"temp.num_iid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单号",prop:"trade_id"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.trade_id,callback:function(t){e.$set(e.temp,"trade_id",t)},expression:"temp.trade_id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"单价(元)",prop:"pay_price"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.pay_price,callback:function(t){e.$set(e.temp,"pay_price",t)},expression:"temp.pay_price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"数量",prop:"item_num"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.item_num,callback:function(t){e.$set(e.temp,"item_num",t)},expression:"temp.item_num"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"成交额(元)",prop:"real_pay_fee"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.real_pay_fe,callback:function(t){e.$set(e.temp,"real_pay_fe",t)},expression:"temp.real_pay_fe"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"佣金比例",prop:"commission_rate"}},[a("el-input",{attrs:{size:"small",placeholder:"即0%  （数据格式 0.12 表示12%）"},model:{value:e.temp.commission_rate,callback:function(t){e.$set(e.temp,"commission_rate",t)},expression:"temp.commission_rate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"佣金",prop:"commission"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.commission,callback:function(t){e.$set(e.temp,"commission",t)},expression:"temp.commission"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"返利",prop:"fxje"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.fxje,callback:function(t){e.$set(e.temp,"fxje",t)},expression:"temp.fxje"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"集分宝",prop:"jifenbao"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.jifenbao,callback:function(t){e.$set(e.temp,"jifenbao",t)},expression:"temp.jifenbao"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"积分",prop:"jifen"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.jifen,callback:function(t){e.$set(e.temp,"jifen",t)},expression:"temp.jifen"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"会员名",prop:"uname"}},[a("el-input",{attrs:{size:"small"},model:{value:e.temp.uname,callback:function(t){e.$set(e.temp,"uname",t)},expression:"temp.uname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"下单时间",prop:"create_time"}},[a("el-date-picker",{attrs:{size:"small",type:"datetime",placeholder:"请选择时间"},model:{value:e.temp.create_time,callback:function(t){e.$set(e.temp,"create_time",t)},expression:"temp.create_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结算时间",prop:"pay_time"}},[a("el-date-picker",{attrs:{size:"small",type:"datetime",placeholder:"可为空"},model:{value:e.temp.pay_time,callback:function(t){e.$set(e.temp,"pay_time",t)},expression:"temp.pay_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单状态",prop:"status"}},[a("el-select",{staticClass:"filter-item",attrs:{size:"small"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v("添加")]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("更新")])],1)],1)],1)},staticRenderFns:[]};var _=a("VU/8")(f,h,!1,function(e){a("Bp56")},"data-v-7e026e66",null);t.default=_.exports}});