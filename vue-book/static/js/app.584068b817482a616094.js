webpackJsonp([4],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),r={name:"App",created:function(){var e=navigator.userAgent.toLowerCase(),t="ipad"==e.match(/ipad/i),n="iphone os"==e.match(/iphone os/i),i="midp"==e.match(/midp/i),r="rv:1.2.3.4"==e.match(/rv:1.2.3.4/i),a="ucweb"==e.match(/ucweb/i),o="android"==e.match(/android/i),c="windows ce"==e.match(/windows ce/i),d="windows mobile"==e.match(/windows mobile/i);(t||n||i||r||a||o||c||d)&&(console.log("sg"),document.write("<link href=./static/css/viewport.css rel=stylesheet>"))}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(e){n("rq8g")},null,null).exports,c=n("/ocq");i.a.use(c.a);var d=new c.a({routes:[{path:"/",name:"Home",component:function(){return n.e(0).then(n.bind(null,"lyB/"))},children:[{path:"/test",name:"First",component:function(){return n.e(1).then(n.bind(null,"DMN8"))}}]},{path:"*",name:"404",component:function(){return n.e(2).then(n.bind(null,"HLcy"))}}]});n("j1ja"),n("ehon");i.a.config.productionTip=!1,new i.a({el:"#app",router:d,components:{App:o},template:"<App/>"})},ehon:function(e,t){!function(e,t){"use strict";var n={};!function(){var i=t.querySelector('meta[name="viewport"]'),r=t.querySelector('meta[name="hotcss"]'),a=e.devicePixelRatio||1,o=540,c=0;if(a=a>=3?3:a>=2?2:1,r){var d=r.getAttribute("content");if(d){var s=d.match(/initial\-dpr=([\d\.]+)/);s&&(a=parseFloat(s[1]));var m=d.match(/max\-width=([\d\.]+)/);m&&(o=parseFloat(m[1]));var u=d.match(/design\-width=([\d\.]+)/);u&&(c=parseFloat(u[1]))}}t.documentElement.setAttribute("data-dpr",a),n.dpr=a,t.documentElement.setAttribute("max-width",o),n.maxWidth=o,c&&t.documentElement.setAttribute("design-width",c),n.designWidth=c;var l=1/a,p="width=device-width, initial-scale="+l+", minimum-scale="+l+", maximum-scale="+l+", user-scalable=no";i?i.setAttribute("content",p):((i=t.createElement("meta")).setAttribute("name","viewport"),i.setAttribute("content",p),t.head.appendChild(i))}(),n.px2rem=function(e,t){return t||(t=parseInt(n.designWidth,10)),320*parseInt(e,10)/t/20},n.rem2px=function(e,t){return t||(t=parseInt(n.designWidth,10)),20*e*t/320},n.mresize=function(){var i=t.documentElement.getBoundingClientRect().width||e.innerWidth;if(n.maxWidth&&i/n.dpr>n.maxWidth&&(i=n.maxWidth*n.dpr),!i)return!1;t.documentElement.style.fontSize=20*i/320+"px",n.callback&&n.callback()},n.mresize(),e.addEventListener("resize",function(){clearTimeout(n.tid),n.tid=setTimeout(n.mresize,33)},!1),e.addEventListener("load",n.mresize,!1),setTimeout(function(){n.mresize()},333),e.hotcss=n}(window,document)},rq8g:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.584068b817482a616094.js.map