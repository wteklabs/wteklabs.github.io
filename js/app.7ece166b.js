webpackJsonp(["app"],{"./css/base.css":function(s,o){},"./css/main.css":function(s,o){},"./js/index.js":function(s,o,n){n("./js/main.js"),n("./css/base.css"),n("./css/main.css")},"./js/main.js":function(s,o,n){(function(s){n("../node_modules/smoothscroll-polyfill/dist/smoothscroll.js").polyfill(),function(s){"use strict";s(window).on("load",function(){s("#loader").fadeOut("slow",function(){s("#preloader").delay(300).fadeOut("slow")})}),s(".home-particles").particleground({dotColor:"#fff",lineColor:"#555555",particleRadius:6,curveLines:!0,density:1e4,proximity:110}),s(".smoothscroll").on("click",function(s){s.preventDefault();const o=this.hash;document.querySelector(o).scrollIntoView({behavior:"smooth"})})}(s)}).call(o,n("../node_modules/jquery/dist/jquery.js"))},1:function(s,o,n){s.exports=n("./js/index.js")}},[1]);
//# sourceMappingURL=app.7ece166b.js.map