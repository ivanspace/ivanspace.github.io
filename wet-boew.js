/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.30-development - 2018-09-20
 *
 */
/*! Modernizr (Custom Build) | MIT & BSD */
window.Modernizr = function (a, b, c) {
        function d(a) {
            s.cssText = a
        }

        function e(a, b) {
            return typeof a === b
        }

        function f(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function g(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function h(a, b, d) {
            for (var f in a) {
                var g = b[a[f]];
                if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function i(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                f = (a + " " + x.join(d + " ") + d).split(" ");
            return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + y.join(d + " ") + d).split(" "), h(f, b, c))
        }

        function j() {
            n.input = function (c) {
                for (var d = 0, e = c.length; e > d; d++) C[c[d]] = c[d] in t;
                return C.list && (C.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), C
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), n.inputtypes = function (a) {
                for (var d, e, f, g = 0, h = a.length; h > g; g++) t.setAttribute("type", e = a[g]), d = "text" !== t.type, d && (t.value = u, t.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && t.style.WebkitAppearance !== c ? (p.appendChild(t), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(t, null).WebkitAppearance && 0 !== t.offsetHeight, p.removeChild(t)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? t.checkValidity && t.checkValidity() === !1 : t.value != u)), B[a[g]] = !!d;
                return B
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var k, l, m = "2.8.3",
            n = {},
            o = !0,
            p = b.documentElement,
            q = "modernizr",
            r = b.createElement(q),
            s = r.style,
            t = b.createElement("input"),
            u = ":)",
            v = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            w = "Webkit Moz O ms",
            x = w.split(" "),
            y = w.toLowerCase().split(" "),
            z = {
                "svg": "http://www.w3.org/2000/svg"
            },
            A = {},
            B = {},
            C = {},
            D = [],
            E = D.slice,
            F = function (a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : q + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', q, '">', a, "</style>"].join(""), j.id = q, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = p.style.overflow, p.style.overflow = "hidden", p.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), p.style.overflow = i), !!g
            },
            G = function (b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b) && c(b).matches || !1;
                var d;
                return F("@media " + b + " { #" + q + " { position: absolute; } }", function (b) {
                    d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
                }), d
            },
            H = {}.hasOwnProperty;
        l = e(H, "undefined") || e(H.call, "undefined") ? function (a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function (a, b) {
            return H.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function (a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = E.call(arguments, 1),
                d = function () {
                    if (this instanceof d) {
                        var e = function () {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(E.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(E.call(arguments)))
                };
            return d
        }), A.backgroundsize = function () {
            return i("backgroundSize")
        }, A.borderimage = function () {
            return i("borderImage")
        }, A.csstransitions = function () {
            return i("transition")
        }, A.fontface = function () {
            var a;
            return F('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }), a
        }, A.svg = function () {
            return !!b.createElementNS && !!b.createElementNS(z.svg, "svg").createSVGRect
        };
        for (var I in A) l(A, I) && (k = I.toLowerCase(), n[k] = A[I](), D.push((n[k] ? "" : "no-") + k));
        return n.input || j(), n.addTest = function (a, b) {
            if ("object" == typeof a)
                for (var d in a) l(a, d) && n.addTest(d, a[d]);
            else {
                if (a = a.toLowerCase(), n[a] !== c) return n;
                b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
            }
            return n
        }, d(""), r = t = null, n._version = m, n._prefixes = v, n._domPrefixes = y, n._cssomPrefixes = x, n.mq = G, n.testProp = function (a) {
            return g([a])
        }, n.testAllProps = i, n.testStyles = F, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + D.join(" ") : ""), n
    }(this, this.document),
    function (a, b, c) {
        function d(a) {
            return "[object Function]" == q.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = r.shift();
            s = 1, a ? a.t ? o(function () {
                ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : s = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && o(function () {
                        v.removeChild(l)
                    }, 50);
                    for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
                }
            }
            var j = j || m.errorTimeout,
                l = b.createElement(a),
                n = 0,
                q = 0,
                t = {
                    "t": d,
                    "s": c,
                    "e": f,
                    "a": i,
                    "x": j
                };
            1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
                k.call(this, q)
            }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
        }

        function j(a, b, c, d, f) {
            return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
        }

        function k() {
            var a = m;
            return a.loader = {
                "load": j,
                "i": 0
            }, a
        }
        var l, m, n = b.documentElement,
            o = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            q = {}.toString,
            r = [],
            s = 0,
            t = "MozAppearance" in n.style,
            u = t && !!b.createRange().compareNode,
            v = u ? n : p.parentNode,
            n = a.opera && "[object Opera]" == q.call(a.opera),
            n = !!b.attachEvent && !n,
            w = t ? "object" : n ? "script" : "img",
            x = n ? "script" : w,
            y = Array.isArray || function (a) {
                return "[object Array]" == q.call(a)
            },
            z = [],
            A = {},
            B = {
                "timeout": function (a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            };
        m = function (a) {
            function b(a) {
                var b, c, d, a = a.split("!"),
                    e = z.length,
                    f = a.pop(),
                    g = a.length,
                    f = {
                        "url": f,
                        "origUrl": f,
                        "prefixes": a
                    };
                for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
                for (c = 0; e > c; c++) f = z[c](f);
                return f
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (l = function () {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        }), g(a, l, b, 0, j);
                        else if (Object(a) === a)
                            for (i in h = function () {
                                    var b, c = 0;
                                    for (b in a) a.hasOwnProperty(b) && c++;
                                    return c
                                }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function () {
                                var a = [].slice.call(arguments);
                                m.apply(this, a), n()
                            } : l[i] = function (a) {
                                return function () {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), n()
                                }
                            }(m[i])), g(a[i], l, b, i, j))
                    } else !c && n()
                }
                var h, i, j = !!a.test,
                    k = a.load || a.both,
                    l = a.callback || f,
                    m = l,
                    n = a.complete || f;
                c(j ? a.yep : a.nope, !!k), k && c(k)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (y(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, m.addPrefix = function (a, b) {
            B[a] = b
        }, m.addFilter = function (a) {
            z.push(a)
        }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function () {
            b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
            var k, l, n = b.createElement("script"),
                e = e || m.errorTimeout;
            n.src = a;
            for (l in d) n.setAttribute(l, d[l]);
            c = j ? h : c || f, n.onreadystatechange = n.onload = function () {
                !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
            }, o(function () {
                k || (k = 1, c(1))
            }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
        }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (p.parentNode.insertBefore(e, p), o(c, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("details", function () {
        var a, b, c, d = document,
            e = d.createElement("details");
        return "open" in e ? (b = d.body || function () {
            var b = d.documentElement;
            return a = !0, b.insertBefore(d.createElement("body"), b.firstElementChild || b.firstChild)
        }(), e.innerHTML = "<summary>a</summary>b", e.style.display = "block", b.appendChild(e), c = e.offsetHeight, e.open = !0, c = c != e.offsetHeight, b.removeChild(e), a && b.parentNode.removeChild(b), c) : !1
    }), Modernizr.addTest("progressbar", function () {
        return void 0 !== document.createElement("progress").max
    }), Modernizr.addTest("meter", function () {
        return void 0 !== document.createElement("meter").max
    }), Modernizr.addTest("mathml", function () {
        var a = !1;
        if (document.createElementNS) {
            var b = "http://www.w3.org/1998/Math/MathML",
                c = document.createElement("div");
            c.style.position = "absolute";
            var d = c.appendChild(document.createElementNS(b, "math")).appendChild(document.createElementNS(b, "mfrac"));
            d.appendChild(document.createElementNS(b, "mi")).appendChild(document.createTextNode("xx")), d.appendChild(document.createElementNS(b, "mi")).appendChild(document.createTextNode("yy")), document.body.appendChild(c), a = c.offsetHeight > c.offsetWidth
        }
        return a
    }), Modernizr.addTest("cors", !!(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest)),
    function (a, b, c, d) {
        "use strict";
        var e = function (a) {
                var b = c.createElement("a");
                return b.href = a, {
                    "href": b.href,
                    "absolute": b.href,
                    "host": b.host,
                    "hostname": b.hostname,
                    "port": b.port,
                    "pathname": b.pathname.replace(/^([^\/])/, "/$1"),
                    "protocol": b.protocol,
                    "hash": b.hash,
                    "search": b.search,
                    "params": function () {
                        var a, c, d, e = {},
                            f = encodeURI(decodeURI(b.search.replace(/^\?/, ""))).replace(/'/g, "%27").split("&"),
                            g = f.length;
                        for (d = 0; d !== g; d += 1) null !== (a = f[d]) && (c = a.split("="), e[c[0]] = c[1]);
                        return e
                    }()
                }
            },
            f = 0,
            g = a("script[src*='wet-boew.js'],script[src*='wet-boew.min.js'],script[data-wb-core]").last(),
            h = c.documentElement.lang,
            i = function (b) {
                var c = {};
                return c.home = b.prop("src").split("?")[0].split("/").slice(0, -1).join("/"), c.asset = c.home + "/../assets", c.template = c.home + "/assets/templates", c.dep = c.home + "/deps", c.js = c.home, c.css = c.home.substring(0, c.home.length - 2) + "css", c.mode = b.prop("src").indexOf(".min") < 0 ? "" : ".min", b[0].hasAttribute("data-wb-core") && a.extend(c, {
                    "home": b.attr("data-home"),
                    "asset": b.attr("data-asset"),
                    "template": b.attr("data-template"),
                    "dep": b.attr("data-dep"),
                    "js": b.attr("data-js"),
                    "css": b.attr("data-css"),
                    "mode": b.attr("data-mode")
                }), c
            }(g),
            j = function () {
                for (var a, b = 3, d = c.createElement("div"), e = d.getElementsByTagName("i"); d.innerHTML = "<!--[if gt IE " + (b += 1) + "]><i></i><![endif]-->", e[0];);
                return b > 4 ? b : a
            }(),
            k = e(b.location.href),
            l = function () {
                var a, b = "false";
                try {
                    b = localStorage.getItem("wbdisable") || b
                } catch (c) {}
                return a = k.params.wbdisable || b, "string" == typeof a ? "true" === a.toLowerCase() : Boolean(a)
            }(),
            m = {
                "/": i.home,
                "/assets": i.asset,
                "/templates": i.template,
                "/deps": i.dep,
                "lang": h,
                "mode": i.mode,
                "doc": a(c),
                "win": a(b),
                "html": a("html"),
                "pageUrlParts": k,
                "getUrlParts": e,
                "isDisabled": l,
                "isStarted": !1,
                "isReady": !1,
                "ignoreHashChange": !1,
                "initQueue": 0,
                "getPath": function (a) {
                    return this.hasOwnProperty(a) ? this[a] : d
                },
                "getMode": function () {
                    return this.mode
                },
                "getId": function () {
                    return "wb-auto-" + (f += 1)
                },
                "init": function (a, b, e, f) {
                    var g = a.target,
                        h = !!g,
                        i = h ? g : a,
                        j = b + "-inited",
                        k = i === c;
                    return !h || k || a.currentTarget === i && -1 === i.className.indexOf(j) ? (this.initQueue += 1, this.remove(e), k || (i.className += " " + j, f || i.id || (i.id = m.getId())), i) : d
                },
                "ready": function (a, b, c) {
                    a ? (a.find(m.allSelectors).addClass("wb-init").filter(":not(#" + a.attr("id") + " .wb-init .wb-init)").trigger("timerpoke.wb"), a.trigger("wb-ready." + b, c), this.initQueue -= 1) : this.doc.trigger("wb-ready." + b, c), !this.isReady && this.isStarted && this.initQueue < 1 && (this.isReady = !0, this.doc.trigger("wb-ready.wb"))
                },
                "other": !j,
                "desktop": void 0 === b.orientation,
                "ie": !!j,
                "ie6": 6 === j,
                "ie7": 7 === j,
                "ie8": 8 === j,
                "ie9": 9 === j,
                "ielt7": 7 > j,
                "ielt8": 8 > j,
                "ielt9": 9 > j,
                "ielt10": 10 > j,
                "ie11": !!navigator.userAgent.match(/Trident\/7\./),
                "selectors": [],
                "resizeEvents": "xxsmallview.wb xsmallview.wb smallview.wb mediumview.wb largeview.wb xlargeview.wb",
                "drawColours": ["#8d201c", "#EE8310", "#2a7da6", "#5a306b", "#285228", "#154055", "#555555", "#f6d200", "#d73d38", "#418541", "#87aec9", "#23447e", "#999999"],
                "sessionGUID": function () {
                    var a = sessionStorage.getItem("wb-session-GUID");
                    return a || (a = m.guid(), sessionStorage.setItem("wb-session-GUID", a)), a
                },
                "add": function (a) {
                    var b, c = !1,
                        d = m.selectors.length;
                    if (m.isDisabled && "#wb-tphp" !== a) return 0;
                    for (b = 0; b !== d; b += 1)
                        if (m.selectors[b] === a) {
                            c = !0;
                            break
                        } c || m.selectors.push(a)
                },
                "remove": function (a) {
                    var b, c = this.selectors.length;
                    for (b = 0; b !== c; b += 1)
                        if (this.selectors[b] === a) {
                            this.selectors.splice(b, 1);
                            break
                        }
                },
                "timerpoke": function (b) {
                    var c, d, e, f, g = m.selectors.slice(0),
                        h = g.length;
                    if (b) {
                        for (e = a(), f = 0; f !== h; f += 1) c = g[f], d = a(c), 0 !== d.length ? e = e.add(d) : m.remove(c);
                        d = e.filter(":not(.wb-init .wb-init)").addClass("wb-init")
                    } else d = a(g.join(", "));
                    d.trigger("timerpoke.wb")
                },
                "start": function () {
                    m.allSelectors = m.selectors.join(", "), m.timerpoke(!0), this.isStarted = !0, this.ready(), setInterval(m.timerpoke, 500)
                },
                "i18nDict": {},
                "i18n": function (a, b, c) {
                    var d = m.i18nDict,
                        e = ("string" == typeof a && "" !== a) | ("string" == typeof b && "" !== b) << 1 | ("string" == typeof c && "" !== c) << 2;
                    switch (e) {
                        case 1:
                            return d[a];
                        case 3:
                            return d[a][b];
                        case 7:
                            return d[a][b].replace("[MIXIN]", c);
                        default:
                            return ""
                    }
                },
                "hashString": function (a) {
                    var b, c, d = 0;
                    if (0 === a.length) return d;
                    for (c = 0; c < a.length; c++) b = a.charCodeAt(c), d = (d << 5) - d + b, d &= d;
                    return d
                },
                "stripWhitespace": function (a) {
                    return a.replace(/\s+/g, "")
                },
                "whenLibReady": function (a, b) {
                    a() ? b() : setTimeout(function () {
                        m.whenLibReady(a, b)
                    }, 50)
                }
            };
        b.wb = m, yepnope.addPrefix("site", function (a) {
            return a.url = i.js + "/" + a.url, a
        }), yepnope.addPrefix("plyfll", function (a) {
            var b, c = a.url;
            return l && -1 === c.indexOf("svg") ? a.bypass = !0 : i.mode || (c = c.replace(".min", "")), -1 !== c.indexOf(".css") ? (a.forceCSS = !0, b = i.css) : b = i.js, a.url = b + "/polyfills/" + c, a
        }), yepnope.addPrefix("i18n", function (a) {
            return a.url = i.js + "/" + a.url + h + i.mode + ".js", a
        }), yepnope.addPrefix("mthjx", function (a) {
            return a.url = i.js + "/MathJax/" + a.url, a
        }), m.modernizrLoad = Modernizr.load, Modernizr.load = function (b) {
            var c, d, e, f, g;
            for (a.isArray(b) || (b = [b]), d = b.length, c = 0; c !== d; c += 1) e = b[c], f = e.testReady, g = e.complete, f && g && (e.complete = m.whenLibReady(f, g));
            m.modernizrLoad(b)
        }, Modernizr.load([{
            "test": Modernizr.details,
            "nope": ["plyfll!details.min.js", "plyfll!details.min.css"]
        }, {
            "test": Modernizr.input.list,
            "nope": ["plyfll!datalist.min.js", "plyfll!datalist.min.css"]
        }, {
            "test": Modernizr.inputtypes.date,
            "nope": ["plyfll!datepicker.min.js", "plyfll!datepicker.min.css"]
        }, {
            "test": Modernizr.inputtypes.range,
            "nope": ["plyfll!slider.min.js", "plyfll!slider_wrapper.min.js", "plyfll!slider.min.css"],
            "callback": function (a) {
                "slider.min.js" === a && b.fdSlider.onDomReady()
            }
        }, {
            "test": Modernizr.progressbar,
            "nope": ["plyfll!progress.min.js", "plyfll!progress.min.css"]
        }, {
            "test": Modernizr.mathml,
            "complete": function () {
                var a = "wb-math",
                    d = "math",
                    e = c.getElementsByTagName(d),
                    f = m.doc;
                e.length && c.body.removeChild(e[e.length - 1].parentNode), Modernizr.mathml || (f.one("timerpoke.wb wb-init." + a, d, function () {
                    m.init(c, a, d), Modernizr.load([{
                        "load": "timeout=500!https://cdn.jsdelivr.net/npm/mathjax@2.7.1/MathJax.js?config=Accessible",
                        "complete": function () {
                            Modernizr.load([{
                                "test": void 0 === b.MathJax,
                                "yep": "mthjx!MathJax.js?config=Accessible"
                            }]), m.ready(f, a)
                        }
                    }])
                }), m.add(d))
            }
        }, {
            "test": Modernizr.meter,
            "nope": ["plyfll!meter.min.js", "plyfll!meter.min.css"]
        }, {
            "test": Modernizr.touch,
            "yep": "plyfll!mobile.min.js"
        }, {
            "test": Modernizr.svg,
            "nope": "plyfll!svg.min.js"
        }, {
            "load": "i18n!i18n/",
            "testReady": function () {
                return m.i18nDict.tphp
            },
            "complete": function () {
                m.start()
            }
        }])
    }(jQuery, window, document),
    function (a, b) {
        b.getData = function (b, c) {
            var d, e = b.jquery ? b[0] : b,
                f = e.getAttribute("data-" + c);
            if (f) try {
                d = JSON.parse(f), a.data(e, c, d)
            } catch (g) {
                a.error("Bad JSON array in data-" + c + " attribute")
            }
            return d
        }
    }(jQuery, wb),
    function (a) {
        "use strict";
        a.jqEscape = function (a) {
            return a.replace(/([;&,\.\+\*\~':"\\\!\^\/#$%@\[\]\(\)=>\|])/g, "\\$1")
        }, a.formattedNumCompareRegEx = /(<[^>]*>|[^\d\.])/g, a.formattedNumCompare = function (b, c) {
            var d, e, f = a.formattedNumCompareRegEx,
                g = -1 === b.indexOf("-") ? 1 : -1,
                h = ("-" === b || "" === b ? "0" : b.replace(f, "")).split("."),
                i = -1 === c.indexOf("-") ? 1 : -1,
                j = ("-" === c || "" === c ? "0" : c.replace(f, "")).split("."),
                k = h.length;
            for (d = 0; d !== k && (e = parseInt(h[d], 10) * g - parseInt(j[d], 10) * i, 0 === e); d += 1);
            return e
        }, a.i18nTextCompare = function (b, c) {
            return a.normalizeDiacritics(b).localeCompare(a.normalizeDiacritics(c))
        }, a.normalizeDiacritics = function (a) {
            var b, c, d = {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Œ": "OE",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "ẞ": "SS",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "œ": "oe",
                    "ɶ": "oe",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ſ": "s",
                    "ẛ": "s",
                    "ß": "ss",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "０": "0",
                    "₀": "0",
                    "⓪": "0",
                    "⁰": "0",
                    "¹": "1",
                    "⑴": "1",
                    "₁": "1",
                    "❶": "1",
                    "⓵": "1",
                    "⒈": "1",
                    "①": "1",
                    "１": "1",
                    "²": "2",
                    "❷": "2",
                    "⑵": "2",
                    "２": "2",
                    "₂": "2",
                    "⓶": "2",
                    "②": "2",
                    "⒉": "2",
                    "³": "3",
                    "３": "3",
                    "⒊": "3",
                    "⑶": "3",
                    "₃": "3",
                    "❸": "3",
                    "⓷": "3",
                    "③": "3",
                    "⓸": "4",
                    "④": "4",
                    "⒋": "4",
                    "４": "4",
                    "⁴": "4",
                    "₄": "4",
                    "❹": "4",
                    "⑷": "4",
                    "⒌": "5",
                    "₅": "5",
                    "⓹": "5",
                    "⑸": "5",
                    "❺": "5",
                    "⑤": "5",
                    "５": "5",
                    "⁵": "5",
                    "⑹": "6",
                    "⁶": "6",
                    "６": "6",
                    "❻": "6",
                    "₆": "6",
                    "⑥": "6",
                    "⓺": "6",
                    "⒍": "6",
                    "７": "7",
                    "⁷": "7",
                    "❼": "7",
                    "⓻": "7",
                    "⒎": "7",
                    "₇": "7",
                    "⑺": "7",
                    "⑦": "7",
                    "⑧": "8",
                    "⒏": "8",
                    "⓼": "8",
                    "⑻": "8",
                    "⁸": "8",
                    "８": "8",
                    "❽": "8",
                    "₈": "8",
                    "⓽": "9",
                    "９": "9",
                    "⒐": "9",
                    "❾": "9",
                    "⑼": "9",
                    "₉": "9",
                    "⑨": "9",
                    "⁹": "9"
                },
                e = a.split(""),
                f = e.length,
                g = !1;
            for (b = 0; b !== f; b += 1) c = e[b], d.hasOwnProperty(c) && (e[b] = d[c], g = !0);
            return g ? e.join("") : a
        }, a.string = {
            "pad": function (a, b) {
                var c, d = a + "",
                    e = b - d.length;
                for (c = 0; c !== e; c += 1) d = "0" + d;
                return d
            }
        }, a.date = {
            "convert": function (a) {
                var b = a.constructor;
                switch (b) {
                    case Date:
                        return b;
                    case Array:
                        return new Date(a[0], a[1], a[2]);
                    case Number:
                    case String:
                        return new Date(a);
                    default:
                        return "object" == typeof a ? new Date(a.year, a.month, a.date) : NaN
                }
            },
            "compare": function (b, c) {
                var d = a.date.convert;
                return isFinite(b = d(b).valueOf()) && isFinite(c = d(c).valueOf()) ? (b > c) - (c > b) : NaN
            },
            "toDateISO": function (b, c) {
                var d = a.date.convert(b),
                    e = a.string.pad;
                return d.getFullYear() + "-" + e(d.getMonth() + 1, 2, "0") + "-" + e(d.getDate(), 2, "0") + (c ? " " + e(d.getHours(), 2, "0") + ":" + e(d.getMinutes(), 2, "0") : "")
            },
            "fromDateISO": function (a) {
                var b = null;
                return a && a.match(/\d{4}-\d{2}-\d{2}/) && (b = new Date(a.substr(0, 4), a.substr(5, 2) - 1, a.substr(8, 2), 0, 0, 0, 0)), b
            }
        }, a.guid = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
                var b = 16 * Math.random() | 0,
                    c = "x" === a ? b : 3 & b | 8;
                return c.toString(16)
            })
        }, a.escapeAttribute = function (a) {
            return a.replace(/'/g, "&#39;").replace(/"/g, "&#34;")
        }
    }(wb),
    function (a, b) {
        "use strict";
        var c, d = {
            "default": "wet-boew"
        };
        c = {
            "init": function (b) {
                return a.extend(d, b || {})
            },
            "show": function (c) {
                a(this).each(function () {
                    var d = a(this);
                    d.attr("aria-hidden", "false"), c === b && d.removeClass("wb-inv")
                })
            },
            "hide": function (c) {
                a(this).each(function () {
                    var d = a(this);
                    return d.attr("aria-hidden", "true"), c === b ? d.addClass("wb-inv") : void 0
                })
            },
            "toggle": function (b, c) {
                a(this).addClass(b).removeClass(c)
            }
        }, a.fn.wb = function (b) {
            c[b] ? c[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? a.error("Method " + b + " does not exist on jquery.wb") : c.init.apply(this, arguments)
        }
    }(jQuery),
    function (a) {
        "use strict";

        function b(b, d, e) {
            var f, g, h, i = b.nodeName.toLowerCase();
            return "area" === i ? (f = b.parentNode, g = f.name, b.href && g && "map" === f.nodeName.toLowerCase() ? (h = a("img[usemap=#" + g + "]")[0], !!h && c(h)) : !1) : e ? (/input|select|textarea|button|object/.test(i) ? !b.disabled : "a" === i ? b.href || d : d) && c(b) : /input|select|textarea|button|object/.test(i) ? !b.disabled : "a" === i ? b.href || d : d
        }

        function c(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
                return "hidden" === a.css(this, "visibility")
            }).length
        }
        a.extend(a.expr[":"], {
            "data": a.expr.createPseudo ? a.expr.createPseudo(function (b) {
                return function (c) {
                    return !!a.data(c, b)
                }
            }) : function (b, c, d) {
                return !!a.data(b, d[3])
            },
            "focusable": function (c) {
                return b(c, !isNaN(a.attr(c, "tabindex")), !0)
            },
            "discoverable": function (c) {
                return b(c, !isNaN(a.attr(c, "tabindex")))
            },
            "tabbable": function (c) {
                var d = a.attr(c, "tabindex"),
                    e = isNaN(d);
                return (e || d >= 0) && b(c, !e)
            }
        })
    }(jQuery),
    function (a, b) {
        "use strict";
        var c = b.doc;
        c.on("ajax-fetch.wb", function (c) {
            var d, e, f, g, h = c.element || c.target,
                i = c.fetch,
                j = i.url.split(" "),
                k = j[0],
                l = k.split("#"),
                m = l[1],
                n = j[1] || (m ? "#" + m : !1),
                o = i.nocache,
                p = i.nocachekey || b.cacheBustKey || "wbCacheBust";
            n && (i.url = j[0]), o && (f = "nocache" === o ? b.guid() : b.sessionGUID(), f = p + "=" + f, g = l[0], k = -1 !== g.indexOf("?") ? g + "&" + f + (m ? "#" + m : "") : g + "?" + f + (m ? "#" + m : ""), i.url = k), (h === c.target || c.currentTarget === c.target) && (h.id || (h.id = b.getId()), e = h.id, a.ajax(i).done(function (c, f, g) {
                var h = typeof c;
                n && (c = a("<div>" + c + "</div>").find(n)), d = {
                    "response": c,
                    "status": f,
                    "xhr": g
                }, d.pointer = a("<div id='" + b.getId() + "' data-type='" + h + "' />").append("string" === h ? c : ""), a("#" + e).trigger({
                    "type": "ajax-fetched.wb",
                    "fetch": d
                }, this)
            }).fail(function (b, c, d) {
                a("#" + e).trigger({
                    "type": "ajax-failed.wb",
                    "fetch": {
                        "xhr": b,
                        "status": c,
                        "error": d
                    }
                }, this)
            }, this))
        })
    }(jQuery, wb),
    function (a, b, c) {
        "use strict";
        var d, e, f = "wb-calevt",
            g = "." + f,
            h = "wb-init" + g,
            i = "ev-details",
            j = "focus",
            k = f,
            l = c.doc,
            m = function (b) {
                var h, i = c.init(b, f, g);
                i && (h = a(i), e || (d = c.i18n, e = {
                    "calendar": d("cal")
                }), a.when.apply(a, a.map(h.find("[data-calevt]"), n)).always(function () {
                    o(h), c.ready(h, f)
                }))
            },
            n = function (b) {
                var c, d, e = a(b),
                    f = e.data("calevt").split(/\s+/),
                    g = a.Deferred(),
                    h = f.length,
                    i = [];
                for (d = function (b) {
                        e.append(a.trim(b))
                    }, c = 0; h > c; c += 1) i.push(a.get(f[c], d, "html"));
                return a.when.apply(a, i).always(function () {
                    g.resolve()
                }), g.promise()
            },
            o = function (d) {
                var g, h, i, j, l, m, n, o, p, s = a.extend({}, b[f], d.data(k)),
                    t = new Date,
                    u = t.getTime();
                i = q(d), j = d.data("calevtSrc"), l = a("#" + j).addClass(f + "-cal"), g = s.year, h = s.month, m = i.minDate, n = i.maxDate, o = m.getTime(), p = n.getTime(), !g && u > o && p > u ? g = t.getFullYear() : !g && o > u ? g = m.getFullYear() : !g && u > p && (g = n.getFullYear()), !h && u > o && t.getTime() < p ? h = t.getMonth() : !h && o > u ? h = m.getMonth() : !h && u > p && (h = n.getMonth()), c.calendar.create(l, {
                    "year": g,
                    "month": h,
                    "minDate": m,
                    "maxDate": n,
                    "daysCallback": r,
                    "events": i.list,
                    "$events": d
                }), l.attr("aria-label", e.calendar)
            },
            p = function (a, b) {
                var d, e = c.date.convert(a),
                    f = c.date.convert(b),
                    g = 0,
                    h = 6e4,
                    i = 60 * h * 24;
                return e.setHours(0), e.setMinutes(0), e.setSeconds(0), f.setHours(0), f.setMinutes(0), f.setSeconds(0), g = f > e ? (f.getTimezoneOffset() - e.getTimezoneOffset()) * h : (e.getTimezoneOffset() - f.getTimezoneOffset()) * h, d = Math.abs(f.getTime() - e.getTime()) - g, Math.ceil(d / i)
            },
            q = function (b) {
                var d, e, f, g, h, i, j, k, l, m, n, o, q, r, s, t, u, v, w = !a(b).hasClass("evt-anchor"),
                    x = {
                        "minDate": null,
                        "maxDate": null,
                        "iCount": 0,
                        "list": [{
                            "a": 1
                        }]
                    },
                    y = b.find("ol > li, ul > li"),
                    z = y.length,
                    A = /datetime\s+\{date\:\s*(\d+-\d+-\d+)\}/;
                for (d = 0; d !== z; d += 1)
                    if (e = y.eq(d), f = e[0], g = e.find("*:header:first"), u = g.attr("class"), h = g.text(), i = e.find("a")[0], j = i.getAttribute("href"), k = i.getAttribute("target"), t = 1, w || (l = f.id || c.getId(), f.id = l, c.ie && (f.tabIndex = "-1"), j = "#" + l), m = new Date, m.setHours(0, 0, 0, 0), n = f.getElementsByTagName("time"), 0 !== n.length) {
                        for (o = n[0], q = "time" === o.nodeName.toLowerCase() ? o.getAttribute("datetime").substr(0, 10).split("-") : o.className.match(A)[1].substr(0, 10).split("-"), q[1] = q[1] - 1, m.setFullYear(q[0], q[1], q[2]), 1 !== n.length && (o = n[1], r = "time" === o.nodeName.toLowerCase() ? o.getAttribute("datetime").substr(0, 10).split("-") : o.className.match(A)[1].substr(0, 10).split("-"), r[1] = r[1] - 1, t += p(q, r)), s = 0; s !== t; s += 1) 0 !== s && (m = new Date(m.setDate(m.getDate() + 1))), (null === x.minDate || m < x.minDate) && (x.minDate = m), (null === x.maxDate || m > x.maxDate) && (x.maxDate = m), x.list[x.iCount] = {
                            "title": h,
                            "date": new Date(m.getTime()),
                            "href": j,
                            "target": k
                        }, v = "filter-" + m.getFullYear() + "-" + c.string.pad(m.getMonth() + 1, 2), u ? -1 === u.indexOf(v) && (u += " " + v) : u = v, x.iCount += 1;
                        g.attr("class", u)
                    } return x.list.sort(function (a, b) {
                    return a.date - b.date
                }), x
            },
            r = function (b, d, e) {
                var f, g, h, i, j, k, l, m, n = this.events;
                if (c.ie)
                    for (f = 0, g = e.length; f !== g; f += 1) e.eq(f).css("z-index", 31 - f);
                for (f = 0, g = n.length; f !== g; f += 1)
                    if (l = n[f], h = l.date, h.getFullYear() === b) {
                        if (m = h.getMonth(), m > d) break;
                        h.getMonth() === d && (i = h.getDate() - 1, j = a(e[i]), k = "A" !== j.parent().get(0).nodeName ? j.next() : j.parent().next(), 1 !== k.length && (k = a("<ul></ul>").insertAfter(j), i && "A" === e[i - 1].parentNode.nodeName ? j.wrap("<a href='javascript:;' class='cal-evt' tabindex='-1'></a>") : j.wrap("<a href='javascript:;' class='cal-evt'></a>")), k.append("<li><a tabindex='-1' class='cal-evt-lnk' href='" + l.href + "'>" + l.title + "</a></li>"))
                    }
            },
            s = function (a, b) {
                this.find("li.cal-disp-onshow").addClass("wb-inv").has(":header[class*=filter-" + a + "-" + c.string.pad(parseInt(b, 10) + 1, 2) + "]").removeClass("wb-inv")
            },
            t = function () {
                a(this).next().addClass(i)
            },
            u = function () {
                var b = a(this),
                    c = b.closest("td");
                setTimeout(function () {
                    0 === c.find("a:focus").length && c.find("ul").removeClass(i).find("a").attr("tabindex", "-1")
                }, 5)
            };
        l.on("timerpoke.wb " + h, g, m), l.on("wb-navigate.wb-clndr", ".wb-calevt-cal", function (a) {
            var b, c = a.target.lib;
            c && (b = c.$events, b && (s.call(b, a.year, a.month), b.trigger("wb-updated" + g)))
        }), l.on("focusin focusout keydown", ".wb-calevt-cal .cal-days td > a", function (b) {
            var c, d = b.type;
            switch (d) {
                case "focusin":
                    t.call(b.target);
                    break;
                case "focusout":
                    u.call(b.target);
                    break;
                case "keydown":
                    c = a(b.target), 13 !== b.which && 32 !== b.which || !c.hasClass("cal-evt") || a(b.target).next().find("a:first").trigger(j)
            }
        }), l.on("keydown", ".wb-calevt-cal .cal-days td > ul li", function (b) {
            var c, d, e = a(b.currentTarget);
            switch (b.which) {
                case 38:
                    c = e.prev().find("a"), 0 === c.length && (c = e.siblings(":last").find("a")), c.trigger(j);
                    break;
                case 40:
                    c = e.next().find("a"), 0 === c.length && (c = e.siblings(":first").find("a")), c.trigger(j);
                    break;
                case 27:
                    d = e.closest("td").children("a"), d.trigger(j)
            }
        }), c.add(g)
    }(jQuery, window, wb),
    function (a, b, c, d, e) {
        var f, g, h = d.doc,
            i = ".wb-clndr",
            j = "wb-navigate" + i,
            k = !1,
            l = new Date,
            m = l.getFullYear(),
            n = l.getMonth(),
            o = {
                "year": m,
                "month": n,
                "minDate": new Date(m, 0, 1),
                "maxDate": new Date(m, 11, 31)
            },
            p = function () {
                var b, c, e = d.i18n;
                f = {
                    "monthNames": e("mnths"),
                    "prevMonth": e("prvMnth"),
                    "nextMonth": e("nxtMnth"),
                    "goToYear": e("cal-goToYr"),
                    "goToMonth": e("cal-goToMnth"),
                    "dayNames": e("days"),
                    "currDay": e("currDay"),
                    "format": e("cal-format")
                }, b = f.dayNames, c = f.monthNames, g = a("<div class='wb-clndr' role='application'><div class='cal-nav'><button type='button' class='btn pull-left cal-month-prev'><span class='glyphicon glyphicon-arrow-left'></span><span class='wb-inv'>" + f.prevMonth + "<span></span></span></button><button type='button' class='btn pull-right cal-month-next'><span class='glyphicon glyphicon-arrow-right'></span><span class='wb-inv'>" + f.nextMonth + "<span></span></span></button><div class='form-group'><select title='" + f.goToYear + "' class='cal-year'></select>\n<select title='" + f.goToMonth + "' class='cal-month'>" + function () {
                    var a, b = "";
                    for (a = 0; 12 > a; a += 1) b += "<option value='" + a + "'>" + c[a] + "</option>";
                    return b
                }() + "</select></div></div><table><thead role='presentation'><tr>" + function () {
                    var a, c = "";
                    for (a = 0; 7 > a; a += 1) c += "<th role='columnheader'><abbr title='" + b[a] + "'>" + b[a].substr(0, 1) + "</abbr></th>";
                    return c
                }() + "</tr></thead><tbody class='cal-days'></tbody></table></div>"), k = !0
            },
            q = function (a, b) {
                var c, d, e = {
                    "reInit": r
                };
                return k || p(), c = g.clone(), d = c.get(0), e.$o = c, e.o = d, d.lib = e, c.appendTo(a), e.reInit(b), e
            },
            r = function (b) {
                var c, d, f, g, h = "",
                    i = this.$o;
                for (b = b || {}, b.year !== e && b.month !== e ? (g = {
                        "minDate": new Date(b.year, 0, 1),
                        "maxDate": new Date(b.year, 11, 31)
                    }, a.extend(this, g, b)) : a.extend(this, o), d = this.maxDate.getFullYear(), c = i.find(".cal-year").empty(), f = this.minDate.getFullYear(); d >= f; f += 1) h += "<option value='" + f + "'>" + f + "</option>";
                c.append(h), i.trigger({
                    "type": j,
                    "year": this.year,
                    "month": this.month
                })
            },
            s = function (b, c, d) {
                var e, g, h, i, j, k, l, m, n, o, p, q, r, s, u, v = a(b).find(".cal-days"),
                    w = 1,
                    x = f.currDay,
                    y = b.lib,
                    z = y.minDate,
                    A = y.maxDate,
                    B = y.daysCallback,
                    C = "";
                for (e = new Date(c, d, 1), g = e.getDay(), e.setMonth(d + 1, 0), h = e.getDate(), e = new Date, i = e.getFullYear(), j = e.getMonth(), k = e.getDate(), l = 1; 7 > l; l += 1) {
                    for (C += "<tr>", m = 0; 7 > m; m += 1) 1 === l && g > m || w > h ? C += "<td class='cal-empty'>&#160;</td>" : (o = w === k && d === j && c === i, n = "cal-index-" + w + (o ? " cal-curr-day " : ""), e.setFullYear(c, d, w), p = e.toLocalISOString().substr(0, 10), q = t(e) + (o ? "<span class='wb-inv'>" + x + "</span>" : ""), C += "<td class='" + n + "'><time datetime='" + p + "'>" + q + "</time></td>", w >= h && (r = !0), w += 1);
                    if (C += "</tr>", r) break
                }
                v.empty().append(C), B && (s = v.find("time"), u = {}, c === z.getFullYear() && d === z.getMonth() && (u.min = z.getDate() - 1), c === A.getFullYear() && d === A.getMonth() && (u.max = A.getDate() - 1), B.call(b.lib, c, d, s, u))
            },
            t = function (a) {
                var b = f.dayNames,
                    c = f.monthNames;
                return f.format.replace(/\{ddd\}|\{d\}|\{M\}|\{Y\}/g, function (d) {
                    switch (d) {
                        case "{ddd}":
                            return b[parseInt(a.getDay(), 10)];
                        case "{d}":
                            return parseInt(a.getDate(), 10);
                        case "{M}":
                            return c[parseInt(a.getMonth(), 10)];
                        case "{Y}":
                            return a.getFullYear()
                    }
                })
            };
        d.calendar = {
                "create": q
            }, h.on(j, i, function (b) {
                var c = b.currentTarget,
                    d = a(c),
                    f = b.year,
                    g = b.month,
                    h = c.lib,
                    i = h.maxDate.getFullYear(),
                    j = h.maxDate.getMonth(),
                    k = h.minDate.getFullYear(),
                    l = h.minDate.getMonth(),
                    m = d.find(".cal-month-prev"),
                    n = d.find(".cal-month-next"),
                    o = d.find(".cal-month"),
                    p = "disabled";
                f !== e && (h.year = f), g !== e && (h.month = g), d.find(".cal-year").val(f), o.val(g), o.children(":" + p).removeAttr(p), k > f || f === k && l >= g ? m.attr(p, p) : m.removeAttr(p), f > i || f === i && g >= j ? n.attr(p, p) : n.removeAttr(p), f === k && o.children(":lt(" + l + ")").attr(p, p), f === i && o.children(":gt(" + j + ")").attr(p, p), s(b.currentTarget, b.year, b.month)
            }), h.on("change", i, function (b) {
                var c, d, e = b.target,
                    f = b.currentTarget;
                switch (e.className) {
                    case "cal-year":
                        c = parseInt(e.value, 10), d = f.lib.month;
                        break;
                    case "cal-month":
                        c = f.lib.year, d = parseInt(e.value, 10)
                }
                a(f).trigger({
                    "type": j,
                    "year": c,
                    "month": d
                })
            }), h.on("click vclick touchstart", ".cal-month-prev, .cal-month-next", function (b) {
                var c = a(b.currentTarget).closest(i),
                    e = c.get(0),
                    f = b.currentTarget.className,
                    g = -1 !== f.indexOf("cal-month-prev") ? -1 : 1,
                    h = new Date(e.lib.year, e.lib.month + g, 1);
                c.trigger({
                    "type": j,
                    "year": h.getFullYear(),
                    "month": h.getMonth()
                }), d.ie11 && c.trigger("focusin")
            }), h.on("keydown", i, function (b) {
                var c, d, e, f, g, h = b.currentTarget,
                    i = a(b.currentTarget).find(".cal-days"),
                    k = b.target,
                    l = b.which,
                    m = h.lib,
                    n = new Date(m.year, m.month, 1),
                    o = m.minDate,
                    p = m.maxDate,
                    q = new Date(n),
                    r = !0;
                if (!b.altKey && !b.metaKey && l > 32 && 41 > l) {
                    switch (c = k.parentNode.className.match(/cal-index-(\d{1,2})/), d = null !== c, l) {
                        case 33:
                            n.setDate(o.getDate());
                        case 34:
                            f = 33 === l ? -1 : 1, b.ctrlKey || b.shiftKey || b.altKey ? n.setYear(n.getFullYear() + f) : n.setMonth(n.getMonth() + f)
                    }
                    if (d) switch (g = parseInt(c[1], 10), n.setMonth(n.getMonth() + 1, 0), e = n.getDate(), n.setDate(g > e ? e : g), l) {
                        case 35:
                            n.setDate(e);
                            break;
                        case 36:
                            n.setDate(1);
                            break;
                        case 37:
                            n.setDate(g - 1);
                            break;
                        case 38:
                            n.setDate(g - 7);
                            break;
                        case 39:
                            n.setDate(g + 1);
                            break;
                        case 40:
                            n.setDate(g + 7)
                    }
                    return (o > n || n > p) && (35 === l ? n.setDate(p.getDate()) : 36 === l ? n = o : r = !1), !r || n.getMonth() === q.getMonth() && n.getFullYear() === q.getFullYear() || a(h).trigger({
                        "type": j,
                        "year": n.getFullYear(),
                        "month": n.getMonth()
                    }), d && i.find(".cal-index-" + n.getDate() + " a:first").focus(), b.preventDefault(), !1
                }
            }),
            function () {
                function a(a) {
                    return 10 > a ? "0" + a : a
                }
                Date.prototype.toLocalISOString = function () {
                    var b = this.getTimezoneOffset();
                    return 0 === b ? this.toISOString() : this.getFullYear() + "-" + a(this.getMonth() + 1) + "-" + a(this.getDate()) + "T" + a(this.getHours()) + ":" + a(this.getMinutes()) + ":" + a(this.getSeconds()) + "." + (this.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + (0 > b ? "+" : "-") + a(Math.floor(Math.abs(b / 60))) + ":" + a(b % 60)
                }, Date.prototype.toISOString || (Date.prototype.toISOString = function () {
                    return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
                })
            }()
    }(jQuery, window, document, wb),
    function (a, b, c, d) {
        "use strict";
        var e, f, g = "wb-charts",
            h = "." + g,
            i = "wb-init" + h,
            j = "passiveparse.wb-tableparser",
            k = "parsecomplete.wb-tableparser",
            l = d.doc,
            m = function (c) {
                function e(a, b, c) {
                    var d, e;
                    if (d = c[a], !d) return b;
                    for (e in d) d.hasOwnProperty(e) && (b[a][e] = d[e]);
                    return b
                }

                function i(b, c, e) {
                    var f, g, h, i, j, k, l, m, n, o, p, q, r = a.extend(!0, {}, b.defaults || b),
                        s = a.extend(!0, {}, b.defaults && b.defaults.fn || {}),
                        t = c.attr("class") || "";
                    if (t.length)
                        for (k = b.prefix || "", l = k.length, f = t.split(" "), g = 0, h = f.length; g !== h; g += 1) i = f[g], j = i.length, l >= j || i.slice(0, l) !== k || (i = i.slice(l, j), m = b[i], m && (m.base && (r = a.extend(!0, r, b[m.base]), s = a.extend(!0, s, b[m.base].fn || {})), r = a.extend(!0, r, m), s = a.extend(!0, s, m.fn || {})));
                    r = a.extend(!0, r, d.getData(c, e));
                    for (n in s)
                        if (s.hasOwnProperty(n)) {
                            for (o = n.split("/"), q = r, g = 0, h = o.length - 1; g !== h; g += 1) p = o.shift(), "" !== p && (q[p] || (q[p] = {}), q = q[p]);
                            p = o.shift(), q[p] = s[n]
                        } return r
                }

                function j(a, b) {
                    var c, d, e, f, g, h = 1;
                    if (a) {
                        for (f = a.col[b], g = a.col[0], d = 0, e = f.cell.length; d !== e; d += 1)
                            if (c = f.cell[d], 0 === d || d > 0 && g.cell[d - 1].uid !== c.uid) {
                                if (c.rowgroup && 3 === c.rowgroup.type) break;
                                (1 === c.type || 7 === c.type) && 0 !== c.child.length && (h *= l(c, 1))
                            } return h
                    }
                }

                function k(b, c, d) {
                    var e, f, g, h = 1,
                        i = b[c].elem.cells;
                    for (f = 0, g = i.length; f !== g && (e = a(i[f]).data().tblparser, !e.colgroup || 3 !== e.colgroup.type); f += 1) e.colpos >= d && (1 === e.type || 7 === e.type) && 0 !== e.child.length && (h = h * e.child.length * l(e, 1));
                    return h
                }

                function l(a, b) {
                    var c, d, e, f = a.child.length,
                        g = 1;
                    if (0 === f) return g;
                    for (d = f * b, g *= d, c = 0; c !== f; c += 1) e = a.child[c], 0 !== e.child.length && (g *= l(e, d));
                    return g
                }

                function m(a, b, c, d, e) {
                    var f, g, h, i = 0;
                    for (f = 0, g = a.cell.length; f !== g; f += 1)
                        if (h = a.cell[f], !(0 !== f && h.uid === a.cell[f - 1].uid || e && h.colpos < e)) {
                            if (N) {
                                if (h.rowgroup && 3 === h.rowgroup.type) break
                            } else if (h.colgroup && 3 === h.colgroup.type) break;
                            h.child > 0 && d > b ? h.flotDelta = c * h.child.length : h.flotDelta = c, (1 === h.type || 7 === h.type) && ((!v || h.flotDelta < v) && (v = h.flotDelta), h.flotValue = i, i += c, h.child.length > 0 && n(h, b, c, d))
                        }
                }

                function n(a, b, c, d) {
                    var e, f, g, h, i = 0;
                    for (b += 1, i = a.flotValue, e = c / a.child.length, (!v || v > e) && (v = e), f = 0, g = a.child.length; f !== g; f += 1) h = a.child[f], d > b ? h.flotDelta = e * h.child.length : h.flotDelta = e, h.flotValue = i, h.child.length > 0 && n(h, b, e, d), i += e
                }

                function o(a, b) {
                    var c, d, e, f, g, h, i, j, k;
                    for (c = b - 1; - 1 !== c; c -= 1)
                        for (k = a[c], d = 0, f = k.cell.length; d !== f; d += 1)
                            if (i = k.cell[d], !(i.flotDelta || d > 0 && i.uid === k.cell[d - 1].uid || 1 !== i.type && 7 !== i.type)) {
                                for (h = 0, e = 0, g = i.child.length; e !== g; e += 1) j = i.child[e], h = j.flotDelta, i.flotValue || (i.flotValue = j.flotValue);
                                i.flotDelta = h
                            }
                }

                function p(b, c) {
                    var d, e, f, g = [];
                    for (d = 0, e = b.cell.length; d !== e; d += 1) f = b.cell[d], 0 !== d && f.uid === b.cell[d - 1].uid || 1 !== f.type && 7 !== f.type || c && f.colpos < c || g.push([f.flotValue, a(f.elem).text()]);
                    return g
                }

                function q(a) {
                    var b = V.labelposition;
                    return (!b || b && b > a.length ? J.theadRowStack.length : b) - 1
                }

                function r(a) {
                    var b, c, d, e = 0;
                    return d = !N || N && V.referencevalue === !1 ? a.colgrouphead.col.length : V.referencevalue, d -= 1, c = j(a.colgrouphead, d), b = N ? q(a.colgrouphead.col) : a.colgrouphead.col.length - 1, e = d, m(a.colgrouphead.col[d], e, c, d), o(a.colgrouphead.col, d), p(a.colgrouphead.col[b])
                }

                function s(a) {
                    var b, c, d, e, f, g = -1,
                        h = 0,
                        i = a.theadRowStack;
                    if (i) {
                        for (b = 0, c = a.colgroup.length; b !== c; b += 1)
                            if (2 === a.colgroup[b].type) {
                                g = a.colgroup[b].start;
                                break
                            } return f = !N && V.referencevalue === !1 || N ? i.length : V.referencevalue, f -= 1, e = k(i, f, g), d = N ? i.length - 1 : q(i), h = f, m(i[f], h, e, f, g), o(i, f), p(i[d], g)
                    }
                }

                function t() {
                    var b;
                    aa.length && (b = a("<summary>" + aa + f.tableMention + "</summary>"), c.wrap("<details/>").before(b), b.trigger("wb-init.wb-details"))
                }

                function u(b) {
                    return c.wrap("<figure class='" + V.graphclass + "'/>").before((aa.length ? "<figcaption>" + aa + "</figcaption>" : "") + "<div role='img' aria-label='" + ba + f.tableFollowing + "'" + (b ? "style='height:" + V.height + "px; width:" + V.width + "px'" : "") + "></div>"), a("div:eq(0)", c.parent())
                }
                var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [],
                    Y = [],
                    Z = [],
                    $ = 0,
                    _ = a("caption", c),
                    aa = _.html() || "",
                    ba = _.text() || "",
                    ca = 0,
                    da = /[^\+\-\.\, 0-9]+[^\-\+0-9]*/,
                    ea = {
                        "flot": {
                            "prefix": "wb-charts-",
                            "defaults": {
                                "colors": d.drawColours,
                                "canvas": !0,
                                "xaxis": {
                                    "ticks": {}
                                }
                            },
                            "line": {},
                            "area": {
                                "lines": {
                                    "show": !0,
                                    "fill": !0
                                }
                            },
                            "bar": {
                                "bars": {
                                    "show": !0,
                                    "barWidth": 1,
                                    "align": "center"
                                }
                            },
                            "pie": {
                                "series": {
                                    "pie": {
                                        "show": !0
                                    }
                                },
                                "fn": {
                                    "/series/pie/label/formatter": function (a, b) {
                                        var c;
                                        return V.decimal ? (c = Math.round(b.percent * Math.pow(10, V.decimal)), c /= Math.pow(10, V.decimal)) : c = Math.round(b.percent), V.nolegend && (c = a + "<br />" + c), c + "%"
                                    }
                                }
                            },
                            "donut": {
                                "base": "pie",
                                "series": {
                                    "pie": {
                                        "radius": 1,
                                        "label": {
                                            "show": !0,
                                            "radius": 1,
                                            "threshold": .08
                                        },
                                        "tilt": .5,
                                        "innerRadius": .45,
                                        "startAngle": 1
                                    }
                                },
                                "grid": {
                                    "hoverable": !0
                                }
                            },
                            "slicelegend": {
                                "base": "pie",
                                "series": {
                                    "pie": {
                                        "radius": 1,
                                        "label": {
                                            "radius": 1,
                                            "show": !0,
                                            "threshold": .05
                                        },
                                        "combine": {
                                            "threshold": .05,
                                            "color": "#555",
                                            "label": f.slicelegend
                                        }
                                    }
                                },
                                "fn": {
                                    "/series/pie/label/formatter": function (a) {
                                        return a
                                    }
                                }
                            }
                        },
                        "series": {
                            "prefix": "wb-charts-",
                            "defaults": {},
                            "line": {},
                            "area": {
                                "lines": {
                                    "show": !0,
                                    "fill": !0
                                }
                            },
                            "bar": {
                                "bars": {
                                    "show": !0,
                                    "barWidth": 1,
                                    "align": "center"
                                }
                            },
                            "stacked": {
                                "base": "bar"
                            }
                        },
                        "charts": {
                            "prefix": "wb-charts-",
                            "defaults": {
                                "graphclass": "wb-graph",
                                "noencapsulation": !1,
                                "labelposition": !1,
                                "referencevalue": !1,
                                "legendinline": !1,
                                "nolegend": !1,
                                "decimal": 0,
                                "width": c.width(),
                                "height": c.height(),
                                "reversettblparsing": !1,
                                "fn": {
                                    "/getcellvalue": function (b) {
                                        var c = a.trim(b.dataset.wbChartsValue || a(b).text());
                                        return [parseFloat(c.replace(/(\d{1,3}(?:(?: |,)\d{3})*)(?:(?:.|,)(\d{1,2}))?$/, function (a, b, c) {
                                            return b.replace(/ |,/g, "") + "." + c || "0"
                                        }), 10), c.match(da)]
                                    }
                                }
                            },
                            "donut": {
                                "decimal": 1
                            }
                        }
                    };
                if (b.chartsGraphOpts || (W = b[g], W && (e("flot", ea, W), e("series", ea, W), e("charts", ea, W)), b.chartsGraphOpts = ea), ea = b.chartsGraphOpts, U = i(ea.flot, c, "flot"), V = i(ea.charts, c, g), V.width = V.width && V.width > 250 ? V.width : 250, V.height = V.height && V.height > 250 ? V.height : 250, J = c.data().tblparser, N = V.reversettblparsing, M = J.lstrowgroup[0], U.series && U.series.pie) {
                    for (y = u(!1), z = "<div style='height:" + V.height + "px; width:" + V.width + "px'></div>", N ? (D = M, K = (1 === J.colgroup[0].type ? J.colgroup[1].col.length : J.colgroup[0].col.length) - 1) : (D = 1 === J.colgroup[0].type ? J.colgroup[1] : J.colgroup[0], K = M.row.length - 1), K; K >= 0; K -= 1) {
                        for (O = N ? D.row : D.col, F = 0, G = O.length; F !== G; F += 1) {
                            for (Z = [], ca = 0, P = O[F], H = 0, I = P.cell.length; H !== I; H += 1)
                                if (Q = P.cell[H], !N || 1 !== Q.col.type) {
                                    if (R = void 0, 0 !== H && (R = P.cell[H - 1]), !N && (2 !== Q.row.type || R && R.rowgroup.uid !== Q.rowgroup.uid) || N && 2 !== Q.col.type || R && 1 !== R.col.type && R.col.groupstruct.uid !== Q.col.groupstruct.uid) break;
                                    E = N ? Q.col.header : Q.row.header, B = V.getcellvalue(N ? P.datacell[K].elem : P.cell[K].elem), Z.push([ca, "object" == typeof B ? B[0] : B]), ca += E[E.length - 1].flotDelta;
                                    break
                                } T = {}, Q = N ? P.datacell[K] : P.cell[K], E = N ? Q.row.header : Q.col.header, E = E[E.length - 1], T = i(ea.series, a(E.elem), "flot"), T.data = Z, T.label = N ? a(P.header[P.header.length - 1].elem).text() : a(P.dataheader[P.dataheader.length - 1].elem).text(), X.push(T)
                        }
                        1 !== M.row.length || M.row[0].header[0].elem.innerHTML !== aa && 0 !== M.row[0].header.length ? (E = M.row[K].header, A = "<figure><figcaption>" + E[E.length - 1].elem.innerHTML + "</figcaption>" + z + "</figure>", y.append(a(A)), x = a("div:last()", y)) : (x = y, x.css({
                            "height": V.height,
                            "width": V.width
                        })), a.plot(x, X, U), V.legendinline || a(".legend", x).appendTo(y), X = []
                    }
                    return V.nolegend && a(".legend", y).remove(), V.legendinline || (a(".legend > div", y).remove(), a(".legend > table", y).removeAttr("style").addClass("font-small"), a(".legend", x).appendTo(w)), a(".pieLabel").removeAttr("id"), void(V.noencapsulation || t())
                }
                for (N ? (D = 1 === J.colgroup[0].type ? J.colgroup[1] : J.colgroup[0], K = M.row.length - 1, Y = r(J)) : (D = M, K = (1 === J.colgroup[0].type ? J.colgroup[1].col.length : J.colgroup[0].col.length) - 1, Y = s(J)), U.xaxis.ticks = Y, O = N ? D.col : D.row, F = 0, G = O.length; F !== G; F += 1) P = O[F], S = P.header[P.header.length - 1], L = i(ea.series, a(S.elem), "flot"), (L.bars || U.bars && !L.lines) && ($ += 1, L.bars || (L.bars = {
                    "show": !0,
                    "barWidth": .9
                }), L.bars.order || (L.bars.order = $)), S.chartOption = L;
                for (F = 0, G = O.length; F !== G; F += 1) {
                    for (Z = [], C = 0, ca = 0, S = O[F], L = S.header[S.header.length - 1].chartOption, H = 0, I = S.cell.length; H !== I && (Q = S.cell[H], !(C > 1 && 2 !== Q.col.groupstruct.type)); H += 1)(!N && 2 === Q.col.groupstruct.type || N && 2 === Q.row.rowgroup.type) && (E = N ? Q.row.header : Q.col.header, B = V.getcellvalue(Q.elem), Z.push([ca, "object" == typeof B ? B[0] : B]), ca += E[E.length - 1].flotDelta, C += 1);
                    L.data = Z, L.label = a(S.header[S.header.length - 1].elem).text(), L.bars && (L.bars.barWidth = L.bars.barWidth * (1 / $)), X.push(L)
                }
                U.bars && (U.bars.barWidth = U.bars.barWidth * (1 / $)), x = u(!0), x.css("width", "100%"), a.plot(x, X, U), V.legendinline || (a(".legend > div", x).remove(), a(".legend > table", x).removeAttr("style").addClass("font-small"), x.css("height", "auto")), V.nolegend && a(".legend", x).remove(), V.noencapsulation || t(), a("canvas:eq(1)", x).css("position", "static"), a("canvas:eq(0)", x).css("width", "100%"), c.trigger("wb-updated" + h)
            },
            n = function (c) {
                var i, k, l, m = d.init(c, g, h),
                    n = b[g];
                m && (i = m.id, k = d.getMode() + ".js", l = ["site!deps/jquery.flot" + k, "site!deps/jquery.flot.pie" + k, "site!deps/jquery.flot.canvas" + k, "site!deps/jquery.flot.orderBars" + k, "site!deps/tableparser" + k], n && n.plugins && (l = l.concat(n.plugins)), f || (e = d.i18n, f = {
                    "tableMention": e("hyphen") + e("tbl-txt"),
                    "tableFollowing": e("hyphen") + e("tbl-dtls"),
                    "slicelegend": e("chrt-cmbslc")
                }), Modernizr.load({
                    "load": l,
                    "complete": function () {
                        var b = a("#" + i);
                        b.trigger(j), d.ready(b, g)
                    }
                }))
            };
        l.on("timerpoke.wb " + i + " " + k, h, function (b) {
            var c = b.type,
                d = b.target;
            switch (c) {
                case "timerpoke":
                case "wb-init":
                    n(b);
                    break;
                case "parsecomplete":
                    b.currentTarget === d && m(a(d))
            }
            return !0
        }), d.add(h)
    }(jQuery, window, document, wb),
    function (a, b, c) {
        "use strict";
        var d, e = "wb-collapsible",
            f = "details.alert",
            g = "wb-init." + e,
            h = c.doc,
            i = function (b) {
                var g, h = c.init(b, e, f);
                if (h) {
                    g = a(h), d = "alert-collapsible-state-" + h.getAttribute("id");
                    try {
                        localStorage.getItem(d) ? "open" === localStorage.getItem(d) ? (h.setAttribute("open", "open"), h.className += " open") : "closed" === localStorage.getItem(d) && (h.removeAttribute("open"), h.className = h.className.replace(" open", "")) : h.hasAttribute("open") ? localStorage.setItem(d, "open") : localStorage.setItem(d, "closed")
                    } catch (i) {}
                    c.ready(g, e)
                }
            };
        h.on("timerpoke.wb " + g, f, i), Modernizr.details && h.on("click keydown toggle." + e, f + " summary", function (b) {
            var c, f, g = b.which,
                h = b.currentTarget;
            if (g && 1 !== g || -1 !== h.className.indexOf("wb-toggle") && ("toggle" !== b.type || b.namespace !== e))(13 === g || 32 === g) && (b.preventDefault(), a(h).trigger("click"));
            else if (f = h.parentNode, c = null === f.getAttribute("open"), d = "alert-collapsible-state-" + f.getAttribute("id"), c) try {
                localStorage.setItem(d, "open")
            } catch (i) {} else try {
                localStorage.setItem(d, "closed")
            } catch (i) {}
            return !0
        }), c.add(f)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-ctrycnt",
            e = "[data-ctrycnt]",
            f = "wb-init." + d,
            g = c.doc,
            h = function (b) {
                var f, g, h = c.init(b, d, e);
                h && (f = a(h), g = f.data("ctrycnt"), a.when(i()).then(function (a) {
                    "" !== a && (g = g.replace("{country}", a.toLowerCase()), f.load(g, function () {
                        c.ready(f, d)
                    }))
                }))
            },
            i = function () {
                var b = a.Deferred(),
                    c = localStorage.getItem("countryCode");
                return null === c ? a.ajax({
                    "url": "https://freegeoip.net/json/",
                    "dataType": "jsonp",
                    "cache": !0,
                    "jsonp": "callback",
                    "success": function (a) {
                        if (a) {
                            c = a.country_code;
                            try {
                                localStorage.setItem("countryCode", c)
                            } catch (d) {}
                        }
                        b.resolve(c)
                    },
                    "error": function () {
                        b.reject("")
                    }
                }) : b.resolve(c), b.promise()
            };
        g.on("timerpoke.wb " + f, e, h), c.add(e)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d, e = "wb-data-ajax",
            f = "wb-ajax",
            g = ["[data-ajax-after]", "[data-ajax-append]", "[data-ajax-before]", "[data-ajax-prepend]", "[data-ajax-replace]", "[data-" + f + "]"],
            h = ["before", "replace", "after", "append", "prepend"],
            i = g.length,
            j = g.join(","),
            k = "wb-init." + e,
            l = "wb-update." + e,
            m = "wb-contentupdated",
            n = c.doc,
            o = function (b) {
                var d = q(b.target),
                    f = d.type,
                    g = c.init(b, e + "-" + f, j);
                g && d.url && (p.call(this, b, d), c.ready(a(g), e, [f]))
            },
            p = function (d, f) {
                var g, h, i, j = d.target,
                    k = a(j),
                    l = b[e];
                f || (f = q(j)), g = f.url, h = {
                    "url": g,
                    "nocache": f.nocache,
                    "nocachekey": f.nocachekey
                }, !l || "http" !== g.substr(0, 4) && "//" !== g.substr(0, 2) || (i = c.getUrlParts(g), c.pageUrlParts.protocol === i.protocol && c.pageUrlParts.host === i.host || Modernizr.cors && !l.forceCorsFallback || "function" == typeof l.corsFallback && (h.dataType = "jsonp", h.jsonp = "callback", h = l.corsFallback(h))), k.trigger({
                    "type": "ajax-fetch.wb",
                    "fetch": h
                })
            },
            q = function (b) {
                var d, e, g, i, j, k, l = h.length;
                for (e = 0; e !== l && (d = h[e], !(g = b.getAttribute("data-ajax-" + d))); e += 1);
                if (!g) {
                    if (i = c.getData(a(b), f), !i) return {};
                    if (g = r(i.url, i.httpref), !g) return {};
                    if (d = i.type, -1 === h.indexOf(d)) throw "Invalid ajax type";
                    j = i.nocache, k = i.nocachekey
                }
                return {
                    "url": g,
                    "type": d,
                    "nocache": j,
                    "nocachekey": k
                }
            },
            r = function (c, d) {
                var e, f, g, h, i;
                if (!d) return c;
                for (a.isArray(d) ? e = d : (e = [], e.push(d)), f = b.document.referrer, i = e.length, h = 0; h !== i; h += 1)
                    if (g = new RegExp(e[h]), g.test(f)) return a.isArray(c) && c.length === i ? c[h] : c;
                return ""
            },
            s = function (b, c) {
                var d, e, f = a(b),
                    g = q(b),
                    h = g.type;
                d = c.response, d && d.length > 0 && (e = jQuery.ajaxSettings.cache, jQuery.ajaxSettings.cache = !0, "replace" === h ? f.html(d) : f[h](d), jQuery.ajaxSettings.cache = e, f.trigger(m, {
                    "ajax-type": h,
                    "content": d
                }))
            };
        for (n.on("timerpoke.wb " + k + " " + l + " ajax-fetched.wb", j, function (a) {
                var b = a.target;
                switch (a.type) {
                    case "timerpoke":
                    case "wb-init":
                        o(a);
                        break;
                    case "wb-update":
                        p(a);
                        break;
                    default:
                        a.currentTarget === b && s(b, a.fetch)
                }
                return !0
            }), d = 0; d !== i; d += 1) c.add(g[d])
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-inview",
            e = "." + d,
            f = "wb-init" + e,
            g = "scroll" + e,
            h = c.doc,
            i = c.win,
            j = a(),
            k = function (b) {
                var f, g = c.init(b, d, e);
                g && (f = a(g), j = j.add(f), setTimeout(function () {
                    l(f), c.ready(f, d)
                }, 1))
            },
            l = function (b) {
                var c, d = b.outerWidth(),
                    f = b.outerHeight(),
                    g = i.scrollTop(),
                    h = g + i.height(),
                    k = i.scrollLeft() + d,
                    l = b.offset().left,
                    m = l + d,
                    n = b.offset().top,
                    o = n + f,
                    p = b.attr("data-inviewstate"),
                    q = n > h || g > o || l > k || k > m,
                    r = h > o && n > g ? "all" : q ? "none" : "partial",
                    s = a("#" + b.attr("data-inview"));
                return 0 === d || 0 === f ? (j = j.not(b), s.addClass("user-closed"), void s.trigger({
                    "type": "close",
                    "namespace": "wb-overlay",
                    "noFocus": !0
                })) : (b.hasClass("wb-dismissable") && s.hasClass("wb-overlay") && s.children(".overlay-close").on("click vclick", function (a) {
                    var c = a.which;
                    c && 1 !== c || b.parent().siblings(".content-dismiss").trigger("click")
                }), void(r !== p && (c = q || (b.hasClass("show-none") ? !1 : "partial" === r), b.attr("data-inviewstate", r), 0 !== s.length && (s.hasClass("user-closed") || (s.hasClass("wb-overlay") ? (p || s.addClass("outside-off"), s.trigger({
                    "type": c ? "open" : "close",
                    "namespace": "wb-overlay",
                    "noFocus": !0
                })) : s.attr("aria-hidden", !c).toggleClass("in", !c).toggleClass("out", c))), b.trigger(r + e))))
            };
        h.on("timerpoke.wb " + f + " " + g, e, function (b) {
            var c = b.target,
                d = b.type;
            switch (d) {
                case "timerpoke":
                case "wb-init":
                    k(b);
                    break;
                case "scroll":
                    b.currentTarget === c && l(a(c))
            }
            return !0
        }), i.on("scroll scrollstop", function () {
            j.trigger(g)
        }), h.on("txt-rsz.wb win-rsz-width.wb win-rsz-height.wb", function () {
            j.trigger(g)
        }), h.on("refresh.wb", function () {
            j.each(function () {
                l(a(this))
            })
        }), c.add(e)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d, e = "wb-pic",
            f = "[data-pic]",
            g = "wb-init." + e,
            h = "picfill." + e,
            i = c.doc,
            j = function (b) {
                var g, i = c.init(b, e, f);
                i && (g = a(i), d = g.data("class") || "", g.trigger(h), c.ready(g, e))
            },
            k = function (b) {
                var f, g, h, j, k = [],
                    l = b.getElementsByTagName("img")[0],
                    m = b.getElementsByTagName("span");
                for (f = 0, g = m.length; f !== g; f += 1) j = m[f].getAttribute("data-media"), (!j || Modernizr.mq(j)) && k.push(m[f]);
                0 !== k.length ? (h = k.pop(), l || (l = i[0].createElement("img"), l.alt = b.getAttribute("data-alt"), l.className = d), l.src = h.getAttribute("data-src"), h.appendChild(l), c.ielt9 && (l.removeAttribute("width"), l.removeAttribute("height"))) : l && l.parentNode.removeChild(l), a(b).trigger("wb-updated." + e)
            };
        i.on("timerpoke.wb " + g + " " + h, f, function (a) {
            var b = a.target,
                c = a.type;
            switch (c) {
                case "timerpoke":
                case "wb-init":
                    j(a);
                    break;
                case "picfill":
                    a.currentTarget === b && k(b)
            }
        }), i.on("txt-rsz.wb win-rsz-width.wb win-rsz-height.wb", function () {
            a(f).trigger(h)
        }), c.add(f)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d, e, f = "wb-dismissable",
            g = "." + f,
            h = "wb-init." + f,
            i = "wb-dismissable-container",
            j = "wb-dismissable-wrapper",
            k = "content-dismiss",
            l = "dismissable-item-id",
            m = c.doc,
            n = function (b) {
                var h, n, p, q, r, s = c.init(b, f, g);
                s && (e || (d = c.i18n, e = {
                    "dismiss": d("dismiss")
                }), s.hasAttribute("id") && (h = s.getAttribute("id"), 0 === h.indexOf("wb-auto-") && (h = void 0)), void 0 === h && (h = c.hashString(c.stripWhitespace(s.innerHTML))), n = o(h), "true" === n ? s.parentNode && s.parentNode.removeChild(s) : (a(s).wrap("<div class='" + j + "'>"), q = s.parentNode, a(q).wrap("<div class='" + i + "'>"), p = q.parentNode, r = "<button type='button' class='mfp-close " + k + "' title='" + e.dismiss + "'>&#xd7;<span class='wb-inv'> " + e.dismiss + "</span></button>", a(p).append(r), p.setAttribute("data-" + l, h)), c.ready(m, f))
            },
            o = function (a) {
                var b = localStorage.getItem(a);
                return null === b ? !1 : b
            },
            p = function (a) {
                localStorage.setItem(a.getAttribute("data-" + l), !0), a.parentNode.removeChild(a), m.trigger("refresh.wb")
            };
        m.on("timerpoke.wb " + h, g, n), m.on("click vclick", "." + k, function (a) {
            var b = a.currentTarget,
                c = a.which;
            c && 1 !== c || p(b.parentNode)
        }), c.add(g)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-eqht",
            e = "." + d,
            f = c.doc,
            g = "timerpoke.wb",
            h = "wb-init" + e,
            i = "vertical-align",
            j = "top",
            k = "wb-contentupdated",
            l = "min-height",
            m = "0",
            n = ":",
            o = ";",
            p = " ?[^;]+",
            q = new RegExp(i + n + " ?" + p + o + "?", "i"),
            r = new RegExp(l + n + " ?" + p + o + "?", "i"),
            s = function (a) {
                var b = c.init(a, d, e);
                b && (f.off(g, e), t(), c.ready(f, d))
            },
            t = function () {
                var b, c, d, g, h, k, p, s = a(e),
                    t = [],
                    x = -1,
                    y = -1,
                    z = -1,
                    A = -1;
                for (k = s.length - 1; - 1 !== k; k -= 1) {
                    for (b = s.eq(k), c = b.find(".eqht-trgt"), c.length || (c = b.children()), t = [], d = v(b), p = c.length - 1; - 1 !== p; p -= 1) g = c[p], h = g.style.cssText.toLowerCase(), h.length > 0 && h.substr(h.length - 1) !== o && (h += o), -1 !== h.indexOf(i) ? h = h.replace(q, i + n + j + o) : h += " " + i + n + j + o, -1 !== h.indexOf(l) ? h = h.replace(r, l + n + m + o) : h += " " + l + n + m + o, g.style.cssText = h, c.eq(p).data(l, m);
                    for (b = w(d), x = c[0] ? c[0].offsetTop : 0, A = c[0] ? c[0].offsetHeight : 0, p = 0; p < c.length; p++) g = c[p], y = g.offsetTop, z = g.offsetHeight, y !== x && (u(t, A), y = g.offsetTop, t.length = 0, x = y, A = z), A = Math.max(z, A), t.push(c.eq(p));
                    u(t, A), f.trigger("wb-updated" + e)
                }
            },
            u = function (a, b) {
                for (var c = 0; c < a.length; c++) {
                    var d = b + 1;
                    a[c][0].style.minHeight = d + "px"
                }
            },
            v = function (a) {
                var b = a.prev(),
                    c = a.next(),
                    d = a.parent();
                return b.length ? a.data({
                    "anchor": b,
                    "anchorRel": "prev"
                }) : c.length ? a.data({
                    "anchor": c,
                    "anchorRel": "next"
                }) : d.length && a.data({
                    "anchor": d,
                    "anchorRel": "parent"
                }), a.detach()
            },
            w = function (a) {
                var b = a.data("anchor"),
                    c = a.data("anchorRel");
                switch (c) {
                    case "prev":
                        b.after(a);
                        break;
                    case "next":
                        b.before(a);
                        break;
                    case "parent":
                        b.append(a)
                }
                return a
            };
        f.on(g + " " + h, e, s), f.on("txt-rsz.wb win-rsz-width.wb win-rsz-height.wb " + k + " wb-updated.wb-tables wb-update" + e, t), c.add(e)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-facebook",
            e = "." + d,
            f = "wb-init" + e,
            g = c.doc,
            h = !1,
            i = function (f) {
                var g = c.init(f, d, e),
                    i = c.pageUrlParts.protocol;
                g && Modernizr.load({
                    "load": [(-1 === i.indexOf("http") ? "http:" : i) + "//connect.facebook.net/" + c.lang + "_US/sdk.js"],
                    "complete": function () {
                        h || (b.FB.init({
                            "version": "v2.4"
                        }), h = !0), b.FB.XFBML.parse(g[0]), c.ready(a(g), d)
                    }
                })
            };
        g.on("timerpoke.wb " + f, e, i), c.add(e)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-favicon",
            e = "link[rel='icon']",
            f = "wb-init." + d,
            g = "wb-updated." + d,
            h = "mobile." + d,
            i = "icon." + d,
            j = c.doc,
            k = {
                "filename": "favicon-mobile.png",
                "path": null,
                "rel": "apple-touch-icon",
                "sizes": "57x57 72x72 114x114 144x144 150x150"
            },
            l = function (b) {
                var f, g, i = c.init(b, d, e, !0);
                i && (f = a(i), g = a.extend({}, k, f.data()), f.trigger(h, g), c.ready(j, d))
            },
            m = function (b, c, e) {
                var f, h = a("link[rel^='apple']"),
                    i = 0 !== h.length;
                i || (h = a("<link rel='" + e.rel + "' sizes='" + e.sizes + "' class='" + d + "'/>")), h.hasClass(d) && (f = null !== e.path ? e.path : o(b.getAttribute("href")), h.attr("href", f + e.filename), i || b.parentNode.insertBefore(h[0], b)), j.trigger(g, ["mobile"])
            },
            n = function (a, b, c) {
                var d = null !== c.path ? c.path : o(a.getAttribute("href"));
                a.setAttribute("href", d + c.filename), j.trigger(g, ["icon"])
            },
            o = function (a) {
                return a.substring(0, a.lastIndexOf("/") + 1)
            };
        j.on("timerpoke.wb " + f, e, l), j.on(h + " " + i, e, function (a, b) {
            var c = a.target;
            if (a.currentTarget === c) switch (a.type) {
                case "mobile":
                    m(c, a, b);
                    break;
                case "icon":
                    n(c, a, b)
            }
            return !0
        }), c.add(e)
    }(jQuery, window, wb),
    function (a, b, c, d) {
        "use strict";
        var e = "wb-feeds",
            f = "." + e,
            g = "li > a",
            h = "wb-init" + f,
            i = c.doc,
            j = /\\u([\d\w]{4})/g,
            k = {
                "flickr": function (a) {
                    var b = a.media.m,
                        d = {
                            "title": a.title,
                            "thumbnail": b.replace("_m.", "_s."),
                            "image": b.replace("_m", ""),
                            "description": a.description.replace(/^\s*<p>(.*?)<\/p>\s*<p>(.*?)<\/p>/i, "")
                        };
                    return "<li><a class='feed-flickr' href='javascript:;' data-flickr='" + c.escapeAttribute(JSON.stringify(d)) + "'><img src='" + d.thumbnail + "' alt='" + c.escapeAttribute(d.title) + "' title='" + c.escapeAttribute(d.title) + "' class='img-responsive'/></a></li>"
                },
                "youtube": function (a) {
                    var b = {
                        "title": a.title,
                        "videoId": a.id
                    };
                    return "<li class='col-md-4 col-sm-6 feed-youtube' data-youtube='" + c.escapeAttribute(JSON.stringify(b)) + "'><a href='javascript:;'><img src='" + c.pageUrlParts.protocol + "//img.youtube.com/vi/" + b.videoId + "/mqdefault.jpg' alt='" + c.escapeAttribute(b.title) + "' title='" + c.escapeAttribute(b.title) + "' class='img-responsive' /></a></li>"
                },
                "pinterest": function (a) {
                    var b = m(a.description).replace(/<a href="\/pin[^"]*"><img ([^>]*)><\/a>([^<]*)(<a .*)?/, "<a href='" + a.link + "'><img alt='' class='center-block' $1><br/>$2</a>$3");
                    return "<li class='media'>" + b + ("" !== a.publishedDate ? " <small class='small feeds-date'><time>" + c.date.toDateISO(a.publishedDate, !0) + "</time></small>" : "") + "</li>"
                },
                "generic": function (a) {
                    var b = a.title;
                    return "object" == typeof b && (b.content ? b = b.content : "xhtml" === b.type && b.div && (b = b.div.content)), "<li><a href='" + a.link + "'>" + b + "</a><br />" + ("" !== a.publishedDate ? " <small class='feeds-date'><time>" + c.date.toDateISO(a.publishedDate, !0) + "</time></small>" : "") + "</li>"
                }
            },
            l = function (a, b) {
                return String.fromCharCode(parseInt(b, 16))
            },
            m = function (a) {
                return a.replace(j, l)
            },
            n = function (a) {
                var b = a.className.match(/\blimit-\d+/);
                return b ? Number(b[0].replace(/limit-/i, "")) : 0
            },
            o = function (a, b) {
                var d = c.pageUrlParts.protocol + "//query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feed%20where%20url%20%3D%20'" + encodeURIComponent(decodeURIComponent(a)) + "'%20limit%20" + (b ? b : 4) + "&format=json";
                return d
            },
            p = function (b) {
                var d, h, i, j, k, l, m, p, q, r, s, t, u = c.init(b, e, f);
                if (u)
                    for (i = a(u).find(".feeds-cont"), j = n(u), k = i.find(g), m = k.length - 1, i.data("toProcess", k.length).data("feedLimit", j).data("entries", []), p = m; - 1 !== p; p -= 1) r = k.eq(p), s = r.find("> img"), d = {
                        "dataType": "jsonp",
                        "timeout": 1e4
                    }, r.attr("data-ajax") ? (-1 !== r.attr("href").indexOf("flickr") ? (l = "flickr", q = "jsoncallback", i.data(e + "-postProcess", [".wb-lbx"])) : (l = "generic", q = "callback"), d.url = r.attr("data-ajax"), d.jsonp = q) : r.attr("data-youtube") ? (t = c.getData(r, "youtube"), i.data(e + "-postProcess", [".wb-lbx", ".wb-mltmd"]), t.playlist && r.trigger({
                        "type": "data-ready.wb-feeds",
                        "feedsData": t.playlist
                    }, {
                        "feedType": "youtube",
                        "_content": i
                    })) : (h = o(r.attr("href"), j), d.url = h, l = h.indexOf("pinterest.com") > -1 ? "pinterest" : "generic"), d.jsonp = q, d.context = {
                        "fIcon": 0 !== s.length ? s.attr("src") : "",
                        "feedType": l,
                        "_content": i
                    }, r.trigger({
                        "type": "ajax-fetch.wb",
                        "fetch": d
                    })
            },
            q = function (b) {
                var c, e, f = b,
                    g = [],
                    h = this.fIcon,
                    i = this._content,
                    j = i.data("toProcess");
                for (e = f.length, c = 0; c !== e; c += 1) {
                    f[c].fIcon = h, f[c].publishedDate === d && (f[c].publishedDate = f[c].published || f[c].pubDate || f[c].updated || "");
                    var k = f[c].link;
                    k && k.href && (f[c].link = k.href), g.push(f[c])
                }
                return g = a.merge(g, i.data("entries")), 1 === j ? (r(g, i.data("feedLimit"), i, this.feedType), 0) : (j -= 1, i.data({
                    "toProcess": j,
                    "entries": g
                }), j)
            },
            r = function (b, d, f, g) {
                var h, i, j, l, m = d > 0 && d < b.length ? d : b.length,
                    n = "",
                    o = c.date.compare,
                    p = f.closest("details"),
                    q = !0,
                    r = ".feeds-cont",
                    t = "vis-handler";
                for (i = "youtube" !== g ? b.sort(function (a, b) {
                        return o(b.publishedDate, a.publishedDate)
                    }) : b, h = 0; h !== m; h += 1) j = i[h], n += k[g](j);
                return f.data(e + "-result", n), 0 !== p.length && ("tabpanel" === p.attr("role") ? "true" === p.attr("aria-hidden") && (q = !1, f.empty().addClass("waiting"), l = p.closest(".wb-tabs"), l.hasClass(t) || l.on("wb-updated.wb-tabs", function (a, b) {
                    var c = b.find(r);
                    c.hasClass("feed-active") || s(c)
                }).addClass(t)) : p.attr("open") || (q = !1, f.empty().addClass("waiting"), p.children("summary").on("click.wb-feeds", function (b) {
                    var c = a(b.currentTarget).off("click.wb-feeds");
                    s(c.parent().find(r))
                }))), q && s(f), !0
            },
            s = function (a) {
                var b, c, d = a.data(e + "-result"),
                    g = a.data(e + "-postProcess");
                if (a.empty().removeClass("waiting").addClass("feed-active").append(d), g)
                    for (b = g.length - 1; - 1 !== b; b -= 1) c = g[b], a.find(c).trigger("wb-init" + c);
                a.trigger("wb-feed-ready" + f)
            };
        i.on("ajax-fetched.wb data-ready.wb-feeds", f + " " + g, function (b, d) {
            var g, h, i = b.target;
            if (b.currentTarget === i) {
                switch (b.type) {
                    case "ajax-fetched":
                        if (h = b.fetch.response, h.query) {
                            var j = h.query.results;
                            j ? (g = j.entry ? j.entry : j.item, Array.isArray(g) || (g = [g])) : g = []
                        } else g = h.responseData ? h.responseData.feed.entries : h.items || h.feed.entry;
                        break;
                    default:
                        g = b.feedsData
                }
                0 === q.apply(d, [g]) && c.ready(a(i).closest(f), e)
            }
        }), i.on("click", f + " .feed-youtube", function (b) {
            var d = "#wb-feeds-youtube-lbx",
                e = a(d),
                f = c.getData(b.currentTarget, "youtube"),
                g = c.pageUrlParts.protocol + "//www.youtube.com/watch?v=" + f.videoId,
                h = "<figure class='wb-mltmd'><video title='" + f.title + "'><source type='video/youtube' src='" + g + "' /></video><figcaption><p>" + f.title + "</p></figcaption></figure>";
            0 === e.length ? e = a("<section id='wb-feeds-youtube-lbx' class='mfp-hide modal-dialog modal-content overlay-def'><header class='modal-header'><h2 class='modal-title'>" + f.title + "</h2></header><div class='modal-body'>" + h + "</div></section>").insertAfter("main") : (e.find(".modal-title").text(f.title), e.find(".modal-body").empty().append(h)), e.find(".wb-mltmd").trigger("wb-init.wb-mltmd"), a(document).trigger("open.wb-lbx", [{
                "src": d,
                "type": "inline"
            }])
        }), i.on("click", f + " .feed-flickr", function (b) {
            var d = "#wb-feeds-flick-lbx",
                e = a(d),
                f = c.getData(b.currentTarget, "flickr"),
                g = "<img src='" + f.image + "' class='thumbnail center-block' alt='" + f.title + "' /><span>" + f.description + "</span>";
            0 === e.length ? e = a("<section id='wb-feeds-flick-lbx' class='mfp-hide modal-dialog modal-content overlay-def'><header class='modal-header'><h2 class='modal-title'>" + f.title + "</h2></header><div class='modal-body'>" + g + "</div></section>").insertAfter("main") : (e.find(".modal-title").text(f.title), e.find(".modal-body").empty().append(g)), a(document).trigger("open.wb-lbx", [{
                "src": d,
                "type": "inline"
            }])
        }), i.on("timerpoke.wb " + h, f, p), c.add(f)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d, e, f, g, h = "wb-filter",
            i = "." + h,
            j = "wb-init" + i,
            k = c.doc,
            l = "wb-fltr-out",
            m = ":not(." + l + ")",
            n = "wb-fltr-inpt",
            o = "wbfltrid",
            p = ":visible",
            q = "." + n,
            r = {
                "std": {
                    "selector": "li"
                },
                "grp": {
                    "selector": "li",
                    "section": ">section"
                },
                "tbl": {
                    "selector": "tr",
                    "section": ">tbody"
                },
                "tblgrp": {
                    "selector": "th:not([scope])",
                    "hdnparentuntil": "tbody",
                    "section": ">tbody"
                }
            },
            s = function (g) {
                var j, k, l, m, p, q, s, u, v = c.init(g, h, i);
                v && (j = a(v), k = v.nodeName, ["DIV", "SECTION", "ARTICLE"].indexOf(v.nodeName) >= 0 ? (q = r.grp,
                    m = !0) : q = "TABLE" === k ? j.find("tbody").length > 1 ? r.tblgrp : r.tbl : r.std, p = a.extend(!0, {}, q, b[h], c.getData(j, h)), j.data(p), e || (d = c.i18n, e = {
                    "filter_label": d("fltr-lbl"),
                    "fltr_info": d("fltr-info")
                }, f = e.fltr_info), Modernizr.addTest("stringnormalize", "normalize" in String), Modernizr.load({
                    "test": Modernizr.stringnormalize,
                    "nope": ["site!deps/unorm" + c.getMode() + ".js"]
                }), v.id || (v.id = c.getId()), s = v.id + "-inpt", u = j.find((p.section || "") + " " + p.selector).length, l = '<div class="input-group"><label for="' + s + '" class="input-group-addon"><span class="glyphicon glyphicon-filter" aria-hidden="true"></span> ' + e.filter_label + '</label><input id="' + s + '" class="form-control ' + n + '" data-' + o + '="' + v.id + '" type="search"></div><p aria-live="polite" id="' + v.id + '-info">' + t(u, u) + "</p>", m ? j.prepend(l) : j.before(l), c.ready(j, h))
            },
            t = function (a, b) {
                return f.replace(/_NBITEM_/g, a).replace(/_TOTAL_/g, b)
            },
            u = function (a) {
                var b = /[^\s"]+|"([^"]*)"/gi;
                return a = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), a.match(b)
            },
            v = function (a, b) {
                var c, d, e, f = b;
                switch (a) {
                    case "and":
                        if (c = u(b))
                            for (f = ".*", e = c.length, d = 0; e > d; d++) f += "(?=.*" + c[d] + ")";
                        break;
                    case "or":
                        c = u(b), c && (f = c.join("|"))
                }
                return new RegExp(f, "i")
            },
            w = function (b, c, d) {
                var e, f, g, h, i = function (a) {
                        return a.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    },
                    j = i(b.val().trim()),
                    k = d.filterCallback,
                    n = (d.section || "") + " ",
                    o = d.hdnparentuntil,
                    q = c.find(n + d.selector),
                    r = q.length;
                for (c.find("." + l).removeClass(l), h = v(d.filterType, j), e = 0; r > e; e += 1) f = q.eq(e), g = i(f.text()), g.match(h) || (o && (f = f.parentsUntil(o)), f.addClass(l));
                k && "function" == typeof k || (k = x), k.apply(this, arguments), a("#" + c.get(0).id + "-info").html(t(c.find(n + m + d.selector + p).length, r))
            },
            x = function (a, b, c) {
                var d, e, f = b.find(c.section + p),
                    g = f.length,
                    h = m + c.selector + p;
                for (d = 0; g > d; d += 1) e = f.eq(d), 0 === e.find(h).length && e.addClass(l)
            };
        k.on("keyup", q, function (b) {
            var c = b.target,
                d = a(c),
                e = a("#" + d.data(o));
            g && clearTimeout(g), g = setTimeout(w.bind(this, d, e, e.data()), 250)
        }), k.on("timerpoke.wb " + j, i, s), c.add(i)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-fnote",
            e = "." + d,
            f = "wb-init" + e,
            g = "setfocus.wb",
            h = c.doc,
            i = function (b) {
                var f, i, j, k, l, m, n, o, p = c.init(b, d, e);
                if (p) {
                    for (f = a(p), i = p.getElementsByTagName("dd"), j = p.getElementsByTagName("dt"), l = i.length, k = 0; k !== l; k += 1) m = i[k], n = j[k], o = m.id + "-dt", m.setAttribute("tabindex", "-1"), m.setAttribute("aria-labelledby", o), n.id = o;
                    f.find("dd p.fn-rtn a span span").remove(), h.on("click vclick", "main :not(" + e + ") sup a.fn-lnk", function (a) {
                        var b, d, e = a.target,
                            f = a.which;
                        return f && 1 !== f ? void 0 : (b = "#" + c.jqEscape(e.getAttribute("href").substring(1)), d = h.find(b), d.find("p.fn-rtn a").attr("href", "#" + e.parentNode.id), d.trigger(g), !1)
                    }), h.on("click vclick", e + " dd p.fn-rtn a", function (a) {
                        var b, d, e = a.which;
                        return e && 1 !== e || (b = a.target.getAttribute("href"), "#" !== b.charAt(0)) ? void 0 : (d = "#" + c.jqEscape(b.substring(1)), h.find(d + " a").trigger(g), !1)
                    }), c.ready(f, d)
                }
            };
        h.on("timerpoke.wb " + f, e, i), c.add(e)
    }(jQuery, window, wb),
    function (a, b, c, d) {
        "use strict";
        var e, f, g = "wb-frmvld",
            h = "." + g,
            i = "wb-init" + h,
            j = "setfocus.wb",
            k = d.doc,
            l = 0,
            m = {
                "hdLvl": "h2",
                "ignore": ":hidden"
            },
            n = function (c) {
                var i, n, o = d.init(c, g, h);
                o && (i = o.id, i || (i = g + "-id-" + l, l += 1, o.id = i), n = d.getMode() + ".js", f || (e = d.i18n, f = {
                    "colon": e("colon"),
                    "hyphen": e("hyphen"),
                    "error": e("err"),
                    "errorFound": e("err-fnd"),
                    "errorsFound": e("errs-fnd"),
                    "formNotSubmitted": e("frm-nosubmit")
                }), Modernizr.load({
                    "both": ["site!deps/jquery.validate" + n, "site!deps/additional-methods" + n],
                    "testReady": function () {
                        return a.validator && a.validator.methods.bic
                    },
                    "complete": function () {
                        var c, e, n, p = a("#" + i),
                            q = p.find("form"),
                            r = q.get(0),
                            s = q.attr("id"),
                            t = r.getElementsByTagName("label"),
                            u = q.find("input, select, textarea"),
                            v = u.filter("input"),
                            w = v.filter("[pattern]"),
                            x = !1,
                            y = u.filter("[required], [data-rule-required], .required"),
                            z = "errors-" + (s ? s : "default"),
                            A = a.extend(!0, {}, m, b[g], d.getData(p, g)),
                            B = A.hdLvl;
                        for (p.append("<div class='arialive wb-inv' aria-live='polite' aria-relevant='all'></div>"), e = t.length, c = 0; c !== e; c += 1) t[c].innerHTML += " ";
                        for (e = w.length, c = 0; c !== e; c += 1) w.eq(c).removeAttr("pattern");
                        if (d.ieVersion > 0 && d.ieVersion < 9) {
                            for (e = y.length, y.removeAttr("required"), c = 0; c !== e; c += 1) y[c].setAttribute("data-rule-required", "true");
                            v.filter("[type=date]").each(function () {
                                var b = a(this),
                                    c = b.wrap("<div/>").parent(),
                                    d = a(c.html().replace("type=date", "type=text"));
                                c.replaceWith(d)
                            }), u = q.find("input, select, textarea")
                        }
                        n = q.validate({
                            "meta": "validate",
                            "focusInvalid": !1,
                            "ignore": A.ignore,
                            "errorElement": "strong",
                            "errorPlacement": function (a, b) {
                                var c, d, e = b.attr("type"),
                                    f = b.attr("data-rule-require_from_group");
                                if (a.data("element-id", b.attr("id")), e && (e = e.toLowerCase(), ("radio" === e || "checkbox" === e) && (c = b.closest("fieldset"), 0 !== c.length && (d = c.find("legend").first(), 0 !== d.length && 1 !== c.find("input[name='" + b.attr("name") + "']"))))) return void a.appendTo(d);
                                if (f && (c = b.closest("fieldset"), 0 !== c.length && (d = c.find("legend").first(), 0 !== d.length && 1 !== c.find("input[name='" + b.attr("name") + "']")))) {
                                    var g = d.find("strong.error"),
                                        h = d.attr("id");
                                    return g.length > 0 && g.remove(), h || (h = "required-group-" + l, l += 1, d.attr("id", h)), a.data("element-id", h), a.attr("id", h), void a.appendTo(d)
                                }
                                a.appendTo(q.find("label[for='" + b.attr("id") + "']"))
                            },
                            "showErrors": function (b) {
                                this.defaultShowErrors();
                                var c, d, e, g, h, i, k, l, m, n, o, p = q.find("strong.error").filter(":not(:hidden)"),
                                    r = q.find("input.error, select.error, textarea.error"),
                                    s = "<span class='prefix'>" + f.error + "&#160;",
                                    t = f.colon + " </span>",
                                    u = f.hyphen,
                                    v = q.parent().find(".arialive")[0];
                                if (q.find(".has-error [aria-invalid=false]").closest(".has-error").removeClass("has-error"), 0 !== p.length) {
                                    for (d = "<" + B + ">" + f.formNotSubmitted + p.length + (1 !== p.length ? f.errorsFound : f.errorFound) + "</" + B + "><ul>", r.closest(".form-group").addClass("has-error"), h = p.length, g = 0; g !== h; g += 1) i = p.eq(g), k = s + (g + 1) + t, l = i.closest("label").find(".field-name"), 0 === l.length && (m = i.closest("fieldset"), 0 !== m.length && (l = m.find("legend .field-name"))), i.find("span.prefix").detach(), d += "<li><a href='#" + i.data("element-id") + "'>" + k + (0 !== l.length ? l.html() + u : "") + i.text() + "</a></li>", i.html("<span class='label label-danger'>" + k + i.text() + "</span>");
                                    if (d += "</ul>", !x) {
                                        g = 0;
                                        for (e in b)
                                            if (b.hasOwnProperty(e)) {
                                                g += 1;
                                                break
                                            } if (0 !== g) {
                                            for (h = p.length, g = 0; g !== h; g += 1)
                                                if (n = p[g].parentNode, n.getAttribute("for") === e) {
                                                    o = n.innerHTML, o !== v.innerHTML && (v.innerHTML = o);
                                                    break
                                                }
                                        } else 0 !== v.innerHTML.length && (v.innerHTML = "")
                                    }
                                    setTimeout(function () {
                                        c = q.find("#" + z), 0 === c.length ? c = a("<section id='" + z + "' class='alert alert-danger' tabindex='-1'>" + d + "</section>").prependTo(q) : c.empty().append(d), x && (c.trigger(j), x = !1)
                                    }, 100)
                                } else 0 !== v.innerHTML.length && (v.innerHTML = ""), q.find("#" + z).detach()
                            },
                            "invalidHandler": function () {
                                x = !0
                            },
                            "onfocusout": function (a) {
                                this.element(a)
                            }
                        }), q.on("change", "input[type=date], input[type=file], select", function () {
                            q.validate().element(this)
                        }), k.on("click vclick touchstart", h + " input[type=reset]", function (b) {
                            var c, d = b.which;
                            d && 1 !== d || (n.resetForm(), a("#" + z).detach(), c = q.parent().find(".arialive")[0], 0 !== c.innerHTML.length && (c.innerHTML = ""), q.find(".has-error").removeClass("has-error"))
                        }), q.trigger("formLanguages.wb"), d.ready(a(o), g)
                    }
                }))
            };
        k.on("timerpoke.wb " + i, h, n), d.add(h)
    }(jQuery, window, document, wb),
    function (a, b) {
        "use strict";
        var c = "wb-geomap",
            d = "." + c,
            e = "wb-init" + d,
            f = b.doc,
            g = function (e) {
                var f, g, h = b.init(e, c, d);
                h && (f = a(h), g = b.getMode() + ".js", Modernizr.load([{
                    "both": ["site!deps/proj4" + g, "site!deps/OpenLayers" + g, "site!deps/geomap-lib" + g],
                    "complete": function () {
                        f.trigger("geomap.wb")
                    }
                }]))
            };
        f.on("timerpoke.wb " + e, d, g), b.add(d)
    }(jQuery, wb),
    function (a, b, c, d, e) {
        "use strict";
        var f, g, h, i = "wb-lbx",
            j = "." + i,
            k = "wb-init" + j,
            l = "setfocus.wb",
            m = "deps-loaded" + j,
            n = "#wb-tphp, body > header, body > main, body > footer",
            o = d.doc,
            p = function (e) {
                var g, h = d.init(e, i, j);
                h && (g = h.id, o.one(m, function () {
                    var e, h = c.getElementById(g),
                        k = a(h),
                        l = {};
                    h && (l.callbacks = f, "a" !== h.nodeName.toLowerCase() ? (l.delegate = "a:not(" + j + "-skip)", e = h.getElementsByTagName("a")[0], -1 !== h.className.indexOf("-gal") && (l.gallery = {
                        "enabled": !0
                    })) : e = h, e && ("#" === e.getAttribute("href").charAt(0) ? l.type = "inline" : -1 !== e.className.indexOf("lbx-iframe") ? l.type = "iframe" : 0 === e.getElementsByTagName("img").length ? l.type = "ajax" : l.type = "image", -1 !== h.className.indexOf("lbx-modal") && (l.modal = !0), -1 !== h.className.indexOf("lbx-ajax") && (l.type = "ajax"), -1 !== h.className.indexOf("lbx-image") && (l.type = "image"), -1 !== h.className.indexOf("lbx-inline") && (l.type = "inline"), l = a.extend(!0, l, b[i], d.getData(k, i)), k.magnificPopup(l).data("wbLbxFilter", l.filter)), d.ready(k, i))
                }), q())
            },
            q = function () {
                h || (g = d.i18n, h = {
                    "fClose": g("close"),
                    "tClose": g("overlay-close") + g("space") + g("esc-key"),
                    "tLoading": g("load"),
                    "gallery": {
                        "tPrev": g("prv-l"),
                        "tNext": g("nxt-r"),
                        "tCounter": g("lb-curr")
                    },
                    "image": {
                        "tError": g("lb-img-err") + ' (<a href="url%">)'
                    },
                    "ajax": {
                        "tError": g("lb-xhr-err") + ' (<a href="url%">)'
                    }
                }, f = {
                    "open": function () {
                        var a, b, d = this.currItem,
                            e = this.contentContainer,
                            f = this.wrap,
                            g = f.find(".modal-dialog"),
                            h = f.find(".mfp-close, .mfp-arrow"),
                            i = h.length;
                        for (r(g), o.find("body").addClass("wb-modal"), o.find(n).attr("aria-hidden", "true"), a = 0; a !== i; a += 1) b = h[a], b.innerHTML += "<span class='wb-inv'> " + b.title + "</span>";
                        "image" === d.type ? e.find(".mfp-bottom-bar").attr("id", "lbx-title") : e.attr("role", "document"), f.append("<span tabindex='0' class='lbx-end wb-inv'></span>").find(".activate-open").trigger("wb-activate"), this.contentContainer.attr("data-pgtitle", c.getElementsByTagName("H1")[0].textContent)
                    },
                    "close": function () {
                        o.find("body").removeClass("wb-modal"), o.find(n).removeAttr("aria-hidden")
                    },
                    "change": function () {
                        var a, b, d, e, f, g, h, i = this.currItem,
                            j = this.contentContainer;
                        "image" === i.type ? (a = i.el, e = i.img, b = j.find(".mfp-bottom-bar"), a ? (d = a.find("img"), e.attr("alt", d.attr("alt")), f = d.attr("aria-describedby"), f && e.attr("aria-describedby", f), f = d.attr("longdesc"), f && e.attr("longdesc", f), g = a.attr("data-title"), g && (h = c.getElementById(g), null !== h && b.find(".mfp-title").html(h.innerHTML))) : e.attr("alt", b.find(".mfp-title").html())) : j.find(".modal-title, h1").first().attr("id", "lbx-title"), j.attr("aria-labelledby", "lbx-title")
                    },
                    "parseAjax": function (b) {
                        var c, d = this.currItem,
                            f = d.el,
                            g = d.src.split("#")[1],
                            h = f ? f.data("wbLbxFilter") : e,
                            i = h || (g ? "#" + g : !1);
                        c = i ? a("<div>" + b.data + "</div>").find(i) : a(b.data), r(c), c.find(".modal-title, h1").first().attr("id", "lbx-title"), b.data = c
                    }
                }), Modernizr.load({
                    "load": "site!deps/jquery.magnific-popup" + d.getMode() + ".js",
                    "testReady": function () {
                        return a.magnificPopup
                    },
                    "complete": function () {
                        a.extend(!0, a.magnificPopup.defaults, h), o.trigger(m)
                    }
                })
            },
            r = function (b) {
                if (null !== b && b.hasClass("modal-dialog")) {
                    var d, e, f = b.find(".modal-footer").first(),
                        g = f.length,
                        i = g && 0 !== a(f).find(".popup-modal-dismiss").length,
                        j = "popup-modal-dismiss",
                        k = h.fClose;
                    i || (g ? d = f.innerHTML + h.tClose : (f = c.createElement("div"), f.setAttribute("class", "modal-footer"), d = h.tClose), d = d.replace("'", "&#39;"), e = "<button type='button' class='btn btn-sm btn-primary pull-left " + j + "' title='" + k + " " + d + "'>" + k + "<span class='wb-inv'>" + d + "</span></button>", a(f).append(e), g || b.append(f))
                }
            };
        o.on("timerpoke.wb " + k, j, p), o.on("click vclick", ".mfp-wrap a[href^='#']", function (b) {
            var d, e, f = b.which,
                g = b.target;
            if ((!f || 1 === f) && (d = a(g).closest(".mfp-wrap"), e = c.getElementById(g.getAttribute("href").substring(1)), e && !a.contains(d[0], e))) {
                if (0 !== d.find(".popup-modal-dismiss").length) return !1;
                b.stopPropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0, a.magnificPopup.close(), a(e).trigger(l)
            }
        }), a(c).on("click", ".popup-modal-dismiss", function (b) {
            b.preventDefault(), a.magnificPopup.close()
        }), a(c).on("open" + j, function (b, c, g, h, j) {
            if (b.namespace === i) {
                var k = c.length > 1,
                    l = g && !k ? g : !1,
                    n = h ? function () {
                        return h[a.magnificPopup.instance.index]
                    } : "title";
                b.preventDefault(), o.one(m, function () {
                    a.magnificPopup.open({
                        "items": c,
                        "modal": l,
                        "gallery": {
                            "enabled": k
                        },
                        "image": {
                            "titleSrc": n
                        },
                        "callbacks": f,
                        "ajax": j
                    }), d.ready(e, i)
                }), q()
            }
        }), d.add(j)
    }(jQuery, window, document, wb),
    function (a, b, c, d) {
        "use strict";
        var e, f = "wb-menu",
            g = "." + f,
            h = "wb-init" + g,
            i = c.getElementById("wb-bc"),
            j = "navcurr.wb",
            k = "setfocus.wb",
            l = "wb-init.wb-details",
            m = "> a, > details > summary",
            n = d.doc,
            o = 500,
            p = 0,
            q = function (b) {
                var c, e, h = d.init(b, f, g);
                h && (c = a(h), c.attr("id") || c.attr("id", f + "-" + p), p += 1, e = c.data("ajax-fetch"), e ? c.trigger({
                    "type": "ajax-fetch.wb",
                    "fetch": {
                        "url": e
                    }
                }) : (e = c.data("ajax-replace") || c.data("ajax-append") || c.data("ajax-prepend"), e || u(c, c)))
            },
            r = function (a) {
                var b, c, d, e = a.length;
                for (d = 0; d !== e; d += 1) b = a.eq(d), c = b.siblings("ul"), b.attr({
                    "aria-posinset": d + 1,
                    "aria-setsize": e,
                    "role": "menuitem"
                }), 0 !== c.length && (b.attr("aria-haspopup", "true"), c.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), r(c.children("li").find(m)))
            },
            s = function (b, c, d, e, f) {
                var g, h, i, j, k, l, n = a(b),
                    o = "' aria-posinset='",
                    p = " role='menuitem' aria-setsize='",
                    q = "<li><details><summary class='mb-item" + (n.hasClass("wb-navcurr") || 0 !== n.children(".wb-navcurr").length ? " wb-navcurr'" : "'") + p + d + o + (c + 1) + "' aria-haspopup='true'>" + n.text() + "</summary><ul class='list-unstyled mb-sm' role='menu' aria-expanded='false' aria-hidden='true'>";
                for (g = 0; g !== f; g += 1) j = e.eq(g), h = j.find(m), i = h[0], k = h.parent().find("> ul > li"), l = k.length, q += i && 0 === l && "a" === i.nodeName.toLowerCase() ? "<li>" + j[0].innerHTML.replace(/(<a\s)/, "$1" + p + f + o + (g + 1) + "' tabindex='-1' ") + "</li>" : s(i, g, f, k, k.length);
                return q + "</ul></details></li>"
            },
            t = function (b) {
                var c, d, e, f, g, h, i, j, k, l, m, n, o = "";
                for (l = b.length, j = 0; j !== l; j += 1) {
                    for (d = b[j], c = "", e = d[0], m = e.length, k = 0; k !== m; k += 1) f = e[k], h = a(f.parentNode).find("> ul > li"), n = h.length, 0 !== n ? c += s(f, k, m, h, n) : (g = f.parentNode, i = "li" === g.nodeName.toLowerCase() ? g.innerHTML : "<a href='" + g.getElementsByTagName("a")[0].href + "'>" + f.innerHTML + "</a>", c += "<li class='no-sect'>" + i.replace(/(<a\s)/, "$1 class='mb-item' role='menuitem' aria-setsize='" + m + "' aria-posinset='" + (k + 1) + "' tabindex='-1' ") + "</li>");
                    o += "<nav role='navigation' typeof='SiteNavigationElement' id='" + d[1] + "' class='" + d[1] + " wb-menu wb-menu-inited'><h3>" + d[2] + "</h3><ul class='list-unstyled mb-menu' role='menu'>" + c + "</ul></nav>"
                }
                return o.replace(/['"]?list-group-item['"]?/gi, '""')
            },
            u = function (b, e) {
                var g = a("#wb-info"),
                    h = function () {
                        var h, k, m, n, o, p = e && "string" === e.attr("data-type") ? e : b,
                            q = p.find(".menu"),
                            s = q.find("> li > a"),
                            u = b.data("trgt"),
                            v = a("#wb-sec"),
                            w = a("#wb-lng"),
                            x = c.getElementById("wb-srch"),
                            y = "",
                            z = c.getElementById(u),
                            A = a(z),
                            B = [];
                        if (null !== x && (y += "<section class='srch-pnl'>" + x.innerHTML.replace(/h2>/i, "h3>").replace(/(for|id)="([^"]+)"/gi, "$1='$2-imprt'") + "</section>"), 0 !== w.length) {
                            for (m = w.find("li:not(.curr)"), n = m.length, y += "<section class='lng-ofr'><h3>" + w.children("h2").html() + "</h3><ul class='list-inline'>", o = 0; o !== n; o += 1) y += m[o].innerHTML.replace(/(<a\s.*<\/a>?)/, "<li>$1</li>");
                            y += "</ul></section>"
                        }(0 !== v.length || 0 !== q.length || 0 !== g.length) && (0 !== v.length && (B.push([v.find("ul").filter(":not(li > ul)").find(" > li > *:first-child").get(), "sec-pnl", v.find("h2").html()]), 0 === v.find(".wb-navcurr").length && v.trigger(j, i)), 0 !== q.length && (q.attr("role") || q.attr("role", "menubar"), B.push([s.get(), "sm-pnl", p.find("h2").html()])), 0 !== g.length && (B.push([g.find("h3, a").not("section a"), "info-pnl", g.find("h2").html()]), 0 === g.find(".wb-navcurr").length && g.trigger(j, i)), y += t(B)), z.innerHTML = "<header class='modal-header'><div class='modal-title'>" + c.getElementById("wb-glb-mn").getElementsByTagName("h2")[0].innerHTML + "</div></header><div class='modal-body'>" + y + "</div>", z.className += " wb-overlay modal-content overlay-def wb-panel-r", a(c).ajaxStop(function () {
                            A.trigger("wb-init.wb-overlay").find("summary").attr("tabindex", "-1").trigger(l), A.find(".mb-menu > li:first-child").find(".mb-item").attr("tabindex", "0")
                        }), p.find(":discoverable").attr("tabindex", "-1"), 0 !== s.length && (s[0].setAttribute("tabindex", "0"), r(s), s.filter("[aria-haspopup=true]").append("<span class='expicon glyphicon glyphicon-chevron-down'></span>")), b.html(p.html()), setTimeout(function () {
                            for (b.trigger(j, i), A.find("#sm-pnl").trigger(j, i), h = A.find(".wb-navcurr"), n = h.length, o = 0; o !== n; o += 1) k = h.eq(o), k.hasClass(".mb-item") || (k = k.closest("details").children("summary").addClass("wb-navcurr"));
                            k = A.find("#sec-pnl .wb-navcurr.mb-item"), "true" === k.attr("aria-haspopup") && k.trigger("click").parent().prop("open", "open"), d.ready(b, f)
                        }, 1)
                    },
                    k = g.find("[data-ajax-replace],[data-ajax-append],[data-ajax-prepend]"),
                    m = k.length,
                    n = 0;
                0 === m ? h() : g.on("wb-contentupdated ajax-failed.wb", function () {
                    n += 1, n === m && h()
                })
            },
            v = function (a, b, c) {
                var d = a.length,
                    e = a.index(b) + c;
                e = e === d ? 0 : -1 === e ? d - 1 : e, a.eq(e).trigger(k)
            },
            w = function (a, b) {
                a.removeClass("sm-open").children(".open").removeClass("open").attr({
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).find("details").removeAttr("open").children("ul").attr({
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }), b && a.removeClass("active")
            },
            x = function (a, b) {
                var c = b.children("a");
                w(a.find(".active"), !0), b.addClass("active"), "true" === c.attr("aria-haspopup") && b.addClass("sm-open").children(".sm").addClass("open").attr({
                    "aria-hidden": "false",
                    "aria-expanded": "true"
                })
            },
            y = function (b, c) {
                var d, e, f = c.length,
                    g = String.fromCharCode(b);
                for (e = 0; e !== f; e += 1)
                    if (d = c[e], d.innerHTML.charAt(0) === g) return a(d).trigger(k), !0;
                return !1
            };
        n.on("timerpoke.wb " + h + " ajax-fetched.wb ajax-failed.wb", g, function (b) {
            var c, d, e = b.type;
            switch (e) {
                case "ajax-fetched":
                case "ajax-failed":
                    return c = b.target, b.currentTarget === c && (d = a(c), u(d, "ajax-fetched" === e ? b.fetch.pointer : d)), !1;
                case "timerpoke":
                case "wb-init":
                    q(b)
            }
            return !0
        }), n.on("mouseleave", g + " .menu", function (b) {
            var c = a(b.currentTarget);
            clearTimeout(e), e = setTimeout(function () {
                w(c.find(".active"), !0)
            }, o)
        }), n.on("mouseenter", g + " .sm", function () {
            "true" === a(this).attr("aria-expanded") && clearTimeout(e)
        }), n.on("touchstart click", g + " .item[aria-haspopup=true]", function (b) {
            var c, d, e = "touchstart" === b.type,
                f = b.which;
            (e || !f || 1 === f) && (b.preventDefault(), c = a(this), d = c.parent(), d.hasClass("sm-open") ? e && w(d, !0) : c.trigger("focusin"))
        }), n.on("click", g + " [role=menu] [aria-haspopup=true]", function (b) {
            var d, e, f = b.currentTarget,
                g = f.parentNode,
                h = g.getElementsByTagName("ul")[0],
                i = "false" === h.getAttribute("aria-hidden");
            i || (a(g).closest("[role^='menu']").find("[aria-hidden=false]").parent().find("[aria-haspopup=true]").not(f).trigger("click"), e = c.getElementById("mb-pnl"), d = f.offsetTop, a.contains(e, f) && d < e.scrollTop && (e.scrollTop = d)), h.setAttribute("aria-expanded", !i), h.setAttribute("aria-hidden", i)
        }), n.on("click touchstart", function (b) {
            var c, d = b.which;
            "touchstart" !== b.type && d && 1 !== d || (c = a(g + " .sm-open"), 0 !== c.length && 0 === a(b.target).closest(g).length && w(c, !0))
        }), n.on("mouseover focusin", g + " .item", function (b) {
            var c = a(b.currentTarget),
                d = c.parent(),
                f = d.closest(g);
            clearTimeout(e), "focusin" === b.type ? x(f, d) : e = setTimeout(function () {
                x(f, d)
            }, o)
        }), n.on("keydown", g + " [role=menuitem]", function (b) {
            var d, e, f, h, i, j, l, n, o, p = b.currentTarget,
                q = b.which,
                r = a(p),
                s = "true" === r.attr("aria-haspopup"),
                t = r.parent().closest("[role^='menu']"),
                u = "menubar" === t.attr("role"),
                z = 9,
                A = 13,
                B = 27,
                C = 37,
                D = 38,
                E = 39,
                F = 40,
                G = 32;
            b.ctrlKey || b.altKey || b.metaKey || (q === z ? w(a(g + " .active"), !0) : "A" !== p.nodeName || !p.hasAttribute("href") || q !== A && q !== G ? u ? q === C || q === E ? (b.preventDefault(), v(t.find("> li > a"), r, q === C ? -1 : 1)) : !s || q !== A && q !== G && q !== D && q !== F ? q === B ? (b.preventDefault(), w(t.closest(g).find(".active"), !1)) : q > 64 && 91 > q && (b.preventDefault(), y(q, r.parent().find("> ul > li > a, > ul > li > details > summary").get())) : (b.preventDefault(), f = r.parent(), h = f.find(".sm"), h.hasClass("open") || x(t.closest(g), f), h.children("li").eq(0).find(m).trigger(k)) : (j = m, q === D || q === F ? (b.preventDefault(), v(t.children("li").find(j), r, q === D ? -1 : 1)) : !s || q !== A && q !== G && q !== E ? q === B || q === C || q === E ? (f = t.parent(), e = f.closest("[role^='menu']"), (q === C || q === E) && b.preventDefault(), "menubar" === e.attr("role") ? (d = t.siblings("a"), q === B ? (b.preventDefault(), d.trigger(k), setTimeout(function () {
                w(d.parent(), !1)
            }, 100)) : "menubar" === e.attr("role") && v(e.find("> li > a"), d, q === C ? -1 : 1)) : q !== E && (h = 0 !== e.length ? t : r, 0 !== e.length ? (b.preventDefault(), t.closest("li").find(j).trigger("click").trigger("setfocus.wb")) : "false" === r.parent().children("ul").attr("aria-hidden") && (b.preventDefault(), r.trigger("click").trigger("setfocus.wb")))) : q > 64 && 91 > q && (b.preventDefault(), f = r.closest("li"), i = y(q, f.nextAll().find(j).get()), i || (i = y(q, f.prevAll().find(j).get()))) : (f = r.parent(), b.stopImmediatePropagation(), b.preventDefault(), p.nodeName.toLowerCase("summary") && (l = !!f.attr("open"), l || (a(parent).closest("[role^='menu']").find("[aria-hidden=false]").parent().find("[aria-haspopup=true]").not(p).trigger("click"), o = c.getElementById("mb-pnl"), n = p.offsetTop, a.contains(o, p) && n < o.scrollTop && (o.scrollTop = n), r.trigger("click")), f.children("ul").attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).find("[role=menuitem]:first").trigger("setfocus.wb")))) : (b.preventDefault(), p.click(), w(a(g + " .active"), !0)))
        }), n.on("keyup", g + " [role=menuitem]", function (a) {
            return a.preventDefault(), !1
        }), n.on("mediumview.wb largeview.wb xlargeview.wb", function () {
            var b = c.getElementById("mb-pnl");
            b && "false" === b.getAttribute("aria-hidden") && a(b).trigger("close.wb-overlay")
        }), d.add(g)
    }(jQuery, window, document, wb),
    function (a, b, c, d) {
        "use strict";
        var e, f, g, h = "wb-mltmd",
            i = "." + h,
            j = "wb-init" + i,
            k = i + " .wb-mm-ctrls",
            l = i + " .display," + k,
            m = "ready.youtube",
            n = "ccloaded" + i,
            o = "ccloadfail" + i,
            p = "ccvischange" + i,
            q = "renderui" + i,
            r = "inited" + i,
            s = "youtube" + i,
            t = "resize" + i,
            u = "templateloaded" + i,
            v = "cuepoint" + i,
            w = "cc_on",
            x = ["durationchange", "playing", "pause", "ended", "volumechange", "timeupdate", "waiting", "canplay", "progress", n, o, p, v].join(" "),
            y = c.doc,
            z = c.win,
            A = function (b) {
                var j = c.init(b, h, i);
                j && (g || (f = c.i18n, g = {
                    "play": f("mmp-play"),
                    "pause": f("pause"),
                    "volume": f("volume"),
                    "cc_on": f("cc", "on"),
                    "cc_off": f("cc", "off"),
                    "cc_error": f("cc-err"),
                    "mute_on": f("mute", "on"),
                    "mute_off": f("mute", "off"),
                    "duration": f("dur"),
                    "position": f("pos")
                }), e === d ? (e = "", a(j).trigger({
                    "type": "ajax-fetch.wb",
                    "fetch": {
                        "url": c.getPath("/assets") + "/mediacontrols.html"
                    }
                })) : "" !== e && a(j).trigger(u))
            },
            B = function (a) {
                var b, c, d, e = 2,
                    f = "";
                for (d = function (a, b) {
                        return new Array(Math.max(b - String(a).length + 1, 0)).join(0) + a
                    }, a = Math.floor(a); e >= 0;) b = Math.pow(60, e), c = Math.floor(a / b), "" !== f && (f += ":"), f += d(c, 2), a -= b * c, e -= 1;
                return f
            },
            C = function (a) {
                var b, c, e, f, g;
                if (a !== d) {
                    if ("s" === a.charAt(a.length - 1)) return parseFloat(a.substring(0, a.length - 1));
                    for (c = a.split(":").reverse(), g = 0, b = 0, f = c.length; f > b; b += 1) e = 0 === b ? parseFloat(c[b]) : parseInt(c[b], 10), g += e * Math.pow(60, b);
                    return g
                }
                return -1
            },
            D = function () {
                var a = "{{",
                    b = "}}",
                    c = "[a-z0-9_$][\\.a-z0-9_]*",
                    e = new RegExp(a + "\\s*(" + c + ")\\s*" + b, "gi");
                return function (a, b) {
                    return a.replace(e, function (a, c) {
                        for (var e = c.split("."), f = e.length, g = b, h = 0; f > h; h += 1) {
                            if (g = g[e[h]], g === d) throw "tim: '" + e[h] + "' not found in " + a;
                            if (h === f - 1) return g
                        }
                    })
                }
            }(),
            E = function (b) {
                var c, e, f, g, h, i = [],
                    j = ".wb-tmtxt",
                    k = b.find(j),
                    l = k.length;
                for (c = 0; c !== l; c += 1) e = a(k[c]), g = -1, h = -1, e.attr("data-begin") !== d ? (g = C(e.attr("data-begin")), h = e.attr("data-end") !== d ? C(e.attr("data-end")) : C(e.attr("data-dur")) + g) : e.attr("data") !== d && (f = e.attr("data").replace(/(begin|dur|end)/g, '"$1"').replace(/'/g, '"'), f = a.parseJSON(f), g = C(f.begin), h = f.end !== d ? C(f.end) : C(f.dur) + g), e = e.clone(), e.find(j).detach(), i[i.length] = {
                    "text": e.html(),
                    "begin": g,
                    "end": h
                };
                return i
            },
            F = function (b) {
                var c, e, f, g, h = [],
                    i = "[begin]",
                    j = b.find(i),
                    k = j.length;
                for (c = 0; c !== k; c += 1) e = a(j[c]), f = C(e.attr("begin")), g = e.attr("end") !== d ? C(e.attr("end")) : C(e.attr("dur")) + f, e = e.clone(), e.find(i).detach(), h[h.length] = {
                    "text": e.html(),
                    "begin": f,
                    "end": g
                };
                return h
            },
            G = function (b, c) {
                a.ajax({
                    "url": c,
                    "dataType": "html",
                    "dataFilter": function (a) {
                        return a.replace(/<img|object [^>]*>/g, "")
                    },
                    "success": function (c) {
                        b.trigger({
                            "type": n,
                            "captions": -1 !== c.indexOf("<html") ? E(a(c)) : F(a(c))
                        })
                    },
                    "error": function (a, c, d) {
                        b.trigger({
                            "type": o,
                            "error": d
                        })
                    }
                })
            },
            H = function (a, b) {
                a.trigger({
                    "type": n,
                    "captions": E(b)
                })
            },
            I = function (b, c, d) {
                var e, f, g = d.length;
                for (b.html("&#160;"), f = 0; g > f; f += 1) e = d[f], c >= e.begin && c <= e.end && b.html(a("<div>" + e.text + "</div>"))
            },
            J = function (b, c) {
                var d, e;
                switch (b) {
                    case "play":
                        try {
                            this.object.play()
                        } catch (f) {
                            this.object.doPlay()
                        }
                        break;
                    case "pause":
                        try {
                            this.object.pause()
                        } catch (f) {
                            this.object.doPause()
                        }
                        break;
                    case "getCaptionsVisible":
                        return a(this).hasClass(w);
                    case "setCaptionsVisible":
                        d = a(this), c ? d.addClass(w) : d.removeClass(w), d.trigger(p);
                        break;
                    case "getBuffering":
                        return this.object.buffering || !1;
                    case "setBuffering":
                        this.object.buffering = c;
                        break;
                    case "getPreviousTime":
                        return this.object.previousTime;
                    case "setPreviousTime":
                        this.object.previousTime = c;
                        break;
                    default:
                        switch (e = b.charAt(3).toLowerCase() + b.substr(4), b.substr(0, 3)) {
                            case "get":
                                return "function" != typeof this.object[e] ? this.object[e] : this.object[e]();
                            case "set":
                                "function" != typeof this.object[e] ? this.object[e] = c : this.object[b](c)
                        }
                }
            },
            K = function (b, c) {
                var d, e = a(this.object.getIframe());
                switch (b) {
                    case "play":
                        return this.object.playVideo();
                    case "pause":
                        return this.object.pauseVideo();
                    case "getPaused":
                        return d = this.object.getPlayerState(), -1 === d || 0 === d || 2 === d || 5 === d;
                    case "getPlayed":
                        return this.object.getPlayerState() > -1;
                    case "getEnded":
                        return 0 === this.object.getPlayerState();
                    case "getDuration":
                        return this.object.getDuration();
                    case "getCurrentTime":
                        return this.object.getCurrentTime();
                    case "setCurrentTime":
                        return this.object.seekTo(c, !0);
                    case "getMuted":
                        return this.object.isMuted();
                    case "setMuted":
                        c ? this.object.mute() : this.object.unMute(), setTimeout(function () {
                            e.trigger("volumechange")
                        }, 50);
                        break;
                    case "getVolume":
                        return this.object.getVolume() / 100;
                    case "setVolume":
                        this.object.setVolume(100 * c), setTimeout(function () {
                            e.trigger("volumechange")
                        }, 50);
                        break;
                    case "getCaptionsVisible":
                        return a(this).hasClass(w);
                    case "setCaptionsVisible":
                        if (c) {
                            a(this).addClass(w);
                            try {
                                this.object.loadModule("cc"), this.object.setOption("cc", "track", {
                                    "languageCode": this.object.getOption("cc", "tracklist")[0].languageCode
                                })
                            } catch (f) {
                                this.object.loadModule("captions"), this.object.setOption("captions", "track", {
                                    "languageCode": this.object.getOption("captions", "tracklist")[0].languageCode
                                })
                            }
                        } else a(this).removeClass(w), this.object.unloadModule("cc"), this.object.unloadModule("captions");
                        e.trigger("ccvischange")
                }
            },
            L = function (b) {
                var c = b.target.getIframe(),
                    d = a(c),
                    e = function () {
                        d.trigger("timeupdate")
                    };
                switch (b.data) {
                    case null:
                        d.trigger("canplay").trigger("durationchange");
                        break;
                    case -1:
                        b.target.unMute(), d.trigger("durationchange");
                        break;
                    case 0:
                        d.trigger("ended"), c.timeline = clearInterval(c.timeline);
                        break;
                    case 1:
                        d.trigger("canplay").trigger("play").trigger("playing"), c.timeline = setInterval(e, 250);
                        break;
                    case 2:
                        d.trigger("pause"), c.timeline = clearInterval(c.timeline);
                        break;
                    case 3:
                        c.timeline = clearInterval(c.timeline)
                }
            },
            M = function () {
                var a = b.youTube;
                a.ready = !0, y.trigger(m)
            },
            N = function () {
                a(i + " object, " + i + " iframe, " + i + " video").trigger(t)
            };
        y.on("timerpoke.wb " + j, i, A), z.on("resize", N), y.on("ready", N), y.on("ajax-fetched.wb " + u, i, function (b) {
            var c = a(this);
            "ajax-fetched" === b.type && (e = b.fetch.pointer.html(), c = a(i)), c.trigger({
                "type": r
            })
        }), y.on(r, i, function (e) {
            if (e.namespace === h) {
                var f, i = a(this),
                    j = i.children("audio, video").eq(0),
                    k = j.children("track[kind='captions']").attr("src") || d,
                    l = i.attr("id"),
                    n = j.attr("id") || l + "-md",
                    o = j.is("audio") ? "audio" : "video",
                    p = j.attr("title") || "",
                    r = "video" === o ? j.attr("width") || j.width() : 0,
                    t = "video" === o ? j.attr("height") || j.height() : 0,
                    u = c.getData(i, h),
                    v = a.extend({
                        "media": j,
                        "captions": k,
                        "id": l,
                        "mId": n,
                        "type": o,
                        "title": p,
                        "height": t,
                        "width": r
                    }, g),
                    w = j.get(0),
                    x = b.youTube;
                if (j.attr("id") === d && j.attr("id", n), u !== d && (v.shareUrl = u.shareUrl), i.addClass(o), j.find("[type='video/youtube']").length > 0) return f = c.getUrlParts(i.find("[type='video/youtube']").attr("src")), v.youTubeId = f.params.v ? f.params.v : f.pathname.substr(1), x.ready === !1 ? y.one(m, function () {
                    i.trigger(s, v)
                }) : i.trigger(s, v), Modernizr.load({
                    "load": "https://www.youtube.com/iframe_api"
                });
                if (null !== w.error || "" === w.currentSrc || w.currentSrc === d) return;
                i.trigger(q, [o, v]), c.ready(i, h)
            }
        }), y.on(s, i, function (b, d) {
            if (b.namespace === h) {
                var e, f, g = d.mId,
                    i = a(b.currentTarget);
                f = new YT.Player(g, {
                    "videoId": d.youTubeId,
                    "playerVars": {
                        "autoplay": 0,
                        "controls": 0,
                        "origin": c.pageUrlParts.host,
                        "modestbranding": 1,
                        "rel": 0,
                        "showinfo": 0,
                        "html5": 1,
                        "cc_load_policy": 1
                    },
                    "events": {
                        "onReady": function (a) {
                            N(), L(a)
                        },
                        "onStateChange": L,
                        "onApiChange": function () {
                            var a = i.get(0);
                            a.player("setCaptionsVisible", a.player("getCaptionsVisible"))
                        }
                    }
                }), i.addClass("youtube"), e = i.find("#" + g).attr("tabindex", -1), d.media = e, d.ytPlayer = f, i.trigger(q, ["youtube", d])
            }
        }), y.on(q, i, function (f, g, i) {
            if (f.namespace === h) {
                var j, k = a(f.currentTarget),
                    l = c.getUrlParts(i.captions),
                    m = c.getUrlParts(b.location.href),
                    n = i.media;
                if (n.after(D(e, i)).wrap('<div class="display"></div>'), j = n.is("object") ? n.children(":first-child") : n, j.on(x, function (a) {
                        k.trigger(a)
                    }), this.object = i.ytPlayer || n.get(0), this.player = i.ytPlayer ? K : J, "youtube" === g || isNaN(this.player("getDuration")) || j.trigger("durationchange"), k.find("progress").trigger("wb-init.wb-progress"), k.find("input[type='range']").trigger("wb-init.wb-slider"), i.shareUrl !== d && a("<div class='wb-share' data-wb-share='{\"type\": \"" + ("audio" === g ? g : "video") + '", "title": "' + i.title.replace(/'/g, "&apos;") + '", "url": "' + i.shareUrl + '", "pnlId": "' + i.id + "-shr\"}'></div>").insertBefore(n.parent()).trigger("wb-init.wb-share"), i.captions === d) return 1;
                m.absolute.replace(m.hash || "#", "") !== l.absolute.replace(l.hash || "#", "") ? G(n, l.absolute) : H(n, a("#" + c.jqEscape(l.hash.substring(1))))
            }
        }), y.on("click", i, function (b) {
            var c = a(b.target),
                d = c.attr("class") || "";
            return 2 === b.which || 3 === b.which ? !0 : void(d.match(/playpause|-play|-pause|display/) || c.is("object") || c.is("video") ? this.player("getPaused") || this.player("getEnded") ? this.player("play") : this.player("pause") : d.match(/\bcc\b|-subtitles/) ? this.player("setCaptionsVisible", !this.player("getCaptionsVisible")) : d.match(/\bmute\b|-volume-(up|off)/) ? this.player("setMuted", !this.player("getMuted")) : c.is("progress") || c.hasClass("progress") || c.hasClass("progress-bar") ? this.player("setCurrentTime", this.player("getDuration") * ((b.pageX - c.offset().left) / c.width())) : d.match(/\brewind\b|-backward/) ? this.player("setCurrentTime", this.player("getCurrentTime") - .05 * this.player("getDuration")) : d.match(/\bfastforward\b|-forward/) ? this.player("setCurrentTime", this.player("getCurrentTime") + .05 * this.player("getDuration")) : d.match(/cuepoint/) && a(this).trigger({
                "type": "cuepoint",
                "cuepoint": c.data("cuepoint")
            }))
        }), y.on("input change", i, function (b) {
            var c = b.target;
            a(c).hasClass("volume") && (b.currentTarget.player("setMuted", !1), b.currentTarget.player("setVolume", c.value / 100))
        }), y.on("keydown", l, function (b) {
            var c = b.currentTarget.parentNode,
                d = b.which,
                e = 0,
                f = .05,
                g = a(c);
            if (!(b.ctrlKey || b.altKey || b.metaKey)) {
                switch (d) {
                    case 32:
                        a(b.target).hasClass("mute") || "INPUT" === b.target.nodeName ? g.find(".mute").trigger("click") : a(b.target).hasClass("cc") ? g.find(".cc").trigger("click") : g.find(".playpause").trigger("click");
                        break;
                    case 37:
                        c.player("setCurrentTime", this.parentNode.player("getCurrentTime") - .05 * this.parentNode.player("getDuration"));
                        break;
                    case 39:
                        c.player("setCurrentTime", this.parentNode.player("getCurrentTime") + .05 * this.parentNode.player("getDuration"));
                        break;
                    case 38:
                        e = Math.round(100 * c.player("getVolume")) / 100 + f, c.player("setVolume", 1 > e ? e : 1);
                        break;
                    case 40:
                        e = Math.round(100 * c.player("getVolume")) / 100 - f, c.player("setVolume", e > 0 ? e : 0);
                        break;
                    default:
                        return !0
                }
                return !1
            }
        }), y.on("keyup", k, function (a) {
            return 32 !== a.which || a.ctrlKey || a.altKey || a.metaKey ? void 0 : !1
        }), y.on("wb-activate", i, function () {
            this.player("play")
        }), y.on(x, i, function (b, e) {
            var f, j, k, l, m, n, o, p, q, r = b.currentTarget,
                s = b.type,
                t = b.namespace,
                u = a(r),
                v = "<span class='wb-inv'>",
                x = "</span>";
            switch (s) {
                case "playing":
                case "pause":
                case "ended":
                    m = "playing" === s, j = u.find(".playpause"), l = j.data("state-" + (m ? "off" : "on")), m ? (u.addClass("playing"), u.find(".progress").addClass("active")) : ("ended" === s && (this.loading = clearTimeout(this.loading)), u.removeClass("playing")), j.attr("title", l).children("span").toggleClass("glyphicon-play", !m).toggleClass("glyphicon-pause", m).html(v + l + x);
                    break;
                case "volumechange":
                    n = r.player("getMuted"), j = u.find(".mute"), l = j.data("state-" + (n ? "off" : "on")), q = 100 * r.player("getVolume"), j.attr({
                        "title": l,
                        "aria-pressed": n
                    }).children("span").toggleClass("glyphicon-volume-up", !n).toggleClass("glyphicon-volume-off", n).html(v + l + x), k = u.find("input[type='range']"), k[0].value = n ? 0 : q, k.trigger("wb-update.wb-slider");
                    break;
                case "timeupdate":
                    f = r.player("getCurrentTime"), u.find("progress").attr("value", Math.round(f / r.player("getDuration") * 1e3) / 10).trigger("wb-update.wb-progress"),
                        u.find(".wb-mm-tmln-crrnt span:nth-child(2)").text(B(f)), u.hasClass(w) && a.data(r, "captions") !== d && I(u.find(".wb-mm-cc"), f, a.data(r, "captions"));
                    break;
                case "durationchange":
                    u.find(".wb-mm-tmln-ttl span:nth-child(2)").text(B(r.player("getDuration"))), p = c.pageUrlParts.params[b.target.id], p && (p = C(p), r.player("setCurrentTime", p));
                    break;
                case "ccloaded":
                    t === h && a.data(r, "captions", b.captions);
                    break;
                case "ccloadfail":
                    t === h && u.find(".wb-mm-cc").append("<p class='errmsg'><span>" + g.cc_error + "</span></p>").end().find(".cc").attr("disabled", "");
                    break;
                case "ccvischange":
                    t === h && (o = r.player("getCaptionsVisible"), j = u.find(".cc"), l = j.data("state-" + (o ? "off" : "on")), j.attr({
                        "title": l,
                        "aria-pressed": o
                    }).children("span").html(v + l + x));
                    break;
                case "waiting":
                    e || y.off("progress", i), this.loading = setTimeout(function () {
                        u.addClass("waiting")
                    }, 500);
                    break;
                case "canplay":
                    this.loading = clearTimeout(this.loading), u.removeClass("waiting");
                    break;
                case "cuepoint":
                    r.player("setCurrentTime", C(b.cuepoint))
            }
        }), y.on("progress", i, function (b) {
            var c = b.currentTarget,
                d = a(c);
            this.player("getPaused") === !1 && this.player("getCurrentTime") === this.player("getPreviousTime") ? c.player("getBuffering") === !1 && (c.player("setBuffering", !0), d.trigger("waiting", !0)) : c.player("getBuffering") === !0 && (c.player("setBuffering", !1), d.trigger("canplay", !0)), c.player("setPreviousTime", c.player("getCurrentTime"))
        }), y.on(t, i, function (b) {
            if (b.namespace === h) {
                var c, e, f = b.target,
                    g = a(f);
                a(b.currentTarget).hasClass("video") && (0 === f.videoWidth || f.videoWidth === d ? (c = g.attr("height") / g.attr("width"), e = Math.round(g.width() * (isNaN(c) ? .5625 : c)), g.css("height", e + "px")) : g.css("height", ""))
            }
        }), b.onYouTubeIframeAPIReady = M, b.youTube = {
            "ready": !1
        }, c.add(i)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d, e, f = "wb-navcurr",
            g = "." + f,
            h = c.doc,
            i = function (h, i, j) {
                if ("wb" === h.namespace) {
                    var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = c.init(h.target, f, g),
                        z = y.getElementsByTagName("a"),
                        A = [],
                        B = [],
                        C = b.location,
                        D = C.hostname + C.pathname.replace(/^([^\/])/, "/$1"),
                        E = C.search,
                        F = !1,
                        G = j ? j : f;
                    if (y) {
                        for (m = z.length - 1; - 1 !== m; m -= 1)
                            if (o = z[m], p = o.getAttribute("href"), null !== p && 0 !== p.length && "#" !== p.charAt(0)) {
                                if (q = o.hostname + o.pathname.replace(/^([^\/])/, "/$1"), r = o.search, s = r.length, D.slice(-q.length) === q && (0 === s || E.slice(-s) === r)) {
                                    F = !0;
                                    break
                                }
                                A.push(o), B.push(q)
                            } if (!F && i)
                            for (d ? (u = d, v = e) : (u = [], v = [], t = (i.jquery ? i[0] : i).getElementsByTagName("li"), l = t.length, l && (o = t[l - 1], k = o.firstChild, p = k && "A" === k.nodeName ? k.getAttribute("href") : "", p && "#" !== p.charAt(0) && (u.push(k), v.push(k.hostname + k.pathname.replace(/^([^\/])/, "/$1")))), d = u, e = v), l = A.length, n = u.length - 1; - 1 !== n; n -= 1) {
                                for (x = v[n], w = u[n].search, m = 0; m !== l; m += 1)
                                    if (o = A[m], q = B[m], r = o.search, s = r.length, x.slice(-q.length) === q && (0 === s || w.slice(-s) === r)) {
                                        F = !0;
                                        break
                                    } if (F) break
                            }
                        F && (o.className += " " + G, -1 !== y.className.indexOf("wb-menu") && -1 === o.className.indexOf("item") && a(o).closest(".sm").parent().children("a").addClass(G)), c.ready(a(y), f)
                    }
                }
            };
        h.on("navcurr.wb", i)
    }(jQuery, window, wb),
    function (a, b, c, d) {
        "use strict";
        var e, f, g = "wb-overlay",
            h = "." + g,
            i = "wb-init" + h,
            j = "overlay-close",
            k = "overlay-lnk",
            l = "outside-off",
            m = "wb-overlay-dlg",
            n = !1,
            o = {},
            p = "setfocus.wb",
            q = d.doc,
            r = function (b) {
                var i, k, l, m, o, p, q, r = d.init(b, g, h);
                if (r) {
                    i = a(r), f || (e = d.i18n, f = {
                        "close": e("close"),
                        "colon": e("colon"),
                        "space": e("space"),
                        "esc": e("esc-key"),
                        "closeOverlay": e(j)
                    });
                    var s = i.attr("class").indexOf("wb-panel") > -1 ? !0 : !1,
                        t = i.attr("class").indexOf("wb-popup") > -1 ? !0 : !1;
                    if (s || t) {
                        var u, v, w, x = "";
                        k = i.find(".modal-footer")[0], u = k && 0 !== k.length ? !0 : !1, v = (i.hasClass("wb-panel-l") ? "pull-right " : "pull-left ") + j, u ? w = k.innerHTML + f.space + f.esc : (k = c.createElement("div"), k.setAttribute("class", "modal-footer"), w = f.esc), l = f.close, w = w.replace("'", "&#39;"), t && (k.style.border = "0"), m = "<button type='button' class='btn btn-sm btn-primary " + v + "' style='" + x + "' title='" + l + " " + w + "'>" + l + "<span class='wb-inv'>" + w + "</span></button>", a(k).append(m), u || i.append(k)
                    }
                    o = i.find(".modal-title"), p = 0 !== o.length ? f.close + f.colon + f.space + o.text() + f.space + f.esc : f.closeOverlay, p = p.replace("'", "&#39;"), q = "<button type='button' class='mfp-close " + j + "' title='" + p + "'>&#xd7;<span class='wb-inv'> " + p + "</span></button>", i.append(q), r.setAttribute("aria-hidden", "true"), n = !0, d.ready(i, g)
                }
            },
            s = function (b, e) {
                var f = a("#" + d.jqEscape(b));
                f.addClass("open").attr("aria-hidden", "false"), (f.hasClass("wb-popup-full") || f.hasClass("wb-popup-mid")) && (f.attr("data-pgtitle", c.getElementsByTagName("H1")[0].textContent), q.find("body").addClass(m)), e || f.scrollTop(0).trigger(p), o[b] || setTimeout(function () {
                    o[b] = null
                }, 1)
            },
            t = function (b, c, d) {
                var e = a("#" + b),
                    f = o[b];
                e.removeClass("open").attr("aria-hidden", "true"), (e.hasClass("wb-popup-full") || e.hasClass("wb-popup-mid")) && q.find("body").removeClass(m), d && e.addClass("user-closed"), !c && f && a(f).trigger(p), delete o[b]
            };
        q.on("timerpoke.wb " + i + " keydown open" + h + " close" + h, h, function (b) {
            var d, e, f, g, h = b.type,
                i = b.which,
                j = b.target,
                k = b.currentTarget,
                m = k.id;
            switch (h) {
                case "timerpoke":
                case "wb-init":
                    r(b);
                    break;
                case "open":
                    k === j && s(m, b.noFocus);
                    break;
                case "close":
                    k === j && t(m, b.noFocus);
                    break;
                default:
                    switch (d = c.getElementById(m), i) {
                        case 9:
                            -1 === d.className.indexOf(l) && (e = a(d).find(":focusable:not([tabindex='-1'])"), g = e.length, f = e.index(b.target) + (b.shiftKey ? -1 : 1), (-1 === f || f === g) && (b.preventDefault(), e.eq(-1 === f ? g - 1 : 0).trigger(p)));
                            break;
                        case 27:
                            b.isDefaultPrevented() || t(m, !1, !0)
                    }
            }
        }), q.on("click vclick", "." + j, function (b) {
            var c = b.which;
            !n || c && 1 !== c || t(a(b.currentTarget).closest(h).attr("id"), !1, !0)
        }), q.on("click vclick keydown", "." + k, function (a) {
            var b = a.which,
                c = a.currentTarget,
                d = c.hash.substring(1);
            !n || b && 1 !== b && 32 !== b || (a.preventDefault(), setTimeout(function () {
                o[d] = c, s(d)
            }, 1))
        }), q.on("click vclick", h + " a[href^='#']", function (b) {
            var d, e, f, g = b.which,
                i = b.target;
            !n || g && 1 !== g || (e = a(i).closest(h)[0], d = i.getAttribute("href"), f = c.getElementById(d.substring(1)), d.length > 1 && !a.contains(e, f) && (b.stopPropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0, t(e.id, !0), a(f).trigger(p)))
        }), q.on("click vclick touchstart focusin", "body", function (b) {
            var d, e, f = b.target,
                g = b.which;
            if (n && (!g || 1 === g))
                for (d in o) e = c.getElementById(d), e && "false" === e.getAttribute("aria-hidden") && f.id !== d && -1 === e.className.indexOf(l) && !a.contains(e, f) && t(d)
        }), q.on("keyup", function () {
            var d, e, f, i, j, k, l;
            if (n) {
                if (d = c.activeElement, e = d.getBoundingClientRect(), f = 0, i = b.innerHeight, a.isEmptyObject(o) || -1 !== d.className.indexOf(g) || 0 !== a(d).parents(h).length || d === c.body) return;
                for (j in o) k = c.getElementById(j), k && "false" === k.getAttribute("aria-hidden") && (l = k.getBoundingClientRect(), -1 !== k.className.indexOf("wb-bar-t") ? f = Math.max(l.bottom, f) : -1 !== k.className.indexOf("wb-bar-b") && (i = Math.min(l.top, i)));
                e.top < f ? b.scrollBy(0, f - e.top) : e.bottom > i && b.scrollBy(0, e.bottom - i)
            }
        }), d.add(h)
    }(jQuery, window, document, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-prettify",
            e = "." + d,
            f = "wb-init" + e,
            g = "prettyprint" + e,
            h = c.doc,
            i = {
                "linenums": !1,
                "allpre": !1
            },
            j = function (b) {
                var f, j, k, l, m, n, o = c.init(b, d, e),
                    p = c.getMode() + ".js",
                    q = ["site!deps/prettify" + p];
                if (o) {
                    for (f = a(o), j = o.className.split(" "), k = a.extend({}, i, f.data()), l = 0, m = j.length; l !== m; l += 1) 0 === j[l].indexOf("lang-") && q.push("site!deps/" + j[l] + p);
                    k.allpre = k.allpre || f.hasClass("all-pre"), k.linenums = k.linenums || f.hasClass("linenums"), (k.allpre || k.linenums) && (n = h.find("pre"), k.allpre && n.addClass("prettyprint"), k.linenums && n.filter(".prettyprint").addClass("linenums")), Modernizr.load({
                        "load": q,
                        "complete": function () {
                            h.trigger(g)
                        }
                    })
                }
            },
            k = function () {
                c.ready(h, d)
            },
            l = function (a) {
                a.namespace === d && "function" == typeof b.prettyPrint && b.prettyPrint(k)
            };
        h.on("timerpoke.wb " + f, e, j).on(g, l), c.add(e)
    }(jQuery, window, wb),
    function (a, b, c, d) {
        "use strict";
        var e, f, g = "wb-rsz",
            h = "#" + g,
            i = "wb-init" + h,
            j = d.doc,
            k = [],
            l = ["txt-rsz.wb", "win-rsz-width.wb", "win-rsz-height.wb"],
            m = {
                "xxsmallview": 0,
                "xsmallview": 480,
                "smallview": 768,
                "mediumview": 992,
                "largeview": 1200,
                "xlargeview": 1600
            },
            n = function (a) {
                var f, i = d.init(a, g, h);
                i && (f = c.createElement("span"), f.innerHTML = "&#160;", f.setAttribute("id", g), c.body.appendChild(f), e = f, k = [f.offsetHeight, b.innerWidth || j.width(), b.innerHeight || j.height()], o(k[1]), d.ready(j, g))
            },
            o = function (a) {
                var b, c;
                for (b in m) {
                    if (a < m[b]) break;
                    c = b
                }
                c !== f && (d.html.removeClass(f || "").addClass(c), f = c, j.trigger(c + ".wb"))
            },
            p = function () {
                var a, c = [e.offsetHeight, b.innerWidth || j.width(), b.innerHeight || j.height()],
                    d = c.length;
                for (a = 0; a !== d; a += 1) c[a] !== k[a] && (j.trigger(l[a], c), o(c[1]));
                k = c
            };
        j.on(i, n), j.on("timerpoke.wb", h, p), j.trigger(i), d.add(h)
    }(jQuery, window, document, wb),
    function (a, b, c, d) {
        "use strict";
        var e, f, g, h, i, j = d.doc,
            k = "wb-sessto",
            l = "." + k,
            m = k + "-confirm",
            n = "wb-init" + l,
            o = "reset" + l,
            p = "keepalive" + l,
            q = "inactivity" + l,
            r = k,
            s = {
                "inactivity": 12e5,
                "reactionTime": 18e4,
                "sessionalive": 12e5,
                "refreshCallbackUrl": null,
                "logouturl": "./",
                "refreshOnClick": !0,
                "refreshLimit": 12e4,
                "method": "POST",
                "additionalData": null,
                "refreshCallback": function (a) {
                    return "true" === a.replace(/\s/g, "")
                }
            },
            t = function (c) {
                var e, f, g, j = d.init(c, k, l);
                j && (e = a(j), e.attr("data-" + k) || (r = "wet-boew"), f = a.extend({}, s, b[k], e.data(r)), e.data(r, f), i || (h = d.i18n, i = {
                    "buttonContinue": h("st-btn-cont"),
                    "buttonEnd": h("st-btn-end"),
                    "buttonSignin": h("tmpl-signin"),
                    "timeoutBegin": h("st-to-msg-bgn"),
                    "timeoutEnd": h("st-to-msg-end"),
                    "timeoutTitle": h("st-msgbx-ttl"),
                    "timeoutAlready": h("st-alrdy-to-msg")
                }), g = function () {
                    w(e, f), e.trigger(o, f), d.ready(e, k)
                }, v(g))
            },
            u = function (a, b, c, d) {
                clearTimeout(a.data(b)), a.data(b, setTimeout(function () {
                    a.trigger(b, d)
                }, D(c)))
            },
            v = function (a) {
                var b, d, g, h = "#" + k + "-modal";
                if (0 === j.find(h).length) {
                    for (d = c.createDocumentFragment(), g = c.createElement("div"), g.innerHTML = "<a class='wb-lbx lbx-modal mfp-hide' href='#" + k + "-modal'>" + i.timeoutTitle + "</a><section id='" + k + "-modal' class='mfp-hide modal-dialog modal-content overlay-def'><header class='modal-header'><h2 class='modal-title'>" + i.timeoutTitle + "</h2></header><div class='modal-body'></div><div class='modal-footer'></div></section>"; null !== (b = g.firstChild);) d.appendChild(b);
                    c.body.appendChild(d), e = j.find(h), f = e.prev().one("wb-ready.wb-lbx", a).trigger("wb-init.wb-lbx")
                } else a()
            },
            w = function (b, c) {
                c.refreshOnClick && j.on("click", function (d) {
                    var e, f, g = d.target.className;
                    g && -1 !== g.indexOf(m) || 0 !== a(".mfp-ready ." + m).length || (e = b.data("lastActivity"), f = C(), (!e || f - e > c.refreshLimit) && (b.trigger(o, c).trigger(p, c), b.data("lastActivity", f)))
                })
            },
            x = function (b, c) {
                var d = a(b.target);
                null !== c.refreshCallbackUrl && a.ajax({
                    "url": c.refreshCallbackUrl,
                    "data": c.additionalData,
                    "dataType": "text",
                    "method": c.method,
                    "success": function (b) {
                        b && c.refreshCallback(b) ? d.trigger(o, c) : (clearTimeout(d.data(q)), clearTimeout(d.data(p)), B({
                            "body": "<p>" + i.timeoutAlready + "</p>",
                            "buttons": a("<button type='button' class='" + m + " btn btn-primary popup-modal-dismiss'>" + i.buttonSignin + "</button>").data("logouturl", c.logouturl)
                        }))
                    }
                })
            },
            y = function (b, c) {
                var d, f, h = E(c.reactionTime),
                    j = i.timeoutBegin.replace("#min#", "<span class='min'>" + h.minutes + "</span>").replace("#sec#", "<span class='sec'>" + h.seconds + "</span>"),
                    k = "<button type='button' class='",
                    l = "</button>";
                clearTimeout(a(b.target).data(p)), d = a(k + m + " btn btn-primary popup-modal-dismiss'>" + i.buttonContinue + l).data(c).data("start", C()), f = a(k + m + " btn btn-default'>" + i.buttonEnd + l).data("logouturl", c.logouturl), B({
                    "body": "<p>" + j + "<br />" + i.timeoutEnd + "</p>",
                    "buttons": [d, f],
                    "open": function () {
                        var a = e.find(".min"),
                            b = e.find(".sec");
                        g = setInterval(function () {
                            F(a, b) && (clearInterval(g), e.find("p").text(i.timeoutAlready), d.text(i.buttonSignin), f.hide())
                        }, 1e3)
                    }
                })
            },
            z = function (b, c) {
                var d = a(b.target);
                u(d, q, c.inactivity, c), null !== c.refreshCallbackUrl && u(d, p, c.sessionalive, c)
            },
            A = function (c) {
                var d = c.target,
                    e = a(d),
                    f = e.data();
                c.preventDefault(), a.magnificPopup.close(), clearInterval(g), void 0 !== f.start && C() - f.start <= f.reactionTime ? a(l).trigger(o, f).trigger(p, f) : b.location.href = f.logouturl
            },
            B = function (a) {
                e = e.detach(), e.find(".modal-body").html(a.body), e.find(".modal-footer").empty().append(a.buttons), e = e.insertAfter(f), f.magnificPopup("open"), a.open && a.open()
            },
            C = function () {
                return (new Date).getTime()
            },
            D = function (b) {
                var c, d, e, f = {
                    "ms": 1,
                    "cs": 10,
                    "ds": 100,
                    "s": 1e3,
                    "das": 1e4,
                    "hs": 1e5,
                    "ks": 1e6
                };
                return null == b ? null : (c = /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/.exec(a.trim(b.toString())), c[2] ? (d = parseFloat(c[1]), e = f[c[2]] || 1, d * e) : b)
            },
            E = function (a) {
                var b = {
                    "minutes": "",
                    "seconds": ""
                };
                return null != a && (b.minutes = parseInt(a / 6e4 % 60, 10), b.seconds = parseInt(a / 1e3 % 60, 10)), b
            },
            F = function (a, b) {
                var c = parseInt(a.text(), 10),
                    d = parseInt(b.text(), 10);
                return d > 0 ? d -= 1 : c > 0 && (c -= 1, d = 59), a.text(c), b.text(d), 0 === c && 0 === d
            };
        j.on("timerpoke.wb " + n + " " + p + " " + q + " " + o, l, function (a, b) {
            var c = a.type;
            switch (c) {
                case "timerpoke":
                case "wb-init":
                    t(a);
                    break;
                case "keepalive":
                    x(a, b);
                    break;
                case "inactivity":
                    y(a, b);
                    break;
                case "reset":
                    z(a, b)
            }
        }), j.on("click", "." + m, A), d.add(l)
    }(jQuery, window, document, wb),
    function (a, b, c, d) {
        "use strict";
        var e, f, g = "wb-share",
            h = "." + g,
            i = "wb-init" + h,
            j = "shr-lnk",
            k = 0,
            l = d.doc,
            m = {
                "hdLvl": "h2",
                "type": "page",
                "custType": "",
                "url": d.pageUrlParts.href,
                "title": c.title || l.find("h1:first").text(),
                "pnlId": "",
                "lnkClass": "",
                "img": "",
                "desc": "",
                "filter": [],
                "sites": {
                    "bitly": {
                        "name": "bitly",
                        "url": "https://bitly.com/a/bitmarklet?u={u}"
                    },
                    "blogger": {
                        "name": "Blogger",
                        "url": "http://www.blogger.com/blog_this.pyra?t=&amp;u={u}&amp;n={t}"
                    },
                    "delicious": {
                        "name": "Delicious",
                        "url": "http://delicious.com/post?url={u}&amp;title={t}"
                    },
                    "digg": {
                        "name": "Digg",
                        "url": "http://digg.com/submit?phase=2&amp;url={u}&amp;title={t}"
                    },
                    "diigo": {
                        "name": "Diigo",
                        "url": "http://www.diigo.com/post?url={u}&amp;title={t}"
                    },
                    "facebook": {
                        "name": "Facebook",
                        "url": "http://www.facebook.com/sharer.php?u={u}&amp;t={t}"
                    },
                    "gmail": {
                        "name": "Gmail",
                        "url": "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su={t}&body={u}%0A{d}"
                    },
                    "googleplus": {
                        "name": "Google+",
                        "url": "https://plus.google.com/share?url={u}&amp;hl=" + c.documentElement.lang
                    },
                    "linkedin": {
                        "name": "LinkedIn®",
                        "url": "http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary={d}&amp;source="
                    },
                    "myspace": {
                        "name": "MySpace",
                        "url": "http://www.myspace.com/Modules/PostTo/Pages/?u={u}&amp;t={t}"
                    },
                    "pinterest": {
                        "name": "Pinterest",
                        "url": "http://www.pinterest.com/pin/create/button/?url={u}&amp;media={i}&amp;description={t}"
                    },
                    "reddit": {
                        "name": "reddit",
                        "url": "http://reddit.com/submit?url={u}&amp;title={t}"
                    },
                    "stumbleupon": {
                        "name": "StumbleUpon",
                        "url": "http://www.stumbleupon.com/submit?url={u}&amp;title={t}"
                    },
                    "tumblr": {
                        "name": "tumblr",
                        "url": "http://www.tumblr.com/share/link?url={u}&amp;name={t}&amp;description={d}"
                    },
                    "twitter": {
                        "name": "Twitter",
                        "url": "http://twitter.com/home?status={t}%20{u}"
                    },
                    "yahoomail": {
                        "name": "Yahoo! Mail",
                        "url": "http://compose.mail.yahoo.com/?to=&subject={t}&body={u}%0A{d}"
                    }
                }
            },
            n = function (c) {
                var i, l, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H = d.init(c, g, h);
                if (H) {
                    if (f || (e = d.i18n, f = {
                            "shareText": e("shr-txt"),
                            "page": e("shr-pg"),
                            "video": e("shr-vid"),
                            "audio": e("shr-aud"),
                            "disclaimer": e("shr-disc"),
                            "email": e("email")
                        }, m.sites.email = {
                            "name": f.email,
                            "url": "mailto:?to=&subject={t}&body={u}%0A{d}",
                            "isMailto": !0
                        }), r = a(H), n = a.extend(!0, {}, m, b[g], d.getData(r, g)), i = n.sites, C = n.filter, l = n.hdLvl, y = f.shareText + (0 !== n.custType.length ? n.custType : f[n.type]), A = n.pnlId, z = "shr-pg" + (0 !== A.length ? "-" + A : k), s = encodeURIComponent(n.url), B = /\'|&#39;|&apos;/g, t = encodeURIComponent(n.title).replace(B, "%27"), u = encodeURIComponent(n.img), v = encodeURIComponent(n.desc).replace(B, "%27"), -1 === H.className.indexOf("link-only")) {
                        if (o = "<section id='" + z + "' class='shr-pg mfp-hide modal-dialog modal-content overlay-def'><header class='modal-header'><" + l + " class='modal-title'>" + y + "</" + l + "></header><div class='modal-body'><ul class='list-unstyled colcount-xs-2'>", C && 0 !== C.length) F = C;
                        else {
                            F = [];
                            for (G in i) i.hasOwnProperty(G) && F.push(G)
                        }
                        for (F.sort(function (a, b) {
                                return d.normalizeDiacritics(a).localeCompare(d.normalizeDiacritics(b))
                            }), E = F.length, D = 0; D !== E; D += 1) G = F[D], w = i[G], x = w.url.replace(/\{u\}/, s).replace(/\{t\}/, t).replace(/\{i\}/, u).replace(/\{d\}/, v), o += "<li><a href='" + x + "' class='" + j + " " + (w.isMailto ? "email" : G) + " btn btn-default' target='_blank'>" + w.name + "</a></li>";
                        o += "</ul><p class='col-sm-12 shr-dscl'>" + f.disclaimer + "</p><div class='clearfix'></div></div></section>", k += 1
                    }
                    p = "<a href='#" + z + "' aria-controls='" + z + "' class='shr-opn wb-lbx " + n.lnkClass + "'><span class='glyphicon glyphicon-share'></span>" + y + "</a>", q = a((o ? o : "") + p), r.append(q), q.trigger("wb-init.wb-lbx"), d.ready(r, g)
                }
            };
        l.on("timerpoke.wb " + i, h, n), d.add(h)
    }(jQuery, window, document, wb),
    function (a, b, c) {
        "use strict";
        var d, e, f, g = "wb-tables",
            h = "." + g,
            i = "wb-init" + h,
            j = c.doc,
            k = 0,
            l = function (i) {
                var j, l = c.init(i, g, h);
                l && (j = l.id, j || (j = g + "-id-" + k, k += 1, l.id = j), e || (d = c.i18n, e = {
                    "aria": {
                        "sortAscending": d("sortAsc"),
                        "sortDescending": d("sortDesc")
                    },
                    "emptyTable": d("emptyTbl"),
                    "info": d("infoEntr"),
                    "infoEmpty": d("infoEmpty"),
                    "infoFiltered": d("infoFilt"),
                    "lengthMenu": d("lenMenu"),
                    "loadingRecords": d("load"),
                    "paginate": {
                        "first": d("first"),
                        "last": d("last"),
                        "next": d("nxt"),
                        "previous": d("prv"),
                        "page": d("page")
                    },
                    "processing": d("process"),
                    "search": d("filter"),
                    "thousands": d("info1000"),
                    "zeroRecords": d("infoEmpty")
                }), f = {
                    "asStripeClasses": [],
                    "language": e,
                    "dom": "<'top'fil>rt<'bottom'p><'clear'>"
                }, Modernizr.load({
                    "load": ["site!deps/jquery.dataTables" + c.getMode() + ".js"],
                    "testReady": function () {
                        return a.fn.dataTable && a.fn.dataTable.version
                    },
                    "complete": function () {
                        var d = a("#" + j),
                            e = a.fn.dataTableExt;
                        a.extend(e.type.order, {
                            "html-pre": function (a) {
                                return c.normalizeDiacritics(a ? a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "" : "")
                            },
                            "string-case-pre": function (a) {
                                return c.normalizeDiacritics(a)
                            },
                            "string-pre": function (a) {
                                return c.normalizeDiacritics(a)
                            },
                            "formatted-num-asc": function (a, b) {
                                return c.formattedNumCompare(a, b)
                            },
                            "formatted-num-desc": function (a, b) {
                                return c.formattedNumCompare(b, a)
                            }
                        }), d.find("th").append("<span class='sorting-cnt'><span class='sorting-icons'></span></span>"), d.dataTable(a.extend(!0, {}, f, b[g], c.getData(d, g)))
                    }
                }))
            };
        j.on("timerpoke.wb " + i, h, l), j.on("init.dt draw.dt", h, function (b, d) {
            for (var f = a(b.target), i = f.next(".bottom").find("div:first-child"), j = f.next(".bottom").find(".paginate_button"), k = document.createElement("OL"), l = document.createElement("LI"), m = 0; m < j.length; m++) {
                var n = l.cloneNode(!0);
                n.appendChild(j[m]), k.appendChild(n)
            }
            k.className = "pagination mrgn-tp-0 mrgn-bttm-0", i.empty(), i.append(k), f.next(".bottom").find(".paginate_button").attr({
                "role": "button",
                "href": "javascript:;"
            }).not(".previous, .next").attr("aria-pressed", "false").html(function (a, b) {
                return "<span class='wb-inv'>" + e.paginate.page + " </span>" + b
            }).filter(".current").attr("aria-pressed", "true"), "init" === b.type && c.ready(f, g), f.trigger("wb-updated" + h, [d])
        }), j.on("submit", ".wb-tables-filter", function (b) {
            b.preventDefault();
            var c = a(this),
                d = a("#" + c.data("bind-to")).dataTable({
                    "retrieve": !0
                }).api();
            return d.search("").columns().search(""), c.find("[name]").each(function () {
                var b = a(this),
                    c = b.is("select") ? b.find("option:selected").val() : b.val();
                c && d.column(parseInt(b.attr("data-column"), 10)).search(c).draw()
            }), !1
        }), j.on("click", ".wb-tables-filter [type='reset']", function (b) {
            b.preventDefault();
            var c = a(this).closest(".wb-tables-filter"),
                d = a("#" + c.data("bind-to")).dataTable({
                    "retrieve": !0
                }).api();
            return d.search("").columns().search("").draw(), c.find("select").prop("selectedIndex", 0), !1
        }), c.add(h)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d, e, f, g, h = "wb-tabs",
            i = "." + h,
            j = "wb-init" + i,
            k = "wb-shift" + i,
            l = "wb-select" + i,
            m = "wb-updated" + i,
            n = "setfocus.wb",
            o = i + " ul[role=tablist] a, " + i + " ul[role=tablist] .tab-count",
            p = !1,
            q = "tabs-acc",
            r = "> .tabpanels > details > .tgl-panel",
            s = "-activePanel",
            t = "click keydown",
            u = c.pageUrlParts.pathname + "#",
            v = c.doc,
            w = "smallview",
            x = {
                "excludePlay": !1,
                "interval": 6,
                "updateHash": !1,
                "ignoreSession": !1
            },
            y = function (g) {
                var j, k, l, m, n, o, r, t, v, y, z, D, E, F, G, H, J, K, L, M = c.init(g, h, i),
                    N = !0,
                    O = "open",
                    P = 0;
                if (M) {
                    n = a(M), 0 === n.children(".tabpanels").length && n.children("[role=tabpanel], details").wrapAll("<div class='tabpanels'/>"), j = n.find("> .tabpanels > [role=tabpanel], > .tabpanels > details"), k = n.children("[role=tablist]"), N = 0 !== k.length, N && 1 === j.length && (n.removeClass("show-thumbs playing"), n.addClass("exclude-controls")), l = c.jqEscape(c.pageUrlParts.hash.substring(1)), F = 0 !== l.length, m = F ? j.filter("#" + l) : void 0, L = m && 0 !== m.length, o = M.id, t = a.extend(!0, {}, x, {
                        "interval": n.hasClass("slow") ? 9 : n.hasClass("fast") ? 3 : x.interval,
                        "excludeControls": n.hasClass("exclude-controls"),
                        "excludePlay": n.hasClass("exclude-play"),
                        "updateHash": n.hasClass("update-hash"),
                        "playing": n.hasClass("playing"),
                        "ignoreSession": n.hasClass("ignore-session")
                    }, b[h], c.getData(n, h));
                    try {
                        if (L) {
                            if (!t.ignoreSession) try {
                                sessionStorage.setItem(u + o + s, l)
                            } catch (Q) {}
                        } else F && (r = j.find("#" + l), P = r.length), 0 !== P ? l = r.closest("[role=tabpanel]").attr("id") : t.ignoreSession || (l = sessionStorage.getItem(u + o + s)), l && (m = j.filter("#" + l))
                    } catch (Q) {}
                    if (f = -1 !== document.documentElement.className.indexOf(w), e || (d = c.i18n, e = {
                            "prev": d("prv"),
                            "next": d("nxt"),
                            "play": d("tab-play"),
                            "rotStart": d("tab-rot").on,
                            "rotStop": d("tab-rot").off,
                            "space": d("space"),
                            "hyphen": d("hyphen"),
                            "pause": d("pause"),
                            "tabCount": d("lb-curr")
                        }), N) m && 0 !== m.length && (j.filter(".in").addClass("out noheight").removeClass("in"), m.addClass("in").removeClass("out noheight"), k.find(".active").removeClass("active"), k.find("a").filter("[href$='" + l + "']").parent().addClass("active"));
                    else {
                        for (n.addClass(q), J = o + "-grp", K = n.children(".tabpanels"), j = K.children("details"), z = j.length, K.detach(), m && 0 !== m.length || (m = j.filter("[open]").first(), 0 === m.length && (m = j.eq(0))), j.removeAttr(O), m.attr(O, O), D = "<ul role='tablist' aria-live='off' class='generated'>", y = 0; y !== z; y += 1) v = j.eq(y), v.addClass(J).html(v.html().replace(/(<\/summary>)/i, "$1<div class='tgl-panel'>") + "</div>"), G = v.attr("id"), G || (G = c.getId(), v.attr("id", G)), E = !!v.attr(O), f ? Modernizr.details || v.toggleClass("open", E) : (v.attr({
                            "role": "tabpanel",
                            "open": O
                        }), v.addClass((Modernizr.details ? "" : O + " ") + "fade " + (E ? "in" : "noheight out wb-inv"))), D += "<li" + (E ? " class='active'" : "") + "><a id='" + G + "-lnk' href='#" + G + "'>" + v.children("summary").html() + "</a></li>";
                        k = a(D + "</ul>"), K.find("> details > summary").addClass("wb-toggle tgl-tab").attr("data-toggle", '{"parent": "#' + o + '", "group": ".' + J + '"}'), n.prepend(k).append(K).trigger("wb-init.wb-toggle")
                    }
                    B(j, k), N && A(k, t) && c.add("#" + o + i), F && setTimeout(function () {
                        H = L ? k.offset().top : 0 !== P ? r.offset().top : -1, -1 !== H && H < document.body.scrollTop && (document.body.scrollTop = H)
                    }, 1), n.data({
                        "wb-tabs": {
                            "panels": j,
                            "tablist": k,
                            "settings": t,
                            "ctime": 0
                        }
                    }), p = !0, I(n), t.updateHash && C(m[0]), c.ready(n, h)
                }
            },
            z = function (a) {
                var b = a.data(h),
                    c = parseFloat(b.ctime) + .5;
                parseFloat(b.settings.interval) <= c && (a.trigger(k), c = 0), b.ctime = c, a.data(h, b)
            },
            A = function (a, b) {
                var c = e.prev,
                    d = e.next,
                    f = e.space,
                    g = b.excludeControls,
                    h = b.excludePlay,
                    i = !g && !h && b.playing,
                    j = i ? e.pause : e.play,
                    k = i ? e.rotStop : e.rotStart,
                    l = "<span class='glyphicon glyphicon-",
                    m = "<span class='wb-inv'>",
                    n = "<li class='control ",
                    o = "' href='javascript:;' role='button' title='",
                    p = "</span></a></li> ",
                    q = l + (i ? "pause" : "play") + "'></span>",
                    r = a.find("[role=tab]"),
                    s = r.index(r.filter("[aria-selected=true]")) + 1,
                    t = e.tabCount,
                    u = t.indexOf("%"),
                    v = t.lastIndexOf("%") + 1,
                    w = n + "prv'><a class='prv" + o + c + "'>" + l + "chevron-left'></span>" + m + c + p,
                    x = n + " tab-count' tabindex='0'><div>" + t.substring(0, u) + "<div class='curr-count'>" + t.substring(u, v).replace("%curr%", "<span class='curr-index'>" + s + "</span>").replace("%total%", r.length) + "</div>" + t.substring(v) + "</div></li>",
                    y = n + "nxt'><a class='nxt" + o + d + "'>" + l + "chevron-right'></span>" + m + d + p,
                    z = n + "plypause'><a class='plypause" + o + j + "'>" + q + " <span>" + j + "</span>" + m + f + e.hyphen + f + k + p;
                return g || a.prepend(w + x + y), g || h || a.append(z), i
            },
            B = function (a, b) {
                for (var c, d, e, g, h, i = a.get(), j = i.length - 1, k = b.children().get(), l = k.length - 1, m = "details" === a[0].nodeName.toLowerCase(); - 1 !== j; j -= 1) d = i[j], c = -1 === d.className.indexOf("out"), m && f || (d.setAttribute("aria-hidden", c ? "false" : "true"), d.setAttribute("aria-expanded", c ? "true" : "false")), d.setAttribute("aria-labelledby", d.id + "-lnk");
                for (h = !1; - 1 !== l; l -= 1) d = k[l], d.setAttribute("role", "presentation"), c = -1 !== d.className.indexOf("active"), c ? h = !0 : 0 !== l || h || (c = !0, d.className += " active"), e = d.getElementsByTagName("a")[0], g = e.getAttribute("href").substring(1), e.tabIndex = c ? "0" : "-1", e.setAttribute("role", "tab"), e.setAttribute("aria-selected", c ? "true" : "false"), e.setAttribute("aria-controls", g), e.id = g + "-lnk";
                b.attr("aria-live", "off")
            },
            C = function (a) {
                var d = a.id;
                c.ignoreHashChange = !0, a.id += "-off", b.location.hash = d, a.id = d, c.ignoreHashChange = !1
            },
            D = function (a, b, c, d) {
                var e, f, g, j, k = b.find("[role=tab]"),
                    l = k.index(d) + 1,
                    n = a.filter(".in"),
                    o = c.closest(i),
                    p = o.data(h).settings,
                    q = n.find(".wb-mltmd-inited").get(),
                    r = q.length;
                for (-1 !== n[0].className.indexOf("slide") && (f = a.index(n), g = a.index(c), j = a.length - 1, a.toggleClass("reverse", f > g && (f !== j || 0 !== g) || 0 === f && g === j)), n.removeClass("in").addClass("out noheight").attr({
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }), f = 0; f !== r; f += 1) e = q[f], e.player && e.player("pause");
                if (c.removeClass("out noheight").addClass("in").attr({
                        "aria-hidden": "false",
                        "aria-expanded": "true"
                    }), b.find(".active").removeClass("active").children("a").attr({
                        "aria-selected": "false",
                        "tabindex": "-1"
                    }), b.find(".curr-index").html(l), d.attr({
                        "aria-selected": "true",
                        "tabindex": "0"
                    }).parent().addClass("active"), !p.ignoreSession) try {
                    sessionStorage.setItem(u + o.attr("id") + s, c.attr("id"))
                } catch (t) {}
                p.updateHash && C(c[0]), o.trigger(m, [c])
            },
            E = function (a, b) {
                var c = a.data(h),
                    d = c.panels,
                    e = c.tablist,
                    f = d.filter("#" + b.attr("aria-controls"));
                D(d, e, f, b)
            },
            F = function (a, b) {
                var c = b.data(h),
                    d = c.panels,
                    e = d.length,
                    f = b.find("> .tabpanels > .in").prevAll("[role=tabpanel]").length,
                    g = !a.shiftto,
                    i = f > e ? 0 : f + (g ? 1 : a.shiftto);
                G(d[i > e - 1 ? 0 : 0 > i ? e - 1 : i].id, g)
            },
            G = function (b, c) {
                var d, e = "#" + b,
                    g = a(e);
                f && "details" === g[0].nodeName.toLowerCase() ? g.children("summary").trigger(g.attr("open") ? n : "click") : (d = a(e + "-lnk"), d.trigger({
                    "type": "click",
                    "which": c ? void 0 : 1
                }), c || d.trigger(n))
            },
            H = function (a, b) {
                a.trigger({
                    "type": k,
                    "shiftto": b
                })
            },
            I = function (b) {
                var c, d, e, h, j, k, l, m, n, o, s, t, u, v, x, y, z, A;
                if (p) {
                    if (f = -1 !== document.documentElement.className.indexOf(w), y = f !== g, z = b.length ? !0 : !1, y || z) {
                        for (c = z ? b : a(i), u = c.length, t = 0; t !== u; t += 1)
                            if (d = c.eq(t), e = d.children(".tabpanels"), h = e.children("details"), x = h.length, 0 !== h.length) {
                                if (e.detach(), o = h.children("summary"), k = d.children("ul"), f)
                                    for (n = k.find(".active a").attr("href").substring(1), v = 0; v !== x; v += 1) j = h.eq(v), s = j.children(".tgl-panel"), A = j.attr("id") === n, j.removeAttr("role aria-expanded aria-hidden").removeClass("fade out noheight in").toggleClass("open", A), s.attr("role", "tabpanel").removeAttr("aria-expanded").removeAttr("aria-hidden"), A ? j.attr("open", "open") : j.removeAttr("open"), z || j.children("summary").attr({
                                        "aria-expanded": A,
                                        "aria-selected": A
                                    });
                                else g && (l = h.filter("[open]"), m = l.attr("id"), l = (0 === l.length ? h : l).eq(0), h.attr({
                                    "role": "tabpanel",
                                    "open": "open"
                                }).not(l).addClass("fade out noheight wb-inv").attr({
                                    "aria-hidden": "true",
                                    "aria-expanded": "false"
                                }), h.children(".tgl-panel").removeAttr("role"), l.addClass("fade in").attr({
                                    "aria-hidden": "false",
                                    "aria-expanded": "true"
                                }));
                                o.attr("aria-hidden", !f), k.attr("aria-hidden", f), d.append(e), f && !z ? d.attr("role", "tablist") : g && (d.removeAttr("role").find(r).removeAttr("role"), d.find("> ul [href$='" + m + "']").trigger("click"))
                            } z && !f && c.hasClass(q) && setTimeout(function () {
                            c.removeAttr("role").find(r).removeAttr("role")
                        }, 1)
                    }
                    g = f
                }(y || z) && setTimeout(function () {
                    a(i + " .tabpanels > details.wb-inv").removeClass("wb-inv")
                }, 300)
            };
        v.on("timerpoke.wb " + j + " " + k + " " + l, i, function (b) {
            var c, d = b.target,
                e = b.currentTarget;
            if (e === d) switch (b.type) {
                case "timerpoke":
                    c = a(d), c.hasClass(h + "-inited") ? c.hasClass("playing") && z(c) : y(b);
                    break;
                case "wb-init":
                    y(b);
                    break;
                case "wb-shift":
                    F(b, a(d));
                    break;
                case "wb-select":
                    G(b.id)
            }
            return !0
        }), v.on(t, o, function (b) {
            var d, f, g, j, k, l, m, o, p = b.which,
                q = b.currentTarget,
                r = q.className,
                s = e.space;
            return b.ctrlKey || b.altKey || b.metaKey || p && 1 !== p && 13 !== p && 27 !== p && 32 !== p && !(p > 36 && 41 > p) || (b.preventDefault(), b.stopPropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0, d = a(q), f = d.closest(i), g = f[0].id, m = f.hasClass("playing"), o = -1 !== r.indexOf("plypause"), l = f.data(h), l.ctime = 0, f.data(h, l), (m && p || o && !(p > 36 && 41 > p)) && (m ? c.remove("#" + g + i) : c.add("#" + g + i), f.toggleClass("playing"), m = !m, k = m ? e.pause : e.play, j = f.find("a.plypause")[0], j.setAttribute("title", k), j.innerHTML = "<span class='glyphicon glyphicon-" + (m ? "pause" : "play") + "'></span> <span>" + k + "</span><span class='wb-inv'>" + s + e.hyphen + s + (m ? e.rotStop : e.rotStart) + "</span>"), p > 36 ? (H(f, 39 > p ? -1 : 1), f.find("> [role=tablist] .active a").trigger(n)) : 27 !== p && ("tab" === q.getAttribute("role") ? ("true" !== q.getAttribute("aria-selected") && E(f, d), (13 === p || 32 === p) && f.find(q.getAttribute("href")).trigger(n)) : o || H(f, -1 !== r.indexOf("prv") ? -1 : 1))), !0
        }), v.on(t, i + " [role=tabpanel]", function (b) {
            var c, d = b.currentTarget,
                e = b.which;
            b.stopPropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0, b.ctrlKey && 38 === b.which ? f ? a(d).prev().trigger(n) : a(d).closest(i).find("[href$='#" + d.id + "']").trigger(n) : e && 1 !== e && 27 !== e || (c = a(b.currentTarget).closest(i), c.hasClass("playing") && c.find(".plypause").trigger("click"))
        }), v.on("click", i + " [role=tabpanel] a", function (b) {
            var d, e, f, g = b.currentTarget,
                h = g.getAttribute("href"),
                i = b.which;
            i && 1 !== i || "#" !== h.charAt(0) || (d = a(g).closest(".tabpanels"), e = d.children("#" + c.jqEscape(h.substring(1))), 0 !== e.length && (b.preventDefault(), f = e.children("summary"), 0 !== f.length && "true" !== f.attr("aria-hidden") ? f.trigger("click") : d.parent().find(h + "-lnk").trigger("click")))
        }), v.on(c.resizeEvents, I), v.on(t, i + " > .tabpanels > details > summary", function (b) {
            var c, d, e, f = b.which,
                g = b.currentTarget.parentNode;
            if (!(b.ctrlKey || b.altKey || b.metaKey || f && 1 !== f && 13 !== f && 32 !== f)) {
                if (d = a(g.parentNode.parentNode), c = a(g), e = d.data(h).settings, !e.ignoreSession) try {
                    sessionStorage.setItem(u + d.attr("id") + s, g.id)
                } catch (i) {}
                e.updateHash && C(g), c.attr("open") || d.trigger(m, [c])
            }
        }), v.on("click", ".wb-tabs-ext", function (a) {
            var b = a.which;
            b && 1 !== b || (a.preventDefault(), G(a.currentTarget.getAttribute("href").substring(1)))
        }), c.add(i)
    }(jQuery, window, wb),
    function (a, b, c, d) {
        "use strict";
        var e = "wb-txthl",
            f = "." + e,
            g = "wb-init" + f,
            h = d.doc,
            i = function (b) {
                var c, g, h = d.init(b, e, f),
                    i = d.pageUrlParts.params;
                if (h) {
                    if (b.txthl ? c = a.isArray(b.txthl) ? b.txthl.join("|") : b.txthl : i && i.txthl && (c = decodeURIComponent(d.pageUrlParts.params.txthl.replace(/^\s+|\s+$|\|+|\"|\(|\)/g, "").replace(/\++/g, "|"))), c) {
                        var j = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#039;"
                        };
                        c = c.replace(/[&<>"']/g, function (a) {
                            return j[a]
                        }), c = "(?=([^>]*<))([\\s'])?(" + c + ")(?!>)", g = h.innerHTML.replace(new RegExp(c, "gi"), function (a, b, c, d) {
                            return (c ? c : "") + "<mark class='txthl'>" + d + "</mark>"
                        }), h.innerHTML = g
                    }
                    d.ready(a(h), e)
                }
            };
        h.on("timerpoke.wb " + g, f, i), d.add(f)
    }(jQuery, window, document, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-toggle",
            e = "." + d,
            f = ".tgl-panel",
            g = ".tgl-tab",
            h = "wb-init" + e,
            i = "toggle" + e,
            j = "toggled" + e,
            k = "setfocus.wb",
            l = {},
            m = c.doc,
            n = c.win,
            o = {
                "stateOn": "on",
                "stateOff": "off"
            },
            p = function (b) {
                var f, g, h, i = c.init(b, d, e, !0);
                i && (f = a(i), g = a.extend({}, o, f.data("toggle")), f.data("toggle", g), q(i, g), g.persist && (h = r(f, g)), g.print && s(f, g), !h && g.state && y(f, g, g.state), c.ready(f, d))
            },
            q = function (a, b) {
                var d, e, h, i, j, k, l, m, n, o = "",
                    p = !1;
                if (null != b.group && null != b.parent) {
                    if (j = document.querySelector(b.parent), "tablist" !== j.getAttribute("role")) {
                        for ((-1 === j.className.indexOf("wb-tabs") || -1 !== document.documentElement.className.indexOf("smallview")) && j.setAttribute("role", "tablist"), i = j.querySelectorAll(b.group), k = j.querySelectorAll(b.group + " " + g), d = 0, e = i.length; d !== e; d += 1) h = i[d], l = k[d], m = h.querySelector(f), n = "details" === h.nodeName.toLowerCase() ? !!h.getAttribute("open") : (" " + l.className + " ").indexOf(" " + b.stateOn + " "), n && (p = !0), l.getAttribute("id") || l.setAttribute("id", c.getId()), l.setAttribute("role", "tab"), l.setAttribute("aria-selected", n), l.setAttribute("tabindex", n ? "0" : "-1"), l.setAttribute("aria-posinset", d + 1), l.setAttribute("aria-setsize", e), m.setAttribute("role", "tabpanel"), m.setAttribute("aria-labelledby", l.getAttribute("id")), m.setAttribute("aria-expanded", n), m.setAttribute("aria-hidden", !n);
                        p || k[0].setAttribute("tabindex", "0")
                    }
                } else {
                    for (i = w(a, b), d = 0, e = i.length; d !== e; d += 1) h = i[d], h.id || (h.id = c.getId()), o += h.id + " ";
                    a.setAttribute("aria-controls", o.slice(0, -1))
                }
            },
            r = function (b, c) {
                var e, f = b[0];
                return c.persist = "session" === c.persist ? sessionStorage : localStorage, c.persistKey = d + (c.group ? c.group : "") + f.id, e = c.persist.getItem(c.persistKey), e && b.trigger(i, a.extend({}, c, {
                    "type": e
                })), e
            },
            s = function (c, d) {
                var e, f = "beforeprint";
                n.on(f, function () {
                    c.trigger(i, a.extend({}, d, {
                        "type": d.print
                    }))
                }), b.matchMedia && (e = b.matchMedia("print"), e.addListener && e.addListener(function (a) {
                    a.matches && n.trigger(f)
                }))
            },
            t = function (b) {
                var c = a(b.currentTarget);
                c.trigger(i, c.data("toggle")), b.preventDefault(), c.trigger(k)
            },
            u = function (b, c) {
                if (b.namespace === d) {
                    var e, f, h, i = !!c.group,
                        k = !!c.persist,
                        l = i && !!c.parent,
                        m = b.currentTarget,
                        n = a(m),
                        o = x(n, c),
                        p = o === c.stateOff,
                        q = p ? c.stateOn : c.stateOff,
                        r = l ? n.parent(c.group) : w(m, c);
                    if (i && (e = a.extend({}, c, {
                            "selector": c.group
                        }), h = w(m, e), y(l ? a(c.parent).find(g) : h, e, c.stateOff), h.wb("toggle", c.stateOff, c.stateOn), h.trigger(j, {
                            "isOn": !1,
                            "isTablist": l,
                            "elms": h
                        }), k))
                        for (f in c.persist) 0 === f.indexOf(d + c.group) && c.persist.removeItem(f);
                    if (y(l ? n : r, c, q), r.wb("toggle", q, o), r.trigger(j, {
                            "isOn": p,
                            "isTablist": l,
                            "elms": r
                        }), i && r.find("summary").attr({
                            "tabindex": "0"
                        }), k) try {
                        c.persist.setItem(c.persistKey, q)
                    } catch (s) {}
                }
            },
            v = function (b, c) {
                if (b.namespace === d && b.target === b.currentTarget) {
                    var e, h = c.isOn,
                        i = c.elms,
                        j = a(this),
                        k = j.is("summary") ? j.parent() : j;
                    b.stopPropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0, k.prop("open", h), c.isTablist && (i.find(g).attr({
                        "aria-selected": h,
                        "tabindex": h ? "0" : "-1"
                    }), i.find(f).attr({
                        "aria-hidden": !h,
                        "aria-expanded": h
                    }), h && 1 === i.length && (e = i.offset().top, e < n.scrollTop() && n.scrollTop(e)))
                }
            },
            w = function (b, c) {
                var d = c.selector || b,
                    e = c.parent || null;
                return null !== e ? a(e).find(d) : a(d)
            },
            x = function (a, b) {
                var c = b.parent,
                    e = b.selector,
                    f = b.type;
                return f ? "on" === f ? b.stateOff : b.stateOn : "summary" === a[0].nodeName.toLowerCase() ? a.parent().attr("open") ? b.stateOn : b.stateOff : e ? l.hasOwnProperty(e) ? l[e].hasOwnProperty(c) ? l[e][c] : l[e].all : b.stateOff : a.data(d + "-state") || b.stateOff
            },
            y = function (a, b, c) {
                var e, f = b.parent,
                    g = b.selector,
                    h = l[g];
                if (g)
                    if (h || (h = {
                            "all": b.stateOff
                        }, l[g] = h), f) h[f] = c;
                    else
                        for (e in h) h.hasOwnProperty(e) && (h[e] = c);
                a.data(d + "-state", c)
            };
        m.on("timerpoke.wb " + h + " " + i + " click", e, function (a, b) {
            var c = a.type;
            switch (c) {
                case "click":
                    t(a);
                    break;
                case "toggle":
                    u(a, b);
                    break;
                case "timerpoke":
                case "wb-init":
                    p(a)
            }
        }), m.on(j, "summary, details", v), m.on("keydown", g, function (b) {
            var c, d, e, f, g, h, i = b.which;
            if (!b.ctrlKey && i > 34 && 41 > i) {
                switch (b.preventDefault(), d = a(b.currentTarget), c = d.data("toggle"), e = m.find(c.parent), f = e.find(c.group), h = f.index(d.parent()), i) {
                    case 35:
                        g = f.last();
                        break;
                    case 36:
                        g = f.first();
                        break;
                    case 37:
                    case 38:
                        g = 0 === h ? f.last() : f.eq(h - 1);
                        break;
                    case 39:
                    case 40:
                        g = h === f.length - 1 ? f.first() : f.eq(h + 1)
                }
                g.children("summary").trigger(k)
            }
        }), m.on("keydown", f, function (b) {
            b.ctrlKey && 38 === b.which && a(b.currentTarget).prev().trigger(k)
        }), c.add(e)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-twitter",
            e = "." + d,
            f = "wb-init" + e,
            g = c.doc,
            h = function (b) {
                var f = c.init(b, d, e),
                    g = c.pageUrlParts.protocol;
                f && Modernizr.load({
                    "load": (-1 === g.indexOf("http") ? "http:" : g) + "//platform.twitter.com/widgets.js",
                    "complete": function () {
                        c.ready(a(f), d)
                    }
                })
            };
        g.on("timerpoke.wb " + f, e, h), c.add(e)
    }(jQuery, window, wb),
    function (a, b, c) {
        "use strict";
        var d = "wb-disable",
            e = "#wb-tphp",
            f = c.doc,
            g = function (g) {
                var h, i, j = c.init(g, d, e, !0),
                    k = "?",
                    l = c.html,
                    m = c.i18n,
                    n = c.pageUrlParts,
                    o = m("disable-notice-h"),
                    p = m("disable-notice"),
                    q = "<section",
                    r = "</a>.</p></section>";
                if (j) {
                    h = document.createElement("li"), h.className = "wb-slc";
                    for (i in n.params) i && n.params.hasOwnProperty(i) && "wbdisable" !== i && (k += i + "=" + n.params[i] + "&#38;");
                    try {
                        if (c.isDisabled || c.ie && c.ielt7) {
                            l.addClass("wb-disable");
                            try {
                                localStorage.setItem("wbdisable", "true")
                            } catch (s) {}
                            return q = q + " class='alert alert-warning text-center'><h2>" + o + "</h2><p>" + p + "</p><p><a rel='alternate' property='significantLink' href='" + k + "wbdisable=false'>" + m("wb-enable") + r, a(j).after(q), !0
                        }
                        l.addClass("wb-enable"), localStorage && localStorage.setItem("wbdisable", "false");
                        var t = b.location.href.replace("wbdisable=false", "").replace("?#", "#");
                        t.indexOf("?") === t.length - 1 && (t = t.replace("?", "")), b.history.replaceState("", "", t)
                    } catch (u) {}
                    h.innerHTML = "<a class='wb-sl' rel='alternate' href='" + k + "wbdisable=true'>" + m("wb-disable") + "</a>", j.appendChild(h), c.ready(f, d)
                }
            };
        f.on("timerpoke.wb", e, g), c.add(e)
    }(jQuery, window, wb),
    function (a, b) {
        "use strict";
        var c, d = b.doc,
            e = b.win,
            f = "click vclick",
            g = "setfocus.wb",
            h = "a[href]",
            i = function () {
                var d = b.pageUrlParts.hash;
                d && 0 !== (c = a("#" + b.jqEscape(d.substring(1)))).length && c.trigger(g)
            };
        d.on(g, function (b) {
            if ("wb" === b.namespace) {
                var c, d, e, f, g = a(b.target),
                    h = g.not("summary").parents("details, [role='tabpanel']");
                if (0 !== h.length)
                    for (h.not("[open]").children("summary").trigger("click"), c = h.filter("[aria-hidden='true']"), e = c.length, f = 0; f !== e; f += 1) d = c.eq(f), d.closest(".wb-tabs").find("#" + d.attr("aria-labelledby")).trigger("click");
                g.filter(":not([tabindex], a[href], button, input, textarea, select)").attr("tabindex", "-1"), setTimeout(function () {
                    g.trigger("focus");
                    var b = a(".wb-bar-t[aria-hidden=false]");
                    return 0 !== b.length && (document.documentElement.scrollTop -= b.outerHeight()), g
                }, 100)
            }
        }), d.on("wb-ready.wb", i), e.on("hashchange", function () {
            b.pageUrlParts.hash = window.location.hash, b.ignoreHashChange || i()
        }), d.on(f, h, function (d) {
            var e = d.currentTarget.getAttribute("href");
            "#" !== e.charAt(0) || d.isDefaultPrevented() || 0 === (c = a("#" + b.jqEscape(e.substring(1)))).length || (b.ignoreHashChange = !0, c.trigger(g))
        })
    }(jQuery, wb),
    function (a, b, c, d) {
        "use strict";
        var e, f, g = "wb-zebra",
            h = "." + g,
            i = g + "-col-hover",
            j = "." + i + " td, " + i + " th",
            k = "wb-init" + h,
            l = "passiveparse.wb-tableparser",
            m = "parsecomplete.wb-tableparser",
            n = d.doc,
            o = 0,
            p = function (b) {
                function c(b, c) {
                    var d, e;
                    for (d = 0, e = b.length; d !== e; d += 1) a(b[d].elem).addClass(c)
                }
                var e, f, h, i = b.data().tblparser;
                if (i.keycell && c(i.keycell, "wb-cell-key"), i.desccell && c(i.desccell, "wb-cell-desc"), i.layoutCell && c(i.layoutCell, "wb-cell-layout"), i.lstrowgroup)
                    for (e = 0, f = i.lstrowgroup.length; e !== f; e += 1) h = i.lstrowgroup[e], (3 === h.type || 3 === h.row[0].type) && a(h.elem).addClass("wb-group-summary");
                if (i.colgroup)
                    for (e = 0, f = i.colgroup.length; e !== f; e += 1) h = i.colgroup[e], 3 === h.type && a(h.elem).addClass("wb-group-summary");
                d.ready(b, g)
            },
            q = function (b) {
                var c, i = d.init(b, g, h),
                    j = ["site!deps/tableparser" + d.getMode() + ".js"];
                i && (c = i.id, c || (c = g + "-id-" + o, o += 1, i.id = c), f || (e = d.i18n, f = {
                    "tableMention": e("hyphen") + e("tbl-txt"),
                    "tableFollowing": e("hyphen") + e("tbl-dtls")
                }), Modernizr.load({
                    "load": j,
                    "complete": function () {
                        a("#" + c).trigger(l)
                    }
                }))
            };
        n.on("timerpoke.wb " + k + " " + m, h, function (b) {
            var c = b.target;
            switch (b.type) {
                case "timerpoke":
                case "wb-init":
                    q(b);
                    break;
                case "parsecomplete":
                    b.currentTarget === c && p(a(c))
            }
            return !0
        }), n.on("mouseenter focusin", j, function (b) {
            var c = a(b.currentTarget).data().tblparser;
            c.col && c.col.elem && a(c.col.elem).addClass("table-hover")
        }), n.on("mouseleave focusout", j, function (b) {
            var c = a(b.currentTarget).data().tblparser;
            c.col && c.col.elem && a(c.col.elem).removeClass("table-hover")
        }), d.add(h)
    }(jQuery, window, document, wb);
//# sourceMappingURL=wet-boew.min.js.map