webpackJsonp([69],{But8:function(e,t,l){var a=l("K1oq");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l("rjj0")("2b876bfc",a,!0)},K1oq:function(e,t,l){(e.exports=l("FZ+f")(!1)).push([e.i,"\n.pagination-container[data-v-045ee688]{\n  margin-top: 10px;\n}\n.el-pagination[data-v-045ee688]{\n  float: right;\n}\n\n",""])},WBWH:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("BO1k"),i=l.n(a),r=l("woOf"),o=l.n(r),n=l("TUho"),s=(l("0xDb"),[{value:"",label:"全部"},{value:"1",label:"正常"},{value:"-1",label:"黑名单"}]),u=[{value:"",label:"全部"},{value:"1",label:"电脑"},{value:"2",label:"手机"},{value:"5",label:"WAP"},{value:"6",label:"新版QQ"},{value:"127",label:"QQ"},{value:"7",label:"微信机器人"},{value:"8",label:"微信公众号"},{value:"9",label:"微信小程序"}],c=[{value:"ddusername",label:"会员名①"},{value:"id",label:"会员ID"},{value:"tuijianren.ddusername",label:"推荐人名"},{value:"qq",label:"QQ号码"},{value:"alipay",label:"支付宝号码"},{value:"email",label:"邮箱"},{value:"mobile",label:"手机号码"},{value:"realname",label:"姓名"},{value:"trade_uid",label:"后六位"}],d=[{value:"money",label:"金额"},{value:"jifenbao",label:"集分宝"},{value:"jifen",label:"积分"},{value:"level",label:"购物次数"},{value:"loginnum",label:"登陆次数"}],p=[{value:"asc",label:"正序"},{value:"desc",label:"倒序"}],m=u.reduce(function(e,t){return e[t.value]=t.label,e},{}),f={data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:10,searchJoin:"and",search:"del:0;",searchFields:"del:=;",orderBy:"id",sortedBy:"desc"},searchQuery:{search:"del:0;",searchFields:"del:=;",field:"",keyword:"",code:"",leixing:"",cid:"",ddusername:"",orderBy:"id",sortedBy:"desc"},lockOptions:s,platformOptions:u,fieldOptions:c,qujianOptions:d,sortedOptions:p,multipleSelection:[],checkAll:0,isIndeterminate:!1,dialogFormVisible:!1,dialogTemp:{id:void 0,ddusername:"",jifenbao:0,is_add:1,is_mingxi:0,jfb:0},rules:{jfb:[{required:!0,message:"请输入集分宝",trigger:"blur"}]}}},computed:{qqSrc:function(){return"http://wpa.qq.com/msgrd?v=3&uin="+this.list.qq+"&site=qq&menu=yes"}},filters:{platformFilter:function(e){return m[e]}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(n.d)(this.listQuery).then(function(t){e.list=t.data.data;for(var l=e.list.length-1;l>=0;l--)e.list[l].youxiao_total=-1;e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){var e=o()({},this.searchQuery),t=e.search,l=e.searchFields;e.field&&e.keyword&&(t+=e.field+":"+e.keyword+";",l+=e.field+":=;"),e.if_lock&&(t+="if_lock:"+e.if_lock+";",e.searchFields+="if_lock:=;"),e.platform&&(t+="platform:"+e.platform+";",l+="platform:=;"),e.qujian&&(t+=e.qujian+":"+e.qujian1+","+e.qujian2+";",l+=e.qujian+":between;"),this.listQuery.search=t,this.listQuery.searchFields=l,this.listQuery.orderBy=e.orderBy,this.listQuery.sortedBy=e.sortedBy,this.listQuery.page=1,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e,this.multipleSelection.length==this.list.length?(this.checkAll=2,this.isIndeterminate=!0):this.multipleSelection.length>0?(this.checkAll=1,this.isIndeterminate=!0):(this.checkAll=0,this.isIndeterminate=!1)},handleDelete:function(){var e=this;if(this.multipleSelection.length<=0)return this.$notify({title:"警告",message:"请选择要删除的条目",type:"warning"}),!1;this.$confirm("此操作将数据移至回收站, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){var t="",l=!0,a=!1,r=void 0;try{for(var o,s=i()(e.multipleSelection);!(l=(o=s.next()).done);l=!0){t+=o.value.id+","}}catch(e){a=!0,r=e}finally{try{!l&&s.return&&s.return()}finally{if(a)throw r}}e.listLoading=!0,Object(n.a)(t).then(function(t){e.$message({type:"success",message:t.data.message}),e.getList(),e.listLoading=!1})}).catch(function(){})},handleLockStatus:function(e,t){var l=this;Object(n.f)({if_lock:t},e.id).then(function(a){l.$message({type:"success",message:a.data.message}),e.if_lock=t})},handleYouxiao:function(e){Object(n.e)(e.id).then(function(t){e.youxiao_total=t.data,e.qq=null})},handleJifenbao:function(e){var t=this;this.resetTemp(e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},jifenbaoData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){e.listLoading=!0;var l=o()({},e.dialogTemp);Object(n.f)(l,l.id).then(function(t){for(var l=e.list.length-1;l>=0;l--)e.list[l].id===e.dialogTemp.id&&(e.list[l].jifenbao=t.data.jifenbao);e.dialogFormVisible=!1,e.listLoading=!1,e.$notify({title:"提示",message:t.data.message,type:"success",duration:2e3})})}})},resetTemp:function(e){this.dialogTemp={id:e.id,ddusername:e.ddusername,jifenbao:e.jifenbao,is_add:1,is_mingxi:0,jfb:0}}}},h={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"app-container",attrs:{"element-loading-text":"Loading"}},[l("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"10px"}},[l("el-select",{staticClass:"item-choose",staticStyle:{width:"105px"},attrs:{size:"small",clearable:"",placeholder:"状态"},model:{value:e.searchQuery.if_lock,callback:function(t){e.$set(e.searchQuery,"if_lock",t)},expression:"searchQuery.if_lock"}},e._l(e.lockOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),l("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"来源"},model:{value:e.searchQuery.platform,callback:function(t){e.$set(e.searchQuery,"platform",t)},expression:"searchQuery.platform"}},e._l(e.platformOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),l("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"搜索字段"},model:{value:e.searchQuery.field,callback:function(t){e.$set(e.searchQuery,"field",t)},expression:"searchQuery.field"}},e._l(e.fieldOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v("\n    :\n    "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"关键字"},model:{value:e.searchQuery.keyword,callback:function(t){e.$set(e.searchQuery,"keyword",t)},expression:"searchQuery.keyword"}}),e._v(" "),l("el-select",{staticClass:"item-choose",staticStyle:{width:"105px"},attrs:{size:"small",clearable:"",placeholder:"金额"},model:{value:e.searchQuery.qujian,callback:function(t){e.$set(e.searchQuery,"qujian",t)},expression:"searchQuery.qujian"}},e._l(e.qujianOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"开始值"},model:{value:e.searchQuery.qujian1,callback:function(t){e.$set(e.searchQuery,"qujian1",t)},expression:"searchQuery.qujian1"}}),e._v("\n    -\n    "),l("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"结束值"},model:{value:e.searchQuery.qujian2,callback:function(t){e.$set(e.searchQuery,"qujian2",t)},expression:"searchQuery.qujian2"}}),e._v(" "),l("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"排序"},model:{value:e.searchQuery.orderBy,callback:function(t){e.$set(e.searchQuery,"orderBy",t)},expression:"searchQuery.orderBy"}},e._l(e.fieldOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),l("el-select",{staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"排序方式"},model:{value:e.searchQuery.sortedBy,callback:function(t){e.$set(e.searchQuery,"sortedBy",t)},expression:"searchQuery.sortedBy"}},e._l(e.sortedOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),l("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("筛选")]),e._v(" "),l("router-link",{attrs:{to:"/user/user-reycle"}},[l("el-button",{attrs:{type:"text"}},[e._v("【回收站】")])],1)],1),e._v(" "),l("el-table",{ref:"multipleTable",attrs:{size:"small",data:e.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"35"}}),e._v(" "),l("el-table-column",{attrs:{label:"id",width:"80",prop:"id",sortable:"custom"}}),e._v(" "),l("el-table-column",{attrs:{prop:"platform",label:"来源","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("platformFilter")(t.row.platform)))]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"ddusername",label:"用户名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tjr",label:"推荐ID"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tuijianren.ddusername",label:"推荐人用户名"}}),e._v(" "),l("el-table-column",{attrs:{label:"QQ"},scopedSlots:e._u([{key:"default",fn:function(e){return[l("a",{attrs:{target:"_blank",href:"http://wpa.qq.com/msgrd?v=3&uin="+e.row.qq+"&site=qq&menu=yes"}},[l("img",{staticStyle:{height:"16px"},attrs:{border:"0",src:"http://wpa.qq.com/pa?p=2:66666:46",alt:"点击这里给我发消息",title:"点击这里给我发消息"}})])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"regtime",label:"注册时间","min-width":"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"haoyous_count",label:"好友圈"}}),e._v(" "),l("el-table-column",{attrs:{prop:"youxiaos_count",label:"有效会员"}}),e._v(" "),l("el-table-column",{attrs:{label:"合并有效","min-width":"75"},scopedSlots:e._u([{key:"default",fn:function(t){return l("div",{},[-1===t.row.youxiao_total?l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){e.handleYouxiao(t.row)}}},[e._v("查看")]):l("span",[e._v(e._s(t.row.youxiao_total))])],1)}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"lastlogintime",label:"最近登陆","min-width":"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"loginnum",label:"登录次数",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"level",label:"购物次数",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"money",label:"金额",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"jifenbao",label:"集分宝",sortable:""}}),e._v(" "),l("el-table-column",{attrs:{prop:"trade_uid",label:"后六位","min-width":"75"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作","min-width":"175"},scopedSlots:e._u([{key:"default",fn:function(t){return l("div",{},[l("router-link",{attrs:{to:"/user/user-edit/"+t.row.id}},[l("el-button",{attrs:{type:"text",size:"small"}},[e._v("查看")])],1),e._v(" "),l("router-link",{attrs:{to:{path:"/user/mingxi_list",query:{uid:t.row.id}}}},[l("el-button",{attrs:{type:"text",size:"small"}},[e._v("明细")])],1),e._v(" "),l("router-link",{attrs:{to:"/user/tuijianren/"+t.row.id}},[l("el-button",{attrs:{type:"text",size:"small"}},[l("font",{attrs:{color:"brown",title:"修改推荐人"}},[e._v("改推")])],1)],1),e._v(" "),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){e.handleJifenbao(t.row)}}},[l("font",{attrs:{color:"orange",title:"集分宝增减"}},[e._v("奖扣")])],1),e._v(" "),-1==t.row.if_lock?l("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(l){e.handleLockStatus(t.row,"0")}}},[l("font",{attrs:{color:"green",title:"取消黑名单"}},[e._v("拉白")])],1):l("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(l){e.handleLockStatus(t.row,"-1")}}},[l("font",{attrs:{color:"red",title:"拉入黑名单"}},[e._v("拉黑")])],1)],1)}}])})],1),e._v(" "),l("div",{staticClass:"pagination-container"},[0==e.checkAll?l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:function(t){e.toggleSelection(e.list)}}},[e._v("全选")]):1==e.checkAll?l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:function(t){e.toggleSelection(e.list)}}},[e._v("反选")]):l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:function(t){e.toggleSelection()}}},[e._v("取消全选")]),e._v(" "),l("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){e.handleDelete()}}},[e._v("删除")]),e._v(" "),l("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[e.listQuery.limit],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),l("el-dialog",{attrs:{title:"集分宝奖扣设置",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,size:"small",model:e.dialogTemp,"label-position":"left","label-width":"90px"}},[l("el-form-item",{attrs:{label:"用户",prop:"ddusername"}},[e._v(e._s(e.dialogTemp.ddusername))]),e._v(" "),l("el-form-item",{attrs:{label:"现有集分宝",prop:"jifenbao"}},[e._v(e._s(e.dialogTemp.jifenbao))]),e._v(" "),l("el-form-item",{attrs:{label:"操作",prop:"is_add"}},[l("el-radio-group",{model:{value:e.dialogTemp.is_add,callback:function(t){e.$set(e.dialogTemp,"is_add",t)},expression:"dialogTemp.is_add"}},[l("el-radio",{attrs:{label:1}},[e._v("增加")]),e._v(" "),l("el-radio",{attrs:{label:0}},[e._v("扣减")])],1),e._v(" "),l("el-input",{staticStyle:{width:"100px","margin-left":"10px"},attrs:{placeholder:"集分宝"},model:{value:e.dialogTemp.jfb,callback:function(t){e.$set(e.dialogTemp,"jfb",t)},expression:"dialogTemp.jfb"}}),e._v("分\n      ")],1),e._v(" "),l("el-form-item",{attrs:{label:"明细",prop:"is_mingxi"}},[l("el-radio-group",{model:{value:e.dialogTemp.is_mingxi,callback:function(t){e.$set(e.dialogTemp,"is_mingxi",t)},expression:"dialogTemp.is_mingxi"}},[l("el-radio",{attrs:{label:1}},[e._v("生成")]),e._v(" "),l("el-radio",{attrs:{label:0}},[e._v("不生成")])],1)],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.jifenbaoData}},[e._v("执行")])],1)],1)],1)},staticRenderFns:[]};var b=l("VU/8")(f,h,!1,function(e){l("But8")},"data-v-045ee688",null);t.default=b.exports}});