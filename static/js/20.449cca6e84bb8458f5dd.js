webpackJsonp([20],{"+3/7":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,'\n.createPost-container[data-v-30ec681d] {\n  position: relative;\n}\n.createPost-container .createPost-main-container[data-v-30ec681d] {\n    padding: 40px 45px 20px 50px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-30ec681d] {\n      position: relative;\n      margin-bottom: 10px;\n}\n.createPost-container .createPost-main-container .postInfo-container[data-v-30ec681d]:after {\n        content: "";\n        display: table;\n        clear: both;\n}\n.createPost-container .createPost-main-container .postInfo-container .postInfo-container-item[data-v-30ec681d] {\n        float: left;\n}\n.createPost-container .createPost-main-container .editor-container[data-v-30ec681d] {\n      min-height: 500px;\n      margin: 0 0 30px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container[data-v-30ec681d] {\n        text-align: right;\n        margin-right: 10px;\n}\n.createPost-container .createPost-main-container .editor-container .editor-upload-btn-container .editor-upload-btn[data-v-30ec681d] {\n          display: inline-block;\n}\n.createPost-container .word-counter[data-v-30ec681d] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n.tip[data-v-30ec681d] {\n  color: #ccc;\n  font-size: 10px;\n  padding-left: 5px;\n}\n.txt_r[data-v-30ec681d] {\n  text-align: right;\n}\n',""])},DU4J:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"editForm",components:{ItemDetail:o("qlGp").a}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("item-detail",{attrs:{"is-edit":!0}})},staticRenderFns:[]},l=o("VU/8")(a,s,!1,null,null,null);e.default=l.exports},L8OQ:function(t,e,o){var a=o("+3/7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("12465c71",a,!0)},qlGp:function(t,e,o){"use strict";var a=o("woOf"),s=o.n(a),l=o("5aCZ"),r=o("KQHe"),n=o("vHhr"),i=(o("E4LH"),o("ocd9")),c=o("0xDb"),p={url:null,laiyuan:"",cid:0,code:"",title:"",img:"",discount_price:0,price:0,shouji_price:0,goods_attribute:[],content:"",starttime:0,endtime:0,fanli_bl:0,fanli_ico:0,tg_url:"",lq_url:"",price_man:0,price_jian:0,quan_surplus:0,quan_total:"",quan_stime:0,quan_etime:0,id:void 0,sort:0,nick:"",sell:0,oversell:0,ding:0,cai:0,pinglun:0,auditor:"",ddusername:"",yun_jump:0},m={name:"itemDetail",components:{Tinymce:l.a,Upload:r.a,Sticky:n.a},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,o,a){""===o?(t.$message({message:e.field+"为必传项",type:"error"}),a(null)):a()};return{postForm:s()({},p),loading:!1,bankuaiOptions:null,goodstypeOptions:null,cateOptions:[],rules:{title:[{validator:e}],url:[{validator:e}]}}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=s()({},p);this.getAllCates()},methods:{fetchData:function(t){var e=this;Object(i.d)(t).then(function(t){e.postForm=t.data,e.postForm.starttime=0==e.postForm.starttime?0:Object(c.f)(e.postForm.starttime),e.postForm.endtime=0==e.postForm.endtime?0:Object(c.f)(e.postForm.endtime),e.postForm.quan_stime=0==e.postForm.quan_stime?0:Object(c.f)(e.postForm.quan_stime),e.postForm.quan_etime=0==e.postForm.quan_etime?0:Object(c.f)(e.postForm.quan_etime),e.postForm.ddusername=null==e.postForm.user?"":e.postForm.user.ddusername}).catch(function(t){console.log(t)})},getAllCates:function(){var t=this;Object(i.e)().then(function(e){t.bankuaiOptions=e.data.data}),Object(i.g)().then(function(e){t.goodstypeOptions=e.data.data})},submitForm:function(){var t=this;this.$refs.postForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0;var o=s()({},t.postForm);o.starttime=0==o.starttime?0:Object(c.e)(o.starttime),o.endtime=0==o.endtime?0:Object(c.e)(o.endtime),o.quan_stime=0==o.quan_stime?0:Object(c.e)(o.quan_stime),o.quan_etime=0==o.quan_etime?0:Object(c.e)(o.quan_etime),t.isEdit?Object(i.h)(o,o.id).then(function(e){0==e.data.code?t.$notify({title:"成功",message:e.data.message,type:"success",duration:2e3}):t.$notify({title:"失败",message:e.data.error,type:"error",duration:2e3})}):(Object(i.a)(o).then(function(e){0==e.data.code?t.$notify({title:"成功",message:e.data.message,type:"success",duration:2e3}):t.$notify({title:"失败",message:e.data.error,type:"error",duration:2e3})}),t.$router.push("/goods/goodslist")),t.loading=!1})}}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("el-form",{ref:"postForm",attrs:{model:t.postForm,rules:t.rules,size:"small","label-width":"130px"}},[o("sticky",{attrs:{className:"sub-navbar draft"}},[o("router-link",{attrs:{to:"/goods/goods_list"}},[o("el-button",{staticStyle:{margin:"10px","margin-bottom":"0"},attrs:{type:"primary",icon:"el-icon-back"}},[t._v("返回列表")])],1),t._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{margin:"10px",float:"right","margin-bottom":"0"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("保存")])],1),t._v(" "),o("el-form-item",{attrs:{label:"商品URL"}},[o("el-col",{attrs:{span:8}},[o("el-input",{model:{value:t.postForm.url,callback:function(e){t.$set(t.postForm,"url",e)},expression:"postForm.url"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"商品名称"}},[o("el-col",{attrs:{span:8}},[o("el-input",{model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"所属商城"}},[o("el-col",{attrs:{span:8}},[o("el-input",{model:{value:t.postForm.laiyuan,callback:function(e){t.$set(t.postForm,"laiyuan",e)},expression:"postForm.laiyuan"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"商品分类"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.postForm.cid,callback:function(e){t.$set(t.postForm,"cid",e)},expression:"postForm.cid"}},t._l(t.goodstypeOptions,function(t){return o("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"版块分类"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.postForm.code,callback:function(e){t.$set(t.postForm,"code",e)},expression:"postForm.code"}},t._l(t.bankuaiOptions,function(t){return o("el-option",{key:t.code,attrs:{label:t.title,value:t.code}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"图片"}},[o("div",{staticStyle:{"margin-bottom":"10px"}},[o("Upload",{model:{value:t.postForm.img,callback:function(e){t.$set(t.postForm,"img",e)},expression:"postForm.img"}})],1)]),t._v(" "),o("el-form-item",{attrs:{label:"价格"}},[o("el-col",{staticClass:"txt_r",attrs:{span:1}},[t._v("现价：")]),t._v(" "),o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.discount_price,callback:function(e){t.$set(t.postForm,"discount_price",e)},expression:"postForm.discount_price"}})],1),t._v(" "),o("el-col",{staticClass:"txt_r",attrs:{span:1}},[t._v("原价：")]),t._v(" "),o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.price,callback:function(e){t.$set(t.postForm,"price",e)},expression:"postForm.price"}})],1),t._v(" "),o("el-col",{staticClass:"txt_r",attrs:{span:2}},[t._v("手机价：")]),t._v(" "),o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.shouji_price,callback:function(e){t.$set(t.postForm,"shouji_price",e)},expression:"postForm.shouji_price"}})],1),t._v(" "),o("span",{staticClass:"tip"},[t._v(" 可空，有手机专享价格再加,目前只限淘宝")])],1),t._v(" "),o("el-form-item",{attrs:{label:"属性"}},[o("el-col",{attrs:{span:14}},[o("el-checkbox-group",{model:{value:t.postForm.goods_attribute,callback:function(e){t.$set(t.postForm,"goods_attribute",e)},expression:"postForm.goods_attribute"}},[o("el-checkbox",{attrs:{label:"2"}},[t._v("包邮")]),t._v(" "),o("el-checkbox",{attrs:{label:"6"}},[t._v("试用")]),t._v(" "),o("el-checkbox",{attrs:{label:"3"}},[t._v("专享")]),t._v(" "),o("el-checkbox",{attrs:{label:"1"}},[t._v("拍改")]),t._v(" "),o("el-checkbox",{attrs:{label:"4"}},[t._v("限购")]),t._v(" "),o("el-checkbox",{attrs:{label:"5"}},[t._v("货到付款")])],1)],1),t._v(" "),o("el-col",{attrs:{span:2}},[o("span",{staticClass:"tip"},[t._v("可多选")])])],1),t._v(" "),o("el-form-item",{attrs:{label:"推荐理由"}},[o("div",{staticClass:"editor-container"},[o("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1)]),t._v(" "),o("el-form-item",{attrs:{label:"开始时间"}},[o("el-date-picker",{attrs:{type:"datetime",placeholder:"开始时间"},model:{value:t.postForm.starttime,callback:function(e){t.$set(t.postForm,"starttime",e)},expression:"postForm.starttime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"结束时间"}},[o("el-date-picker",{attrs:{type:"datetime",placeholder:"结束时间"},model:{value:t.postForm.endtime,callback:function(e){t.$set(t.postForm,"endtime",e)},expression:"postForm.endtime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"总佣金比例"}},[o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.fanli_bl,callback:function(e){t.$set(t.postForm,"fanli_bl",e)},expression:"postForm.fanli_bl"}})],1),t._v(" "),o("el-col",{attrs:{span:1}},[t._v("%")]),t._v(" "),o("el-col",{attrs:{span:8}},[t._v("\n          加高返利图标：\n          "),o("el-radio-group",{model:{value:t.postForm.fanli_ico,callback:function(e){t.$set(t.postForm,"fanli_ico",e)},expression:"postForm.fanli_ico"}},[o("el-radio",{attrs:{label:0}},[t._v("不")]),t._v(" "),o("el-radio",{attrs:{label:1}},[t._v("是")])],1)],1),t._v(" "),o("span",{staticClass:"tip"},[t._v(" 如果是则显示高返图章")])],1),t._v(" "),o("el-form-item",{attrs:{label:"专属推广地址"}},[o("el-col",{attrs:{span:8}},[o("el-input",{model:{value:t.postForm.tg_url,callback:function(e){t.$set(t.postForm,"tg_url",e)},expression:"postForm.tg_url"}})],1),t._v(" "),o("span",{staticClass:"tip"},[t._v(" 阿里妈妈获取的专属推广地址")])],1),t._v(" "),o("el-alert",{attrs:{title:"优惠卷信息",type:"info",closable:!1}}),t._v(" "),o("el-form-item",{attrs:{label:"领取地址"}},[o("el-col",{attrs:{span:8}},[o("el-input",{model:{value:t.postForm.lq_url,callback:function(e){t.$set(t.postForm,"lq_url",e)},expression:"postForm.lq_url"}})],1),t._v(" "),o("span",{staticClass:"tip"},[t._v(" 可空，填写手机领取地址")])],1),t._v(" "),o("el-form-item",{attrs:{label:"优惠券"}},[o("el-col",{staticClass:"txt_r",attrs:{span:1}},[t._v("满：")]),t._v(" "),o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.price_man,callback:function(e){t.$set(t.postForm,"price_man",e)},expression:"postForm.price_man"}})],1),t._v(" "),o("el-col",{staticClass:"txt_r",attrs:{span:1}},[t._v("立减：")]),t._v(" "),o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.price_jian,callback:function(e){t.$set(t.postForm,"price_jian",e)},expression:"postForm.price_jian"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"优惠券剩余"}},[o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.quan_surplus,callback:function(e){t.$set(t.postForm,"quan_surplus",e)},expression:"postForm.quan_surplus"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"优惠券总数"}},[o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.quan_total,callback:function(e){t.$set(t.postForm,"quan_total",e)},expression:"postForm.quan_total"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"开始时间"}},[o("el-date-picker",{attrs:{type:"datetime",placeholder:"开始时间"},model:{value:t.postForm.quan_stime,callback:function(e){t.$set(t.postForm,"quan_stime",e)},expression:"postForm.quan_stime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"结束时间"}},[o("el-date-picker",{attrs:{type:"datetime",placeholder:"结束时间"},model:{value:t.postForm.quan_etime,callback:function(e){t.$set(t.postForm,"quan_etime",e)},expression:"postForm.quan_etime"}})],1),t._v(" "),o("el-alert",{attrs:{title:"其他设置",type:"info",closable:!1}}),t._v(" "),o("el-form-item",{attrs:{label:"掌柜"}},[o("el-col",{attrs:{span:5}},[o("el-input",{model:{value:t.postForm.nick,callback:function(e){t.$set(t.postForm,"nick",e)},expression:"postForm.nick"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"销量"}},[o("el-col",{attrs:{span:3}},[o("el-input",{model:{value:t.postForm.sell,callback:function(e){t.$set(t.postForm,"sell",e)},expression:"postForm.sell"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"状态"}},[o("el-radio-group",{model:{value:t.postForm.oversell,callback:function(e){t.$set(t.postForm,"oversell",e)},expression:"postForm.oversell"}},[o("el-radio",{attrs:{label:0}},[t._v("销售中")]),t._v(" "),o("el-radio",{attrs:{label:1}},[t._v("卖光了")])],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"顶"}},[o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.ding,callback:function(e){t.$set(t.postForm,"ding",e)},expression:"postForm.ding"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"踩"}},[o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.cai,callback:function(e){t.$set(t.postForm,"cai",e)},expression:"postForm.cai"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"评论人数"}},[o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.pinglun,callback:function(e){t.$set(t.postForm,"pinglun",e)},expression:"postForm.pinglun"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"审核人"}},[o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.auditor,callback:function(e){t.$set(t.postForm,"auditor",e)},expression:"postForm.auditor"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"会员名"}},[o("el-col",{attrs:{span:2}},[o("el-input",{model:{value:t.postForm.ddusername,callback:function(e){t.$set(t.postForm,"ddusername",e)},expression:"postForm.ddusername"}})],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"cpc推广"}},[o("el-radio-group",{model:{value:t.postForm.yun_jump,callback:function(e){t.$set(t.postForm,"yun_jump",e)},expression:"postForm.yun_jump"}},[o("el-radio",{attrs:{label:0}},[t._v("关闭")]),t._v(" "),o("el-radio",{attrs:{label:1}},[t._v("开启")])],1),t._v(" "),o("span",{staticClass:"tip"},[t._v(" cpc推广相关以活动公告为准")])],1)],1)],1)},staticRenderFns:[]};var d=o("VU/8")(m,u,!1,function(t){o("L8OQ")},"data-v-30ec681d",null);e.a=d.exports}});