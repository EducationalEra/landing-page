/**
 * Created by zzzevolod on 04.05.2020.
 */
(function() {
        var t = "1.3.1"
            , i = {}
            , e = {};
        this.$ipsp = function(t) {
            return e[t] ? e[t] : e[t] = arguments.callee.get(t)
        }
            ,
            this.$ipsp.get = function(t) {
                if (!i[t])
                    throw Error("module is undefined");
                return new i[t]
            }
            ,
            this.$ipsp.add = function(t, e) {
                if (i[t])
                    throw Error("module already added");
                i[t] = e
            }
            ,
            this.$ipsp.version = function(i) {
                return t = i,
                    this
            }
            ,
            this.$ipsp._debug_ = function() {
                return Number(document.cookie.replace(/(?:(?:^|.*;\s*)ipsp_debug\s*\=\s*([^;]*).*$)|^.*$/, "$1"))
            }(),
            this.$ipsp.debug = function(t) {
                document.cookie = ["ipsp_debug", Number(t)].join("=")
            }
            ,
            this.$ipsp.log = function() {
                this._debug_ && "console"in window && console.log.apply(console, arguments)
            }
    }
).call(window || {}),
    function() {
        this.$oplata = this.$ipsp
    }
        .call(window || {}),
    function() {
        this.addListener = function(t, i, e) {
            if (!t)
                return !1;
            t.addEventListener ? t.addEventListener(i, e) : t.attachEvent && t.attachEvent("on" + i, e)
        }
    }(),
    function() {
        addListener(window, "error", function(t) {
            $ipsp.log(t.message, t.filename, t.lineno, t.colno)
        })
    }(),
    function() {
        this.camelCase = function(t) {
            return (t || "").toLowerCase().replace(/(\b|-)\w/g, function(t) {
                return t.toUpperCase().replace(/-/, "")
            })
        }
    }
        .call(window || {}),
    function() {
        var t = function(t) {
            return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        };
        this.isObject = function(i) {
            return "object" === t(i)
        }
            ,
            this.isRegexp = function(i) {
                return "regexp" === t(i)
            }
            ,
            this.isArguments = function(i) {
                return "arguments" === t(i)
            }
            ,
            this.isError = function(i) {
                return "error" === t(i)
            }
            ,
            this.isArray = function(i) {
                return "array" === t(i)
            }
            ,
            this.isDate = function(i) {
                return "date" === t(i)
            }
            ,
            this.isString = function(i) {
                return "string" === t(i)
            }
            ,
            this.isNumber = function(i) {
                return "number" === t(i)
            }
            ,
            this.isBoolean = function(i) {
                return "boolean" === t(i)
            }
            ,
            this.isElement = function(t) {
                return t && 1 === t.nodeType
            }
            ,
            this.getType = t
    }
        .call(window || {}),
    function() {
        this.popupBlocker = function(t) {
            var i = !1;
            try {
                i = void 0 === t || (!t || !t.closed) && (!t || !t.test)
            } catch (t) {}
            return i
        }
    }
        .call(window || {}),
    function() {
        this.prepareFormData = function(t, i, e, n) {
            var o, s = document.createElement("form");
            s.action = t,
                s.target = e || "_self",
                s.method = n || "POST";
            for (var r in i)
                i.hasOwnProperty(r) && (o = document.createElement("input"),
                    o.type = "hidden",
                    o.name = r,
                    o.value = i[r],
                    s.appendChild(o));
            return s.style.display = "none",
                s
        }
    }
        .call(window || {}),
    function() {
        var t = !1
            , i = /xyz/.test(function() {
            xyz
        }) ? /\b_super\b/ : /.*/;
        this.Class = function() {
            if (!(this instanceof arguments.callee))
                throw Error('use Class with "extend" method')
        }
            ,
            this.Class.prototype = {
                init: function() {}
            },
            this.Class.extend = function(e) {
                function n(i) {
                    t || this.init.apply(this, arguments)
                }
                var o, s, r = this.prototype;
                t = !0,
                    s = new this,
                    t = !1;
                for (o in e)
                    e.hasOwnProperty(o) && ("function" == typeof r[o] && "function" == typeof e[o] && i.test(e[o]) ? s[o] = function(t, i) {
                            return function() {
                                var e, n = this._super;
                                return this._super = r[t],
                                    e = i.apply(this, arguments),
                                    this._super = n,
                                    e
                            }
                        }(o, e[o]) : s[o] = e[o]);
                return n.prototype = s,
                    n.prototype.constructor = n,
                    n.extend = arguments.callee,
                    n
            }
    }
        .call(window || {}),
    function() {
        var t = {}
            , i = -1;
        this.publish = function(i, e) {
            if (!t[i])
                return !1;
            var n, o = t[i], s = o ? o.length : 0, r = i.split("/").pop();
            for (n = 0; n < s; n++)
                o[n].func(e, r);
            return this
        }
            ,
            this.subscribe = function(e, n) {
                t[e] || (t[e] = []);
                var o = (++i).toString();
                return t[e].push({
                    token: o,
                    func: n
                }),
                    o
            }
            ,
            this.unsubscribe = function(i) {
                for (var e in t)
                    if (t.hasOwnProperty(e) && t[e])
                        for (var n = 0, o = t[e].length; n < o; n++)
                            if (t[e][n].token === i)
                                return t[e].splice(n, 1),
                                    i;
                return this
            }
    }
        .call(window.pubsub = {}),
    function(t) {
        function i(t, i) {
            var e = !1
                , n = !0
                , o = t.document
                , s = o.documentElement
                , r = o.addEventListener
                , a = r ? "addEventListener" : "attachEvent"
                , h = r ? "removeEventListener" : "detachEvent"
                , c = r ? "" : "on"
                , u = function(n) {
                "readystatechange" === n.type && "complete" !== o.readyState || (("load" === n.type ? t : o)[h](c + n.type, u, !1),
                !e && (e = !0) && i.call(t, n.type || n))
            }
                , d = function() {
                try {
                    s.doScroll("left")
                } catch (t) {
                    return void setTimeout(d, 50)
                }
                u("poll")
            };
            if ("complete" === o.readyState)
                i.call(t, "lazy");
            else {
                if (!r && s.doScroll) {
                    try {
                        n = !t.frameElement
                    } catch (t) {}
                    n && d()
                }
                o[a](c + "DOMContentLoaded", u, !1),
                    o[a](c + "readystatechange", u, !1),
                    t[a](c + "load", u, !1)
            }
        }
        t.domReady = function(e) {
            i(t, e)
        }
    }(window),
    function() {
        this.Module = Class.extend({
            find: function(t) {
                return isElement(t) ? t : document.querySelector(t) || null
            },
            findAll: function(t) {
                return document.querySelectorAll(t)
            },
            extend: function() {
                var t, i, e, n = arguments[0], o = Array.prototype.slice.call(arguments, 1);
                for (t = 0; t < o.length; t++)
                    if (null !== (e = o[t]))
                        for (i in e)
                            e.hasOwnProperty(i) && (n[i] = e[i]);
                return n
            },
            proxy: function(t, i) {
                var i = i || this;
                return function() {
                    return t.apply(i, Array.prototype.slice.call(arguments))
                }
            },
            addCss: function(t, i) {
                if (!t)
                    return !1;
                for (var e in i)
                    i.hasOwnProperty(e) && (t.style[e] = i[e])
            },
            fireEvent: function(t, i) {
                var e;
                if (t)
                    return document.createEventObject ? (e = document.createEventObject(),
                            t.fireEvent("on" + i, e)) : (e = document.createEvent("HTMLEvents"),
                            e.initEvent(i, !0, !0),
                            !t.dispatchEvent(e))
            },
            addEvent: function(t, i, e) {
                return t && (t.addEventListener ? t.addEventListener(i, e, !1) : t.attachEvent("on" + i, e)),
                    this
            },
            removeEvent: function(t, i, e) {
                return t && (t.removeEventListener ? t.removeEventListener(i, e, !1) : t.detachEvent("on" + i, e)),
                    this
            },
            onDomReady: function(t) {
                return domReady(this.proxy(t)),
                    this
            },
            addAttr: function(t, i) {
                var e;
                if (!t)
                    return !1;
                for (e in i)
                    i.hasOwnProperty(e) && t.setAttribute(e, i[e])
            },
            scope: function(t) {
                return this.onDomReady(t),
                    this
            },
            print: function() {
                var t, i = [];
                for (t in this)
                    i.push([[this.name, t].join("."), getType(this[t])].join(" : "));
                return i.join("\n")
            }
        })
    }
        .call(window || {}),
    function() {
        var t = -1;
        this.Connector = Module.extend({
            name: "crossdomain",
            origin: "*",
            init: function() {
                this.addEvent(window, "message", this.proxy(this.route)),
                    this.setName([this.name, ++t, location.host].join("/"))
            },
            setName: function(t) {
                t && (this.name = t)
            },
            getName: function() {
                return this.name
            },
            setTarget: function(t) {
                t && (this.target = t)
            },
            getTarget: function() {
                return this.target || {
                        postMessage: function() {}
                    }
            },
            route: function(t) {
                $ipsp.log("window.message", t);
                var i;
                try {
                    i = JSON.parse(t.data.toString())
                } catch (t) {
                    return !1
                }
                return this.getTarget() === t.source && (!!i.action && ("origin" == i.action && this.setOrigin(i.data.origin),
                        void this.publish(i.action, i.data)))
            },
            getOrigin: function() {
                return "*"
            },
            setOrigin: function(t) {
                this.origin = t || "*"
            },
            action: function(t, i) {
                return pubsub.subscribe([this.name, t].join("/"), i)
            },
            removeAction: function(t) {
                return pubsub.unsubscribe(t),
                    this
            },
            publish: function(t, i) {
                return pubsub.publish([this.name, t].join("/"), i)
            },
            send: function(t, i) {
                this.getTarget().postMessage(JSON.stringify({
                    action: t,
                    data: i
                }), this.getOrigin())
            }
        }),
            this.$ipsp.add("connector", this.Connector)
    }
        .call(window || {}),
    function(t) {
        var i = t.host
            , e = t.protocol
            , n = t.origin
            , o = {
            frameborder: "0",
            allowtransparency: "true",
            allowpaymentrequest: "true"
        }
            , s = {
            zIndex: "9999",
            overflowX: "hidden",
            border: "0",
            display: "none",
            position: "static",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
            width: "100%",
            height: "100%"
        }
            , r = function(t, i) {
            var e;
            if ("redirect" === t.action)
                return void this.loadUrl(t.url);
            "processing" !== t.send_data.order_status && (this.unbind("ready").action("ready", function() {
                this.show()
            }),
            t.send_data && t.url && (e = prepareFormData(t.url, t.send_data),
                this.find("body").appendChild(e),
                e.submit(),
                e.parentNode.removeChild(e)))
        }
            , a = Module.extend({
            name: "$ipsp.checkout",
            version: "1.0",
            iframe: null,
            connector: null,
            client_callback: !1,
            init: function() {
                this.options = {
                    checkout_attr: "href",
                    checkout_url: null,
                    wrapper: "body",
                    styles: {},
                    mobilepay: {},
                    ismodal: !1
                },
                    this.actions = {},
                    this.initConnector(),
                    this.ready()
            },
            config: function(t) {
                return this.extend(this.options, t),
                    this
            },
            setModal: function(t) {
                this.options.ismodal = t,
                    this.onDomReady(function() {
                        this.addCss(this.iframe, {
                            position: !0 === this.options.ismodal ? "fixed" : "static"
                        })
                    })
            },
            setCheckoutWrapper: function(t) {
                this.options.wrapper = t
            },
            setCssStyle: function(t) {
                this.extend(this.options.styles, t)
            },
            setCheckoutBg: function(t) {
                this.onDomReady(function() {
                    this.addCss(this.iframe, {
                        background: t
                    })
                })
            },
            setCheckoutWidth: function(t) {
                return (t >= 0 || "auto" == t) && this.onDomReady(function() {
                    this.addCss(this.iframe, {
                        width: ""
                    }),
                        this.addAttr(this.iframe, {
                            width: t
                        })
                }),
                    this
            },
            width: function(t) {
                return this.setCheckoutWidth(t),
                    this
            },
            setCheckoutHeight: function(t) {
                (t >= 0 || "auto" == t) && this.onDomReady(function() {
                    this.addCss(this.iframe, {
                        height: ""
                    }),
                        this.addAttr(this.iframe, {
                            height: t
                        })
                })
            },
            height: function(t) {
                return this.setCheckoutHeight(t),
                    this
            },
            setCheckoutOrigin: function(t) {
                if (!t)
                    throw Error("url param is required");
                var i = document.createElement("a");
                return i.href = t,
                    this.options.checkout_url = i.origin || [i.protocol, i.host].join("//"),
                    this
            },
            getCheckoutOrigin: function() {
                if (!this.options.checkout_url)
                    throw Error("checkout url is not defined");
                return this.options.checkout_url
            },
            setElementAttr: function(t) {
                this.options.checkout_attr = t
            },
            setClickElement: function(t) {
                this.onDomReady(function() {
                    var i, e = this.findAll(t);
                    for (i = 0; i < e.length; i++)
                        this.addEvent(e[i], "click", this.proxy(function(t) {
                            t.preventDefault(),
                                this.loadUrl(t.target.getAttribute(this.options.checkout_attr))
                        }))
                })
            },
            loadUrl: function(t, i) {
                if (!t)
                    throw Error("checkout url is not defined");
                i && (t = t.concat("&autoredirect=").concat(i)),
                    this.onDomReady(function() {
                        if (!this.iframe)
                            throw Error("checkout iframe is null or undefined");
                        this.iframe.src = t,
                            this.find(this.options.wrapper).appendChild(this.iframe),
                            this.loadConnector(this.iframe)
                    })
            },
            getCurrentOrigin: function() {
                return n || [e, i].join("//")
            },
            show: function(t) {
                return !0 === this.options.ismodal && (this.addCss(this.find("body"), {
                    overflow: "hidden"
                }),
                    this.addCss(this.find("html"), {
                        overflow: "hidden"
                    })),
                    this.addCss(this.iframe, {
                        display: "block"
                    }),
                    this.iframe.focus(),
                !0 !== t && this.connector.publish("show", {}),
                    this
            },
            hide: function(t) {
                return !0 === this.options.ismodal && (this.addCss(this.find("body"), {
                    overflow: ""
                }),
                    this.addCss(this.find("html"), {
                        overflow: ""
                    })),
                    this.addCss(this.iframe, {
                        display: "none"
                    }),
                !0 !== t && this.connector.publish("hide", {}),
                    this
            },
            send: function(t, i) {
                return this.connector.send(t, i),
                    this
            },
            publish: function(t, i) {
                this.connector.publish(t, i)
            },
            action: function(t, i) {
                var e = this.connector.action(t, this.proxy(i, this));
                return isArray(this.actions[t]) || (this.actions[t] = []),
                    this.actions[t].push(e),
                    e
            },
            removeAction: function(t) {
                return this.connector.removeAction(t),
                    this
            },
            unbind: function(t) {
                for (var i = this.actions[t], e = 0; e < i.length; e++)
                    this.removeAction(i[e]);
                return this
            },
            ready: function() {
                return this.onDomReady(this.initFrame),
                    this
            },
            initFrame: function() {
                if (this.iframe)
                    throw Error("iframe already initialized");
                this.iframe = document.createElement("iframe"),
                    this.addCss(this.iframe, s),
                    this.addAttr(this.iframe, o)
            },
            loadConnector: function(t) {
                this.setCheckoutOrigin(t.src),
                    this.connector.setTarget(t.contentWindow),
                    this.connector.setOrigin(this.getCheckoutOrigin())
            },
            initConnector: function() {
                this.connector = new Connector,
                    this.mobilepay = new MobilePay,
                    this.mobilepay.setConnector(this.connector),
                    this.action("load", function(t) {
                        this.send("origin", {
                            origin: this.getCurrentOrigin(),
                            styles: this.options.styles
                        })
                    }),
                    this.action("cancel", function(t) {
                        this.options.ismodal && this.hide()
                    }),
                    this.action("locale", function(t) {
                        this.locale = t
                    }),
                    this.action("ready", function(t) {
                        this.show()
                    }),
                    this.action("3dsform", function(t) {
                        this.acsCallback(t)
                    }),
                    this.action("mobilePay", function(t) {
                        this.mobilepay.config(this.options.mobilepay),
                            this.mobilepay.setup(t)
                    }),
                    this.action("callback", this.callback)
            },
            callback: function(t, i) {
                this.send(i, t)
            },
            setAcsCallback: function(t) {
                this.acsCallback = t
            },
            addCallback: function(t) {
                return t || (t = r),
                this.client_callback || (this.unbind("callback"),
                    this.client_callback = !0),
                    this.action("callback", t),
                    this.action("decline", t),
                    this
            },
            acsCallback: function(t) {
                var i = this
                    , e = $ipsp.get("acsframe")
                    , n = $ipsp.get("popup");
                n.config({
                    width: "700px"
                }),
                    n.close = this.proxy(function() {
                        this.send("cancel")
                    }),
                    this.action("close_submit3ds", function(t) {
                        e.send("close")
                    }),
                    n.title.innerHTML = this.locale.HELP_3DS,
                    this.addEvent(n.title.querySelector("a"), "click", function() {
                        e.submitHelp()
                    }),
                    e.scope(function() {
                        this.setData(t),
                            this.setLocale(i.locale),
                            this.setWrapper(n.content),
                            this.action("close", function() {
                                n.hide()
                            }),
                            this.action("load", function() {
                                n.show()
                            }),
                            this.action("response", function(t) {
                                i.send("cancel"),
                                    i.publish("callback", t),
                                    n.hide()
                            }),
                            this.submit()
                    })
            },
            submit3ds: function(t, i) {
                return $ipsp.get("acssubmit").scope(function() {
                    this.setData(t),
                        this.setWrapper(i)
                })
            }
        });
        this.__DEFAULTCALLBACK__ = r,
            this.Checkout = a,
            this.$ipsp.add("checkout", a)
    }
        .call(window || {}, location || {}),
    function() {
        var t = "https"
            , i = "api.fondy.eu"
            , e = Class.extend({
            init: function(t) {
                this.initialize(t)
            },
            initialize: function(t) {
                this.setPosition(t.p),
                    this.setName(t.name),
                    this.setValue(t.value),
                    this.setLabel(t.label),
                    this.setPlaceholder(t.placeholder),
                    this.setRequired(t.required),
                    this.setValid(t.valid),
                    this.setHidden(t.hidden),
                    this.setReadonly(t.readonly)
            },
            setPosition: function(t) {
                return this.p = t || 0,
                    this
            },
            setName: function(t) {
                return isString(t) || console.error("field property `name` is not a string", this),
                    this.name = t,
                    this
            },
            setHidden: function(t) {
                return t && !isBoolean(t) && console.error("field property `hidden` is not an boolean", this),
                    this.hidden = t,
                    this
            },
            setPlaceholder: function(t) {
                t && !isString(t) && console.error("field property `placeholder` is not a string", this),
                    this.placeholder = t
            },
            setValue: function(t) {
                return t && !isString(t) && console.error("field property `value` is not a string", this),
                    this.value = t,
                    this
            },
            setLabel: function(t) {
                return isString(t) || console.error("field property `label` is not a string", this),
                    this.label = t,
                    this
            },
            setValid: function(t) {
                var i, e = [];
                t && !isObject(t) && console.error("field property `valid` is not an object", this);
                for (i in t)
                    t.hasOwnProperty(i) && e.push([i, t[i]].join(":"));
                return this.valid = e.concat(this.valid).join(";"),
                    this
            },
            setRequired: function(t) {
                this.valid = "",
                t && isBoolean(t) && (this.valid = "required")
            },
            setReadonly: function(t) {
                return t && !isBoolean(t) && console.error("field property `readonly` is not an boolean", this),
                    this.readonly = t,
                    this
            },
            getData: function() {
                var t, i = {};
                for (t in this)
                    this.hasOwnProperty(t) && (i[t] = this[t]);
                return i
            }
        })
            , n = Class.extend({
            init: function() {
                this.data = {
                    merchant_id: null,
                    currency: null,
                    fields: [],
                    params: {}
                }
            },
            validate: function() {
                var t, i = [], e = this.data;
                for (t in e)
                    e.hasOwnProperty(t) && null === e[t] && i.push(["data param -", t, "is incorrect"].join(" "));
                return i
            },
            setProtocol: function(i) {
                i && i.match(/https?/) && (t = i)
            },
            setHost: function(t) {
                t && (i = t)
            },
            getButton: function(t, i, e) {
                var n = document.createElement("a");
                return n.href = this.getUrl(),
                    n.className = i || "",
                    n.innerHTML = t,
                    n.target = e,
                    n
            },
            getUrl: function() {
                var e;
                return (e = this.validate()).length > 0 ? console.error(e.join("\n")) : t.concat("://").concat(i).concat("/api/checkout?button=").concat(encodeURIComponent(JSON.stringify(this.data)))
            },
            setMerchantId: function(t) {
                isNumber(t) || console.error("parameter `merchant_id` is required and must be integer"),
                    this.data.merchant_id = t
            },
            setAmount: function(t, i, e) {
                isNumber(parseInt(t)) && (this.data.amount = t),
                isString(i) && (this.data.currency = i),
                isBoolean(e) && !0 === e && (this.data.amount_readonly = e)
            },
            setResponseUrl: function(t) {
                return isString(t) || console.error("parameter `url` is required and must be string"),
                    this.addParam("response_url", t),
                    this
            },
            addField: function(t) {
                return isObject(t) || console.error("parameter field is required"),
                    this.data.fields.push(new e(t)),
                    this
            },
            addParam: function(t, i) {
                return this.data.params[t] = i,
                    this
            },
            setRecurringReadonly: function(t) {
                this.data.recurring_readonly = Boolean(t)
            },
            setRecurringState: function(t) {
                this.data.recurring_state = Boolean(t)
            },
            addRecurringData: function(t) {
                this.data.params.subscription = "y",
                    this.data.recurring = {
                        period: t.period || "month",
                        every: t.every || 1,
                        start_time: t.start_time || "",
                        end_time: t.end_time || this.getDefaultEndDate(),
                        amount: this.data.amount || "",
                        custom_period: t.period && t.every
                    }
            },
            calcStartDate: function(t) {
                return t.period && t.every ? this.getFuturePeriod(t.period, t.every) : null
            },
            getFuturePeriod: function(t, i) {
                var e = new Date;
                switch (t) {
                    case "day":
                        e.setDate(e.getDate() + 1 * i);
                        break;
                    case "week":
                        e.setDate(e.getDate() + 7 * i);
                        break;
                    case "month":
                        e.setMonth(e.getMonth() + 1 * i);
                        break;
                    case "year":
                        e.setFullYear(e.getFullYear() + 1 * i)
                }
                return this.getDateFormat(e)
            },
            getDefaultStartDate: function(t, i) {
                var e = new Date;
                return e.setMonth(e.getMonth() + 1),
                    this.getDateFormat(e)
            },
            getDefaultEndDate: function() {
                var t = new Date;
                return t.setFullYear(t.getFullYear() + 5),
                    this.getDateFormat(t)
            },
            getDateFormat: function(t) {
                return t.getFullYear() + "-" + ("0" + (t.getMonth() + 1)).slice(-2) + "-" + ("0" + t.getDate()).slice(-2)
            }
        });
        this.$ipsp.add("button", n)
    }
        .call(window || {}),
    function() {
        var t = {
            frameborder: "0",
            allowtransparency: "true",
            scrolling: "no"
        }
            , i = Module.extend({
            name: "$ipsp.frame3ds",
            frame: null,
            form: null,
            wrapper: "body",
            isloaded: !1,
            options: {
                url: "",
                data: {},
                wrapper: {}
            },
            init: function() {
                this.name = [this.name, Math.round(1e9 * Math.random())].join(""),
                    this.initFrame(),
                    this.initEvents(),
                    this.initConnector()
            },
            action: function(t, i) {
                return pubsub.subscribe([this.name, t].join(":"), i)
            },
            send: function(t, i) {
                return pubsub.publish([this.name, t].join(":"), i || {}),
                    this
            },
            removeAction: function(t) {
                return pubsub.unsubscribe(t),
                    this
            },
            setLocale: function(t) {
                this.locale = t
            },
            initEvents: function() {
                this.addEvent(this.iframe, "load", this.proxy(function() {
                    this.loadConnector(),
                        this.send("load", {}),
                        this.addCss(this.iframe, {
                            height: "720px"
                        })
                }))
            },
            initFrame: function(i) {
                this.iframe = this.find(i) || document.createElement("iframe"),
                    this.iframe.name = this.name,
                    this.iframe.id = this.name,
                    this.addAttr(this.iframe, t),
                    this.addCss(this.iframe, {
                        width: "100%",
                        height: "100%"
                    })
            },
            initConnector: function() {
                this.connector = new Connector,
                    this.connector.action("response", this.proxy(function(t, i) {
                        this.send(i, t)
                    }))
            },
            loadConnector: function() {
                this.connector.setTarget(this.iframe.contentWindow)
            },
            setData: function(t) {
                return this.extend(this.options, t),
                    this
            },
            setWrapper: function(t) {
                if (isString(t) ? this.wrapper = this.find(t) : this.wrapper = t,
                        !t)
                    throw Error("acsframe element wrapper is undefined");
                return this
            },
            submitHelp: function() {
                this.form = prepareFormData(this.options.url, this.options.send_data, this.name),
                    this.form.target = "_blank",
                    this.wrapper.appendChild(this.form),
                    this.form.submit()
            },
            submit: function() {
                this.form = prepareFormData(this.options.url, this.options.send_data, this.name),
                    this.wrapper.appendChild(this.iframe),
                    this.wrapper.appendChild(this.form),
                    this.form.submit()
            }
        });
        this.$ipsp.add("acsframe", i)
    }
        .call(window || {}),
    function() {
        var t = Module.extend({
            name: "$ipsp.frame3ds",
            target: "_blank",
            frame: null,
            form: null,
            wrapper: "body",
            isloaded: !1,
            options: {
                url: "",
                data: {},
                wrapper: {}
            },
            init: function() {
                this.name = [this.name, Math.round(1e9 * Math.random())].join(""),
                    this.initEvents()
            },
            action: function(t, i) {
                return pubsub.subscribe([this.name, t].join(":"), i)
            },
            send: function(t, i) {
                return pubsub.publish([this.name, t].join(":"), i || {}),
                    this
            },
            removeAction: function(t) {
                return pubsub.unsubscribe(t),
                    this
            },
            initEvents: function() {
                this.action("close", this.proxy(function() {
                    this.find(this.wrapper).removeChild(this.form)
                }))
            },
            setData: function(t) {
                return this.extend(this.options, t),
                    this
            },
            setWrapper: function(t) {
                if (!t)
                    throw Error("asc submit wrapper element is undefined");
                return isString(t) ? this.wrapper = this.find(t) : isElement(t) && (this.wrapper = t),
                    this
            },
            submit: function() {
                return this.form = prepareFormData(this.options.url, this.options.send_data, this.name),
                    this.wrapper.appendChild(this.form),
                    this.popup = window.open("about:blank", this.name),
                    this.popup && popupBlocker(this.popup) ? this.form.submit() : this.send("blocked3dsPopup", this.options),
                    this
            }
        });
        this.$ipsp.add("acssubmit", t)
    }
        .call(window || {}),
    function() {
        var t = {};
        t.modal = {
            display: "block",
            overflow: "hidden",
            position: "relative",
            background: "#fff",
            zIndex: "99999",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.2)"
        },
            t.title = {
                margin: "0px",
                overflow: "hidden",
                padding: "17px 20px",
                fontFamily: "Arial, Helvetica",
                lineHeight: "14px",
                fontSize: "12px"
            },
            t.button = {
                display: "block",
                float: "right",
                position: "relative",
                fontWeight: "bold",
                fontSize: "48px",
                padding: "0 8px",
                lineHeight: "100%",
                cursor: "pointer"
            },
            t.wrapper = {
                position: "fixed",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                zIndex: "9999",
                display: "none",
                overflowY: "auto",
                background: "rgba(0,0,0,0.1)"
            };
        var i = Module.extend({
            init: function() {
                this.wrapper = this.elem("div", t.wrapper),
                    this.wrapper.className = "oplata_popup_wrapper ipsp_popup_wrapper",
                    this.modal = this.elem("div", t.modal),
                    this.modal.className = "oplata_popup_modal ipsp_popup_modal",
                    this.toolbar = this.elem("div"),
                    this.toolbar.className = "oplata_popup_toolbar ipsp_popup_toolbar",
                    this.title = this.elem("div"),
                    this.title.className = "oplata_popup_title ipsp_popup_title",
                    this.addCss(this.title, t.title),
                    this.closelink = this.elem("a"),
                    this.closelink.className = "oplata_popup_close ipsp_popup_close",
                    this.closelink.innerHTML = "&times",
                    this.addEvent(this.closelink, "click", this.proxy(function(t) {
                        t.preventDefault(),
                            this.hide(),
                            this.close()
                    })),
                    this.addCss(this.closelink, t.button),
                    this.toolbar.appendChild(this.closelink),
                    this.toolbar.appendChild(this.title),
                    this.addCss(this.toolbar, {
                        position: "relative",
                        zIndex: "5",
                        overflow: "hidden"
                    }),
                    this.content = this.elem("div"),
                    this.content.className = "oplata_popup_content",
                    this.addCss(this.content, {
                        position: "relative",
                        zIndex: "2"
                    }),
                    this.modal.appendChild(this.toolbar),
                    this.modal.appendChild(this.content),
                    this.wrapper.appendChild(this.modal),
                    this.find("body").appendChild(this.wrapper)
            },
            elem: function(t, i) {
                var e = document.createElement(t);
                return i && this.addCss(e, i),
                    e
            },
            config: function(t) {
                this.addCss(this.modal, {
                    top: "100px",
                    left: "50%",
                    marginLeft: -parseInt(t.width, 10) / 2 + "px",
                    width: t.width || "auto",
                    height: t.height || "auto"
                })
            },
            show: function() {
                this.addCss(this.wrapper, {
                    display: "block"
                }),
                    this.addCss(this.find("body"), {
                        overflow: "hidden"
                    }),
                    this.addCss(this.find("html"), {
                        overflow: "hidden"
                    })
            },
            hide: function() {
                this.addCss(this.wrapper, {
                    display: "none"
                }),
                    this.addCss(this.find("body"), {
                        overflow: ""
                    }),
                    this.addCss(this.find("html"), {
                        overflow: ""
                    }),
                this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper)
            },
            close: function() {}
        });
        this.$ipsp.add("popup", i)
    }
        .call(window || {}),
    function() {
        this.MobilePay = Module.extend({
            setConnector: function(t) {
                return this.connector = t,
                    this
            },
            config: function(t) {
                this.options = t
            },
            setup: function(t) {
                return this.payment = t,
                    this.check(),
                    this
            },
            check: function() {
                this.request = this.paymentRequest(),
                this.request && this.request.canMakePayment().then(this.proxy(this.toggle)).catch(function(t) {})
            },
            toggle: function(t) {
                this.button || (!0 === t && this.initButton(),
                    this.connector.publish("canMakePayment", t),
                    this.connector.publish("canMakePayment", this.options))
            },
            initButton: function() {
                this.container = this.find(this.options.container),
                    this.button = this.find(this.options.button) || document.createElement("button"),
                    this.button.appendChild(document.createElement("span")),
                    this.button.appendChild(document.createElement("span")),
                    this.button.className = "apple-pay-button",
                    this.addEvent(this.button, "click", this.proxy(function() {
                        this.pay()
                    })),
                    this.addCss(this.button, {
                        "-webkit-appearance": "-apple-pay-button",
                        "-apple-pay-button-style": this.options.style
                    }),
                this.container && this.container.appendChild(this.button)
            },
            paymentRequest: function() {
                var t = null;
                try {
                    t = new PaymentRequest(this.payment.methods,this.payment.details,this.payment.options),
                        t.addEventListener("merchantvalidation", this.proxy(this.merchantValidation)),
                        t.addEventListener("paymentmethodchange", this.proxy(this.paymentMethodChange)),
                        t.addEventListener("shippingaddresschange", this.proxy(this.shippingAddressChange)),
                        t.addEventListener("shippingoptionchange", this.proxy(this.shippingOptionChange))
                } catch (t) {}
                return t
            },
            pay: function() {
                var t = this.connector;
                this.request.show().then(function(i) {
                    i.complete("success").then(function() {
                        t.publish("log", {
                            event: "responseComplete",
                            type: "ipsp",
                            details: i.details
                        }),
                            t.send("mobilePayRequest", i.details)
                    })
                }).catch(function(i) {
                    t.publish("log", {
                        event: "lastError",
                        type: "ipsp",
                        details: i
                    })
                })
            },
            merchantValidation: function(t) {
                var i = this.connector;
                i.removeAction(this.eventToken),
                    this.eventToken = i.action("appleSession", function(e) {
                        i.publish("log", {
                            event: "appleSession",
                            type: "ipsp",
                            details: e
                        });
                        try {
                            t.complete(e)
                        } catch (t) {
                            i.publish("log", {
                                event: "appleSessionError",
                                type: "ipsp",
                                details: t
                            })
                        }
                    }),
                    i.publish("log", {
                        event: "merchantValidation",
                        url: t.validationURL,
                        domain: location.host
                    }),
                    this.connector.send("requestAppleSession", {
                        url: t.validationURL,
                        domain: location.host
                    })
            },
            shippingOptionChange: function(t) {
                t.updateWith(this.payment.details)
            },
            paymentMethodChange: function(t) {
                t.updateWith(this.payment.details)
            },
            shippingAddressChange: function(t) {
                t.updateWith(this.payment.details)
            }
        }),
            this.$ipsp.add("mobilepay", this.MobilePay)
    }
        .call(window || {});
