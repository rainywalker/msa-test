"use strict";

webpackJsonp([1], { "7n2n": function n2n(t, e) {}, Ahw6: function Ahw6(t, e) {}, NHnr: function NHnr(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i = n("7+uW"),
        r = { render: function render() {
        var t = this.$createElement,
            e = this._self._c || t;return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
      }, staticRenderFns: [] };var a = n("VU/8")({ name: "app" }, r, !1, function (t) {
      n("dxVl");
    }, null, null).exports,
        s = n("/ocq"),
        o = { name: "index-page", created: function created() {
        var t = this;this.$http.get("/api/movies").then(function (e) {
          t.movies = e.data;
        });
      }, data: function data() {
        return { movies: [] };
      }, methods: { go: function go() {
          var t = { name: this.$refs.name.value, year: this.$refs.year.value, director: this.$refs.director.value, poster: this.$refs.poster.value };this.$http.post("/api/movies", t).then(function (t) {
            console.log(t), alert("완료");
          }).catch(function (t) {
            console.log(t);
          });
        } } },
        c = { render: function render() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e;return n("div", { staticClass: "movies" }, [n("div", [n("h1", [t._v("Movie Test22222")]), t._v(" "), t._l(t.movies, function (e) {
          return n("div", { staticClass: "movie" }, [n("img", { staticClass: "poster", attrs: { src: e.poster } }), t._v(" "), n("div", [n("strong", [t._v(t._s(e.name))]), t._v(", "), n("i", [t._v(t._s(e.director))]), t._v(" [" + t._s(e.year) + "]\n                "), n("router-link", { attrs: { to: { name: "show", params: { id: e.id } } } }, [t._v("더보기")])], 1)]);
        })], 2), t._v(" "), n("fieldset", { staticClass: "ipt" }, [n("legend", [t._v("insert")]), t._v(" "), n("ul", [n("li", [t._v("name "), n("input", { ref: "name", attrs: { type: "text" } })]), t._v(" "), n("li", [t._v("year "), n("input", { ref: "year", attrs: { type: "text" } })]), t._v(" "), n("li", [t._v("director "), n("input", { ref: "director", attrs: { type: "text" } })]), t._v(" "), n("li", [t._v("poster "), n("input", { ref: "poster", attrs: { type: "text" } })])]), t._v(" "), n("button", { attrs: { type: "button" }, on: { click: t.go } }, [t._v("Submit")])])]);
      }, staticRenderFns: [] };var v = n("VU/8")(o, c, !1, function (t) {
      n("Ahw6");
    }, "data-v-e685577c", null).exports,
        u = { render: function render() {
        this.$createElement;this._self._c;return this._m(0);
      }, staticRenderFns: [function () {
        var t = this.$createElement,
            e = this._self._c || t;return e("div", [e("h1", [this._v("상세내용")])]);
      }] };var p = n("VU/8")({ name: "show-page", created: function created() {
        var t = this,
            e = this.$route.params.id;this.$http.get("/api/movies/" + e).then(function (e) {
          t.movie = e.data;
        });
      }, data: function data() {
        return { movie: {} };
      } }, u, !1, function (t) {
      n("7n2n");
    }, "data-v-709c5992", null).exports;i.a.use(s.a);var l = new s.a({ mode: "history", routes: [{ path: "/", name: "index", component: v }, { path: "/:id", name: "show", component: p }] }),
        d = n("mtWM"),
        h = n.n(d);i.a.config.productionTip = !1, i.a.prototype.$http = h.a, new i.a({ el: "#app", router: l, template: "<App/>", components: { App: a } });
  }, dxVl: function dxVl(t, e) {} }, ["NHnr"]);
//# sourceMappingURL=app.8ec1db872b7aedf22304.js.map