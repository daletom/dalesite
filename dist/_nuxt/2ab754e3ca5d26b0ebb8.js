(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{239:function(e,t,n){var content=n(253);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("59ec5b8b",content,!0,{sourceMap:!1})},251:function(e,t){var n=function(){var e,t,n,o,l,r,d,c,m,h,v,y,f,w;function E(){c.play(),c.requestFullscreen?c.requestFullscreen():c.webkitRequestFullscreen?c.webkitRequestFullscreen():c.mozRequestFullScreen?c.mozRequestFullScreen():c.msRequestFullscreen&&c.msRequestFullscreen()}function x(e){if(e.preventDefault(),w){var t=this.dataset.videoLink;if(void 0===t)return;if(window.is_mobile)c.children[0].src=t,c.load(),E();else{if(void 0===(source=document.getElementById("vplayer-video").getElementsByTagName("source")[0])){var n=document.createElement("source");n.src=t,r.appendChild(n)}else source.src=t,r.load();I()}}else if(f||(document.getElementsByTagName("body")[0].style.overflow="hidden"),window.is_mobile)E();else if(I(),h)setTimeout((function(){F()}),1);else if(0==m){var source=document.getElementById("vplayer-video-mobile").getElementsByTagName("source")[0];r.appendChild(source),r.load(),m=!0}}function F(){var e,t;R((e=window.innerWidth/window.innerHeight,t={},d>e?(t.width=window.innerWidth-2*y.horizontal,t.height=t.width/d):(t.height=window.innerHeight-2*y.vertical,t.width=t.height*d),t))}function I(){e.style.display="block",t.style.display="block",R(v),r.play()}function R(e){var d=parseInt(e.width),c=parseInt(e.height),m=(window.innerWidth-d)/2,h=(window.innerHeight-c)/2;t.style.width=d+"px",t.style.height=c+"px",t.style.left=m+"px",t.style.top=h+"px",n.style.left=d-o+"px",n.style.top="-"+l+"px",r.width=d+"px",r.height=c+"px"}function k(){e=document.getElementById("vplayer-overlay"),t=document.getElementById("vplayer-modal"),n=document.getElementById("vplayer-close-btn"),r=document.getElementById("vplayer-video"),o=13,l=13,r.addEventListener("loadedmetadata",(function(){d=r.videoWidth/r.videoHeight,F(),h=!0}),!1);var c=[n,e];for(var m in[n,e])c[m].addEventListener("click",(function(){document.getElementsByTagName("body")[0].style.overflow="scroll",e.style.display="none",t.style.display="none",r.pause(),r.currentTime=0}));window.addEventListener("resize",(function(){F()}))}return{setup:function(e){var t=document.querySelectorAll("a.vplayer-popup");if(w=e||!1,t.length>0){for(var i=0;i<t.length;i++)t[i].addEventListener("click",x,!1);return!function(){var e=navigator.userAgent.toLowerCase(),t=!0,n="desktop";if(e.match(/iPad/i)?(n=e.match(/7./)?"iPad 7.0":"iPad",t=!1):e.match(/iPhone/i)?n="iPhone":e.match(/android/)?n="android":e.match(/Windows Phone|IEMobile|Windows CE|Windows Mobile/i)?n="windows phone":t=!1,f=!1,"iPhone"==n||"iPad"==n){var o=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);"9"==[parseInt(o[1],10),parseInt(o[2],10),parseInt(o[3]||0,10)][0]&&(f=!0)}return window.is_mobile=t,window.device_type=n,t}()?k():function(){c=document.getElementById("vplayer-video-mobile");var e=["webkitfullscreenchange","mozfullscreenchange","fullscreenchange","webkitendfullscreen"];for(var t in e)c.addEventListener(e[t],(function(e){document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen||document.msFullScreen||(c.pause(),c.currentTime=0)}))}(),m=!1,h=!1,v={width:450,height:250},y={horizontal:80,vertical:50},this}return null},setPadding:function(e,t){return y.horizontal=e,y.vertical=t,this},setInitialSize:function(e,t){return v.width=e,v.height=t,this},setTransitionTime:function(e){var o="width "+e+"ms, height "+e+"ms, left "+e+"ms, top "+e+"ms";return t.style.transition=o,n.style.transition=o,r.style.transition=o,this},fit:F}}.call(this);window.vplayer=n},252:function(e,t,n){"use strict";var o=n(239);n.n(o).a},253:function(e,t,n){(t=n(40)(!1)).push([e.i,".player{width:400px;margin:0 auto;min-height:30px}",""]),e.exports=t},262:function(e,t,n){"use strict";n.r(t);var o=n(147),l=n(251),r=n.n(l),d={components:{aplayer:o.aplayer,vplayer:r.a},data:function(){return{aOption:{type:"video",src:"https://stream.mux.com/GvgMD02G02mv0200fDiP71cLF9RrbRlEq8V9.m3u8",preload:!0,autoplay:!0,isLoop:!1,poster:"https://images.mux.com/GvgMD02G02mv0200fDiP71cLF9RrbRlEq8V9/thumbnail.jpg?",playsinline:!0,title:"Will add",controls:"progress,durration,volume"},vOption:{type:"video",src:"https://stream.mux.com/GvgMD02G02mv0200fDiP71cLF9RrbRlEq8V9.m3u8",preload:!0,autoplay:!0,isLoop:!1,poster:"https://images.mux.com/GvgMD02G02mv0200fDiP71cLF9RrbRlEq8V9/thumbnail.jpg?",playsinline:!0,title:"will add",controls:"progress,durration,volume"}}},methods:{play:function(e){alert("play now")},pause:function(e){alert("pause now")}}},c=(n(252),n(32)),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("h2",[e._v("Vue Video")]),e._v(" "),n("aplayer",{attrs:{"player-options":e.aOption},on:{onplay:e.play,onpause:e.pause}}),e._v(" "),n("vplayer",{attrs:{"player-options":e.vOption},on:{onplay:e.play,onpause:e.pause}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);