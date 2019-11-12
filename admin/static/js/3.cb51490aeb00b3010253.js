webpackJsonp([3],{RY6d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("bOdI"),i=a.n(r),s=a("mtWM"),n=a.n(s),o={props:{queryForm:{type:Object,default:!1}},methods:{handleReset:function(){this.$refs.queryForm.resetFields()},query:function(){this.$emit("query",this.queryForm)},exportData:function(){this.$emit("exportData")}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"insert_form"},[a("Form",{ref:"queryForm",attrs:{model:t.queryForm}},[a("FormItem",{staticStyle:{width:"300px"},attrs:{prop:"item"}},[a("Input",{attrs:{type:"text",size:"small",placeholder:"请输入账号/姓名/地址",clearable:""},model:{value:t.queryForm.item,callback:function(e){t.$set(t.queryForm,"item",e)},expression:"queryForm.item"}})],1),t._v(" "),a("FormItem",{staticClass:"query-btn"},[a("Button",{attrs:{type:"primary",size:"small",icon:"md-refresh"},on:{click:function(e){return t.handleReset("formValidate")}}},[t._v("重置")]),t._v(" "),a("Button",{attrs:{type:"primary",size:"small",icon:"ios-search"},nativeOn:{click:function(e){return t.query(e)}}},[t._v("查询")]),t._v(" "),a("Button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){return t.exportData(e)}}},[t._v("导出Excel")])],1)],1),t._v(" "),a("p",{staticClass:"clear"})],1)},staticRenderFns:[]},u=a("VU/8")(o,l,!1,null,null,null).exports,c=a("obCy"),p="",m={mixins:[c.b,c.a],data:function(){var t;return{isLoad:!1,queryForm:{item:""},originTable:[],tableColumns:[{title:"序号",width:35,align:"center",fixed:"left",render:function(t,e){return t("span",{},(p.pageInfo.pageCurrent-1)*p.pageInfo.pageSize+e.index+1)}},{title:"账号",align:"center",sortable:"custom",key:"account",minWidth:100},{title:"姓名",align:"center",sortable:"custom",tooltip:!0,width:100,key:"userName"},{title:"性别",align:"center",sortable:"custom",key:"sex",width:80},{title:"状态",align:"center",sortable:!0,key:"status",width:80,render:function(t,e){return t("span",{},"1"==e.row.status?"启用":"停用")}},(t={title:"年龄",align:"center",tooltip:!0,sortable:"custom",width:80},i()(t,"tooltip",!0),i()(t,"key","age"),t),{title:"手机",align:"center",sortable:"custom",key:"phone",width:110},{title:"邮箱",align:"center",sortable:"custom",tooltip:!0,key:"email",width:200},{title:"地址",align:"center",sortable:"custom",tooltip:!0,width:200,key:"address"},{title:"新增时间",align:"center",sortable:"custom",tooltip:!0,width:130,key:"insertTime"},{title:"修改时间",align:"center",sortable:"custom",tooltip:!0,width:130,key:"updateTime"}]}},components:{Query:u},created:function(){p=this,this.getTableList()},methods:{getTableList:function(){this.tableData=[],this.isLoad=!0,n.a.get("/api/data").then(function(t){p.tableData=t.data.array,p.originTable=t.data.array,p.pageShow(),p.isLoad=!1})},query:function(t){var e=t.item;if(""!=e){for(var a=[],r=this.tableData,i=new RegExp(e),s=0;s<r.length;s++)(i.test(r[s].account)||i.test(r[s].userName)||i.test(r[s].address))&&a.push(s);if(a.length){var n=[];for(s=0;s<a.length;s++)n.push({account:r[a[s]].account,userName:r[a[s]].userName,sex:r[a[s]].sex,status:r[a[s]].status,age:r[a[s]].age,phone:r[a[s]].phone,email:r[a[s]].email,address:r[a[s]].address,insertTime:r[a[s]].insertTime,updateTime:r[a[s]].updateTime});this.tableData=n}else this.tableData=[]}else this.tableData=this.originTable},exportData:function(){this.$refs.tableUCU.exportCsv({filename:"用户信息表"})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user_list"},[a("Card",{staticClass:"queryCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("查询条件")]),t._v(" "),a("Query",{ref:"where",attrs:{queryForm:t.queryForm},on:{query:t.query,exportData:t.exportData}})],1),t._v(" "),a("Card",{staticClass:"tableCard"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("用户信息表")]),t._v(" "),a("Table",{ref:"tableUCU",attrs:{data:t.tableData,columns:t.tableColumns,height:t.$store.state.clientHeight-9,loading:t.isLoad,border:"",stripe:""},on:{"on-sort-change":t.sortTable}}),t._v(" "),a("div",{staticClass:"page-div"},[a("Select",{on:{"on-change":t.changePageSize},model:{value:t.pageInfo.pageSize,callback:function(e){t.$set(t.pageInfo,"pageSize",e)},expression:"pageInfo.pageSize"}},t._l(t.totalOption,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("Button",{staticClass:"page-btn",on:{click:t.toHeadPage}},[t._v("首页")]),t._v(" "),a("Page",{ref:"pageRef",attrs:{current:t.pageInfo.pageCurrent,total:t.pageInfo.total,"page-size":t.pageInfo.pageSize,"show-total":"",simple:""},on:{"on-change":t.changeUserPage}}),t._v(" "),a("Button",{staticClass:"page-btn",on:{click:t.toEndPage}},[t._v("末页")])],1)],1)],1)],1)},staticRenderFns:[]},g=a("VU/8")(m,d,!1,null,null,null);e.default=g.exports}});
//# sourceMappingURL=3.cb51490aeb00b3010253.js.map