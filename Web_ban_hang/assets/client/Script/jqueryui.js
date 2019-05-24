﻿(function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery)
}
)(function (n) {
    function o(t, i) {
        var r, u, f, e = t.nodeName.toLowerCase();
        return "area" === e ? (r = t.parentNode,
            u = r.name,
            t.href && u && "map" === r.nodeName.toLowerCase() ? (f = n("img[usemap='#" + u + "']")[0],
                !!f && s(f)) : !1) : (/^(input|select|textarea|button|object)$/.test(e) ? !t.disabled : "a" === e ? t.href || i : i) && s(t)
    }
    function s(t) {
        return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function () {
            return "hidden" === n.css(this, "visibility")
        }).length
    }
    function w(n) {
        for (var t, i; n.length && n[0] !== document;) {
            if (t = n.css("position"),
                ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(n.css("zIndex"), 10),
                    !isNaN(i) && 0 !== i))
                return i;
            n = n.parent()
        }
        return 0
    }
    function h() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        n.extend(this._defaults, this.regional[""]);
        this.regional.en = n.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
        this.dpDiv = c(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
    }
    function c(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function () {
            n(this).removeClass("ui-state-hover");
            -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).removeClass("ui-datepicker-prev-hover");
            -1 !== this.className.indexOf("ui-datepicker-next") && n(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", l)
    }
    function l() {
        n.datepicker._isDisabledDatepicker(i.inline ? i.dpDiv.parent()[0] : i.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
            n(this).addClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).addClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && n(this).addClass("ui-datepicker-next-hover"))
    }
    function u(t, i) {
        n.extend(t, i);
        for (var r in i)
            null == i[r] && (t[r] = i[r]);
        return t
    }
    function t(n) {
        return function () {
            var t = this.element.val();
            n.apply(this, arguments);
            this._refresh();
            t !== this.element.val() && this._trigger("change")
        }
    }
    var a, f, r, i;
    n.ui = n.ui || {};
    n.extend(n.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    n.fn.extend({
        scrollParent: function (t) {
            var i = this.css("position")
                , u = "absolute" === i
                , f = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                , r = this.parents().filter(function () {
                    var t = n(this);
                    return u && "static" === t.css("position") ? !1 : f.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && r.length ? r : n(this[0].ownerDocument || document)
        },
        uniqueId: function () {
            var n = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++n)
                })
            }
        }(),
        removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id")
            })
        }
    });
    n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function (t) {
            return function (i) {
                return !!n.data(i, t)
            }
        }) : function (t, i, r) {
            return !!n.data(t, r[3])
        }
        ,
        focusable: function (t) {
            return o(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var i = n.attr(t, "tabindex")
                , r = isNaN(i);
            return (r || i >= 0) && o(t, !r)
        }
    });
    n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function (t, i) {
        function r(t, i, r, u) {
            return n.each(e, function () {
                i -= parseFloat(n.css(t, "padding" + this)) || 0;
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
            }),
                i
        }
        var e = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
            , u = i.toLowerCase()
            , f = {
                innerWidth: n.fn.innerWidth,
                innerHeight: n.fn.innerHeight,
                outerWidth: n.fn.outerWidth,
                outerHeight: n.fn.outerHeight
            };
        n.fn["inner" + i] = function (t) {
            return void 0 === t ? f["inner" + i].call(this) : this.each(function () {
                n(this).css(u, r(this, t) + "px")
            })
        }
            ;
        n.fn["outer" + i] = function (t, e) {
            return "number" != typeof t ? f["outer" + i].call(this, t) : this.each(function () {
                n(this).css(u, r(this, t, !0, e) + "px")
            })
        }
    });
    n.fn.addBack || (n.fn.addBack = function (n) {
        return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
    }
    );
    n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
        }
    }(n.fn.removeData));
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    n.fn.extend({
        focus: function (t) {
            return function (i, r) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        n(t).focus();
                        r && r.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(n.fn.focus),
        disableSelection: function () {
            var n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(n + ".ui-disableSelection", function (n) {
                    n.preventDefault()
                })
            }
        }(),
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function (t) {
            if (void 0 !== t)
                return this.css("zIndex", t);
            if (this.length)
                for (var r, u, i = n(this[0]); i.length && i[0] !== document;) {
                    if (r = i.css("position"),
                        ("absolute" === r || "relative" === r || "fixed" === r) && (u = parseInt(i.css("zIndex"), 10),
                            !isNaN(u) && 0 !== u))
                        return u;
                    i = i.parent()
                }
            return 0
        }
    });
    n.ui.plugin = {
        add: function (t, i, r) {
            var u, f = n.ui[t].prototype;
            for (u in r)
                f.plugins[u] = f.plugins[u] || [],
                    f.plugins[u].push([i, r[u]])
        },
        call: function (n, t, i, r) {
            var u, f = n.plugins[t];
            if (f && (r || n.element[0].parentNode && 11 !== n.element[0].parentNode.nodeType))
                for (u = 0; f.length > u; u++)
                    n.options[f[u][0]] && f[u][1].apply(n.element, i)
        }
    };
    a = 0;
    f = Array.prototype.slice;
    n.cleanData = function (t) {
        return function (i) {
            for (var r, u, f = 0; null != (u = i[f]); f++)
                try {
                    r = n._data(u, "events");
                    r && r.remove && n(u).triggerHandler("remove")
                } catch (e) { }
            t(i)
        }
    }(n.cleanData);
    n.widget = function (t, i, r) {
        var s, f, u, o, h = {}, e = t.split(".")[0];
        return t = t.split(".")[1],
            s = e + "-" + t,
            r || (r = i,
                i = n.Widget),
            n.expr[":"][s.toLowerCase()] = function (t) {
                return !!n.data(t, s)
            }
            ,
            n[e] = n[e] || {},
            f = n[e][t],
            u = n[e][t] = function (n, t) {
                return this._createWidget ? (arguments.length && this._createWidget(n, t),
                    void 0) : new u(n, t)
            }
            ,
            n.extend(u, f, {
                version: r.version,
                _proto: n.extend({}, r),
                _childConstructors: []
            }),
            o = new i,
            o.options = n.widget.extend({}, o.options),
            n.each(r, function (t, r) {
                return n.isFunction(r) ? (h[t] = function () {
                    var n = function () {
                        return i.prototype[t].apply(this, arguments)
                    }
                        , u = function (n) {
                            return i.prototype[t].apply(this, n)
                        };
                    return function () {
                        var t, i = this._super, f = this._superApply;
                        return this._super = n,
                            this._superApply = u,
                            t = r.apply(this, arguments),
                            this._super = i,
                            this._superApply = f,
                            t
                    }
                }(),
                    void 0) : (h[t] = r,
                        void 0)
            }),
            u.prototype = n.widget.extend(o, {
                widgetEventPrefix: f ? o.widgetEventPrefix || t : t
            }, h, {
                    constructor: u,
                    namespace: e,
                    widgetName: t,
                    widgetFullName: s
                }),
            f ? (n.each(f._childConstructors, function (t, i) {
                var r = i.prototype;
                n.widget(r.namespace + "." + r.widgetName, u, i._proto)
            }),
                delete f._childConstructors) : i._childConstructors.push(u),
            n.widget.bridge(t, u),
            u
    }
        ;
    n.widget.extend = function (t) {
        for (var i, r, e = f.call(arguments, 1), u = 0, o = e.length; o > u; u++)
            for (i in e[u])
                r = e[u][i],
                    e[u].hasOwnProperty(i) && void 0 !== r && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
        return t
    }
        ;
    n.widget.bridge = function (t, i) {
        var r = i.prototype.widgetFullName || t;
        n.fn[t] = function (u) {
            var s = "string" == typeof u
                , o = f.call(arguments, 1)
                , e = this;
            return s ? this.each(function () {
                var i, f = n.data(this, r);
                return "instance" === u ? (e = f,
                    !1) : f ? n.isFunction(f[u]) && "_" !== u.charAt(0) ? (i = f[u].apply(f, o),
                        i !== f && void 0 !== i ? (e = i && i.jquery ? e.pushStack(i.get()) : i,
                            !1) : void 0) : n.error("no such method '" + u + "' for " + t + " widget instance") : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'")
            }) : (o.length && (u = n.widget.extend.apply(null, [u].concat(o))),
                this.each(function () {
                    var t = n.data(this, r);
                    t ? (t.option(u || {}),
                        t._init && t._init()) : n.data(this, r, new i(u, this))
                })),
                e
        }
    }
        ;
    n.Widget = function () { }
        ;
    n.Widget._childConstructors = [];
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (t, i) {
            i = n(i || this.defaultElement || this)[0];
            this.element = n(i);
            this.uuid = a++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            i !== this && (n.data(i, this.widgetFullName, this),
                this._on(!0, this.element, {
                    remove: function (n) {
                        n.target === i && this.destroy()
                    }
                }),
                this.document = n(i.style ? i.ownerDocument : i.document || i),
                this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: n.noop,
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: n.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var r, u, f, e = t;
            if (0 === arguments.length)
                return n.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (e = {},
                    r = t.split("."),
                    t = r.shift(),
                    r.length) {
                    for (u = e[t] = n.widget.extend({}, this.options[t]),
                        f = 0; r.length - 1 > f; f++)
                        u[r[f]] = u[r[f]] || {},
                            u = u[r[f]];
                    if (t = r.pop(),
                        1 === arguments.length)
                        return void 0 === u[t] ? null : u[t];
                    u[t] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    e[t] = i
                }
            return this._setOptions(e),
                this
        },
        _setOptions: function (n) {
            for (var t in n)
                this._setOption(t, n[t]);
            return this
        },
        _setOption: function (n, t) {
            return this.options[n] = t,
                "disabled" === n && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t),
                    t && (this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus"))),
                this
        },
        enable: function () {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function () {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function (t, i, r) {
            var f, u = this;
            "boolean" != typeof t && (r = i,
                i = t,
                t = !1);
            r ? (i = f = n(i),
                this.bindings = this.bindings.add(i)) : (r = i,
                    i = this.element,
                    f = this.widget());
            n.each(r, function (r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof e ? u[e] : e).apply(u, arguments)
                }
                "string" != typeof e && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var s = r.match(/^([\w:-]*)\s*(.*)$/)
                    , h = s[1] + u.eventNamespace
                    , c = s[2];
                c ? f.delegate(c, h, o) : i.bind(h, o)
            })
        },
        _off: function (t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            t.unbind(i).undelegate(i);
            this.bindings = n(this.bindings.not(t).get());
            this.focusable = n(this.focusable.not(t).get());
            this.hoverable = n(this.hoverable.not(t).get())
        },
        _delay: function (n, t) {
            function r() {
                return ("string" == typeof n ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t);
            this._on(t, {
                mouseenter: function (t) {
                    n(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (t) {
                    n(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t);
            this._on(t, {
                focusin: function (t) {
                    n(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (t) {
                    n(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {},
                i = n.Event(i),
                i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
                i.target = this.element[0],
                f = i.originalEvent)
                for (u in f)
                    u in i || (i[u] = f[u]);
            return this.element.trigger(i, r),
                !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    };
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, i) {
        n.Widget.prototype["_" + t] = function (r, u, f) {
            "string" == typeof u && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || "number" == typeof u ? i : u.effect || i : t;
            u = u || {};
            "number" == typeof u && (u = {
                duration: u
            });
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function (i) {
                n(this)[t]();
                f && f.call(r[0]);
                i()
            })
        }
    });
    n.widget;
    r = !1;
    n(document).mouseup(function () {
        r = !1
    });
    n.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName, function (i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent"))
                    return (n.removeData(i.target, t.widgetName + ".preventClickEvent"),
                        i.stopImmediatePropagation(),
                        !1)
            });
            this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (!r) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(t);
                this._mouseDownEvent = t;
                var i = this
                    , u = 1 === t.which
                    , f = "string" == typeof this.options.cancel && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                return u && !f && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay,
                    this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        i.mouseDelayMet = !0
                    }, this.options.delay)),
                    this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1,
                        !this._mouseStarted) ? (t.preventDefault(),
                            !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"),
                                this._mouseMoveDelegate = function (n) {
                                    return i._mouseMove(n)
                                }
                                ,
                                this._mouseUpDelegate = function (n) {
                                    return i._mouseUp(n)
                                }
                                ,
                                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                                t.preventDefault(),
                                r = !0,
                                !0)) : !0
            }
        },
        _mouseMove: function (t) {
            return this._mouseMoved && (n.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button || !t.which) ? this._mouseUp(t) : ((t.which || t.button) && (this._mouseMoved = !0),
                this._mouseStarted ? (this._mouseDrag(t),
                    t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
                        this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
                        !this._mouseStarted))
        },
        _mouseUp: function (t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                this._mouseStarted && (this._mouseStarted = !1,
                    t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0),
                    this._mouseStop(t)),
                r = !1,
                !1
        },
        _mouseDistanceMet: function (n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () { },
        _mouseDrag: function () { },
        _mouseStop: function () { },
        _mouseCapture: function () {
            return !0
        }
    }),
        function () {
            function f(n, t, i) {
                return [parseFloat(n[0]) * (a.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (a.test(n[1]) ? i / 100 : 1)]
            }
            function i(t, i) {
                return parseInt(n.css(t, i), 10) || 0
            }
            function v(t) {
                var i = t[0];
                return 9 === i.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : n.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                                width: t.outerWidth(),
                                height: t.outerHeight(),
                                offset: t.offset()
                            }
            }
            n.ui = n.ui || {};
            var u, e, r = Math.max, t = Math.abs, o = Math.round, s = /left|center|right/, h = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, a = /%$/, y = n.fn.position;
            n.position = {
                scrollbarWidth: function () {
                    if (void 0 !== u)
                        return u;
                    var r, i, t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"), f = t.children()[0];
                    return n("body").append(t),
                        r = f.offsetWidth,
                        t.css("overflow", "scroll"),
                        i = f.offsetWidth,
                        r === i && (i = t[0].clientWidth),
                        t.remove(),
                        u = r - i
                },
                getScrollInfo: function (t) {
                    var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
                        , r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
                        , u = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth
                        , f = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
                    return {
                        width: f ? n.position.scrollbarWidth() : 0,
                        height: u ? n.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function (t) {
                    var i = n(t || window)
                        , r = n.isWindow(i[0])
                        , u = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: r,
                        isDocument: u,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: r || u ? i.width() : i.outerWidth(),
                        height: r || u ? i.height() : i.outerHeight()
                    }
                }
            };
            n.fn.position = function (u) {
                if (!u || !u.of)
                    return y.apply(this, arguments);
                u = n.extend({}, u);
                var k, a, p, b, w, g, nt = n(u.of), it = n.position.getWithinInfo(u.within), rt = n.position.getScrollInfo(it), d = (u.collision || "flip").split(" "), tt = {};
                return g = v(nt),
                    nt[0].preventDefault && (u.at = "left top"),
                    a = g.width,
                    p = g.height,
                    b = g.offset,
                    w = n.extend({}, b),
                    n.each(["my", "at"], function () {
                        var t, i, n = (u[this] || "").split(" ");
                        1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                        n[0] = s.test(n[0]) ? n[0] : "center";
                        n[1] = h.test(n[1]) ? n[1] : "center";
                        t = c.exec(n[0]);
                        i = c.exec(n[1]);
                        tt[this] = [t ? t[0] : 0, i ? i[0] : 0];
                        u[this] = [l.exec(n[0])[0], l.exec(n[1])[0]]
                    }),
                    1 === d.length && (d[1] = d[0]),
                    "right" === u.at[0] ? w.left += a : "center" === u.at[0] && (w.left += a / 2),
                    "bottom" === u.at[1] ? w.top += p : "center" === u.at[1] && (w.top += p / 2),
                    k = f(tt.at, a, p),
                    w.left += k[0],
                    w.top += k[1],
                    this.each(function () {
                        var y, g, h = n(this), c = h.outerWidth(), l = h.outerHeight(), ut = i(this, "marginLeft"), ft = i(this, "marginTop"), et = c + ut + i(this, "marginRight") + rt.width, ot = l + ft + i(this, "marginBottom") + rt.height, s = n.extend({}, w), v = f(tt.my, h.outerWidth(), h.outerHeight());
                        "right" === u.my[0] ? s.left -= c : "center" === u.my[0] && (s.left -= c / 2);
                        "bottom" === u.my[1] ? s.top -= l : "center" === u.my[1] && (s.top -= l / 2);
                        s.left += v[0];
                        s.top += v[1];
                        e || (s.left = o(s.left),
                            s.top = o(s.top));
                        y = {
                            marginLeft: ut,
                            marginTop: ft
                        };
                        n.each(["left", "top"], function (t, i) {
                            n.ui.position[d[t]] && n.ui.position[d[t]][i](s, {
                                targetWidth: a,
                                targetHeight: p,
                                elemWidth: c,
                                elemHeight: l,
                                collisionPosition: y,
                                collisionWidth: et,
                                collisionHeight: ot,
                                offset: [k[0] + v[0], k[1] + v[1]],
                                my: u.my,
                                at: u.at,
                                within: it,
                                elem: h
                            })
                        });
                        u.using && (g = function (n) {
                            var i = b.left - s.left
                                , o = i + a - c
                                , f = b.top - s.top
                                , v = f + p - l
                                , e = {
                                    target: {
                                        element: nt,
                                        left: b.left,
                                        top: b.top,
                                        width: a,
                                        height: p
                                    },
                                    element: {
                                        element: h,
                                        left: s.left,
                                        top: s.top,
                                        width: c,
                                        height: l
                                    },
                                    horizontal: 0 > o ? "left" : i > 0 ? "right" : "center",
                                    vertical: 0 > v ? "top" : f > 0 ? "bottom" : "middle"
                                };
                            c > a && a > t(i + o) && (e.horizontal = "center");
                            l > p && p > t(f + v) && (e.vertical = "middle");
                            e.important = r(t(i), t(o)) > r(t(f), t(v)) ? "horizontal" : "vertical";
                            u.using.call(this, n, e)
                        }
                        );
                        h.offset(n.extend(s, {
                            using: g
                        }))
                    })
            }
                ;
            n.ui.position = {
                fit: {
                    left: function (n, t) {
                        var h, e = t.within, u = e.isWindow ? e.scrollLeft : e.offset.left, o = e.width, s = n.left - t.collisionPosition.marginLeft, i = u - s, f = s + t.collisionWidth - o - u;
                        t.collisionWidth > o ? i > 0 && 0 >= f ? (h = n.left + i + t.collisionWidth - o - u,
                            n.left += i - h) : n.left = f > 0 && 0 >= i ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left)
                    },
                    top: function (n, t) {
                        var h, o = t.within, u = o.isWindow ? o.scrollTop : o.offset.top, e = t.within.height, s = n.top - t.collisionPosition.marginTop, i = u - s, f = s + t.collisionHeight - e - u;
                        t.collisionHeight > e ? i > 0 && 0 >= f ? (h = n.top + i + t.collisionHeight - e - u,
                            n.top += i - h) : n.top = f > 0 && 0 >= i ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top)
                    }
                },
                flip: {
                    left: function (n, i) {
                        var o, s, r = i.within, y = r.offset.left + r.scrollLeft, c = r.width, h = r.isWindow ? r.scrollLeft : r.offset.left, l = n.left - i.collisionPosition.marginLeft, a = l - h, v = l + i.collisionWidth - c - h, u = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0, f = "left" === i.at[0] ? i.targetWidth : "right" === i.at[0] ? -i.targetWidth : 0, e = -2 * i.offset[0];
                        0 > a ? (o = n.left + u + f + e + i.collisionWidth - c - y,
                            (0 > o || t(a) > o) && (n.left += u + f + e)) : v > 0 && (s = n.left - i.collisionPosition.marginLeft + u + f + e - h,
                                (s > 0 || v > t(s)) && (n.left += u + f + e))
                    },
                    top: function (n, i) {
                        var o, s, r = i.within, y = r.offset.top + r.scrollTop, c = r.height, h = r.isWindow ? r.scrollTop : r.offset.top, l = n.top - i.collisionPosition.marginTop, a = l - h, v = l + i.collisionHeight - c - h, p = "top" === i.my[1], u = p ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0, f = "top" === i.at[1] ? i.targetHeight : "bottom" === i.at[1] ? -i.targetHeight : 0, e = -2 * i.offset[1];
                        0 > a ? (s = n.top + u + f + e + i.collisionHeight - c - y,
                            (0 > s || t(a) > s) && (n.top += u + f + e)) : v > 0 && (o = n.top - i.collisionPosition.marginTop + u + f + e - h,
                                (o > 0 || v > t(o)) && (n.top += u + f + e))
                    }
                },
                flipfit: {
                    left: function () {
                        n.ui.position.flip.left.apply(this, arguments);
                        n.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function () {
                        n.ui.position.flip.top.apply(this, arguments);
                        n.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
                function () {
                    var t, i, r, u, f, o = document.getElementsByTagName("body")[0], s = document.createElement("div");
                    t = document.createElement(o ? "div" : "body");
                    r = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    };
                    o && n.extend(r, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (f in r)
                        t.style[f] = r[f];
                    t.appendChild(s);
                    i = o || document.documentElement;
                    i.insertBefore(t, i.firstChild);
                    s.style.cssText = "position: absolute; left: 10.7432222px;";
                    u = n(s).offset().left;
                    e = u > 10 && 11 > u;
                    t.innerHTML = "";
                    i.removeChild(t)
                }()
        }();
    n.ui.position;
    n.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            });
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
            this._on({
                "mousedown .ui-menu-item": function (n) {
                    n.preventDefault()
                },
                "click .ui-menu-item": function (t) {
                    var i = n(t.target);
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t),
                        t.isPropagationStopped() || (this.mouseHandled = !0),
                        i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                            this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function (t) {
                    if (!this.previousFilter) {
                        var i = n(t.currentTarget);
                        i.siblings(".ui-state-active").removeClass("ui-state-active");
                        this.focus(t, i)
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (n, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(n, i)
                },
                blur: function (t) {
                    this._delay(function () {
                        n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function (n) {
                    this._closeOnDocumentClick(n) && this.collapseAll(n);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var t = n(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (t) {
            var i, u, r, f, e = !0;
            switch (t.keyCode) {
                case n.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case n.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case n.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case n.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case n.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case n.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case n.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case n.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case n.ui.keyCode.ENTER:
                case n.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case n.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    e = !1;
                    u = this.previousFilter || "";
                    r = String.fromCharCode(t.keyCode);
                    f = !1;
                    clearTimeout(this.filterTimer);
                    r === u ? f = !0 : r = u + r;
                    i = this._filterMenuItems(r);
                    i = f && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i;
                    i.length || (r = String.fromCharCode(t.keyCode),
                        i = this._filterMenuItems(r));
                    i.length ? (this.focus(t, i),
                        this.previousFilter = r,
                        this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
            }
            e && t.preventDefault()
        },
        _activate: function (n) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(n) : this.select(n))
        },
        refresh: function () {
            var i, t, u = this, f = this.options.icons.submenu, r = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = n(this)
                    , i = t.parent()
                    , r = n("<span>").addClass("ui-menu-icon ui-icon " + f).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(r);
                t.attr("aria-labelledby", i.attr("id"))
            });
            i = r.add(this.element);
            t = i.find(this.options.items);
            t.not(".ui-menu-item").each(function () {
                var t = n(this);
                u._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
            });
            t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            t.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function (n, t) {
            "icons" === n && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);
            "disabled" === n && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
            this._super(n, t)
        },
        focus: function (n, t) {
            var i, r;
            this.blur(n, n && "focus" === n.type);
            this._scrollIntoView(t);
            this.active = t.first();
            r = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
            n && "keydown" === n.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay);
            i = t.children(".ui-menu");
            i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
            this.activeMenu = t.parent();
            this._trigger("focus", n, {
                item: t
            })
        },
        _scrollIntoView: function (t) {
            var e, o, i, r, u, f;
            this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0,
                o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0,
                i = t.offset().top - this.activeMenu.offset().top - e - o,
                r = this.activeMenu.scrollTop(),
                u = this.activeMenu.height(),
                f = t.outerHeight(),
                0 > i ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
        },
        blur: function (n, t) {
            t || clearTimeout(this.timer);
            this.active && (this.active.removeClass("ui-state-focus"),
                this.active = null,
                this._trigger("blur", n, {
                    item: this.active
                }))
        },
        _startOpening: function (n) {
            clearTimeout(this.timer);
            "true" === n.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close();
                this._open(n)
            }, this.delay))
        },
        _open: function (t) {
            var i = n.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (t, i) {
            clearTimeout(this.timer);
            this.timer = this._delay(function () {
                var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element);
                this._close(r);
                this.blur(t);
                this.activeMenu = r
            }, this.delay)
        },
        _close: function (n) {
            n || (n = this.active ? this.active.parent() : this.element);
            n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function (t) {
            return !n(t.target).closest(".ui-menu").length
        },
        _isDivider: function (n) {
            return !/[^\-\u2014\u2013\s]/.test(n.text())
        },
        collapse: function (n) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(),
                this.focus(n, t))
        },
        expand: function (n) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()),
                this._delay(function () {
                    this.focus(n, t)
                }))
        },
        next: function (n) {
            this._move("next", "first", n)
        },
        previous: function (n) {
            this._move("prev", "last", n)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (n, t, i) {
            var r;
            this.active && (r = "first" === n || "last" === n ? this.active["first" === n ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
            r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]());
            this.focus(i, r)
        },
        nextPage: function (t) {
            var i, r, u;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top,
                u = this.element.height(),
                this.active.nextAll(".ui-menu-item").each(function () {
                    return i = n(this),
                        0 > i.offset().top - r - u
                }),
                this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())),
                void 0) : (this.next(t),
                    void 0)
        },
        previousPage: function (t) {
            var i, r, u;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top,
                u = this.element.height(),
                this.active.prevAll(".ui-menu-item").each(function () {
                    return i = n(this),
                        i.offset().top - r + u > 0
                }),
                this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())),
                void 0) : (this.next(t),
                    void 0)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || n(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0);
            this._trigger("select", t, i)
        },
        _filterMenuItems: function (t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                , r = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return r.test(n.trim(n(this).text()))
            })
        }
    });
    n.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var t, i, r, u = this.element[0].nodeName.toLowerCase(), f = "textarea" === u, e = "input" === u;
            this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
            this.valueMethod = this.element[f || e ? "val" : "text"];
            this.isNewMenu = !0;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function (u) {
                    if (this.element.prop("readOnly"))
                        return t = !0,
                            r = !0,
                            i = !0,
                            void 0;
                    t = !1;
                    r = !1;
                    i = !1;
                    var f = n.ui.keyCode;
                    switch (u.keyCode) {
                        case f.PAGE_UP:
                            t = !0;
                            this._move("previousPage", u);
                            break;
                        case f.PAGE_DOWN:
                            t = !0;
                            this._move("nextPage", u);
                            break;
                        case f.UP:
                            t = !0;
                            this._keyEvent("previous", u);
                            break;
                        case f.DOWN:
                            t = !0;
                            this._keyEvent("next", u);
                            break;
                        case f.ENTER:
                            this.menu.active && (t = !0,
                                u.preventDefault(),
                                this.menu.select(u));
                            break;
                        case f.TAB:
                            this.menu.active && this.menu.select(u);
                            break;
                        case f.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                                this.close(u),
                                u.preventDefault());
                            break;
                        default:
                            i = !0;
                            this._searchTimeout(u)
                    }
                },
                keypress: function (r) {
                    if (t)
                        return t = !1,
                            (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault(),
                            void 0;
                    if (!i) {
                        var u = n.ui.keyCode;
                        switch (r.keyCode) {
                            case u.PAGE_UP:
                                this._move("previousPage", r);
                                break;
                            case u.PAGE_DOWN:
                                this._move("nextPage", r);
                                break;
                            case u.UP:
                                this._keyEvent("previous", r);
                                break;
                            case u.DOWN:
                                this._keyEvent("next", r)
                        }
                    }
                },
                input: function (n) {
                    return r ? (r = !1,
                        n.preventDefault(),
                        void 0) : (this._searchTimeout(n),
                            void 0)
                },
                focus: function () {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function (n) {
                    return this.cancelBlur ? (delete this.cancelBlur,
                        void 0) : (clearTimeout(this.searching),
                            this.close(n),
                            this._change(n),
                            void 0)
                }
            });
            this._initSource();
            this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    n(t.target).closest(".ui-menu-item").length || this._delay(function () {
                        var t = this;
                        this.document.one("mousedown", function (r) {
                            r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                        })
                    })
                },
                menufocus: function (t, i) {
                    var r, u;
                    return this.isNewMenu && (this.isNewMenu = !1,
                        t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(),
                            this.document.one("mousemove", function () {
                                n(t.target).trigger(t.originalEvent)
                            }),
                            void 0) : (u = i.item.data("ui-autocomplete-item"),
                                !1 !== this._trigger("focus", t, {
                                    item: u
                                }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value),
                                r = i.item.attr("aria-label") || u.value,
                                r && n.trim(r).length && (this.liveRegion.children().hide(),
                                    n("<div>").text(r).appendTo(this.liveRegion)),
                                void 0)
                },
                menuselect: function (n, t) {
                    var i = t.item.data("ui-autocomplete-item")
                        , r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                        this.previous = r,
                        this._delay(function () {
                            this.previous = r;
                            this.selectedItem = i
                        }));
                    !1 !== this._trigger("select", n, {
                        item: i
                    }) && this._value(i.value);
                    this.term = this._value();
                    this.close(n);
                    this.selectedItem = i
                }
            });
            this.liveRegion = n("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function (n, t) {
            this._super(n, t);
            "source" === n && this._initSource();
            "appendTo" === n && this.menu.element.appendTo(this._appendTo());
            "disabled" === n && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)),
                t && t[0] || (t = this.element.closest(".ui-front")),
                t.length || (t = this.document[0].body),
                t
        },
        _initSource: function () {
            var i, r, t = this;
            n.isArray(this.options.source) ? (i = this.options.source,
                this.source = function (t, r) {
                    r(n.ui.autocomplete.filter(i, t.term))
                }
            ) : "string" == typeof this.options.source ? (r = this.options.source,
                this.source = function (i, u) {
                    t.xhr && t.xhr.abort();
                    t.xhr = n.ajax({
                        url: r,
                        data: i,
                        dataType: "json",
                        success: function (n) {
                            u(n)
                        },
                        error: function () {
                            u([])
                        }
                    })
                }
            ) : this.source = this.options.source
        },
        _searchTimeout: function (n) {
            clearTimeout(this.searching);
            this.searching = this._delay(function () {
                var t = this.term === this._value()
                    , i = this.menu.element.is(":visible")
                    , r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                t && (!t || i || r) || (this.selectedItem = null,
                    this.search(null, n))
            }, this.options.delay)
        },
        search: function (n, t) {
            return n = null != n ? n : this._value(),
                this.term = this._value(),
                n.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(n) : void 0
        },
        _search: function (n) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: n
            }, this._response())
        },
        _response: function () {
            var t = ++this.requestIndex;
            return n.proxy(function (n) {
                t === this.requestIndex && this.__response(n);
                this.pending--;
                this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (n) {
            n && (n = this._normalize(n));
            this._trigger("response", null, {
                content: n
            });
            !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n),
                this._trigger("open")) : this._close()
        },
        close: function (n) {
            this.cancelSearch = !0;
            this._close(n)
        },
        _close: function (n) {
            this.menu.element.is(":visible") && (this.menu.element.hide(),
                this.menu.blur(),
                this.isNewMenu = !0,
                this._trigger("close", n))
        },
        _change: function (n) {
            this.previous !== this._value() && this._trigger("change", n, {
                item: this.selectedItem
            })
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : n.map(t, function (t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : n.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function (t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t);
            this.isNewMenu = !0;
            this.menu.refresh();
            i.show();
            this._resizeMenu();
            i.position(n.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, i) {
            var r = this;
            n.each(i, function (n, i) {
                r._renderItemData(t, i)
            })
        },
        _renderItemData: function (n, t) {
            return this._renderItem(n, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function (t, i) {
            return n("<li>").text(i.label).appendTo(t)
        },
        _move: function (n, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n) ? (this.isMultiLine || this._value(this.term),
                this.menu.blur(),
                void 0) : (this.menu[n](t),
                    void 0) : (this.search(null, t),
                        void 0)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t),
                t.preventDefault())
        }
    });
    n.extend(n.ui.autocomplete, {
        escapeRegex: function (n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function (t, i) {
            var r = RegExp(n.ui.autocomplete.escapeRegex(i), "i");
            return n.grep(t, function (n) {
                return r.test(n.label || n.value || n)
            })
        }
    });
    n.widget("ui.autocomplete", n.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (n) {
                    return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function (t) {
            var i;
            this._superApply(arguments);
            this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults,
                this.liveRegion.children().hide(),
                n("<div>").text(i).appendTo(this.liveRegion))
        }
    });
    n.ui.autocomplete;
    var e, v = "ui-button ui-widget ui-state-default ui-corner-all", y = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", b = function () {
        var t = n(this);
        setTimeout(function () {
            t.find(":ui-button").button("refresh")
        }, 1)
    }, p = function (t) {
        var i = t.name
            , r = t.form
            , u = n([]);
        return i && (i = i.replace(/'/g, "\\'"),
            u = r ? n(r).find("[name='" + i + "'][type=radio]") : n("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
                return !this.form
            })),
            u
    };
    n.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, b);
            "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var i = this
                , t = this.options
                , r = "checkbox" === this.type || "radio" === this.type
                , u = r ? "" : "ui-state-active";
            null === t.label && (t.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(v).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                t.disabled || this === e && n(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                t.disabled || n(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function (n) {
                t.disabled && (n.preventDefault(),
                    n.stopImmediatePropagation())
            });
            this._on({
                focus: function () {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function () {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            r && this.element.bind("change" + this.eventNamespace, function () {
                i.refresh()
            });
            "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (t.disabled)
                    return !1
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (t.disabled)
                    return !1;
                n(this).addClass("ui-state-active");
                i.buttonElement.attr("aria-pressed", "true");
                var r = i.element[0];
                p(r).not(r).map(function () {
                    return n(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return t.disabled ? !1 : (n(this).addClass("ui-state-active"),
                    e = this,
                    i.document.one("mouseup", function () {
                        e = null
                    }),
                    void 0)
            }).bind("mouseup" + this.eventNamespace, function () {
                return t.disabled ? !1 : (n(this).removeClass("ui-state-active"),
                    void 0)
            }).bind("keydown" + this.eventNamespace, function (i) {
                return t.disabled ? !1 : ((i.keyCode === n.ui.keyCode.SPACE || i.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active"),
                    void 0)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                n(this).removeClass("ui-state-active")
            }),
                this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                    t.keyCode === n.ui.keyCode.SPACE && n(this).click()
                }));
            this._setOption("disabled", t.disabled);
            this._resetButton()
        },
        _determineButtonType: function () {
            var n, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
            "checkbox" === this.type || "radio" === this.type ? (n = this.element.parents().last(),
                t = "label[for='" + this.element.attr("id") + "']",
                this.buttonElement = n.find(t),
                this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(),
                    this.buttonElement = n.filter(t),
                    this.buttonElement.length || (this.buttonElement = n.find(t))),
                this.element.addClass("ui-helper-hidden-accessible"),
                i = this.element.is(":checked"),
                i && this.buttonElement.addClass("ui-state-active"),
                this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(v + " ui-state-active " + y).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (n, t) {
            return this._super(n, t),
                "disabled" === n ? (this.widget().toggleClass("ui-state-disabled", !!t),
                    this.element.prop("disabled", !!t),
                    t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")),
                    void 0) : (this._resetButton(),
                        void 0)
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t);
            "radio" === this.type ? p(this.element[0]).each(function () {
                n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type)
                return this.options.label && this.element.val(this.options.label),
                    void 0;
            var i = this.buttonElement.removeClass(y)
                , f = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text()
                , t = this.options.icons
                , u = t.primary && t.secondary
                , r = [];
            t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")),
                t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"),
                t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"),
                this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"),
                    this.hasTitle || i.attr("title", n.trim(f)))) : r.push("ui-button-text-only");
            i.addClass(r.join(" "))
        }
    });
    n.widget("ui.buttonset", {
        version: "1.11.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (n, t) {
            "disabled" === n && this.buttons.button("option", n, t);
            this._super(n, t)
        },
        refresh: function () {
            var i = "rtl" === this.element.css("direction")
                , t = this.element.find(this.options.items)
                , r = t.filter(":ui-button");
            t.not(":ui-button").button();
            r.button("refresh");
            this.buttons = t.map(function () {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(i ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(i ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function () {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    n.ui.button;
    n.extend(n.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    n.extend(h.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (n) {
            return u(this._defaults, n || {}),
                this
        },
        _attachDatepicker: function (t, i) {
            var r, f, u;
            r = t.nodeName.toLowerCase();
            f = "div" === r || "span" === r;
            t.id || (this.uuid += 1,
                t.id = "dp" + this.uuid);
            u = this._newInst(n(t), f);
            u.settings = n.extend({}, i || {});
            "input" === r ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
        },
        _newInst: function (t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? c(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, i) {
            var r = n(t);
            i.append = n([]);
            i.trigger = n([]);
            r.hasClass(this.markerClassName) || (this._attachments(r, i),
                r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
                this._autoSize(i),
                n.data(t, "datepicker", i),
                i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, i) {
            var u, r, f, e = this._get(i, "appendText"), o = this._get(i, "isRTL");
            i.append && i.append.remove();
            e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"),
                t[o ? "before" : "after"](i.append));
            t.unbind("focus", this._showDatepicker);
            i.trigger && i.trigger.remove();
            u = this._get(i, "showOn");
            ("focus" === u || "both" === u) && t.focus(this._showDatepicker);
            ("button" === u || "both" === u) && (r = this._get(i, "buttonText"),
                f = this._get(i, "buttonImage"),
                i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: r,
                    title: r
                }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                    src: f,
                    alt: r,
                    title: r
                }) : r)),
                t[o ? "before" : "after"](i.trigger),
                i.trigger.click(function () {
                    return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(),
                        n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]),
                        !1
                }))
        },
        _autoSize: function (n) {
            if (this._get(n, "autoSize") && !n.inline) {
                var r, u, f, t, i = new Date(2009, 11, 20), e = this._get(n, "dateFormat");
                e.match(/[DM]/) && (r = function (n) {
                    for (u = 0,
                        f = 0,
                        t = 0; n.length > t; t++)
                        n[t].length > u && (u = n[t].length,
                            f = t);
                    return f
                }
                    ,
                    i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                    i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
                n.input.attr("size", this._formatDate(n, i).length)
            }
        },
        _inlineDatepicker: function (t, i) {
            var r = n(t);
            r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv),
                n.data(t, "datepicker", i),
                this._setDate(i, this._getDefaultDate(i), !0),
                this._updateDatepicker(i),
                this._updateAlternate(i),
                i.settings.disabled && this._disableDatepicker(t),
                i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, i, r, f, e) {
            var s, h, c, l, a, o = this._dialogInst;
            return o || (this.uuid += 1,
                s = "dp" + this.uuid,
                this._dialogInput = n("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"),
                this._dialogInput.keydown(this._doKeyDown),
                n("body").append(this._dialogInput),
                o = this._dialogInst = this._newInst(this._dialogInput, !1),
                o.settings = {},
                n.data(this._dialogInput[0], "datepicker", o)),
                u(o.settings, f || {}),
                i = i && i.constructor === Date ? this._formatDate(o, i) : i,
                this._dialogInput.val(i),
                this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null,
                this._pos || (h = document.documentElement.clientWidth,
                    c = document.documentElement.clientHeight,
                    l = document.documentElement.scrollLeft || document.body.scrollLeft,
                    a = document.documentElement.scrollTop || document.body.scrollTop,
                    this._pos = [h / 2 - 100 + l, c / 2 - 150 + a]),
                this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                o.settings.onSelect = r,
                this._inDialog = !0,
                this.dpDiv.addClass(this._dialogClass),
                this._showDatepicker(this._dialogInput[0]),
                n.blockUI && n.blockUI(this.dpDiv),
                n.data(this._dialogInput[0], "datepicker", o),
                this
        },
        _destroyDatepicker: function (t) {
            var r, u = n(t), f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
                n.removeData(t, "datepicker"),
                "input" === r ? (f.append.remove(),
                    f.trigger.remove(),
                    u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === r || "span" === r) && u.removeClass(this.markerClassName).empty(),
                i === f && (i = null))
        },
        _enableDatepicker: function (t) {
            var i, r, u = n(t), f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
                "input" === i ? (t.disabled = !1,
                    f.trigger.filter("button").each(function () {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass),
                        r.children().removeClass("ui-state-disabled"),
                        r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
                this._disabledInputs = n.map(this._disabledInputs, function (n) {
                    return n === t ? null : n
                }))
        },
        _disableDatepicker: function (t) {
            var i, r, u = n(t), f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
                "input" === i ? (t.disabled = !0,
                    f.trigger.filter("button").each(function () {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass),
                        r.children().addClass("ui-state-disabled"),
                        r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
                this._disabledInputs = n.map(this._disabledInputs, function (n) {
                    return n === t ? null : n
                }),
                this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function (n) {
            if (!n)
                return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === n)
                    return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return n.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function (t, i, r) {
            var e, h, o, s, f = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? n.extend({}, n.datepicker._defaults) : f ? "all" === i ? n.extend({}, f.settings) : this._get(f, i) : null : (e = i || {},
                "string" == typeof i && (e = {},
                    e[i] = r),
                f && (this._curInst === f && this._hideDatepicker(),
                    h = this._getDateDatepicker(t, !0),
                    o = this._getMinMaxDate(f, "min"),
                    s = this._getMinMaxDate(f, "max"),
                    u(f.settings, e),
                    null !== o && void 0 !== e.dateFormat && void 0 === e.minDate && (f.settings.minDate = this._formatDate(f, o)),
                    null !== s && void 0 !== e.dateFormat && void 0 === e.maxDate && (f.settings.maxDate = this._formatDate(f, s)),
                    "disabled" in e && (e.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
                    this._attachments(n(t), f),
                    this._autoSize(f),
                    this._setDate(f, h),
                    this._updateAlternate(f),
                    this._updateDatepicker(f)),
                void 0)
        },
        _changeDatepicker: function (n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function (n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t),
                this._updateDatepicker(i),
                this._updateAlternate(i))
        },
        _getDateDatepicker: function (n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t),
                i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var u, e, f, i = n.datepicker._getInst(t.target), r = !0, o = i.dpDiv.is(".ui-datepicker-rtl");
            if (i._keyEvent = !0,
                n.datepicker._datepickerShowing)
                switch (t.keyCode) {
                    case 9:
                        n.datepicker._hideDatepicker();
                        r = !1;
                        break;
                    case 13:
                        return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv),
                            f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]),
                            u = n.datepicker._get(i, "onSelect"),
                            u ? (e = n.datepicker._formatDate(i),
                                u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(),
                            !1;
                    case 27:
                        n.datepicker._hideDatepicker();
                        break;
                    case 33:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 34:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                        r = t.ctrlKey || t.metaKey;
                        t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                        r = t.ctrlKey || t.metaKey;
                        t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                        r = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        r = !1
                }
            else
                36 === t.keyCode && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(),
                t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var i, r, u = n.datepicker._getInst(t.target);
            if (n.datepicker._get(u, "constrainInput"))
                return (i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")),
                    r = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode),
                    t.ctrlKey || t.metaKey || " " > r || !i || i.indexOf(r) > -1)
        },
        _doKeyUp: function (t) {
            var r, i = n.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal)
                try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                    r && (n.datepicker._setDateFromField(i),
                        n.datepicker._updateAlternate(i),
                        n.datepicker._updateDatepicker(i))
                } catch (u) { }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t,
                "input" !== t.nodeName.toLowerCase() && (t = n("input", t.parentNode)[0]),
                !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                var i, o, s, r, f, e, h;
                i = n.datepicker._getInst(t);
                n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0),
                    i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0]));
                o = n.datepicker._get(i, "beforeShow");
                s = o ? o.apply(t, [t, i]) : {};
                s !== !1 && (u(i.settings, s),
                    i.lastVal = null,
                    n.datepicker._lastInput = t,
                    n.datepicker._setDateFromField(i),
                    n.datepicker._inDialog && (t.value = ""),
                    n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t),
                        n.datepicker._pos[1] += t.offsetHeight),
                    r = !1,
                    n(t).parents().each(function () {
                        return r |= "fixed" === n(this).css("position"),
                            !r
                    }),
                    f = {
                        left: n.datepicker._pos[0],
                        top: n.datepicker._pos[1]
                    },
                    n.datepicker._pos = null,
                    i.dpDiv.empty(),
                    i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }),
                    n.datepicker._updateDatepicker(i),
                    f = n.datepicker._checkOffset(i, f, r),
                    i.dpDiv.css({
                        position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: f.left + "px",
                        top: f.top + "px"
                    }),
                    i.inline || (e = n.datepicker._get(i, "showAnim"),
                        h = n.datepicker._get(i, "duration"),
                        i.dpDiv.css("z-index", w(n(t)) + 1),
                        n.datepicker._datepickerShowing = !0,
                        n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null),
                        n.datepicker._shouldFocusInput(i) && i.input.focus(),
                        n.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4;
            i = t;
            t.dpDiv.empty().append(this._generateHTML(t));
            this._attachHandlers(t);
            var r, u = this._getNumberOfMonths(t), f = u[1], e = t.dpDiv.find("." + this._dayOverClass + " a");
            e.length > 0 && l.apply(e.get(0));
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
            t.dpDiv[(1 !== u[0] || 1 !== u[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.focus();
            t.yearshtml && (r = t.yearshtml,
                setTimeout(function () {
                    r === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
                    r = t.yearshtml = null
                }, 0))
        },
        _shouldFocusInput: function (n) {
            return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
        },
        _checkOffset: function (t, i, r) {
            var u = t.dpDiv.outerWidth()
                , f = t.dpDiv.outerHeight()
                , h = t.input ? t.input.outerWidth() : 0
                , o = t.input ? t.input.outerHeight() : 0
                , e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft())
                , s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? u - h : 0,
                i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0,
                i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0,
                i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0),
                i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0),
                i
        },
        _findPos: function (t) {
            for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || n.expr.filters.hidden(t));)
                t = t[u ? "previousSibling" : "nextSibling"];
            return i = n(t).offset(),
                [i.left, i.top]
        },
        _hideDatepicker: function (t) {
            var r, f, u, e, i = this._curInst;
            !i || t && i !== n.data(t, "datepicker") || this._datepickerShowing && (r = this._get(i, "showAnim"),
                f = this._get(i, "duration"),
                u = function () {
                    n.datepicker._tidyDialog(i)
                }
                ,
                n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv["slideDown" === r ? "slideUp" : "fadeIn" === r ? "fadeOut" : "hide"](r ? f : null, u),
                r || u(),
                this._datepickerShowing = !1,
                e = this._get(i, "onClose"),
                e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]),
                this._lastInput = null,
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }),
                    n.blockUI && (n.unblockUI(),
                        n("body").append(this.dpDiv))),
                this._inDialog = !1)
        },
        _tidyDialog: function (n) {
            n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (n.datepicker._curInst) {
                var i = n(t.target)
                    , r = n.datepicker._getInst(i[0]);
                (i[0].id === n.datepicker._mainDivId || 0 !== i.parents("#" + n.datepicker._mainDivId).length || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, i, r) {
            var f = n(t)
                , u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + ("M" === r ? this._get(u, "showCurrentAtPos") : 0), r),
                this._updateDatepicker(u))
        },
        _gotoToday: function (t) {
            var r, u = n(t), i = this._getInst(u[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay,
                i.drawMonth = i.selectedMonth = i.currentMonth,
                i.drawYear = i.selectedYear = i.currentYear) : (r = new Date,
                    i.selectedDay = r.getDate(),
                    i.drawMonth = i.selectedMonth = r.getMonth(),
                    i.drawYear = i.selectedYear = r.getFullYear());
            this._notifyChange(i);
            this._adjustDate(u)
        },
        _selectMonthYear: function (t, i, r) {
            var f = n(t)
                , u = this._getInst(f[0]);
            u["selected" + ("M" === r ? "Month" : "Year")] = u["draw" + ("M" === r ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(u);
            this._adjustDate(f)
        },
        _selectDay: function (t, i, r, u) {
            var f, e = n(t);
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]),
                f.selectedDay = f.currentDay = n("a", u).html(),
                f.selectedMonth = f.currentMonth = i,
                f.selectedYear = f.currentYear = r,
                this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function (t) {
            var i = n(t);
            this._selectDate(i, "")
        },
        _selectDate: function (t, i) {
            var u, f = n(t), r = this._getInst(f[0]);
            i = null != i ? i : this._formatDate(r);
            r.input && r.input.val(i);
            this._updateAlternate(r);
            u = this._get(r, "onSelect");
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(),
                this._lastInput = r.input[0],
                "object" != typeof r.input[0] && r.input.focus(),
                this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var i, r, u, f = this._get(t, "altField");
            f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                r = this._getDate(t),
                u = this.formatDate(i, r, this._getFormatConfig(t)),
                n(f).each(function () {
                    n(this).val(u)
                }))
        },
        noWeekends: function (n) {
            var t = n.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function (n) {
            var i, t = new Date(n.getTime());
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)),
                i = t.getTime(),
                t.setMonth(0),
                t.setDate(1),
                Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function (t, i, r) {
            if (null == t || null == i)
                throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "",
                "" === i)
                return null;
            for (var a, v, u, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = "string" != typeof y ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, l = function (n) {
                var i = t.length > o + 1 && t.charAt(o + 1) === n;
                return i && o++ ,
                    i
            }, c = function (n) {
                var u = l(n)
                    , r = "@" === n ? 14 : "!" === n ? 20 : "y" === n && u ? 4 : "o" === n ? 3 : 2
                    , e = "y" === n ? r : 1
                    , o = RegExp("^\\d{" + e + "," + r + "}")
                    , t = i.substring(f).match(o);
                if (!t)
                    throw "Missing number at position " + f;
                return f += t[0].length,
                    parseInt(t[0], 10)
            }, k = function (t, r, u) {
                var e = -1
                    , o = n.map(l(t) ? u : r, function (n, t) {
                        return [[t, n]]
                    }).sort(function (n, t) {
                        return -(n[1].length - t[1].length)
                    });
                if (n.each(o, function (n, t) {
                    var r = t[1];
                    if (i.substr(f, r.length).toLowerCase() === r.toLowerCase())
                        return (e = t[0],
                            f += r.length,
                            !1)
                }),
                    -1 !== e)
                    return e + 1;
                throw "Unknown name at position " + f;
            }, b = function () {
                if (i.charAt(f) !== t.charAt(o))
                    throw "Unexpected literal at position " + f;
                f++
            }, o = 0; t.length > o; o++)
                if (w)
                    "'" !== t.charAt(o) || l("'") ? b() : w = !1;
                else
                    switch (t.charAt(o)) {
                        case "d":
                            h = c("d");
                            break;
                        case "D":
                            k("D", g, nt);
                            break;
                        case "o":
                            p = c("o");
                            break;
                        case "m":
                            s = c("m");
                            break;
                        case "M":
                            s = k("M", tt, it);
                            break;
                        case "y":
                            e = c("y");
                            break;
                        case "@":
                            u = new Date(c("@"));
                            e = u.getFullYear();
                            s = u.getMonth() + 1;
                            h = u.getDate();
                            break;
                        case "!":
                            u = new Date((c("!") - this._ticksTo1970) / 1e4);
                            e = u.getFullYear();
                            s = u.getMonth() + 1;
                            h = u.getDate();
                            break;
                        case "'":
                            l("'") ? b() : w = !0;
                            break;
                        default:
                            b()
                    }
            if (i.length > f && (v = i.substr(f),
                !/^\s+/.test(v)))
                throw "Extra/unparsed characters found in date: " + v;
            if (-1 === e ? e = (new Date).getFullYear() : 100 > e && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= e ? 0 : -100)),
                p > -1)
                for (s = 1,
                    h = p; ;) {
                    if (a = this._getDaysInMonth(e, s - 1),
                        a >= h)
                        break;
                    s++;
                    h -= a
                }
            if (u = this._daylightSavingAdjust(new Date(e, s - 1, h)),
                u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h)
                throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (n, t, i) {
            if (!t)
                return "";
            var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, c = (i ? i.dayNames : null) || this._defaults.dayNames, l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, f = function (t) {
                var i = n.length > u + 1 && n.charAt(u + 1) === t;
                return i && u++ ,
                    i
            }, e = function (n, t, i) {
                var r = "" + t;
                if (f(n))
                    for (; i > r.length;)
                        r = "0" + r;
                return r
            }, s = function (n, t, i, r) {
                return f(n) ? r[t] : i[t]
            }, r = "", o = !1;
            if (t)
                for (u = 0; n.length > u; u++)
                    if (o)
                        "'" !== n.charAt(u) || f("'") ? r += n.charAt(u) : o = !1;
                    else
                        switch (n.charAt(u)) {
                            case "d":
                                r += e("d", t.getDate(), 2);
                                break;
                            case "D":
                                r += s("D", t.getDay(), h, c);
                                break;
                            case "o":
                                r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                r += e("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                r += s("M", t.getMonth(), l, a);
                                break;
                            case "y":
                                r += f("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                r += t.getTime();
                                break;
                            case "!":
                                r += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                f("'") ? r += "'" : o = !0;
                                break;
                            default:
                                r += n.charAt(u)
                        }
            return r
        },
        _possibleChars: function (n) {
            for (var i = "", r = !1, u = function (i) {
                var r = n.length > t + 1 && n.charAt(t + 1) === i;
                return r && t++ ,
                    r
            }, t = 0; n.length > t; t++)
                if (r)
                    "'" !== n.charAt(t) || u("'") ? i += n.charAt(t) : r = !1;
                else
                    switch (n.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            u("'") ? i += "'" : r = !0;
                            break;
                        default:
                            i += n.charAt(t)
                    }
            return i
        },
        _get: function (n, t) {
            return void 0 !== n.settings[t] ? n.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (n, t) {
            if (n.input.val() !== n.lastVal) {
                var f = this._get(n, "dateFormat")
                    , r = n.lastVal = n.input ? n.input.val() : null
                    , u = this._getDefaultDate(n)
                    , i = u
                    , e = this._getFormatConfig(n);
                try {
                    i = this.parseDate(f, r, e) || u
                } catch (o) {
                    r = t ? "" : r
                }
                n.selectedDay = i.getDate();
                n.drawMonth = n.selectedMonth = i.getMonth();
                n.drawYear = n.selectedYear = i.getFullYear();
                n.currentDay = r ? i.getDate() : 0;
                n.currentMonth = r ? i.getMonth() : 0;
                n.currentYear = r ? i.getFullYear() : 0;
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function (n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function (t, i, r) {
            var f = function (n) {
                var t = new Date;
                return t.setDate(t.getDate() + n),
                    t
            }
                , e = function (i) {
                    try {
                        return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                    } catch (h) { }
                    for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                        switch (u[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(u[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(u[1], 10);
                                break;
                            case "m":
                            case "M":
                                e += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                                break;
                            case "y":
                            case "Y":
                                f += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                        }
                        u = s.exec(i)
                    }
                    return new Date(f, e, r)
                }
                , u = null == i || "" === i ? r : "string" == typeof i ? e(i) : "number" == typeof i ? isNaN(i) ? r : f(i) : new Date(i.getTime());
            return u = u && "Invalid Date" == "" + u ? r : u,
                u && (u.setHours(0),
                    u.setMinutes(0),
                    u.setSeconds(0),
                    u.setMilliseconds(0)),
                this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function (n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0),
                n) : null
        },
        _setDate: function (n, t, i) {
            var u = !t
                , f = n.selectedMonth
                , e = n.selectedYear
                , r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate();
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
            f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
            this._adjustInstDate(n);
            n.input && n.input.val(u ? "" : this._formatDate(n))
        },
        _getDate: function (n) {
            return !n.currentYear || n.input && "" === n.input.val() ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
        },
        _attachHandlers: function (t) {
            var r = this._get(t, "stepMonths")
                , i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        n.datepicker._adjustDate(i, -r, "M")
                    },
                    next: function () {
                        n.datepicker._adjustDate(i, +r, "M")
                    },
                    hide: function () {
                        n.datepicker._hideDatepicker()
                    },
                    today: function () {
                        n.datepicker._gotoToday(i)
                    },
                    selectDay: function () {
                        return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                            !1
                    },
                    selectMonth: function () {
                        return n.datepicker._selectMonthYear(i, this, "M"),
                            !1
                    },
                    selectYear: function () {
                        return n.datepicker._selectMonthYear(i, this, "Y"),
                            !1
                    }
                };
                n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (n) {
            var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, o, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date, gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())), f = this._get(n, "isRTL"), li = this._get(n, "showButtonPanel"), hi = this._get(n, "hideIfNoPrevNext"), ni = this._get(n, "navigationAsDateFormat"), e = this._getNumberOfMonths(n), ai = this._get(n, "showCurrentAtPos"), ci = this._get(n, "stepMonths"), ti = 1 !== e[0] || 1 !== e[1], ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)), w = this._getMinMaxDate(n, "min"), v = this._getMinMaxDate(n, "max"), t = n.drawMonth - ai, r = n.drawYear;
            if (0 > t && (t += 12,
                r--),
                v)
                for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - e[0] * e[1] + 1, v.getDate())),
                    b = w && w > b ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;)
                    t-- ,
                        0 > t && (t = 11,
                            r--);
            for (n.drawMonth = t,
                n.drawYear = r,
                s = this._get(n, "prevText"),
                s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s,
                rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>",
                h = this._get(n, "nextText"),
                h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h,
                ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>",
                k = this._get(n, "currentText"),
                ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt,
                k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k,
                et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>",
                ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (f ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (f ? "" : et) + "<\/div>" : "",
                c = parseInt(this._get(n, "firstDay"), 10),
                c = isNaN(c) ? 0 : c,
                ot = this._get(n, "showWeek"),
                ui = this._get(n, "dayNames"),
                fi = this._get(n, "dayNamesMin"),
                ei = this._get(n, "monthNames"),
                oi = this._get(n, "monthNamesShort"),
                st = this._get(n, "beforeShowDay"),
                g = this._get(n, "showOtherMonths"),
                si = this._get(n, "selectOtherMonths"),
                ht = this._getDefaultDate(n),
                nt = "",
                y = 0; e[0] > y; y++) {
                for (ct = "",
                    this.maxRows = 4,
                    p = 0; e[1] > p; p++) {
                    if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)),
                        l = " ui-corner-all",
                        u = "",
                        ti) {
                        if (u += "<div class='ui-datepicker-group",
                            e[1] > 1)
                            switch (p) {
                                case 0:
                                    u += " ui-datepicker-group-first";
                                    l = " ui-corner-" + (f ? "right" : "left");
                                    break;
                                case e[1] - 1:
                                    u += " ui-datepicker-group-last";
                                    l = " ui-corner-" + (f ? "left" : "right");
                                    break;
                                default:
                                    u += " ui-datepicker-group-middle";
                                    l = ""
                            }
                        u += "'>"
                    }
                    for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && 0 === y ? f ? ut : rt : "") + (/all|right/.test(l) && 0 === y ? f ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>",
                        at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "",
                        o = 0; 7 > o; o++)
                        vt = (o + c) % 7,
                            at += "<th scope='col'" + ((o + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                    for (u += at + "<\/tr><\/thead><tbody>",
                        yt = this._getDaysInMonth(r, t),
                        r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)),
                        pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7,
                        tt = Math.ceil((pt + yt) / 7),
                        wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt,
                        this.maxRows = wt,
                        i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)),
                        bt = 0; wt > bt; bt++) {
                        for (u += "<tr>",
                            kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "",
                            o = 0; 7 > o; o++)
                            d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""],
                                a = i.getMonth() !== t,
                                it = a && !si || !d[0] || w && w > i || v && i > v,
                                kt += "<td class='" + ((o + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + (a && !g || !d[2] ? "" : " title='" + d[2].replace(/'/g, "&#39;") + "'") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>",
                                i.setDate(i.getDate() + 1),
                                i = this._daylightSavingAdjust(i);
                        u += kt + "<\/tr>"
                    }
                    t++;
                    t > 11 && (t = 0,
                        r++);
                    u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (e[0] > 0 && p === e[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                    ct += u
                }
                nt += ct
            }
            return nt += ri,
                n._keyEvent = !1,
                nt
        },
        _generateMonthYearHeader: function (n, t, i, r, u, f, e, o) {
            var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"), b = this._get(n, "changeYear"), g = this._get(n, "showMonthAfterYear"), c = "<div class='ui-datepicker-title'>", l = "";
            if (f || !w)
                l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
            else {
                for (k = r && r.getFullYear() === i,
                    d = u && u.getFullYear() === i,
                    l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                    h = 0; 12 > h; h++)
                    (!k || h >= r.getMonth()) && (!d || u.getMonth() >= h) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                l += "<\/select>"
            }
            if (g || (c += l + (!f && w && b ? "" : "&#xa0;")),
                !n.yearshtml)
                if (n.yearshtml = "",
                    f || !b)
                    c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                else {
                    for (v = this._get(n, "yearRange").split(":"),
                        y = (new Date).getFullYear(),
                        p = function (n) {
                            var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                            return isNaN(t) ? y : t
                        }
                        ,
                        s = p(v[0]),
                        a = Math.max(s, p(v[1] || "")),
                        s = r ? Math.max(s, r.getFullYear()) : s,
                        a = u ? Math.min(a, u.getFullYear()) : a,
                        n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; a >= s; s++)
                        n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                    n.yearshtml += "<\/select>";
                    c += n.yearshtml;
                    n.yearshtml = null
                }
            return c += this._get(n, "yearSuffix"),
                g && (c += (!f && w && b ? "" : "&#xa0;") + l),
                c + "<\/div>"
        },
        _adjustInstDate: function (n, t, i) {
            var u = n.drawYear + ("Y" === i ? t : 0)
                , f = n.drawMonth + ("M" === i ? t : 0)
                , e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + ("D" === i ? t : 0)
                , r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
            n.selectedDay = r.getDate();
            n.drawMonth = n.selectedMonth = r.getMonth();
            n.drawYear = n.selectedYear = r.getFullYear();
            ("M" === i || "Y" === i) && this._notifyChange(n)
        },
        _restrictMinMax: function (n, t) {
            var i = this._getMinMaxDate(n, "min")
                , r = this._getMinMaxDate(n, "max")
                , u = i && i > t ? i : t;
            return r && u > r ? r : u
        },
        _notifyChange: function (n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function (n) {
            var t = this._get(n, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function (n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function (n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (n, t) {
            return new Date(n, t, 1).getDay()
        },
        _canAdjustMonth: function (n, t, i, r) {
            var f = this._getNumberOfMonths(n)
                , u = this._daylightSavingAdjust(new Date(i, r + (0 > t ? t : f[0] * f[1]), 1));
            return 0 > t && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())),
                this._isInRange(n, u)
        },
        _isInRange: function (n, t) {
            var i, f, e = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max"), r = null, u = null, s = this._get(n, "yearRange");
            return s && (i = s.split(":"),
                f = (new Date).getFullYear(),
                r = parseInt(i[0], 10),
                u = parseInt(i[1], 10),
                i[0].match(/[+\-].*/) && (r += f),
                i[1].match(/[+\-].*/) && (u += f)),
                (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || u >= t.getFullYear())
        },
        _getFormatConfig: function (n) {
            var t = this._get(n, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
                {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(n, "dayNamesShort"),
                    dayNames: this._get(n, "dayNames"),
                    monthNamesShort: this._get(n, "monthNamesShort"),
                    monthNames: this._get(n, "monthNames")
                }
        },
        _formatDate: function (n, t, i, r) {
            t || (n.currentDay = n.selectedDay,
                n.currentMonth = n.selectedMonth,
                n.currentYear = n.selectedYear);
            var u = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    });
    n.fn.datepicker = function (t) {
        if (!this.length)
            return this;
        n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick),
            n.datepicker.initialized = !0);
        0 === n("#" + n.datepicker._mainDivId).length && n("body").append(n.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof t ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i))
    }
        ;
    n.datepicker = new h;
    n.datepicker.initialized = !1;
    n.datepicker.uuid = (new Date).getTime();
    n.datepicker.version = "1.11.4";
    n.datepicker;
    n.widget("ui.slider", n.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1;
            this._mouseSliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function () {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function () {
            var r, i, u = this.options, t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), f = [];
            for (i = u.values && u.values.length || 1,
                t.length > i && (t.slice(i).remove(),
                    t = t.slice(0, i)),
                r = t.length; i > r; r++)
                f.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'><\/span>");
            this.handles = t.add(n(f.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function (t) {
                n(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function () {
            var t = this.options
                , i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]),
                this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = n("<div><\/div>").appendTo(this.element),
                    i = "ui-slider-range ui-widget-header ui-corner-all"),
                this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(),
                    this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var s, f, r, i, u, h, e, c, o = this, l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
                this.elementOffset = this.element.offset(),
                s = {
                    x: t.pageX,
                    y: t.pageY
                },
                f = this._normValueFromMouse(s),
                r = this._valueMax() - this._valueMin() + 1,
                this.handles.each(function (t) {
                    var e = Math.abs(f - o.values(t));
                    (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e,
                        i = n(this),
                        u = t)
                }),
                h = this._start(t, u),
                h === !1 ? !1 : (this._mouseSliding = !0,
                    this._handleIndex = u,
                    i.addClass("ui-state-active").focus(),
                    e = i.offset(),
                    c = !n(t.target).parents().addBack().is(".ui-slider-handle"),
                    this._clickOffset = c ? {
                        left: 0,
                        top: 0
                    } : {
                            left: t.pageX - e.left - i.width() / 2,
                            top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
                        },
                    this.handles.hasClass("ui-state-hover") || this._slide(t, u, f),
                    this._animateOff = !0,
                    !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (n) {
            var t = {
                x: n.pageX,
                y: n.pageY
            }
                , i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i),
                !1
        },
        _mouseStop: function (n) {
            return this.handles.removeClass("ui-state-active"),
                this._mouseSliding = !1,
                this._stop(n, this._handleIndex),
                this._change(n, this._handleIndex),
                this._handleIndex = null,
                this._clickOffset = null,
                this._animateOff = !1,
                !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (n) {
            var i, r, t, u, f;
            return "horizontal" === this.orientation ? (i = this.elementSize.width,
                r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height,
                    r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                t = r / i,
                t > 1 && (t = 1),
                0 > t && (t = 0),
                "vertical" === this.orientation && (t = 1 - t),
                u = this._valueMax() - this._valueMin(),
                f = this._valueMin() + t * u,
                this._trimAlignValue(f)
        },
        _start: function (n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t),
                i.values = this.values()),
                this._trigger("start", n, i)
        },
        _slide: function (n, t, i) {
            var r, f, u;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1),
                2 === this.options.values.length && this.options.range === !0 && (0 === t && i > r || 1 === t && r > i) && (i = r),
                i !== this.values(t) && (f = this.values(),
                    f[t] = i,
                    u = this._trigger("slide", n, {
                        handle: this.handles[t],
                        value: i,
                        values: f
                    }),
                    r = this.values(t ? 0 : 1),
                    u !== !1 && this.values(t, i))) : i !== this.value() && (u = this._trigger("slide", n, {
                        handle: this.handles[t],
                        value: i
                    }),
                        u !== !1 && this.value(i))
        },
        _stop: function (n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t),
                i.values = this.values());
            this._trigger("stop", n, i)
        },
        _change: function (n, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t),
                    i.values = this.values());
                this._lastChangedValue = t;
                this._trigger("change", n, i)
            }
        },
        value: function (n) {
            return arguments.length ? (this.options.value = this._trimAlignValue(n),
                this._refreshValue(),
                this._change(null, 0),
                void 0) : this._value()
        },
        values: function (t, i) {
            var u, f, r;
            if (arguments.length > 1)
                return this.options.values[t] = this._trimAlignValue(i),
                    this._refreshValue(),
                    this._change(null, t),
                    void 0;
            if (!arguments.length)
                return this._values();
            if (!n.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (u = this.options.values,
                f = arguments[0],
                r = 0; u.length > r; r += 1)
                u[r] = this._trimAlignValue(f[r]),
                    this._change(null, r);
            this._refreshValue()
        },
        _setOption: function (t, i) {
            var r, u = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0),
                this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
                    this.options.values = null)),
            n.isArray(this.options.values) && (u = this.options.values.length),
            "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i),
            this._super(t, i),
            t) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0,
                        this._refreshValue(),
                        r = 0; u > r; r += 1)
                        this._change(null, r);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0;
                    this._refresh();
                    this._animateOff = !1
            }
        },
        _value: function () {
            var n = this.options.value;
            return this._trimAlignValue(n)
        },
        _values: function (n) {
            var r, t, i;
            if (arguments.length)
                return r = this.options.values[n],
                    r = this._trimAlignValue(r);
            if (this.options.values && this.options.values.length) {
                for (t = this.options.values.slice(),
                    i = 0; t.length > i; i += 1)
                    t[i] = this._trimAlignValue(t[i]);
                return t
            }
            return []
        },
        _trimAlignValue: function (n) {
            if (this._valueMin() >= n)
                return this._valueMin();
            if (n >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1
                , i = (n - this._valueMin()) % t
                , r = n - i;
            return 2 * Math.abs(i) >= t && (r += i > 0 ? t : -t),
                parseFloat(r.toFixed(5))
        },
        _calculateNewMax: function () {
            var n = this.options.max
                , t = this._valueMin()
                , i = this.options.step
                , r = Math.floor(+(n - t).toFixed(this._precision()) / i) * i;
            n = r + t;
            this.max = parseFloat(n.toFixed(this._precision()))
        },
        _precision: function () {
            var n = this._precisionOf(this.options.step);
            return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))),
                n
        },
        _precisionOf: function (n) {
            var t = "" + n
                , i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshValue: function () {
            var s, t, c, f, h, e = this.options.range, i = this.options, r = this, u = this._animateOff ? !1 : i.animate, o = {};
            this.options.values && this.options.values.length ? this.handles.each(function (f) {
                t = 100 * ((r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()));
                o["horizontal" === r.orientation ? "left" : "bottom"] = t + "%";
                n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                r.options.range === !0 && ("horizontal" === r.orientation ? (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, i.animate),
                    1 === f && r.range[u ? "animate" : "css"]({
                        width: t - s + "%"
                    }, {
                            queue: !1,
                            duration: i.animate
                        })) : (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({
                            bottom: t + "%"
                        }, i.animate),
                            1 === f && r.range[u ? "animate" : "css"]({
                                height: t - s + "%"
                            }, {
                                    queue: !1,
                                    duration: i.animate
                                })));
                s = t
            }) : (c = this.value(),
                f = this._valueMin(),
                h = this._valueMax(),
                t = h !== f ? 100 * ((c - f) / (h - f)) : 0,
                o["horizontal" === this.orientation ? "left" : "bottom"] = t + "%",
                this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate),
                "min" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    width: t + "%"
                }, i.animate),
                "max" === e && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                    width: 100 - t + "%"
                }, {
                        queue: !1,
                        duration: i.animate
                    }),
                "min" === e && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    height: t + "%"
                }, i.animate),
                "max" === e && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                    height: 100 - t + "%"
                }, {
                        queue: !1,
                        duration: i.animate
                    }))
        },
        _handleEvents: {
            keydown: function (t) {
                var e, r, i, u, f = n(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_UP:
                    case n.ui.keyCode.PAGE_DOWN:
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (t.preventDefault(),
                            !this._keySliding && (this._keySliding = !0,
                                n(t.target).addClass("ui-state-active"),
                                e = this._start(t, f),
                                e === !1))
                            return
                }
                switch (u = this.options.step,
                r = i = this.options.values && this.options.values.length ? this.values(f) : this.value(),
                t.keyCode) {
                    case n.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case n.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case n.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                        if (r === this._valueMax())
                            return;
                        i = this._trimAlignValue(r + u);
                        break;
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (r === this._valueMin())
                            return;
                        i = this._trimAlignValue(r - u)
                }
                this._slide(t, f, i)
            },
            keyup: function (t) {
                var i = n(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                    this._stop(t, i),
                    this._change(t, i),
                    n(t.target).removeClass("ui-state-active"))
            }
        }
    });
    n.widget("ui.spinner", {
        version: "1.11.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            "" !== this.value() && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var t = {}
                , i = this.element;
            return n.each(["min", "max", "step"], function (n, r) {
                var u = i.attr(r);
                void 0 !== u && u.length && (t[r] = u)
            }),
                t
        },
        _events: {
            keydown: function (n) {
                this._start(n) && this._keydown(n) && n.preventDefault()
            },
            keyup: "_stop",
            focus: function () {
                this.previous = this.element.val()
            },
            blur: function (n) {
                return this.cancelBlur ? (delete this.cancelBlur,
                    void 0) : (this._stop(),
                        this._refresh(),
                        this.previous !== this.element.val() && this._trigger("change", n),
                        void 0)
            },
            mousewheel: function (n, t) {
                if (t) {
                    if (!this.spinning && !this._start(n))
                        return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, n);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(n)
                    }, 100);
                    n.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function (t) {
                function r() {
                    var n = this.element[0] === this.document[0].activeElement;
                    n || (this.element.focus(),
                        this.previous = i,
                        this._delay(function () {
                            this.previous = i
                        }))
                }
                var i;
                i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
                t.preventDefault();
                r.call(this);
                this.cancelBlur = !0;
                this._delay(function () {
                    delete this.cancelBlur;
                    r.call(this)
                });
                this._start(t) !== !1 && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function (t) {
                if (n(t.currentTarget).hasClass("ui-state-active"))
                    return this._start(t) === !1 ? !1 : (this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t),
                        void 0)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            this.buttons.height() > Math.ceil(.5 * n.height()) && n.height() > 0 && n.height(n.height());
            this.options.disabled && this.disable()
        },
        _keydown: function (t) {
            var r = this.options
                , i = n.ui.keyCode;
            switch (t.keyCode) {
                case i.UP:
                    return this._repeat(null, 1, t),
                        !0;
                case i.DOWN:
                    return this._repeat(null, -1, t),
                        !0;
                case i.PAGE_UP:
                    return this._repeat(null, r.page, t),
                        !0;
                case i.PAGE_DOWN:
                    return this._repeat(null, -r.page, t),
                        !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
        },
        _start: function (n) {
            return this.spinning || this._trigger("start", n) !== !1 ? (this.counter || (this.counter = 1),
                this.spinning = !0,
                !0) : !1
        },
        _repeat: function (n, t, i) {
            n = n || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function () {
                this._repeat(40, t, i)
            }, n);
            this._spin(t * this.options.step, i)
        },
        _spin: function (n, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1);
            i = this._adjustValue(i + n * this._increment(this.counter));
            this.spinning && this._trigger("spin", t, {
                value: i
            }) === !1 || (this._value(i),
                this.counter++)
        },
        _increment: function (t) {
            var i = this.options.incremental;
            return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function () {
            var n = this._precisionOf(this.options.step);
            return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))),
                n
        },
        _precisionOf: function (n) {
            var t = "" + n
                , i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _adjustValue: function (n) {
            var r, i, t = this.options;
            return r = null !== t.min ? t.min : 0,
                i = n - r,
                i = Math.round(i / t.step) * t.step,
                n = r + i,
                n = parseFloat(n.toFixed(this._precision())),
                null !== t.max && n > t.max ? t.max : null !== t.min && t.min > n ? t.min : n
        },
        _stop: function (n) {
            this.spinning && (clearTimeout(this.timer),
                clearTimeout(this.mousewheelTimer),
                this.counter = 0,
                this.spinning = !1,
                this._trigger("stop", n))
        },
        _setOption: function (n, t) {
            if ("culture" === n || "numberFormat" === n) {
                var i = this._parse(this.element.val());
                return this.options[n] = t,
                    this.element.val(this._format(i)),
                    void 0
            }
            ("max" === n || "min" === n || "step" === n) && "string" == typeof t && (t = this._parse(t));
            "icons" === n && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),
                this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));
            this._super(n, t);
            "disabled" === n && (this.widget().toggleClass("ui-state-disabled", !!t),
                this.element.prop("disabled", !!t),
                this.buttons.button(t ? "disable" : "enable"))
        },
        _setOptions: t(function (n) {
            this._super(n)
        }),
        _parse: function (n) {
            return "string" == typeof n && "" !== n && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n),
                "" === n || isNaN(n) ? null : n
        },
        _format: function (n) {
            return "" === n ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function () {
            var n = this.value();
            return null === n ? !1 : n === this._adjustValue(n)
        },
        _value: function (n, t) {
            var i;
            "" !== n && (i = this._parse(n),
                null !== i && (t || (i = this._adjustValue(i)),
                    n = this._format(i)));
            this.element.val(n);
            this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function (n) {
            this._stepUp(n)
        }),
        _stepUp: function (n) {
            this._start() && (this._spin((n || 1) * this.options.step),
                this._stop())
        },
        stepDown: t(function (n) {
            this._stepDown(n)
        }),
        _stepDown: function (n) {
            this._start() && (this._spin((n || 1) * -this.options.step),
                this._stop())
        },
        pageUp: t(function (n) {
            this._stepUp((n || 1) * this.options.page)
        }),
        pageDown: t(function (n) {
            this._stepDown((n || 1) * this.options.page)
        }),
        value: function (n) {
            return arguments.length ? (t(this._value).call(this, n),
                void 0) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    })
})