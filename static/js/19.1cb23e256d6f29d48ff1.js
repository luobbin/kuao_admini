webpackJsonp([19],{"4pnm":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,'\n.createPost-container[data-v-6446d8c4] {\n  position: relative;\n}\n.createPost-container .createPost-main-container[data-v-6446d8c4] {\n    padding: 40px 45px 20px 50px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-6446d8c4] {\n      position: relative;\n      margin-bottom: 10px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-6446d8c4]:after {\n        content: "";\n        display: table;\n        clear: both;\n}\n.createPost-container .createPost-main-container .postInfo-container .postInfo-container-item[data-v-6446d8c4] {\n        float: left;\n}\n.createPost-container .createPost-main-container .editor-container[data-v-6446d8c4] {\n      min-height: 500px;\n      margin: 0 0 30px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container[data-v-6446d8c4] {\n        text-align: right;\n        margin-right: 10px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container .editor-upload-btn[data-v-6446d8c4] {\n          display: inline-block;\n}\n.createPost-container .word-counter[data-v-6446d8c4] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n',""])},KKEm:function(t,e,o){var n=o("4pnm");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("228c88a3",n,!0)},qgS1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"createForm",components:{ArticleDetail:o("yPyK").a}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("article-detail",{attrs:{"is-edit":!1}})},staticRenderFns:[]},r=o("VU/8")(n,a,!1,null,null,null);e.default=r.exports},yPyK:function(t,e,o){"use strict";var n=o("woOf"),a=o.n(n),r=(o("mw3O"),o("5aCZ")),i=o("QbVN"),s=o("vHhr"),c=(o("E4LH"),o("viA7")),l={cid:0,title:"",content:"",img:"",source:"",desc:"",id:void 0,keyword:"",sort:0},p={name:"articleDetail",components:{Tinymce:r.a,Upload:i.a,Sticky:s.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,o,n){""===o?(t.$message({message:e.field+"为必传项",type:"error"}),n(null)):n()};return{postForm:a()({},l),loading:!1,typeOptions:[],rules:{title:[{validator:e}],content:[{validator:e}]}}},computed:{contentShortLength:function(){return null==this.postForm.desc?0:this.postForm.desc.length}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=a()({},l);this.getTypes()},methods:{fetchData:function(t){var e=this;Object(c.c)(t).then(function(t){e.postForm=t.data}).catch(function(t){console.log(t)})},getTypes:function(){var t=this;Object(c.e)().then(function(e){t.typeOptions=e.data,t.typeOptions.push({id:0,title:"请选择"})})},submitForm:function(){var t=this;this.$refs.postForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.isEdit?Object(c.f)(t.postForm,t.postForm.id).then(function(){t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})}):(Object(c.a)(t.postForm).then(function(){t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}),t.$router.push("/articles/article")),t.loading=!1})}}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[o("sticky",{attrs:{className:"sub-navbar draft"}},[o("router-link",{attrs:{to:"/articles/article"}},[o("el-button",{staticStyle:{margin:"10px","margin-bottom":"0"},attrs:{type:"primary",icon:"el-icon-back"}},[t._v("返回列表")])],1),t._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{margin:"10px",float:"right","margin-bottom":"0"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("发布")])],1),t._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-form-item",{attrs:{label:"分类",prop:"cid"}},[o("el-select",{attrs:{clearable:"",placeholder:"选择分类"},model:{value:t.postForm.cid,callback:function(e){t.$set(t.postForm,"cid",e)},expression:"postForm.cid"}},t._l(t.typeOptions,function(t){return o("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"标题",prop:"title"}},[o("el-input",{model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"缩略图",prop:"img"}},[o("div",{staticStyle:{"margin-bottom":"20px"}},[o("Upload",{model:{value:t.postForm.img,callback:function(e){t.$set(t.postForm,"img",e)},expression:"postForm.img"}})],1)]),t._v(" "),o("el-form-item",{attrs:{label:"来源",prop:"source"}},[o("el-input",{attrs:{size:"small",placeholder:"为空默认为：消费者联盟"},model:{value:t.postForm.source,callback:function(e){t.$set(t.postForm,"source",e)},expression:"postForm.source"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"关键词",prop:"keyword"}},[o("el-input",{attrs:{size:"small",placeholder:"使用半角逗号“,”隔开"},model:{value:t.postForm.keyword,callback:function(e){t.$set(t.postForm,"keyword",e)},expression:"postForm.keyword"}})],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"45px",label:"摘要",prop:"desc"}},[o("el-input",{staticClass:"article-textarea",attrs:{type:"textarea",rows:1,autosize:"",placeholder:"请输入内容"},model:{value:t.postForm.desc,callback:function(e){t.$set(t.postForm,"desc",e)},expression:"postForm.desc"}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"字")])],1),t._v(" "),o("div",{staticClass:"editor-container"},[o("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"排序",prop:"sort"}},[o("el-input",{attrs:{size:"small",placeholder:"值越大越靠前"},model:{value:t.postForm.sort,callback:function(e){t.$set(t.postForm,"sort",e)},expression:"postForm.sort"}})],1)],1)],1)],1)},staticRenderFns:[]};var d=o("VU/8")(p,m,!1,function(t){o("KKEm")},"data-v-6446d8c4",null);e.a=d.exports}});