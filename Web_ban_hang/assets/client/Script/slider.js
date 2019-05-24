﻿!function (n) {
    var t = !0;
    n.flexslider = function (i, r) {
        var u = n(i);
        u.vars = n.extend({}, n.flexslider.defaults, r);
        var e = u.vars.namespace, y = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, p = ("ontouchstart" in window || y || window.DocumentTouch && document instanceof DocumentTouch) && u.vars.touch, v = "click touchend MSPointerUp keyup", h = "", w, c = "vertical" === u.vars.direction, s = u.vars.reverse, o = u.vars.itemWidth > 0, l = "fade" === u.vars.animation, a = "" !== u.vars.asNavFor, f = {};
        n.data(i, "flexslider", u);
        f = {
            init: function () {
                u.animating = !1;
                u.currentSlide = parseInt(u.vars.startAt ? u.vars.startAt : 0, 10);
                isNaN(u.currentSlide) && (u.currentSlide = 0);
                u.animatingTo = u.currentSlide;
                u.atEnd = 0 === u.currentSlide || u.currentSlide === u.last;
                u.containerSelector = u.vars.selector.substr(0, u.vars.selector.search(" "));
                u.slides = n(u.vars.selector, u);
                u.container = n(u.containerSelector, u);
                u.count = u.slides.length;
                u.syncExists = n(u.vars.sync).length > 0;
                "slide" === u.vars.animation && (u.vars.animation = "swing");
                u.prop = c ? "top" : "marginLeft";
                u.args = {};
                u.manualPause = !1;
                u.stopped = !1;
                u.started = !1;
                u.startTimeout = null;
                u.transitions = !u.vars.video && !l && u.vars.useCSS && function () {
                    var i = document.createElement("div")
                        , n = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var t in n)
                        if (void 0 !== i.style[n[t]])
                            return u.pfx = n[t].replace("Perspective", "").toLowerCase(),
                                u.prop = "-" + u.pfx + "-transform",
                                !0;
                    return !1
                }();
                u.ensureAnimationEnd = "";
                "" !== u.vars.controlsContainer && (u.controlsContainer = n(u.vars.controlsContainer).length > 0 && n(u.vars.controlsContainer));
                "" !== u.vars.manualControls && (u.manualControls = n(u.vars.manualControls).length > 0 && n(u.vars.manualControls));
                "" !== u.vars.customDirectionNav && (u.customDirectionNav = 2 === n(u.vars.customDirectionNav).length && n(u.vars.customDirectionNav));
                u.vars.randomize && (u.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }),
                    u.container.empty().append(u.slides));
                u.doMath();
                u.setup("init");
                u.vars.controlNav && f.controlNav.setup();
                u.vars.directionNav && f.directionNav.setup();
                u.vars.keyboard && (1 === n(u.containerSelector).length || u.vars.multipleKeyboard) && n(document).bind("keyup", function (n) {
                    var t = n.keyCode, i;
                    u.animating || 39 !== t && 37 !== t || (i = 39 === t ? u.getTarget("next") : 37 === t ? u.getTarget("prev") : !1,
                        u.flexAnimate(i, u.vars.pauseOnAction))
                });
                u.vars.mousewheel && u.bind("mousewheel", function (n, t) {
                    n.preventDefault();
                    var i = 0 > t ? u.getTarget("next") : u.getTarget("prev");
                    u.flexAnimate(i, u.vars.pauseOnAction)
                });
                u.vars.pausePlay && f.pausePlay.setup();
                u.vars.slideshow && u.vars.pauseInvisible && f.pauseInvisible.init();
                u.vars.slideshow && (u.vars.pauseOnHover && u.hover(function () {
                    u.manualPlay || u.manualPause || u.pause()
                }, function () {
                    u.manualPause || u.manualPlay || u.stopped || u.play()
                }),
                    u.vars.pauseInvisible && f.pauseInvisible.isHidden() || (u.vars.initDelay > 0 ? u.startTimeout = setTimeout(u.play, u.vars.initDelay) : u.play()));
                a && f.asNav.setup();
                p && u.vars.touch && f.touch();
                (!l || l && u.vars.smoothHeight) && n(window).bind("resize orientationchange focus", f.resize);
                u.find("img").attr("draggable", "false");
                setTimeout(function () {
                    u.vars.start(u)
                }, 200)
            },
            asNav: {
                setup: function () {
                    u.asNav = !0;
                    u.animatingTo = Math.floor(u.currentSlide / u.move);
                    u.currentItem = u.currentSlide;
                    u.slides.removeClass(e + "active-slide").eq(u.currentItem).addClass(e + "active-slide");
                    y ? (i._slider = u,
                        u.slides.each(function () {
                            var t = this;
                            t._gesture = new MSGesture;
                            t._gesture.target = t;
                            t.addEventListener("MSPointerDown", function (n) {
                                n.preventDefault();
                                n.currentTarget._gesture && n.currentTarget._gesture.addPointer(n.pointerId)
                            }, !1);
                            t.addEventListener("MSGestureTap", function (t) {
                                t.preventDefault();
                                var i = n(this)
                                    , r = i.index();
                                n(u.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (u.direction = u.currentItem < r ? "next" : "prev",
                                    u.flexAnimate(r, u.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : u.slides.on(v, function (t) {
                            t.preventDefault();
                            var i = n(this)
                                , r = i.index()
                                , f = i.offset().left - n(u).scrollLeft();
                            0 >= f && i.hasClass(e + "active-slide") ? u.flexAnimate(u.getTarget("prev"), !0) : n(u.vars.asNavFor).data("flexslider").animating || i.hasClass(e + "active-slide") || (u.direction = u.currentItem < r ? "next" : "prev",
                                u.flexAnimate(r, u.vars.pauseOnAction, !1, !0, !0))
                        })
                }
            },
            controlNav: {
                setup: function () {
                    u.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var c = "thumbnails" === u.vars.controlNav ? "control-thumbs" : "control-paging", s = 1, o, t, i, r;
                    if (u.controlNavScaffold = n('<ol class="' + e + "control-nav " + e + c + '"><\/ol>'),
                        u.pagingCount > 1)
                        for (i = 0; i < u.pagingCount; i++)
                            (t = u.slides.eq(i),
                                void 0 === t.attr("data-thumb-alt") && t.attr("data-thumb-alt", ""),
                                altText = "" !== t.attr("data-thumb-alt") ? altText = ' alt="' + t.attr("data-thumb-alt") + '"' : "",
                                o = "thumbnails" === u.vars.controlNav ? '<img src="' + t.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + s + "<\/a>",
                                "thumbnails" === u.vars.controlNav && !0 === u.vars.thumbCaptions) && (r = t.attr("data-thumbcaption"),
                                    "" !== r && void 0 !== r && (o += '<span class="' + e + 'caption">' + r + "<\/span>")),
                                u.controlNavScaffold.append("<li>" + o + "<\/li>"),
                                s++;
                    u.controlsContainer ? n(u.controlsContainer).append(u.controlNavScaffold) : u.append(u.controlNavScaffold);
                    f.controlNav.set();
                    f.controlNav.active();
                    u.controlNavScaffold.delegate("a, img", v, function (t) {
                        if (t.preventDefault(),
                            "" === h || h === t.type) {
                            var i = n(this)
                                , r = u.controlNav.index(i);
                            i.hasClass(e + "active") || (u.direction = r > u.currentSlide ? "next" : "prev",
                                u.flexAnimate(r, u.vars.pauseOnAction))
                        }
                        "" === h && (h = t.type);
                        f.setToClearWatchedEvent()
                    })
                },
                setupManual: function () {
                    u.controlNav = u.manualControls;
                    f.controlNav.active();
                    u.controlNav.bind(v, function (t) {
                        if (t.preventDefault(),
                            "" === h || h === t.type) {
                            var i = n(this)
                                , r = u.controlNav.index(i);
                            i.hasClass(e + "active") || (u.direction = r > u.currentSlide ? "next" : "prev",
                                u.flexAnimate(r, u.vars.pauseOnAction))
                        }
                        "" === h && (h = t.type);
                        f.setToClearWatchedEvent()
                    })
                },
                set: function () {
                    var t = "thumbnails" === u.vars.controlNav ? "img" : "a";
                    u.controlNav = n("." + e + "control-nav li " + t, u.controlsContainer ? u.controlsContainer : u)
                },
                active: function () {
                    u.controlNav.removeClass(e + "active").eq(u.animatingTo).addClass(e + "active")
                },
                update: function (t, i) {
                    u.pagingCount > 1 && "add" === t ? u.controlNavScaffold.append(n('<li><a href="#">' + u.count + "<\/a><\/li>")) : 1 === u.pagingCount ? u.controlNavScaffold.find("li").remove() : u.controlNav.eq(i).closest("li").remove();
                    f.controlNav.set();
                    u.pagingCount > 1 && u.pagingCount !== u.controlNav.length ? u.update(i, t) : f.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var t = n('<ul class="' + e + 'direction-nav"><li class="' + e + 'nav-prev"><a class="' + e + 'prev" href="#">' + u.vars.prevText + '<\/a><\/li><li class="' + e + 'nav-next"><a class="' + e + 'next" href="#">' + u.vars.nextText + "<\/a><\/li><\/ul>");
                    u.customDirectionNav ? u.directionNav = u.customDirectionNav : u.controlsContainer ? (n(u.controlsContainer).append(t),
                        u.directionNav = n("." + e + "direction-nav li a", u.controlsContainer)) : (u.append(t),
                            u.directionNav = n("." + e + "direction-nav li a", u));
                    f.directionNav.update();
                    u.directionNav.bind(v, function (t) {
                        t.preventDefault();
                        var i;
                        ("" === h || h === t.type) && (i = n(this).hasClass(e + "next") ? u.getTarget("next") : u.getTarget("prev"),
                            u.flexAnimate(i, u.vars.pauseOnAction));
                        "" === h && (h = t.type);
                        f.setToClearWatchedEvent()
                    })
                },
                update: function () {
                    var n = e + "disabled";
                    1 === u.pagingCount ? u.directionNav.addClass(n).attr("tabindex", "-1") : u.vars.animationLoop ? u.directionNav.removeClass(n).removeAttr("tabindex") : 0 === u.animatingTo ? u.directionNav.removeClass(n).filter("." + e + "prev").addClass(n).attr("tabindex", "-1") : u.animatingTo === u.last ? u.directionNav.removeClass(n).filter("." + e + "next").addClass(n).attr("tabindex", "-1") : u.directionNav.removeClass(n).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function () {
                    var t = n('<div class="' + e + 'pauseplay"><a href="#"><\/a><\/div>');
                    u.controlsContainer ? (u.controlsContainer.append(t),
                        u.pausePlay = n("." + e + "pauseplay a", u.controlsContainer)) : (u.append(t),
                            u.pausePlay = n("." + e + "pauseplay a", u));
                    f.pausePlay.update(u.vars.slideshow ? e + "pause" : e + "play");
                    u.pausePlay.bind(v, function (t) {
                        t.preventDefault();
                        ("" === h || h === t.type) && (n(this).hasClass(e + "pause") ? (u.manualPause = !0,
                            u.manualPlay = !1,
                            u.pause()) : (u.manualPause = !1,
                                u.manualPlay = !0,
                                u.play()));
                        "" === h && (h = t.type);
                        f.setToClearWatchedEvent()
                    })
                },
                update: function (n) {
                    "play" === n ? u.pausePlay.removeClass(e + "pause").addClass(e + "play").html(u.vars.playText) : u.pausePlay.removeClass(e + "play").addClass(e + "pause").html(u.vars.pauseText)
                }
            },
            touch: function () {
                function g(n) {
                    n.stopPropagation();
                    u.animating ? n.preventDefault() : (u.pause(),
                        i._gesture.addPointer(n.pointerId),
                        r = 0,
                        t = c ? u.h : u.w,
                        e = Number(new Date),
                        f = o && s && u.animatingTo === u.last ? 0 : o && s ? u.limit - (u.itemW + u.vars.itemMargin) * u.move * u.animatingTo : o && u.currentSlide === u.last ? u.limit : o ? (u.itemW + u.vars.itemMargin) * u.move * u.currentSlide : s ? (u.last - u.currentSlide + u.cloneOffset) * t : (u.currentSlide + u.cloneOffset) * t)
                }
                function nt(u) {
                    var o, s, a;
                    return u.stopPropagation(),
                        o = u.target._slider,
                        o ? (s = -u.translationX,
                            a = -u.translationY,
                            r += c ? a : s,
                            n = r,
                            h = c ? Math.abs(r) < Math.abs(-s) : Math.abs(r) < Math.abs(-a),
                            u.detail === u.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                                i._gesture.stop()
                            }) : void ((!h || Number(new Date) - e > 500) && (u.preventDefault(),
                                !l && o.transitions && (o.vars.animationLoop || (n = r / (0 === o.currentSlide && 0 > r || o.currentSlide === o.last && r > 0 ? Math.abs(r) / t + 2 : 1)),
                                    o.setProps(f + n, "setTouch"))))) : void 0
                }
                function tt(i) {
                    var u, o, c;
                    i.stopPropagation();
                    u = i.target._slider;
                    u && (u.animatingTo !== u.currentSlide || h || null === n || (o = s ? -n : n,
                        c = o > 0 ? u.getTarget("next") : u.getTarget("prev"),
                        u.canAdvance(c) && (Number(new Date) - e < 550 && Math.abs(o) > 50 || Math.abs(o) > t / 2) ? u.flexAnimate(c, u.vars.pauseOnAction) : l || u.flexAnimate(u.currentSlide, u.vars.pauseOnAction, !0)),
                        p = null,
                        w = null,
                        n = null,
                        f = null,
                        r = 0)
                }
                var p, w, f, t, n, e, d, b, k, h = !1, a = 0, v = 0, r = 0;
                y ? (i.style.msTouchAction = "none",
                    i._gesture = new MSGesture,
                    i._gesture.target = i,
                    i.addEventListener("MSPointerDown", g, !1),
                    i._slider = u,
                    i.addEventListener("MSGestureChange", nt, !1),
                    i.addEventListener("MSGestureEnd", tt, !1)) : (d = function (n) {
                        u.animating ? n.preventDefault() : (window.navigator.msPointerEnabled || 1 === n.touches.length) && (u.pause(),
                            t = c ? u.h : u.w,
                            e = Number(new Date),
                            a = n.touches[0].pageX,
                            v = n.touches[0].pageY,
                            f = o && s && u.animatingTo === u.last ? 0 : o && s ? u.limit - (u.itemW + u.vars.itemMargin) * u.move * u.animatingTo : o && u.currentSlide === u.last ? u.limit : o ? (u.itemW + u.vars.itemMargin) * u.move * u.currentSlide : s ? (u.last - u.currentSlide + u.cloneOffset) * t : (u.currentSlide + u.cloneOffset) * t,
                            p = c ? v : a,
                            w = c ? a : v,
                            i.addEventListener("touchmove", b, !1),
                            i.addEventListener("touchend", k, !1))
                    }
                        ,
                        b = function (i) {
                            a = i.touches[0].pageX;
                            v = i.touches[0].pageY;
                            n = c ? p - v : p - a;
                            h = c ? Math.abs(n) < Math.abs(a - w) : Math.abs(n) < Math.abs(v - w);
                            (!h || Number(new Date) - e > 500) && (i.preventDefault(),
                                !l && u.transitions && (u.vars.animationLoop || (n /= 0 === u.currentSlide && 0 > n || u.currentSlide === u.last && n > 0 ? Math.abs(n) / t + 2 : 1),
                                    u.setProps(f + n, "setTouch")))
                        }
                        ,
                        k = function () {
                            if (i.removeEventListener("touchmove", b, !1),
                                u.animatingTo === u.currentSlide && !h && null !== n) {
                                var r = s ? -n : n
                                    , o = r > 0 ? u.getTarget("next") : u.getTarget("prev");
                                u.canAdvance(o) && (Number(new Date) - e < 550 && Math.abs(r) > 50 || Math.abs(r) > t / 2) ? u.flexAnimate(o, u.vars.pauseOnAction) : l || u.flexAnimate(u.currentSlide, u.vars.pauseOnAction, !0)
                            }
                            i.removeEventListener("touchend", k, !1);
                            p = null;
                            w = null;
                            n = null;
                            f = null
                        }
                        ,
                        i.addEventListener("touchstart", d, !1))
            },
            resize: function () {
                !u.animating && u.is(":visible") && (o || u.doMath(),
                    l ? f.smoothHeight() : o ? (u.slides.width(u.computedW),
                        u.update(u.pagingCount),
                        u.setProps()) : c ? (u.viewport.height(u.h),
                            u.setProps(u.h, "setTotal")) : (u.vars.smoothHeight && f.smoothHeight(),
                                u.newSlides.width(u.computedW),
                                u.setProps(u.computedW, "setTotal")))
            },
            smoothHeight: function (n) {
                if (!c || l) {
                    var t = l ? u : u.viewport;
                    n ? t.animate({
                        height: u.slides.eq(u.animatingTo).height()
                    }, n) : t.height(u.slides.eq(u.animatingTo).height())
                }
            },
            sync: function (t) {
                var i = n(u.vars.sync).data("flexslider")
                    , r = u.animatingTo;
                switch (t) {
                    case "animate":
                        i.flexAnimate(r, u.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        i.playing || i.asNav || i.play();
                        break;
                    case "pause":
                        i.pause()
                }
            },
            uniqueID: function (t) {
                return t.filter("[id]").add(t.find("[id]")).each(function () {
                    var t = n(this);
                    t.attr("id", t.attr("id") + "_clone")
                }),
                    t
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var n = f.pauseInvisible.getHiddenProp(), t;
                    n && (t = n.replace(/[H|h]idden/, "") + "visibilitychange",
                        document.addEventListener(t, function () {
                            f.pauseInvisible.isHidden() ? u.startTimeout ? clearTimeout(u.startTimeout) : u.pause() : u.started ? u.play() : u.vars.initDelay > 0 ? setTimeout(u.play, u.vars.initDelay) : u.play()
                        }))
                },
                isHidden: function () {
                    var n = f.pauseInvisible.getHiddenProp();
                    return n ? document[n] : !1
                },
                getHiddenProp: function () {
                    var t = ["webkit", "moz", "ms", "o"], n;
                    if ("hidden" in document)
                        return "hidden";
                    for (n = 0; n < t.length; n++)
                        if (t[n] + "Hidden" in document)
                            return t[n] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(w);
                w = setTimeout(function () {
                    h = ""
                }, 3e3)
            }
        };
        u.flexAnimate = function (t, i, r, h, v) {
            var w, y, d, b, k;
            if (u.vars.animationLoop || t === u.currentSlide || (u.direction = t > u.currentSlide ? "next" : "prev"),
                a && 1 === u.pagingCount && (u.direction = u.currentItem < t ? "next" : "prev"),
                !u.animating && (u.canAdvance(t, v) || r) && u.is(":visible")) {
                if (a && h) {
                    if (w = n(u.vars.asNavFor).data("flexslider"),
                        u.atEnd = 0 === t || t === u.count - 1,
                        w.flexAnimate(t, !0, !1, !0, v),
                        u.direction = u.currentItem < t ? "next" : "prev",
                        w.direction = u.direction,
                        Math.ceil((t + 1) / u.visible) - 1 === u.currentSlide || 0 === t)
                        return u.currentItem = t,
                            u.slides.removeClass(e + "active-slide").eq(t).addClass(e + "active-slide"),
                            !1;
                    u.currentItem = t;
                    u.slides.removeClass(e + "active-slide").eq(t).addClass(e + "active-slide");
                    t = Math.floor(t / u.visible)
                }
                (u.animating = !0,
                    u.animatingTo = t,
                    i && u.pause(),
                    u.vars.before(u),
                    u.syncExists && !v && f.sync("animate"),
                    u.vars.controlNav && f.controlNav.active(),
                    o || u.slides.removeClass(e + "active-slide").eq(t).addClass(e + "active-slide"),
                    u.atEnd = 0 === t || t === u.last,
                    u.vars.directionNav && f.directionNav.update(),
                    t === u.last && (u.vars.end(u),
                        u.vars.animationLoop || u.pause()),
                    l) ? p ? (u.slides.eq(u.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }),
                        u.slides.eq(t).css({
                            opacity: 1,
                            zIndex: 2
                        }),
                        u.wrapup(y)) : (u.slides.eq(u.currentSlide).css({
                            zIndex: 1
                        }).animate({
                            opacity: 0
                        }, u.vars.animationSpeed, u.vars.easing),
                            u.slides.eq(t).css({
                                zIndex: 2
                            }).animate({
                                opacity: 1
                            }, u.vars.animationSpeed, u.vars.easing, u.wrapup)) : (y = c ? u.slides.filter(":first").height() : u.computedW,
                                o ? (d = u.vars.itemMargin,
                                    k = (u.itemW + d) * u.move * u.animatingTo,
                                    b = k > u.limit && 1 !== u.visible ? u.limit : k) : b = 0 === u.currentSlide && t === u.count - 1 && u.vars.animationLoop && "next" !== u.direction ? s ? (u.count + u.cloneOffset) * y : 0 : u.currentSlide === u.last && 0 === t && u.vars.animationLoop && "prev" !== u.direction ? s ? 0 : (u.count + 1) * y : s ? (u.count - 1 - t + u.cloneOffset) * y : (t + u.cloneOffset) * y,
                                u.setProps(b, "", u.vars.animationSpeed),
                                u.transitions ? (u.vars.animationLoop && u.atEnd || (u.animating = !1,
                                    u.currentSlide = u.animatingTo),
                                    u.container.unbind("webkitTransitionEnd transitionend"),
                                    u.container.bind("webkitTransitionEnd transitionend", function () {
                                        clearTimeout(u.ensureAnimationEnd);
                                        u.wrapup(y)
                                    }),
                                    clearTimeout(u.ensureAnimationEnd),
                                    u.ensureAnimationEnd = setTimeout(function () {
                                        u.wrapup(y)
                                    }, u.vars.animationSpeed + 100)) : u.container.animate(u.args, u.vars.animationSpeed, u.vars.easing, function () {
                                        u.wrapup(y)
                                    }));
                u.vars.smoothHeight && f.smoothHeight(u.vars.animationSpeed)
            }
        }
            ;
        u.wrapup = function (n) {
            l || o || (0 === u.currentSlide && u.animatingTo === u.last && u.vars.animationLoop ? u.setProps(n, "jumpEnd") : u.currentSlide === u.last && 0 === u.animatingTo && u.vars.animationLoop && u.setProps(n, "jumpStart"));
            u.animating = !1;
            u.currentSlide = u.animatingTo;
            u.vars.after(u)
        }
            ;
        u.animateSlides = function () {
            !u.animating && t && u.flexAnimate(u.getTarget("next"))
        }
            ;
        u.pause = function () {
            clearInterval(u.animatedSlides);
            u.animatedSlides = null;
            u.playing = !1;
            u.vars.pausePlay && f.pausePlay.update("play");
            u.syncExists && f.sync("pause")
        }
            ;
        u.play = function () {
            u.playing && clearInterval(u.animatedSlides);
            u.animatedSlides = u.animatedSlides || setInterval(u.animateSlides, u.vars.slideshowSpeed);
            u.started = u.playing = !0;
            u.vars.pausePlay && f.pausePlay.update("pause");
            u.syncExists && f.sync("play")
        }
            ;
        u.stop = function () {
            u.pause();
            u.stopped = !0
        }
            ;
        u.canAdvance = function (n, t) {
            var i = a ? u.pagingCount - 1 : u.last;
            return t ? !0 : a && u.currentItem === u.count - 1 && 0 === n && "prev" === u.direction ? !0 : a && 0 === u.currentItem && n === u.pagingCount - 1 && "next" !== u.direction ? !1 : n !== u.currentSlide || a ? u.vars.animationLoop ? !0 : u.atEnd && 0 === u.currentSlide && n === i && "next" !== u.direction ? !1 : u.atEnd && u.currentSlide === i && 0 === n && "next" === u.direction ? !1 : !0 : !1
        }
            ;
        u.getTarget = function (n) {
            return u.direction = n,
                "next" === n ? u.currentSlide === u.last ? 0 : u.currentSlide + 1 : 0 === u.currentSlide ? u.last : u.currentSlide - 1
        }
            ;
        u.setProps = function (n, t, i) {
            var r = function () {
                var i = n ? n : (u.itemW + u.vars.itemMargin) * u.move * u.animatingTo
                    , r = function () {
                        if (o)
                            return "setTouch" === t ? n : s && u.animatingTo === u.last ? 0 : s ? u.limit - (u.itemW + u.vars.itemMargin) * u.move * u.animatingTo : u.animatingTo === u.last ? u.limit : i;
                        switch (t) {
                            case "setTotal":
                                return s ? (u.count - 1 - u.currentSlide + u.cloneOffset) * n : (u.currentSlide + u.cloneOffset) * n;
                            case "setTouch":
                                return s ? n : n;
                            case "jumpEnd":
                                return s ? n : u.count * n;
                            case "jumpStart":
                                return s ? u.count * n : n;
                            default:
                                return n
                        }
                    }();
                return -1 * r + "px"
            }();
            u.transitions && (r = c ? "translate3d(0," + r + ",0)" : "translate3d(" + r + ",0,0)",
                i = void 0 !== i ? i / 1e3 + "s" : "0s",
                u.container.css("-" + u.pfx + "-transition-duration", i),
                u.container.css("transition-duration", i));
            u.args[u.prop] = r;
            (u.transitions || void 0 === i) && u.container.css(u.args);
            u.container.css("transform", r)
        }
            ;
        u.setup = function (t) {
            if (l)
                u.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative"
                }),
                    "init" === t && (p ? u.slides.css({
                        opacity: 0,
                        display: "block",
                        webkitTransition: "opacity " + u.vars.animationSpeed / 1e3 + "s ease",
                        zIndex: 1
                    }).eq(u.currentSlide).css({
                        opacity: 1,
                        zIndex: 2
                    }) : 0 == u.vars.fadeFirstSlide ? u.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(u.currentSlide).css({
                        zIndex: 2
                    }).css({
                        opacity: 1
                    }) : u.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(u.currentSlide).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, u.vars.animationSpeed, u.vars.easing)),
                    u.vars.smoothHeight && f.smoothHeight();
            else {
                var i, r;
                "init" === t && (u.viewport = n('<div class="' + e + 'viewport"><\/div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(u).append(u.container),
                    u.cloneCount = 0,
                    u.cloneOffset = 0,
                    s && (r = n.makeArray(u.slides).reverse(),
                        u.slides = n(r),
                        u.container.empty().append(u.slides)));
                u.vars.animationLoop && !o && (u.cloneCount = 2,
                    u.cloneOffset = 1,
                    "init" !== t && u.container.find(".clone").remove(),
                    u.container.append(f.uniqueID(u.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(u.slides.last().clone().addClass("clone")).attr("aria-hidden", "true")));
                u.newSlides = n(u.vars.selector, u);
                i = s ? u.count - 1 - u.currentSlide + u.cloneOffset : u.currentSlide + u.cloneOffset;
                c && !o ? (u.container.height(200 * (u.count + u.cloneCount) + "%").css("position", "absolute").width("100%"),
                    setTimeout(function () {
                        u.newSlides.css({
                            display: "block"
                        });
                        u.doMath();
                        u.viewport.height(u.h);
                        u.setProps(i * u.h, "init")
                    }, "init" === t ? 100 : 0)) : (u.container.width(200 * (u.count + u.cloneCount) + "%"),
                        u.setProps(i * u.computedW, "init"),
                        setTimeout(function () {
                            u.doMath();
                            u.newSlides.css({
                                width: u.computedW,
                                marginRight: u.computedM,
                                float: "left",
                                display: "block"
                            });
                            u.vars.smoothHeight && f.smoothHeight()
                        }, "init" === t ? 100 : 0))
            }
            o || u.slides.removeClass(e + "active-slide").eq(u.currentSlide).addClass(e + "active-slide");
            u.vars.init(u)
        }
            ;
        u.doMath = function () {
            var r = u.slides.first()
                , n = u.vars.itemMargin
                , t = u.vars.minItems
                , i = u.vars.maxItems;
            u.w = void 0 === u.viewport ? u.width() : u.viewport.width();
            u.h = r.height();
            u.boxPadding = r.outerWidth() - r.width();
            o ? (u.itemT = u.vars.itemWidth + n,
                u.itemM = n,
                u.minW = t ? t * u.itemT : u.w,
                u.maxW = i ? i * u.itemT - n : u.w,
                u.itemW = u.minW > u.w ? (u.w - n * (t - 1)) / t : u.maxW < u.w ? (u.w - n * (i - 1)) / i : u.vars.itemWidth > u.w ? u.w : u.vars.itemWidth,
                u.visible = Math.floor(u.w / u.itemW),
                u.move = u.vars.move > 0 && u.vars.move < u.visible ? u.vars.move : u.visible,
                u.pagingCount = Math.ceil((u.count - u.visible) / u.move + 1),
                u.last = u.pagingCount - 1,
                u.limit = 1 === u.pagingCount ? 0 : u.vars.itemWidth > u.w ? u.itemW * (u.count - 1) + n * (u.count - 1) : (u.itemW + n) * u.count - u.w - n) : (u.itemW = u.w,
                    u.itemM = n,
                    u.pagingCount = u.count,
                    u.last = u.count - 1);
            u.computedW = u.itemW - u.boxPadding;
            u.computedM = u.itemM
        }
            ;
        u.update = function (n, t) {
            u.doMath();
            o || (n < u.currentSlide ? u.currentSlide += 1 : n <= u.currentSlide && 0 !== n && (u.currentSlide -= 1),
                u.animatingTo = u.currentSlide);
            u.vars.controlNav && !u.manualControls && ("add" === t && !o || u.pagingCount > u.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !o || u.pagingCount < u.controlNav.length) && (o && u.currentSlide > u.last && (u.currentSlide -= 1,
                u.animatingTo -= 1),
                f.controlNav.update("remove", u.last)));
            u.vars.directionNav && f.directionNav.update()
        }
            ;
        u.addSlide = function (t, i) {
            var r = n(t);
            u.count += 1;
            u.last = u.count - 1;
            c && s ? void 0 !== i ? u.slides.eq(u.count - i).after(r) : u.container.prepend(r) : void 0 !== i ? u.slides.eq(i).before(r) : u.container.append(r);
            u.update(i, "add");
            u.slides = n(u.vars.selector + ":not(.clone)", u);
            u.setup();
            u.vars.added(u)
        }
            ;
        u.removeSlide = function (t) {
            var i = isNaN(t) ? u.slides.index(n(t)) : t;
            u.count -= 1;
            u.last = u.count - 1;
            isNaN(t) ? n(t, u.slides).remove() : c && s ? u.slides.eq(u.last).remove() : u.slides.eq(t).remove();
            u.doMath();
            u.update(i, "remove");
            u.slides = n(u.vars.selector + ":not(.clone)", u);
            u.setup();
            u.vars.removed(u)
        }
            ;
        f.init()
    }
        ;
    n(window).blur(function () {
        t = !1
    }).focus(function () {
        t = !0
    });
    n.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () { },
        before: function () { },
        after: function () { },
        end: function () { },
        added: function () { },
        removed: function () { },
        init: function () { }
    };
    n.fn.flexslider = function (t) {
        if (void 0 === t && (t = {}),
            "object" == typeof t)
            return this.each(function () {
                var i = n(this)
                    , u = t.selector ? t.selector : ".slides > li"
                    , r = i.find(u);
                1 === r.length && t.allowOneSlide === !0 || 0 === r.length ? (r.fadeIn(400),
                    t.start && t.start(i)) : void 0 === i.data("flexslider") && new n.flexslider(this, t)
            });
        var i = n(this).data("flexslider");
        switch (t) {
            case "play":
                i.play();
                break;
            case "pause":
                i.pause();
                break;
            case "stop":
                i.stop();
                break;
            case "next":
                i.flexAnimate(i.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                i.flexAnimate(i.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof t && i.flexAnimate(t, !0)
        }
    }
}(jQuery)
