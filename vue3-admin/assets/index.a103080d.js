var e,l,t=Object.defineProperty,n=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(e,l,n)=>l in e?t(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,d=(e,l)=>{for(var t in l||(l={}))o.call(l,t)&&i(e,t,l[t]);if(s)for(var t of s(l))r.call(l,t)&&i(e,t,l[t]);return e},c=(e,l)=>n(e,a(l));import("data:text/javascript;base64,Cg==");import{r as u,o as m,c as h,p as b,a as p,b as f,u as v,d as g,t as C,w,e as y,f as _,g as k,h as T,n as S,F,i as L,j as I,k as x,l as M,E,S as N,m as O,q as V,s as A,v as $,A as B,C as j,D,x as R,y as q,z as P,B as U,G as z,H,I as J,J as W,K,L as X,M as G}from"./vendor.91748e98.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&l(e)})).observe(document,{childList:!0,subtree:!0})}function l(e){if(e.ep)return;e.ep=!0;const l=function(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?l.credentials="include":"anonymous"===e.crossorigin?l.credentials="omit":l.credentials="same-origin",l}(e);fetch(e.href,l)}}();const Q={name:"App"};Q.render=function(e,l,t,n,a,s){const o=u("router-view");return m(),h(o)};const Y={},Z=(e,l)=>{l&&e.forEach((e=>e.active=e.id===l)),sessionStorage.setItem("TABS_LIST",JSON.stringify(e))},ee=()=>{let e=sessionStorage.getItem("TABS_LIST");return e=e?JSON.parse(e):[],e},le=()=>{let e=localStorage.getItem("THEMES");return e=e?JSON.parse(e):{showBreadcrumb:!0,showTabs:!0},e},te=e=>{e=(e=e||[]).reverse(),sessionStorage.setItem("BREADCRUMB",JSON.stringify(e))},ne=()=>{let e=sessionStorage.getItem("BREADCRUMB");return e=e?JSON.parse(e):[],e},ae={drawer:!1,nightMode:!1,navbarType:"左侧菜单模式",navbarList:["左侧菜单模式","顶部菜单混合模式","顶部菜单模式","左侧菜单混合模式"],systemThemeColor:"#0960BD",systemThemeList:["#0960BD","#0084F4","#009688","#536DF3","#FF5C93","#EE4F12","#0096C7","#9C27B0","#FF9800"],navbarThemeColor:"#FFFFFF",navbarThemeList:["#FFFFFF","#151515","#009688","#5172DC","#409EFF","#E74C3C","#24292E","#394664","#001529","#383F45"],sidebarThemeColor:"#001529",sidebarThemeList:["#001529","#212121","#273352","#FFFFFF","#191B24","#191A23","#304156","#28333E","#344058","#383F45"],showBreadcrumb:!0,showTabs:!0},se=e=>{const{type:l,value:t}=e;let n=le();var a;n[l]=t,a=n,localStorage.setItem("THEMES",JSON.stringify(a)),oe()},oe=e=>{let l=le();if(e){let{data:t}=e;Object.keys(t).forEach((e=>{t[e]=l[e]||t[e]}))}let t="";if(l.systemThemeColor){t+=`--systemThemeColor: ${l.systemThemeColor};`,t+=`--systemThemeColorActive: ${ie(l.systemThemeColor,58)};`}if(l.navbarThemeColor){t+=`--navbarThemeColor: ${l.navbarThemeColor};`,t+=`--sidebarThemeColorActive: ${ie(l.navbarThemeColor,6)};`}l.sidebarThemeColor&&(t+=`--sidebarThemeColor: ${l.sidebarThemeColor};`,re({flag:"#FFFFFF"===l.sidebarThemeColor,cls:"sidebar--white"})),re({flag:l.nightMode,cls:"night-mode"}),re({flag:l.showBreadcrumb,dom:".el-breadcrumb",cls:"is-show"}),re({flag:l.showTabs,dom:".tabs-content",cls:"is-show"}),re({flag:!(null==l?void 0:l.navbarThemeColor)||"#FFFFFF"===l.navbarThemeColor,cls:"navbar--white"}),ae.navbarList.forEach(((e,l)=>{re({flag:e===ae.navbarType,cls:`layout-type-${l+1}`})})),document.querySelector(":root").setAttribute("style",t)},re=e=>{var l;let{flag:t,cls:n,dom:a}=e;a=a||"body";let s=null==(l=document.querySelector(a))?void 0:l.classList;t?null==s||s.add(n):null==s||s.remove(n)},ie=(e,l)=>(e=e.indexOf("#")>=0?e.substring(1,e.length):e,l=Math.trunc(255*l/100),`#${de(e.substring(0,2),l)}${de(e.substring(2,4),l)}${de(e.substring(4,6),l)}`),de=(e,l)=>{const t=parseInt(e,16)+l,n=t>255?255:t;return n.toString(16).length>1?n.toString(16):`0${n.toString(16)}`};const ce={setup(){const e=f(ae),l=v();g((()=>{oe({data:e})}));const t=C(e);return c(d({},t),{showDraw:()=>e.drawer=!0,changeSetting:(t,n)=>{(e=>{let{type:l,value:t,store:n,data:a}=e;a[l]=t,se({type:l,value:t}),"navbarType"===l&&(a.drawer=!1,n.commit("getNavbarType",t))})({type:t,value:n,store:l,data:e})}})}};b("data-v-1eb64c40");const ue={class:"draw-content"},me=I("主题"),he={class:"flex-justify-center day-mode"},be=I("导航栏模式"),pe={class:"nav-row"},fe=["onClick"],ve=I("系统主题"),ge={class:"checkbox-row"},Ce=["onClick"],we=I("顶栏主题"),ye={class:"checkbox-row"},_e=["onClick"],ke=I("菜单主题"),Te={class:"checkbox-row"},Se=["onClick"],Fe=I("界面显示"),Le={class:"other-row"},Ie=y("span",null,"面包屑",-1),xe={class:"other-row"},Me=y("span",null,"导航页",-1),Ee=I("保存");p(),ce.render=function(e,l,t,n,a,s){const o=u("el-divider"),r=u("el-switch"),i=u("el-tooltip"),d=u("el-color-picker"),c=u("el-button"),b=u("el-drawer");return m(),h(b,{title:"项目配置",modelValue:e.drawer,"onUpdate:modelValue":l[12]||(l[12]=l=>e.drawer=l),"show-close":!0},{default:w((()=>[y("div",ue,[_(o,null,{default:w((()=>[me])),_:1}),y("div",he,[_(r,{modelValue:e.nightMode,"onUpdate:modelValue":l[0]||(l[0]=l=>e.nightMode=l),"active-text":"夜间模式","inactive-text":"日间模式",onChange:l[1]||(l[1]=l=>n.changeSetting("nightMode",e.nightMode))},null,8,["modelValue"])]),_(o,null,{default:w((()=>[be])),_:1}),y("div",pe,[(m(!0),k(F,null,T(e.navbarList,((l,t)=>(m(),h(i,{effect:"dark",placement:"bottom",key:t,content:l,disabled:!e.drawer},{default:w((()=>[y("div",{class:S(["nav-item",`nav-item-${t}`,{active:e.navbarType===l}]),onClick:e=>n.changeSetting("navbarType",l)},null,10,fe)])),_:2},1032,["content","disabled"])))),128))]),_(o,null,{default:w((()=>[ve])),_:1}),y("div",ge,[(m(!0),k(F,null,T(e.systemThemeList,((l,t)=>(m(),k("div",{class:S(["checkbox-item",{active:l===e.systemThemeColor}]),key:t,style:L({backgroundColor:l}),onClick:e=>n.changeSetting("systemThemeColor",l)},null,14,Ce)))),128)),_(d,{modelValue:e.systemThemeColor,"onUpdate:modelValue":l[2]||(l[2]=l=>e.systemThemeColor=l),onActiveChange:l[3]||(l[3]=e=>n.changeSetting("systemThemeColor",e))},null,8,["modelValue"])]),_(o,null,{default:w((()=>[we])),_:1}),y("div",ye,[(m(!0),k(F,null,T(e.navbarThemeList,((l,t)=>(m(),k("div",{class:S(["checkbox-item",{active:l===e.navbarThemeColor}]),key:t,style:L({backgroundColor:l}),onClick:e=>n.changeSetting("navbarThemeColor",l)},null,14,_e)))),128)),_(d,{modelValue:e.navbarThemeColor,"onUpdate:modelValue":l[4]||(l[4]=l=>e.navbarThemeColor=l),onActiveChange:l[5]||(l[5]=e=>n.changeSetting("navbarThemeColor",e))},null,8,["modelValue"])]),_(o,null,{default:w((()=>[ke])),_:1}),y("div",Te,[(m(!0),k(F,null,T(e.sidebarThemeList,((l,t)=>(m(),k("div",{class:S(["checkbox-item",{active:l===e.sidebarThemeColor}]),key:t,style:L({backgroundColor:l}),onClick:e=>n.changeSetting("sidebarThemeColor",l)},null,14,Se)))),128)),_(d,{modelValue:e.sidebarThemeColor,"onUpdate:modelValue":l[6]||(l[6]=l=>e.sidebarThemeColor=l),onActiveChange:l[7]||(l[7]=e=>n.changeSetting("sidebarThemeColor",e))},null,8,["modelValue"])]),_(o,null,{default:w((()=>[Fe])),_:1}),y("div",Le,[Ie,_(r,{modelValue:e.showBreadcrumb,"onUpdate:modelValue":l[8]||(l[8]=l=>e.showBreadcrumb=l),class:"custom-switch",onChange:l[9]||(l[9]=e=>n.changeSetting("showBreadcrumb",e))},null,8,["modelValue"])]),y("div",xe,[Me,_(r,{modelValue:e.showTabs,"onUpdate:modelValue":l[10]||(l[10]=l=>e.showTabs=l),class:"custom-switch",onChange:l[11]||(l[11]=e=>n.changeSetting("showTabs",e))},null,8,["modelValue"])])]),_(c,{class:"draw-save"},{default:w((()=>[Ee])),_:1})])),_:1},8,["modelValue"])},ce.__scopeId="data-v-1eb64c40";const Ne={name:"Logo",setup(){const e=v();return{isHideTitle:x((()=>e.state.isCollapse))}}},Oe={class:"el-logo"},Ve=y("img",{src:"./assets/logo.03d6d6da.png",alt:""},null,-1);Ne.render=function(e,l,t,n,a,s){return m(),k("div",Oe,[Ve,y("span",{class:S(["title",{"is-hide":n.isHideTitle}])},"XX系统",2)])};const Ae=e=>{let l=document.documentElement;e.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():l.requestFullscreen?l.requestFullscreen():l.webkitRequestFullScreen?l.webkitRequestFullScreen():l.mozRequestFullScreen?l.mozRequestFullScreen():l.msRequestFullscreen&&l.msRequestFullscreen()},$e={setup(){const e=f({fullscreen:!1});((e,l)=>{document.onkeydown=e=>{122==e.keyCode&&(e.preventDefault(),Ae(l))},document.addEventListener("fullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),document.addEventListener("msfullscreenchange",e)})((()=>{e.fullscreen=!e.fullscreen}),e);const l=C(e);return c(d({},l),{handleFullScreen:()=>Ae(e)})}};$e.render=function(e,l,t,n,a,s){const o=u("svg-icon"),r=u("el-tooltip");return m(),h(r,{class:"item",effect:"dark",content:e.fullscreen?"退出全屏":"全屏",placement:"bottom"},{default:w((()=>[e.fullscreen?(m(),h(o,{key:1,sss:e.fullscreen,name:"full-screen-min",onClick:n.handleFullScreen},null,8,["sss","onClick"])):(m(),h(o,{key:0,name:"full-screen-max",onClick:n.handleFullScreen},null,8,["onClick"]))])),_:1},8,["content"])};const Be={};b("data-v-30796fb2");const je=y("div",{class:"header-user"},[y("img",{src:"./assets/user.cae3903a.jpg",alt:""}),y("span",null,"超级管理员")],-1),De=I("个人信息"),Re=I("修改密码"),qe=I(" 退出登录 ");p(),Be.render=function(e,l,t,n,a,s){const o=u("el-dropdown-item"),r=u("el-dropdown-menu"),i=u("el-dropdown");return m(),h(i,null,{dropdown:w((()=>[_(r,null,{default:w((()=>[_(o,{icon:"el-icon-user"},{default:w((()=>[De])),_:1}),_(o,{icon:"el-icon-lock"},{default:w((()=>[Re])),_:1}),_(o,{icon:"el-icon-switch-button"},{default:w((()=>[qe])),_:1})])),_:1})])),default:w((()=>[je])),_:1})},Be.__scopeId="data-v-30796fb2";const Pe={components:{Fold:M,Expand:E,Setting:N,SystemSetting:ce,Logo:Ne,FullScreen:$e,UserInfo:Be},props:{showLogo:Boolean},setup(e){const l=v(),t=f({setting:null,breadcrumb:ne()}),n=x((()=>e.showLogo)),a=x((()=>l.state.isCollapse));O((()=>l.state.activeMenu),((e,l)=>t.breadcrumb=ne()));const s=C(t);return c(d({},s),{showSetting:()=>t.setting.showDraw(),isShowLogo:n,isCollapse:a,changeCollapse:e=>l.commit("getCollapse",e)})}},Ue={class:"header-content"},ze={class:"header-left"},He={class:"header-right"};Pe.render=function(e,l,t,n,a,s){const o=u("logo"),r=u("fold"),i=u("expand"),d=u("el-breadcrumb-item"),c=u("el-breadcrumb"),b=u("full-screen"),p=u("svg-icon"),f=u("user-info"),v=u("setting"),g=u("system-setting");return m(),k(F,null,[y("div",Ue,[n.isShowLogo?(m(),h(o,{key:0})):V("",!0),y("div",{class:S(["header",{"has-logo":n.isShowLogo}])},[y("div",ze,[n.isCollapse?(m(),h(i,{key:1,class:"navbar-icon _fold",onClick:l[1]||(l[1]=e=>n.changeCollapse(!1))})):(m(),h(r,{key:0,class:"navbar-icon _fold",onClick:l[0]||(l[0]=e=>n.changeCollapse(!0))})),_(c,{separator:"/"},{default:w((()=>[(m(!0),k(F,null,T(e.breadcrumb,(e=>(m(),h(d,{key:e.menuId},{default:w((()=>[I(A(e.menuName),1)])),_:2},1024)))),128))])),_:1}),$(e.$slots,"sidebar")]),y("div",He,[_(b),_(p,{name:"language"}),_(f),_(v,{class:"navbar-icon",onClick:n.showSetting},null,8,["onClick"])])],2)]),_(g,{ref:"setting"},null,512)],64)};const Je={props:{item:Object,collapse:Boolean},setup(){const e=v();return{handleMenu:l=>{const{menuId:t,menuName:n}=l;let a=ee(),s=!0;a.forEach((e=>{e.id===t&&(s=!1)})),s&&a.push({id:t,name:n,active:!0}),e.commit("getActiveMenu",t),Z(a,t)}}}},We=y("i",{class:"el-icon-location"},null,-1),Ke=y("i",{class:"el-icon-setting"},null,-1),Xe={key:0};Je.render=function(e,l,t,n,a,s){const o=u("sidebar-item",!0),r=u("el-submenu"),i=u("el-menu-item");return t.item.children.length>0?(m(),h(r,{key:0,index:t.item.menuId},{title:w((()=>[We,y("span",null,A(t.item.menuName),1)])),default:w((()=>[(m(!0),k(F,null,T(t.item.children,(e=>(m(),h(o,{key:e.menuId,item:e},null,8,["item"])))),128))])),_:1},8,["index"])):(m(),h(i,{key:1,index:t.item.menuId,onClick:l[0]||(l[0]=e=>n.handleMenu(t.item))},{title:w((()=>[I(A(t.item.menuName),1)])),default:w((()=>[Ke,t.collapse?(m(),k("span",Xe,A(t.item.menuName),1)):V("",!0)])),_:1},8,["index"]))};const Ge={components:{Logo:Ne,SidebarItem:Je},props:{mode:String,showLogo:Boolean,collapse:Boolean},setup(e){const l=v(),t=e.collapse,n=f({activeMenu:"",menuList:[{menuId:"111",menuName:"导航一",path:"",children:[{menuId:"111-1",menuName:"选项1",path:"",children:[]},{menuId:"111-2",menuName:"选项2",path:"",children:[]},{menuId:"111-3",menuName:"选项3",path:"",children:[]},{menuId:"111-4",menuName:"这是选项4哦",path:"",children:[{menuId:"111-4-1",menuName:"这是选项4-1哦",path:"/",children:[]},{menuId:"111-4-2",menuName:"这是选项4-2哦",path:"/",children:[{menuId:"111-4-2-1",menuName:"这是选项4-2-1哦",path:"/",children:[]}]}]}]},{menuId:"222",menuName:"导航二",path:"",children:[{menuId:"222-1",menuName:"导航二1",path:"/",children:[]},{menuId:"222-2",menuName:"导航二2",path:"/",children:[]},{menuId:"222-3",menuName:"导航二3",path:"/",children:[]},{menuId:"222-4",menuName:"导航二4",path:"",children:[{menuId:"222-4-1",menuName:"导航二4-1",path:"",children:[{menuId:"222-4-1-1",menuName:"导航二4-1-1",path:"/",children:[]}]},{menuId:"222-4-2",menuName:"导航二4-2",path:"/",children:[]}]}]},{menuId:"333",menuName:"导航三",path:"/",children:[]},{menuId:"444",menuName:"导航四",path:"/",children:[]},{menuId:"555",menuName:"导航五",path:"",children:[{menuId:"555-1",menuName:"导航五-1",path:"/",children:[]}]}]}),a=x((()=>e.showLogo)),s=x((()=>e.collapse?t:l.state.isCollapse));ee().forEach((e=>{e.active&&(n.activeMenu=e.id)}));const o=(e,l)=>{for(let t in e){if(e[t].menuId==l)return[e[t]];if(e[t].children){let n=o(e[t].children,l);if(void 0!==n)return n.concat(e[t])}}};te(o(n.menuList,n.activeMenu)),O((()=>l.state.activeMenu),((e,l)=>{n.activeMenu=e,te(o(n.menuList,e))}));const r=C(n);return c(d({},r),{isShowLogo:a,isCollapse:s})}};Ge.render=function(e,l,t,n,a,s){const o=u("logo"),r=u("sidebar-item"),i=u("el-menu");return m(),h(i,{"default-active":e.activeMenu,"unique-opened":!0,mode:t.mode,collapse:n.isCollapse&&"horizontal"!==t.mode,class:S({"no-transition":n.isCollapse})},{default:w((()=>[n.isShowLogo?(m(),h(o,{key:0})):V("",!0),(m(!0),k(F,null,T(e.menuList,(e=>(m(),h(r,{key:e.menuId,item:e,collapse:t.collapse},null,8,["item","collapse"])))),128))])),_:1},8,["default-active","mode","collapse","class"])};const Qe={components:{ArrowDown:B,Close:j,Download:D,DocumentRemove:R,DocumentDelete:q},setup(){const e=v(),l=f({left:0,tabs:ee(),activeMenu:"",disabledCurrent:!0,disabledLeft:!0,disabledRight:!0,disabledOther:!0,disabledAll:!0});l.tabs.forEach((e=>{e.active&&(l.activeMenu=e.id)}));const t=P(null),n=P(null),a=t=>{var n,a;let o=l.tabs,r=0,i="";if(o.forEach(((e,l)=>{e.active&&(r=l)})),"current"===t)r=r>0?r-1:r+1,i=null!=(a=null==(n=o[r])?void 0:n.id)?a:"",o=o.filter((e=>!e.active)),e.commit("getActiveMenu",i);else if("other"===t)o=o.filter((e=>e.active)),l.tabs=o;else if("all"===t)o=o.filter((e=>e.unCloseable)),e.commit("getActiveMenu","");else{let e=o.length-1;"left"===t?o.splice(0,r):o.splice(r+1,e-r)}Z(o,i),s()},s=()=>{let e=!0,t=!0,n=!0,a=0,s=l.tabs.length;if(l.tabs.forEach(((l,t)=>{l.active&&!l.unCloseable&&(e=!1),l.active&&(a=t)})),a>0)for(let o=0;o<a;o++)if(!l.tabs[o].unCloseable){t=!1;break}if(a+1<s)for(let o=s;o>a+1;o--)if(!l.tabs[o-1].unCloseable){n=!1;break}l.disabledCurrent=e,l.disabledLeft=t,l.disabledRight=n,l.disabledOther=t&&n,l.disabledAll=t&&n&&e};return s(),O((()=>e.state.activeMenu),((e,t)=>{l.activeMenu=e,l.tabs=ee(),s()})),c(d({},C(l)),{tabsOut:t,tabsInner:n,handleScroll:e=>{const a=300,s=t.value.offsetWidth,o=n.value.offsetWidth;o>s&&("right"===e?s-l.left<o-a?l.left-=a:l.left=s-o:-l.left>a?l.left+=a:l.left=0)},handleTag:t=>{e.commit("getActiveMenu",t.props.name),Z(l.tabs,t.props.name),s()},handleClose:e=>{let t=0,n=!1;l.tabs.forEach(((l,a)=>{l.id===e&&(t=a,n=l.active)})),n?a("current"):(l.tabs.splice(t,1),Z(l.tabs),s())},handleMenuClose:a})}},Ye={class:"tabs-content"},Ze={class:"tabs-scroll"},el=I(" 关闭当前标签页 "),ll=I(" 关闭左侧标签页 "),tl=I(" 关闭右侧标签页 "),nl=I(" 关闭其他标签页 "),al=I(" 关闭所有标签页 ");Qe.render=function(e,l,t,n,a,s){const o=u("el-tab-pane"),r=u("el-tabs"),i=u("arrow-down"),d=u("el-dropdown-item"),c=u("el-divider"),b=u("el-dropdown-menu"),p=u("el-dropdown");return m(),k("div",Ye,[y("div",Ze,[_(r,{modelValue:e.activeMenu,"onUpdate:modelValue":l[0]||(l[0]=l=>e.activeMenu=l),type:"card",onTabClick:n.handleTag,onTabRemove:n.handleClose},{default:w((()=>[(m(!0),k(F,null,T(e.tabs,((e,l)=>(m(),h(o,{closable:!e.unCloseable,name:e.id,key:l,label:e.name},{default:w((()=>[I(A(e.name),1)])),_:2},1032,["closable","name","label"])))),128))])),_:1},8,["modelValue","onTabClick","onTabRemove"])]),_(p,{trigger:"click"},{dropdown:w((()=>[_(b,{class:"tabs-menu"},{default:w((()=>[_(d,{disabled:e.disabledCurrent,onClick:l[1]||(l[1]=e=>n.handleMenuClose("current")),icon:"el-icon-close"},{default:w((()=>[el])),_:1},8,["disabled"]),_(c),_(d,{disabled:e.disabledLeft,onClick:l[2]||(l[2]=e=>n.handleMenuClose("left")),icon:"el-icon-download left"},{default:w((()=>[ll])),_:1},8,["disabled"]),_(d,{disabled:e.disabledRight,onClick:l[3]||(l[3]=e=>n.handleMenuClose("right")),icon:"el-icon-download right"},{default:w((()=>[tl])),_:1},8,["disabled"]),_(c),_(d,{disabled:e.disabledOther,onClick:l[4]||(l[4]=e=>n.handleMenuClose("other")),icon:"el-icon-document-remove"},{default:w((()=>[nl])),_:1},8,["disabled"]),_(d,{disabled:e.disabledAll,onClick:l[5]||(l[5]=e=>n.handleMenuClose("all")),icon:"el-icon-document-delete"},{default:w((()=>[al])),_:1},8,["disabled"])])),_:1})])),default:w((()=>[_(i,{class:"tabs-svg border-left"})])),_:1})])};const sl={components:{Sidebar:Ge,Navbar:Pe,Tabs:Qe},setup(){const e=U(),l=v();return{currentPath:x((()=>e.path)),navbarType:x((()=>l.state.navbarType)),isCollapse:x((()=>l.state.isCollapse)),sidebarWidth:x((()=>l.state.isCollapse?"64px":"200px"))}}},ol={class:"el-main"};sl.render=function(e,l,t,n,a,s){const o=u("sidebar"),r=u("el-aside"),i=u("navbar"),d=u("el-header"),c=u("tabs"),b=u("el-main"),p=u("el-container");return"左侧菜单模式"===n.navbarType?(m(),h(p,{key:0},{default:w((()=>[_(r,{width:n.sidebarWidth},{default:w((()=>[_(o,{showLogo:!0})])),_:1},8,["width"]),_(p,null,{default:w((()=>[_(d,null,{default:w((()=>[_(i)])),_:1}),_(c),_(b,null,{default:w((()=>[$(e.$slots,"home")])),_:3})])),_:3})])),_:3})):"顶部菜单混合模式"===n.navbarType?(m(),h(p,{key:1},{default:w((()=>[_(d,null,{default:w((()=>[_(i,{showLogo:!0})])),_:1}),_(p,null,{default:w((()=>[_(r,{width:n.sidebarWidth},{default:w((()=>[_(o)])),_:1},8,["width"]),_(p,{direction:"vertical"},{default:w((()=>[_(c),y("main",ol,[$(e.$slots,"home")])])),_:3})])),_:3})])),_:3})):"顶部菜单模式"===n.navbarType?(m(),h(p,{key:2},{default:w((()=>[_(d,null,{default:w((()=>[_(i,{showLogo:!0},{sidebar:w((()=>[_(o,{mode:"horizontal"})])),_:1})])),_:1}),_(p,{direction:"vertical"},{default:w((()=>[_(c),_(b,null,{default:w((()=>[$(e.$slots,"home")])),_:3})])),_:3})])),_:3})):(m(),h(p,{key:3},{default:w((()=>[_(r,{width:"80px"},{default:w((()=>[_(o,{showLogo:!0,collapse:!0})])),_:1}),_(p,null,{default:w((()=>[_(d,null,{default:w((()=>[_(i)])),_:1}),_(c),_(b,null,{default:w((()=>[$(e.$slots,"home")])),_:3})])),_:3})])),_:3}))};const rl={name:"Home",setup:()=>({value:P(!0)})};b("data-v-549d0c22");const il=y("span",{class:"left"},"访问数",-1),dl=y("span",{class:"right card-header-label green"},"年",-1),cl=y("div",{class:"card-body"},[y("span",{class:"num"},"64353"),y("div",{class:"flex-justify-between bottom"},[y("span",null,"总访问数"),y("span",null,"265432")])],-1),ul=y("span",{class:"left"},"下载量",-1),ml=y("span",{class:"right card-header-label blue"},"月",-1),hl=y("div",{class:"card-body"},[y("span",{class:"num"},"2542"),y("div",{class:"flex-justify-between bottom"},[y("span",null,"总下载量"),y("span",null,"14365")])],-1),bl=y("span",{class:"left"},"成交数",-1),pl=y("span",{class:"right card-header-label orange"},"周",-1),fl=y("div",{class:"card-body"},[y("span",{class:"num"},"1434"),y("div",{class:"flex-justify-between bottom"},[y("span",null,"总成交数"),y("span",null,"1455")])],-1),vl=y("span",{class:"left"},"收藏数",-1),gl=y("span",{class:"right card-header-label purple"},"日",-1),Cl=y("div",{class:"card-body"},[y("span",{class:"num"},"4692"),y("div",{class:"flex-justify-between bottom"},[y("span",null,"总收藏数"),y("span",null,"87491")])],-1),wl=y("div",{class:"details"},[y("span",null,"技术栈："),I(" vue3.x + vite2.x + vuex4.x + vue-router4.x + element Plus1.x ")],-1),yl=y("div",{class:"details"},[y("span",null,"特 点："),I(" 一键换肤，自定义颜色换肤，多种布局方式，上手及其简单 ")],-1),_l=y("div",{class:"details"},[y("span",null,"作 者："),I(" wuufeii ")],-1),kl=y("div",{class:"details"},[y("span",null,"github："),y("a",{href:"https://www.github.com/wuufeii",target:"_blank"}," https://www.github.com/wuufeii ")],-1),Tl=y("div",{class:"details"},[y("span",null,"博 客："),y("a",{href:"https://wuufeii.github.io",target:"_blank"}," https://wuufeii.github.io ")],-1);p(),rl.render=function(e,l,t,n,a,s){const o=u("el-card"),r=u("el-col"),i=u("el-row");return m(),k(F,null,[_(i,{gutter:16},{default:w((()=>[_(r,{xs:24,sm:12,md:6},{default:w((()=>[_(o,{shadow:"never"},{header:w((()=>[il,dl])),default:w((()=>[cl])),_:1})])),_:1}),_(r,{xs:24,sm:12,md:6},{default:w((()=>[_(o,{shadow:"never"},{header:w((()=>[ul,ml])),default:w((()=>[hl])),_:1})])),_:1}),_(r,{xs:24,sm:12,md:6},{default:w((()=>[_(o,{shadow:"never"},{header:w((()=>[bl,pl])),default:w((()=>[fl])),_:1})])),_:1}),_(r,{xs:24,sm:12,md:6},{default:w((()=>[_(o,{shadow:"never"},{header:w((()=>[vl,gl])),default:w((()=>[Cl])),_:1})])),_:1})])),_:1}),_(i,null,{default:w((()=>[_(r,{span:24},{default:w((()=>[_(o,{shadow:"never"},{default:w((()=>[wl,yl,_l,kl,Tl])),_:1})])),_:1})])),_:1})],64)},rl.__scopeId="data-v-549d0c22";var Sl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rl});const Fl={components:{Layout:sl,Home:rl}};Fl.render=function(e,l,t,n,a,s){const o=u("home"),r=u("layout");return m(),h(r,null,{home:w((()=>[_(o)])),_:1})};const Ll=[{path:"/",component:Fl,children:[{path:"home",name:"Home",component:()=>{return e=()=>Promise.resolve().then((function(){return Sl})),(l=[])&&0!==l.length?Promise.all(l.map((e=>{if((e=`./${e}`)in Y)return;Y[e]=!0;const l=e.endsWith(".css"),t=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=l?"stylesheet":"modulepreload",l||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),l?new Promise(((e,l)=>{n.addEventListener("load",e),n.addEventListener("error",l)})):void 0}))).then((()=>e())):e();var e,l}}]}],Il=z({history:H(),routes:Ll});var xl=J({state:{navbarType:null!=(l=null==(e=le())?void 0:e.navbarType)?l:"左侧菜单模式",isCollapse:!1,activeMenu:""},mutations:{getNavbarType(e,l){e.navbarType=l},getCollapse(e,l){e.isCollapse=l},getActiveMenu(e,l){e.activeMenu=l}},actions:{},modules:{}});const Ml=["xlink:href"],El={props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const l=e,t=x((()=>`#icon-${l.name}`)),n=x((()=>l.name?`svg-icon icon-${l.name}`:"svg-icon"));return(l,a)=>(m(),k("svg",K({class:W(n)},l.$attrs,{style:{color:e.color}}),[y("use",{"xlink:href":W(t)},null,8,Ml)],16))}};let Nl=X(Q);Nl.use(xl),Nl.use(Il),Nl.use(G),Nl.component("SvgIcon",El),Nl.mount("#app");
