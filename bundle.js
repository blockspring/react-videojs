!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/example/",t(0)}([function(e,t,r){"use strict";var n=r(2),o=r(8),s=r(6),a=r(7),i=n.createClass({displayName:"App",handlePlay:function(e){console.log("onPlay",e)},render:function(){return n.createElement("div",{className:"app"},n.createElement("h1",null,a.name),n.createElement("h2",null,a.description),n.createElement(s,{src:"http://www.w3schools.com/html/mov_bbb.mp4",type:"video/mp4",onPlay:this.handlePlay}))}});o.render(n.createElement(i,null),document.getElementById("app"))},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t){e.exports=React},function(e,t){"use strict";e.exports=function(e){var t={},r=arguments[1];if("string"==typeof r){r={};for(var n=1;n<arguments.length;n++)r[arguments[n]]=!0}for(var o in e)r[o]||(t[o]=e[o]);return t}},function(e,t,r){function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var o;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o="undefined"==typeof r?"undefined":n(r);if("string"===o||"number"===o)e+=" "+r;else if(Array.isArray(r))e+=" "+s.apply(null,r);else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&(e+=" "+i)}}return e.substr(1)}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=s:"object"===n(r(1))&&r(1)?(o=function(){return s}.call(t,r,t,e),!(void 0!==o&&(e.exports=o))):window.classNames=s}()},function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=Object.assign||function(e,t){for(var s,a,i=r(e),c=1;c<arguments.length;c++){s=Object(arguments[c]);for(var p in s)n.call(s,p)&&(i[p]=s[p]);if(Object.getOwnPropertySymbols){a=Object.getOwnPropertySymbols(s);for(var l=0;l<a.length;l++)o.call(s,a[l])&&(i[a[l]]=s[a[l]])}}return i}},function(e,t,r){"use strict";var n=r(5),o=r(4),s=r(3),a=r(2);e.exports=a.createClass({displayName:"VideoJS",componentDidMount:function(){var e=this,t=videojs(this.refs.video,this.props.options).ready(function(){e.player=this,e.player.on("play",e.handlePlay)});this.props.onPlayerInit&&this.props.onPlayerInit(t)},handlePlay:function(){this.props.onPlay&&this.props.onPlay(this.player)},render:function(){var e=s(this.props,"children","className","src","type","onPlay");return e.className=o(this.props.className,"videojs","video-js vjs-default-skin"),n(e,{ref:"video",controls:!0}),a.createElement("div",null,a.createElement("video",e,a.createElement("source",{src:this.props.src,type:this.props.type})))}})},function(e,t){e.exports={name:"react-videojs",version:"0.0.1",description:"react videojs wrapper",main:"index.js",scripts:{start:"webpack-dev-server -c --port=7788",build:"babel src --out-dir dist && webpack -p",deploy:"npm run build && github-pages-deploy",test:'echo "Error: no test specified" && exit 1'},"github-pages-deploy":{src:"example"},repository:{type:"git",url:"git+https://github.com/esportsguy/react-videojs.git"},peerDependencies:{react:"^0.14.0","react-dom":"^0.14.0"},keywords:["react-component","videojs","video","react"],author:"Wang Zuo",license:"ISC",bugs:{url:"https://github.com/esportsguy/react-videojs/issues"},homepage:"https://github.com/esportsguy/react-videojs#readme",dependencies:{blacklist:"^1.1.2",classnames:"^2.2.0","object-assign":"^4.0.1"},devDependencies:{"babel-core":"^6.2.1","babel-loader":"^6.2.0","babel-preset-es2015":"^6.1.18","babel-preset-react":"^6.1.18","github-pages-deploy":"0.0.3","json-loader":"^0.5.3",webpack:"^1.12.8"}}},function(e,t){e.exports=ReactDOM}]);
//# sourceMappingURL=bundle.js.map