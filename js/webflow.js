/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (t) {
    var e = {};

    function r(i) {
        if (e[i]) return e[i].exports;
        var n = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = t, r.c = e, r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) r.d(i, n, function (e) {
                return t[e]
            }.bind(null, n));
        return i
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 92)
}([function (t, e, r) {
    var i = r(5),
        n = r(82).f,
        s = r(15),
        a = r(83),
        o = r(48),
        h = r(193),
        l = r(197);
    t.exports = function (t, e) {
        var r, p, c, f, u, m = t.target,
            d = t.global,
            y = t.stat;
        if (r = d ? i : y ? i[m] || o(m, {}) : (i[m] || {}).prototype)
            for (p in e) {
                if (f = e[p], c = t.noTargetGet ? (u = n(r, p)) && u.value : r[p], !l(d ? p : m + (y ? "." : "#") + p, t.forced) && void 0 !== c) {
                    if (typeof f == typeof c) continue;
                    h(f, c)
                }(t.sham || c && c.sham) && s(f, "sham", !0), a(r, p, f, t)
            }
    }
}, function (t, e, r) {
    var i = r(19),
        n = Math.min;
    t.exports = function (t) {
        return t > 0 ? n(i(t), 9007199254740991) : 0
    }
}, function (t, e, r) {
    var i = r(46);
    t.exports = function (t) {
        return Object(i(t))
    }
}, function (t, e, r) {
    var i = r(5),
        n = r(38),
        s = r(80),
        a = r(200),
        o = i.Symbol,
        h = n("wks");
    t.exports = function (t) {
        return h[t] || (h[t] = a && o[t] || (a ? o : s)("Symbol." + t))
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e, r) {
    (function (e) {
        var r = "object",
            i = function (t) {
                return t && t.Math == Math && t
            };
        t.exports = i(typeof globalThis == r && globalThis) || i(typeof window == r && window) || i(typeof self == r && self) || i(typeof e == r && e) || Function("return this")()
    }).call(this, r(63))
}, function (t, e, r) {
    var i = r(3),
        n = r(88),
        s = r(15),
        a = i("unscopables"),
        o = Array.prototype;
    null == o[a] && s(o, a, n(null)), t.exports = function (t) {
        o[a][t] = !0
    }
}, function (t, e, r) {
    var i = r(62),
        n = "object" == typeof self && self && self.Object === Object && self,
        s = i || n || Function("return this")();
    t.exports = s
}, function (t, e, r) {
    "use strict";
    var i = r(4);
    t.exports = function (t, e) {
        var r = [][t];
        return !r || !i(function () {
            r.call(null, e || function () {
                throw 1
            }, 1)
        })
    }
}, function (t, e) {
    var r = Array.isArray;
    t.exports = r
}, function (t, e, r) {
    var i = r(4);
    t.exports = !i(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, r) {
    var i = r(10),
        n = r(78),
        s = r(20),
        a = r(49),
        o = Object.defineProperty;
    e.f = i ? o : function (t, e, r) {
        if (s(t), e = a(e, !0), s(r), n) try {
            return o(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
        return "value" in r && (t[e] = r.value), t
    }
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return r.call(t, e)
    }
}, function (t, e, r) {
    "use strict";
    var i = {},
        n = {},
        s = [],
        a = window.Webflow || [],
        o = window.jQuery,
        h = o(window),
        l = o(document),
        p = o.isFunction,
        c = i._ = r(94),
        f = i.tram = r(58) && o.tram,
        u = !1,
        m = !1;

    function d(t) {
        i.env() && (p(t.design) && h.on("__wf_design", t.design), p(t.preview) && h.on("__wf_preview", t.preview)), p(t.destroy) && h.on("__wf_destroy", t.destroy), t.ready && p(t.ready) && function (t) {
            if (u) return void t.ready();
            if (c.contains(s, t.ready)) return;
            s.push(t.ready)
        }(t)
    }

    function y(t) {
        p(t.design) && h.off("__wf_design", t.design), p(t.preview) && h.off("__wf_preview", t.preview), p(t.destroy) && h.off("__wf_destroy", t.destroy), t.ready && p(t.ready) && function (t) {
            s = c.filter(s, function (e) {
                return e !== t.ready
            })
        }(t)
    }
    f.config.hideBackface = !1, f.config.keepInherited = !0, i.define = function (t, e, r) {
        n[t] && y(n[t]);
        var i = n[t] = e(o, c, r) || {};
        return d(i), i
    }, i.require = function (t) {
        return n[t]
    }, i.push = function (t) {
        u ? p(t) && t() : a.push(t)
    }, i.env = function (t) {
        var e = window.__wf_design,
            r = void 0 !== e;
        return t ? "design" === t ? r && e : "preview" === t ? r && !e : "slug" === t ? r && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : r
    };
    var g, v = navigator.userAgent.toLowerCase(),
        b = i.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        x = i.env.chrome = /chrome/.test(v) && /Google/.test(navigator.vendor) && parseInt(v.match(/chrome\/(\d+)\./)[1], 10),
        E = i.env.ios = /(ipod|iphone|ipad)/.test(v);
    i.env.safari = /safari/.test(v) && !x && !E, b && l.on("touchstart mousedown", function (t) {
        g = t.target
    }), i.validClick = b ? function (t) {
        return t === g || o.contains(t, g)
    } : function () {
        return !0
    };
    var _, w = "resize.webflow orientationchange.webflow load.webflow";

    function S(t, e) {
        var r = [],
            i = {};
        return i.up = c.throttle(function (t) {
            c.each(r, function (e) {
                e(t)
            })
        }), t && e && t.on(e, i.up), i.on = function (t) {
            "function" == typeof t && (c.contains(r, t) || r.push(t))
        }, i.off = function (t) {
            r = arguments.length ? c.filter(r, function (e) {
                return e !== t
            }) : []
        }, i
    }

    function P(t) {
        p(t) && t()
    }

    function A() {
        _ && (_.reject(), h.off("load", _.resolve)), _ = new o.Deferred, h.on("load", _.resolve)
    }
    i.resize = S(h, w), i.scroll = S(h, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), i.redraw = S(), i.location = function (t) {
        window.location = t
    }, i.env() && (i.location = function () {}), i.ready = function () {
        u = !0, m ? (m = !1, c.each(n, d)) : c.each(s, P), c.each(a, P), i.resize.up()
    }, i.load = function (t) {
        _.then(t)
    }, i.destroy = function (t) {
        t = t || {}, m = !0, h.triggerHandler("__wf_destroy"), null != t.domready && (u = t.domready), c.each(n, y), i.resize.off(), i.scroll.off(), i.redraw.off(), s = [], a = [], "pending" === _.state() && A()
    }, o(i.ready), A(), t.exports = window.Webflow = i
}, function (t, e, r) {
    var i = r(10),
        n = r(11),
        s = r(39);
    t.exports = i ? function (t, e, r) {
        return n.f(t, e, s(1, r))
    } : function (t, e, r) {
        return t[e] = r, t
    }
}, function (t, e, r) {
    var i = r(40),
        n = r(46);
    t.exports = function (t) {
        return i(n(t))
    }
}, function (t, e, r) {
    var i = r(57),
        n = r(40),
        s = r(2),
        a = r(1),
        o = r(27),
        h = [].push,
        l = function (t) {
            var e = 1 == t,
                r = 2 == t,
                l = 3 == t,
                p = 4 == t,
                c = 6 == t,
                f = 5 == t || c;
            return function (u, m, d, y) {
                for (var g, v, b = s(u), x = n(b), E = i(m, d, 3), _ = a(x.length), w = 0, S = y || o, P = e ? S(u, _) : r ? S(u, 0) : void 0; _ > w; w++)
                    if ((f || w in x) && (v = E(g = x[w], w, b), t))
                        if (e) P[w] = v;
                        else if (v) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return g;
                    case 6:
                        return w;
                    case 2:
                        h.call(P, g)
                } else if (p) return !1;
                return c ? -1 : l || p ? p : P
            }
        };
    t.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6)
    }
}, function (t, e, r) {
    var i = r(116),
        n = r(121);
    t.exports = function (t, e) {
        var r = n(t, e);
        return i(r) ? r : void 0
    }
}, function (t, e) {
    var r = Math.ceil,
        i = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : r)(t)
    }
}, function (t, e, r) {
    var i = r(12);
    t.exports = function (t) {
        if (!i(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function (t, e, r) {
    var i = r(53);
    t.exports = Array.isArray || function (t) {
        return "Array" == i(t)
    }
}, function (t, e, r) {
    var i = r(32),
        n = r(117),
        s = r(118),
        a = "[object Null]",
        o = "[object Undefined]",
        h = i ? i.toStringTag : void 0;
    t.exports = function (t) {
        return null == t ? void 0 === t ? o : a : h && h in Object(t) ? n(t) : s(t)
    }
}, function (t, e) {
    t.exports = function (t) {
        return null != t && "object" == typeof t
    }
}, function (t, e, r) {
    var i = r(19),
        n = Math.max,
        s = Math.min;
    t.exports = function (t, e) {
        var r = i(t);
        return r < 0 ? n(r + e, 0) : s(r, e)
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e, r) {
    "use strict";
    var i = r(49),
        n = r(11),
        s = r(39);
    t.exports = function (t, e, r) {
        var a = i(e);
        a in t ? n.f(t, a, s(0, r)) : t[a] = r
    }
}, function (t, e, r) {
    var i = r(12),
        n = r(21),
        s = r(3)("species");
    t.exports = function (t, e) {
        var r;
        return n(t) && ("function" != typeof (r = t.constructor) || r !== Array && !n(r.prototype) ? i(r) && null === (r = r[s]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
    }
}, function (t, e, r) {
    var i = r(4),
        n = r(3)("species");
    t.exports = function (t) {
        return !i(function () {
            var e = [];
            return (e.constructor = {})[n] = function () {
                return {
                    foo: 1
                }
            }, 1 !== e[t](Boolean).foo
        })
    }
}, function (t, e) {
    t.exports = function (t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function (t, e, r) {
    var i = r(106),
        n = r(107),
        s = r(108),
        a = r(109),
        o = r(110);

    function h(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }
    h.prototype.clear = i, h.prototype.delete = n, h.prototype.get = s, h.prototype.has = a, h.prototype.set = o, t.exports = h
}, function (t, e, r) {
    var i = r(60);
    t.exports = function (t, e) {
        for (var r = t.length; r--;)
            if (i(t[r][0], e)) return r;
        return -1
    }
}, function (t, e, r) {
    var i = r(7).Symbol;
    t.exports = i
}, function (t, e) {
    t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function (t, e, r) {
    var i = r(18)(Object, "create");
    t.exports = i
}, function (t, e, r) {
    var i = r(130);
    t.exports = function (t, e) {
        var r = t.__data__;
        return i(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
    }
}, function (t, e, r) {
    var i = r(22),
        n = r(23),
        s = "[object Symbol]";
    t.exports = function (t) {
        return "symbol" == typeof t || n(t) && i(t) == s
    }
}, function (t, e, r) {
    var i = r(36),
        n = 1 / 0;
    t.exports = function (t) {
        if ("string" == typeof t || i(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -n ? "-0" : e
    }
}, function (t, e, r) {
    var i = r(5),
        n = r(48),
        s = r(50),
        a = i["__core-js_shared__"] || n("__core-js_shared__", {});
    (t.exports = function (t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.1.3",
        mode: s ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e) {
    t.exports = function (t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function (t, e, r) {
    var i = r(4),
        n = r(53),
        s = "".split;
    t.exports = i(function () {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function (t) {
        return "String" == n(t) ? s.call(t, "") : Object(t)
    } : Object
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function (t, e, r) {
    var i = r(18)(r(7), "Map");
    t.exports = i
}, function (t, e, r) {
    var i = r(122),
        n = r(129),
        s = r(131),
        a = r(132),
        o = r(133);

    function h(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }
    h.prototype.clear = i, h.prototype.delete = n, h.prototype.get = s, h.prototype.has = a, h.prototype.set = o, t.exports = h
}, function (t, e) {
    var r = 9007199254740991;
    t.exports = function (t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
    }
}, function (t, e, r) {
    var i = r(9),
        n = r(36),
        s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function (t, e) {
        if (i(t)) return !1;
        var r = typeof t;
        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !n(t)) || a.test(t) || !s.test(t) || null != e && t in Object(e)
    }
}, function (t, e) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function (t, e, r) {
    var i, n, s, a = r(191),
        o = r(5),
        h = r(12),
        l = r(15),
        p = r(13),
        c = r(51),
        f = r(52),
        u = o.WeakMap;
    if (a) {
        var m = new u,
            d = m.get,
            y = m.has,
            g = m.set;
        i = function (t, e) {
            return g.call(m, t, e), e
        }, n = function (t) {
            return d.call(m, t) || {}
        }, s = function (t) {
            return y.call(m, t)
        }
    } else {
        var v = c("state");
        f[v] = !0, i = function (t, e) {
            return l(t, v, e), e
        }, n = function (t) {
            return p(t, v) ? t[v] : {}
        }, s = function (t) {
            return p(t, v)
        }
    }
    t.exports = {
        set: i,
        get: n,
        has: s,
        enforce: function (t) {
            return s(t) ? n(t) : i(t, {})
        },
        getterFor: function (t) {
            return function (e) {
                var r;
                if (!h(e) || (r = n(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return r
            }
        }
    }
}, function (t, e, r) {
    var i = r(5),
        n = r(15);
    t.exports = function (t, e) {
        try {
            n(i, t, e)
        } catch (r) {
            i[t] = e
        }
        return e
    }
}, function (t, e, r) {
    var i = r(12);
    t.exports = function (t, e) {
        if (!i(t)) return t;
        var r, n;
        if (e && "function" == typeof (r = t.toString) && !i(n = r.call(t))) return n;
        if ("function" == typeof (r = t.valueOf) && !i(n = r.call(t))) return n;
        if (!e && "function" == typeof (r = t.toString) && !i(n = r.call(t))) return n;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    t.exports = !1
}, function (t, e, r) {
    var i = r(38),
        n = r(80),
        s = i("keys");
    t.exports = function (t) {
        return s[t] || (s[t] = n(t))
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
        return r.call(t).slice(8, -1)
    }
}, function (t, e, r) {
    var i = r(84),
        n = r(5),
        s = function (t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function (t, e) {
        return arguments.length < 2 ? s(i[t]) || s(n[t]) : i[t] && i[t][e] || n[t] && n[t][e]
    }
}, function (t, e, r) {
    var i = r(16),
        n = r(1),
        s = r(24),
        a = function (t) {
            return function (e, r, a) {
                var o, h = i(e),
                    l = n(h.length),
                    p = s(a, l);
                if (t && r != r) {
                    for (; l > p;)
                        if ((o = h[p++]) != o) return !0
                } else
                    for (; l > p; p++)
                        if ((t || p in h) && h[p] === r) return t || p || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function (t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (t, e, r) {
    var i = r(41);
    t.exports = function (t, e, r) {
        if (i(t), void 0 === e) return t;
        switch (r) {
            case 0:
                return function () {
                    return t.call(e)
                };
            case 1:
                return function (r) {
                    return t.call(e, r)
                };
            case 2:
                return function (r, i) {
                    return t.call(e, r, i)
                };
            case 3:
                return function (r, i, n) {
                    return t.call(e, r, i, n)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e, r) {
    "use strict";
    var i = r(29)(r(95));
    window.tram = function (t) {
        function e(t, e) {
            return (new O.Bare).init(t, e)
        }

        function r(t) {
            return t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }

        function n(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function s(t, e, r) {
            return "#" + (1 << 24 | t << 16 | e << 8 | r).toString(16).slice(1)
        }

        function a() {}

        function o(t, e, r) {
            l("Units do not match [" + t + "]: " + e + ", " + r)
        }

        function h(t, e, r) {
            if (void 0 !== e && (r = e), void 0 === t) return r;
            var i = r;
            return Z.test(t) || !J.test(t) ? i = parseInt(t, 10) : J.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i == i ? i : r
        }

        function l(t) {
            W.debug && window && window.console.warn(t)
        }
        var p = function (t, e, r) {
                function n(t) {
                    return "object" == (0, i.default)(t)
                }

                function s(t) {
                    return "function" == typeof t
                }

                function a() {}
                return function i(o, h) {
                    function l() {
                        var t = new p;
                        return s(t.init) && t.init.apply(t, arguments), t
                    }

                    function p() {}
                    h === r && (h = o, o = Object), l.Bare = p;
                    var c, f = a[t] = o[t],
                        u = p[t] = l[t] = new a;
                    return u.constructor = l, l.mixin = function (e) {
                        return p[t] = l[t] = i(l, e)[t], l
                    }, l.open = function (t) {
                        if (c = {}, s(t) ? c = t.call(l, u, f, l, o) : n(t) && (c = t), n(c))
                            for (var r in c) e.call(c, r) && (u[r] = c[r]);
                        return s(u.init) || (u.init = o), l
                    }, l.open(h)
                }
            }("prototype", {}.hasOwnProperty),
            c = {
                ease: ["ease", function (t, e, r, i) {
                    var n = (t /= i) * t,
                        s = n * t;
                    return e + r * (-2.75 * s * n + 11 * n * n + -15.5 * s + 8 * n + .25 * t)
                }],
                "ease-in": ["ease-in", function (t, e, r, i) {
                    var n = (t /= i) * t,
                        s = n * t;
                    return e + r * (-1 * s * n + 3 * n * n + -3 * s + 2 * n)
                }],
                "ease-out": ["ease-out", function (t, e, r, i) {
                    var n = (t /= i) * t,
                        s = n * t;
                    return e + r * (.3 * s * n + -1.6 * n * n + 2.2 * s + -1.8 * n + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function (t, e, r, i) {
                    var n = (t /= i) * t,
                        s = n * t;
                    return e + r * (2 * s * n + -5 * n * n + 2 * s + 2 * n)
                }],
                linear: ["linear", function (t, e, r, i) {
                    return r * t / i + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, r, i) {
                    return r * (t /= i) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, r, i) {
                    return -r * (t /= i) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, r, i) {
                    return (t /= i / 2) < 1 ? r / 2 * t * t + e : -r / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, r, i) {
                    return r * (t /= i) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, r, i) {
                    return r * ((t = t / i - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, r, i) {
                    return (t /= i / 2) < 1 ? r / 2 * t * t * t + e : r / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, r, i) {
                    return r * (t /= i) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, r, i) {
                    return -r * ((t = t / i - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, r, i) {
                    return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + e : -r / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, r, i) {
                    return r * (t /= i) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, r, i) {
                    return r * ((t = t / i - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, r, i) {
                    return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + e : r / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, r, i) {
                    return -r * Math.cos(t / i * (Math.PI / 2)) + r + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, r, i) {
                    return r * Math.sin(t / i * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, r, i) {
                    return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, r, i) {
                    return 0 === t ? e : r * Math.pow(2, 10 * (t / i - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, r, i) {
                    return t === i ? e + r : r * (1 - Math.pow(2, -10 * t / i)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, r, i) {
                    return 0 === t ? e : t === i ? e + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + e : r / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, r, i) {
                    return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, r, i) {
                    return r * Math.sqrt(1 - (t = t / i - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, r, i) {
                    return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + e : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, r, i, n) {
                    return void 0 === n && (n = 1.70158), r * (t /= i) * t * ((n + 1) * t - n) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, r, i, n) {
                    return void 0 === n && (n = 1.70158), r * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, r, i, n) {
                    return void 0 === n && (n = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * ((1 + (n *= 1.525)) * t - n) + e : r / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
                }]
            },
            f = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            u = document,
            m = window,
            d = "bkwld-tram",
            y = /[\-\.0-9]/g,
            g = /[A-Z]/,
            v = "number",
            b = /^(rgb|#)/,
            x = /(em|cm|mm|in|pt|pc|px)$/,
            E = /(em|cm|mm|in|pt|pc|px|%)$/,
            _ = /(deg|rad|turn)$/,
            w = "unitless",
            S = /(all|none) 0s ease 0s/,
            P = /^(width|height)$/,
            A = " ",
            C = u.createElement("a"),
            k = ["Webkit", "Moz", "O", "ms"],
            T = ["-webkit-", "-moz-", "-o-", "-ms-"],
            M = function (t) {
                if (t in C.style) return {
                    dom: t,
                    css: t
                };
                var e, r, i = "",
                    n = t.split("-");
                for (e = 0; e < n.length; e++) i += n[e].charAt(0).toUpperCase() + n[e].slice(1);
                for (e = 0; e < k.length; e++)
                    if ((r = k[e] + i) in C.style) return {
                        dom: r,
                        css: T[e] + t
                    }
            },
            D = e.support = {
                bind: Function.prototype.bind,
                transform: M("transform"),
                transition: M("transition"),
                backface: M("backface-visibility"),
                timing: M("transition-timing-function")
            };
        if (D.transition) {
            var F = D.timing.dom;
            if (C.style[F] = c["ease-in-back"][0], !C.style[F])
                for (var I in f) c[I][0] = f[I]
        }
        var R = e.frame = function () {
                var t = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
                return t && D.bind ? t.bind(m) : function (t) {
                    m.setTimeout(t, 16)
                }
            }(),
            V = e.now = function () {
                var t = m.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && D.bind ? e.bind(t) : Date.now || function () {
                    return +new Date
                }
            }(),
            B = p(function (e) {
                function n(t, e) {
                    var r = function (t) {
                            for (var e = -1, r = t ? t.length : 0, i = []; ++e < r;) {
                                var n = t[e];
                                n && i.push(n)
                            }
                            return i
                        }(("" + t).split(A)),
                        i = r[0];
                    e = e || {};
                    var n = U[i];
                    if (!n) return l("Unsupported property: " + i);
                    if (!e.weak || !this.props[i]) {
                        var s = n[0],
                            a = this.props[i];
                        return a || (a = this.props[i] = new s.Bare), a.init(this.$el, r, n, e), a
                    }
                }

                function s(t, e, r) {
                    if (t) {
                        var s = (0, i.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == s && e) return this.timer = new H({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == s && e) {
                            switch (t) {
                                case "hide":
                                    p.call(this);
                                    break;
                                case "stop":
                                    o.call(this);
                                    break;
                                case "redraw":
                                    c.call(this);
                                    break;
                                default:
                                    n.call(this, t, r && r[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == s) return void t.call(this, this);
                        if ("object" == s) {
                            var l = 0;
                            u.call(this, t, function (t, e) {
                                t.span > l && (l = t.span), t.stop(), t.animate(e)
                            }, function (t) {
                                "wait" in t && (l = h(t.wait, 0))
                            }), f.call(this), l > 0 && (this.timer = new H({
                                duration: l,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var m = this,
                                d = !1,
                                y = {};
                            R(function () {
                                u.call(m, t, function (t) {
                                    t.active && (d = !0, y[t.name] = t.nextStyle)
                                }), d && m.$el.css(y)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        s.call(this, t.options, !0, t.args)
                    }
                }

                function o(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, i.default)(t) && null != t ? t : this.props, u.call(this, e, m), f.call(this)
                }

                function p() {
                    o.call(this), this.el.style.display = "none"
                }

                function c() {
                    this.el.offsetHeight
                }

                function f() {
                    var t, e, r = [];
                    for (t in this.upstream && r.push(this.upstream), this.props)(e = this.props[t]).active && r.push(e.string);
                    r = r.join(","), this.style !== r && (this.style = r, this.el.style[D.transition.dom] = r)
                }

                function u(t, e, i) {
                    var s, a, o, h, l = e !== m,
                        p = {};
                    for (s in t) o = t[s], s in K ? (p.transform || (p.transform = {}), p.transform[s] = o) : (g.test(s) && (s = r(s)), s in U ? p[s] = o : (h || (h = {}), h[s] = o));
                    for (s in p) {
                        if (o = p[s], !(a = this.props[s])) {
                            if (!l) continue;
                            a = n.call(this, s)
                        }
                        e.call(this, a, o)
                    }
                    i && h && i.call(this, h)
                }

                function m(t) {
                    t.stop()
                }

                function y(t, e) {
                    t.set(e)
                }

                function v(t) {
                    this.$el.css(t)
                }

                function b(t, r) {
                    e[t] = function () {
                        return this.children ? function (t, e) {
                            var r, i = this.children.length;
                            for (r = 0; i > r; r++) t.apply(this.children[r], e);
                            return this
                        }.call(this, r, arguments) : (this.el && r.apply(this, arguments), this)
                    }
                }
                e.init = function (e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, W.keepInherited && !W.fallback) {
                        var r = Y(this.el, "transition");
                        r && !S.test(r) && (this.upstream = r)
                    }
                    D.backface && W.hideBackface && $(this.el, D.backface.css, "hidden")
                }, b("add", n), b("start", s), b("wait", function (t) {
                    t = h(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new H({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), b("then", function (t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : l("No active transition timer. Use start() or wait() before then().")
                }), b("next", a), b("stop", o), b("set", function (t) {
                    o.call(this, t), u.call(this, t, y, v)
                }), b("show", function (t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), b("hide", p), b("redraw", c), b("destroy", function () {
                    o.call(this), t.removeData(this.el, d), this.$el = this.el = null
                })
            }),
            O = p(B, function (e) {
                function r(e, r) {
                    var i = t.data(e, d) || t.data(e, d, new B.Bare);
                    return i.el || i.init(e), r ? i.start(r) : i
                }
                e.init = function (e, i) {
                    var n = t(e);
                    if (!n.length) return this;
                    if (1 === n.length) return r(n[0], i);
                    var s = [];
                    return n.each(function (t, e) {
                        s.push(r(e, i))
                    }), this.children = s, this
                }
            }),
            L = p(function (t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function r(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? s(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var n = 500,
                    a = "ease",
                    o = 0;
                t.init = function (t, e, r, i) {
                    this.$el = t, this.el = t[0];
                    var s = e[0];
                    r[2] && (s = r[2]), X[s] && (s = X[s]), this.name = s, this.type = r[1], this.duration = h(e[1], this.duration, n), this.ease = function (t, e, r) {
                        return void 0 !== e && (r = e), t in c ? t : r
                    }(e[2], this.ease, a), this.delay = h(e[3], this.delay, o), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = P.test(this.name), this.unit = i.unit || this.unit || W.defaultUnit, this.angle = i.angle || this.angle || W.defaultAngle, W.fallback || i.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + c[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : ""))
                }, t.set = function (t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function (t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function (t) {
                    var r = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == r && (r = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new N({
                        from: r,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function () {
                    return Y(this.el, this.name)
                }, t.update = function (t) {
                    $(this.el, this.name, t)
                }, t.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, $(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function (t, e) {
                    if ("auto" == t && this.auto) return t;
                    var n, s = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case v:
                            if (s) return t;
                            if (a && "" === t.replace(y, "")) return +t;
                            n = "number(unitless)";
                            break;
                        case b:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : r(t)
                            }
                            n = "hex or rgb string";
                            break;
                        case x:
                            if (s) return t + this.unit;
                            if (a && e.test(t)) return t;
                            n = "number(px) or string(unit)";
                            break;
                        case E:
                            if (s) return t + this.unit;
                            if (a && e.test(t)) return t;
                            n = "number(px) or string(unit or %)";
                            break;
                        case _:
                            if (s) return t + this.angle;
                            if (a && e.test(t)) return t;
                            n = "number(deg) or string(angle)";
                            break;
                        case w:
                            if (s) return t;
                            if (a && E.test(t)) return t;
                            n = "number(unitless) or string(unit or %)"
                    }
                    return function (t, e) {
                        l("Type warning: Expected: [" + t + "] Got: [" + (0, i.default)(e) + "] " + e)
                    }(n, t), t
                }, t.redraw = function () {
                    this.el.offsetHeight
                }
            }),
            z = p(L, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
                }
            }),
            G = p(L, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function () {
                    return this.$el[this.name]()
                }, t.update = function (t) {
                    this.$el[this.name](t)
                }
            }),
            j = p(L, function (t, e) {
                function r(t, e) {
                    var r, i, n, s, a;
                    for (r in t) n = (s = K[r])[0], i = s[1] || r, a = this.convert(t[r], n), e.call(this, i, a, n)
                }
                t.init = function () {
                    e.init.apply(this, arguments), this.current || (this.current = {}, K.perspective && W.perspective && (this.current.perspective = W.perspective, $(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function (t) {
                    r.call(this, t, function (t, e) {
                        this.current[t] = e
                    }), $(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function (t) {
                    var e = this.values(t);
                    this.tween = new q({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var r, i = {};
                    for (r in this.current) i[r] = r in e ? e[r] : this.current[r];
                    this.active = !0, this.nextStyle = this.style(i)
                }, t.fallback = function (t) {
                    var e = this.values(t);
                    this.tween = new q({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function () {
                    $(this.el, this.name, this.style(this.current))
                }, t.style = function (t) {
                    var e, r = "";
                    for (e in t) r += e + "(" + t[e] + ") ";
                    return r
                }, t.values = function (t) {
                    var e, i = {};
                    return r.call(this, t, function (t, r, n) {
                        i[t] = r, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, n))
                    }), i
                }
            }),
            N = p(function (e) {
                function r() {
                    var t, e, i, n = h.length;
                    if (n)
                        for (R(r), e = V(), t = n; t--;)(i = h[t]) && i.render(e)
                }
                var i = {
                    ease: c.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function (t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || i.ease;
                    c[e] && (e = c[e][1]), "function" != typeof e && (e = i.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var r = t.from,
                        n = t.to;
                    void 0 === r && (r = i.from), void 0 === n && (n = i.to), this.unit = t.unit || "", "number" == typeof r && "number" == typeof n ? (this.begin = r, this.change = n - r) : this.format(n, r), this.value = this.begin + this.unit, this.start = V(), !1 !== t.autoplay && this.play()
                }, e.play = function () {
                    var t;
                    this.active || (this.start || (this.start = V()), this.active = !0, t = this, 1 === h.push(t) && R(r))
                }, e.stop = function () {
                    var e, r, i;
                    this.active && (this.active = !1, e = this, (i = t.inArray(e, h)) >= 0 && (r = h.slice(i + 1), h.length = i, r.length && (h = h.concat(r))))
                }, e.render = function (t) {
                    var e, r = t - this.start;
                    if (this.delay) {
                        if (r <= this.delay) return;
                        r -= this.delay
                    }
                    if (r < this.duration) {
                        var i = this.ease(r, 0, 1, this.duration);
                        return e = this.startRGB ? function (t, e, r) {
                            return s(t[0] + r * (e[0] - t[0]), t[1] + r * (e[1] - t[1]), t[2] + r * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, i) : function (t) {
                            return Math.round(t * l) / l
                        }(this.begin + i * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function (t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = n(e), this.endRGB = n(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var r = e.replace(y, "");
                        r !== t.replace(y, "") && o("tween", e, t), this.unit = r
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var h = [],
                    l = 1e3
            }),
            H = p(N, function (t) {
                t.init = function (t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function (t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            q = p(N, function (t, e) {
                t.init = function (t) {
                    var e, r;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) r = t.values[e], this.current[e] !== r && this.tweens.push(new N({
                        name: e,
                        from: this.current[e],
                        to: r,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function (t) {
                    var e, r, i = !1;
                    for (e = this.tweens.length; e--;)(r = this.tweens[e]).context && (r.render(t), this.current[r.name] = r.value, i = !0);
                    return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function () {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            W = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !D.transition,
                agentTests: []
            };
        e.fallback = function (t) {
            if (!D.transition) return W.fallback = !0;
            W.agentTests.push("(" + t + ")");
            var e = new RegExp(W.agentTests.join("|"), "i");
            W.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
            return new N(t)
        }, e.delay = function (t, e, r) {
            return new H({
                complete: e,
                duration: t,
                context: r
            })
        }, t.fn.tram = function (t) {
            return e.call(null, this, t)
        };
        var $ = t.style,
            Y = t.css,
            X = {
                transform: D.transform && D.transform.css
            },
            U = {
                color: [z, b],
                background: [z, b, "background-color"],
                "outline-color": [z, b],
                "border-color": [z, b],
                "border-top-color": [z, b],
                "border-right-color": [z, b],
                "border-bottom-color": [z, b],
                "border-left-color": [z, b],
                "border-width": [L, x],
                "border-top-width": [L, x],
                "border-right-width": [L, x],
                "border-bottom-width": [L, x],
                "border-left-width": [L, x],
                "border-spacing": [L, x],
                "letter-spacing": [L, x],
                margin: [L, x],
                "margin-top": [L, x],
                "margin-right": [L, x],
                "margin-bottom": [L, x],
                "margin-left": [L, x],
                padding: [L, x],
                "padding-top": [L, x],
                "padding-right": [L, x],
                "padding-bottom": [L, x],
                "padding-left": [L, x],
                "outline-width": [L, x],
                opacity: [L, v],
                top: [L, E],
                right: [L, E],
                bottom: [L, E],
                left: [L, E],
                "font-size": [L, E],
                "text-indent": [L, E],
                "word-spacing": [L, E],
                width: [L, E],
                "min-width": [L, E],
                "max-width": [L, E],
                height: [L, E],
                "min-height": [L, E],
                "max-height": [L, E],
                "line-height": [L, w],
                "scroll-top": [G, v, "scrollTop"],
                "scroll-left": [G, v, "scrollLeft"]
            },
            K = {};
        D.transform && (U.transform = [j], K = {
            x: [E, "translateX"],
            y: [E, "translateY"],
            rotate: [_],
            rotateX: [_],
            rotateY: [_],
            scale: [v],
            scaleX: [v],
            scaleY: [v],
            skew: [_],
            skewX: [_],
            skewY: [_]
        }), D.transform && D.backface && (K.z = [E, "translateZ"], K.rotateZ = [_], K.scaleZ = [v], K.perspective = [x]);
        var Z = /ms/,
            J = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function (t, e, r) {
    var i = r(30),
        n = r(111),
        s = r(112),
        a = r(113),
        o = r(114),
        h = r(115);

    function l(t) {
        var e = this.__data__ = new i(t);
        this.size = e.size
    }
    l.prototype.clear = n, l.prototype.delete = s, l.prototype.get = a, l.prototype.has = o, l.prototype.set = h, t.exports = l
}, function (t, e) {
    t.exports = function (t, e) {
        return t === e || t != t && e != e
    }
}, function (t, e, r) {
    var i = r(22),
        n = r(33),
        s = "[object AsyncFunction]",
        a = "[object Function]",
        o = "[object GeneratorFunction]",
        h = "[object Proxy]";
    t.exports = function (t) {
        if (!n(t)) return !1;
        var e = i(t);
        return e == a || e == o || e == s || e == h
    }
}, function (t, e, r) {
    (function (e) {
        var r = "object" == typeof e && e && e.Object === Object && e;
        t.exports = r
    }).call(this, r(63))
}, function (t, e) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function (t, e) {
    var r = Function.prototype.toString;
    t.exports = function (t) {
        if (null != t) {
            try {
                return r.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function (t, e, r) {
    var i = r(134),
        n = r(23);
    t.exports = function t(e, r, s, a, o) {
        return e === r || (null == e || null == r || !n(e) && !n(r) ? e != e && r != r : i(e, r, s, a, t, o))
    }
}, function (t, e, r) {
    var i = r(135),
        n = r(138),
        s = r(139),
        a = 1,
        o = 2;
    t.exports = function (t, e, r, h, l, p) {
        var c = r & a,
            f = t.length,
            u = e.length;
        if (f != u && !(c && u > f)) return !1;
        var m = p.get(t),
            d = p.get(e);
        if (m && d) return m == e && d == t;
        var y = -1,
            g = !0,
            v = r & o ? new i : void 0;
        for (p.set(t, e), p.set(e, t); ++y < f;) {
            var b = t[y],
                x = e[y];
            if (h) var E = c ? h(x, b, y, e, t, p) : h(b, x, y, t, e, p);
            if (void 0 !== E) {
                if (E) continue;
                g = !1;
                break
            }
            if (v) {
                if (!n(e, function (t, e) {
                        if (!s(v, e) && (b === t || l(b, t, r, h, p))) return v.push(e)
                    })) {
                    g = !1;
                    break
                }
            } else if (b !== x && !l(b, x, r, h, p)) {
                g = !1;
                break
            }
        }
        return p.delete(t), p.delete(e), g
    }
}, function (t, e, r) {
    var i = r(151),
        n = r(158),
        s = r(162);
    t.exports = function (t) {
        return s(t) ? i(t) : n(t)
    }
}, function (t, e, r) {
    var i = r(153),
        n = r(23),
        s = Object.prototype,
        a = s.hasOwnProperty,
        o = s.propertyIsEnumerable,
        h = i(function () {
            return arguments
        }()) ? i : function (t) {
            return n(t) && a.call(t, "callee") && !o.call(t, "callee")
        };
    t.exports = h
}, function (t, e, r) {
    (function (t) {
        var i = r(7),
            n = r(154),
            s = e && !e.nodeType && e,
            a = s && "object" == typeof t && t && !t.nodeType && t,
            o = a && a.exports === s ? i.Buffer : void 0,
            h = (o ? o.isBuffer : void 0) || n;
        t.exports = h
    }).call(this, r(70)(t))
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e) {
    var r = 9007199254740991,
        i = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
        var n = typeof t;
        return !!(e = null == e ? r : e) && ("number" == n || "symbol" != n && i.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function (t, e, r) {
    var i = r(155),
        n = r(156),
        s = r(157),
        a = s && s.isTypedArray,
        o = a ? n(a) : i;
    t.exports = o
}, function (t, e, r) {
    var i = r(33);
    t.exports = function (t) {
        return t == t && !i(t)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return function (r) {
            return null != r && r[t] === e && (void 0 !== e || t in Object(r))
        }
    }
}, function (t, e, r) {
    var i = r(76),
        n = r(37);
    t.exports = function (t, e) {
        for (var r = 0, s = (e = i(e, t)).length; null != t && r < s;) t = t[n(e[r++])];
        return r && r == s ? t : void 0
    }
}, function (t, e, r) {
    var i = r(9),
        n = r(45),
        s = r(171),
        a = r(174);
    t.exports = function (t, e) {
        return i(t) ? t : n(t, e) ? [t] : s(a(t))
    }
}, function (t, e, r) {
    var i = r(38);
    t.exports = i("native-function-to-string", Function.toString)
}, function (t, e, r) {
    var i = r(10),
        n = r(4),
        s = r(79);
    t.exports = !i && !n(function () {
        return 7 != Object.defineProperty(s("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, r) {
    var i = r(5),
        n = r(12),
        s = i.document,
        a = n(s) && n(s.createElement);
    t.exports = function (t) {
        return a ? s.createElement(t) : {}
    }
}, function (t, e) {
    var r = 0,
        i = Math.random();
    t.exports = function (t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + i).toString(36)
    }
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(198),
        s = r(87),
        a = r(204),
        o = r(89),
        h = r(15),
        l = r(83),
        p = r(3),
        c = r(50),
        f = r(25),
        u = r(86),
        m = u.IteratorPrototype,
        d = u.BUGGY_SAFARI_ITERATORS,
        y = p("iterator"),
        g = function () {
            return this
        };
    t.exports = function (t, e, r, p, u, v, b) {
        n(r, e, p);
        var x, E, _, w = function (t) {
                if (t === u && k) return k;
                if (!d && t in A) return A[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function () {
                            return new r(this, t)
                        }
                }
                return function () {
                    return new r(this)
                }
            },
            S = e + " Iterator",
            P = !1,
            A = t.prototype,
            C = A[y] || A["@@iterator"] || u && A[u],
            k = !d && C || w(u),
            T = "Array" == e && A.entries || C;
        if (T && (x = s(T.call(new t)), m !== Object.prototype && x.next && (c || s(x) === m || (a ? a(x, m) : "function" != typeof x[y] && h(x, y, g)), o(x, S, !0, !0), c && (f[S] = g))), "values" == u && C && "values" !== C.name && (P = !0, k = function () {
                return C.call(this)
            }), c && !b || A[y] === k || h(A, y, k), f[e] = k, u)
            if (E = {
                    values: w("values"),
                    keys: v ? k : w("keys"),
                    entries: w("entries")
                }, b)
                for (_ in E) !d && !P && _ in A || l(A, _, E[_]);
            else i({
                target: e,
                proto: !0,
                forced: d || P
            }, E);
        return E
    }
}, function (t, e, r) {
    var i = r(10),
        n = r(192),
        s = r(39),
        a = r(16),
        o = r(49),
        h = r(13),
        l = r(78),
        p = Object.getOwnPropertyDescriptor;
    e.f = i ? p : function (t, e) {
        if (t = a(t), e = o(e, !0), l) try {
            return p(t, e)
        } catch (t) {}
        if (h(t, e)) return s(!n.f.call(t, e), t[e])
    }
}, function (t, e, r) {
    var i = r(5),
        n = r(38),
        s = r(15),
        a = r(13),
        o = r(48),
        h = r(77),
        l = r(47),
        p = l.get,
        c = l.enforce,
        f = String(h).split("toString");
    n("inspectSource", function (t) {
        return h.call(t)
    }), (t.exports = function (t, e, r, n) {
        var h = !!n && !!n.unsafe,
            l = !!n && !!n.enumerable,
            p = !!n && !!n.noTargetGet;
        "function" == typeof r && ("string" != typeof e || a(r, "name") || s(r, "name", e), c(r).source = f.join("string" == typeof e ? e : "")), t !== i ? (h ? !p && t[e] && (l = !0) : delete t[e], l ? t[e] = r : s(t, e, r)) : l ? t[e] = r : o(e, r)
    })(Function.prototype, "toString", function () {
        return "function" == typeof this && p(this).source || h.call(this)
    })
}, function (t, e, r) {
    t.exports = r(5)
}, function (t, e, r) {
    var i = r(13),
        n = r(16),
        s = r(55).indexOf,
        a = r(52);
    t.exports = function (t, e) {
        var r, o = n(t),
            h = 0,
            l = [];
        for (r in o) !i(a, r) && i(o, r) && l.push(r);
        for (; e.length > h;) i(o, r = e[h++]) && (~s(l, r) || l.push(r));
        return l
    }
}, function (t, e, r) {
    "use strict";
    var i, n, s, a = r(87),
        o = r(15),
        h = r(13),
        l = r(3),
        p = r(50),
        c = l("iterator"),
        f = !1;
    [].keys && ("next" in (s = [].keys()) ? (n = a(a(s))) !== Object.prototype && (i = n) : f = !0), null == i && (i = {}), p || h(i, c) || o(i, c, function () {
        return this
    }), t.exports = {
        IteratorPrototype: i,
        BUGGY_SAFARI_ITERATORS: f
    }
}, function (t, e, r) {
    var i = r(13),
        n = r(2),
        s = r(51),
        a = r(199),
        o = s("IE_PROTO"),
        h = Object.prototype;
    t.exports = a ? Object.getPrototypeOf : function (t) {
        return t = n(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? h : null
    }
}, function (t, e, r) {
    var i = r(20),
        n = r(201),
        s = r(56),
        a = r(52),
        o = r(203),
        h = r(79),
        l = r(51)("IE_PROTO"),
        p = function () {},
        c = function () {
            var t, e = h("iframe"),
                r = s.length;
            for (e.style.display = "none", o.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[s[r]];
            return c()
        };
    t.exports = Object.create || function (t, e) {
        var r;
        return null !== t ? (p.prototype = i(t), r = new p, p.prototype = null, r[l] = t) : r = c(), void 0 === e ? r : n(r, e)
    }, a[l] = !0
}, function (t, e, r) {
    var i = r(11).f,
        n = r(13),
        s = r(3)("toStringTag");
    t.exports = function (t, e, r) {
        t && !n(t = r ? t : t.prototype, s) && i(t, s, {
            configurable: !0,
            value: e
        })
    }
}, function (t, e, r) {
    "use strict";
    var i = r(21),
        n = r(1),
        s = r(57),
        a = function (t, e, r, o, h, l, p, c) {
            for (var f, u = h, m = 0, d = !!p && s(p, c, 3); m < o;) {
                if (m in r) {
                    if (f = d ? d(r[m], m, e) : r[m], l > 0 && i(f)) u = a(t, e, f, n(f.length), u, l - 1) - 1;
                    else {
                        if (u >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                        t[u] = f
                    }
                    u++
                }
                m++
            }
            return u
        };
    t.exports = a
}, function (t, e, r) {
    var i = r(41),
        n = r(2),
        s = r(40),
        a = r(1),
        o = function (t) {
            return function (e, r, o, h) {
                i(r);
                var l = n(e),
                    p = s(l),
                    c = a(l.length),
                    f = t ? c - 1 : 0,
                    u = t ? -1 : 1;
                if (o < 2)
                    for (;;) {
                        if (f in p) {
                            h = p[f], f += u;
                            break
                        }
                        if (f += u, t ? f < 0 : c <= f) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; t ? f >= 0 : c > f; f += u) f in p && (h = r(h, p[f], f, l));
                return h
            }
        };
    t.exports = {
        left: o(!1),
        right: o(!0)
    }
}, function (t, e, r) {
    r(93), r(249), r(250), r(251), r(252), r(253), t.exports = r(258)
}, function (t, e, r) {
    "use strict";
    var i = r(14),
        n = r(96),
        s = r(248);
    i.define("lottie", t.exports = function () {
        return {
            lottie: s,
            createInstance: n.createInstance,
            cleanupElement: n.cleanupElement,
            init: n.init,
            destroy: n.destroy,
            ready: n.ready
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = window.$,
        n = r(58) && i.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function () {
        var t = {
                VERSION: "1.6.0-Webflow"
            },
            e = {},
            r = Array.prototype,
            i = Object.prototype,
            s = Function.prototype,
            a = (r.push, r.slice),
            o = (r.concat, i.toString, i.hasOwnProperty),
            h = r.forEach,
            l = r.map,
            p = (r.reduce, r.reduceRight, r.filter),
            c = (r.every, r.some),
            f = r.indexOf,
            u = (r.lastIndexOf, Array.isArray, Object.keys),
            m = (s.bind, t.each = t.forEach = function (r, i, n) {
                if (null == r) return r;
                if (h && r.forEach === h) r.forEach(i, n);
                else if (r.length === +r.length) {
                    for (var s = 0, a = r.length; s < a; s++)
                        if (i.call(n, r[s], s, r) === e) return
                } else {
                    var o = t.keys(r);
                    for (s = 0, a = o.length; s < a; s++)
                        if (i.call(n, r[o[s]], o[s], r) === e) return
                }
                return r
            });
        t.map = t.collect = function (t, e, r) {
            var i = [];
            return null == t ? i : l && t.map === l ? t.map(e, r) : (m(t, function (t, n, s) {
                i.push(e.call(r, t, n, s))
            }), i)
        }, t.find = t.detect = function (t, e, r) {
            var i;
            return d(t, function (t, n, s) {
                if (e.call(r, t, n, s)) return i = t, !0
            }), i
        }, t.filter = t.select = function (t, e, r) {
            var i = [];
            return null == t ? i : p && t.filter === p ? t.filter(e, r) : (m(t, function (t, n, s) {
                e.call(r, t, n, s) && i.push(t)
            }), i)
        };
        var d = t.some = t.any = function (r, i, n) {
            i || (i = t.identity);
            var s = !1;
            return null == r ? s : c && r.some === c ? r.some(i, n) : (m(r, function (t, r, a) {
                if (s || (s = i.call(n, t, r, a))) return e
            }), !!s)
        };
        t.contains = t.include = function (t, e) {
            return null != t && (f && t.indexOf === f ? -1 != t.indexOf(e) : d(t, function (t) {
                return t === e
            }))
        }, t.delay = function (t, e) {
            var r = a.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, r)
            }, e)
        }, t.defer = function (e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function (t) {
            var e, r, i;
            return function () {
                e || (e = !0, r = arguments, i = this, n.frame(function () {
                    e = !1, t.apply(i, r)
                }))
            }
        }, t.debounce = function (e, r, i) {
            var n, s, a, o, h, l = function l() {
                var p = t.now() - o;
                p < r ? n = setTimeout(l, r - p) : (n = null, i || (h = e.apply(a, s), a = s = null))
            };
            return function () {
                a = this, s = arguments, o = t.now();
                var p = i && !n;
                return n || (n = setTimeout(l, r)), p && (h = e.apply(a, s), a = s = null), h
            }
        }, t.defaults = function (e) {
            if (!t.isObject(e)) return e;
            for (var r = 1, i = arguments.length; r < i; r++) {
                var n = arguments[r];
                for (var s in n) void 0 === e[s] && (e[s] = n[s])
            }
            return e
        }, t.keys = function (e) {
            if (!t.isObject(e)) return [];
            if (u) return u(e);
            var r = [];
            for (var i in e) t.has(e, i) && r.push(i);
            return r
        }, t.has = function (t, e) {
            return o.call(t, e)
        }, t.isObject = function (t) {
            return t === Object(t)
        }, t.now = Date.now || function () {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var y = /(.)^/,
            g = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            v = /\\|'|\r|\n|\u2028|\u2029/g,
            b = function (t) {
                return "\\" + g[t]
            };
        return t.template = function (e, r, i) {
            !r && i && (r = i), r = t.defaults({}, r, t.templateSettings);
            var n = RegExp([(r.escape || y).source, (r.interpolate || y).source, (r.evaluate || y).source].join("|") + "|$", "g"),
                s = 0,
                a = "__p+='";
            e.replace(n, function (t, r, i, n, o) {
                return a += e.slice(s, o).replace(v, b), s = o + t.length, r ? a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : n && (a += "';\n" + n + "\n__p+='"), t
            }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var o = new Function(r.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var h = function (e) {
                    return o.call(this, e, t)
                },
                l = r.variable || "obj";
            return h.source = "function(" + l + "){\n" + a + "}", h
        }, t
    }()
}, function (t, e) {
    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(e) {
        return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? t.exports = i = function (t) {
            return r(t)
        } : t.exports = i = function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
        }, i(e)
    }
    t.exports = i
}, function (t, e, r) {
    "use strict";
    var i = r(29),
        n = i(r(97)),
        s = i(r(98)),
        a = r(29);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ready = e.destroy = e.init = e.cleanupElement = e.createInstance = void 0;
    var o = a(r(99)),
        h = a(r(100)),
        l = a(r(101));
    r(187);
    var p = {
            Playing: "playing",
            Stopped: "stopped"
        },
        c = new(function () {
            function t() {
                (0, n.default)(this, t), (0, h.default)(this, "_cache", [])
            }
            return (0, s.default)(t, [{
                key: "set",
                value: function (t, e) {
                    var r = (0, l.default)(this._cache, function (e) {
                        return e.wrapper === t
                    }); - 1 !== r && this._cache.splice(r, 1), this._cache.push({
                        wrapper: t,
                        instance: e
                    })
                }
            }, {
                key: "delete",
                value: function (t) {
                    var e = (0, l.default)(this._cache, function (e) {
                        return e.wrapper === t
                    }); - 1 !== e && this._cache.splice(e, 1)
                }
            }, {
                key: "get",
                value: function (t) {
                    var e = (0, l.default)(this._cache, function (e) {
                        return e.wrapper === t
                    });
                    return -1 !== e ? this._cache[e].instance : null
                }
            }]), t
        }()),
        f = {},
        u = function () {
            function t() {
                (0, n.default)(this, t), (0, h.default)(this, "config", null), (0, h.default)(this, "currentState", p.Stopped), (0, h.default)(this, "handlers", {
                    enterFrame: [],
                    complete: [],
                    loop: [],
                    dataReady: [],
                    destroy: [],
                    error: []
                })
            }
            return (0, s.default)(t, [{
                key: "load",
                value: function (t) {
                    var e = this,
                        r = t.dataset || f,
                        i = r.src || "",
                        n = r.preserveAspectRatio || "xMidYMid meet",
                        s = r.renderer || "svg",
                        a = 1 === parseFloat(r.loop),
                        h = parseFloat(r.direction) || 1,
                        l = 1 === parseFloat(r.autoplay),
                        u = parseFloat(r.duration) || 0,
                        m = 1 === parseFloat(r.isIx2Target),
                        d = parseFloat(r.ix2InitialState);
                    isNaN(d) && (d = null);
                    var y = {
                        src: i,
                        loop: a,
                        autoplay: l,
                        renderer: s,
                        direction: h,
                        duration: u,
                        hasIx2: m,
                        ix2InitialValue: d,
                        preserveAspectRatio: n
                    };
                    if (this.animationItem && this.config && this.config.src === i && s === this.config.renderer && n === this.config.preserveAspectRatio) {
                        if (a !== this.config.loop && this.setLooping(a), m || (h !== this.config.direction && this.setDirection(h), u !== this.config.duration && (u > 0 && u !== this.duration ? this.setSpeed(this.duration / u) : this.setSpeed(1))), l && this.play(), d && d !== this.config.ix2InitialValue) {
                            var g = d / 100;
                            this.goToFrame(this.frames * g)
                        }
                        this.config = y
                    } else {
                        var v = {
                            container: t,
                            loop: a,
                            autoplay: l,
                            renderer: s,
                            rendererSettings: {
                                preserveAspectRatio: n,
                                progressiveLoad: !0,
                                hideOnTransparent: !0
                            }
                        };
                        try {
                            this.animationItem && this.destroy(), this.animationItem = window.Webflow.require("lottie").lottie.loadAnimation((0, o.default)({}, v, {
                                path: i
                            }))
                        } catch (t) {
                            return void this.handlers.error.forEach(function (e) {
                                return e(t)
                            })
                        }
                        this.animationItem && (Boolean(window.Webflow.env("design") || window.Webflow.env("preview")) && (this.animationItem.addEventListener("enterFrame", function () {
                            if (e.isPlaying) {
                                var t = e.animationItem,
                                    r = t.currentFrame,
                                    i = t.totalFrames,
                                    n = t.playDirection,
                                    s = r / i * 100,
                                    a = Math.round(1 === n ? s : 100 - s);
                                e.handlers.enterFrame.forEach(function (t) {
                                    return t(a, r)
                                })
                            }
                        }), this.animationItem.addEventListener("complete", function () {
                            e.currentState === p.Playing && e.animationItem.loop ? e.currentState = p.Stopped : e.handlers.complete.forEach(function (t) {
                                return t()
                            })
                        }), this.animationItem.addEventListener("loopComplete", function (t) {
                            e.handlers.loop.forEach(function (e) {
                                return e(t)
                            })
                        }), this.animationItem.addEventListener("data_failed", function (t) {
                            e.handlers.error.forEach(function (e) {
                                return e(t)
                            })
                        }), this.animationItem.addEventListener("error", function (t) {
                            e.handlers.error.forEach(function (e) {
                                return e(t)
                            })
                        })), this.isLoaded ? (this.handlers.dataReady.forEach(function (t) {
                            return t()
                        }), l && this.play()) : this.animationItem.addEventListener("data_ready", function () {
                            if (e.handlers.dataReady.forEach(function (t) {
                                    return t()
                                }), m || (e.setDirection(h), u > 0 && u !== e.duration && e.setSpeed(e.duration / u), l && e.play()), d) {
                                var t = d / 100;
                                e.goToFrame(e.frames * t)
                            }
                        }), c.set(t, this), this.container = t, this.config = y)
                    }
                }
            }, {
                key: "onFrameChange",
                value: function (t) {
                    -1 === this.handlers.enterFrame.indexOf(t) && this.handlers.enterFrame.push(t)
                }
            }, {
                key: "onPlaybackComplete",
                value: function (t) {
                    -1 === this.handlers.complete.indexOf(t) && this.handlers.complete.push(t)
                }
            }, {
                key: "onLoopComplete",
                value: function (t) {
                    -1 === this.handlers.loop.indexOf(t) && this.handlers.loop.push(t)
                }
            }, {
                key: "onDestroy",
                value: function (t) {
                    -1 === this.handlers.destroy.indexOf(t) && this.handlers.destroy.push(t)
                }
            }, {
                key: "onDataReady",
                value: function (t) {
                    -1 === this.handlers.dataReady.indexOf(t) && this.handlers.dataReady.push(t)
                }
            }, {
                key: "onError",
                value: function (t) {
                    -1 === this.handlers.error.indexOf(t) && this.handlers.error.push(t)
                }
            }, {
                key: "play",
                value: function () {
                    if (this.animationItem) {
                        var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
                        this.animationItem.goToAndPlay(t, !0), this.currentState = p.Playing
                    }
                }
            }, {
                key: "stop",
                value: function () {
                    if (this.animationItem) {
                        if (this.isPlaying) {
                            var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
                            this.animationItem.goToAndStop(t, !0)
                        }
                        this.currentState = p.Stopped
                    }
                }
            }, {
                key: "destroy",
                value: function () {
                    var t = this;
                    this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(function (t) {
                        return t()
                    }), this.container && c.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(function (e) {
                        return t.handlers[e].length = 0
                    }), this.animationItem = null, this.container = null, this.config = null)
                }
            }, {
                key: "goToFrame",
                value: function (t) {
                    this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
                }
            }, {
                key: "setSubframe",
                value: function (t) {
                    this.animationItem && this.animationItem.setSubframe(t)
                }
            }, {
                key: "setSpeed",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
                }
            }, {
                key: "setLooping",
                value: function (t) {
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
                }
            }, {
                key: "setDirection",
                value: function (t) {
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(1 === t ? 0 : this.frames))
                }
            }, {
                key: "isPlaying",
                get: function () {
                    return !!this.animationItem && !this.animationItem.isPaused
                }
            }, {
                key: "isPaused",
                get: function () {
                    return !!this.animationItem && this.animationItem.isPaused
                }
            }, {
                key: "duration",
                get: function () {
                    return this.animationItem ? this.animationItem.getDuration() : 0
                }
            }, {
                key: "frames",
                get: function () {
                    return this.animationItem ? this.animationItem.totalFrames : 0
                }
            }, {
                key: "direction",
                get: function () {
                    return this.animationItem ? this.animationItem.playDirection : 1
                }
            }, {
                key: "isLoaded",
                get: function () {
                    return this.animationItem, this.animationItem.isLoaded
                }
            }, {
                key: "ix2InitialValue",
                get: function () {
                    return this.config ? this.config.ix2InitialValue : null
                }
            }]), t
        }(),
        m = function () {
            return Array.from(document.querySelectorAll('[data-animation-type="lottie"]'))
        },
        d = function (t) {
            var e = c.get(t);
            return null == e && (e = new u), e.load(t), e
        };
    e.createInstance = d;
    var y = function (t) {
        var e = c.get(t);
        e && e.destroy()
    };
    e.cleanupElement = y;
    var g = function () {
        m().forEach(function (t) {
            1 === parseFloat(t.getAttribute("data-is-ix2-target")) || y(t), d(t)
        })
    };
    e.init = g;
    e.destroy = function () {
        m().forEach(y)
    };
    var v = g;
    e.ready = v
}, function (t, e) {
    t.exports = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function (t, e) {
    function r(t, e) {
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    t.exports = function (t, e, i) {
        return e && r(t.prototype, e), i && r(t, i), t
    }
}, function (t, e) {
    function r() {
        return t.exports = r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
            }
            return t
        }, r.apply(this, arguments)
    }
    t.exports = r
}, function (t, e) {
    t.exports = function (t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
}, function (t, e, r) {
    var i = r(102),
        n = r(103),
        s = r(184),
        a = Math.max;
    t.exports = function (t, e, r) {
        var o = null == t ? 0 : t.length;
        if (!o) return -1;
        var h = null == r ? 0 : s(r);
        return h < 0 && (h = a(o + h, 0)), i(t, n(e, 3), h)
    }
}, function (t, e) {
    t.exports = function (t, e, r, i) {
        for (var n = t.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
            if (e(t[s], s, t)) return s;
        return -1
    }
}, function (t, e, r) {
    var i = r(104),
        n = r(169),
        s = r(180),
        a = r(9),
        o = r(181);
    t.exports = function (t) {
        return "function" == typeof t ? t : null == t ? s : "object" == typeof t ? a(t) ? n(t[0], t[1]) : i(t) : o(t)
    }
}, function (t, e, r) {
    var i = r(105),
        n = r(168),
        s = r(74);
    t.exports = function (t) {
        var e = n(t);
        return 1 == e.length && e[0][2] ? s(e[0][0], e[0][1]) : function (r) {
            return r === t || i(r, t, e)
        }
    }
}, function (t, e, r) {
    var i = r(59),
        n = r(65),
        s = 1,
        a = 2;
    t.exports = function (t, e, r, o) {
        var h = r.length,
            l = h,
            p = !o;
        if (null == t) return !l;
        for (t = Object(t); h--;) {
            var c = r[h];
            if (p && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
        }
        for (; ++h < l;) {
            var f = (c = r[h])[0],
                u = t[f],
                m = c[1];
            if (p && c[2]) {
                if (void 0 === u && !(f in t)) return !1
            } else {
                var d = new i;
                if (o) var y = o(u, m, f, t, e, d);
                if (!(void 0 === y ? n(m, u, s | a, o, d) : y)) return !1
            }
        }
        return !0
    }
}, function (t, e) {
    t.exports = function () {
        this.__data__ = [], this.size = 0
    }
}, function (t, e, r) {
    var i = r(31),
        n = Array.prototype.splice;
    t.exports = function (t) {
        var e = this.__data__,
            r = i(e, t);
        return !(r < 0 || (r == e.length - 1 ? e.pop() : n.call(e, r, 1), --this.size, 0))
    }
}, function (t, e, r) {
    var i = r(31);
    t.exports = function (t) {
        var e = this.__data__,
            r = i(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
}, function (t, e, r) {
    var i = r(31);
    t.exports = function (t) {
        return i(this.__data__, t) > -1
    }
}, function (t, e, r) {
    var i = r(31);
    t.exports = function (t, e) {
        var r = this.__data__,
            n = i(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
}, function (t, e, r) {
    var i = r(30);
    t.exports = function () {
        this.__data__ = new i, this.size = 0
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.get(t)
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.has(t)
    }
}, function (t, e, r) {
    var i = r(30),
        n = r(42),
        s = r(43),
        a = 200;
    t.exports = function (t, e) {
        var r = this.__data__;
        if (r instanceof i) {
            var o = r.__data__;
            if (!n || o.length < a - 1) return o.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new s(o)
        }
        return r.set(t, e), this.size = r.size, this
    }
}, function (t, e, r) {
    var i = r(61),
        n = r(119),
        s = r(33),
        a = r(64),
        o = /^\[object .+?Constructor\]$/,
        h = Function.prototype,
        l = Object.prototype,
        p = h.toString,
        c = l.hasOwnProperty,
        f = RegExp("^" + p.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function (t) {
        return !(!s(t) || n(t)) && (i(t) ? f : o).test(a(t))
    }
}, function (t, e, r) {
    var i = r(32),
        n = Object.prototype,
        s = n.hasOwnProperty,
        a = n.toString,
        o = i ? i.toStringTag : void 0;
    t.exports = function (t) {
        var e = s.call(t, o),
            r = t[o];
        try {
            t[o] = void 0;
            var i = !0
        } catch (t) {}
        var n = a.call(t);
        return i && (e ? t[o] = r : delete t[o]), n
    }
}, function (t, e) {
    var r = Object.prototype.toString;
    t.exports = function (t) {
        return r.call(t)
    }
}, function (t, e, r) {
    var i, n = r(120),
        s = (i = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "";
    t.exports = function (t) {
        return !!s && s in t
    }
}, function (t, e, r) {
    var i = r(7)["__core-js_shared__"];
    t.exports = i
}, function (t, e) {
    t.exports = function (t, e) {
        return null == t ? void 0 : t[e]
    }
}, function (t, e, r) {
    var i = r(123),
        n = r(30),
        s = r(42);
    t.exports = function () {
        this.size = 0, this.__data__ = {
            hash: new i,
            map: new(s || n),
            string: new i
        }
    }
}, function (t, e, r) {
    var i = r(124),
        n = r(125),
        s = r(126),
        a = r(127),
        o = r(128);

    function h(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }
    h.prototype.clear = i, h.prototype.delete = n, h.prototype.get = s, h.prototype.has = a, h.prototype.set = o, t.exports = h
}, function (t, e, r) {
    var i = r(34);
    t.exports = function () {
        this.__data__ = i ? i(null) : {}, this.size = 0
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function (t, e, r) {
    var i = r(34),
        n = "__lodash_hash_undefined__",
        s = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        var e = this.__data__;
        if (i) {
            var r = e[t];
            return r === n ? void 0 : r
        }
        return s.call(e, t) ? e[t] : void 0
    }
}, function (t, e, r) {
    var i = r(34),
        n = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        var e = this.__data__;
        return i ? void 0 !== e[t] : n.call(e, t)
    }
}, function (t, e, r) {
    var i = r(34),
        n = "__lodash_hash_undefined__";
    t.exports = function (t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = i && void 0 === e ? n : e, this
    }
}, function (t, e, r) {
    var i = r(35);
    t.exports = function (t) {
        var e = i(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function (t, e, r) {
    var i = r(35);
    t.exports = function (t) {
        return i(this, t).get(t)
    }
}, function (t, e, r) {
    var i = r(35);
    t.exports = function (t) {
        return i(this, t).has(t)
    }
}, function (t, e, r) {
    var i = r(35);
    t.exports = function (t, e) {
        var r = i(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
}, function (t, e, r) {
    var i = r(59),
        n = r(66),
        s = r(140),
        a = r(144),
        o = r(163),
        h = r(9),
        l = r(69),
        p = r(72),
        c = 1,
        f = "[object Arguments]",
        u = "[object Array]",
        m = "[object Object]",
        d = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, r, y, g, v) {
        var b = h(t),
            x = h(e),
            E = b ? u : o(t),
            _ = x ? u : o(e),
            w = (E = E == f ? m : E) == m,
            S = (_ = _ == f ? m : _) == m,
            P = E == _;
        if (P && l(t)) {
            if (!l(e)) return !1;
            b = !0, w = !1
        }
        if (P && !w) return v || (v = new i), b || p(t) ? n(t, e, r, y, g, v) : s(t, e, E, r, y, g, v);
        if (!(r & c)) {
            var A = w && d.call(t, "__wrapped__"),
                C = S && d.call(e, "__wrapped__");
            if (A || C) {
                var k = A ? t.value() : t,
                    T = C ? e.value() : e;
                return v || (v = new i), g(k, T, r, y, v)
            }
        }
        return !!P && (v || (v = new i), a(t, e, r, y, g, v))
    }
}, function (t, e, r) {
    var i = r(43),
        n = r(136),
        s = r(137);

    function a(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.__data__ = new i; ++e < r;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = n, a.prototype.has = s, t.exports = a
}, function (t, e) {
    var r = "__lodash_hash_undefined__";
    t.exports = function (t) {
        return this.__data__.set(t, r), this
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.has(t)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
            if (e(t[r], r, t)) return !0;
        return !1
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return t.has(e)
    }
}, function (t, e, r) {
    var i = r(32),
        n = r(141),
        s = r(60),
        a = r(66),
        o = r(142),
        h = r(143),
        l = 1,
        p = 2,
        c = "[object Boolean]",
        f = "[object Date]",
        u = "[object Error]",
        m = "[object Map]",
        d = "[object Number]",
        y = "[object RegExp]",
        g = "[object Set]",
        v = "[object String]",
        b = "[object Symbol]",
        x = "[object ArrayBuffer]",
        E = "[object DataView]",
        _ = i ? i.prototype : void 0,
        w = _ ? _.valueOf : void 0;
    t.exports = function (t, e, r, i, _, S, P) {
        switch (r) {
            case E:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case x:
                return !(t.byteLength != e.byteLength || !S(new n(t), new n(e)));
            case c:
            case f:
            case d:
                return s(+t, +e);
            case u:
                return t.name == e.name && t.message == e.message;
            case y:
            case v:
                return t == e + "";
            case m:
                var A = o;
            case g:
                var C = i & l;
                if (A || (A = h), t.size != e.size && !C) return !1;
                var k = P.get(t);
                if (k) return k == e;
                i |= p, P.set(t, e);
                var T = a(A(t), A(e), i, _, S, P);
                return P.delete(t), T;
            case b:
                if (w) return w.call(t) == w.call(e)
        }
        return !1
    }
}, function (t, e, r) {
    var i = r(7).Uint8Array;
    t.exports = i
}, function (t, e) {
    t.exports = function (t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach(function (t, i) {
            r[++e] = [i, t]
        }), r
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach(function (t) {
            r[++e] = t
        }), r
    }
}, function (t, e, r) {
    var i = r(145),
        n = 1,
        s = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, r, a, o, h) {
        var l = r & n,
            p = i(t),
            c = p.length;
        if (c != i(e).length && !l) return !1;
        for (var f = c; f--;) {
            var u = p[f];
            if (!(l ? u in e : s.call(e, u))) return !1
        }
        var m = h.get(t),
            d = h.get(e);
        if (m && d) return m == e && d == t;
        var y = !0;
        h.set(t, e), h.set(e, t);
        for (var g = l; ++f < c;) {
            var v = t[u = p[f]],
                b = e[u];
            if (a) var x = l ? a(b, v, u, e, t, h) : a(v, b, u, t, e, h);
            if (!(void 0 === x ? v === b || o(v, b, r, a, h) : x)) {
                y = !1;
                break
            }
            g || (g = "constructor" == u)
        }
        if (y && !g) {
            var E = t.constructor,
                _ = e.constructor;
            E != _ && "constructor" in t && "constructor" in e && !("function" == typeof E && E instanceof E && "function" == typeof _ && _ instanceof _) && (y = !1)
        }
        return h.delete(t), h.delete(e), y
    }
}, function (t, e, r) {
    var i = r(146),
        n = r(148),
        s = r(67);
    t.exports = function (t) {
        return i(t, s, n)
    }
}, function (t, e, r) {
    var i = r(147),
        n = r(9);
    t.exports = function (t, e, r) {
        var s = e(t);
        return n(t) ? s : i(s, r(t))
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var r = -1, i = e.length, n = t.length; ++r < i;) t[n + r] = e[r];
        return t
    }
}, function (t, e, r) {
    var i = r(149),
        n = r(150),
        s = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        o = a ? function (t) {
            return null == t ? [] : (t = Object(t), i(a(t), function (e) {
                return s.call(t, e)
            }))
        } : n;
    t.exports = o
}, function (t, e) {
    t.exports = function (t, e) {
        for (var r = -1, i = null == t ? 0 : t.length, n = 0, s = []; ++r < i;) {
            var a = t[r];
            e(a, r, t) && (s[n++] = a)
        }
        return s
    }
}, function (t, e) {
    t.exports = function () {
        return []
    }
}, function (t, e, r) {
    var i = r(152),
        n = r(68),
        s = r(9),
        a = r(69),
        o = r(71),
        h = r(72),
        l = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
        var r = s(t),
            p = !r && n(t),
            c = !r && !p && a(t),
            f = !r && !p && !c && h(t),
            u = r || p || c || f,
            m = u ? i(t.length, String) : [],
            d = m.length;
        for (var y in t) !e && !l.call(t, y) || u && ("length" == y || c && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || o(y, d)) || m.push(y);
        return m
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
        return i
    }
}, function (t, e, r) {
    var i = r(22),
        n = r(23),
        s = "[object Arguments]";
    t.exports = function (t) {
        return n(t) && i(t) == s
    }
}, function (t, e) {
    t.exports = function () {
        return !1
    }
}, function (t, e, r) {
    var i = r(22),
        n = r(44),
        s = r(23),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
        return s(t) && n(t.length) && !!a[i(t)]
    }
}, function (t, e) {
    t.exports = function (t) {
        return function (e) {
            return t(e)
        }
    }
}, function (t, e, r) {
    (function (t) {
        var i = r(62),
            n = e && !e.nodeType && e,
            s = n && "object" == typeof t && t && !t.nodeType && t,
            a = s && s.exports === n && i.process,
            o = function () {
                try {
                    var t = s && s.require && s.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = o
    }).call(this, r(70)(t))
}, function (t, e, r) {
    var i = r(159),
        n = r(160),
        s = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (!i(t)) return n(t);
        var e = [];
        for (var r in Object(t)) s.call(t, r) && "constructor" != r && e.push(r);
        return e
    }
}, function (t, e) {
    var r = Object.prototype;
    t.exports = function (t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
    }
}, function (t, e, r) {
    var i = r(161)(Object.keys, Object);
    t.exports = i
}, function (t, e) {
    t.exports = function (t, e) {
        return function (r) {
            return t(e(r))
        }
    }
}, function (t, e, r) {
    var i = r(61),
        n = r(44);
    t.exports = function (t) {
        return null != t && n(t.length) && !i(t)
    }
}, function (t, e, r) {
    var i = r(164),
        n = r(42),
        s = r(165),
        a = r(166),
        o = r(167),
        h = r(22),
        l = r(64),
        p = l(i),
        c = l(n),
        f = l(s),
        u = l(a),
        m = l(o),
        d = h;
    (i && "[object DataView]" != d(new i(new ArrayBuffer(1))) || n && "[object Map]" != d(new n) || s && "[object Promise]" != d(s.resolve()) || a && "[object Set]" != d(new a) || o && "[object WeakMap]" != d(new o)) && (d = function (t) {
        var e = h(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            i = r ? l(r) : "";
        if (i) switch (i) {
            case p:
                return "[object DataView]";
            case c:
                return "[object Map]";
            case f:
                return "[object Promise]";
            case u:
                return "[object Set]";
            case m:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = d
}, function (t, e, r) {
    var i = r(18)(r(7), "DataView");
    t.exports = i
}, function (t, e, r) {
    var i = r(18)(r(7), "Promise");
    t.exports = i
}, function (t, e, r) {
    var i = r(18)(r(7), "Set");
    t.exports = i
}, function (t, e, r) {
    var i = r(18)(r(7), "WeakMap");
    t.exports = i
}, function (t, e, r) {
    var i = r(73),
        n = r(67);
    t.exports = function (t) {
        for (var e = n(t), r = e.length; r--;) {
            var s = e[r],
                a = t[s];
            e[r] = [s, a, i(a)]
        }
        return e
    }
}, function (t, e, r) {
    var i = r(65),
        n = r(170),
        s = r(177),
        a = r(45),
        o = r(73),
        h = r(74),
        l = r(37),
        p = 1,
        c = 2;
    t.exports = function (t, e) {
        return a(t) && o(e) ? h(l(t), e) : function (r) {
            var a = n(r, t);
            return void 0 === a && a === e ? s(r, t) : i(e, a, p | c)
        }
    }
}, function (t, e, r) {
    var i = r(75);
    t.exports = function (t, e, r) {
        var n = null == t ? void 0 : i(t, e);
        return void 0 === n ? r : n
    }
}, function (t, e, r) {
    var i = r(172),
        n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        s = /\\(\\)?/g,
        a = i(function (t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(n, function (t, r, i, n) {
                e.push(i ? n.replace(s, "$1") : r || t)
            }), e
        });
    t.exports = a
}, function (t, e, r) {
    var i = r(173),
        n = 500;
    t.exports = function (t) {
        var e = i(t, function (t) {
                return r.size === n && r.clear(), t
            }),
            r = e.cache;
        return e
    }
}, function (t, e, r) {
    var i = r(43),
        n = "Expected a function";

    function s(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(n);
        var r = function () {
            var i = arguments,
                n = e ? e.apply(this, i) : i[0],
                s = r.cache;
            if (s.has(n)) return s.get(n);
            var a = t.apply(this, i);
            return r.cache = s.set(n, a) || s, a
        };
        return r.cache = new(s.Cache || i), r
    }
    s.Cache = i, t.exports = s
}, function (t, e, r) {
    var i = r(175);
    t.exports = function (t) {
        return null == t ? "" : i(t)
    }
}, function (t, e, r) {
    var i = r(32),
        n = r(176),
        s = r(9),
        a = r(36),
        o = 1 / 0,
        h = i ? i.prototype : void 0,
        l = h ? h.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (s(e)) return n(e, t) + "";
        if (a(e)) return l ? l.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -o ? "-0" : r
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var r = -1, i = null == t ? 0 : t.length, n = Array(i); ++r < i;) n[r] = e(t[r], r, t);
        return n
    }
}, function (t, e, r) {
    var i = r(178),
        n = r(179);
    t.exports = function (t, e) {
        return null != t && n(t, e, i)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return null != t && e in Object(t)
    }
}, function (t, e, r) {
    var i = r(76),
        n = r(68),
        s = r(9),
        a = r(71),
        o = r(44),
        h = r(37);
    t.exports = function (t, e, r) {
        for (var l = -1, p = (e = i(e, t)).length, c = !1; ++l < p;) {
            var f = h(e[l]);
            if (!(c = null != t && r(t, f))) break;
            t = t[f]
        }
        return c || ++l != p ? c : !!(p = null == t ? 0 : t.length) && o(p) && a(f, p) && (s(t) || n(t))
    }
}, function (t, e) {
    t.exports = function (t) {
        return t
    }
}, function (t, e, r) {
    var i = r(182),
        n = r(183),
        s = r(45),
        a = r(37);
    t.exports = function (t) {
        return s(t) ? i(a(t)) : n(t)
    }
}, function (t, e) {
    t.exports = function (t) {
        return function (e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function (t, e, r) {
    var i = r(75);
    t.exports = function (t) {
        return function (e) {
            return i(e, t)
        }
    }
}, function (t, e, r) {
    var i = r(185);
    t.exports = function (t) {
        var e = i(t),
            r = e % 1;
        return e == e ? r ? e - r : e : 0
    }
}, function (t, e, r) {
    var i = r(186),
        n = 1 / 0,
        s = 1.7976931348623157e308;
    t.exports = function (t) {
        return t ? (t = i(t)) === n || t === -n ? (t < 0 ? -1 : 1) * s : t == t ? t : 0 : 0 === t ? t : 0
    }
}, function (t, e, r) {
    var i = r(33),
        n = r(36),
        s = NaN,
        a = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        h = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        p = parseInt;
    t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (n(t)) return s;
        if (i(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = i(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var r = h.test(t);
        return r || l.test(t) ? p(t.slice(2), r ? 2 : 8) : o.test(t) ? s : +t
    }
}, function (t, e, r) {
    t.exports = r(188), r(246), r(247)
}, function (t, e, r) {
    r(189), r(206), r(213), r(214), r(215), r(216), r(218), r(219), r(221), r(222), r(223), r(224), r(225), r(226), r(228), r(229), r(230), r(231), r(232), r(234), r(235), r(236), r(237), r(238), r(239), r(240), r(241), r(243), r(244), r(245);
    var i = r(84);
    t.exports = i.Array
}, function (t, e, r) {
    "use strict";
    var i = r(190).charAt,
        n = r(47),
        s = r(81),
        a = n.set,
        o = n.getterFor("String Iterator");
    s(String, "String", function (t) {
        a(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }, function () {
        var t, e = o(this),
            r = e.string,
            n = e.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (t = i(r, n), e.index += t.length, {
            value: t,
            done: !1
        })
    })
}, function (t, e, r) {
    var i = r(19),
        n = r(46),
        s = function (t) {
            return function (e, r) {
                var s, a, o = String(n(e)),
                    h = i(r),
                    l = o.length;
                return h < 0 || h >= l ? t ? "" : void 0 : (s = o.charCodeAt(h)) < 55296 || s > 56319 || h + 1 === l || (a = o.charCodeAt(h + 1)) < 56320 || a > 57343 ? t ? o.charAt(h) : s : t ? o.slice(h, h + 2) : a - 56320 + (s - 55296 << 10) + 65536
            }
        };
    t.exports = {
        codeAt: s(!1),
        charAt: s(!0)
    }
}, function (t, e, r) {
    var i = r(5),
        n = r(77),
        s = i.WeakMap;
    t.exports = "function" == typeof s && /native code/.test(n.call(s))
}, function (t, e, r) {
    "use strict";
    var i = {}.propertyIsEnumerable,
        n = Object.getOwnPropertyDescriptor,
        s = n && !i.call({
            1: 2
        }, 1);
    e.f = s ? function (t) {
        var e = n(this, t);
        return !!e && e.enumerable
    } : i
}, function (t, e, r) {
    var i = r(13),
        n = r(194),
        s = r(82),
        a = r(11);
    t.exports = function (t, e) {
        for (var r = n(e), o = a.f, h = s.f, l = 0; l < r.length; l++) {
            var p = r[l];
            i(t, p) || o(t, p, h(e, p))
        }
    }
}, function (t, e, r) {
    var i = r(54),
        n = r(195),
        s = r(196),
        a = r(20);
    t.exports = i("Reflect", "ownKeys") || function (t) {
        var e = n.f(a(t)),
            r = s.f;
        return r ? e.concat(r(t)) : e
    }
}, function (t, e, r) {
    var i = r(85),
        n = r(56).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return i(t, n)
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, r) {
    var i = r(4),
        n = /#|\.prototype\./,
        s = function (t, e) {
            var r = o[a(t)];
            return r == l || r != h && ("function" == typeof e ? i(e) : !!e)
        },
        a = s.normalize = function (t) {
            return String(t).replace(n, ".").toLowerCase()
        },
        o = s.data = {},
        h = s.NATIVE = "N",
        l = s.POLYFILL = "P";
    t.exports = s
}, function (t, e, r) {
    "use strict";
    var i = r(86).IteratorPrototype,
        n = r(88),
        s = r(39),
        a = r(89),
        o = r(25),
        h = function () {
            return this
        };
    t.exports = function (t, e, r) {
        var l = e + " Iterator";
        return t.prototype = n(i, {
            next: s(1, r)
        }), a(t, l, !1, !0), o[l] = h, t
    }
}, function (t, e, r) {
    var i = r(4);
    t.exports = !i(function () {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })
}, function (t, e, r) {
    var i = r(4);
    t.exports = !!Object.getOwnPropertySymbols && !i(function () {
        return !String(Symbol())
    })
}, function (t, e, r) {
    var i = r(10),
        n = r(11),
        s = r(20),
        a = r(202);
    t.exports = i ? Object.defineProperties : function (t, e) {
        s(t);
        for (var r, i = a(e), o = i.length, h = 0; o > h;) n.f(t, r = i[h++], e[r]);
        return t
    }
}, function (t, e, r) {
    var i = r(85),
        n = r(56);
    t.exports = Object.keys || function (t) {
        return i(t, n)
    }
}, function (t, e, r) {
    var i = r(54);
    t.exports = i("document", "documentElement")
}, function (t, e, r) {
    var i = r(20),
        n = r(205);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var t, e = !1,
            r = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array
        } catch (t) {}
        return function (r, s) {
            return i(r), n(s), e ? t.call(r, s) : r.__proto__ = s, r
        }
    }() : void 0)
}, function (t, e, r) {
    var i = r(12);
    t.exports = function (t) {
        if (!i(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }
}, function (t, e, r) {
    var i = r(0),
        n = r(207);
    i({
        target: "Array",
        stat: !0,
        forced: !r(212)(function (t) {
            Array.from(t)
        })
    }, {
        from: n
    })
}, function (t, e, r) {
    "use strict";
    var i = r(57),
        n = r(2),
        s = r(208),
        a = r(209),
        o = r(1),
        h = r(26),
        l = r(210);
    t.exports = function (t) {
        var e, r, p, c, f = n(t),
            u = "function" == typeof this ? this : Array,
            m = arguments.length,
            d = m > 1 ? arguments[1] : void 0,
            y = void 0 !== d,
            g = 0,
            v = l(f);
        if (y && (d = i(d, m > 2 ? arguments[2] : void 0, 2)), null == v || u == Array && a(v))
            for (r = new u(e = o(f.length)); e > g; g++) h(r, g, y ? d(f[g], g) : f[g]);
        else
            for (c = v.call(f), r = new u; !(p = c.next()).done; g++) h(r, g, y ? s(c, d, [p.value, g], !0) : p.value);
        return r.length = g, r
    }
}, function (t, e, r) {
    var i = r(20);
    t.exports = function (t, e, r, n) {
        try {
            return n ? e(i(r)[0], r[1]) : e(r)
        } catch (e) {
            var s = t.return;
            throw void 0 !== s && i(s.call(t)), e
        }
    }
}, function (t, e, r) {
    var i = r(3),
        n = r(25),
        s = i("iterator"),
        a = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (n.Array === t || a[s] === t)
    }
}, function (t, e, r) {
    var i = r(211),
        n = r(25),
        s = r(3)("iterator");
    t.exports = function (t) {
        if (null != t) return t[s] || t["@@iterator"] || n[i(t)]
    }
}, function (t, e, r) {
    var i = r(53),
        n = r(3)("toStringTag"),
        s = "Arguments" == i(function () {
            return arguments
        }());
    t.exports = function (t) {
        var e, r, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), n)) ? r : s ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function (t, e, r) {
    var i = r(3)("iterator"),
        n = !1;
    try {
        var s = 0,
            a = {
                next: function () {
                    return {
                        done: !!s++
                    }
                },
                return: function () {
                    n = !0
                }
            };
        a[i] = function () {
            return this
        }, Array.from(a, function () {
            throw 2
        })
    } catch (t) {}
    t.exports = function (t, e) {
        if (!e && !n) return !1;
        var r = !1;
        try {
            var s = {};
            s[i] = function () {
                return {
                    next: function () {
                        return {
                            done: r = !0
                        }
                    }
                }
            }, t(s)
        } catch (t) {}
        return r
    }
}, function (t, e, r) {
    r(0)({
        target: "Array",
        stat: !0
    }, {
        isArray: r(21)
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(4),
        s = r(26);
    i({
        target: "Array",
        stat: !0,
        forced: n(function () {
            function t() {}
            return !(Array.of.call(t) instanceof t)
        })
    }, {
        of: function () {
            for (var t = 0, e = arguments.length, r = new("function" == typeof this ? this : Array)(e); e > t;) s(r, t, arguments[t++]);
            return r.length = e, r
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(4),
        s = r(21),
        a = r(12),
        o = r(2),
        h = r(1),
        l = r(26),
        p = r(27),
        c = r(28),
        f = r(3)("isConcatSpreadable"),
        u = !n(function () {
            var t = [];
            return t[f] = !1, t.concat()[0] !== t
        }),
        m = c("concat"),
        d = function (t) {
            if (!a(t)) return !1;
            var e = t[f];
            return void 0 !== e ? !!e : s(t)
        };
    i({
        target: "Array",
        proto: !0,
        forced: !u || !m
    }, {
        concat: function (t) {
            var e, r, i, n, s, a = o(this),
                c = p(a, 0),
                f = 0;
            for (e = -1, i = arguments.length; e < i; e++)
                if (s = -1 === e ? a : arguments[e], d(s)) {
                    if (f + (n = h(s.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (r = 0; r < n; r++, f++) r in s && l(c, f, s[r])
                } else {
                    if (f >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    l(c, f++, s)
                } return c.length = f, c
        }
    })
}, function (t, e, r) {
    var i = r(0),
        n = r(217),
        s = r(6);
    i({
        target: "Array",
        proto: !0
    }, {
        copyWithin: n
    }), s("copyWithin")
}, function (t, e, r) {
    "use strict";
    var i = r(2),
        n = r(24),
        s = r(1),
        a = Math.min;
    t.exports = [].copyWithin || function (t, e) {
        var r = i(this),
            o = s(r.length),
            h = n(t, o),
            l = n(e, o),
            p = arguments.length > 2 ? arguments[2] : void 0,
            c = a((void 0 === p ? o : n(p, o)) - l, o - h),
            f = 1;
        for (l < h && h < l + c && (f = -1, l += c - 1, h += c - 1); c-- > 0;) l in r ? r[h] = r[l] : delete r[h], h += f, l += f;
        return r
    }
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(17).every;
    i({
        target: "Array",
        proto: !0,
        forced: r(8)("every")
    }, {
        every: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, r) {
    var i = r(0),
        n = r(220),
        s = r(6);
    i({
        target: "Array",
        proto: !0
    }, {
        fill: n
    }), s("fill")
}, function (t, e, r) {
    "use strict";
    var i = r(2),
        n = r(24),
        s = r(1);
    t.exports = function (t) {
        for (var e = i(this), r = s(e.length), a = arguments.length, o = n(a > 1 ? arguments[1] : void 0, r), h = a > 2 ? arguments[2] : void 0, l = void 0 === h ? r : n(h, r); l > o;) e[o++] = t;
        return e
    }
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(17).filter;
    i({
        target: "Array",
        proto: !0,
        forced: !r(28)("filter")
    }, {
        filter: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(17).find,
        s = r(6),
        a = !0;
    "find" in [] && Array(1).find(function () {
        a = !1
    }), i({
        target: "Array",
        proto: !0,
        forced: a
    }, {
        find: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), s("find")
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(17).findIndex,
        s = r(6),
        a = !0;
    "findIndex" in [] && Array(1).findIndex(function () {
        a = !1
    }), i({
        target: "Array",
        proto: !0,
        forced: a
    }, {
        findIndex: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), s("findIndex")
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(90),
        s = r(2),
        a = r(1),
        o = r(19),
        h = r(27);
    i({
        target: "Array",
        proto: !0
    }, {
        flat: function () {
            var t = arguments.length ? arguments[0] : void 0,
                e = s(this),
                r = a(e.length),
                i = h(e, 0);
            return i.length = n(i, e, e, r, 0, void 0 === t ? 1 : o(t)), i
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(90),
        s = r(2),
        a = r(1),
        o = r(41),
        h = r(27);
    i({
        target: "Array",
        proto: !0
    }, {
        flatMap: function (t) {
            var e, r = s(this),
                i = a(r.length);
            return o(t), (e = h(r, 0)).length = n(e, r, r, i, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(227);
    i({
        target: "Array",
        proto: !0,
        forced: [].forEach != n
    }, {
        forEach: n
    })
}, function (t, e, r) {
    "use strict";
    var i = r(17).forEach,
        n = r(8);
    t.exports = n("forEach") ? function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    } : [].forEach
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(55).includes,
        s = r(6);
    i({
        target: "Array",
        proto: !0
    }, {
        includes: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), s("includes")
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(55).indexOf,
        s = r(8),
        a = [].indexOf,
        o = !!a && 1 / [1].indexOf(1, -0) < 0,
        h = s("indexOf");
    i({
        target: "Array",
        proto: !0,
        forced: o || h
    }, {
        indexOf: function (t) {
            return o ? a.apply(this, arguments) || 0 : n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(16),
        n = r(6),
        s = r(25),
        a = r(47),
        o = r(81),
        h = a.set,
        l = a.getterFor("Array Iterator");
    t.exports = o(Array, "Array", function (t, e) {
        h(this, {
            type: "Array Iterator",
            target: i(t),
            index: 0,
            kind: e
        })
    }, function () {
        var t = l(this),
            e = t.target,
            r = t.kind,
            i = t.index++;
        return !e || i >= e.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == r ? {
            value: i,
            done: !1
        } : "values" == r ? {
            value: e[i],
            done: !1
        } : {
            value: [i, e[i]],
            done: !1
        }
    }, "values"), s.Arguments = s.Array, n("keys"), n("values"), n("entries")
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(40),
        s = r(16),
        a = r(8),
        o = [].join,
        h = n != Object,
        l = a("join", ",");
    i({
        target: "Array",
        proto: !0,
        forced: h || l
    }, {
        join: function (t) {
            return o.call(s(this), void 0 === t ? "," : t)
        }
    })
}, function (t, e, r) {
    var i = r(0),
        n = r(233);
    i({
        target: "Array",
        proto: !0,
        forced: n !== [].lastIndexOf
    }, {
        lastIndexOf: n
    })
}, function (t, e, r) {
    "use strict";
    var i = r(16),
        n = r(19),
        s = r(1),
        a = r(8),
        o = Math.min,
        h = [].lastIndexOf,
        l = !!h && 1 / [1].lastIndexOf(1, -0) < 0,
        p = a("lastIndexOf");
    t.exports = l || p ? function (t) {
        if (l) return h.apply(this, arguments) || 0;
        var e = i(this),
            r = s(e.length),
            a = r - 1;
        for (arguments.length > 1 && (a = o(a, n(arguments[1]))), a < 0 && (a = r + a); a >= 0; a--)
            if (a in e && e[a] === t) return a || 0;
        return -1
    } : h
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(17).map;
    i({
        target: "Array",
        proto: !0,
        forced: !r(28)("map")
    }, {
        map: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(91).left;
    i({
        target: "Array",
        proto: !0,
        forced: r(8)("reduce")
    }, {
        reduce: function (t) {
            return n(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(91).right;
    i({
        target: "Array",
        proto: !0,
        forced: r(8)("reduceRight")
    }, {
        reduceRight: function (t) {
            return n(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(21),
        s = [].reverse,
        a = [1, 2];
    i({
        target: "Array",
        proto: !0,
        forced: String(a) === String(a.reverse())
    }, {
        reverse: function () {
            return n(this) && (this.length = this.length), s.call(this)
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(12),
        s = r(21),
        a = r(24),
        o = r(1),
        h = r(16),
        l = r(26),
        p = r(28),
        c = r(3)("species"),
        f = [].slice,
        u = Math.max;
    i({
        target: "Array",
        proto: !0,
        forced: !p("slice")
    }, {
        slice: function (t, e) {
            var r, i, p, m = h(this),
                d = o(m.length),
                y = a(t, d),
                g = a(void 0 === e ? d : e, d);
            if (s(m) && ("function" != typeof (r = m.constructor) || r !== Array && !s(r.prototype) ? n(r) && null === (r = r[c]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return f.call(m, y, g);
            for (i = new(void 0 === r ? Array : r)(u(g - y, 0)), p = 0; y < g; y++, p++) y in m && l(i, p, m[y]);
            return i.length = p, i
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(17).some;
    i({
        target: "Array",
        proto: !0,
        forced: r(8)("some")
    }, {
        some: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(41),
        s = r(2),
        a = r(4),
        o = r(8),
        h = [].sort,
        l = [1, 2, 3],
        p = a(function () {
            l.sort(void 0)
        }),
        c = a(function () {
            l.sort(null)
        }),
        f = o("sort");
    i({
        target: "Array",
        proto: !0,
        forced: p || !c || f
    }, {
        sort: function (t) {
            return void 0 === t ? h.call(s(this)) : h.call(s(this), n(t))
        }
    })
}, function (t, e, r) {
    r(242)("Array")
}, function (t, e, r) {
    "use strict";
    var i = r(54),
        n = r(11),
        s = r(3),
        a = r(10),
        o = s("species");
    t.exports = function (t) {
        var e = i(t),
            r = n.f;
        a && e && !e[o] && r(e, o, {
            configurable: !0,
            get: function () {
                return this
            }
        })
    }
}, function (t, e, r) {
    "use strict";
    var i = r(0),
        n = r(24),
        s = r(19),
        a = r(1),
        o = r(2),
        h = r(27),
        l = r(26),
        p = r(28),
        c = Math.max,
        f = Math.min;
    i({
        target: "Array",
        proto: !0,
        forced: !p("splice")
    }, {
        splice: function (t, e) {
            var r, i, p, u, m, d, y = o(this),
                g = a(y.length),
                v = n(t, g),
                b = arguments.length;
            if (0 === b ? r = i = 0 : 1 === b ? (r = 0, i = g - v) : (r = b - 2, i = f(c(s(e), 0), g - v)), g + r - i > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (p = h(y, i), u = 0; u < i; u++)(m = v + u) in y && l(p, u, y[m]);
            if (p.length = i, r < i) {
                for (u = v; u < g - i; u++) d = u + r, (m = u + i) in y ? y[d] = y[m] : delete y[d];
                for (u = g; u > g - i + r; u--) delete y[u - 1]
            } else if (r > i)
                for (u = g - i; u > v; u--) d = u + r - 1, (m = u + i - 1) in y ? y[d] = y[m] : delete y[d];
            for (u = 0; u < r; u++) y[u + v] = arguments[u + 2];
            return y.length = g - i + r, p
        }
    })
}, function (t, e, r) {
    r(6)("flat")
}, function (t, e, r) {
    r(6)("flatMap")
}, function (t, e, r) {
    "use strict";
    var i = r(10),
        n = r(6),
        s = r(2),
        a = r(1),
        o = r(11).f;
    !i || "lastItem" in [] || (o(Array.prototype, "lastItem", {
        configurable: !0,
        get: function () {
            var t = s(this),
                e = a(t.length);
            return 0 == e ? void 0 : t[e - 1]
        },
        set: function (t) {
            var e = s(this),
                r = a(e.length);
            return e[0 == r ? 0 : r - 1] = t
        }
    }), n("lastItem"))
}, function (t, e, r) {
    "use strict";
    var i = r(10),
        n = r(6),
        s = r(2),
        a = r(1),
        o = r(11).f;
    !i || "lastIndex" in [] || (o(Array.prototype, "lastIndex", {
        configurable: !0,
        get: function () {
            var t = s(this),
                e = a(t.length);
            return 0 == e ? 0 : e - 1
        }
    }), n("lastIndex"))
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
    "undefined" != typeof navigator && (root = window || {}, factory = function (window) {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            cachedColors = {},
            bm_rounder = Math.round,
            bm_rnd, bm_pow = Math.pow,
            bm_sqrt = Math.sqrt,
            bm_abs = Math.abs,
            bm_floor = Math.floor,
            bm_max = Math.max,
            bm_min = Math.min,
            blitter = 10,
            BMMath = {};

        function ProjectInterface() {
            return {}
        }! function () {
            var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                r = e.length;
            for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function (t) {
            if ("object" === typeof t && t.length) {
                var e, r = createSizedArray(t.length),
                    i = t.length;
                for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
                return r
            }
            return Math.abs(t)
        };
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function roundValues(t) {
            bm_rnd = t ? Math.round : function (t) {
                return t
            }
        }

        function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, r, i) {
            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, r, i) {
            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, r) {
            this.type = t, this.firstFrame = e, this.totalFrames = r
        }

        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
            this.type = t, this.nativeError = e, this.currentTime = currentTime
        }
        roundValues(!1);
        var createElementID = (_count = 0, function () {
                return "__lottie_element_" + ++_count
            }),
            _count;

        function HSVtoRGB(t, e, r) {
            var i, n, s, a, o, h, l, p;
            switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), a % 6) {
                case 0:
                    i = r, n = p, s = h;
                    break;
                case 1:
                    i = l, n = r, s = h;
                    break;
                case 2:
                    i = h, n = r, s = p;
                    break;
                case 3:
                    i = h, n = l, s = r;
                    break;
                case 4:
                    i = p, n = h, s = r;
                    break;
                case 5:
                    i = r, n = h, s = l
            }
            return [i, n, s]
        }

        function RGBtoHSV(t, e, r) {
            var i, n = Math.max(t, e, r),
                s = Math.min(t, e, r),
                a = n - s,
                o = 0 === n ? 0 : a / n,
                h = n / 255;
            switch (n) {
                case s:
                    i = 0;
                    break;
                case t:
                    i = e - r + a * (e < r ? 6 : 0), i /= 6 * a;
                    break;
                case e:
                    i = r - t + 2 * a, i /= 6 * a;
                    break;
                case r:
                    i = t - e + 4 * a, i /= 6 * a
            }
            return [i, o, h]
        }

        function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function () {
            var t, e, r = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 == e.length ? "0" + e : e;
            return function (t, e, i) {
                return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[t] + r[e] + r[i]
            }
        }();

        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function (t, e) {
                if (this._cbs[t])
                    for (var r = this._cbs[t].length, i = 0; i < r; i++) this._cbs[t][i](e)
            },
            addEventListener: function (t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                    function () {
                        this.removeEventListener(t, e)
                    }.bind(this)
            },
            removeEventListener: function (t, e) {
                if (e) {
                    if (this._cbs[t]) {
                        for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                        this._cbs[t].length || (this._cbs[t] = null)
                    }
                } else this._cbs[t] = null
            }
        };
        var createTypedArray = function () {
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function (t, e) {
                return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
            } : function (t, e) {
                var r, i = 0,
                    n = [];
                switch (t) {
                    case "int16":
                    case "uint8c":
                        r = 1;
                        break;
                    default:
                        r = 1.1
                }
                for (i = 0; i < e; i += 1) n.push(r);
                return n
            }
        }();

        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            })
        }

        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }

        function createTag(t) {
            return document.createElement(t)
        }

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
            },
            iterateDynamicProperties: function () {
                this._mdf = !1;
                var t, e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function (t) {
                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var getBlendMode = (blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            }, function (t) {
                return blendModeEnums[t] || ""
            }),
            blendModeEnums, Matrix = function () {
                var t = Math.cos,
                    e = Math.sin,
                    r = Math.tan,
                    i = Math.round;

                function n() {
                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                }

                function s(r) {
                    if (0 === r) return this;
                    var i = t(r),
                        n = e(r);
                    return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function a(r) {
                    if (0 === r) return this;
                    var i = t(r),
                        n = e(r);
                    return this._t(1, 0, 0, 0, 0, i, -n, 0, 0, n, i, 0, 0, 0, 0, 1)
                }

                function o(r) {
                    if (0 === r) return this;
                    var i = t(r),
                        n = e(r);
                    return this._t(i, 0, n, 0, 0, 1, 0, 0, -n, 0, i, 0, 0, 0, 0, 1)
                }

                function h(r) {
                    if (0 === r) return this;
                    var i = t(r),
                        n = e(r);
                    return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function l(t, e) {
                    return this._t(1, e, t, 1, 0, 0)
                }

                function p(t, e) {
                    return this.shear(r(t), r(e))
                }

                function c(i, n) {
                    var s = t(n),
                        a = e(n);
                    return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function f(t, e, r) {
                    return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                }

                function u(t, e, r, i, n, s, a, o, h, l, p, c, f, u, m, d) {
                    return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = n, this.props[5] = s, this.props[6] = a, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = c, this.props[12] = f, this.props[13] = u, this.props[14] = m, this.props[15] = d, this
                }

                function m(t, e, r) {
                    return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
                }

                function d(t, e, r, i, n, s, a, o, h, l, p, c, f, u, m, d) {
                    var y = this.props;
                    if (1 === t && 0 === e && 0 === r && 0 === i && 0 === n && 1 === s && 0 === a && 0 === o && 0 === h && 0 === l && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * s + y[15] * u, y[14] = y[14] * p + y[15] * m, y[15] = y[15] * d, this._identityCalculated = !1, this;
                    var g = y[0],
                        v = y[1],
                        b = y[2],
                        x = y[3],
                        E = y[4],
                        _ = y[5],
                        w = y[6],
                        S = y[7],
                        P = y[8],
                        A = y[9],
                        C = y[10],
                        k = y[11],
                        T = y[12],
                        M = y[13],
                        D = y[14],
                        F = y[15];
                    return y[0] = g * t + v * n + b * h + x * f, y[1] = g * e + v * s + b * l + x * u, y[2] = g * r + v * a + b * p + x * m, y[3] = g * i + v * o + b * c + x * d, y[4] = E * t + _ * n + w * h + S * f, y[5] = E * e + _ * s + w * l + S * u, y[6] = E * r + _ * a + w * p + S * m, y[7] = E * i + _ * o + w * c + S * d, y[8] = P * t + A * n + C * h + k * f, y[9] = P * e + A * s + C * l + k * u, y[10] = P * r + A * a + C * p + k * m, y[11] = P * i + A * o + C * c + k * d, y[12] = T * t + M * n + D * h + F * f, y[13] = T * e + M * s + D * l + F * u, y[14] = T * r + M * a + D * p + F * m, y[15] = T * i + M * o + D * c + F * d, this._identityCalculated = !1, this
                }

                function y() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                }

                function g(t) {
                    for (var e = 0; e < 16;) {
                        if (t.props[e] !== this.props[e]) return !1;
                        e += 1
                    }
                    return !0
                }

                function v(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
                }

                function b(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                }

                function x(t, e, r) {
                    return {
                        x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                        y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                        z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                    }
                }

                function E(t, e, r) {
                    return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
                }

                function _(t, e, r) {
                    return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
                }

                function w(t, e, r) {
                    return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                }

                function S(t) {
                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        r = this.props[5] / e,
                        i = -this.props[1] / e,
                        n = -this.props[4] / e,
                        s = this.props[0] / e,
                        a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                        o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
                    return [t[0] * r + t[1] * n + a, t[0] * i + t[1] * s + o, 0]
                }

                function P(t) {
                    var e, r = t.length,
                        i = [];
                    for (e = 0; e < r; e += 1) i[e] = S(t[e]);
                    return i
                }

                function A(t, e, r) {
                    var i = createTypedArray("float32", 6);
                    if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
                    else {
                        var n = this.props[0],
                            s = this.props[1],
                            a = this.props[4],
                            o = this.props[5],
                            h = this.props[12],
                            l = this.props[13];
                        i[0] = t[0] * n + t[1] * a + h, i[1] = t[0] * s + t[1] * o + l, i[2] = e[0] * n + e[1] * a + h, i[3] = e[0] * s + e[1] * o + l, i[4] = r[0] * n + r[1] * a + h, i[5] = r[0] * s + r[1] * o + l
                    }
                    return i
                }

                function C(t, e, r) {
                    return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
                }

                function k(t, e) {
                    if (this.isIdentity()) return t + "," + e;
                    var r = this.props;
                    return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
                }

                function T() {
                    for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
                    return r
                }

                function M(t) {
                    return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
                }

                function D() {
                    var t = this.props;
                    return "matrix(" + M(t[0]) + "," + M(t[1]) + "," + M(t[4]) + "," + M(t[5]) + "," + M(t[12]) + "," + M(t[13]) + ")"
                }
                return function () {
                    this.reset = n, this.rotate = s, this.rotateX = a, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = c, this.shear = l, this.scale = f, this.setTransform = u, this.translate = m, this.transform = d, this.applyToPoint = x, this.applyToX = E, this.applyToY = _, this.applyToZ = w, this.applyToPointArray = C, this.applyToTriplePoints = A, this.applyToPointStringified = k, this.toCSS = T, this.to2dCSS = D, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = P, this.inversePoint = S, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                }
            }();
        ! function (t, e) {
            var r, i = this,
                n = 256,
                s = 6,
                a = "random",
                o = e.pow(n, s),
                h = e.pow(2, 52),
                l = 2 * h,
                p = n - 1;

            function c(t) {
                var e, r = t.length,
                    i = this,
                    s = 0,
                    a = i.i = i.j = 0,
                    o = i.S = [];
                for (r || (t = [r++]); s < n;) o[s] = s++;
                for (s = 0; s < n; s++) o[s] = o[a = p & a + t[s % r] + (e = o[s])], o[a] = e;
                i.g = function (t) {
                    for (var e, r = 0, s = i.i, a = i.j, o = i.S; t--;) e = o[s = p & s + 1], r = r * n + o[p & (o[s] = o[a = p & a + e]) + (o[a] = e)];
                    return i.i = s, i.j = a, r
                }
            }

            function f(t, e) {
                return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
            }

            function u(t, e) {
                for (var r, i = t + "", n = 0; n < i.length;) e[p & n] = p & (r ^= 19 * e[p & n]) + i.charCodeAt(n++);
                return m(e)
            }

            function m(t) {
                return String.fromCharCode.apply(0, t)
            }
            e["seed" + a] = function (p, d, y) {
                var g = [],
                    v = u(function t(e, r) {
                        var i, n = [],
                            s = typeof e;
                        if (r && "object" == s)
                            for (i in e) try {
                                n.push(t(e[i], r - 1))
                            } catch (t) {}
                        return n.length ? n : "string" == s ? e : e + "\0"
                    }((d = !0 === d ? {
                        entropy: !0
                    } : d || {}).entropy ? [p, m(t)] : null === p ? function () {
                        try {
                            if (r) return m(r.randomBytes(n));
                            var e = new Uint8Array(n);
                            return (i.crypto || i.msCrypto).getRandomValues(e), m(e)
                        } catch (e) {
                            var s = i.navigator,
                                a = s && s.plugins;
                            return [+new Date, i, a, i.screen, m(t)]
                        }
                    }() : p, 3), g),
                    b = new c(g),
                    x = function () {
                        for (var t = b.g(s), e = o, r = 0; t < h;) t = (t + r) * n, e *= n, r = b.g(1);
                        for (; t >= l;) t /= 2, e /= 2, r >>>= 1;
                        return (t + r) / e
                    };
                return x.int32 = function () {
                    return 0 | b.g(4)
                }, x.quick = function () {
                    return b.g(4) / 4294967296
                }, x.double = x, u(m(b.S), t), (d.pass || y || function (t, r, i, n) {
                    return n && (n.S && f(n, b), t.state = function () {
                        return f(b, {})
                    }), i ? (e[a] = t, r) : t
                })(x, v, "global" in d ? d.global : this == e, d.state)
            }, u(e.random(), t)
        }([], BMMath);
        var BezierFactory = function () {
            var t = {
                    getBezierEasing: function (t, r, i, n, s) {
                        var a = s || ("bez_" + t + "_" + r + "_" + i + "_" + n).replace(/\./g, "p");
                        if (e[a]) return e[a];
                        var o = new u([t, r, i, n]);
                        return e[a] = o, o
                    }
                },
                e = {};
            var r = 4,
                i = 1e-7,
                n = 10,
                s = 11,
                a = 1 / (s - 1),
                o = "function" == typeof Float32Array;

            function h(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function l(t, e) {
                return 3 * e - 6 * t
            }

            function p(t) {
                return 3 * t
            }

            function c(t, e, r) {
                return ((h(e, r) * t + l(e, r)) * t + p(e)) * t
            }

            function f(t, e, r) {
                return 3 * h(e, r) * t * t + 2 * l(e, r) * t + p(e)
            }

            function u(t) {
                this._p = t, this._mSampleValues = o ? new Float32Array(s) : new Array(s), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return u.prototype = {
                get: function (t) {
                    var e = this._p[0],
                        r = this._p[1],
                        i = this._p[2],
                        n = this._p[3];
                    return this._precomputed || this._precompute(), e === r && i === n ? t : 0 === t ? 0 : 1 === t ? 1 : c(this._getTForX(t), r, n)
                },
                _precompute: function () {
                    var t = this._p[0],
                        e = this._p[1],
                        r = this._p[2],
                        i = this._p[3];
                    this._precomputed = !0, t === e && r === i || this._calcSampleValues()
                },
                _calcSampleValues: function () {
                    for (var t = this._p[0], e = this._p[2], r = 0; r < s; ++r) this._mSampleValues[r] = c(r * a, t, e)
                },
                _getTForX: function (t) {
                    for (var e = this._p[0], o = this._p[2], h = this._mSampleValues, l = 0, p = 1, u = s - 1; p !== u && h[p] <= t; ++p) l += a;
                    var m = l + (t - h[--p]) / (h[p + 1] - h[p]) * a,
                        d = f(m, e, o);
                    return d >= .001 ? function (t, e, i, n) {
                        for (var s = 0; s < r; ++s) {
                            var a = f(e, i, n);
                            if (0 === a) return e;
                            e -= (c(e, i, n) - t) / a
                        }
                        return e
                    }(t, m, e, o) : 0 === d ? m : function (t, e, r, s, a) {
                        var o, h, l = 0;
                        do {
                            (o = c(h = e + (r - e) / 2, s, a) - t) > 0 ? r = h : e = h
                        } while (Math.abs(o) > i && ++l < n);
                        return h
                    }(t, l, l + a, e, o)
                }
            }, t
        }();

        function extendPrototype(t, e) {
            var r, i, n = t.length;
            for (r = 0; r < n; r += 1)
                for (var s in i = t[r].prototype) i.hasOwnProperty(s) && (e.prototype[s] = i[s])
        }

        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t, e
        }

        function bezFunction() {
            Math;

            function t(t, e, r, i, n, s) {
                var a = t * i + e * n + r * s - n * i - s * t - r * e;
                return a > -.001 && a < .001
            }
            var e = function (t, e, r, i) {
                var n, s, a, o, h, l, p = defaultCurveSegments,
                    c = 0,
                    f = [],
                    u = [],
                    m = bezier_length_pool.newElement();
                for (a = r.length, n = 0; n < p; n += 1) {
                    for (h = n / (p - 1), l = 0, s = 0; s < a; s += 1) o = bm_pow(1 - h, 3) * t[s] + 3 * bm_pow(1 - h, 2) * h * r[s] + 3 * (1 - h) * bm_pow(h, 2) * i[s] + bm_pow(h, 3) * e[s], f[s] = o, null !== u[s] && (l += bm_pow(f[s] - u[s], 2)), u[s] = f[s];
                    l && (c += l = bm_sqrt(l)), m.percents[n] = h, m.lengths[n] = c
                }
                return m.addedLength = c, m
            };

            function r(t) {
                this.segmentLength = 0, this.points = new Array(t)
            }

            function i(t, e) {
                this.partialLength = t, this.point = e
            }
            var n, s = (n = {}, function (e, s, a, o) {
                var h = (e[0] + "_" + e[1] + "_" + s[0] + "_" + s[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                if (!n[h]) {
                    var l, p, c, f, u, m, d, y = defaultCurveSegments,
                        g = 0,
                        v = null;
                    2 === e.length && (e[0] != s[0] || e[1] != s[1]) && t(e[0], e[1], s[0], s[1], e[0] + a[0], e[1] + a[1]) && t(e[0], e[1], s[0], s[1], s[0] + o[0], s[1] + o[1]) && (y = 2);
                    var b = new r(y);
                    for (c = a.length, l = 0; l < y; l += 1) {
                        for (d = createSizedArray(c), u = l / (y - 1), m = 0, p = 0; p < c; p += 1) f = bm_pow(1 - u, 3) * e[p] + 3 * bm_pow(1 - u, 2) * u * (e[p] + a[p]) + 3 * (1 - u) * bm_pow(u, 2) * (s[p] + o[p]) + bm_pow(u, 3) * s[p], d[p] = f, null !== v && (m += bm_pow(d[p] - v[p], 2));
                        g += m = bm_sqrt(m), b.points[l] = new i(m, d), v = d
                    }
                    b.segmentLength = g, n[h] = b
                }
                return n[h]
            });

            function a(t, e) {
                var r = e.percents,
                    i = e.lengths,
                    n = r.length,
                    s = bm_floor((n - 1) * t),
                    a = t * e.addedLength,
                    o = 0;
                if (s === n - 1 || 0 === s || a === i[s]) return r[s];
                for (var h = i[s] > a ? -1 : 1, l = !0; l;)
                    if (i[s] <= a && i[s + 1] > a ? (o = (a - i[s]) / (i[s + 1] - i[s]), l = !1) : s += h, s < 0 || s >= n - 1) {
                        if (s === n - 1) return r[s];
                        l = !1
                    } return r[s] + (r[s + 1] - r[s]) * o
            }
            var o = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function (t) {
                    var r, i = segments_length_pool.newElement(),
                        n = t.c,
                        s = t.v,
                        a = t.o,
                        o = t.i,
                        h = t._length,
                        l = i.lengths,
                        p = 0;
                    for (r = 0; r < h - 1; r += 1) l[r] = e(s[r], s[r + 1], a[r], o[r + 1]), p += l[r].addedLength;
                    return n && h && (l[r] = e(s[r], s[0], a[r], o[0]), p += l[r].addedLength), i.totalLength = p, i
                },
                getNewSegment: function (t, e, r, i, n, s, h) {
                    var l, p = a(n = n < 0 ? 0 : n > 1 ? 1 : n, h),
                        c = a(s = s > 1 ? 1 : s, h),
                        f = t.length,
                        u = 1 - p,
                        m = 1 - c,
                        d = u * u * u,
                        y = p * u * u * 3,
                        g = p * p * u * 3,
                        v = p * p * p,
                        b = u * u * m,
                        x = p * u * m + u * p * m + u * u * c,
                        E = p * p * m + u * p * c + p * u * c,
                        _ = p * p * c,
                        w = u * m * m,
                        S = p * m * m + u * c * m + u * m * c,
                        P = p * c * m + u * c * c + p * m * c,
                        A = p * c * c,
                        C = m * m * m,
                        k = c * m * m + m * c * m + m * m * c,
                        T = c * c * m + m * c * c + c * m * c,
                        M = c * c * c;
                    for (l = 0; l < f; l += 1) o[4 * l] = Math.round(1e3 * (d * t[l] + y * r[l] + g * i[l] + v * e[l])) / 1e3, o[4 * l + 1] = Math.round(1e3 * (b * t[l] + x * r[l] + E * i[l] + _ * e[l])) / 1e3, o[4 * l + 2] = Math.round(1e3 * (w * t[l] + S * r[l] + P * i[l] + A * e[l])) / 1e3, o[4 * l + 3] = Math.round(1e3 * (C * t[l] + k * r[l] + T * i[l] + M * e[l])) / 1e3;
                    return o
                },
                getPointInSegment: function (t, e, r, i, n, s) {
                    var o = a(n, s),
                        h = 1 - o;
                    return [Math.round(1e3 * (h * h * h * t[0] + (o * h * h + h * o * h + h * h * o) * r[0] + (o * o * h + h * o * o + o * h * o) * i[0] + o * o * o * e[0])) / 1e3, Math.round(1e3 * (h * h * h * t[1] + (o * h * h + h * o * h + h * h * o) * r[1] + (o * o * h + h * o * o + o * h * o) * i[1] + o * o * o * e[1])) / 1e3]
                },
                buildBezierData: s,
                pointOnLine2D: t,
                pointOnLine3D: function (e, r, i, n, s, a, o, h, l) {
                    if (0 === i && 0 === a && 0 === l) return t(e, r, n, s, o, h);
                    var p, c = Math.sqrt(Math.pow(n - e, 2) + Math.pow(s - r, 2) + Math.pow(a - i, 2)),
                        f = Math.sqrt(Math.pow(o - e, 2) + Math.pow(h - r, 2) + Math.pow(l - i, 2)),
                        u = Math.sqrt(Math.pow(o - n, 2) + Math.pow(h - s, 2) + Math.pow(l - a, 2));
                    return (p = c > f ? c > u ? c - f - u : u - f - c : u > f ? u - f - c : f - c - u) > -1e-4 && p < 1e-4
                }
            }
        }! function () {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function (e, r) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - t)),
                    s = setTimeout(function () {
                        e(i + n)
                    }, n);
                return t = i + n, s
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
                clearTimeout(t)
            })
        }();
        var bez = bezFunction();

        function dataFunctionManager() {
            function t(t, e) {
                for (var r = 0, i = e.length; r < i;) {
                    if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
                    r += 1
                }
            }

            function e(t) {
                var i, n, s;
                for (i = t.length - 1; i >= 0; i -= 1)
                    if ("sh" == t[i].ty) {
                        if (t[i].ks.k.i) r(t[i].ks.k);
                        else
                            for (s = t[i].ks.k.length, n = 0; n < s; n += 1) t[i].ks.k[n].s && r(t[i].ks.k[n].s[0]), t[i].ks.k[n].e && r(t[i].ks.k[n].e[0]);
                        !0
                    } else "gr" == t[i].ty && e(t[i].it)
            }

            function r(t) {
                var e, r = t.i.length;
                for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
            }

            function i(t, e) {
                var r = e ? e.split(".") : [100, 100, 100];
                return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && void 0))
            }
            var n, s = function () {
                    var t = [4, 4, 14];

                    function e(t) {
                        var e, r, i, n = t.length;
                        for (e = 0; e < n; e += 1) 5 === t[e].ty && (r = t[e], i = void 0, i = r.t.d, r.t.d = {
                            k: [{
                                s: i,
                                t: 0
                            }]
                        })
                    }
                    return function (r) {
                        if (i(t, r.v) && (e(r.layers), r.assets)) {
                            var n, s = r.assets.length;
                            for (n = 0; n < s; n += 1) r.assets[n].layers && e(r.assets[n].layers)
                        }
                    }
                }(),
                a = (n = [4, 7, 99], function (t) {
                    if (t.chars && !i(n, t.v)) {
                        var e, s, a, o, h, l = t.chars.length;
                        for (e = 0; e < l; e += 1)
                            if (t.chars[e].data && t.chars[e].data.shapes)
                                for (a = (h = t.chars[e].data.shapes[0].it).length, s = 0; s < a; s += 1)(o = h[s].ks.k).__converted || (r(h[s].ks.k), o.__converted = !0)
                    }
                }),
                o = function () {
                    var t = [4, 1, 9];

                    function e(t) {
                        var r, i, n, s = t.length;
                        for (r = 0; r < s; r += 1)
                            if ("gr" === t[r].ty) e(t[r].it);
                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                            if (t[r].c.k && t[r].c.k[0].i)
                                for (n = t[r].c.k.length, i = 0; i < n; i += 1) t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255), t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
                            else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                    }

                    function r(t) {
                        var r, i = t.length;
                        for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes)
                    }
                    return function (e) {
                        if (i(t, e.v) && (r(e.layers), e.assets)) {
                            var n, s = e.assets.length;
                            for (n = 0; n < s; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                        }
                    }
                }(),
                h = function () {
                    var t = [4, 4, 18];

                    function e(t) {
                        var r, i, n;
                        for (r = t.length - 1; r >= 0; r -= 1)
                            if ("sh" == t[r].ty) {
                                if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                                else
                                    for (n = t[r].ks.k.length, i = 0; i < n; i += 1) t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed), t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                                !0
                            } else "gr" == t[r].ty && e(t[r].it)
                    }

                    function r(t) {
                        var r, i, n, s, a, o, h = t.length;
                        for (i = 0; i < h; i += 1) {
                            if ((r = t[i]).hasMask) {
                                var l = r.masksProperties;
                                for (s = l.length, n = 0; n < s; n += 1)
                                    if (l[n].pt.k.i) l[n].pt.k.c = l[n].cl;
                                    else
                                        for (o = l[n].pt.k.length, a = 0; a < o; a += 1) l[n].pt.k[a].s && (l[n].pt.k[a].s[0].c = l[n].cl), l[n].pt.k[a].e && (l[n].pt.k[a].e[0].c = l[n].cl)
                            }
                            4 === r.ty && e(r.shapes)
                        }
                    }
                    return function (e) {
                        if (i(t, e.v) && (r(e.layers), e.assets)) {
                            var n, s = e.assets.length;
                            for (n = 0; n < s; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                        }
                    }
                }();
            var l = {};
            return l.completeData = function (i, n) {
                i.__complete || (o(i), s(i), a(i), h(i), function i(n, s, a) {
                    var o, h, l, p, c, f, u, m = n.length;
                    for (h = 0; h < m; h += 1)
                        if ("ks" in (o = n[h]) && !o.completed) {
                            if (o.completed = !0, o.tt && (n[h - 1].td = o.tt), o.hasMask) {
                                var d = o.masksProperties;
                                for (p = d.length, l = 0; l < p; l += 1)
                                    if (d[l].pt.k.i) r(d[l].pt.k);
                                    else
                                        for (f = d[l].pt.k.length, c = 0; c < f; c += 1) d[l].pt.k[c].s && r(d[l].pt.k[c].s[0]), d[l].pt.k[c].e && r(d[l].pt.k[c].e[0])
                            }
                            0 === o.ty ? (o.layers = t(o.refId, s), i(o.layers, s, a)) : 4 === o.ty ? e(o.shapes) : 5 == o.ty && (0 !== (u = o).t.a.length || "m" in u.t.p || (u.singleShape = !0))
                        }
                }(i.layers, i.assets, n), i.__complete = !0)
            }, l
        }
        var dataManager = dataFunctionManager(),
            FontManager = function () {
                var t = 5e3,
                    e = {
                        w: 0,
                        size: 0,
                        shapes: []
                    },
                    r = [];

                function i(t, e) {
                    var r = createTag("span");
                    r.style.fontFamily = e;
                    var i = createTag("span");
                    i.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
                    var n = i.offsetWidth;
                    return i.style.fontFamily = t + ", " + e, {
                        node: i,
                        w: n,
                        parent: r
                    }
                }

                function n(t, e) {
                    var r = createNS("text");
                    return r.style.fontSize = "100px", r.setAttribute("font-family", e.fFamily), r.setAttribute("font-style", e.fStyle), r.setAttribute("font-weight", e.fWeight), r.textContent = "1", e.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily, t.appendChild(r), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, r
                }
                r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var s = function () {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now()
                };
                return s.getCombinedCharacterCodes = function () {
                    return r
                }, s.prototype.addChars = function (t) {
                    if (t) {
                        this.chars || (this.chars = []);
                        var e, r, i, n = t.length,
                            s = this.chars.length;
                        for (e = 0; e < n; e += 1) {
                            for (r = 0, i = !1; r < s;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
                            i || (this.chars.push(t[e]), s += 1)
                        }
                    }
                }, s.prototype.addFonts = function (t, e) {
                    if (t) {
                        if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                        var r, s = t.list,
                            a = s.length,
                            o = a;
                        for (r = 0; r < a; r += 1) {
                            var h, l, p = !0;
                            if (s[r].loaded = !1, s[r].monoCase = i(s[r].fFamily, "monospace"), s[r].sansCase = i(s[r].fFamily, "sans-serif"), s[r].fPath) {
                                if ("p" === s[r].fOrigin || 3 === s[r].origin) {
                                    if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[r].fFamily + '"], style[f-origin="3"][f-family="' + s[r].fFamily + '"]')).length > 0 && (p = !1), p) {
                                        var c = createTag("style");
                                        c.setAttribute("f-forigin", s[r].fOrigin), c.setAttribute("f-origin", s[r].origin), c.setAttribute("f-family", s[r].fFamily), c.type = "text/css", c.innerHTML = "@font-face {font-family: " + s[r].fFamily + "; font-style: normal; src: url('" + s[r].fPath + "');}", e.appendChild(c)
                                    }
                                } else if ("g" === s[r].fOrigin || 1 === s[r].origin) {
                                    for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l++) - 1 !== h[l].href.indexOf(s[r].fPath) && (p = !1);
                                    if (p) {
                                        var f = createTag("link");
                                        f.setAttribute("f-forigin", s[r].fOrigin), f.setAttribute("f-origin", s[r].origin), f.type = "text/css", f.rel = "stylesheet", f.href = s[r].fPath, document.body.appendChild(f)
                                    }
                                } else if ("t" === s[r].fOrigin || 2 === s[r].origin) {
                                    for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l++) s[r].fPath === h[l].src && (p = !1);
                                    if (p) {
                                        var u = createTag("link");
                                        u.setAttribute("f-forigin", s[r].fOrigin), u.setAttribute("f-origin", s[r].origin), u.setAttribute("rel", "stylesheet"), u.setAttribute("href", s[r].fPath), e.appendChild(u)
                                    }
                                }
                            } else s[r].loaded = !0, o -= 1;
                            s[r].helper = n(e, s[r]), s[r].cache = {}, this.fonts.push(s[r])
                        }
                        0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    } else this.isLoaded = !0
                }, s.prototype.getCharData = function (t, r, i) {
                    for (var n = 0, s = this.chars.length; n < s;) {
                        if (this.chars[n].ch === t && this.chars[n].style === r && this.chars[n].fFamily === i) return this.chars[n];
                        n += 1
                    }
                    return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, r, i), e
                }, s.prototype.getFontByName = function (t) {
                    for (var e = 0, r = this.fonts.length; e < r;) {
                        if (this.fonts[e].fName === t) return this.fonts[e];
                        e += 1
                    }
                    return this.fonts[0]
                }, s.prototype.measureText = function (t, e, r) {
                    var i = this.getFontByName(e),
                        n = t.charCodeAt(0);
                    if (!i.cache[n + 1]) {
                        var s = i.helper;
                        if (" " === t) {
                            s.textContent = "|" + t + "|";
                            var a = s.getComputedTextLength();
                            s.textContent = "||";
                            var o = s.getComputedTextLength();
                            i.cache[n + 1] = (a - o) / 100
                        } else s.textContent = t, i.cache[n + 1] = s.getComputedTextLength() / 100
                    }
                    return i.cache[n + 1] * r
                }, s.prototype.checkLoadedFonts = function () {
                    var e, r, i, n = this.fonts.length,
                        s = n;
                    for (e = 0; e < n; e += 1) this.fonts[e].loaded ? s -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (r = this.fonts[e].monoCase.node, i = this.fonts[e].monoCase.w, r.offsetWidth !== i ? (s -= 1, this.fonts[e].loaded = !0) : (r = this.fonts[e].sansCase.node, i = this.fonts[e].sansCase.w, r.offsetWidth !== i && (s -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                    0 !== s && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function () {
                        this.isLoaded = !0
                    }.bind(this), 0)
                }, s.prototype.loaded = function () {
                    return this.isLoaded
                }, s
            }(),
            PropertyFactory = function () {
                var t = initialDefaultFrame,
                    e = Math.abs;

                function r(t, e) {
                    var r, n = this.offsetTime;
                    "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                    for (var s, a, o, h, l, p, c, f, u = e.lastIndex, m = u, d = this.keyframes.length - 1, y = !0; y;) {
                        if (s = this.keyframes[m], a = this.keyframes[m + 1], m === d - 1 && t >= a.t - n) {
                            s.h && (s = a), u = 0;
                            break
                        }
                        if (a.t - n > t) {
                            u = m;
                            break
                        }
                        m < d - 1 ? m += 1 : (u = 0, y = !1)
                    }
                    var g, v, b, x, E, _, w, S, P, A, C = a.t - n,
                        k = s.t - n;
                    if (s.to) {
                        s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                        var T = s.bezierData;
                        if (t >= C || t < k) {
                            var M = t >= C ? T.points.length - 1 : 0;
                            for (h = T.points[M].point.length, o = 0; o < h; o += 1) r[o] = T.points[M].point[o]
                        } else {
                            s.__fnct ? f = s.__fnct : (f = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = f), l = f((t - k) / (C - k));
                            var D, F = T.segmentLength * l,
                                I = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                            for (c = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, y = !0, p = T.points.length; y;) {
                                if (I += T.points[c].partialLength, 0 === F || 0 === l || c === T.points.length - 1) {
                                    for (h = T.points[c].point.length, o = 0; o < h; o += 1) r[o] = T.points[c].point[o];
                                    break
                                }
                                if (F >= I && F < I + T.points[c + 1].partialLength) {
                                    for (D = (F - I) / T.points[c + 1].partialLength, h = T.points[c].point.length, o = 0; o < h; o += 1) r[o] = T.points[c].point[o] + (T.points[c + 1].point[o] - T.points[c].point[o]) * D;
                                    break
                                }
                                c < p - 1 ? c += 1 : y = !1
                            }
                            e._lastPoint = c, e._lastAddedLength = I - T.points[c].partialLength, e._lastKeyframeIndex = m
                        }
                    } else {
                        var R, V, B, O, L;
                        if (d = s.s.length, g = a.s || s.e, this.sh && 1 !== s.h)
                            if (t >= C) r[0] = g[0], r[1] = g[1], r[2] = g[2];
                            else if (t <= k) r[0] = s.s[0], r[1] = s.s[1], r[2] = s.s[2];
                        else {
                            var z = i(s.s),
                                G = i(g);
                            v = r, b = function (t, e, r) {
                                var i, n, s, a, o, h = [],
                                    l = t[0],
                                    p = t[1],
                                    c = t[2],
                                    f = t[3],
                                    u = e[0],
                                    m = e[1],
                                    d = e[2],
                                    y = e[3];
                                (n = l * u + p * m + c * d + f * y) < 0 && (n = -n, u = -u, m = -m, d = -d, y = -y);
                                1 - n > 1e-6 ? (i = Math.acos(n), s = Math.sin(i), a = Math.sin((1 - r) * i) / s, o = Math.sin(r * i) / s) : (a = 1 - r, o = r);
                                return h[0] = a * l + o * u, h[1] = a * p + o * m, h[2] = a * c + o * d, h[3] = a * f + o * y, h
                            }(z, G, (t - k) / (C - k)), x = b[0], E = b[1], _ = b[2], w = b[3], S = Math.atan2(2 * E * w - 2 * x * _, 1 - 2 * E * E - 2 * _ * _), P = Math.asin(2 * x * E + 2 * _ * w), A = Math.atan2(2 * x * w - 2 * E * _, 1 - 2 * x * x - 2 * _ * _), v[0] = S / degToRads, v[1] = P / degToRads, v[2] = A / degToRads
                        } else
                            for (m = 0; m < d; m += 1) 1 !== s.h && (t >= C ? l = 1 : t < k ? l = 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[m] ? f = s.__fnct[m] : (R = void 0 === s.o.x[m] ? s.o.x[0] : s.o.x[m], V = void 0 === s.o.y[m] ? s.o.y[0] : s.o.y[m], B = void 0 === s.i.x[m] ? s.i.x[0] : s.i.x[m], O = void 0 === s.i.y[m] ? s.i.y[0] : s.i.y[m], f = BezierFactory.getBezierEasing(R, V, B, O).get, s.__fnct[m] = f)) : s.__fnct ? f = s.__fnct : (R = s.o.x, V = s.o.y, B = s.i.x, O = s.i.y, f = BezierFactory.getBezierEasing(R, V, B, O).get, s.__fnct = f), l = f((t - k) / (C - k)))), g = a.s || s.e, L = 1 === s.h ? s.s[m] : s.s[m] + (g[m] - s.s[m]) * l, "multidimensional" === this.propType ? r[m] = L : r = L
                    }
                    return e.lastIndex = u, r
                }

                function i(t) {
                    var e = t[0] * degToRads,
                        r = t[1] * degToRads,
                        i = t[2] * degToRads,
                        n = Math.cos(e / 2),
                        s = Math.cos(r / 2),
                        a = Math.cos(i / 2),
                        o = Math.sin(e / 2),
                        h = Math.sin(r / 2),
                        l = Math.sin(i / 2);
                    return [o * h * a + n * s * l, o * s * a + n * h * l, n * h * a - o * s * l, n * s * a - o * h * l]
                }

                function n() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                        r = this.keyframes[0].t - this.offsetTime,
                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < r && e < r))) {
                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var n = this.interpolateValue(e, this._caching);
                        this.pv = n
                    }
                    return this._caching.lastFrame = e, this.pv
                }

                function s(t) {
                    var r;
                    if ("unidimensional" === this.propType) r = t * this.mult, e(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0);
                    else
                        for (var i = 0, n = this.v.length; i < n;) r = t[i] * this.mult, e(this.v[i] - r) > 1e-5 && (this.v[i] = r, this._mdf = !0), i += 1
                }

                function a() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var t, e = this.effectsSequence.length,
                                r = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function o(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function h(t, e, r, i) {
                    this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.addEffect = o
                }

                function l(t, e, r, i) {
                    this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var n, h = e.k.length;
                    this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h);
                    createTypedArray("float32", h);
                    for (this.vel = createTypedArray("float32", h), n = 0; n < h; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = a, this.setVValue = s, this.addEffect = o
                }

                function p(e, i, h, l) {
                    this.propType = "unidimensional", this.keyframes = i.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = i, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.interpolateValue = r, this.effectsSequence = [n.bind(this)], this.addEffect = o
                }

                function c(e, i, h, l) {
                    this.propType = "multidimensional";
                    var p, c, f, u, m, d = i.k.length;
                    for (p = 0; p < d - 1; p += 1) i.k[p].to && i.k[p].s && i.k[p].e && (c = i.k[p].s, f = i.k[p].e, u = i.k[p].to, m = i.k[p].ti, (2 === c.length && (c[0] !== f[0] || c[1] !== f[1]) && bez.pointOnLine2D(c[0], c[1], f[0], f[1], c[0] + u[0], c[1] + u[1]) && bez.pointOnLine2D(c[0], c[1], f[0], f[1], f[0] + m[0], f[1] + m[1]) || 3 === c.length && (c[0] !== f[0] || c[1] !== f[1] || c[2] !== f[2]) && bez.pointOnLine3D(c[0], c[1], c[2], f[0], f[1], f[2], c[0] + u[0], c[1] + u[1], c[2] + u[2]) && bez.pointOnLine3D(c[0], c[1], c[2], f[0], f[1], f[2], f[0] + m[0], f[1] + m[1], f[2] + m[2])) && (i.k[p].to = null, i.k[p].ti = null), c[0] === f[0] && c[1] === f[1] && 0 === u[0] && 0 === u[1] && 0 === m[0] && 0 === m[1] && (2 === c.length || c[2] === f[2] && 0 === u[2] && 0 === m[2]) && (i.k[p].to = null, i.k[p].ti = null));
                    this.effectsSequence = [n.bind(this)], this.keyframes = i.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = a, this.setVValue = s, this.interpolateValue = r, this.frameId = -1;
                    var y = i.k[0].s.length;
                    for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), p = 0; p < y; p += 1) this.v[p] = t, this.pv[p] = t;
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: createTypedArray("float32", y)
                    }, this.addEffect = o
                }
                return {
                    getProp: function (t, e, r, i, n) {
                        var s;
                        if (e.k.length)
                            if ("number" == typeof e.k[0]) s = new l(t, e, i, n);
                            else switch (r) {
                                case 0:
                                    s = new p(t, e, i, n);
                                    break;
                                case 1:
                                    s = new c(t, e, i, n)
                            } else s = new h(t, e, i, n);
                        return s.effectsSequence.length && n.addDynamicProperty(s), s
                    }
                }
            }(),
            TransformPropertyFactory = function () {
                function t(t, e, r) {
                    if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                            k: [0, 0, 0]
                        }, 1, 0, this), e.rx) {
                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                            var i, n = e.or.k.length;
                            for (i = 0; i < n; i += 1) e.or.k[i].to = e.or.k[i].ti = null
                        }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                    } else this.r = PropertyFactory.getProp(t, e.r || {
                        k: 0
                    }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                        _mdf: !1,
                        v: 1
                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                }
                return t.prototype = {
                    applyToMatrix: function (t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function (t) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var e, r, i = this.elem.globalData.frameRate;
                                    if (this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (e = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        e = [], r = [];
                                        var n = this.px,
                                            s = this.py;
                                        n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t ? (e[0] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), e[1] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), r[0] = n.getValueAtTime(n.keyframes[0].t / i, 0), r[1] = s.getValueAtTime(s.keyframes[0].t / i, 0)) : n._caching.lastFrame + n.offsetTime >= n.keyframes[n.keyframes.length - 1].t ? (e[0] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), e[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), r[0] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0), r[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0)) : (e = [n.pv, s.pv], r[0] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime), r[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime))
                                    }
                                    this.v.rotate(-Math.atan2(e[1] - r[1], e[0] - r[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function () {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            if (this.r) {
                                if (this.r.effectsSequence.length) return;
                                this.pre.rotate(-this.r.v), this.appliedTransformations = 4
                            } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function () {}
                }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function (t) {
                    this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                    getTransformProperty: function (e, r, i) {
                        return new t(e, r, i)
                    }
                }
            }();

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function (t, e) {
            this.c = t, this.setLength(e);
            for (var r = 0; r < e;) this.v[r] = point_pool.newElement(), this.o[r] = point_pool.newElement(), this.i[r] = point_pool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function (t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t
        }, ShapePath.prototype.doubleArrayLength = function () {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function (t, e, r, i, n) {
            var s;
            switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                case "v":
                    s = this.v;
                    break;
                case "i":
                    s = this.i;
                    break;
                case "o":
                    s = this.o
            }(!s[i] || s[i] && !n) && (s[i] = point_pool.newElement()), s[i][0] = t, s[i][1] = e
        }, ShapePath.prototype.setTripleAt = function (t, e, r, i, n, s, a, o) {
            this.setXYAt(t, e, "v", a, o), this.setXYAt(r, i, "o", a, o), this.setXYAt(n, s, "i", a, o)
        }, ShapePath.prototype.reverse = function () {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v,
                r = this.o,
                i = this.i,
                n = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), n = 1);
            var s, a = this._length - 1,
                o = this._length;
            for (s = n; s < o; s += 1) t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], r[a][0], r[a][1], s, !1), a -= 1;
            return t
        };
        var ShapePropertyFactory = function () {
                var t = -999999;

                function e(t, e, r) {
                    var i, n, s, a, o, h, l, p, c, f = r.lastIndex,
                        u = this.keyframes;
                    if (t < u[0].t - this.offsetTime) i = u[0].s[0], s = !0, f = 0;
                    else if (t >= u[u.length - 1].t - this.offsetTime) i = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0], s = !0;
                    else {
                        for (var m, d, y = f, g = u.length - 1, v = !0; v && (m = u[y], !((d = u[y + 1]).t - this.offsetTime > t));) y < g - 1 ? y += 1 : v = !1;
                        if (f = y, !(s = 1 === m.h)) {
                            if (t >= d.t - this.offsetTime) p = 1;
                            else if (t < m.t - this.offsetTime) p = 0;
                            else {
                                var b;
                                m.__fnct ? b = m.__fnct : (b = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, m.__fnct = b), p = b((t - (m.t - this.offsetTime)) / (d.t - this.offsetTime - (m.t - this.offsetTime)))
                            }
                            n = d.s ? d.s[0] : m.e[0]
                        }
                        i = m.s[0]
                    }
                    for (h = e._length, l = i.i[0].length, r.lastIndex = f, a = 0; a < h; a += 1)
                        for (o = 0; o < l; o += 1) c = s ? i.i[a][o] : i.i[a][o] + (n.i[a][o] - i.i[a][o]) * p, e.i[a][o] = c, c = s ? i.o[a][o] : i.o[a][o] + (n.o[a][o] - i.o[a][o]) * p, e.o[a][o] = c, c = s ? i.v[a][o] : i.v[a][o] + (n.v[a][o] - i.v[a][o]) * p, e.v[a][o] = c
                }

                function r() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                        r = this.keyframes[0].t - this.offsetTime,
                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        n = this._caching.lastFrame;
                    return n !== t && (n < r && e < r || n > i && e > i) || (this._caching.lastIndex = n < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                }

                function i() {
                    this.paths = this.localShapeCollection
                }

                function n(t) {
                    (function (t, e) {
                        if (t._length !== e._length || t.c !== e.c) return !1;
                        var r, i = t._length;
                        for (r = 0; r < i; r += 1)
                            if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                        return !0
                    })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function s() {
                    if (this.elem.globalData.frameId !== this.frameId)
                        if (this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else {
                                this.lock = !0, this._mdf = !1;
                                var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                    r = this.effectsSequence.length;
                                for (t = 0; t < r; t += 1) e = this.effectsSequence[t](e);
                                this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                    else this._mdf = !1
                }

                function a(t, e, r) {
                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                    var n = 3 === r ? e.pt.k : e.ks.k;
                    this.v = shape_pool.clone(n), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                }

                function o(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function h(e, n, s) {
                    this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === s ? n.pt.k : n.ks.k, this.k = !0, this.kf = !0;
                    var a = this.keyframes[0].s[0].i.length;
                    this.keyframes[0].s[0].i[0].length;
                    this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                        lastFrame: t,
                        lastIndex: 0
                    }, this.effectsSequence = [r.bind(this)]
                }
                a.prototype.interpolateShape = e, a.prototype.getValue = s, a.prototype.setVValue = n, a.prototype.addEffect = o, h.prototype.getValue = s, h.prototype.interpolateShape = e, h.prototype.setVValue = n, h.prototype.addEffect = o;
                var l = function () {
                        var t = roundCorner;

                        function e(t, e) {
                            this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                        }
                        return e.prototype = {
                            reset: i,
                            getValue: function () {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                            },
                            convertEllToPath: function () {
                                var e = this.p.v[0],
                                    r = this.p.v[1],
                                    i = this.s.v[0] / 2,
                                    n = this.s.v[1] / 2,
                                    s = 3 !== this.d,
                                    a = this.v;
                                a.v[0][0] = e, a.v[0][1] = r - n, a.v[1][0] = s ? e + i : e - i, a.v[1][1] = r, a.v[2][0] = e, a.v[2][1] = r + n, a.v[3][0] = s ? e - i : e + i, a.v[3][1] = r, a.i[0][0] = s ? e - i * t : e + i * t, a.i[0][1] = r - n, a.i[1][0] = s ? e + i : e - i, a.i[1][1] = r - n * t, a.i[2][0] = s ? e + i * t : e - i * t, a.i[2][1] = r + n, a.i[3][0] = s ? e - i : e + i, a.i[3][1] = r + n * t, a.o[0][0] = s ? e + i * t : e - i * t, a.o[0][1] = r - n, a.o[1][0] = s ? e + i : e - i, a.o[1][1] = r + n * t, a.o[2][0] = s ? e - i * t : e + i * t, a.o[2][1] = r + n, a.o[3][0] = s ? e - i : e + i, a.o[3][1] = r - n * t
                            }
                        }, extendPrototype([DynamicPropertyContainer], e), e
                    }(),
                    p = function () {
                        function t(t, e) {
                            this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                        }
                        return t.prototype = {
                            reset: i,
                            getValue: function () {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                            },
                            convertStarToPath: function () {
                                var t, e, r, i, n = 2 * Math.floor(this.pt.v),
                                    s = 2 * Math.PI / n,
                                    a = !0,
                                    o = this.or.v,
                                    h = this.ir.v,
                                    l = this.os.v,
                                    p = this.is.v,
                                    c = 2 * Math.PI * o / (2 * n),
                                    f = 2 * Math.PI * h / (2 * n),
                                    u = -Math.PI / 2;
                                u += this.r.v;
                                var m = 3 === this.data.d ? -1 : 1;
                                for (this.v._length = 0, t = 0; t < n; t += 1) {
                                    r = a ? l : p, i = a ? c : f;
                                    var d = (e = a ? o : h) * Math.cos(u),
                                        y = e * Math.sin(u),
                                        g = 0 === d && 0 === y ? 0 : y / Math.sqrt(d * d + y * y),
                                        v = 0 === d && 0 === y ? 0 : -d / Math.sqrt(d * d + y * y);
                                    d += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(d, y, d - g * i * r * m, y - v * i * r * m, d + g * i * r * m, y + v * i * r * m, t, !0), a = !a, u += s * m
                                }
                            },
                            convertPolygonToPath: function () {
                                var t, e = Math.floor(this.pt.v),
                                    r = 2 * Math.PI / e,
                                    i = this.or.v,
                                    n = this.os.v,
                                    s = 2 * Math.PI * i / (4 * e),
                                    a = -Math.PI / 2,
                                    o = 3 === this.data.d ? -1 : 1;
                                for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                    var h = i * Math.cos(a),
                                        l = i * Math.sin(a),
                                        p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                        c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                    h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * s * n * o, l - c * s * n * o, h + p * s * n * o, l + c * s * n * o, t, !0), a += r * o
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }(),
                    c = function () {
                        function t(t, e) {
                            this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                        }
                        return t.prototype = {
                            convertRectToPath: function () {
                                var t = this.p.v[0],
                                    e = this.p.v[1],
                                    r = this.s.v[0] / 2,
                                    i = this.s.v[1] / 2,
                                    n = bm_min(r, i, this.r.v),
                                    s = n * (1 - roundCorner);
                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + n, t + r, e - i + s, 0, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - s, t + r, e + i - n, 1, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e + i, t + r - n, e + i, t + r - s, e + i, 2, !0), this.v.setTripleAt(t - r + n, e + i, t - r + s, e + i, t - r + n, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - n, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + s, t - r, e - i + n, 5, !0), this.v.setTripleAt(t - r + n, e - i, t - r + n, e - i, t - r + s, e - i, 6, !0), this.v.setTripleAt(t + r - n, e - i, t + r - s, e - i, t + r - n, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + s, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + s, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + s, t + r, e - i + n, 0, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e - i, t + r - n, e - i, t + r - s, e - i, 1, !0), this.v.setTripleAt(t - r + n, e - i, t - r + s, e - i, t - r + n, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + n, t - r, e - i + s, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - s, t - r, e + i - n, 4, !0), this.v.setTripleAt(t - r + n, e + i, t - r + n, e + i, t - r + s, e + i, 5, !0), this.v.setTripleAt(t + r - n, e + i, t + r - s, e + i, t + r - n, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - n, t + r, e + i - s, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + s, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - s, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - s, e + i, t + r, e + i, 3, !0)))
                            },
                            getValue: function (t) {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                            },
                            reset: i
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }();
                var f = {
                    getShapeProp: function (t, e, r) {
                        var i;
                        return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new h(t, e, r) : new a(t, e, r) : 5 === r ? i = new c(t, e) : 6 === r ? i = new l(t, e) : 7 === r && (i = new p(t, e)), i.k && t.addDynamicProperty(i), i
                    },
                    getConstructorFunction: function () {
                        return a
                    },
                    getKeyframedConstructorFunction: function () {
                        return h
                    }
                };
                return f
            }(),
            ShapeModifiers = function () {
                var t = {},
                    e = {};
                return t.registerModifier = function (t, r) {
                    e[t] || (e[t] = r)
                }, t.getModifier = function (t, r, i) {
                    return new e[t](r, i)
                }, t
            }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function RoundCornersModifier() {}

        function RepeaterModifier() {}

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }

        function DashProperty(t, e, r, i) {
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
            var n, s, a = e.length || 0;
            for (n = 0; n < a; n += 1) s = PropertyFactory.getProp(t, e[n].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[n] = {
                n: e[n].n,
                p: s
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function GradientProperty(t, e, r) {
            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
            var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }
        ShapeModifier.prototype.initModifierProperties = function () {}, ShapeModifier.prototype.addShapeToModifier = function () {}, ShapeModifier.prototype.addShape = function (t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: shapeCollection_pool.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function (t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function (t) {
            t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function (t, e, r, i, n) {
            var s = [];
            e <= 1 ? s.push({
                s: t,
                e: e
            }) : t >= 1 ? s.push({
                s: t - 1,
                e: e - 1
            }) : (s.push({
                s: t,
                e: 1
            }), s.push({
                s: 0,
                e: e - 1
            }));
            var a, o, h = [],
                l = s.length;
            for (a = 0; a < l; a += 1) {
                var p, c;
                if ((o = s[a]).e * n < i || o.s * n > i + r);
                else p = o.s * n <= i ? 0 : (o.s * n - i) / r, c = o.e * n >= i + r ? 1 : (o.e * n - i) / r, h.push([p, c])
            }
            return h.length || h.push([0, 0]), h
        }, TrimModifier.prototype.releasePathsData = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) segments_length_pool.release(t[e]);
            return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function (t) {
            var e, r, i;
            if (this._mdf || t) {
                var n = this.o.v % 360 / 360;
                if (n < 0 && (n += 1), (e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + n) > (r = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + n)) {
                    var s = e;
                    e = r, r = s
                }
                e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
            } else e = this.sValue, r = this.eValue;
            var a, o, h, l, p, c, f = this.shapes.length,
                u = 0;
            if (r === e)
                for (a = 0; a < f; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection;
            else if (1 === r && 0 === e || 0 === r && 1 === e) {
                if (this._mdf)
                    for (a = 0; a < f; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
            } else {
                var m, d, y = [];
                for (a = 0; a < f; a += 1)
                    if ((m = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                        if (h = (i = m.shape.paths)._length, c = 0, !m.shape._mdf && m.pathsData.length) c = m.totalShapeLength;
                        else {
                            for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(i.shapes[o]), l.push(p), c += p.totalLength;
                            m.totalShapeLength = c, m.pathsData = l
                        }
                        u += c, m.shape._mdf = !0
                    } else m.shape.paths = m.localShapeCollection;
                var g, v = e,
                    b = r,
                    x = 0;
                for (a = f - 1; a >= 0; a -= 1)
                    if ((m = this.shapes[a]).shape._mdf) {
                        for ((d = m.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (g = this.calculateShapeEdges(e, r, m.totalShapeLength, x, u), x += m.totalShapeLength) : g = [
                                [v, b]
                            ], h = g.length, o = 0; o < h; o += 1) {
                            v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                                s: m.totalShapeLength * v,
                                e: m.totalShapeLength * b
                            }) : v >= 1 ? y.push({
                                s: m.totalShapeLength * (v - 1),
                                e: m.totalShapeLength * (b - 1)
                            }) : (y.push({
                                s: m.totalShapeLength * v,
                                e: m.totalShapeLength
                            }), y.push({
                                s: 0,
                                e: m.totalShapeLength * (b - 1)
                            }));
                            var E = this.addShapes(m, y[0]);
                            if (y[0].s !== y[0].e) {
                                if (y.length > 1)
                                    if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                                        var _ = E.pop();
                                        this.addPaths(E, d), E = this.addShapes(m, y[1], _)
                                    } else this.addPaths(E, d), E = this.addShapes(m, y[1]);
                                this.addPaths(E, d)
                            }
                        }
                        m.shape.paths = d
                    }
            }
        }, TrimModifier.prototype.addPaths = function (t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function (t, e, r, i, n, s, a) {
            n.setXYAt(e[0], e[1], "o", s), n.setXYAt(r[0], r[1], "i", s + 1), a && n.setXYAt(t[0], t[1], "v", s), n.setXYAt(i[0], i[1], "v", s + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function (t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function (t, e, r) {
            var i, n, s, a, o, h, l, p, c = t.pathsData,
                f = t.shape.paths.shapes,
                u = t.shape.paths._length,
                m = 0,
                d = [],
                y = !0;
            for (r ? (o = r._length, p = r._length) : (r = shape_pool.newElement(), o = 0, p = 0), d.push(r), i = 0; i < u; i += 1) {
                for (h = c[i].lengths, r.c = f[i].c, s = f[i].c ? h.length : h.length + 1, n = 1; n < s; n += 1)
                    if (m + (a = h[n - 1]).addedLength < e.s) m += a.addedLength, r.c = !1;
                    else {
                        if (m > e.e) {
                            r.c = !1;
                            break
                        }
                        e.s <= m && e.e >= m + a.addedLength ? (this.addSegment(f[i].v[n - 1], f[i].o[n - 1], f[i].i[n], f[i].v[n], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[n - 1], f[i].v[n], f[i].o[n - 1], f[i].i[n], (e.s - m) / a.addedLength, (e.e - m) / a.addedLength, h[n - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1), m += a.addedLength, o += 1
                    } if (f[i].c && h.length) {
                    if (a = h[n - 1], m <= e.e) {
                        var g = h[n - 1].addedLength;
                        e.s <= m && e.e >= m + g ? (this.addSegment(f[i].v[n - 1], f[i].o[n - 1], f[i].i[0], f[i].v[0], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[n - 1], f[i].v[0], f[i].o[n - 1], f[i].i[0], (e.s - m) / g, (e.e - m) / g, h[n - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1)
                    } else r.c = !1;
                    m += a.addedLength, o += 1
                }
                if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), m > e.e) break;
                i < u - 1 && (r = shape_pool.newElement(), y = !0, d.push(r), o = 0)
            }
            return d
        }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function (t, e) {
            var r = shape_pool.newElement();
            r.c = t.c;
            var i, n, s, a, o, h, l, p, c, f, u, m, d, y = t._length,
                g = 0;
            for (i = 0; i < y; i += 1) n = t.v[i], a = t.o[i], s = t.i[i], n[0] === a[0] && n[1] === a[1] && n[0] === s[0] && n[1] === s[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = n[0] + (o[0] - n[0]) * l, c = d = n[1] - (n[1] - o[1]) * l, f = p - (p - n[0]) * roundCorner, u = c - (c - n[1]) * roundCorner, r.setTripleAt(p, c, f, u, m, d, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = n[0] + (o[0] - n[0]) * l, c = u = n[1] + (o[1] - n[1]) * l, m = p - (p - n[0]) * roundCorner, d = c - (c - n[1]) * roundCorner, r.setTripleAt(p, c, f, u, m, d, g), g += 1) : (r.setTripleAt(n[0], n[1], a[0], a[1], s[0], s[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
            return r
        }, RoundCornersModifier.prototype.processShapes = function (t) {
            var e, r, i, n, s, a, o = this.shapes.length,
                h = this.rd.v;
            if (0 !== h)
                for (r = 0; r < o; r += 1) {
                    if ((s = this.shapes[r]).shape.paths, a = s.localShapeCollection, s.shape._mdf || this._mdf || t)
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, i = 0; i < n; i += 1) a.addShape(this.processPath(e[i], h));
                    s.shape.paths = s.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function (t, e, r, i, n, s) {
            var a = s ? -1 : 1,
                o = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
                h = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
            t.translate(i.p.v[0] * a * n, i.p.v[1] * a * n, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * a * n), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(s ? 1 / o : o, s ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
        }, RepeaterModifier.prototype.init = function (t, e, r, i) {
            this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]);
            for (; r > 0;) r -= 1, this._elements.unshift(e[r]), 1;
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function (t) {
            t.length;
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function (t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
        }, RepeaterModifier.prototype.processShapes = function (t) {
            var e, r, i, n, s;
            if (this._mdf || t) {
                var a, o = Math.ceil(this.c.v);
                if (this._groups.length < o) {
                    for (; this._groups.length < o;) {
                        var h = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        h.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                    }
                    this.elem.reloadShapes()
                }
                for (s = 0, i = 0; i <= this._groups.length - 1; i += 1) a = s < o, this._groups[i]._render = a, this.changeGroupRender(this._groups[i].it, a), s += 1;
                this._currentCopies = o;
                var l = this.o.v,
                    p = l % 1,
                    c = l > 0 ? Math.floor(l) : Math.ceil(l),
                    f = (this.tr.v.props, this.pMatrix.props),
                    u = this.rMatrix.props,
                    m = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var d, y, g = 0;
                if (l > 0) {
                    for (; g < c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), g += 1;
                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), g += p)
                } else if (l < 0) {
                    for (; g > c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), g -= 1;
                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), g -= p)
                }
                for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                    if (y = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== g) {
                        for ((0 !== i && 1 === n || i !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d = 0; d < y; d += 1) r[d] = this.matrix.props[d];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(), d = 0; d < y; d += 1) r[d] = this.matrix.props[d];
                    g += 1, s -= 1, i += n
                }
            } else
                for (s = this._currentCopies, i = 0, n = 1; s;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, i += n
        }, RepeaterModifier.prototype.addShape = function () {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function (t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function () {
            var t;
            for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
            this._length = 0
        }, DashProperty.prototype.getValue = function (t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0,
                    r = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function (t, e) {
            for (var r = 0, i = this.o.length / 2; r < i;) {
                if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
                r += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function (t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, r, i, n = 4 * this.data.p;
                for (e = 0; e < n; e += 1) r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                if (this.o.length)
                    for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1) r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                this._mdf = !t
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty);
        var buildShapeString = function (t, e, r, i) {
                if (0 === e) return "";
                var n, s = t.o,
                    a = t.i,
                    o = t.v,
                    h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                for (n = 1; n < e; n += 1) h += " C" + i.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + i.applyToPointStringified(a[n][0], a[n][1]) + " " + i.applyToPointStringified(o[n][0], o[n][1]);
                return r && e && (h += " C" + i.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + i.applyToPointStringified(a[0][0], a[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
            },
            ImagePreloader = function () {
                var t = function () {
                    var t = createTag("canvas");
                    t.width = 1, t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                }();

                function e() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function r(e) {
                    var r = function (t, e, r) {
                            var i = "";
                            if (t.e) i = t.p;
                            else if (e) {
                                var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), i = e + n
                            } else i = r, i += t.u ? t.u : "", i += t.p;
                            return i
                        }(e, this.assetsPath, this.path),
                        i = createTag("img");
                    i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded.bind(this), !1), i.addEventListener("error", function () {
                        n.img = t, this._imageLoaded()
                    }.bind(this), !1), i.src = r;
                    var n = {
                        img: i,
                        assetData: e
                    };
                    return n
                }

                function i(t, e) {
                    this.imagesLoadedCb = e;
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) t[r].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[r])))
                }

                function n(t) {
                    this.path = t || ""
                }

                function s(t) {
                    this.assetsPath = t || ""
                }

                function a(t) {
                    for (var e = 0, r = this.images.length; e < r;) {
                        if (this.images[e].assetData === t) return this.images[e].img;
                        e += 1
                    }
                }

                function o() {
                    this.imagesLoadedCb = null, this.images.length = 0
                }

                function h() {
                    return this.totalImages === this.loadedAssets
                }
                return function () {
                    this.loadAssets = i, this.setAssetsPath = s, this.setPath = n, this.loaded = h, this.destroy = o, this.getImage = a, this._createImageData = r, this._imageLoaded = e, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
                }
            }(),
            featureSupport = function () {
                var t = {
                    maskType: !0
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
            }(),
            filtersFactory = function () {
                var t = {};
                return t.createFilter = function (t) {
                    var e = createNS("filter");
                    return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
                }, t.createAlphaToLuminanceFilter = function () {
                    var t = createNS("feColorMatrix");
                    return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                }, t
            }(),
            assetLoader = function () {
                function t(t) {
                    return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
                }
                return {
                    load: function (e, r, i) {
                        var n, s = new XMLHttpRequest;
                        s.open("GET", e, !0);
                        try {
                            s.responseType = "json"
                        } catch (t) {}
                        s.send(), s.onreadystatechange = function () {
                            if (4 == s.readyState)
                                if (200 == s.status) n = t(s), r(n);
                                else try {
                                    n = t(s), r(n)
                                } catch (t) {
                                    i && i(t)
                                }
                        }
                    }
                }
            }();

        function TextAnimatorProperty(t, e, r) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function TextAnimatorDataProperty(t, e, r) {
            var i = {
                    propType: !1
                },
                n = PropertyFactory.getProp,
                s = e.a;
            this.a = {
                r: s.r ? n(t, s.r, 0, degToRads, r) : i,
                rx: s.rx ? n(t, s.rx, 0, degToRads, r) : i,
                ry: s.ry ? n(t, s.ry, 0, degToRads, r) : i,
                sk: s.sk ? n(t, s.sk, 0, degToRads, r) : i,
                sa: s.sa ? n(t, s.sa, 0, degToRads, r) : i,
                s: s.s ? n(t, s.s, 1, .01, r) : i,
                a: s.a ? n(t, s.a, 1, 0, r) : i,
                o: s.o ? n(t, s.o, 0, .01, r) : i,
                p: s.p ? n(t, s.p, 1, 0, r) : i,
                sw: s.sw ? n(t, s.sw, 0, 0, r) : i,
                sc: s.sc ? n(t, s.sc, 1, 0, r) : i,
                fc: s.fc ? n(t, s.fc, 1, 0, r) : i,
                fh: s.fh ? n(t, s.fh, 0, 0, r) : i,
                fs: s.fs ? n(t, s.fs, 0, .01, r) : i,
                fb: s.fb ? n(t, s.fb, 0, .01, r) : i,
                t: s.t ? n(t, s.t, 0, 0, r) : i
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
        }

        function LetterProps(t, e, r, i, n, s) {
            this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = n, this.p = s, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!r,
                fc: !!i,
                m: !0,
                p: !0
            }
        }

        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextAnimatorProperty.prototype.searchProperties = function () {
            var t, e, r = this._textData.a.length,
                i = PropertyFactory.getProp;
            for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: this._textData.p.r,
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function (t, e) {
            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = !1;
                var r, i, n, s, a, o, h, l, p, c, f, u, m, d, y, g, v, b, x, E = this._moreOptions.alignment.v,
                    _ = this._animatorsData,
                    w = this._textData,
                    S = this.mHelper,
                    P = this._renderType,
                    A = this.renderedLetters.length,
                    C = (this.data, t.l);
                if (this._hasMaskedPath) {
                    if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var k, T = x.v;
                        for (this._pathData.r && (T = T.reverse()), a = {
                                tLength: 0,
                                segments: []
                            }, s = T._length - 1, g = 0, n = 0; n < s; n += 1) k = bez.buildBezierData(T.v[n], T.v[n + 1], [T.o[n][0] - T.v[n][0], T.o[n][1] - T.v[n][1]], [T.i[n + 1][0] - T.v[n + 1][0], T.i[n + 1][1] - T.v[n + 1][1]]), a.tLength += k.segmentLength, a.segments.push(k), g += k.segmentLength;
                        n = s, x.v.c && (k = bez.buildBezierData(T.v[n], T.v[0], [T.o[n][0] - T.v[n][0], T.o[n][1] - T.v[n][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]), a.tLength += k.segmentLength, a.segments.push(k), g += k.segmentLength), this._pathData.pi = a
                    }
                    if (a = this._pathData.pi, o = this._pathData.f.v, f = 0, c = 1, l = 0, p = !0, d = a.segments, o < 0 && x.v.c)
                        for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), c = (m = d[f = d.length - 1].points).length - 1; o < 0;) o += m[c].partialLength, (c -= 1) < 0 && (c = (m = d[f -= 1].points).length - 1);
                    u = (m = d[f].points)[c - 1], y = (h = m[c]).partialLength
                }
                s = C.length, r = 0, i = 0;
                var M, D, F, I, R = 1.2 * t.finalSize * .714,
                    V = !0;
                F = _.length;
                var B, O, L, z, G, j, N, H, q, W, $, Y, X, U = -1,
                    K = o,
                    Z = f,
                    J = c,
                    Q = -1,
                    tt = "",
                    et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                    var rt = 0,
                        it = 0,
                        nt = 2 === t.j ? -.5 : -1,
                        st = 0,
                        at = !0;
                    for (n = 0; n < s; n += 1)
                        if (C[n].n) {
                            for (rt && (rt += it); st < n;) C[st].animatorJustifyOffset = rt, st += 1;
                            rt = 0, at = !0
                        } else {
                            for (D = 0; D < F; D += 1)(M = _[D].a).t.propType && (at && 2 === t.j && (it += M.t.v * nt), (B = _[D].s.getMult(C[n].anIndexes[D], w.a[D].s.totalChars)).length ? rt += M.t.v * B[0] * nt : rt += M.t.v * B * nt);
                            at = !1
                        } for (rt && (rt += it); st < n;) C[st].animatorJustifyOffset = rt, st += 1
                }
                for (n = 0; n < s; n += 1) {
                    if (S.reset(), G = 1, C[n].n) r = 0, i += t.yOffset, i += V ? 1 : 0, o = K, V = !1, 0, this._hasMaskedPath && (c = J, u = (m = d[f = Z].points)[c - 1], y = (h = m[c]).partialLength, l = 0), X = W = Y = tt = "", et = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q !== C[n].line) {
                                switch (t.j) {
                                    case 1:
                                        o += g - t.lineWidths[C[n].line];
                                        break;
                                    case 2:
                                        o += (g - t.lineWidths[C[n].line]) / 2
                                }
                                Q = C[n].line
                            }
                            U !== C[n].ind && (C[U] && (o += C[U].extra), o += C[n].an / 2, U = C[n].ind), o += E[0] * C[n].an / 200;
                            var ot = 0;
                            for (D = 0; D < F; D += 1)(M = _[D].a).p.propType && ((B = _[D].s.getMult(C[n].anIndexes[D], w.a[D].s.totalChars)).length ? ot += M.p.v[0] * B[0] : ot += M.p.v[0] * B), M.a.propType && ((B = _[D].s.getMult(C[n].anIndexes[D], w.a[D].s.totalChars)).length ? ot += M.a.v[0] * B[0] : ot += M.a.v[0] * B);
                            for (p = !0; p;) l + y >= o + ot || !m ? (v = (o + ot - l) / h.partialLength, L = u.point[0] + (h.point[0] - u.point[0]) * v, z = u.point[1] + (h.point[1] - u.point[1]) * v, S.translate(-E[0] * C[n].an / 200, -E[1] * R / 100), p = !1) : m && (l += h.partialLength, (c += 1) >= m.length && (c = 0, d[f += 1] ? m = d[f].points : x.v.c ? (c = 0, m = d[f = 0].points) : (l -= h.partialLength, m = null)), m && (u = h, y = (h = m[c]).partialLength));
                            O = C[n].an / 2 - C[n].add, S.translate(-O, 0, 0)
                        } else O = C[n].an / 2 - C[n].add, S.translate(-O, 0, 0), S.translate(-E[0] * C[n].an / 200, -E[1] * R / 100, 0);
                        for (C[n].l / 2, D = 0; D < F; D += 1)(M = _[D].a).t.propType && (B = _[D].s.getMult(C[n].anIndexes[D], w.a[D].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? B.length ? o += M.t.v * B[0] : o += M.t.v * B : B.length ? r += M.t.v * B[0] : r += M.t.v * B));
                        for (C[n].l / 2, t.strokeWidthAnim && (N = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < F; D += 1)(M = _[D].a).a.propType && ((B = _[D].s.getMult(C[n].anIndexes[D], w.a[D].s.totalChars)).length ? S.translate(-M.a.v[0] * B[0], -M.a.v[1] * B[1], M.a.v[2] * B[2]) : S.translate(-M.a.v[0] * B, -M.a.v[1] * B, M.a.v[2] * B));
                        for (D = 0; D < F; D += 1)(M = _[D].a).s.propType && ((B = _[D].s.getMult(C[n].anIndexes[D], w.a[D].s.totalChars)).length ? S.scale(1 + (M.s.v[0] - 1) * B[0], 1 + (M.s.v[1] - 1) * B[1], 1) : S.scale(1 + (M.s.v[0] - 1) * B, 1 + (M.s.v[1] - 1) * B, 1));
                        for (D = 0; D < F; D += 1) {
                            if (M = _[D].a, B = _[D].s.getMult(C[n].anIndexes[D], w.a[D].s.totalChars), M.sk.propType && (B.length ? S.skewFromAxis(-M.sk.v * B[0], M.sa.v * B[1]) : S.skewFromAxis(-M.sk.v * B, M.sa.v * B)), M.r.propType && (B.length ? S.rotateZ(-M.r.v * B[2]) : S.rotateZ(-M.r.v * B)), M.ry.propType && (B.length ? S.rotateY(M.ry.v * B[1]) : S.rotateY(M.ry.v * B)), M.rx.propType && (B.length ? S.rotateX(M.rx.v * B[0]) : S.rotateX(M.rx.v * B)), M.o.propType && (B.length ? G += (M.o.v * B[0] - G) * B[0] : G += (M.o.v * B - G) * B), t.strokeWidthAnim && M.sw.propType && (B.length ? N += M.sw.v * B[0] : N += M.sw.v * B), t.strokeColorAnim && M.sc.propType)
                                for (q = 0; q < 3; q += 1) B.length ? j[q] = j[q] + (M.sc.v[q] - j[q]) * B[0] : j[q] = j[q] + (M.sc.v[q] - j[q]) * B;
                            if (t.fillColorAnim && t.fc) {
                                if (M.fc.propType)
                                    for (q = 0; q < 3; q += 1) B.length ? H[q] = H[q] + (M.fc.v[q] - H[q]) * B[0] : H[q] = H[q] + (M.fc.v[q] - H[q]) * B;
                                M.fh.propType && (H = B.length ? addHueToRGB(H, M.fh.v * B[0]) : addHueToRGB(H, M.fh.v * B)), M.fs.propType && (H = B.length ? addSaturationToRGB(H, M.fs.v * B[0]) : addSaturationToRGB(H, M.fs.v * B)), M.fb.propType && (H = B.length ? addBrightnessToRGB(H, M.fb.v * B[0]) : addBrightnessToRGB(H, M.fb.v * B))
                            }
                        }
                        for (D = 0; D < F; D += 1)(M = _[D].a).p.propType && (B = _[D].s.getMult(C[n].anIndexes[D], w.a[D].s.totalChars), this._hasMaskedPath ? B.length ? S.translate(0, M.p.v[1] * B[0], -M.p.v[2] * B[1]) : S.translate(0, M.p.v[1] * B, -M.p.v[2] * B) : B.length ? S.translate(M.p.v[0] * B[0], M.p.v[1] * B[1], -M.p.v[2] * B[2]) : S.translate(M.p.v[0] * B, M.p.v[1] * B, -M.p.v[2] * B));
                        if (t.strokeWidthAnim && (W = N < 0 ? 0 : N), t.strokeColorAnim && ($ = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                            if (S.translate(0, -t.ls), S.translate(0, E[1] * R / 100 + i, 0), w.p.p) {
                                b = (h.point[1] - u.point[1]) / (h.point[0] - u.point[0]);
                                var ht = 180 * Math.atan(b) / Math.PI;
                                h.point[0] < u.point[0] && (ht += 180), S.rotate(-ht * Math.PI / 180)
                            }
                            S.translate(L, z, 0), o -= E[0] * C[n].an / 200, C[n + 1] && U !== C[n + 1].ind && (o += C[n].an / 2, o += t.tr / 1e3 * t.finalSize)
                        } else {
                            switch (S.translate(r, i, 0), t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    S.translate(C[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[n].line]), 0, 0);
                                    break;
                                case 2:
                                    S.translate(C[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[n].line]) / 2, 0, 0)
                            }
                            S.translate(0, -t.ls), S.translate(O, 0, 0), S.translate(E[0] * C[n].an / 200, E[1] * R / 100, 0), r += C[n].l + t.tr / 1e3 * t.finalSize
                        }
                        "html" === P ? tt = S.toCSS() : "svg" === P ? tt = S.to2dCSS() : et = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]], X = G
                    }
                    A <= n ? (I = new LetterProps(X, W, $, Y, tt, et), this.renderedLetters.push(I), A += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[n], this.lettersChangedFlag = I.update(X, W, $, Y, tt, et) || this.lettersChangedFlag)
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function (t, e, r, i, n, s) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var a = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, a = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, a = !0), this.m !== n && (this.m = n, this._mdf.m = !0, a = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, a = !0), a
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            return t
        }, TextProperty.prototype.setCurrentData = function (t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function () {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function (t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function (t) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                    r = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                    this.lock = !0, this._mdf = !1;
                    var i, n = this.effectsSequence.length,
                        s = t || this.data.d.k[this.keysIndex].s;
                    for (i = 0; i < n; i += 1) s = r !== this.keysIndex ? this.effectsSequence[i](s, s.t) : this.effectsSequence[i](this.currentData, s.t);
                    e !== s && this.setCurrentData(s), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            }
        }, TextProperty.prototype.getKeyframeValue = function () {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && (t[r].s, !(r === i - 1 || t[r + 1].t > e));) r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function (t) {
            for (var e, r = FontManager.getCombinedCharacterCodes(), i = [], n = 0, s = t.length; n < s;) e = t.charCodeAt(n), -1 !== r.indexOf(e) ? i[i.length - 1] += t.charAt(n) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(n + 1)) >= 56320 && e <= 57343 ? (i.push(t.substr(n, 2)), ++n) : i.push(t.charAt(n)), n += 1;
            return i
        }, TextProperty.prototype.completeTextData = function (t) {
            t.__complete = !0;
            var e, r, i, n, s, a, o, h = this.elem.globalData.fontManager,
                l = this.data,
                p = [],
                c = 0,
                f = l.m.g,
                u = 0,
                m = 0,
                d = 0,
                y = [],
                g = 0,
                v = 0,
                b = h.getFontByName(t.f),
                x = 0,
                E = b.fStyle ? b.fStyle.split(" ") : [],
                _ = "normal",
                w = "normal";
            for (r = E.length, e = 0; e < r; e += 1) switch (E[e].toLowerCase()) {
                case "italic":
                    w = "italic";
                    break;
                case "bold":
                    _ = "700";
                    break;
                case "black":
                    _ = "900";
                    break;
                case "medium":
                    _ = "500";
                    break;
                case "regular":
                case "normal":
                    _ = "400";
                    break;
                case "light":
                case "thin":
                    _ = "200"
            }
            t.fWeight = b.fWeight || _, t.fStyle = w, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
            var S, P = t.tr / 1e3 * t.finalSize;
            if (t.sz)
                for (var A, C, k = !0, T = t.sz[0], M = t.sz[1]; k;) {
                    A = 0, g = 0, r = (C = this.buildFinalText(t.t)).length, P = t.tr / 1e3 * t.finalSize;
                    var D = -1;
                    for (e = 0; e < r; e += 1) S = C[e].charCodeAt(0), i = !1, " " === C[e] ? D = e : 13 !== S && 3 !== S || (g = 0, i = !0, A += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(C[e], b.fStyle, b.fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = h.measureText(C[e], t.f, t.finalSize), g + x > T && " " !== C[e] ? (-1 === D ? r += 1 : e = D, A += t.finalLineHeight || 1.2 * t.finalSize, C.splice(e, D === e ? 1 : 0, "\r"), D = -1, g = 0) : (g += x, g += P);
                    A += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && M < A ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = C, r = t.finalText.length, k = !1)
                }
            g = -P, x = 0;
            var F, I = 0;
            for (e = 0; e < r; e += 1)
                if (i = !1, S = (F = t.finalText[e]).charCodeAt(0), " " === F ? n = " " : 13 === S || 3 === S ? (I = 0, y.push(g), v = g > v ? g : v, g = -2 * P, n = "", i = !0, d += 1) : n = t.finalText[e], h.chars ? (o = h.getCharData(F, b.fStyle, h.getFontByName(t.f).fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = h.measureText(n, t.f, t.finalSize), " " === F ? I += x + P : (g += x + P + I, I = 0), p.push({
                        l: x,
                        an: x,
                        add: u,
                        n: i,
                        anIndexes: [],
                        val: n,
                        line: d,
                        animatorJustifyOffset: 0
                    }), 2 == f) {
                    if (u += x, "" === n || " " === n || e === r - 1) {
                        for ("" !== n && " " !== n || (u -= x); m <= e;) p[m].an = u, p[m].ind = c, p[m].extra = x, m += 1;
                        c += 1, u = 0
                    }
                } else if (3 == f) {
                if (u += x, "" === n || e === r - 1) {
                    for ("" === n && (u -= x); m <= e;) p[m].an = u, p[m].ind = c, p[m].extra = x, m += 1;
                    u = 0, c += 1
                }
            } else p[c].ind = c, p[c].extra = 0, c += 1;
            if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = v, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
            }
            t.lineWidths = y;
            var R, V, B = l.a;
            a = B.length;
            var O, L, z = [];
            for (s = 0; s < a; s += 1) {
                for ((R = B[s]).a.sc && (t.strokeColorAnim = !0), R.a.sw && (t.strokeWidthAnim = !0), (R.a.fc || R.a.fh || R.a.fs || R.a.fb) && (t.fillColorAnim = !0), L = 0, O = R.s.b, e = 0; e < r; e += 1)(V = p[e]).anIndexes[s] = L, (1 == O && "" !== V.val || 2 == O && "" !== V.val && " " !== V.val || 3 == O && (V.n || " " == V.val || e == r - 1) || 4 == O && (V.n || e == r - 1)) && (1 === R.s.rn && z.push(L), L += 1);
                l.a[s].s.totalChars = L;
                var G, j = -1;
                if (1 === R.s.rn)
                    for (e = 0; e < r; e += 1) j != (V = p[e]).anIndexes[s] && (j = V.anIndexes[s], G = z.splice(Math.floor(Math.random() * z.length), 1)[0]), V.anIndexes[s] = G
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function (t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function (t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function (t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function (t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function () {
                var t = Math.max,
                    e = Math.min,
                    r = Math.floor;

                function i(t, e) {
                    this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                        k: 0
                    }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                        v: 100
                    }, this.o = PropertyFactory.getProp(t, e.o || {
                        k: 0
                    }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                        k: 0
                    }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                        k: 0
                    }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                }
                return i.prototype = {
                    getMult: function (i) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var n = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                            s = 0,
                            a = this.finalS,
                            o = this.finalE,
                            h = this.data.sh;
                        if (2 == h) s = n(s = o === a ? i >= o ? 1 : 0 : t(0, e(.5 / (o - a) + (i - a) / (o - a), 1)));
                        else if (3 == h) s = n(s = o === a ? i >= o ? 0 : 1 : 1 - t(0, e(.5 / (o - a) + (i - a) / (o - a), 1)));
                        else if (4 == h) o === a ? s = 0 : (s = t(0, e(.5 / (o - a) + (i - a) / (o - a), 1))) < .5 ? s *= 2 : s = 1 - 2 * (s - .5), s = n(s);
                        else if (5 == h) {
                            if (o === a) s = 0;
                            else {
                                var l = o - a,
                                    p = -l / 2 + (i = e(t(0, i + .5 - a), o - a)),
                                    c = l / 2;
                                s = Math.sqrt(1 - p * p / (c * c))
                            }
                            s = n(s)
                        } else 6 == h ? (o === a ? s = 0 : (i = e(t(0, i + .5 - a), o - a), s = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (o - a))) / 2), s = n(s)) : (i >= r(a) && (s = i - a < 0 ? 1 - (a - i) : t(0, e(o - i, 1))), s = n(s));
                        return s * this.a.v
                    },
                    getValue: function (t) {
                        this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            r = this.o.v / e,
                            i = this.s.v / e + r,
                            n = this.e.v / e + r;
                        if (i > n) {
                            var s = i;
                            i = n, n = s
                        }
                        this.finalS = i, this.finalE = n
                    }
                }, extendPrototype([DynamicPropertyContainer], i), {
                    getTextSelectorProp: function (t, e, r) {
                        return new i(t, e, r)
                    }
                }
            }(),
            pool_factory = function (t, e, r, i) {
                var n = 0,
                    s = t,
                    a = createSizedArray(s);

                function o() {
                    return n ? a[n -= 1] : e()
                }
                return {
                    newElement: o,
                    release: function (t) {
                        n === s && (a = pooling.double(a), s *= 2), r && r(t), a[n] = t, n += 1
                    }
                }
            },
            pooling = function () {
                return {
                    double: function (t) {
                        return t.concat(createSizedArray(t.length))
                    }
                }
            }(),
            point_pool = function () {
                return pool_factory(8, function () {
                    return createTypedArray("float32", 2)
                })
            }(),
            shape_pool = function () {
                var t = pool_factory(4, function () {
                    return new ShapePath
                }, function (t) {
                    var e, r = t._length;
                    for (e = 0; e < r; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                    t._length = 0, t.c = !1
                });
                return t.clone = function (e) {
                    var r, i = t.newElement(),
                        n = void 0 === e._length ? e.v.length : e._length;
                    for (i.setLength(n), i.c = e.c, r = 0; r < n; r += 1) i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], r);
                    return i
                }, t
            }(),
            shapeCollection_pool = function () {
                var t = {
                        newShapeCollection: function () {
                            var t;
                            t = e ? i[e -= 1] : new ShapeCollection;
                            return t
                        },
                        release: function (t) {
                            var n, s = t._length;
                            for (n = 0; n < s; n += 1) shape_pool.release(t.shapes[n]);
                            t._length = 0, e === r && (i = pooling.double(i), r *= 2);
                            i[e] = t, e += 1
                        }
                    },
                    e = 0,
                    r = 4,
                    i = createSizedArray(r);
                return t
            }(),
            segments_length_pool = function () {
                return pool_factory(8, function () {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }, function (t) {
                    var e, r = t.lengths.length;
                    for (e = 0; e < r; e += 1) bezier_length_pool.release(t.lengths[e]);
                    t.lengths.length = 0
                })
            }(),
            bezier_length_pool = function () {
                return pool_factory(8, function () {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", defaultCurveSegments),
                        lengths: createTypedArray("float32", defaultCurveSegments)
                    }
                })
            }();

        function BaseRenderer() {}

        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var r = "";
            if (e && e.title) {
                var i = createNS("title"),
                    n = createElementID();
                i.setAttribute("id", n), i.textContent = e.title, this.svgElement.appendChild(i), r += n
            }
            if (e && e.description) {
                var s = createNS("desc"),
                    a = createElementID();
                s.setAttribute("id", a), s.textContent = e.description, this.svgElement.appendChild(s), r += " " + a
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var h = createNS("g");
            this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                focusable: e && e.focusable
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: o,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                className: e && e.className || ""
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }

        function HybridRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !e || !1 !== e.hideOnTransparent
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function MaskElement(t, e, r) {
            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i, n = this.globalData.defs,
                s = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(s), this.solidPath = "";
            var a, o, h, l, p, c, f, u = this.masksProperties,
                m = 0,
                d = [],
                y = createElementID(),
                g = "clipPath",
                v = "clip-path";
            for (i = 0; i < s; i++)
                if (("a" !== u[i].mode && "n" !== u[i].mode || u[i].inv || 100 !== u[i].o.k || u[i].o.x) && (g = "mask", v = "mask"), "s" != u[i].mode && "i" != u[i].mode || 0 !== m ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), d.push(l)), a = createNS("path"), "n" != u[i].mode) {
                    var b;
                    if (m += 1, a.setAttribute("fill", "s" === u[i].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== u[i].x.k ? (g = "mask", v = "mask", f = PropertyFactory.getProp(this.element, u[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), n.appendChild(p), a.setAttribute("stroke", "s" === u[i].mode ? "#000000" : "#ffffff")) : (c = null, f = null), this.storedData[i] = {
                            elem: a,
                            x: f,
                            expan: c,
                            lastPath: "",
                            lastOperator: "",
                            filterId: b,
                            lastRadius: 0
                        }, "i" == u[i].mode) {
                        h = d.length;
                        var x = createNS("g");
                        for (o = 0; o < h; o += 1) x.appendChild(d[o]);
                        var E = createNS("mask");
                        E.setAttribute("mask-type", "alpha"), E.setAttribute("id", y + "_" + m), E.appendChild(a), n.appendChild(E), x.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + m + ")"), d.length = 0, d.push(x)
                    } else d.push(a);
                    u[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                        elem: a,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, u[i].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
                        invRect: l
                    }, this.viewData[i].prop.k || this.drawPath(u[i], this.viewData[i].prop.v, this.viewData[i])
                } else this.viewData[i] = {
                    op: PropertyFactory.getProp(this.element, u[i].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
                    elem: a,
                    lastPath: ""
                }, n.appendChild(a);
            for (this.maskElement = createNS(g), s = d.length, i = 0; i < s; i += 1) this.maskElement.appendChild(d[i]);
            m > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }

        function HierarchyElement() {}

        function FrameElement() {}

        function TransformElement() {}

        function RenderableElement() {}

        function RenderableDOMElement() {}

        function ProcessedElement(t, e) {
            this.elem = t, this.pos = e
        }

        function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function SVGShapeData(t, e, r) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
            for (var i = 0, n = t.length; i < n;) {
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                i += 1
            }
        }

        function SVGTransformData(t, e, r) {
            this.transform = {
                mProps: t,
                op: e,
                container: r
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }

        function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
        }

        function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
        }

        function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }
        BaseRenderer.prototype.checkLayers = function (t) {
            var e, r, i = this.layers.length;
            for (this.completeLayers = !0, e = i - 1; e >= 0; e--) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function (t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 13:
                    return this.createCamera(t)
            }
            return this.createNull(t)
        }, BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.buildAllItems = function () {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function (t) {
            this.completeLayers = !1;
            var e, r, i = t.length,
                n = this.layers.length;
            for (e = 0; e < i; e += 1)
                for (r = 0; r < n;) {
                    if (this.layers[r].id == t[e].id) {
                        this.layers[r] = t[e];
                        break
                    }
                    r += 1
                }
        }, BaseRenderer.prototype.setProjectInterface = function (t) {
            this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
            for (var i = this.elements, n = this.layers, s = 0, a = n.length; s < a;) n[s].ind == e && (i[s] && !0 !== i[s] ? (r.push(i[s]), i[s].setAsParent(), void 0 !== n[s].parent ? this.buildElementParenting(t, n[s].parent, r) : t.setHierarchy(r)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
        }, BaseRenderer.prototype.addPendingElement = function (t) {
            this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                    var i = this.createComp(t[e]);
                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                }
        }, BaseRenderer.prototype.setupGlobalData = function (t, e) {
            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function (t) {
            return new NullElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createShape = function (t) {
            return new SVGShapeElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createText = function (t) {
            return new SVGTextElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createImage = function (t) {
            return new IImageElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createSolid = function (t) {
            return new ISolidElement(t, this.globalData, this)
        }, SVGRenderer.prototype.configAnimation = function (t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var r = createNS("clipPath"),
                i = createNS("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var n = createElementID();
            r.setAttribute("id", n), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + n + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRenderer.prototype.destroy = function () {
            this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRenderer.prototype.updateContainerSize = function () {}, SVGRenderer.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 != this.layers[t].ty) {
                e[t] = !0;
                var r = this.createItem(this.layers[t]);
                e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)))
            }
        }, SVGRenderer.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt)
                    for (var e = 0, r = this.elements.length; e < r;) {
                        if (this.elements[e] === t) {
                            t.setMatte(this.elements[e - 1].layerId);
                            break
                        }
                        e += 1
                    }
            }
        }, SVGRenderer.prototype.renderFrame = function (t) {
            if (this.renderedFrame !== t && !this.destroyed) {
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var e, r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                    for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }, SVGRenderer.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
                for (var i, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (i = this.elements[n].getBaseElement()), n += 1;
                i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
            }
        }, SVGRenderer.prototype.hide = function () {
            this.layerElement.style.display = "none"
        }, SVGRenderer.prototype.show = function () {
            this.layerElement.style.display = "block"
        }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function (t) {
            return new CVShapeElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createText = function (t) {
            return new CVTextElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createImage = function (t) {
            return new CVImageElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createSolid = function (t) {
            return new CVSolidElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function (t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.contextData.cTr.props;
                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                    var r = this.contextData.cTr.props;
                    this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
                } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRenderer.prototype.ctxOpacity = function (t) {
            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
        }, CanvasRenderer.prototype.reset = function () {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRenderer.prototype.save = function (t) {
            if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                var r, i = this.contextData.saved[this.contextData.cArrPos];
                for (r = 0; r < 16; r += 1) i[r] = e[r];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
            } else this.canvasContext.save()
        }, CanvasRenderer.prototype.restore = function (t) {
            if (this.renderConfig.clearCanvas) {
                t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                var e, r = this.contextData.saved[this.contextData.cArrPos],
                    i = this.contextData.cTr.props;
                for (e = 0; e < 16; e += 1) i[e] = r[e];
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r)
            } else this.canvasContext.restore()
        }, CanvasRenderer.prototype.configAnimation = function (t) {
            this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRenderer.prototype.updateContainerSize = function () {
            var t, e, r, i;
            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var n = this.renderConfig.preserveAspectRatio.split(" "),
                    s = n[1] || "meet",
                    a = n[0] || "xMidYMid",
                    o = a.substr(0, 4),
                    h = a.substr(4);
                r = t / e, (i = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === s || i < r && "slice" === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === s || i > r && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === s || i > r && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (i > r && "meet" === s || i < r && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (i > r && "meet" === s || i < r && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
            } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRenderer.prototype.destroy = function () {
            var t;
            for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRenderer.prototype.renderFrame = function (t, e) {
            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var r, i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r++)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                if (this.globalData._mdf) {
                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore()
                }
            }
        }, CanvasRenderer.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 != this.layers[t].ty) {
                var r = this.createItem(this.layers[t], this, this.globalData);
                e[t] = r, r.initExpressions()
            }
        }, CanvasRenderer.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, CanvasRenderer.prototype.hide = function () {
            this.animationItem.container.style.display = "none"
        }, CanvasRenderer.prototype.show = function () {
            this.animationItem.container.style.display = "block"
        }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, HybridRenderer.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
                var i = this.layers[e];
                if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
                else if (this.threeDElements) this.addTo3dContainer(r, e);
                else {
                    for (var n, s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a], n = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || n), a += 1;
                    n ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, n) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
                }
            }
        }, HybridRenderer.prototype.createShape = function (t) {
            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createText = function (t) {
            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createCamera = function (t) {
            return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRenderer.prototype.createImage = function (t) {
            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createComp = function (t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createSolid = function (t) {
            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
            for (var e = 0, r = this.threeDElements.length; e < r;) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1
            }
        }, HybridRenderer.prototype.createThreeDContainer = function (t, e) {
            var r = createTag("div");
            styleDiv(r);
            var i = createTag("div");
            styleDiv(i), "3d" === e && (r.style.width = this.globalData.compSize.w + "px", r.style.height = this.globalData.compSize.h + "px", r.style.transformOrigin = r.style.mozTransformOrigin = r.style.webkitTransformOrigin = "50% 50%", i.style.transform = i.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), r.appendChild(i);
            var n = {
                container: i,
                perspectiveElem: r,
                startPos: t,
                endPos: t,
                type: e
            };
            return this.threeDElements.push(n), n
        }, HybridRenderer.prototype.build3dContainers = function () {
            var t, e, r = this.layers.length,
                i = "";
            for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
            for (t = (r = this.threeDElements.length) - 1; t >= 0; t--) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRenderer.prototype.addTo3dContainer = function (t, e) {
            for (var r = 0, i = this.threeDElements.length; r < i;) {
                if (e <= this.threeDElements[r].endPos) {
                    for (var n, s = this.threeDElements[r].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()), s += 1;
                    n ? this.threeDElements[r].container.insertBefore(t, n) : this.threeDElements[r].container.appendChild(t);
                    break
                }
                r += 1
            }
        }, HybridRenderer.prototype.configAnimation = function (t) {
            var e = createTag("div"),
                r = this.animationItem.wrapper;
            e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), e.style.overflow = "hidden";
            var i = createNS("svg");
            i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
            var n = createNS("defs");
            i.appendChild(n), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRenderer.prototype.destroy = function () {
            this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t++) this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRenderer.prototype.updateContainerSize = function () {
            var t, e, r, i, n = this.animationItem.wrapper.offsetWidth,
                s = this.animationItem.wrapper.offsetHeight,
                a = n / s;
            this.globalData.compSize.w / this.globalData.compSize.h > a ? (t = n / this.globalData.compSize.w, e = n / this.globalData.compSize.w, r = 0, i = (s - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, r = (n - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)"
        }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function () {
            this.resizerElem.style.display = "none"
        }, HybridRenderer.prototype.show = function () {
            this.resizerElem.style.display = "block"
        }, HybridRenderer.prototype.initItems = function () {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t, e = this.globalData.compSize.w,
                    r = this.globalData.compSize.h,
                    i = this.threeDElements.length;
                for (t = 0; t < i; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"
            }
        }, HybridRenderer.prototype.searchExtraCompositions = function (t) {
            var e, r = t.length,
                i = createTag("div");
            for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                    var n = this.createComp(t[e], i, this.globalData.comp, null);
                    n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                }
        }, MaskElement.prototype.getMaskProperty = function (t) {
            return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function (t) {
            var e, r = this.element.finalTransform.mat,
                i = this.masksProperties.length;
            for (e = 0; e < i; e++)
                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[e].invRect.setAttribute("x", -r.props[12]), this.viewData[e].invRect.setAttribute("y", -r.props[13])), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                    var n = this.storedData[e].expan;
                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), n.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                }
        }, MaskElement.prototype.getMaskelement = function () {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function () {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function (t, e, r) {
            var i, n, s = " M" + e.v[0][0] + "," + e.v[0][1];
            for (n = e._length, i = 1; i < n; i += 1) s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
            if (e.c && n > 1 && (s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== s) {
                var a = "";
                r.elem && (e.c && (a = t.inv ? this.solidPath + s : s), r.elem.setAttribute("d", a)), r.lastPath = s
            }
        }, MaskElement.prototype.destroy = function () {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        }, HierarchyElement.prototype = {
            initHierarchy: function () {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            },
            setHierarchy: function (t) {
                this.hierarchy = t
            },
            setAsParent: function () {
                this._isParent = !0
            },
            checkParenting: function () {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        }, FrameElement.prototype = {
            initFrame: function () {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            },
            prepareProperties: function (t, e) {
                var r, i = this.dynamicProperties.length;
                for (r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            },
            addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
            }
        }, TransformElement.prototype = {
            initTransform: function () {
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            },
            renderTransform: function () {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat,
                        r = 0,
                        i = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; r < i;) {
                            if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            r += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                }
            },
            globalToLocal: function (t) {
                var e = [];
                e.push(this.finalTransform);
                for (var r = !0, i = this.comp; r;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : r = !1;
                var n, s, a = e.length;
                for (n = 0; n < a; n += 1) s = e[n].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
                return t
            },
            mHelper: new Matrix
        }, RenderableElement.prototype = {
            initRenderable: function () {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            },
            addRenderableComponent: function (t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
            },
            removeRenderableComponent: function (t) {
                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
            },
            prepareRenderableFrame: function (t) {
                this.checkLayerLimits(t)
            },
            checkTransparency: function () {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            },
            checkLayerLimits: function (t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            },
            renderRenderable: function () {
                var t, e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function () {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function () {
                return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        }, extendPrototype([RenderableElement, createProxyFunction({
            initElement: function (t, e, r) {
                this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
            },
            hide: function () {
                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
            },
            show: function () {
                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
            },
            renderFrame: function () {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            renderInnerContent: function () {},
            prepareFrame: function (t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
            },
            destroy: function () {
                this.innerElem = null, this.destroyBaseElement()
            }
        })], RenderableDOMElement), SVGStyleData.prototype.reset = function () {
            this.d = "", this._mdf = !1
        }, SVGShapeData.prototype.setAsAnimated = function () {
            this._isAnimated = !0
        }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function (t, e, r) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
            var r = createElementID(),
                i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var n, s, a, o = [];
            for (a = 4 * e.g.p, s = 0; s < a; s += 4) n = createNS("stop"), i.appendChild(n), o.push(n);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = i, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r, i, n, s = createNS("mask"),
                    a = createNS("path");
                s.appendChild(a);
                var o = createElementID(),
                    h = createElementID();
                s.setAttribute("id", h);
                var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var p = this.stops;
                for (i = 4 * t.g.p; i < n; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r);
                a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = l, this.ms = s, this.ost = p, this.maskId = h, e.msElem = a
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var SVGElementsRenderer = function () {
            var t = new Matrix,
                e = new Matrix;

            function r(t, e, r) {
                (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function i(r, i, n) {
                var s, a, o, h, l, p, c, f, u, m, d, y = i.styles.length,
                    g = i.lvl;
                for (p = 0; p < y; p += 1) {
                    if (h = i.sh._mdf || n, i.styles[p].lvl < g) {
                        for (f = e.reset(), m = g - i.styles[p].lvl, d = i.transformers.length - 1; !h && m > 0;) h = i.transformers[d].mProps._mdf || h, m--, d--;
                        if (h)
                            for (m = g - i.styles[p].lvl, d = i.transformers.length - 1; m > 0;) u = i.transformers[d].mProps.v.props, f.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), m--, d--
                    } else f = t;
                    if (a = (c = i.sh.paths)._length, h) {
                        for (o = "", s = 0; s < a; s += 1)(l = c.shapes[s]) && l._length && (o += buildShapeString(l, l._length, l.c, f));
                        i.caches[p] = o
                    } else o = i.caches[p];
                    i.styles[p].d += !0 === r.hd ? "" : o, i.styles[p]._mdf = h || i.styles[p]._mdf
                }
            }

            function n(t, e, r) {
                var i = e.style;
                (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function s(t, e, r) {
                a(t, e, r), o(t, e, r)
            }

            function a(t, e, r) {
                var i, n, s, a, o, h = e.gf,
                    l = e.g._hasOpacity,
                    p = e.s.v,
                    c = e.e.v;
                if (e.o._mdf || r) {
                    var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                    e.style.pElem.setAttribute(f, e.o.v)
                }
                if (e.s._mdf || r) {
                    var u = 1 === t.t ? "x1" : "cx",
                        m = "x1" === u ? "y1" : "cy";
                    h.setAttribute(u, p[0]), h.setAttribute(m, p[1]), l && !e.g._collapsable && (e.of.setAttribute(u, p[0]), e.of.setAttribute(m, p[1]))
                }
                if (e.g._cmdf || r) {
                    i = e.cst;
                    var d = e.g.c;
                    for (s = i.length, n = 0; n < s; n += 1)(a = i[n]).setAttribute("offset", d[4 * n] + "%"), a.setAttribute("stop-color", "rgb(" + d[4 * n + 1] + "," + d[4 * n + 2] + "," + d[4 * n + 3] + ")")
                }
                if (l && (e.g._omdf || r)) {
                    var y = e.g.o;
                    for (s = (i = e.g._collapsable ? e.cst : e.ost).length, n = 0; n < s; n += 1) a = i[n], e.g._collapsable || a.setAttribute("offset", y[2 * n] + "%"), a.setAttribute("stop-opacity", y[2 * n + 1])
                }
                if (1 === t.t)(e.e._mdf || r) && (h.setAttribute("x2", c[0]), h.setAttribute("y2", c[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
                else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                    o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                    var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                        v = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                        b = Math.cos(g + e.a.v) * v + p[0],
                        x = Math.sin(g + e.a.v) * v + p[1];
                    h.setAttribute("fx", b), h.setAttribute("fy", x), l && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", x))
                }
            }

            function o(t, e, r) {
                var i = e.style,
                    n = e.d;
                n && (n._mdf || r) && n.dashStr && (i.pElem.setAttribute("stroke-dasharray", n.dashStr), i.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
                createRenderFunction: function (t) {
                    t.ty;
                    switch (t.ty) {
                        case "fl":
                            return n;
                        case "gf":
                            return a;
                        case "gs":
                            return s;
                        case "st":
                            return o;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return i;
                        case "tr":
                            return r
                    }
                }
            }
        }();

        function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }

        function CVShapeData(t, e, r, i) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var n = 4;
            "rc" == e.ty ? n = 5 : "el" == e.ty ? n = 6 : "sr" == e.ty && (n = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t);
            var s, a, o = r.length;
            for (s = 0; s < o; s += 1) r[s].closed || (a = {
                transforms: i.addTransformSequence(r[s].transforms),
                trNodes: []
            }, this.styledShapes.push(a), r[s].elements.push(a))
        }

        function BaseElement() {}

        function NullElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
        }

        function SVGBaseElement() {}

        function IShapeElement() {}

        function ITextElement() {}

        function ICompElement() {}

        function IImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }

        function ISolidElement(t, e, r) {
            this.initElement(t, e, r)
        }

        function SVGCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function SVGTextElement(t, e, r) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
        }

        function SVGShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
        }

        function SVGTintFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                var i, n = createNS("feMerge");
                t.appendChild(n), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), n.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), n.appendChild(i)
            }
        }

        function SVGFillFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r
        }

        function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var r = createNS("feGaussianBlur");
            t.appendChild(r), this.feGaussianBlur = r
        }

        function SVGStrokeEffect(t, e) {
            this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
        }

        function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
            var i = createNS("feComponentTransfer");
            i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"), i.appendChild(n), this.feFuncR = n;
            var s = createNS("feFuncG");
            s.setAttribute("type", "table"), i.appendChild(s), this.feFuncG = s;
            var a = createNS("feFuncB");
            a.setAttribute("type", "table"), i.appendChild(a), this.feFuncB = a
        }

        function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var r = this.filterManager.effectElements,
                i = createNS("feComponentTransfer");
            (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i))
        }

        function SVGDropShadowEffect(t, e) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
            var r = createNS("feGaussianBlur");
            r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
            var i = createNS("feOffset");
            i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i);
            var n = createNS("feFlood");
            n.setAttribute("flood-color", "#00ff00"), n.setAttribute("flood-opacity", "1"), n.setAttribute("result", "drop_shadow_3"), this.feFlood = n, t.appendChild(n);
            var s = createNS("feComposite");
            s.setAttribute("in", "drop_shadow_3"), s.setAttribute("in2", "drop_shadow_2"), s.setAttribute("operator", "in"), s.setAttribute("result", "drop_shadow_4"), t.appendChild(s);
            var a, o = createNS("feMerge");
            t.appendChild(o), a = createNS("feMergeNode"), o.appendChild(a), (a = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = a, this.feMerge = o, this.originalNodeAdded = !1, o.appendChild(a)
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function (t) {
                var e, r = t.length,
                    i = "_";
                for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
                var n = this.sequences[i];
                return n || (n = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[i] = n, this.sequenceList.push(n)), n
            },
            processSequence: function (t, e) {
                for (var r, i = 0, n = t.transforms.length, s = e; i < n && !e;) {
                    if (t.transforms[i].transform.mProps._mdf) {
                        s = !0;
                        break
                    }
                    i += 1
                }
                if (s)
                    for (t.finalTransform.reset(), i = n - 1; i >= 0; i -= 1) r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                t._mdf = s
            },
            processSequences: function (t) {
                var e, r = this.sequenceList.length;
                for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
            },
            getNewKey: function () {
                return "_" + this.transform_key_count++
            }
        }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
            checkMasks: function () {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1
                }
                return !1
            },
            initExpressions: function () {
                this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
            },
            setBlendMode: function () {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
            },
            initBaseData: function (t, e, r) {
                this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            },
            getType: function () {
                return this.type
            },
            sourceRectAtTime: function () {}
        }, NullElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function () {}, NullElement.prototype.getBaseElement = function () {
            return null
        }, NullElement.prototype.destroy = function () {}, NullElement.prototype.sourceRectAtTime = function () {}, NullElement.prototype.hide = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
            initRendererElement: function () {
                this.layerElement = createNS("g")
            },
            createContainerElements: function () {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t, e, r, i = null;
                if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                        var n = createNS("mask");
                        n.setAttribute("id", this.layerId), n.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), n.appendChild(this.layerElement), i = n, this.globalData.defs.appendChild(n), featureSupport.maskType || 1 != this.data.td || (n.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), i = r, n.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                    } else if (2 == this.data.td) {
                        var s = createNS("mask");
                        s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
                        var a = createNS("g");
                        s.appendChild(a), t = createElementID(), e = filtersFactory.createFilter(t);
                        var o = createNS("feComponentTransfer");
                        o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                        var h = createNS("feFuncA");
                        h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
                        var l = createNS("rect");
                        l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), a.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), a.appendChild(l), a.appendChild(this.layerElement), i = a, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), a.appendChild(l), r.appendChild(this.layerElement), i = r, a.appendChild(r)), this.globalData.defs.appendChild(s)
                    }
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                    var p = createNS("clipPath"),
                        c = createNS("path");
                    c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var f = createElementID();
                    if (p.setAttribute("id", f), p.appendChild(c), this.globalData.defs.appendChild(p), this.checkMasks()) {
                        var u = createNS("g");
                        u.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), u.appendChild(this.layerElement), this.transformedElement = u, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")")
                }
                0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function () {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
            },
            destroyBaseElement: function () {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            },
            getBaseElement: function () {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function () {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
            },
            setMatte: function (t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
            }
        }, IShapeElement.prototype = {
            addShapeToModifiers: function (t) {
                var e, r = this.shapeModifiers.length;
                for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
            },
            isShapeInAnimatedModifiers: function (t) {
                for (var e = this.shapeModifiers.length; 0 < e;)
                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1
            },
            renderModifiers: function () {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                    for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame)
                }
            },
            lcEnum: {
                1: "butt",
                2: "round",
                3: "square"
            },
            ljEnum: {
                1: "miter",
                2: "round",
                3: "bevel"
            },
            searchProcessedElement: function (t) {
                for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
                    if (e[r].elem === t) return e[r].pos;
                    r += 1
                }
                return 0
            },
            addProcessedElement: function (t, e) {
                for (var r = this.processedElements, i = r.length; i;)
                    if (r[i -= 1].elem === t) return void(r[i].pos = e);
                r.push(new ProcessedElement(t, e))
            },
            prepareFrame: function (t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
            }
        }, ITextElement.prototype.initElement = function (t, e, r) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function (t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        }, ITextElement.prototype.createPathShape = function (t, e) {
            var r, i, n = e.length,
                s = "";
            for (r = 0; r < n; r += 1) i = e[r].ks.k, s += buildShapeString(i, i.i.length, !0, t);
            return s
        }, ITextElement.prototype.updateDocumentData = function (t, e) {
            this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function (t) {
            this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function (t) {
            this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, r, i, n) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
            }
            e.translate(i, n, 0)
        }, ITextElement.prototype.buildColor = function (t) {
            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function (t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                }
                var r, i = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function () {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function (t) {
            this.elements = t
        }, ICompElement.prototype.getElements = function () {
            return this.elements
        }, ICompElement.prototype.destroyElements = function () {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function () {
            this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function () {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextElement.prototype.buildTextContents = function (t) {
            for (var e = 0, r = t.length, i = [], n = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(n), n = "") : n += t[e], e += 1;
            return i.push(n), i
        }, SVGTextElement.prototype.buildNewText = function () {
            var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var n = r.fWeight,
                    s = r.fStyle;
                this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", n)
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var a, o = r.l || [],
                h = !!this.globalData.fontManager.chars;
            e = o.length;
            var l, p = this.mHelper,
                c = "",
                f = this.data.singleShape,
                u = 0,
                m = 0,
                d = !0,
                y = r.tr / 1e3 * r.finalSize;
            if (!f || h || r.sz) {
                var g, v, b = this.textSpans.length;
                for (t = 0; t < e; t += 1) h && f && 0 !== t || (a = b > t ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = a, this.layerElement.appendChild(a)), a.style.display = "inherit"), p.reset(), p.scale(r.finalSize / 100, r.finalSize / 100), f && (o[t].n && (u = -y, m += r.yOffset, m += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, p, o[t].line, u, m), u += o[t].l || 0, u += y), h ? (l = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], f ? c += this.createPathShape(p, l) : a.setAttribute("d", this.createPathShape(p, l))) : (f && a.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                f && a && a.setAttribute("d", c)
            } else {
                var x = this.textContainer,
                    E = "start";
                switch (r.j) {
                    case 1:
                        E = "end";
                        break;
                    case 2:
                        E = "middle"
                }
                x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", y);
                var _ = this.buildTextContents(r.finalText);
                for (e = _.length, m = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t] || createNS("tspan")).textContent = _[t], a.setAttribute("x", 0), a.setAttribute("y", m), a.style.display = "inherit", x.appendChild(a), this.textSpans[t] = a, m += r.finalLineHeight;
                this.layerElement.appendChild(x)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
            this._sizeChanged = !0
        }, SVGTextElement.prototype.sourceRectAtTime = function (t) {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var e = this.layerElement.getBBox();
                this.bbox = {
                    top: e.y,
                    left: e.x,
                    width: e.width,
                    height: e.height
                }
            }
            return this.bbox
        }, SVGTextElement.prototype.renderInnerContent = function () {
            if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var t, e;
                this._sizeChanged = !0;
                var r, i, n = this.textAnimator.renderedLetters,
                    s = this.textProperty.currentData.l;
                for (e = s.length, t = 0; t < e; t += 1) s[t].n || (r = n[t], i = this.textSpans[t], r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
            }
        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () {}, SVGShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function () {
            var t, e, r, i, n = this.shapes.length,
                s = this.stylesList.length,
                a = [],
                o = !1;
            for (r = 0; r < s; r += 1) {
                for (i = this.stylesList[r], o = !1, a.length = 0, t = 0; t < n; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (a.push(e), o = e._isAnimated || o);
                a.length > 1 && o && this.setShapesAsAnimated(a)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function (t, e) {
            var r, i = new SVGStyleData(t, e),
                n = i.pElem;
            if ("st" === t.ty) r = new SVGStrokeStyleData(this, t, i);
            else if ("fl" === t.ty) r = new SVGFillStyleData(this, t, i);
            else if ("gf" === t.ty || "gs" === t.ty) {
                r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), n.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))
            }
            return "st" !== t.ty && "gs" !== t.ty || (n.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), n.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), n.setAttribute("fill-opacity", "0"), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createGroupElement = function (t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function (t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                i = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
            var i = 4;
            "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
            var n = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
            return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n
        }, SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
            for (var r = 0, i = this.animatedContents.length; r < i;) {
                if (this.animatedContents[r].element === e) return;
                r += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            })
        }, SVGShapeElement.prototype.setElementStyles = function (t) {
            var e, r = t.styles,
                i = this.stylesList.length;
            for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function (t, e, r, i, n, s, a) {
            var o, h, l, p, c, f, u = [].concat(s),
                m = t.length - 1,
                d = [],
                y = [];
            for (o = m; o >= 0; o -= 1) {
                if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = a, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], n), t[o]._render && i.appendChild(e[o].style.pElem), d.push(e[o].style);
                else if ("gr" == t[o].ty) {
                    if (f)
                        for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                    else e[o] = this.createGroupElement(t[o]);
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, u, a), t[o]._render && i.appendChild(e[o].gr)
                } else "tr" == t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, u.push(p)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], u, n)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (f ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" == t[o].ty && (f ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), a = !1), y.push(c));
                this.addProcessedElement(t[o], o + 1)
            }
            for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
            for (m = y.length, o = 0; o < m; o += 1) y[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function () {
            this.renderModifiers();
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function () {
            var t, e, r = this.animatedContents.length;
            for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function () {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, SVGTintFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    i = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
            }
        }, SVGFillFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                    r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
            }
        }, SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = .3 * this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    i = 3 == r ? 0 : e,
                    n = 2 == r ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
                var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", s)
            }
        }, SVGStrokeEffect.prototype.initialize = function () {
            var t, e, r, i, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                p: t,
                m: r
            });
            if (3 === this.filterManager.effectElements[10].p.v) {
                var s = createNS("mask"),
                    a = createElementID();
                s.setAttribute("id", a), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                var o = createNS("g");
                for (o.setAttribute("mask", "url(" + locationHref + "#" + a + ")"); n[0];) o.appendChild(n[0]);
                this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v)
                    for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function (t) {
            this.initialized || this.initialize();
            var e, r, i, n = this.paths.length;
            for (e = 0; e < n; e += 1)
                if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                    var s;
                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                        var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                            o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                            h = i.getTotalLength();
                        s = "0 0 0 " + h * a + " ";
                        var l, p = h * (o - a),
                            c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                            f = Math.floor(p / c);
                        for (l = 0; l < f; l += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                        s += "0 " + 10 * h + " 0 0"
                    } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                    i.setAttribute("stroke-dasharray", s)
                } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var u = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * u[0]) + "," + bm_floor(255 * u[1]) + "," + bm_floor(255 * u[2]) + ")")
            }
        }, SVGTritoneFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    i = this.filterManager.effectElements[2].p.v,
                    n = i[0] + " " + r[0] + " " + e[0],
                    s = i[1] + " " + r[1] + " " + e[1],
                    a = i[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", a)
            }
        }, SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function (t, e, r, i, n) {
            for (var s, a, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                    length: 256
                }), c = 0, f = n - i, u = e - t; o <= 256;) a = (s = o / 256) <= h ? u < 0 ? n : i : s >= l ? u < 0 ? i : n : i + f * Math.pow((s - t) / u, 1 / r), p[c++] = a, o += 256 / 255;
            return p.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
            }
        }, SVGDropShadowEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var r = this.filterManager.effectElements[3].p.v,
                        i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        n = r * Math.cos(i),
                        s = r * Math.sin(i);
                    this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", s)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGEffects(t) {
            var e, r, i = t.data.ef ? t.data.ef.length : 0,
                n = createElementID(),
                s = filtersFactory.createFilter(n),
                a = 0;
            for (this.filters = [], e = 0; e < i; e += 1) r = null, 20 === t.data.ef[e].ty ? (a += 1, r = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (a += 1, r = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (a += 1, r = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (a += 1, r = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (a += 1, r = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (a += 1, r = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), r && this.filters.push(r);
            a && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function CVContextData() {
            this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
            var t;
            for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
            this._length = 15
        }

        function CVBaseElement() {}

        function CVImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, r)
        }

        function CVCompElement(t, e, r) {
            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function CVMaskElement(t, e) {
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var r, i = this.masksProperties.length,
                n = !1;
            for (r = 0; r < i; r++) "n" !== this.masksProperties[r].mode && (n = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            this.hasMasks = n, n && this.element.addRenderableComponent(this)
        }

        function CVShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
        }

        function CVSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }

        function CVTextElement(t, e, r) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(t, e, r)
        }

        function CVEffects() {}

        function HBaseElement(t, e, r) {}

        function HSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }

        function HCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function HShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }

        function HTextElement(t, e, r) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
        }

        function HImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
        }

        function HCameraElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
            var i = PropertyFactory.getProp;
            if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var n, s = t.ks.or.k.length;
                for (n = 0; n < s; n += 1) t.ks.or.k[n].to = null, t.ks.or.k[n].ti = null
            }
            this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            }
        }

        function HEffects() {}
        SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
                for (var i, n = r.children, s = 0, a = n.length; s < a && n[s] !== t.layerElement;) s += 1;
                s <= a - 2 && (i = n[s + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
            if (!this.findSymbol(e)) {
                var r = createElementID(),
                    i = createNS("mask");
                i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var n = t.globalData.defs;
                n.appendChild(i);
                var s = createNS("symbol");
                s.setAttribute("id", r), this.replaceInParent(e, r), s.appendChild(e.layerElement), n.appendChild(s);
                var a = createNS("use");
                a.setAttribute("href", "#" + r), i.appendChild(a), e.data.hd = !1, e.show()
            }
            t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function () {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function () {
            this.initialized || this.initialize()
        }, SVGEffects.prototype.renderFrame = function (t) {
            var e, r = this.filters.length;
            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, CVContextData.prototype.duplicate = function () {
            var t = 2 * this._length,
                e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
            var r = 0;
            for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
            this._length = t
        }, CVContextData.prototype.reset = function () {
            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
        }, CVBaseElement.prototype = {
            createElements: function () {},
            initRendererElement: function () {},
            createContainerElements: function () {
                this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
            },
            createContent: function () {},
            setBlendMode: function () {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e
                }
            },
            createRenderableComponents: function () {
                this.maskManager = new CVMaskElement(this.data, this)
            },
            hideElement: function () {
                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
            },
            showElement: function () {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
            },
            renderFrame: function () {
                if (!this.hidden && !this.data.hd) {
                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function () {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
            },
            mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e, r, i = t.getContext("2d"),
                    n = this.img.width,
                    s = this.img.height,
                    a = n / s,
                    o = this.assetData.w / this.assetData.h,
                    h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                a > o && "xMidYMid slice" === h || a < o && "xMidYMid slice" !== h ? e = (r = s) * o : r = (e = n) / o, i.drawImage(this.img, (n - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
            }
        }, CVImageElement.prototype.renderInnerContent = function (t) {
            this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function () {
            this.img = null
        }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
            var t, e = this.canvasContext;
            for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function () {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null
        }, CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
                var t, e, r, i, n = this.element.finalTransform.mat,
                    s = this.element.canvasContext,
                    a = this.masksProperties.length;
                for (s.beginPath(), t = 0; t < a; t++)
                    if ("n" !== this.masksProperties[t].mode) {
                        this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), i = this.viewData[t].v, e = n.applyToPointArray(i.v[0][0], i.v[0][1], 0), s.moveTo(e[0], e[1]);
                        var o, h = i._length;
                        for (o = 1; o < h; o++) r = n.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                        r = n.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                    } this.element.globalData.renderer.save(!0), s.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
            this.element = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function (t, e) {
            var r = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd
                },
                i = {};
            if ("fl" == t.ty || "st" == t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bm_floor(i.c.v[0]) + "," + bm_floor(i.c.v[1]) + "," + bm_floor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                    k: 0
                }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                    k: 0
                }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
                if (r.lc = this.lcEnum[t.lc] || "round", r.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                    var n = new DashProperty(this, t.d, "canvas", this);
                    i.d = n, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
                }
            } else r.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(r), i.style = r, i
        }, CVShapeElement.prototype.createGroupElement = function (t) {
            return {
                it: [],
                prevViewData: []
            }
        }, CVShapeElement.prototype.createTransformElement = function (t) {
            return {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            }
        }, CVShapeElement.prototype.createShapeElement = function (t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function (t) {
            var e, r = this.stylesList.length;
            for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function (t, e, r, i, n) {
            var s, a, o, h, l, p, c = t.length - 1,
                f = [],
                u = [],
                m = [].concat(n);
            for (s = c; s >= 0; s -= 1) {
                if ((h = this.searchProcessedElement(t[s])) ? e[s] = r[h - 1] : t[s]._shouldRender = i, "fl" == t[s].ty || "st" == t[s].ty || "gf" == t[s].ty || "gs" == t[s].ty) h ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], m), f.push(e[s].style);
                else if ("gr" == t[s].ty) {
                    if (h)
                        for (o = e[s].it.length, a = 0; a < o; a += 1) e[s].prevViewData[a] = e[s].it[a];
                    else e[s] = this.createGroupElement(t[s]);
                    this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, m)
                } else "tr" == t[s].ty ? (h || (p = this.createTransformElement(t[s]), e[s] = p), m.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" == t[s].ty || "rc" == t[s].ty || "el" == t[s].ty || "sr" == t[s].ty ? h || (e[s] = this.createShapeElement(t[s])) : "tm" == t[s].ty || "rd" == t[s].ty ? (h ? (l = e[s]).closed = !1 : ((l = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = l, this.shapeModifiers.push(l)), u.push(l)) : "rp" == t[s].ty && (h ? (l = e[s]).closed = !0 : (l = ShapeModifiers.getModifier(t[s].ty), e[s] = l, l.init(this, t, s, e), this.shapeModifiers.push(l), i = !1), u.push(l));
                this.addProcessedElement(t[s], s + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(f), c = u.length, s = 0; s < c; s += 1) u[s].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function () {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function (t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function () {
            var t, e, r, i, n, s, a, o, h, l = this.stylesList.length,
                p = this.globalData.renderer,
                c = this.globalData.canvasContext;
            for (t = 0; t < l; t += 1)
                if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                    for (p.save(), s = h.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? h.co : h.grd, c.lineWidth = h.wi, c.lineCap = h.lc, c.lineJoin = h.lj, c.miterLimit = h.ml || 0) : c.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = s.length, e = 0; e < r; e += 1) {
                        for ("st" !== o && "gs" !== o || (c.beginPath(), h.da && (c.setLineDash(h.da), c.lineDashOffset = h.do)), n = (a = s[e].trNodes).length, i = 0; i < n; i += 1) "m" == a[i].t ? c.moveTo(a[i].p[0], a[i].p[1]) : "c" == a[i].t ? c.bezierCurveTo(a[i].pts[0], a[i].pts[1], a[i].pts[2], a[i].pts[3], a[i].pts[4], a[i].pts[5]) : c.closePath();
                        "st" !== o && "gs" !== o || (c.stroke(), h.da && c.setLineDash(this.dashResetter))
                    }
                    "st" !== o && "gs" !== o && c.fill(h.r), p.restore()
                }
        }, CVShapeElement.prototype.renderShape = function (t, e, r, i) {
            var n, s;
            for (s = t, n = e.length - 1; n >= 0; n -= 1) "tr" == e[n].ty ? (s = r[n].transform, this.renderShapeTransform(t, s)) : "sh" == e[n].ty || "el" == e[n].ty || "rc" == e[n].ty || "sr" == e[n].ty ? this.renderPath(e[n], r[n]) : "fl" == e[n].ty ? this.renderFill(e[n], r[n], s) : "st" == e[n].ty ? this.renderStroke(e[n], r[n], s) : "gf" == e[n].ty || "gs" == e[n].ty ? this.renderGradientFill(e[n], r[n], s) : "gr" == e[n].ty ? this.renderShape(s, e[n].it, r[n].it) : e[n].ty;
            i && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function (t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var r, i, n, s = t.trNodes,
                    a = e.paths,
                    o = a._length;
                s.length = 0;
                var h = t.transforms.finalTransform;
                for (n = 0; n < o; n += 1) {
                    var l = a.shapes[n];
                    if (l && l.v) {
                        for (i = l._length, r = 1; r < i; r += 1) 1 === r && s.push({
                            t: "m",
                            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                        }), s.push({
                            t: "c",
                            pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
                        });
                        1 === i && s.push({
                            t: "m",
                            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                        }), l.c && i && (s.push({
                            t: "c",
                            pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
                        }), s.push({
                            t: "z"
                        }))
                    }
                }
                t.trNodes = s
            }
        }, CVShapeElement.prototype.renderPath = function (t, e) {
            if (!0 !== t.hd && t._shouldRender) {
                var r, i = e.styledShapes.length;
                for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
            }
        }, CVShapeElement.prototype.renderFill = function (t, e, r) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
            var i = e.style;
            if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                var n = this.globalData.canvasContext,
                    s = e.s.v,
                    a = e.e.v;
                if (1 === t.t) f = n.createLinearGradient(s[0], s[1], a[0], a[1]);
                else var o = Math.sqrt(Math.pow(s[0] - a[0], 2) + Math.pow(s[1] - a[1], 2)),
                    h = Math.atan2(a[1] - s[1], a[0] - s[0]),
                    l = o * (e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                    p = Math.cos(h + e.a.v) * l + s[0],
                    c = Math.sin(h + e.a.v) * l + s[1],
                    f = n.createRadialGradient(p, c, 0, s[0], s[1], o);
                var u, m = t.g.p,
                    d = e.g.c,
                    y = 1;
                for (u = 0; u < m; u += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * u + 1]), f.addColorStop(d[4 * u] / 100, "rgba(" + d[4 * u + 1] + "," + d[4 * u + 2] + "," + d[4 * u + 3] + "," + y + ")");
                i.grd = f
            }
            i.coOp = e.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function (t, e, r) {
            var i = e.style,
                n = e.d;
            n && (n._mdf || this._isFirstFrame) && (i.da = n.dashArray, i.do = n.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function () {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var r = !1;
            t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var i, n, s = this.globalData.fontManager.getFontByName(t.f),
                a = t.l,
                o = this.mHelper;
            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
            var h, l, p, c, f, u, m, d, y, g, v = this.data.singleShape,
                b = t.tr / 1e3 * t.finalSize,
                x = 0,
                E = 0,
                _ = !0,
                w = 0;
            for (i = 0; i < n; i += 1) {
                for (l = (h = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {}, o.reset(), v && a[i].n && (x = -b, E += t.yOffset, E += _ ? 1 : 0, _ = !1), m = (f = l.shapes ? l.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, a[i].line, x, E), y = createSizedArray(m), u = 0; u < m; u += 1) {
                    for (c = f[u].ks.k.i.length, d = f[u].ks.k, g = [], p = 1; p < c; p += 1) 1 == p && g.push(o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)), g.push(o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToX(d.i[p][0], d.i[p][1], 0), o.applyToY(d.i[p][0], d.i[p][1], 0), o.applyToX(d.v[p][0], d.v[p][1], 0), o.applyToY(d.v[p][0], d.v[p][1], 0));
                    g.push(o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToX(d.i[0][0], d.i[0][1], 0), o.applyToY(d.i[0][0], d.i[0][1], 0), o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)), y[u] = g
                }
                v && (x += a[i].l, x += b), this.textSpans[w] ? this.textSpans[w].elem = y : this.textSpans[w] = {
                    elem: y
                }, w += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function () {
            var t, e, r, i, n, s, a = this.canvasContext;
            this.finalTransform.mat.props;
            a.font = this.values.fValue, a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var o, h = this.textAnimator.renderedLetters,
                l = this.textProperty.currentData.l;
            e = l.length;
            var p, c, f = null,
                u = null,
                m = null;
            for (t = 0; t < e; t += 1)
                if (!l[t].n) {
                    if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                        for (o && o.fc ? f !== o.fc && (f = o.fc, a.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, a.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                            for (s = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (o && o.sw ? m !== o.sw && (m = o.sw, a.lineWidth = o.sw) : m !== this.values.sWidth && (m = this.values.sWidth, a.lineWidth = this.values.sWidth), o && o.sc ? u !== o.sc && (u = o.sc, a.strokeStyle = o.sc) : u !== this.values.stroke && (u = this.values.stroke, a.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                            for (s = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    o && this.globalData.renderer.restore()
                }
        }, CVEffects.prototype.renderFrame = function () {}, HBaseElement.prototype = {
            checkBlendMode: function () {},
            initRendererElement: function () {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
            },
            createContainerElements: function () {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function () {
                this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function () {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function () {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
            },
            createRenderableComponents: function () {
                this.maskManager = new MaskElement(this.data, this, this.globalData)
            },
            addEffects: function () {},
            setMatte: function () {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
            var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function (t, e) {
            for (var r, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
            r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function (t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
            var r, i, n, s, a, o = t.sh.v,
                h = t.transformers,
                l = o._length;
            if (!(l <= 1)) {
                for (r = 0; r < l - 1; r += 1) i = this.getTransformedPoint(h, o.v[r]), n = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[r + 1]), a = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, n, s, a, e);
                o.c && (i = this.getTransformedPoint(h, o.v[r]), n = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[0]), a = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, n, s, a, e))
            }
        }, HShapeElement.prototype.checkBounds = function (t, e, r, i, n) {
            this.getBoundsOfCurve(t, e, r, i);
            var s = this.shapeBoundingBox;
            n.x = bm_min(s.left, n.x), n.xMax = bm_max(s.right, n.xMax), n.y = bm_min(s.top, n.y), n.yMax = bm_max(s.bottom, n.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, i) {
            for (var n, s, a, o, h, l, p, c = [
                    [t[0], i[0]],
                    [t[1], i[1]]
                ], f = 0; f < 2; ++f)
                if (s = 6 * t[f] - 12 * e[f] + 6 * r[f], n = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], a = 3 * e[f] - 3 * t[f], s |= 0, a |= 0, 0 !== (n |= 0))(h = s * s - 4 * a * n) < 0 || (0 < (l = (-s + bm_sqrt(h)) / (2 * n)) && l < 1 && c[f].push(this.calculateF(l, t, e, r, i, f)), 0 < (p = (-s - bm_sqrt(h)) / (2 * n)) && p < 1 && c[f].push(this.calculateF(p, t, e, r, i, f)));
                else {
                    if (0 === s) continue;
                    0 < (o = -a / s) && o < 1 && c[f].push(this.calculateF(o, t, e, r, i, f))
                } this.shapeBoundingBox.left = bm_min.apply(null, c[0]), this.shapeBoundingBox.top = bm_min.apply(null, c[1]), this.shapeBoundingBox.right = bm_max.apply(null, c[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, c[1])
        }, HShapeElement.prototype.calculateF = function (t, e, r, i, n, s) {
            return bm_pow(1 - t, 3) * e[s] + 3 * bm_pow(1 - t, 2) * t * r[s] + 3 * (1 - t) * bm_pow(t, 2) * i[s] + bm_pow(t, 3) * n[s]
        }, HShapeElement.prototype.calculateBoundingBox = function (t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e)
        }, HShapeElement.prototype.currentBoxContains = function (t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function () {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox,
                    e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var r = !1;
                this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), (r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        }, HTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style;
            e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var r, i, n = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", n.fClass) this.innerElem.className = n.fClass;
                else {
                    e.fontFamily = n.fFamily;
                    var s = t.fWeight,
                        a = t.fStyle;
                    e.fontStyle = a, e.fontWeight = s
                } var o, h, l, p = t.l;
            i = p.length;
            var c, f = this.mHelper,
                u = "",
                m = 0;
            for (r = 0; r < i; r += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[m] ? o = this.textPaths[m] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? l = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (l = createNS("svg")).appendChild(o), styleDiv(h)))) : this.isMasked ? o = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], o = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(o = createTag("span")), h.appendChild(o)), this.globalData.fontManager.chars) {
                    var d, y = this.globalData.fontManager.getCharData(t.finalText[r], n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                    if (d = y ? y.data : null, f.reset(), d && d.shapes && (c = d.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), u = this.createPathShape(f, c), o.setAttribute("d", u)), this.isMasked) this.innerElem.appendChild(o);
                    else {
                        if (this.innerElem.appendChild(h), d && d.shapes) {
                            document.body.appendChild(l);
                            var g = l.getBBox();
                            l.setAttribute("width", g.width + 2), l.setAttribute("height", g.height + 2), l.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)), l.style.transform = l.style.webkitTransform = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)", p[r].yOffset = g.y - 1
                        } else l.setAttribute("width", 1), l.setAttribute("height", 1);
                        h.appendChild(l)
                    }
                } else o.textContent = p[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
                this.isMasked ? this.textSpans[m] = o : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = o, m += 1
            }
            for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function () {
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var t, e, r, i, n, s = 0,
                    a = this.textAnimator.renderedLetters,
                    o = this.textProperty.currentData.l;
                for (e = o.length, t = 0; t < e; t += 1) o[t].n ? s += 1 : (i = this.textSpans[t], n = this.textPaths[t], r = a[s], s += 1, r._mdf.m && (this.isMasked ? i.setAttribute("transform", r.m) : i.style.transform = i.style.webkitTransform = r.m), i.style.opacity = r.o, r.sw && r._mdf.sw && n.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && n.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (n.setAttribute("fill", r.fc), n.style.color = r.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var h = this.innerElem.getBBox();
                    this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height));
                    this.currentBBox.w === h.width + 2 && this.currentBBox.h === h.height + 2 && this.currentBBox.x === h.x - 1 && this.currentBBox.y === h.y - 1 || (this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                }
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
            var t, e, r = this.comp.threeDElements.length;
            for (t = 0; t < r; t += 1) "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")
        }, HCameraElement.prototype.createElements = function () {}, HCameraElement.prototype.hide = function () {}, HCameraElement.prototype.renderFrame = function () {
            var t, e, r = this._isFirstFrame;
            if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
            if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy)
                    for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                        var i = this.hierarchy[t].finalTransform.mProp;
                        this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var n;
                    n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var s = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                        a = [n[0] / s, n[1] / s, n[2] / s],
                        o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                        h = Math.atan2(a[1], o),
                        l = Math.atan2(a[0], -a[2]);
                    this.mat.rotateY(l).rotateX(-h)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var p = !this._prevMat.equals(this.mat);
                if ((p || this.pe._mdf) && this.comp.threeDElements) {
                    var c;
                    for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) "3d" === (c = this.comp.threeDElements[t]).type && (p && (c.container.style.transform = c.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (c.perspectiveElem.style.perspective = c.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function () {}, HCameraElement.prototype.getBaseElement = function () {
            return null
        }, HEffects.prototype.renderFrame = function () {};
        var animationManager = function () {
                var t = {},
                    e = [],
                    r = 0,
                    i = 0,
                    n = 0,
                    s = !0,
                    a = !1;

                function o(t) {
                    for (var r = 0, n = t.target; r < i;) e[r].animation === n && (e.splice(r, 1), r -= 1, i -= 1, n.isPaused || p()), r += 1
                }

                function h(t, r) {
                    if (!t) return null;
                    for (var n = 0; n < i;) {
                        if (e[n].elem == t && null !== e[n].elem) return e[n].animation;
                        n += 1
                    }
                    var s = new AnimationItem;
                    return c(s, t), s.setData(t, r), s
                }

                function l() {
                    n += 1, m()
                }

                function p() {
                    n -= 1
                }

                function c(t, r) {
                    t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                        elem: r,
                        animation: t
                    }), i += 1
                }

                function f(t) {
                    var o, h = t - r;
                    for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
                    r = t, n && !a ? window.requestAnimationFrame(f) : s = !0
                }

                function u(t) {
                    r = t, window.requestAnimationFrame(f)
                }

                function m() {
                    !a && n && s && (window.requestAnimationFrame(u), s = !1)
                }
                return t.registerAnimation = h, t.loadAnimation = function (t) {
                    var e = new AnimationItem;
                    return c(e, null), e.setParams(t), e
                }, t.setSpeed = function (t, r) {
                    var n;
                    for (n = 0; n < i; n += 1) e[n].animation.setSpeed(t, r)
                }, t.setDirection = function (t, r) {
                    var n;
                    for (n = 0; n < i; n += 1) e[n].animation.setDirection(t, r)
                }, t.play = function (t) {
                    var r;
                    for (r = 0; r < i; r += 1) e[r].animation.play(t)
                }, t.pause = function (t) {
                    var r;
                    for (r = 0; r < i; r += 1) e[r].animation.pause(t)
                }, t.stop = function (t) {
                    var r;
                    for (r = 0; r < i; r += 1) e[r].animation.stop(t)
                }, t.togglePause = function (t) {
                    var r;
                    for (r = 0; r < i; r += 1) e[r].animation.togglePause(t)
                }, t.searchAnimations = function (t, e, r) {
                    var i, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        s = n.length;
                    for (i = 0; i < s; i += 1) r && n[i].setAttribute("data-bm-type", r), h(n[i], t);
                    if (e && 0 === s) {
                        r || (r = "svg");
                        var a = document.getElementsByTagName("body")[0];
                        a.innerHTML = "";
                        var o = createTag("div");
                        o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), a.appendChild(o), h(o, t)
                    }
                }, t.resize = function () {
                    var t;
                    for (t = 0; t < i; t += 1) e[t].animation.resize()
                }, t.goToAndStop = function (t, r, n) {
                    var s;
                    for (s = 0; s < i; s += 1) e[s].animation.goToAndStop(t, r, n)
                }, t.destroy = function (t) {
                    var r;
                    for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
                }, t.freeze = function () {
                    a = !0
                }, t.unfreeze = function () {
                    a = !1, m()
                }, t.getRegisteredAnimations = function () {
                    var t, r = e.length,
                        i = [];
                    for (t = 0; t < r; t += 1) i.push(e[t].animation);
                    return i
                }, t
            }(),
            AnimationItem = function () {
                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader
            };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (t) {
            t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
            switch (e) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this, t.rendererSettings);
                    break;
                case "svg":
                    this.renderer = new SVGRenderer(this, t.rendererSettings);
                    break;
                default:
                    this.renderer = new HybridRenderer(this, t.rendererSettings)
            }
            this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function () {
                this.trigger("data_failed")
            }.bind(this)))
        }, AnimationItem.prototype.setData = function (t, e) {
            var r = {
                    wrapper: t,
                    animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
                },
                i = t.attributes;
            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
            var n = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            "" === n || (r.loop = "false" !== n && ("true" === n || parseInt(n)));
            var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
            r.autoplay = "false" !== s, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
        }, AnimationItem.prototype.includeLayers = function (t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e, r, i = this.animationData.layers,
                n = i.length,
                s = t.layers,
                a = s.length;
            for (r = 0; r < a; r += 1)
                for (e = 0; e < n;) {
                    if (i[e].id == s[r].id) {
                        i[e] = s[r];
                        break
                    }
                    e += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function () {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function () {
                this.trigger("data_failed")
            }.bind(this))
        }, AnimationItem.prototype.loadSegments = function () {
            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function () {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function () {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function (t) {
            if (this.renderer) try {
                this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()
            } catch (t) {
                this.triggerConfigError(t)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function () {
            this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
                this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
        }, AnimationItem.prototype.resize = function () {
            this.renderer.updateContainerSize()
        }, AnimationItem.prototype.setSubframe = function (t) {
            this.subframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function () {
            this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
        }, AnimationItem.prototype.renderFrame = function () {
            if (!1 !== this.isLoaded) try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
                this.triggerRenderFrameError(t)
            }
        }, AnimationItem.prototype.play = function (t) {
            t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function (t) {
            t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
        }, AnimationItem.prototype.togglePause = function (t) {
            t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function (t) {
            t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.goToAndStop = function (t, e, r) {
            r && this.name != r || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
        }, AnimationItem.prototype.goToAndPlay = function (t, e, r) {
            this.goToAndStop(t, e, r), this.play()
        }, AnimationItem.prototype.advanceTime = function (t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier,
                    r = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function (t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function (t, e) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function (t, e) {
            if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1) this.segments.push(t[r])
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function (t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function (t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function (t) {
            t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
            this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function (t) {
            this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function (t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.updaFrameModifier = function () {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
        }, AnimationItem.prototype.getPath = function () {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function (t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function (t) {
            for (var e = 0, r = this.assets.length; e < r;) {
                if (t == this.assets[e].id) return this.assets[e];
                e += 1
            }
        }, AnimationItem.prototype.hide = function () {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function () {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function (t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.trigger = function (t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function (t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function (t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var Expressions = function () {
            var t = {};
            return t.initExpressions = function (t) {
                var e = 0,
                    r = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () {
                    e += 1
                }, t.renderer.globalData.popExpression = function () {
                    0 == (e -= 1) && function () {
                        var t, e = r.length;
                        for (t = 0; t < e; t += 1) r[t].release();
                        r.length = 0
                    }()
                }, t.renderer.globalData.registerExpressionProperty = function (t) {
                    -1 === r.indexOf(t) && r.push(t)
                }
            }, t
        }();
        expressionsPlugin = Expressions;
        var ExpressionManager = function () {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null;

                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array
                }

                function isNumerable(t, e) {
                    return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                }

                function $bm_neg(t) {
                    var e = typeof t;
                    if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var r, i = t.length,
                            n = [];
                        for (r = 0; r < i; r += 1) n[r] = -t[r];
                        return n
                    }
                    return t.propType ? t.v : void 0
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(t, e) {
                    var r = typeof t,
                        i = typeof e;
                    if ("string" === r || "string" === i) return t + e;
                    if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] + e, t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] + e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                        return o
                    }
                    return 0
                }
                var add = sum;

                function sub(t, e) {
                    var r = typeof t,
                        i = typeof e;
                    if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t)), "string" === i && (e = parseInt(e)), t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] - e, t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] - e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                        return o
                    }
                    return 0
                }

                function mul(t, e) {
                    var r, i, n, s = typeof t,
                        a = typeof e;
                    if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                        for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t[i] * e;
                        return r
                    }
                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                        for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t * e[i];
                        return r
                    }
                    return 0
                }

                function div(t, e) {
                    var r, i, n, s = typeof t,
                        a = typeof e;
                    if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                        for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t[i] / e;
                        return r
                    }
                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                        for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t / e[i];
                        return r
                    }
                    return 0
                }

                function mod(t, e) {
                    return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(t, e, r) {
                    if (e > r) {
                        var i = r;
                        r = e, e = i
                    }
                    return Math.min(Math.max(t, e), r)
                }

                function radiansToDegrees(t) {
                    return t / degToRads
                }
                var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(t) {
                    return t * degToRads
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(t, e) {
                    if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                    e || (e = helperLengthArray);
                    var r, i = Math.min(t.length, e.length),
                        n = 0;
                    for (r = 0; r < i; r += 1) n += Math.pow(e[r] - t[r], 2);
                    return Math.sqrt(n)
                }

                function normalize(t) {
                    return div(t, length(t))
                }

                function rgbToHsl(t) {
                    var e, r, i = t[0],
                        n = t[1],
                        s = t[2],
                        a = Math.max(i, n, s),
                        o = Math.min(i, n, s),
                        h = (a + o) / 2;
                    if (a == o) e = r = 0;
                    else {
                        var l = a - o;
                        switch (r = h > .5 ? l / (2 - a - o) : l / (a + o), a) {
                            case i:
                                e = (n - s) / l + (n < s ? 6 : 0);
                                break;
                            case n:
                                e = (s - i) / l + 2;
                                break;
                            case s:
                                e = (i - n) / l + 4
                        }
                        e /= 6
                    }
                    return [e, r, h, t[3]]
                }

                function hue2rgb(t, e, r) {
                    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                }

                function hslToRgb(t) {
                    var e, r, i, n = t[0],
                        s = t[1],
                        a = t[2];
                    if (0 === s) e = r = i = a;
                    else {
                        var o = a < .5 ? a * (1 + s) : a + s - a * s,
                            h = 2 * a - o;
                        e = hue2rgb(h, o, n + 1 / 3), r = hue2rgb(h, o, n), i = hue2rgb(h, o, n - 1 / 3)
                    }
                    return [e, r, i, t[3]]
                }

                function linear(t, e, r, i, n) {
                    if (void 0 !== i && void 0 !== n || (i = e, n = r, e = 0, r = 1), r < e) {
                        var s = r;
                        r = e, e = s
                    }
                    if (t <= e) return i;
                    if (t >= r) return n;
                    var a = r === e ? 0 : (t - e) / (r - e);
                    if (!i.length) return i + (n - i) * a;
                    var o, h = i.length,
                        l = createTypedArray("float32", h);
                    for (o = 0; o < h; o += 1) l[o] = i[o] + (n[o] - i[o]) * a;
                    return l
                }

                function random(t, e) {
                    if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                        var r, i = e.length;
                        t || (t = createTypedArray("float32", i));
                        var n = createTypedArray("float32", i),
                            s = BMMath.random();
                        for (r = 0; r < i; r += 1) n[r] = t[r] + s * (e[r] - t[r]);
                        return n
                    }
                    return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                }

                function createPath(t, e, r, i) {
                    var n, s = t.length,
                        a = shape_pool.newElement();
                    a.setPathData(!!i, s);
                    var o, h, l = [0, 0];
                    for (n = 0; n < s; n += 1) o = e && e[n] ? e[n] : l, h = r && r[n] ? r[n] : l, a.setTripleAt(t[n][0], t[n][1], h[0] + t[n][0], h[1] + t[n][1], o[0] + t[n][0], o[1] + t[n][1], n, !0);
                    return a
                }

                function initiateExpression(elem, data, property) {
                    var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                        get: function () {
                            return thisProperty.v
                        }
                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
                        scoped_bm_rt;
                    if (data.xf) {
                        var i, len = data.xf.length;
                        for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
                    }
                    var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function (t, e) {
                            var r, i, n = this.pv.length ? this.pv.length : 1,
                                s = createTypedArray("float32", n);
                            var a = Math.floor(5 * time);
                            for (r = 0, i = 0; r < a;) {
                                for (i = 0; i < n; i += 1) s[i] += -e + 2 * e * BMMath.random();
                                r += 1
                            }
                            var o = 5 * time,
                                h = o - Math.floor(o),
                                l = createTypedArray("float32", n);
                            if (n > 1) {
                                for (i = 0; i < n; i += 1) l[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * h;
                                return l
                            }
                            return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h
                        }.bind(this);

                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0)
                    }

                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0)
                    }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                    function lookAt(t, e) {
                        var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                            i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                        return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
                    }

                    function easeOut(t, e, r, i, n) {
                        return applyEase(easeOutBez, t, e, r, i, n)
                    }

                    function easeIn(t, e, r, i, n) {
                        return applyEase(easeInBez, t, e, r, i, n)
                    }

                    function ease(t, e, r, i, n) {
                        return applyEase(easeInOutBez, t, e, r, i, n)
                    }

                    function applyEase(t, e, r, i, n, s) {
                        void 0 === n ? (n = r, s = i) : e = (e - r) / (i - r);
                        var a = t(e = e > 1 ? 1 : e < 0 ? 0 : e);
                        if ($bm_isInstanceOfArray(n)) {
                            var o, h = n.length,
                                l = createTypedArray("float32", h);
                            for (o = 0; o < h; o += 1) l[o] = (s[o] - n[o]) * a + n[o];
                            return l
                        }
                        return (s - n) * a + n
                    }

                    function nearestKey(t) {
                        var e, r, i, n = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0])
                            if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                            else {
                                for (e = 0; e < n - 1; e += 1) {
                                    if (t === data.k[e].t) {
                                        r = e + 1, i = data.k[e].t;
                                        break
                                    }
                                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                                        t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
                                        break
                                    }
                                } - 1 === r && (r = e + 1, i = data.k[e].t)
                            }
                        else r = 0, i = 0;
                        var s = {};
                        return s.index = r, s.time = i / elem.comp.globalData.frameRate, s
                    }

                    function key(t) {
                        var e, r, i;
                        if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                        t -= 1, e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var n = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;
                        for (i = n.length, r = 0; r < i; r += 1) e[r] = n[r], e.value[r] = n[r];
                        return e
                    }

                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate), t / e
                    }

                    function timeToFrames(t, e) {
                        return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                    }

                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t)
                    }

                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }

                    function substring(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                    }

                    function substr(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                    }
                    var index = elem.data.ind,
                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                        parent, randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;

                    function executeExpression(t) {
                        return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                    }
                    return executeExpression
                }
                return ob.initiateExpression = initiateExpression, ob
            }(),
            expressionHelpers = function () {
                return {
                    searchExpressions: function (t, e, r) {
                        e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
                    },
                    getSpeedAtTime: function (t) {
                        var e = this.getValueAtTime(t),
                            r = this.getValueAtTime(t + -.01),
                            i = 0;
                        if (e.length) {
                            var n;
                            for (n = 0; n < e.length; n += 1) i += Math.pow(r[n] - e[n], 2);
                            i = 100 * Math.sqrt(i)
                        } else i = 0;
                        return i
                    },
                    getVelocityAtTime: function (t) {
                        if (void 0 !== this.vel) return this.vel;
                        var e, r, i = this.getValueAtTime(t),
                            n = this.getValueAtTime(t + -.001);
                        if (i.length)
                            for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) e[r] = (n[r] - i[r]) / -.001;
                        else e = (n - i) / -.001;
                        return e
                    },
                    getValueAtTime: function (t) {
                        return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                    },
                    getStaticValueAtTime: function () {
                        return this.pv
                    },
                    setGroupProperty: function (t) {
                        this.propertyGroup = t
                    }
                }
            }();
        ! function () {
            function t(t, e, r) {
                if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : "";
                var i, n, s, a, o, h = this.comp.renderedFrame,
                    l = this.keyframes,
                    p = l[l.length - 1].t;
                if (h <= p) return this.pv;
                if (r ? n = p - (i = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = p - (n = l[l.length - 1 - e].t)), "pingpong" === t) {
                    if (Math.floor((h - n) / i) % 2 != 0) return this.getValueAtTime((i - (h - n) % i + n) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var c = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                            u = this.getValueAtTime(((h - n) % i + n) / this.comp.globalData.frameRate, 0),
                            m = Math.floor((h - n) / i);
                        if (this.pv.length) {
                            for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = (f[s] - c[s]) * m + u[s];
                            return o
                        }
                        return (f - c) * m + u
                    }
                    if ("continue" === t) {
                        var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                            y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (a = (o = new Array(d.length)).length, s = 0; s < a; s += 1) o[s] = d[s] + (d[s] - y[s]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                            return o
                        }
                        return d + (h - p) / .001 * (d - y)
                    }
                }
                return this.getValueAtTime(((h - n) % i + n) / this.comp.globalData.frameRate, 0)
            }

            function e(t, e, r) {
                if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : "";
                var i, n, s, a, o, h = this.comp.renderedFrame,
                    l = this.keyframes,
                    p = l[0].t;
                if (h >= p) return this.pv;
                if (r ? n = p + (i = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = (n = l[e].t) - p), "pingpong" === t) {
                    if (Math.floor((p - h) / i) % 2 == 0) return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                            u = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0),
                            m = Math.floor((p - h) / i) + 1;
                        if (this.pv.length) {
                            for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = u[s] - (f[s] - c[s]) * m;
                            return o
                        }
                        return u - (f - c) * m
                    }
                    if ("continue" === t) {
                        var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                            y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (a = (o = new Array(d.length)).length, s = 0; s < a; s += 1) o[s] = d[s] + (d[s] - y[s]) * (p - h) / .001;
                            return o
                        }
                        return d + (d - y) * (p - h) / .001
                    }
                }
                return this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0)
            }

            function r(t, e) {
                if (!this.k) return this.pv;
                if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                var r, i, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    s = n - t,
                    a = e > 1 ? (n + t - s) / (e - 1) : 1,
                    o = 0,
                    h = 0;
                for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                    if (i = this.getValueAtTime(s + o * a), this.pv.length)
                        for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
                    else r += i;
                    o += 1
                }
                if (this.pv.length)
                    for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
                else r /= e;
                return r
            }
            var i = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (t, e, r) {
                var n = i(t, e, r);
                return n.dynamicProperties.length ? n.getValueAtTime = function (t) {
                    console.warn("Transform at time not supported")
                }.bind(n) : n.getValueAtTime = function (t) {}.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function (i, s, a, o, h) {
                var l = n(i, s, a, o, h);
                l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = r, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === s.a ? s.k.length : 0, l.propertyIndex = s.ix;
                var p = 0;
                return 0 !== a && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), l._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: p
                }, expressionHelpers.searchExpressions(i, s, l), l.k && h.addDynamicProperty(l), l
            };
            var s = ShapePropertyFactory.getConstructorFunction(),
                a = ShapePropertyFactory.getKeyframedConstructorFunction();

            function o() {}
            o.prototype = {
                vertices: function (t, e) {
                    this.k && this.getValue();
                    var r = this.v;
                    void 0 !== e && (r = this.getValueAtTime(e, 0));
                    var i, n = r._length,
                        s = r[t],
                        a = r.v,
                        o = createSizedArray(n);
                    for (i = 0; i < n; i += 1) o[i] = "i" === t || "o" === t ? [s[i][0] - a[i][0], s[i][1] - a[i][1]] : [s[i][0], s[i][1]];
                    return o
                },
                points: function (t) {
                    return this.vertices("v", t)
                },
                inTangents: function (t) {
                    return this.vertices("i", t)
                },
                outTangents: function (t) {
                    return this.vertices("o", t)
                },
                isClosed: function () {
                    return this.v.c
                },
                pointOnPath: function (t, e) {
                    var r = this.v;
                    void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                    for (var i, n = this._segmentsLength, s = n.lengths, a = n.totalLength * t, o = 0, h = s.length, l = 0; o < h;) {
                        if (l + s[o].addedLength > a) {
                            var p = o,
                                c = r.c && o === h - 1 ? 0 : o + 1,
                                f = (a - l) / s[o].addedLength;
                            i = bez.getPointInSegment(r.v[p], r.v[c], r.o[p], r.i[c], f, s[o]);
                            break
                        }
                        l += s[o].addedLength, o += 1
                    }
                    return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
                },
                vectorOnPath: function (t, e, r) {
                    t = 1 == t ? this.v.c ? 0 : .999 : t;
                    var i = this.pointOnPath(t, e),
                        n = this.pointOnPath(t + .001, e),
                        s = n[0] - i[0],
                        a = n[1] - i[1],
                        o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
                    return 0 === o ? [0, 0] : "tangent" === r ? [s / o, a / o] : [-a / o, s / o]
                },
                tangentOnPath: function (t, e) {
                    return this.vectorOnPath(t, e, "tangent")
                },
                normalOnPath: function (t, e) {
                    return this.vectorOnPath(t, e, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([o], s), extendPrototype([o], a), a.prototype.getValueAtTime = function (t) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shape_pool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }, a.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var h = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (t, e, r, i, n) {
                var s = h(t, e, r, i, n);
                return s.propertyIndex = e.ix, s.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
            }
        }(),
        function () {
            TextProperty.prototype.getExpressionValue = function (t, e) {
                var r = this.calculateExpression(e);
                if (t.t !== r) {
                    var i = {};
                    return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i
                }
                return t
            }, TextProperty.prototype.searchProperty = function () {
                var t = this.searchKeyframes(),
                    e = this.searchExpressions();
                return this.kf = t || e, this.kf
            }, TextProperty.prototype.searchExpressions = function () {
                if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0
            }
        }();
        var ShapeExpressionInterface = function () {
                function t(t, c, f) {
                    var u, m = [],
                        d = t ? t.length : 0;
                    for (u = 0; u < d; u += 1) "gr" == t[u].ty ? m.push(e(t[u], c[u], f)) : "fl" == t[u].ty ? m.push(r(t[u], c[u], f)) : "st" == t[u].ty ? m.push(i(t[u], c[u], f)) : "tm" == t[u].ty ? m.push(n(t[u], c[u], f)) : "tr" == t[u].ty || ("el" == t[u].ty ? m.push(s(t[u], c[u], f)) : "sr" == t[u].ty ? m.push(a(t[u], c[u], f)) : "sh" == t[u].ty ? m.push(p(t[u], c[u], f)) : "rc" == t[u].ty ? m.push(o(t[u], c[u], f)) : "rd" == t[u].ty ? m.push(h(t[u], c[u], f)) : "rp" == t[u].ty && m.push(l(t[u], c[u], f)));
                    return m
                }

                function e(e, r, i) {
                    var n = function (t) {
                        switch (t) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return n.content;
                            default:
                                return n.transform
                        }
                    };
                    n.propertyGroup = function (t) {
                        return 1 === t ? n : i(t - 1)
                    };
                    var s = function (e, r, i) {
                            var n, s = function (t) {
                                for (var e = 0, r = n.length; e < r;) {
                                    if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t) return n[e];
                                    e += 1
                                }
                                if ("number" == typeof t) return n[t - 1]
                            };
                            return s.propertyGroup = function (t) {
                                return 1 === t ? s : i(t - 1)
                            }, n = t(e.it, r.it, s.propertyGroup), s.numProperties = n.length, s.propertyIndex = e.cix, s._name = e.nm, s
                        }(e, r, n.propertyGroup),
                        a = function (t, e, r) {
                            function i(t) {
                                return 1 == t ? n : r(--t)
                            }
                            e.transform.mProps.o.setGroupProperty(i), e.transform.mProps.p.setGroupProperty(i), e.transform.mProps.a.setGroupProperty(i), e.transform.mProps.s.setGroupProperty(i), e.transform.mProps.r.setGroupProperty(i), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(i), e.transform.mProps.sa.setGroupProperty(i));

                            function n(e) {
                                return t.a.ix === e || "Anchor Point" === e ? n.anchorPoint : t.o.ix === e || "Opacity" === e ? n.opacity : t.p.ix === e || "Position" === e ? n.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? n.rotation : t.s.ix === e || "Scale" === e ? n.scale : t.sk && t.sk.ix === e || "Skew" === e ? n.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? n.skewAxis : void 0
                            }
                            return e.transform.op.setGroupProperty(i), Object.defineProperties(n, {
                                opacity: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), n.ty = "tr", n.mn = t.mn, n.propertyGroup = r, n
                        }(e.it[e.it.length - 1], r.it[r.it.length - 1], n.propertyGroup);
                    return n.content = s, n.transform = a, Object.defineProperty(n, "_name", {
                        get: function () {
                            return e.nm
                        }
                    }), n.numProperties = e.np, n.propertyIndex = e.ix, n.nm = e.nm, n.mn = e.mn, n
                }

                function r(t, e, r) {
                    function i(t) {
                        return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : void 0
                    }
                    return Object.defineProperties(i, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), i
                }

                function i(t, e, r) {
                    function i(t) {
                        return 1 === t ? ob : r(t - 1)
                    }

                    function n(t) {
                        return 1 === t ? h : i(t - 1)
                    }

                    function s(r) {
                        Object.defineProperty(h, t.d[r].nm, {
                            get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                        })
                    }
                    var a, o = t.d ? t.d.length : 0,
                        h = {};
                    for (a = 0; a < o; a += 1) s(a), e.d.dataProps[a].p.setGroupProperty(n);

                    function l(t) {
                        return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : void 0
                    }
                    return Object.defineProperties(l, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(e.w)
                        },
                        dash: {
                            get: function () {
                                return h
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), e.w.setGroupProperty(i), l
                }

                function n(t, e, r) {
                    function i(t) {
                        return 1 == t ? n : r(--t)
                    }

                    function n(e) {
                        return e === t.e.ix || "End" === e || "end" === e ? n.end : e === t.s.ix ? n.start : e === t.o.ix ? n.offset : void 0
                    }
                    return n.propertyIndex = t.ix, e.s.setGroupProperty(i), e.e.setGroupProperty(i), e.o.setGroupProperty(i), n.propertyIndex = t.ix, n.propertyGroup = r, Object.defineProperties(n, {
                        start: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function s(t, e, r) {
                    function i(t) {
                        return 1 == t ? s : r(--t)
                    }
                    s.propertyIndex = t.ix;
                    var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                    function s(e) {
                        return t.p.ix === e ? s.position : t.s.ix === e ? s.size : void 0
                    }
                    return n.s.setGroupProperty(i), n.p.setGroupProperty(i), Object.defineProperties(s, {
                        size: {
                            get: ExpressionPropertyInterface(n.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(n.p)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), s.mn = t.mn, s
                }

                function a(t, e, r) {
                    function i(t) {
                        return 1 == t ? s : r(--t)
                    }
                    var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                    function s(e) {
                        return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? s.innerRoundness : void 0 : s.innerRadius
                    }
                    return s.propertyIndex = t.ix, n.or.setGroupProperty(i), n.os.setGroupProperty(i), n.pt.setGroupProperty(i), n.p.setGroupProperty(i), n.r.setGroupProperty(i), t.ir && (n.ir.setGroupProperty(i), n.is.setGroupProperty(i)), Object.defineProperties(s, {
                        position: {
                            get: ExpressionPropertyInterface(n.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(n.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(n.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(n.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(n.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(n.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(n.is)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), s.mn = t.mn, s
                }

                function o(t, e, r) {
                    function i(t) {
                        return 1 == t ? s : r(--t)
                    }
                    var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;

                    function s(e) {
                        return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? s.size : void 0
                    }
                    return s.propertyIndex = t.ix, n.p.setGroupProperty(i), n.s.setGroupProperty(i), n.r.setGroupProperty(i), Object.defineProperties(s, {
                        position: {
                            get: ExpressionPropertyInterface(n.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(n.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(n.s)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), s.mn = t.mn, s
                }

                function h(t, e, r) {
                    var i = e;

                    function n(e) {
                        if (t.r.ix === e || "Round Corners 1" === e) return n.radius
                    }
                    return n.propertyIndex = t.ix, i.rd.setGroupProperty(function (t) {
                        return 1 == t ? n : r(--t)
                    }), Object.defineProperties(n, {
                        radius: {
                            get: ExpressionPropertyInterface(i.rd)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function l(t, e, r) {
                    function i(t) {
                        return 1 == t ? s : r(--t)
                    }
                    var n = e;

                    function s(e) {
                        return t.c.ix === e || "Copies" === e ? s.copies : t.o.ix === e || "Offset" === e ? s.offset : void 0
                    }
                    return s.propertyIndex = t.ix, n.c.setGroupProperty(i), n.o.setGroupProperty(i), Object.defineProperties(s, {
                        copies: {
                            get: ExpressionPropertyInterface(n.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(n.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), s.mn = t.mn, s
                }

                function p(t, e, r) {
                    var i = e.sh;

                    function n(t) {
                        if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return n.path
                    }
                    return i.setGroupProperty(function (t) {
                        return 1 == t ? n : r(--t)
                    }), Object.defineProperties(n, {
                        path: {
                            get: function () {
                                return i.k && i.getValue(), i
                            }
                        },
                        shape: {
                            get: function () {
                                return i.k && i.getValue(), i
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        ix: {
                            value: t.ix
                        },
                        propertyIndex: {
                            value: t.ix
                        },
                        mn: {
                            value: t.mn
                        }
                    }), n
                }
                return function (e, r, i) {
                    var n;

                    function s(t) {
                        if ("number" == typeof t) return n[t - 1];
                        for (var e = 0, r = n.length; e < r;) {
                            if (n[e]._name === t) return n[e];
                            e += 1
                        }
                    }
                    return s.propertyGroup = i, n = t(e, r, s), s.numProperties = n.length, s
                }
            }(),
            TextExpressionInterface = function (t) {
                var e;

                function r() {}
                return Object.defineProperty(r, "sourceText", {
                    get: function () {
                        t.textProperty.getValue();
                        var r = t.textProperty.currentData.t;
                        return void 0 !== r && (t.textProperty.currentData.t = void 0, (e = new String(r)).value = r || new String(r)), e
                    }
                }), r
            },
            LayerExpressionInterface = function () {
                function t(t, e) {
                    var r = new Matrix;
                    if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, n = this._elem.hierarchy.length;
                        for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                        return r.applyToPointArray(t[0], t[1], t[2] || 0)
                    }
                    return r.applyToPointArray(t[0], t[1], t[2] || 0)
                }

                function e(t, e) {
                    var r = new Matrix;
                    if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, n = this._elem.hierarchy.length;
                        for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                        return r.inversePoint(t)
                    }
                    return r.inversePoint(t)
                }

                function r(t) {
                    var e = new Matrix;
                    if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                        return e.inversePoint(t)
                    }
                    return e.inversePoint(t)
                }

                function i() {
                    return [1, 1, 1, 1]
                }
                return function (n) {
                    var s;

                    function a(t) {
                        switch (t) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return a.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return s;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return a.effect
                        }
                    }
                    a.toWorld = t, a.fromWorld = e, a.toComp = t, a.fromComp = r, a.sampleImage = i, a.sourceRectAtTime = n.sourceRectAtTime.bind(n), a._elem = n;
                    var o = getDescriptor(s = TransformExpressionInterface(n.finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(a, {
                        hasParent: {
                            get: function () {
                                return n.hierarchy.length
                            }
                        },
                        parent: {
                            get: function () {
                                return n.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(s, "rotation"),
                        scale: getDescriptor(s, "scale"),
                        position: getDescriptor(s, "position"),
                        opacity: getDescriptor(s, "opacity"),
                        anchorPoint: o,
                        anchor_point: o,
                        transform: {
                            get: function () {
                                return s
                            }
                        },
                        active: {
                            get: function () {
                                return n.isInRange
                            }
                        }
                    }), a.startTime = n.data.st, a.index = n.data.ind, a.source = n.data.refId, a.height = 0 === n.data.ty ? n.data.h : 100, a.width = 0 === n.data.ty ? n.data.w : 100, a.inPoint = n.data.ip / n.comp.globalData.frameRate, a.outPoint = n.data.op / n.comp.globalData.frameRate, a._name = n.data.nm, a.registerMaskInterface = function (t) {
                        a.mask = new MaskManagerInterface(t, n)
                    }, a.registerEffectsInterface = function (t) {
                        a.effect = t
                    }, a
                }
            }(),
            CompExpressionInterface = function (t) {
                function e(e) {
                    for (var r = 0, i = t.layers.length; r < i;) {
                        if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                        r += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
            },
            TransformExpressionInterface = function (t) {
                function e(t) {
                    switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity
                    }
                }
                if (Object.defineProperty(e, "rotation", {
                        get: ExpressionPropertyInterface(t.r || t.rz)
                    }), Object.defineProperty(e, "zRotation", {
                        get: ExpressionPropertyInterface(t.rz || t.r)
                    }), Object.defineProperty(e, "xRotation", {
                        get: ExpressionPropertyInterface(t.rx)
                    }), Object.defineProperty(e, "yRotation", {
                        get: ExpressionPropertyInterface(t.ry)
                    }), Object.defineProperty(e, "scale", {
                        get: ExpressionPropertyInterface(t.s)
                    }), t.p) var r = ExpressionPropertyInterface(t.p);
                return Object.defineProperty(e, "position", {
                    get: function () {
                        return t.p ? r() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0]
                    }
                }), Object.defineProperty(e, "xPosition", {
                    get: ExpressionPropertyInterface(t.px)
                }), Object.defineProperty(e, "yPosition", {
                    get: ExpressionPropertyInterface(t.py)
                }), Object.defineProperty(e, "zPosition", {
                    get: ExpressionPropertyInterface(t.pz)
                }), Object.defineProperty(e, "anchorPoint", {
                    get: ExpressionPropertyInterface(t.a)
                }), Object.defineProperty(e, "opacity", {
                    get: ExpressionPropertyInterface(t.o)
                }), Object.defineProperty(e, "skew", {
                    get: ExpressionPropertyInterface(t.sk)
                }), Object.defineProperty(e, "skewAxis", {
                    get: ExpressionPropertyInterface(t.sa)
                }), Object.defineProperty(e, "orientation", {
                    get: ExpressionPropertyInterface(t.or)
                }), e
            },
            ProjectInterface = function () {
                function t(t) {
                    this.compositions.push(t)
                }
                return function () {
                    function e(t) {
                        for (var e = 0, r = this.compositions.length; e < r;) {
                            if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                            e += 1
                        }
                    }
                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                }
            }(),
            EffectsExpressionInterface = function () {
                function t(r, i, n, s) {
                    var a, o = [],
                        h = r.ef.length;
                    for (a = 0; a < h; a += 1) 5 === r.ef[a].ty ? o.push(t(r.ef[a], i.effectElements[a], i.effectElements[a].propertyGroup, s)) : o.push(e(i.effectElements[a], r.ef[a].ty, s, l));

                    function l(t) {
                        return 1 === t ? p : n(t - 1)
                    }
                    var p = function (t) {
                        for (var e = r.ef, i = 0, n = e.length; i < n;) {
                            if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? o[i] : o[i]();
                            i += 1
                        }
                        return o[0]()
                    };
                    return p.propertyGroup = l, "ADBE Color Control" === r.mn && Object.defineProperty(p, "color", {
                        get: function () {
                            return o[0]()
                        }
                    }), Object.defineProperty(p, "numProperties", {
                        get: function () {
                            return r.np
                        }
                    }), p.active = p.enabled = 0 !== r.en, p
                }

                function e(t, e, r, i) {
                    var n = ExpressionPropertyInterface(t.p);
                    return t.p.setGroupProperty && t.p.setGroupProperty(i),
                        function () {
                            return 10 === e ? r.comp.compInterface(t.p.v) : n()
                        }
                }
                return {
                    createEffectsInterface: function (e, r) {
                        if (e.effectsManager) {
                            var i, n = [],
                                s = e.data.ef,
                                a = e.effectsManager.effectElements.length;
                            for (i = 0; i < a; i += 1) n.push(t(s[i], e.effectsManager.effectElements[i], r, e));
                            return function (t) {
                                for (var r = e.data.ef || [], i = 0, s = r.length; i < s;) {
                                    if (t === r[i].nm || t === r[i].mn || t === r[i].ix) return n[i];
                                    i += 1
                                }
                            }
                        }
                    }
                }
            }(),
            MaskManagerInterface = function () {
                function t(t, e) {
                    this._mask = t, this._data = e
                }
                Object.defineProperty(t.prototype, "maskPath", {
                    get: function () {
                        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                    }
                }), Object.defineProperty(t.prototype, "maskOpacity", {
                    get: function () {
                        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                    }
                });
                return function (e, r) {
                    var i, n = createSizedArray(e.viewData.length),
                        s = e.viewData.length;
                    for (i = 0; i < s; i += 1) n[i] = new t(e.viewData[i], e.masksProperties[i]);
                    return function (t) {
                        for (i = 0; i < s;) {
                            if (e.masksProperties[i].nm === t) return n[i];
                            i += 1
                        }
                    }
                }
            }(),
            ExpressionPropertyInterface = function () {
                var t = {
                        pv: 0,
                        v: 0,
                        mult: 1
                    },
                    e = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };

                function r(t, e, r) {
                    Object.defineProperty(t, "velocity", {
                        get: function () {
                            return e.getVelocityAtTime(e.comp.currentFrame)
                        }
                    }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function (i) {
                        if (t.numKeys) {
                            var n = "";
                            n = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                            var s = "unidimensional" === r ? new Number(n) : Object.assign({}, n);
                            return s.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, s
                        }
                        return 0
                    }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                }

                function i() {
                    return t
                }
                return function (n) {
                    return n ? "unidimensional" === n.propType ? function (e) {
                        e && "pv" in e || (e = t);
                        var i = 1 / e.mult,
                            n = e.pv * i,
                            s = new Number(n);
                        return s.value = n, r(s, e, "unidimensional"),
                            function () {
                                return e.k && e.getValue(), n = e.v * i, s.value !== n && ((s = new Number(n)).value = n, r(s, e, "unidimensional")), s
                            }
                    }(n) : function (t) {
                        t && "pv" in t || (t = e);
                        var i = 1 / t.mult,
                            n = t.pv.length,
                            s = createTypedArray("float32", n),
                            a = createTypedArray("float32", n);
                        return s.value = a, r(s, t, "multidimensional"),
                            function () {
                                t.k && t.getValue();
                                for (var e = 0; e < n; e += 1) s[e] = a[e] = t.v[e] * i;
                                return s
                            }
                    }(n) : i
                }
            }(),
            TextExpressionSelectorProp, propertyGetTextProp;

        function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager() {}

        function EffectsManager(t, e) {
            var r = t.ef || [];
            this.effectElements = [];
            var i, n, s = r.length;
            for (i = 0; i < s; i++) n = new GroupEffect(r[i], e), this.effectElements.push(n)
        }

        function GroupEffect(t, e) {
            this.init(t, e)
        }
        TextExpressionSelectorProp = function () {
            function t(t, e) {
                return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
            }
            return function (e, r) {
                this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = r.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
            }
        }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function (t, e, r) {
            return 1 === e.t ? new TextExpressionSelectorProp(t, e, r) : propertyGetTextProp(t, e, r)
        }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var r, i, n = this.data.ef.length,
                s = this.data.ef;
            for (r = 0; r < n; r += 1) {
                switch (i = null, s[r].ty) {
                    case 0:
                        i = new SliderEffect(s[r], e, this);
                        break;
                    case 1:
                        i = new AngleEffect(s[r], e, this);
                        break;
                    case 2:
                        i = new ColorEffect(s[r], e, this);
                        break;
                    case 3:
                        i = new PointEffect(s[r], e, this);
                        break;
                    case 4:
                    case 7:
                        i = new CheckboxEffect(s[r], e, this);
                        break;
                    case 10:
                        i = new LayerIndexEffect(s[r], e, this);
                        break;
                    case 11:
                        i = new MaskIndexEffect(s[r], e, this);
                        break;
                    case 5:
                        i = new EffectsManager(s[r], e, this);
                        break;
                    default:
                        i = new NoValueEffect(s[r], e, this)
                }
                i && this.effectElements.push(i)
            }
        };
        var lottiejs = {},
            _isFrozen = !1;

        function setLocationHref(t) {
            locationHref = t
        }

        function searchAnimations() {
            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
            subframeEnabled = t
        }

        function loadAnimation(t) {
            return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
            if ("string" == typeof t) switch (t) {
                case "high":
                    defaultCurveSegments = 200;
                    break;
                case "medium":
                    defaultCurveSegments = 50;
                    break;
                case "low":
                    defaultCurveSegments = 10
            } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
            roundValues(!(defaultCurveSegments >= 50))
        }

        function inBrowser() {
            return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
            "expressions" === t && (expressionsPlugin = e)
        }

        function getFactory(t) {
            switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix
            }
        }

        function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
            for (var e = queryString.split("&"), r = 0; r < e.length; r++) {
                var i = e[r].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
            }
        }
        lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, lottiejs.version = "5.5.9";
        var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "";
        if (standalone) {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || {
                    src: ""
                },
                queryString = myScript.src.replace(/^[^\?]+\??/, "");
            renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        return lottiejs
    }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return factory(root)
    }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function (t, e, r) {
    "use strict";
    var i = r(14);
    i.define("brand", t.exports = function (t) {
        var e, r = {},
            n = document,
            s = t("html"),
            a = t("body"),
            o = ".w-webflow-badge",
            h = window.location,
            l = /PhantomJS/i.test(navigator.userAgent),
            p = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function c() {
            var r = n.fullScreen || n.mozFullScreen || n.webkitIsFullScreen || n.msFullscreenElement || Boolean(n.webkitFullscreenElement);
            t(e).attr("style", r ? "display: none !important;" : "")
        }

        function f() {
            var t = a.children(o),
                r = t.length && t.get(0) === e,
                n = i.env("editor");
            r ? n && t.remove() : (t.length && t.remove(), n || a.append(e))
        }
        return r.ready = function () {
            var r, i, a, o = s.attr("data-wf-status"),
                u = s.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(u) && h.hostname !== u && (o = !0), o && !l && (e = e || (r = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), i = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                marginRight: "8px",
                width: "16px"
            }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), r.append(i, a), r[0]), f(), setTimeout(f, 500), t(n).off(p, c).on(p, c))
        }, r
    })
}, function (t, e, r) {
    "use strict";
    var i = r(14);
    i.define("links", t.exports = function (t, e) {
        var r, n, s, a = {},
            o = t(window),
            h = i.env(),
            l = window.location,
            p = document.createElement("a"),
            c = "w--current",
            f = /index\.(html|php)$/,
            u = /\/$/;

        function m(e) {
            var i = r && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (p.href = i, !(i.indexOf(":") >= 0)) {
                var a = t(e);
                if (p.hash.length > 1 && p.host + p.pathname === l.host + l.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(p.hash)) return;
                    var o = t(p.hash);
                    o.length && n.push({
                        link: a,
                        sec: o,
                        active: !1
                    })
                } else if ("#" !== i && "" !== i) {
                    var h = p.href === l.href || i === s || f.test(i) && u.test(s);
                    y(a, c, h)
                }
            }
        }

        function d() {
            var t = o.scrollTop(),
                r = o.height();
            e.each(n, function (e) {
                var i = e.link,
                    n = e.sec,
                    s = n.offset().top,
                    a = n.outerHeight(),
                    o = .5 * r,
                    h = n.is(":visible") && s + a - o >= t && s + o <= t + r;
                e.active !== h && (e.active = h, y(i, c, h))
            })
        }

        function y(t, e, r) {
            var i = t.hasClass(e);
            r && i || (r || i) && (r ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function () {
            r = h && i.env("design"), s = i.env("slug") || l.pathname || "", i.scroll.off(d), n = [];
            for (var t = document.links, e = 0; e < t.length; ++e) m(t[e]);
            n.length && (i.scroll.on(d), d())
        }, a
    })
}, function (t, e, r) {
    "use strict";
    var i = r(14);
    i.define("scroll", t.exports = function (t) {
        var e = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            },
            r = window.location,
            n = function () {
                try {
                    return Boolean(window.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : window.history,
            s = t(window),
            a = t(document),
            o = t(document.body),
            h = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                window.setTimeout(t, 15)
            },
            l = i.env("editor") ? ".w-editor-body" : "body",
            p = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
            c = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + c + ")";
        var u = /^#[a-zA-Z0-9][\w:.-]*$/;

        function m(e) {
            var a = e.currentTarget;
            if (!(i.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
                var l, c = (l = a, u.test(l.hash) && l.host + l.pathname === r.host + r.pathname ? a.hash : "");
                if ("" !== c) {
                    var f = t(c);
                    f.length && (e && (e.preventDefault(), e.stopPropagation()), function (t) {
                        if (r.hash !== t && n && n.pushState && (!i.env.chrome || "file:" !== r.protocol)) {
                            var e = n.state && n.state.hash;
                            e !== t && n.pushState({
                                hash: t
                            }, "", t)
                        }
                    }(c), window.setTimeout(function () {
                        ! function (e) {
                            var r = s.scrollTop(),
                                i = function (e) {
                                    var r = t(p),
                                        i = "fixed" === r.css("position") ? r.outerHeight() : 0,
                                        n = e.offset().top - i;
                                    if ("mid" === e.data("scroll")) {
                                        var a = s.height() - i,
                                            o = e.outerHeight();
                                        o < a && (n -= Math.round((a - o) / 2))
                                    }
                                    return n
                                }(e);
                            if (r === i) return;
                            var n = function (t, e, r) {
                                    if (document.body.hasAttribute("data-wf-reduce-scroll-motion") && ("none" === document.body.getAttribute("data-wf-scroll-motion") || "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return 0;
                                    var i = 1;
                                    return o.add(t).each(function (t, e) {
                                        var r = parseFloat(e.getAttribute("data-scroll-time"));
                                        !isNaN(r) && r >= 0 && (i = r)
                                    }), (472.143 * Math.log(Math.abs(e - r) + 125) - 2e3) * i
                                }(e, r, i),
                                a = Date.now();
                            h(function t() {
                                var e = Date.now() - a;
                                window.scroll(0, function (t, e, r, i) {
                                    return r > i ? e : t + (e - t) * ((n = r / i) < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1);
                                    var n
                                }(r, i, e, n)), e <= n && h(t)
                            })
                        }(f)
                    }, e ? 0 : 300))
                }
            }
        }
        return {
            ready: function () {
                var t = e.WF_CLICK_EMPTY,
                    r = e.WF_CLICK_SCROLL;
                a.on(r, f, m), a.on(t, c, function (t) {
                    t.preventDefault()
                })
            }
        }
    })
}, function (t, e, r) {
    "use strict";
    r(14).define("touch", t.exports = function (t) {
        var e = {},
            r = window.getSelection;

        function i(e) {
            var i, n, s = !1,
                a = !1,
                o = Math.min(Math.round(.04 * window.innerWidth), 40);

            function h(t) {
                var e = t.touches;
                e && e.length > 1 || (s = !0, e ? (a = !0, i = e[0].clientX) : i = t.clientX, n = i)
            }

            function l(e) {
                if (s) {
                    if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var i = e.touches,
                        h = i ? i[0].clientX : e.clientX,
                        l = h - n;
                    n = h, Math.abs(l) > o && r && "" === String(r()) && (! function (e, r, i) {
                        var n = t.Event(e, {
                            originalEvent: r
                        });
                        t(r.target).trigger(n, i)
                    }("swipe", e, {
                        direction: l > 0 ? "right" : "left"
                    }), c())
                }
            }

            function p(t) {
                if (s) return s = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0
            }

            function c() {
                s = !1
            }
            e.addEventListener("touchstart", h, !1), e.addEventListener("touchmove", l, !1), e.addEventListener("touchend", p, !1), e.addEventListener("touchcancel", c, !1), e.addEventListener("mousedown", h, !1), e.addEventListener("mousemove", l, !1), e.addEventListener("mouseup", p, !1), e.addEventListener("mouseout", c, !1), this.destroy = function () {
                e.removeEventListener("touchstart", h, !1), e.removeEventListener("touchmove", l, !1), e.removeEventListener("touchend", p, !1), e.removeEventListener("touchcancel", c, !1), e.removeEventListener("mousedown", h, !1), e.removeEventListener("mousemove", l, !1), e.removeEventListener("mouseup", p, !1), e.removeEventListener("mouseout", c, !1), e = null
            }
        }
        return t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }, e.init = function (e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new i(e) : null
        }, e.instance = e.init(document), e
    })
}, function (t, e, r) {
    "use strict";
    var i = r(29)(r(254)),
        n = r(14);
    n.define("forms", t.exports = function (t, e) {
        var r, s, a, o, h, l = {},
            p = t(document),
            c = window.location,
            f = window.XDomainRequest && !window.atob,
            u = ".w-form",
            m = /e(-)?mail/i,
            d = /^\S+@\S+$/,
            y = window.alert,
            g = n.env(),
            v = /list-manage[1-9]?.com/i,
            b = e.debounce(function () {
                y("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);

        function x(e, r) {
            var i = t(r),
                n = t.data(r, u);
            n || (n = t.data(r, u, {
                form: i
            })), E(n);
            var a = i.closest("div.w-form");
            n.done = a.find("> .w-form-done"), n.fail = a.find("> .w-form-fail"), n.fileUploads = a.find(".w-file-upload"), n.fileUploads.each(function (e) {
                ! function (e, r) {
                    if (!r.fileUploads || !r.fileUploads[e]) return;
                    var i, n = t(r.fileUploads[e]),
                        s = n.find("> .w-file-upload-default"),
                        a = n.find("> .w-file-upload-uploading"),
                        o = n.find("> .w-file-upload-success"),
                        l = n.find("> .w-file-upload-error"),
                        p = s.find(".w-file-upload-input"),
                        c = s.find(".w-file-upload-label"),
                        f = c.children(),
                        u = l.find(".w-file-upload-error-msg"),
                        m = o.find(".w-file-upload-file"),
                        d = o.find(".w-file-remove-link"),
                        y = m.find(".w-file-upload-file-name"),
                        v = u.attr("data-w-size-error"),
                        b = u.attr("data-w-type-error"),
                        x = u.attr("data-w-generic-error");
                    if (g) p.on("click", function (t) {
                        t.preventDefault()
                    }), c.on("click", function (t) {
                        t.preventDefault()
                    }), f.on("click", function (t) {
                        t.preventDefault()
                    });
                    else {
                        d.on("click", function () {
                            p.removeAttr("data-value"), p.val(""), y.html(""), s.toggle(!0), o.toggle(!1)
                        }), p.on("change", function (n) {
                            (i = n.target && n.target.files && n.target.files[0]) && (s.toggle(!1), l.toggle(!1), a.toggle(!0), y.text(i.name), C() || _(r), r.fileUploads[e].uploading = !0, function (e, r) {
                                var i = {
                                    name: e.name,
                                    size: e.size
                                };
                                t.ajax({
                                    type: "POST",
                                    url: h,
                                    data: i,
                                    dataType: "json",
                                    crossDomain: !0
                                }).done(function (t) {
                                    r(null, t)
                                }).fail(function (t) {
                                    r(t)
                                })
                            }(i, P))
                        });
                        var w = c.outerHeight();
                        p.height(w), p.width(1)
                    }

                    function S(t) {
                        var i = t.responseJSON && t.responseJSON.msg,
                            n = x;
                        "string" == typeof i && 0 === i.indexOf("InvalidFileTypeError") ? n = b : "string" == typeof i && 0 === i.indexOf("MaxFileSizeError") && (n = v), u.text(n), p.removeAttr("data-value"), p.val(""), a.toggle(!1), s.toggle(!0), l.toggle(!0), r.fileUploads[e].uploading = !1, C() || E(r)
                    }

                    function P(e, r) {
                        if (e) return S(e);
                        var n = r.fileName,
                            s = r.postData,
                            a = r.fileId,
                            o = r.s3Url;
                        p.attr("data-value", a),
                            function (e, r, i, n, s) {
                                var a = new FormData;
                                for (var o in r) a.append(o, r[o]);
                                a.append("file", i, n), t.ajax({
                                    type: "POST",
                                    url: e,
                                    data: a,
                                    processData: !1,
                                    contentType: !1
                                }).done(function () {
                                    s(null)
                                }).fail(function (t) {
                                    s(t)
                                })
                            }(o, s, i, n, A)
                    }

                    function A(t) {
                        if (t) return S(t);
                        a.toggle(!1), o.css("display", "inline-block"), r.fileUploads[e].uploading = !1, C() || E(r)
                    }

                    function C() {
                        var t = r.fileUploads && r.fileUploads.toArray() || [];
                        return t.some(function (t) {
                            return t.uploading
                        })
                    }
                }(e, n)
            });
            var o = n.action = i.attr("action");
            n.handler = null, n.redirect = i.attr("data-redirect"), v.test(o) ? n.handler = P : o || (s ? n.handler = "function" == typeof hostedSubmitWebflow ? hostedSubmitWebflow : S : b())
        }

        function E(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function _(t) {
            var e = t.btn,
                r = t.wait;
            e.prop("disabled", !0), r && (t.label = e.val(), e.val(r))
        }

        function w(e, r) {
            var i = null;
            return r = r || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function (n, s) {
                var a = t(s),
                    o = a.attr("type"),
                    h = a.attr("data-name") || a.attr("name") || "Field " + (n + 1),
                    l = a.val();
                if ("checkbox" === o) l = a.is(":checked");
                else if ("radio" === o) {
                    if (null === r[h] || "string" == typeof r[h]) return;
                    l = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof l && (l = t.trim(l)), r[h] = l, i = i || function (t, e, r, i) {
                    var n = null;
                    "password" === e ? n = "Passwords cannot be submitted." : t.attr("required") ? i ? m.test(t.attr("type")) && (d.test(i) || (n = "Please enter a valid email address for: " + r)) : n = "Please fill out the required field: " + r : "g-recaptcha-response" !== r || i || (n = "Please confirm you’re not a robot.");
                    return n
                }(a, o, h, l)
            }), i
        }

        function S(t) {
            C(t), A(t)
        }

        function P(r) {
            E(r);
            var i = r.form,
                n = {};
            if (!/^https/.test(c.href) || /^https/.test(r.action)) {
                C(r);
                var s, a = w(i, n);
                if (a) return y(a);
                _(r), e.each(n, function (t, e) {
                    m.test(e) && (n.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (s = t), /^(first[ _-]?name)$/i.test(e) && (n.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (n.LNAME = t)
                }), s && !n.FNAME && (s = s.split(" "), n.FNAME = s[0], n.LNAME = n.LNAME || s[1]);
                var o = r.action.replace("/post?", "/post-json?") + "&c=?",
                    h = o.indexOf("u=") + 2;
                h = o.substring(h, o.indexOf("&", h));
                var l = o.indexOf("id=") + 3;
                l = o.substring(l, o.indexOf("&", l)), n["b_" + h + "_" + l] = "", t.ajax({
                    url: o,
                    data: n,
                    dataType: "jsonp"
                }).done(function (t) {
                    r.success = "success" === t.result || /already/.test(t.msg), r.success || console.info("MailChimp error: " + t.msg), A(r)
                }).fail(function () {
                    A(r)
                })
            } else i.attr("method", "post")
        }

        function A(t) {
            var e = t.form,
                r = t.redirect,
                i = t.success;
            i && r ? n.location(r) : (t.done.toggle(i), t.fail.toggle(!i), e.toggle(!i), E(t))
        }

        function C(t) {
            t.evt && t.evt.preventDefault(), t.evt = null
        }
        return l.ready = l.design = l.preview = function () {
            ! function () {
                s = t("html").attr("data-wf-site"), o = "https://webflow.com/api/v1/form/" + s, f && o.indexOf("https://webflow.com") >= 0 && (o = o.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (h = "".concat(o, "/signFile"), !(r = t(u + " form")).length) return;
                r.each(x)
            }(), g || a || function () {
                a = !0, p.on("submit", u + " form", function (e) {
                    var r = t.data(this, u);
                    r.handler && (r.evt = e, r.handler(r))
                });
                var e = [
                    ["checkbox", ".w-checkbox-input"],
                    ["radio", ".w-radio-input"]
                ];
                p.on("change", u + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (e) {
                    t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
                }), p.on("change", u + ' form input[type="radio"]', function (e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (e, r) {
                        return t(r).siblings(".w-radio-input").removeClass("w--redirected-checked")
                    });
                    var r = t(e.target);
                    r.hasClass("w-radio-input") || r.siblings(".w-radio-input").addClass("w--redirected-checked")
                }), e.forEach(function (e) {
                    var r = (0, i.default)(e, 2),
                        n = r[0],
                        s = r[1];
                    p.on("focus", u + ' form input[type="'.concat(n, '"]:not(') + s + ")", function (e) {
                        t(e.target).siblings(s).addClass("w--redirected-focus")
                    }), p.on("blur", u + ' form input[type="'.concat(n, '"]:not(') + s + ")", function (e) {
                        t(e.target).siblings(s).removeClass("w--redirected-focus")
                    })
                })
            }()
        }, l
    })
}, function (t, e, r) {
    var i = r(255),
        n = r(256),
        s = r(257);
    t.exports = function (t, e) {
        return i(t) || n(t, e) || s()
    }
}, function (t, e) {
    t.exports = function (t) {
        if (Array.isArray(t)) return t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        var r = [],
            i = !0,
            n = !1,
            s = void 0;
        try {
            for (var a, o = t[Symbol.iterator](); !(i = (a = o.next()).done) && (r.push(a.value), !e || r.length !== e); i = !0);
        } catch (t) {
            n = !0, s = t
        } finally {
            try {
                i || null == o.return || o.return()
            } finally {
                if (n) throw s
            }
        }
        return r
    }
}, function (t, e) {
    t.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function (t, e, r) {
    "use strict";
    var i = r(14),
        n = "w-condition-invisible",
        s = "." + n;

    function a(t) {
        return Boolean(t.$el && t.$el.closest(s).length)
    }

    function o(t, e) {
        for (var r = t; r >= 0; r--)
            if (!a(e[r])) return r;
        return -1
    }

    function h(t, e) {
        for (var r = t; r <= e.length - 1; r++)
            if (!a(e[r])) return r;
        return -1
    }

    function l(t, e, r, i) {
        var s, l, p, c = r.tram,
            f = Array.isArray,
            u = "w-lightbox-",
            m = /(^|\s+)/g,
            d = [];

        function y(t, e) {
            return d = f(t) ? t : [t], l || y.build(),
                function (t) {
                    return t.filter(function (t) {
                        return !a(t)
                    })
                }(d).length > 1 && (l.items = l.empty, d.forEach(function (t) {
                    var e = R("thumbnail"),
                        r = R("item").append(e);
                    a(t) && r.addClass(n), l.items = l.items.add(r), C(t.thumbnailUrl || t.url, function (t) {
                        t.prop("width") > t.prop("height") ? D(t, "wide") : D(t, "tall"), e.append(D(t, "thumbnail-image"))
                    })
                }), l.strip.empty().append(l.items), D(l.content, "group")), c(F(l.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), D(l.html, "noscroll"), y.show(e || 0)
        }

        function g(t) {
            return function (e) {
                this === e.target && (e.stopPropagation(), e.preventDefault(), t())
            }
        }
        y.build = function () {
            return y.destroy(), (l = {
                html: r(e.documentElement),
                empty: r()
            }).arrowLeft = R("control left inactive"), l.arrowRight = R("control right inactive"), l.close = R("control close"), l.spinner = R("spinner"), l.strip = R("strip"), p = new k(l.spinner, T("hide")), l.content = R("content").append(l.spinner, l.arrowLeft, l.arrowRight, l.close), l.container = R("container").append(l.content, l.strip), l.lightbox = R("backdrop hide").append(l.container), l.strip.on("click", M("item"), E), l.content.on("swipe", _).on("click", M("left"), v).on("click", M("right"), b).on("click", M("close"), x).on("click", M("image, caption"), b), l.container.on("click", M("view"), x).on("dragstart", M("img"), S), l.lightbox.on("keydown", P).on("focusin", w), r(i).append(l.lightbox.prop("tabIndex", 0)), y
        }, y.destroy = function () {
            l && (F(l.html, "noscroll"), l.lightbox.remove(), l = void 0)
        }, y.show = function (t) {
            if (t !== s) {
                var e = d[t];
                if (!e) return y.hide();
                if (a(e)) {
                    if (t < s) {
                        var i = o(t - 1, d);
                        t = i > -1 ? i : t
                    } else {
                        var n = h(t + 1, d);
                        t = n > -1 ? n : t
                    }
                    e = d[t]
                }
                var f, u, m = s;
                return s = t, p.show(), C(e.html && (f = e.width, u = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + f + '" height="' + u + '"/>')) || e.url, function (i) {
                    if (t === s) {
                        var n, a, f = R("figure", "figure").append(D(i, "image")),
                            u = R("frame").append(f),
                            y = R("view").append(u);
                        e.html && ((a = (n = r(e.html)).is("iframe")) && n.on("load", g), f.append(D(n, "embed"))), e.caption && f.append(R("caption", "figcaption").text(e.caption)), l.spinner.before(y), a || g()
                    }

                    function g() {
                        var e;
                        if (p.hide(), t === s) {
                            if (I(l.arrowLeft, "inactive", function (t, e) {
                                    return -1 === o(t - 1, e)
                                }(t, d)), I(l.arrowRight, "inactive", function (t, e) {
                                    return -1 === h(t + 1, e)
                                }(t, d)), l.view ? (c(l.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then((e = l.view, function () {
                                    e.remove()
                                })), c(y).add("opacity .3s").add("transform .3s").set({
                                    x: t > m ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : y.css("opacity", 1), l.view = y, l.items) {
                                F(l.items, "active");
                                var r = l.items.eq(t);
                                D(r, "active"),
                                    function (t) {
                                        var e, r = t.get(0),
                                            i = l.strip.get(0),
                                            n = r.offsetLeft,
                                            s = r.clientWidth,
                                            a = i.scrollLeft,
                                            o = i.clientWidth,
                                            h = i.scrollWidth - o;
                                        n < a ? e = Math.max(0, n + s - o) : n + s > o + a && (e = Math.min(n, h));
                                        null != e && c(l.strip).add("scroll-left 500ms").start({
                                            "scroll-left": e
                                        })
                                    }(r)
                            }
                        } else y.remove()
                    }
                }), y
            }
        }, y.hide = function () {
            return c(l.lightbox).add("opacity .3s").start({
                opacity: 0
            }).then(A), y
        }, y.prev = function () {
            var t = o(s - 1, d);
            t > -1 && y.show(t)
        }, y.next = function () {
            var t = h(s + 1, d);
            t > -1 && y.show(t)
        };
        var v = g(y.prev),
            b = g(y.next),
            x = g(y.hide),
            E = function (t) {
                var e = r(this).index();
                t.preventDefault(), y.show(e)
            },
            _ = function (t, e) {
                t.preventDefault(), "left" === e.direction ? y.next() : "right" === e.direction && y.prev()
            },
            w = function () {
                this.focus()
            };

        function S(t) {
            t.preventDefault()
        }

        function P(t) {
            var e = t.keyCode;
            27 === e ? y.hide() : 37 === e ? y.prev() : 39 === e && y.next()
        }

        function A() {
            l && (l.strip.scrollLeft(0).empty(), F(l.html, "noscroll"), D(l.lightbox, "hide"), l.view && l.view.remove(), F(l.content, "group"), D(l.arrowLeft, "inactive"), D(l.arrowRight, "inactive"), s = l.view = void 0)
        }

        function C(t, e) {
            var r = R("img", "img");
            return r.one("load", function () {
                e(r)
            }), r.attr("src", t), r
        }

        function k(t, e, r) {
            this.$element = t, this.className = e, this.delay = r || 200, this.hide()
        }

        function T(t, e) {
            return t.replace(m, (e ? " ." : " ") + u)
        }

        function M(t) {
            return T(t, !0)
        }

        function D(t, e) {
            return t.addClass(T(e))
        }

        function F(t, e) {
            return t.removeClass(T(e))
        }

        function I(t, e, r) {
            return t.toggleClass(T(e), r)
        }

        function R(t, i) {
            return D(r(e.createElement(i || "div")), t)
        }
        return k.prototype.show = function () {
                var t = this;
                t.timeoutId || (t.timeoutId = setTimeout(function () {
                    t.$element.removeClass(t.className), delete t.timeoutId
                }, t.delay))
            }, k.prototype.hide = function () {
                if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
                this.$element.addClass(this.className)
            },
            function () {
                var r = t.navigator.userAgent,
                    i = r.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                if (r.indexOf("Android ") > -1 && -1 === r.indexOf("Chrome") || i && !(i[2] > 7)) {
                    var n = e.createElement("style");
                    e.head.appendChild(n), t.addEventListener("resize", s, !0), s()
                }

                function s() {
                    var e = t.innerHeight,
                        r = t.innerWidth,
                        i = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + r + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + r + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * r + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * r + "px;max-height:" + .84 * e + "px}}";
                    n.textContent = i
                }
            }(), y
    }
    i.define("lightbox", t.exports = function (t) {
        var e, r, n = {},
            s = i.env(),
            a = l(window, document, t, s ? "#lightbox-mountpoint" : "body"),
            o = t(document),
            h = ".w-lightbox";

        function p(t) {
            var e, i, n = t.el.children(".w-json").html();
            if (n) {
                try {
                    n = JSON.parse(n)
                } catch (t) {
                    console.error("Malformed lightbox JSON configuration.", t)
                }! function (t) {
                    t.images && (t.images.forEach(function (t) {
                        t.type = "image"
                    }), t.items = t.images);
                    t.embed && (t.embed.type = "video", t.items = [t.embed]);
                    t.groupId && (t.group = t.groupId)
                }(n), n.items.forEach(function (e) {
                    e.$el = t.el
                }), (e = n.group) ? ((i = r[e]) || (i = r[e] = []), t.items = i, n.items.length && (t.index = i.length, i.push.apply(i, n.items))) : (t.items = n.items, t.index = 0)
            } else t.items = []
        }
        return n.ready = n.design = n.preview = function () {
            e = s && i.env("design"), a.destroy(), r = {}, o.find(h).webflowLightBox()
        }, jQuery.fn.extend({
            webflowLightBox: function () {
                t.each(this, function (r, i) {
                    var n = t.data(i, h);
                    n || (n = t.data(i, h, {
                        el: t(i),
                        mode: "images",
                        images: [],
                        embed: ""
                    })), n.el.off(h), p(n), e ? n.el.on("setting" + h, p.bind(null, n)) : n.el.on("click" + h, function (t) {
                        return function () {
                            t.items.length && a(t.items, t.index || 0)
                        }
                    }(n)).on("click" + h, function (t) {
                        t.preventDefault()
                    })
                })
            }
        }), n
    })
}]);