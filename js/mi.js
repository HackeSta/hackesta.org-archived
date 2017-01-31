! function() {
    function e() {
        var e = {
                "&": "&#38;",
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "/": "&#47;"
            },
            t = /&(?!#?\w+;)|<|>|"|'|\//g;
        return function() {
            return this ? this.replace(t, function(t) {
                return e[t] || t
            }) : this
        }
    }

    function t(e, i, n) {
        return ("string" == typeof i ? i : i.toString()).replace(e.define || r, function(t, i, o, a) {
            return 0 === i.indexOf("def.") && (i = i.substring(4)), i in n || (":" === o ? (e.defineParams && a.replace(e.defineParams, function(e, t, o) {
                n[i] = {
                    arg: t,
                    text: o
                }
            }), i in n || (n[i] = a)) : new Function("def", "def['" + i + "']=" + a)(n)), ""
        }).replace(e.use || r, function(i, o) {
            e.useParams && (o = o.replace(e.useParams, function(e, t, i, o) {
                if (n[i] && n[i].arg && o) {
                    var a = (i + ":" + o).replace(/'|\\/g, "_");
                    return n.__exp = n.__exp || {}, n.__exp[a] = n[i].text.replace(new RegExp("(^|[^\\w$])" + n[i].arg + "([^\\w$])", "g"), "$1" + o + "$2"), t + "def.__exp['" + a + "']"
                }
            }));
            var a = new Function("def", "return " + o)(n);
            return a ? t(e, a, n) : a
        })
    }

    function i(e) {
        return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
    }
    var n, o = {
        version: "1.0.0",
        templateSettings: {
            evaluate: /\{\{([\s\S]+?\}?)\}\}/g,
            interpolate: /\{\{=([\s\S]+?)\}\}/g,
            encode: /\{\{!([\s\S]+?)\}\}/g,
            use: /\{\{#([\s\S]+?)\}\}/g,
            useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
            define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
            defineParams: /^\s*([\w$]+):([\s\S]+)/,
            conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
            iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
            varname: "it",
            strip: !0,
            append: !0,
            selfcontained: !1
        },
        template: void 0,
        compile: void 0
    };
    "undefined" != typeof module && module.exports ? module.exports = o : "function" == typeof define && define.amd ? define("source/js/themes/pandora/_plugins/doT", [], function() {
        return o
    }) : (n = function() {
        return this || (0, eval)("this")
    }(), n.doT = o), String.prototype.encodeHTML = e();
    var a = {
            append: {
                start: "'+(",
                end: ")+'",
                endencode: "||'').toString().encodeHTML()+'"
            },
            split: {
                start: "';out+=(",
                end: ");out+='",
                endencode: "||'').toString().encodeHTML();out+='"
            }
        },
        r = /$^/;
    o.template = function(n, s, d) {
        s = s || o.templateSettings;
        var l, c, p = s.append ? a.append : a.split,
            u = 0,
            h = s.use || s.define ? t(s, n, d || {}) : n;
        h = ("var out='" + (s.strip ? h.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : h).replace(/'|\\/g, "\\$&").replace(s.interpolate || r, function(e, t) {
            return p.start + i(t) + p.end
        }).replace(s.encode || r, function(e, t) {
            return l = !0, p.start + i(t) + p.endencode
        }).replace(s.conditional || r, function(e, t, n) {
            return t ? n ? "';}else if(" + i(n) + "){out+='" : "';}else{out+='" : n ? "';if(" + i(n) + "){out+='" : "';}out+='"
        }).replace(s.iterate || r, function(e, t, n, o) {
            return t ? (u += 1, c = o || "i" + u, t = i(t), "';var arr" + u + "=" + t + ";if(arr" + u + "){var " + n + "," + c + "=-1,l" + u + "=arr" + u + ".length-1;while(" + c + "<l" + u + "){" + n + "=arr" + u + "[" + c + "+=1];out+='") : "';} } out+='"
        }).replace(s.evaluate || r, function(e, t) {
            return "';" + i(t) + "out+='"
        }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "").replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+="), l && s.selfcontained && (h = "String.prototype.encodeHTML=(" + e.toString() + "());" + h);
        try {
            return new Function(s.varname, h)
        } catch (e) {
            throw "undefined" != typeof console && console.log("Could not create a template function: " + h), e
        }
    }, o.compile = function(e, t) {
        return o.template(e, null, t)
    }
}(), ! function(e) {
    var t = function(t, i) {
        this.options = i, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    t.prototype = {
        constructor: t,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var t = this,
                i = e.Event("show");
            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                var i = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), i && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), i ? t.$element.one(e.support.transition.end, function() {
                    t.$element.focus().trigger("shown")
                }) : t.$element.focus().trigger("shown")
            }))
        },
        hide: function(t) {
            t && t.preventDefault();
            t = e.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function() {
            var t = this;
            e(document).on("focusin.modal", function(e) {
                t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()
            })
        },
        escape: function() {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                27 == t.which && e.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var t = this,
                i = setTimeout(function() {
                    t.$element.off(e.support.transition.end), t.hideModal()
                }, 500);
            this.$element.one(e.support.transition.end, function() {
                clearTimeout(i), t.hideModal()
            })
        },
        hideModal: function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.removeBackdrop(), e.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function(t) {
            var i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var n = e.support.transition && i,
                    o = e(document).height(),
                    a = "100%";
                if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$backdrop.css({
                        width: a,
                        height: o
                    }).click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                n ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
        }
    };
    var i = e.fn.modal;
    e.fn.modal = function(i) {
        return this.each(function() {
            var n = e(this),
                o = n.data("modal"),
                a = e.extend({}, e.fn.modal.defaults, n.data(), "object" == typeof i && i);
            o || n.data("modal", o = new t(this, a)), "string" == typeof i ? o[i]() : a.show && o.show()
        })
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
        var i = e(this),
            n = i.attr("href"),
            o = e(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("modal") ? "toggle" : e.extend({
                remote: !/#/.test(n) && n
            }, o.data(), i.data());
        t.preventDefault(), o.modal(a).one("hide", function() {
            i.focus()
        })
    })
}(window.jQuery);
var Cookie = function(e, t, i) {
        if (arguments.length > 1 && "[object Object]" !== String(t)) {
            if (i = jQuery.extend({}, i), null !== t && void 0 !== t || (i.expires = -1), "number" == typeof i.expires) {
                var n = i.expires,
                    o = i.expires = new Date;
                o.setDate(o.getDate() + n)
            }
            return t = String(t), document.cookie = [encodeURIComponent(e), "=", i.raw ? t : encodeURIComponent(t), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        i = t || {};
        var a, r = i.raw ? function(e) {
            return e
        } : decodeURIComponent;
        return (a = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? r(a[1]) : null
    },
    IsLoginMi = function() {
        var e = Cookie("userId");
        return !!e
    },
    jsonp = function(e) {
        $.ajax({
            url: e.url,
            dataType: "jsonp",
            jsonp: "jsonpcallback",
            success: e.success,
            error: e.error,
            timeout: e.timeout
        })
    },
    FbRedirectUrl = function(e) {
        var t = "https://www.facebook.com/dialog/oauth/?client_id=" + e.appID + "&redirect_uri=" + e.redirect_uri + "&state=" + e.state + "&scope=" + e.scope + "&dislay=page";
        location.href = t
    },
    randomNum = function(e) {
        if (e = parseInt(e), 1 === e) return 0;
        if (e > 1) {
            var t = e - 1,
                i = Math.round(Math.random() * t);
            return i
        }
    },
    FbGetPicture = function(e, t) {
        var i = "https://graph.facebook.com/" + e + "/picture";
        return t && (i = i + "?width=" + t), i
    },
    FbGetInfoByIds = function(e, t) {
        var i = {},
            n = function() {
                var e = !0;
                for (var n in i) i[n].name || (e = !1);
                e && t(i)
            };
        for (var o in e) {
            var a = e[o];
            i[a] = {}
        }
        for (var o in e) ! function(e) {
            FB.api("/" + e, function(t) {
                t && !t.error ? (i[e] = t, n()) : (console.log(t.error), i[e] = {
                    name: " "
                }, n())
            })
        }(e[o])
    },
    FbShareDialog = function(e) {
        FB.ui({
            method: "feed",
            name: e.title,
            caption: "",
            description: e.description,
            link: e.link,
            picture: e.picture
        }, function(t) {
            t && !t.error_message && e.callback && e.callback(t)
        })
    },
    FbShareRedirect = function(e) {
        var t = "https://www.facebook.com/dialog/feed?app_id=" + e.app_id + "&display=popup&caption=&link=" + e.link + "&redirect_uri=" + e.redirect_uri + "&name=" + e.title + "&description=" + e.description + "&picture=" + e.picture;
        location.href = t
    },
    removeRepeat = function(e) {
        for (var t, i = [], n = {}, o = 0; null != (t = e[o]); o++) n[t] || (i.push(t), n[t] = !0);
        return i
    },
    checkEmail = function(e) {
        var t;
        return t = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/, !!t.test(e)
    },
    escape = function(e) {
        return String(e).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
    },
    FbInit = function(e, t) {
        window.fbAsyncInit = function() {
                FB.init({
                    appId: e,
                    xfbml: !0,
                    version: "v2.1"
                }), t && t()
            },
            function(e, t, i) {
                var n, o = e.getElementsByTagName(t)[0];
                e.getElementById(i) || (n = e.createElement(t), n.id = i, n.src = "//connect.facebook.net/en_ALL/sdk.js", o.parentNode.insertBefore(n, o))
            }(document, "script", "facebook-jssdk")
    },
    MI = {};
MI.Api = {}, MI.Api.FbInit = FbInit, MI.Api.Cookie = Cookie, MI.Api.IsLoginMi = IsLoginMi, MI.Api.FbRedirectUrl = FbRedirectUrl, MI.Api.FbGetPicture = FbGetPicture, MI.Api.jsonp = jsonp, MI.Api.randomNum = randomNum, MI.Api.FbShareDialog = FbShareDialog, MI.Api.FbShareRedirect = FbShareRedirect, MI.Api.FbGetInfoByIds = FbGetInfoByIds, MI.Api.removeRepeat = removeRepeat, MI.Api.checkEmail = checkEmail, MI.Api.escape = escape, $.fn.loadingMask = function() {
    var e = this,
        t = e.css("position").toLowerCase();
    "relative" != t && "absolute" != t && "fixed" != t && e.css("position", "relative"), e.css("minHeight", 200);
    var i = $('<div class="loading-mask"><div><span><i class="ico-refresh"></i></span></div></div>').appendTo(e);
    return function() {
        i.remove(), e.css({
            position: t,
            "min-height": "initial"
        })
    }
}, MI.Api.jsonp = function(e) {
    $.ajax({
        url: e.url,
        dataType: "jsonp",
        jsonp: "jsonpcallback",
        data: e.data,
        success: e.success,
        error: e.error,
        timeout: e.timeout,
        complete: e.complete
    })
};
var ytRegx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i,
    ytEmbed = "https://www.youtube.com/embed/",
    ytThumb = "http://img.youtube.com/vi/$1/0.jpg",
    userId;
MI.Api.parseVideo = function(e) {
        if (ytRegx.test(e.video)) {
            var t = e.video.match(ytRegx);
            t = t[1], e.video = ytEmbed + t
        }
        t && (e.videothumb = t.replace(new RegExp("(" + t + ")"), ytThumb))
    }, MI.Api.getQueryParam = function(e) {
        if (!e) return null;
        var t = window.location.search,
            i = e.length,
            n = t.indexOf(e);
        if (n == -1) return "";
        n += i + 1;
        var o = t.indexOf("&", n);
        return o == -1 ? t.substring(n) : t.substring(n, o)
    }, MI.Api.formatNum = function(e, t) {
        if (void 0 != e) {
            !t && (t = ",");
            var i = e.toString().split(".");
            return i[0] = i[0].replace(/\B(?=(\d{3})+(?!\d))/g, t), i.join(".")
        }
    },
    function(e) {
        function t() {
            e.ajax({
                url: hdUrl + "explorers/faninfo",
                type: "get",
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function(e) {
                    0 === parseInt(e.code, 10) ? (i(!0, e.data), window.userInfoCb && window.userInfoCb(e), e.data.icon && MI.Api.Cookie("userPhoto", e.data.icon, {
                        domain: ".mi.com",
                        path: "/" + GLOBAL_CONFIG.appLocal.name
                    })) : parseInt(e.code, 10) === -2 && i(!1)
                }
            })
        }

        function i(e, t) {
            var i, n = location.hash.substring(1).split("|"),
                o = "",
                a = GLOBAL_CONFIG.wwwSite + "/events/explorers2017/myfeed/";
            n[0].length > 0 ? (o = "%23" + n[0], i = location.href.split("#")[0] + o) : i = location.href;
            var r = GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + i;
            t = t || "", e ? (t.icon.length > 0 && l.find(".user-photo a").html('<img src="' + t.icon + '" alt="" >'), l.find(".user-photo a").attr("href", a), t.nickname.length > 0 ? l.find(".user-name").show().html('<a href="' + a + '">' + t.nickname + "</a>") : l.find(".user-name").show().html('<a href="' + a + '">' + userId + "</a>"), l.find(".user-photo").removeClass("unlogin"), c.show().find(".diamond-num").text(MI.Api.formatNum(t.diamonds)), l.find(".unlogin-box").addClass("hide"), t.hasNewMsg ? l.find(".user-photo").addClass("new-msg") : l.find(".user-photo").removeClass("new-msg")) : (c.hide().find(".diamond-num").text(""), l.find(".user-name").hide(), l.find(".unlogin-box").removeClass("hide").find("a").attr("href", r), l.find(".user-photo").addClass("unlogin").find("a").attr("href", r))
        }

        function n() {
            var t = e(".J_link"),
                i = e(".J_logo");
            "undefined" != typeof state && "index" === state ? (t.text("About Mi Explorers >").attr("href", GLOBAL_CONFIG.wwwSite + "/service/explorers2017/"), i.text("mi.com").removeClass("logo-explorers").attr("href", GLOBAL_CONFIG.wwwSite + "/index.html")) : (t.text("Enter mi.com >>").attr("href", GLOBAL_CONFIG.wwwSite + "/index.html"), i.text("").addClass("logo-explorers").attr("href", GLOBAL_CONFIG.wwwSite + "/events/explorers2017/"))
        }

        function o() {
            $topBtn = e(".J_explorerTop"), $topBtn.length <= 0 || (e(window).on("scroll.top", function(t) {
                var i = e(window).scrollTop(),
                    n = 1e3;
                i >= n ? $topBtn.show() : $topBtn.hide()
            }), $topBtn.on("click", function() {
                e("html, body").animate({
                    scrollTop: 0
                }, "fast")
            }))
        }

        function a(t, i) {
            var n = e(".J_modalChest"),
                o = 1e3,
                a = hdUrl + "c6/openbox",
                r = {
                    page: t.box_page,
                    token: t.box_token
                };
            return MI.Api.Cookie("userId") ? void(i && (i.hasClass("opening") || i.hasClass("opened")) || (i && i.addClass("opening"), MI.Api.jsonp({
                url: a,
                data: r,
                success: function(a) {
                    0 == a.code ? setTimeout(function() {
                        var o = 1e3;
                        i && i.addClass("opened").append('<span class="diamon-num">+' + a.diamond + "</span>"), 1 == t.box_first ? n.find(".J_chestContent").hide().filter('[data-type="first"]').show().find(".J_diamonNum").text(a.diamond) : 2 == t.box_first ? (n.find(".J_chestContent").hide().filter('[data-type="ideaAccept"]').show().find(".J_diamonNum").text(a.diamond), o = 0) : 3 == t.box_first ? (n.find(".J_chestContent").hide().filter('[data-type="commentAccept"]').show().find(".J_diamonNum").text(a.diamond), o = 0) : n.find(".J_chestContent").hide().filter('[data-type="other"]').show().find(".J_diamonNum").text(a.diamond), setTimeout(function() {
                            e(".J_userDiamond").find(".diamond-num").text(MI.Api.formatNum(a.user_diamond)), n.modal("show")
                        }, o)
                    }, o) : a.code == -13 ? (n.find(".J_chestContent").hide().filter('[data-type="already"]').show(), n.modal("show")) : alert(a.message)
                },
                complete: function() {
                    setTimeout(function() {
                        i && i.removeClass("opening")
                    }, o)
                }
            }), n.one("hidden.bs.modal", function(e) {
                i && i.remove()
            }))) : void(location.href = loginPrefix + location.href)
        }

        function r(t) {

                    t = {
                        box_show: 1,
                        box_first: 1
                    }

                if (t.box_show) {

                    if (e("body").append('<div class="explorer-chest J_explorerChest"><a href="javascript:void(0);"></a></div>'), 1 != t.box_first) {
                        var i = e(".J_explorerChest"),
                            n = (Math.random() * (e(document).width() - i.width())).toFixed(),
                            o = (Math.random() * (e(document).height() - i.height() - 300) + 300).toFixed();
                        i.css({
                            top: o + "px",
                            left: n + "px"
                        })
                    }
                    e(document).on("click", ".J_explorerChest", function(i) {
                        i.preventDefault(), a(t, e(this))
                    })
                }

        }

        function s() {
            var t = GLOBAL_CONFIG.wwwSite + "/events/explorers2017/",
                i = "#MiExplorers - the next Redmi device",
                n = 'I just opened a treasure chest with "MiExplorers". Come hunt for treasures and redeem Mi products!',
                o = "http://i01.appmifile.com/webfile/globalimg/hd/2016122601/share-chest.jpg",
                a = function(e) {
                    MI.Api.jsonp({
                        url: hdUrl + "explorers/traceshare",
                        data: {
                            target_type: 3,
                            share_way: e
                        }
                    })
                };
            e(document).on("click", ".J_modalChest .J_chestShareFb", function(r) {
                r.preventDefault(), "idea-accept" == e(this).attr("data-type") && (i = "#MiExplorers - we want YOUR ideas!", n = 'I just won 300 gems with "MiExplorers", and so can you! What can you do with the next Redmi device?', o = "http://i01.appmifile.com/webfile/globalimg/hd/2016122601/share-idea.jpg"), "comment-accept" == e(this).attr("data-type") && (n = 'I just won 200 gems with "MiExplorers", and so can you! What can you do with the next Redmi device?', o = "http://i01.appmifile.com/webfile/globalimg/hd/2016122601/share-idea.jpg"), MI.Api.FbShareDialog({
                    title: i,
                    description: n,
                    picture: o,
                    link: t,
                    callback: function(e) {
                        a(1)
                    }
                })
            }), e(document).on("click", ".J_modalChest .J_chestShareTwt", function(r) {
                r.preventDefault(), "idea-accept" == e(this).attr("data-type") && (i = "#MiExplorers - we want YOUR ideas!", n = 'I just won 300 gems with "MiExplorers", and so can you! What can you do with the next Redmi device?', o = "http://i01.appmifile.com/webfile/globalimg/hd/2016122601/share-idea.jpg"), "comment-accept" == e(this).attr("data-type") && (n = 'I just won 200 gems with "MiExplorers", and so can you! What can you do with the next Redmi device?', o = "http://i01.appmifile.com/webfile/globalimg/hd/2016122601/share-idea.jpg"), window.open("http://twitter.com/share?url=" + t + "&hashtags=MiExplorers&text=" + n + "&", "twitterwindow", "height=450, width=550, top=" + (e(window).height() / 2 - 225) + ", left=" + e(window).width() / 2 + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"), a(2)
            })
        }

        function d() {
            userId = Cookie("userId"), userId ? t() : i(!1), o(), n(), s(), window.generateChest = r
        }
        var l = e(".J_userInfo"),
            c = e(".J_userDiamond");
        d()
r(null)
    }
