webpackJsonp([3],{P0zv:function(t,e,a){var i=a("pwJF");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("6e448219",i,!0)},VWDc:function(t,e,a){"use strict";var i=a("BO1k"),o=a.n(i),r=a("woOf"),s=a.n(r),n=a("5aCZ"),l=a("e9xc"),c=a("//Fk"),d=a.n(c),p=a("fZjL"),u=a.n(p),m={name:"mutiImageUpload",props:{imgs:{type:Array,default:function(){return[]}}},computed:{fileList:function(){var t=[];if(this.imgs.length>0)for(var e=0,a=this.imgs.length;e<a;e++)t[e]={url:this.imgs[e]};return t}},data:function(){return{uploadUrl:"http://47.107.92.207/api/admin",zoomVisible:!1,zoomImageUrl:"",dataObj:{token:"",key:"",url:""}}},methods:{handlePictureCardPreview:function(t){this.zoomImageUrl=t.url,this.zoomVisible=!0},handleSuccess:function(t,e){var a=this;console.log("上传文件后返回结果",t);for(var i=e.uid,o=u()(this.fileList),r=0,s=o.length;r<s;r++)if(this.fileList[o[r]].uid===i){this.fileList[o[r]].url=t.url,this.fileList[o[r]].hasSuccess=!0;var n=u()(this.fileList).map(function(t){return a.fileList[t].url});return this.$emit("successCBK",n),void(this.zoomVisible=!1)}},handleRemove:function(t){for(var e=this,a=t.uid,i=u()(this.fileList),o=0,r=i.length;o<r;o++)if(this.fileList[i[o]].uid===a){delete this.fileList[i[o]];var s=u()(this.fileList).map(function(t){return e.fileList[t].url});return void this.$emit("successCBK",s)}},beforeUpload:function(t){var e=this,a=window.URL||window.webkitURL,i=this.fileList.length;return this.fileList[i]={},new d.a(function(o,r){var s=new Image;s.src=a.createObjectURL(t),s.onload=function(){e.fileList[i]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},o(!0)})}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-container"},[a("el-upload",{staticClass:"avatar-uploader el-upload",attrs:{action:t.uploadUrl+"/single_upload","list-type":"picture-card",data:t.dataObj,"file-list":t.fileList,"show-file-list":!0,"on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload}},[a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-dialog",{attrs:{visible:t.zoomVisible},on:{"update:visible":function(e){t.zoomVisible=e}}},[a("img",{staticClass:"zoom",attrs:{width:"100%",src:t.zoomImageUrl}})])],1)},staticRenderFns:[]};var h=a("VU/8")(m,f,!1,function(t){a("P0zv")},null,null).exports,v=a("vHhr"),g=a("UgCr"),b={cate_id:1,name:"",index_img:"",description:"",info:"",if_hot:0,id:void 0,sort:0,specification:"",imgs:[],features:[]},F={id:void 0,title:"",content:"",img:""},x={name:"itemDetail",components:{Tinymce:n.a,Upload:l.a,Sticky:v.a,Mupload:h},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,a,i){""===a?(t.$message({message:e.field+"为必传项",type:"error"}),i(null)):i()};return{postForm:s()({},b),featuresForm:s()({},F),loading:!1,productCateOptions:null,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{name:[{validator:e}],index_img:[{validator:e}],features:[{type:"array",required:!0,message:"数据必须在1-9个之间",min:1,max:9,trigger:"change"}]},featuresRules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],img:[{required:!0,message:"请上传图片",trigger:"change"}]}}},created:function(){if(this.getAllCates(),this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=s()({},b)},methods:{fetchData:function(t){var e=this;Object(g.c)(t).then(function(t){console.log("this.postForm",t.data),e.postForm=t.data;for(var a=e.postForm.features.length-1;a>=0;a--)e.postForm.features[a]=JSON.parse(e.postForm.features[a])}).catch(function(t){console.log(t)})},getAllCates:function(){var t=this;Object(g.d)().then(function(e){t.productCateOptions=e.data})},submitForm:function(){var t=this;this.$refs.postForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0;var a=s()({},t.postForm);t.isEdit?Object(g.f)(a,a.id).then(function(e){200==e.data.code?t.$notify({title:"成功",message:e.data.message,type:"success",duration:2e3}):t.$notify({title:"失败",message:e.data.error,type:"error",duration:2e3})}):Object(g.a)(a).then(function(e){200==e.data.code?t.$notify({title:"成功",message:e.data.message,type:"success",duration:2e3}):t.$notify({title:"失败",message:e.data.error,type:"error",duration:2e3})}),t.$router.push("/products/product-list"),t.loading=!1})},imageSuccessCBK:function(t){this.postForm.imgs=t},handleCreate:function(){var t=this;this.featuresForm=s()({},F),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.featuresForm.clearValidate()})},createData:function(){var t=this;this.postForm.features.length>9&&(this.$message("最多只能上传9个"),this.dialogFormVisible=!1),this.$refs.featuresForm.validate(function(e){e&&(t.featuresForm.id=t.postForm.features.length+1,t.postForm.features.push(t.featuresForm),t.dialogFormVisible=!1)})},handleUpdate:function(t){var e=this;this.featuresForm=s()({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.featuresForm.clearValidate()})},updateData:function(){var t=this;this.$refs.featuresForm.validate(function(e){if(e){var a=!0,i=!1,r=void 0;try{for(var s,n=o()(t.postForm.features);!(a=(s=n.next()).done);a=!0){var l=s.value;if(l.id===t.featuresForm.id){var c=t.postForm.features.indexOf(l);t.postForm.features.splice(c,1,t.featuresForm);break}}}catch(t){i=!0,r=t}finally{try{!a&&n.return&&n.return()}finally{if(i)throw r}}t.dialogFormVisible=!1}})},deleteData:function(t){var e=this.postForm.features.indexOf(t);this.postForm.features.splice(e,1)}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"postForm",attrs:{model:t.postForm,rules:t.rules,size:"small","label-width":"130px"}},[a("sticky",{attrs:{className:"sub-navbar draft"}},[a("router-link",{attrs:{to:"/products/product-list"}},[a("el-button",{staticStyle:{margin:"10px","margin-bottom":"0"},attrs:{type:"primary",icon:"el-icon-back"}},[t._v("返回列表")])],1),t._v(" "),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{margin:"10px",float:"right","margin-bottom":"0"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("保存")])],1),t._v(" "),a("el-form-item",{attrs:{label:"产品名称"}},[a("el-col",{attrs:{span:8}},[a("el-input",{model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"产品分类"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.postForm.cate_id,callback:function(e){t.$set(t.postForm,"cate_id",e)},expression:"postForm.cate_id"}},t._l(t.productCateOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.sub_name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"产品描述"}},[a("el-col",{attrs:{span:8}},[a("el-input",{model:{value:t.postForm.description,callback:function(e){t.$set(t.postForm,"description",e)},expression:"postForm.description"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"产品介绍"}},[a("el-input",{staticClass:"el-textarea__inner",attrs:{type:"textarea",rows:3,autosize:"",placeholder:"请输入内容"},model:{value:t.postForm.info,callback:function(e){t.$set(t.postForm,"info",e)},expression:"postForm.info"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"产品首图"}},[a("el-col",{attrs:{span:6}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("Upload",{model:{value:t.postForm.index_img,callback:function(e){t.$set(t.postForm,"index_img",e)},expression:"postForm.index_img"}})],1)])],1),t._v(" "),a("el-form-item",{attrs:{label:"产品轮播图"}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("Mupload",{attrs:{imgs:t.postForm.imgs},on:{successCBK:t.imageSuccessCBK}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"产品特点",prop:"features"}},[a("div",{staticClass:"list-add"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("添加特点")])],1),t._v(" "),a("div",{staticClass:"list-items"},[a("ul",t._l(t.postForm.features,function(e,i){return a("li",{staticClass:"detail-item",staticStyle:{"border-bottom":"1px solid #eee","padding-bottom":"5px"}},[a("el-col",{staticStyle:{"padding-right":"5px","text-align":"right","line-height":"70px",color:"#606266"},attrs:{span:2}},[a("b",[t._v("特征"+t._s(i+1)+":")])]),t._v(" "),a("el-col",{staticStyle:{"padding-left":"5px","padding-right":"5px","padding-top":"15px"},attrs:{span:10}},[a("b",{staticStyle:{color:"gray"},domProps:{innerHTML:t._s(e.title)}}),t._v(" "),a("br"),t._v(" "),a("p",{staticStyle:{color:"gray","line-height":"18px"},domProps:{innerHTML:t._s(e.content)}})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("img",{staticStyle:{float:"left","margin-left":"5px"},attrs:{src:e.img,width:"auto",height:"80"}})]),t._v(" "),a("el-col",{staticStyle:{"padding-top":"20px"},attrs:{span:6}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleUpdate(e)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.deleteData(e)}}},[t._v("删除")])],1),t._v(" "),a("div",{staticStyle:{clear:"both",width:"100%",height:"0"}})],1)}))])]),t._v(" "),a("el-form-item",{attrs:{label:"产品规格"}},[a("div",{staticClass:"editor-container"},[a("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.specification,callback:function(e){t.$set(t.postForm,"specification",e)},expression:"postForm.specification"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"热门推荐"}},[a("el-radio-group",{model:{value:t.postForm.if_hot,callback:function(e){t.$set(t.postForm,"if_hot",e)},expression:"postForm.if_hot"}},[a("el-radio",{attrs:{label:0}},[t._v("否")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("是")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"排序"}},[a("el-col",{attrs:{span:2}},[a("el-input",{model:{value:t.postForm.sort,callback:function(e){t.$set(t.postForm,"sort",e)},expression:"postForm.sort"}})],1)],1)],1),t._v(" "),a("el-dialog",{staticClass:"features",attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,width:"60%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"featuresForm",attrs:{model:t.featuresForm,rules:t.featuresRules,size:"small"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-col",{attrs:{span:8}},[a("el-input",{model:{value:t.featuresForm.title,callback:function(e){t.$set(t.featuresForm,"title",e)},expression:"featuresForm.title"}})],1),t._v(" "),a("span",{staticStyle:{color:"red","padding-left":"5px"}},[t._v("必填")])],1),t._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"content"}},[a("el-input",{attrs:{type:"textarea",rows:3,autosize:"",placeholder:"请输入内容"},model:{value:t.featuresForm.content,callback:function(e){t.$set(t.featuresForm,"content",e)},expression:"featuresForm.content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"图片",prop:"img"}},[a("el-col",{attrs:{span:6}},[a("Upload",{model:{value:t.featuresForm.img,callback:function(e){t.$set(t.featuresForm,"img",e)},expression:"featuresForm.img"}})],1),t._v(" "),a("span",{staticStyle:{color:"red"}},[t._v(" [必填,固定尺寸：宽540px*高540px，格式JPG，PNG]")])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("添加")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("更新")])],1)],1)],1)},staticRenderFns:[]};var y=a("VU/8")(x,_,!1,function(t){a("rEHG")},"data-v-9b4e1b6a",null);e.a=y.exports},aiJO:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'\n.createPost-container[data-v-9b4e1b6a] {\n  position: relative;\n}\n.createPost-container .createPost-main-container[data-v-9b4e1b6a] {\n    padding: 40px 45px 20px 50px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-9b4e1b6a] {\n      position: relative;\n      margin-bottom: 10px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-9b4e1b6a]:after {\n        content: "";\n        display: table;\n        clear: both;\n}\n.createPost-container .createPost-main-container .postInfo-container .postInfo-container-item[data-v-9b4e1b6a] {\n        float: left;\n}\n.createPost-container .createPost-main-container .editor-container[data-v-9b4e1b6a] {\n      min-height: 500px;\n      margin: 0 0 30px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container[data-v-9b4e1b6a] {\n        text-align: right;\n        margin-right: 10px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container .editor-upload-btn[data-v-9b4e1b6a] {\n          display: inline-block;\n}\n.createPost-container .word-counter[data-v-9b4e1b6a] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n.tip[data-v-9b4e1b6a] {\n  color: #ccc;\n  font-size: 10px;\n  padding-left: 5px;\n}\n.txt_r[data-v-9b4e1b6a] {\n  text-align: right;\n}\n.list-items[data-v-9b4e1b6a] {\n  width: 100%;\n  clear: both;\n  padding: 0 10px;\n  border-top: 1px solid #eee;\n}\n.list-items .detail-item[data-v-9b4e1b6a] {\n  border-bottom: 1px solid #eee;\n  width: 100%;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  clear: both;\n}\n.list-add[data-v-9b4e1b6a] {\n  float: right;\n  margin-top: -5px;\n}\n',""])},orNe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"editForm",components:{ItemDetail:a("VWDc").a}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("item-detail",{attrs:{"is-edit":!0}})},staticRenderFns:[]},r=a("VU/8")(i,o,!1,null,null,null);e.default=r.exports},pwJF:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.upload-container{\n  width: 100%; clear: both;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  position: relative;\n  width: 157px;\n  height: 157px;\n  float: left;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.upload-container .el-upload .el-upload-dragger{\n  width: auto; height: auto;\n}\n.el-upload-list{float: left;\n}\n.avatar {\n  min-width: 500px;\n  min-height: 500px;\n}\n",""])},rEHG:function(t,e,a){var i=a("aiJO");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("7de9a652",i,!0)}});