webpackJsonp([1],{"7n2n":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"app"},i,!1,function(t){n("dxVl")},null,null).exports,s=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},[n("h1",[t._v("Movie Test22222")]),t._v(" "),t._l(t.movies,function(e){return n("div",{staticClass:"movie"},[n("img",{staticClass:"poster",attrs:{src:e.poster}}),t._v(" "),n("div",[n("strong",[t._v(t._s(e.name))]),t._v(", "),n("i",[t._v(t._s(e.director))]),t._v(" ["+t._s(e.year)+"]\n            "),n("router-link",{attrs:{to:{name:"show",params:{id:e.id}}}},[t._v("더보기")])],1)])})],2)},staticRenderFns:[]};var c=n("VU/8")({name:"index-page",created:function(){var t=this;this.$http.get("/api/movies").then(function(e){t.movies=e.data})},data:function(){return{movies:[]}}},o,!1,function(t){n("WaNd")},"data-v-1e9b434a",null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("상세내용")])])}]};var v=n("VU/8")({name:"show-page",created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data})},data:function(){return{movie:{}}}},u,!1,function(t){n("7n2n")},"data-v-709c5992",null).exports;a.a.use(s.a);var p=new s.a({mode:"history",routes:[{path:"/",name:"index",component:c},{path:"/:id",name:"show",component:v}]}),d=n("mtWM"),m=n.n(d);a.a.config.productionTip=!1,a.a.prototype.$http=m.a,new a.a({el:"#app",router:p,template:"<App/>",components:{App:r}})},WaNd:function(t,e){},dxVl:function(t,e){}},["NHnr"]);