function NoScroll() {
    var t = $("body").width(), n;
    $("body").css("overflow", "hidden");
    n = $("body").width() - t;
    $("body").css("margin-right", n + "px");
    $("#header").hasClass("fixed-header") && $("#header").css("margin-right", n + "px")
}
function AutoScroll() {
    $("body").attr("style", "");
    $("#header").attr("style", "")
}
function ChangeUrl(n, t) {
    if (typeof history.pushState != "undefined") {
        var i = {
            Page: n,
            Url: t
        };
        history.pushState(i, i.Page, i.Url)
    }
}
function closeMessagebox() {
    $("body").removeClass("no-scroll");
    $("#messagebox").hide()
}
function messagebox_login() {
    closeMessagebox();
    openLoginBox()
}
function popup(n) {
    $(".popup-update-success").remove();
    $("body").append("<div class='popup-update-success org-clr'>" + n + "<\/div>")
}
function popupShadow(n) {
    $(".divShadow").remove();
    $("body").append("<div class='divShadow'><div class='popup-update-success org-clr'>" + n + "<\/div><\/div>")
}
function SingleClick(n) {
    var i = n.attr("id"), t;
    return n.hasClass("notclick") || (t = n.parents("ul"),
        n.parents("li").toggleClass("expand"),
        n.parents("li").hasClass("expand") ? ($("#submenu_" + i).animate("slow"),
            t.find("li:has(> div)").not(".expand").slideUp(500)) : ($("#submenu_" + i).animate("slow"),
                t.find("li.expand").removeClass("expand").find("ul").slideUp(500),
                t.find("li:has(> div)").not(".expand").slideDown(500))),
        !1
}
function MultiSelectClick(n) {
    var i, r, t;
    return $("#" + n).hasClass("active") ? (i = $("#" + n).attr("data-rel"),
        r = $("#" + n).attr("rel"),
        t = i != "" ? r.replace("-" + i, "") : r,
        location.href = t) : (t = $("#" + n).attr("rel"),
            location.href = t),
        !1
}
function setcookies() {
    var t = $.cookie("HaveImage" + cateId), n;
    t == 1 ? $("#cbHasAvatar").attr("class", "active") : $("#cbHasAvatar").removeAttr("class");
    userId < 1 ? ($("#cbLovedSeller").removeAttr("class"),
        $.cookie("LovedSeller" + cateId, 0, {
            path: "/",
            expires: 7
        })) : (n = $.cookie("LovedSeller" + cateId),
            n == 1 ? $("#cbLovedSeller").attr("class", "active") : $("#cbLovedSeller").removeAttr("class"))
}
function SetFilterHaveImageCookie(n) {
    var t = document.URL, i, r;
    t = t.replace(new RegExp("/p([0-9]+)"), "");
    i = t.split("/");
    r = "";
    i.length > 3 && (r = i[3]);
    n ? $.cookie("HaveImage" + cateId, 0, {
        path: "/",
        expires: 7
    }) : $.cookie("HaveImage" + cateId, 1, {
        path: "/",
        expires: 7
    });
    location.href = t
}
function SetFilterLovedSellerCookie(n) {
    var t = document.URL, i, r;
    t = t.replace(new RegExp("/p([0-9]+)"), "");
    i = t.split("/");
    r = "";
    i.length > 3 && (r = i[3]);
    n ? $.cookie("LovedSeller" + cateId, 0, {
        path: "/",
        expires: 7
    }) : $.cookie("LovedSeller" + cateId, 1, {
        path: "/",
        expires: 7
    });
    location.href = t
}
function SetFilterSortByCookie(index) {
    var url = document.URL, arrHref, urlCookie, date;
    url = url.replace(new RegExp("/p([0-9]+)"), "");
    arrHref = url.split("/");
    urlCookie = "";
    arrHref.length > 3 && (urlCookie = arrHref[3]);
    date = new Date;
    date.setTime(date.getTime() + 864e5);
    switch (eval(index)) {
        case 0:
            document.cookie = "OrderBy=0;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        case 1:
            document.cookie = "OrderBy=1;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        case 2:
            document.cookie = "OrderBy=2;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        case 3:
            document.cookie = "OrderBy=3;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        case 4:
            document.cookie = "OrderBy=4;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        default:
            document.cookie = "OrderBy=0;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";"
    }
    location.href = url
}
function SetupOrderBy(n) {
    if (n > -1 && $("#ul_orderby").length) {
        var t = $("#ul_orderby li[rel='" + n + "'] a").text();
        $("#ul_orderby li a").removeClass("active");
        $("#ul_orderby li[rel='" + n + "'] a").addClass("active");
        $("#label_orderby").html(t + "<span class='caret'><\/span>");
        t || setupOrderBy(0)
    }
}
function LoadAllLocationORCate(n, t) {
    switch (n) {
        case "Area":
        case "City":
            LoadAllLocation(t);
            break;
        case "Cate":
            LoadAllCategories(t);
            break;
        case "Property":
            LoadAllModels(t)
    }
}



function GennarateHtml(n) {
    var t = "";
    return $.each(n, function (n, i) {
        liParrent = 0;
        classliParrent = "";
        liNameActive = "";
        t += '<li id="liparrent_' + i.Parrent.Type + "" + i.Parrent.Id + '">';
        t += i.Parrent.Link.indexOf("khac") == -1 ? '        <a href="' + i.Parrent.Link + '" title="' + i.Parrent.Name + '" id="' + i.Parrent.Type + "" + i.Parrent.Id + '" onclick="SingleClick($(this));">' : '        <a href="' + i.Parrent.Link + '" title="' + i.Parrent.Name + '" id="' + i.Parrent.Type + "" + i.Parrent.Id + ">";
        t += i.Parrent.Name;
        t += '        <i class="icon-right-open-1"><\/i>';
        t += "        <\/a>";
        var r = i.SubMenu;
        typeof r != "undefined" && r != null && r.length > 0 && (t += '      <ul class="sub-category scrollbar-inner" id="submenu_' + i.Parrent.Type + "" + i.Parrent.Id + '">',
            $.each(r, function (n, i) {
                t += "            <li>";
                t += '                <a href="' + i.Link + '" title="' + i.Title + '" class="' + i.Active + '" id="' + i.Type + "" + i.Id + '">';
                t += '                <i class="icon-right-open-mini"><\/i>';
                t += "                " + i.Name + "";
                t += "                <\/a>";
                t += "           <\/li> "
            }),
            t += "  <\/ul> ");
        t += " <\/li>"
    }),
        t
}
function GenarateModels(n) {
    var t = "";
    return $.each(n, function (n, i) {
        t += '<li class="liparrent" id="liparrent_' + i.Parrent.Type + "" + i.Parrent.Id + '">';
        t += "     <h2>";
        t += i.Parrent.Link.indexOf("khac") == -1 ? '        <a class="title-lits amenu parent" rel="nofollow" href="' + i.Parrent.Link + '" title="' + i.Parrent.Name + '" id="' + i.Parrent.Type + "" + i.Parrent.Id + '" onclick="SingleClick($(this));">' : '        <a class="hangkhac" href="' + i.Parrent.Link + '" title="' + i.Parrent.Name + '" id="' + i.Parrent.Type + "" + i.Parrent.Id + '">';
        t += i.Parrent.Name;
        t += "        <\/a>";
        t += "     <\/h2>";
        var r = i.SubMenu;
        typeof r != "undefined" && r != null && r.length > 0 && (t += '      <ul class="sub-list submenu ofhidden h108" id="submenu_' + i.Parrent.Type + "" + i.Parrent.Id + '">',
            $.each(r, function (n, i) {
                t += "            <li>";
                t += "                <h3>";
                t += '                   <a href="' + i.Link + '" title="' + i.Title + '" class="sizing ' + i.Active + '" id="' + i.Type + "" + i.Id + '">';
                t += "                    " + i.Name + "";
                t += "                    <\/a>";
                t += "               <\/h3>";
                t += "           <\/li> "
            }),
            t += "  <\/ul> ");
        t += " <\/li>"
    }),
        t
}
function openLoginBox() {
    $("#div_login").addClass("showDivLogin").fadeIn();
    $("body").addClass("no-scroll")
}
function closeLoginBox() {
    $("#div_login").removeClass("showDivLogin").fadeOut();
    $("body").removeClass("no-scroll")
}


function openRegisterBox() {
    $("#div_login").fadeOut();
    $("#div_register").fadeIn()
}
function closeRegisterBox() {
    parent.$.colorbox.close()
}
function loadPrice(n, t) {
    var i = $("#slider_price").slider({
        orientation: "horizontal",
        range: !0,
        min: 0,
        max: lstOject.length - 1,
        values: [0, lstOject.length - 1],
        slide: function (n, t) {
            var f = n.keyCode != $.ui.keyCode.RIGHT, e = n.keyCode != $.ui.keyCode.LEFT, o = $("#slider_price").slider("option", "max"), r, u;
            return parseInt(t.values[0]) == parseInt(t.values[1]) ? !1 : (r = findNearest(f, e, t.value),
                u = 0,
                t.value == t.values[0] ? (i.slider("values", 0, r),
                    u = r) : i.slider("values", 1, r),
                $("#slider_price #from_price").html(getRealValue(i.slider("values", 0), 0)),
                $("#div_newSlidePrice #from_price_new").html(getRealValue(i.slider("values", 0), 0)),
                u == t.values[1] ? ($("#slider_price #to_price").html("Không giới hạn"),
                    $("#div_newSlidePrice #to_price_new").html("Không giới hạn"),
                    $("#slider_price .ui-slider-range").css({
                        left: 0,
                        width: "100%"
                    })) : o == t.values[1] ? ($("#hddTo").val(0),
                        $("#slider_price #to_price").html("Không giới hạn"),
                        $("#div_newSlidePrice #to_price_new").html("Không giới hạn")) : ($("#slider_price #to_price").html(getRealValue(i.slider("values", 1), 1)),
                            $("#div_newSlidePrice #to_price_new").html(getRealValue(i.slider("values", 1), 1))),
                !1)
        },
        change: function () { }
    }), u, r;
    n == 0 && t == lstOject.length - 1 ? ($("#slider_price .ui-slider-handle:eq(1)").prepend('<span type="text" id="to_price" class="lbprice">Không giới hạn<\/span><i class="icon_tg"><\/i>'),
        $("#div_newSlidePrice #to_price_new").text("Không giới hạn"),
        $("#spnPriceToText").text("Không giới hạn")) : n > 0 && t == lstOject.length - 1 ? (i.slider("values", 0, n),
            $("#slider_price .ui-slider-handle:eq(1)").prepend('<span type="text" id="to_price" class="lbprice">Không giới hạn<\/span><i class="icon_tg"><\/i>'),
            $("#div_newSlidePrice #to_price_new").text("Không giới hạn"),
            $("#spnPriceToText").text("Không giới hạn")) : (i.slider("values", 0, n),
                i.slider("values", 1, t),
                u = getRealValue(i.slider("values", 1), 1),
                $("#slider_price .ui-slider-handle:eq(1)").prepend('<span type="text" id="to_price" class="lbprice">' + u + '<\/span><i class="icon_tg"><\/i>'),
                $("#div_newSlidePrice #to_price_new").text("Không giới hạn"),
                $("#spnPriceToText").text(u));
    r = getRealValue(i.slider("values", 0), 0);
    $("#slider_price .ui-slider-handle:eq(0)").prepend('<span type="text" id="from_price" class="lbprice">' + r + '<\/span><i class="icon_tg"><\/i>');
    $("#div_newSlidePrice #from_price_new").text(r);
    $("#spnPriceFromText").text(r)
}
function loadPriceNoKey() {
    var t = parseFloat($("#hddFrom").val()) * 1e3, e = parseFloat($("#hddTo").val()) * 1e3, i = 0, r = 1e9, n = $("#slider_price").slider({
        range: !0,
        min: i,
        max: r,
        values: [i, r],
        step: 1e3,
        slide: function (t, r) {
            var e = t.keyCode != $.ui.keyCode.RIGHT, o = t.keyCode != $.ui.keyCode.LEFT, f = $("#slider_price").slider("option", "max"), u;
            return parseInt(r.values[0]) == parseInt(r.values[1]) ? !1 : (u = r.value,
                r.value == r.values[0] ? (n.slider("values", 0, u),
                    i = u) : n.slider("values", 1, u),
                $("#slider_price #from_price").html(getRealValueNoKey(n.slider("values", 0), 0)),
                $("#div_newSlidePrice #from_price_new").html(getRealValueNoKey(n.slider("values", 0), 0)),
                i == r.values[1] ? ($("#slider_price #to_price").html("Không giới hạn"),
                    $("#div_newSlidePrice #to_price_new").html("Không giới hạn"),
                    $("#slider_price .ui-slider-range").css({
                        left: 0,
                        width: "100%"
                    })) : f == r.values[1] ? ($("#hddTo").val(0),
                        $("#slider_price #to_price").html("Không giới hạn"),
                        $("#div_newSlidePrice #to_price_new").html("Không giới hạn")) : ($("#slider_price #to_price").html(getRealValueNoKey(n.slider("values", 1), 1)),
                            $("#div_newSlidePrice #to_price_new").html(getRealValueNoKey(n.slider("values", 1), 1))),
                !1)
        },
        change: function () { }
    }), u, f;
    t == 0 && e >= r ? ($("#slider_price .ui-slider-handle:eq(1)").prepend('<span type="text" id="to_price" class="lbprice">Không giới hạn<\/span><i class="icon_tg"><\/i>'),
        $("#div_newSlidePrice #to_price_new").html("Không giới hạn"),
        $("#spnPriceToText").text("Không giới hạn")) : t > 0 && e >= r ? (n.slider("values", 0, t),
            $("#slider_price .ui-slider-handle:eq(1)").prepend('<span type="text" id="to_price" class="lbprice">Không giới hạn<\/span><i class="icon_tg"><\/i>'),
            $("#div_newSlidePrice #to_price_new").html("Không giới hạn"),
            $("#spnPriceToText").text("Không giới hạn")) : (n.slider("values", 0, t),
                n.slider("values", 1, e),
                u = getRealValueNoKey(n.slider("values", 1), 1),
                $("#slider_price .ui-slider-handle:eq(1)").prepend('<span type="text" id="to_price" class="lbprice">' + u + '<\/span><i class="icon_tg"><\/i>'),
                $("#div_newSlidePrice #to_price_new").html(u),
                $("#spnPriceToText").text(u));
    f = getRealValueNoKey(n.slider("values", 0), 0);
    $("#slider_price .ui-slider-handle:eq(0)").prepend('<span type="text" id="from_price" class="lbprice">' + f + '<\/span><i class="icon_tg"><\/i>');
    $("#div_newSlidePrice #from_price_new").html(f);
    $("#spnPriceFromText").text(f)
}
function GetPriceGroup2() {
    var i = $("#hddFrom").val(), r = $("#hddTo").val(), u = $("#hddOjectPrice").val(), t, n;
    lstOject = $.parseJSON(u);
    t = 0;
    n = 0;
    lstOject == null && (lstOject = [{
        Id: 460,
        CateId: 0,
        MinPrice: 0,
        MaxPrice: 0,
        Name: "Default",
        Key: 0,
        Value: 0,
        Unit: "đồng"
    }, {
        Id: 461,
        CateId: 0,
        MinPrice: 0,
        MaxPrice: 1e6,
        Name: "Default",
        Key: 1,
        Value: 1,
        Unit: "tỷ"
    }]);
    (r != 0 || i > 0) && $.each(lstOject, function (u, f) {
        var e = 1;
        f.Unit == "triệu" ? e = 1e3 : f.Unit == "tỷ" && (e = 1e6);
        i != 0 && i == f.Value * e && (t = f.Key);
        r != 0 && r == f.Value * e && (n = f.Key)
    });
    n == 0 && t != 0 ? n = lstOject.length - 1 : n == 0 && (t = 0,
        n = lstOject.length - 1);
    loadPrice(t, n)
}
function findNearest(n, t, i) {
    for (var r, e, o = null, u = null, f = 0; f < lstOject.length; f++)
        r = lstOject[f],
            (n && r.Key <= i || t && r.Key >= i) && (e = Math.abs(i - r.Key),
                (u == null || e < u) && (o = r.Key,
                    u = e));
    return o
}
function getRealValue(n, t) {
    for (var i, r, u = 0; u < lstOject.length; u++)
        if (i = lstOject[u],
            i.Key >= n)
            return r = i.Value,
                t == 0 ? i.Unit == "đồng" ? $("#hddFrom").val(r) : i.Unit == "nghìn" ? $("#hddFrom").val(r) : i.Unit == "triệu" ? $("#hddFrom").val(r + "000") : i.Unit == "tỷ" ? $("#hddFrom").val(r + "000000") : i.Unit == "0" && $("#hddFrom").val("0") : (i.Unit == "nghìn" ? $("#hddTo").val(r) : i.Unit == "triệu" ? $("#hddTo").val(r + "000") : i.Unit == "tỷ" ? $("#hddTo").val(r + "000000") : i.Unit == 0 && $("#hddTo").val(0),
                    u == lstOject.length - 1 && $("#hddFrom").val() == 0 && $("#hddTo").val(0)),
                i.Value + " " + i.Unit;
    return 0
}
function getRealValueNoKey(n, t) {
    return t == 0 ? $("#hddFrom").val(parseFloat(n) / 1e3) : $("#hddTo").val(parseFloat(n) / 1e3),
        Number(n).toLocaleString("en") + " đồng"
}
function ChangeSpaceArea() {
    var i = $("#hddFrom").val(), r = $("#hddTo").val(), n = document.URL, t;
    n = n.replace(new RegExp("/p([0-9]+)"), "").replace(new RegExp("/([0-9]+)-([0-9]+)"), "").replace(new RegExp("/([0-9]+)-n"), "");
    t = "";
    n.indexOf("/k=") > -1 ? (t = n.substring(n.indexOf("/k="), n.length),
        n = n.replace(t, "")) : n.indexOf("/t=") > -1 && (t = n.substring(n.indexOf("/t="), n.length),
            n = n.replace(t, ""));
    i == 0 && r == 0 ? location.href = n + t : (n = i > 0 && r == 0 ? n + "/" + i + "-n" + t : n + "/" + i + "-" + r + "" + t,
        location.href = n)
}
function checkValid(n) {
    var i;
    $(".email").val($.trim($(".email").val()));
    var t = !0
        , u = /0[1-9][0-9]\d{7,12}$/
        , f = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/
        , e = /<\/?[^>]*>/
        , r = !1;
    return $(n + " #hddAreaId_nl").length > 0 && $(n + " #hddAreaId_nl").val() <= 0 ? ($("html,body").animate({
        scrollTop: $(n + " #div_area_nl").offset().top - 200
    }, "medium", function () {
        popupShadow("Chưa chọn khu vực !")
    }),
        !1) : $(n + " #hddCateId_nl").length > 0 && $(n + " #hddCateId_nl").val() <= 0 ? ($("html,body").animate({
            scrollTop: $(n + " #div_cate_nl").offset().top - 200
        }, "medium", function () {
            popupShadow("Chưa chọn danh mục !")
        }),
            !1) : ($(n + " .valid").each(function () {
                var i = $(this).val();
                $(this).hasClass("required") && $.trim(i).length < 1 ? ($(this).next().text($(this).attr("req")),
                    t = !1) : $(this).hasClass("validHtml") && e.test(i) ? ($(this).next().text("Dữ liệu không hợp lệ"),
                        t = !1) : $(this).hasClass("title") && $("#countTitle").hasClass("min_counter") ? ($(this).next().text($(this).attr("req")),
                            t = !1) : $(this).hasClass("description") && $("#countDesc").hasClass("min_counter") ? ($(this).next().text($(this).attr("req")),
                                t = !1) : $(this).hasClass("email") && i.length > 0 && !f.test(i) ? ($(this).next().text($(this).attr("inValid")),
                                    t = !1) : $(this).hasClass("mobile") && !u.test(i) ? ($(this).next().text($(this).attr("inValid")),
                                        t = !1) : $(this).hasClass("password") && i.length < 6 ? ($(this).next().text($(this).attr("inValid")),
                                            t = !1) : $(this).hasClass("confirmPassword") && $(n + " .password").val() !== i && ($(this).next().text($(this).attr("inValid")),
                                                t = !1);
                t ? $(this).next().hide() : r || ($("html,body").animate({
                    scrollTop: $(this).offset().top - 220
                }, "medium"),
                    $(this).focus(),
                    r = !0)
            }),
                $(n + " .requiredGroup1").length > 0 && (i = $("#hddProperty1").val(),
                    $("#hsxPost").length > 0 ? ($("#hsxPost").val() > 0 ? $("#validManufacturer").remove() : ($("#validManufacturer").length == 0 && $("#wr_hsxPost .wr_select").append('<div id="validManufacturer" class="noti-error">Chọn hãng sản xuất<\/div>'),
                        t = !1),
                        $("#modelPost").length > 0 && i > 0 || $("#wr_modelPost .custom-combobox-input").hasClass("disabled") ? $("#validGroup1").remove() : ($("#validGroup1").length == 0 && $("#wr_modelPost .wr_select").append('<div id="validGroup1" class="noti-error">Chọn model<\/div>'),
                            t = !1)) : i > 0 ? $("#validGroup1").remove() : ($("#validGroup1").length == 0 && $("#group_1").append('<div id="validGroup1" class="noti-error">Chọn ' + $(".requiredGroup1").parent().text().replace("*", "") + "<\/div>"),
                                t = !1),
                    t || ($("html,body").animate({
                        scrollTop: $(n + " .requiredGroup1").offset().top - 200
                    }, "medium"),
                        $(n + " .requiredGroup1").focus())),
                t)
}
function refreshNewCaptcha(n) {
    $("#" + n).attr("src", "/HandlerWeb/CaptchaHandler.ashx?t=" + (new Date).getMilliseconds())
}

function closeSavedProductBox() {
    $("#div_savedProduct").fadeOut()
}

function SelectIsPublish(n) {
    var t, i;
    $("#hddispublish").val(n);
    $("#ul_ispublish li a").removeClass("active");
    t = $("#ul_ispublish li[rel='" + n + "'] a");
    t.addClass("active");
    i = t.html();
    $("#label_ispublish").html(i)
}
function SearchProductManage() {
    var n = "/quan-ly-tin-rao"
        , t = $("#FDate").val()
        , i = $("#TDate").val()
        , r = $("#txtIDTitle").val() ? $("#txtIDTitle").val().trim() : ""
        , u = $("#hddispublish").val();
    n = t == "" ? n + "/df0" : n + "/df" + t.replace("/", "").replace("/", "");
    n = i == "" ? n + "/dt0" : n + "/dt" + i.replace("/", "").replace("/", "");
    n = r == "" ? n + "/k=0" : n + "/k=" + r;
    n = n + "/s" + u;
    location.href = n
}
function changeIspublish(n) {
    var t = "/quan-ly-tin-rao"
        , i = $("#FDate").val()
        , r = $("#TDate").val()
        , u = $("#txtIDTitle").val() ? $("#txtIDTitle").val().trim() : "";
    t = i == "" ? t + "/df0" : t + "/df" + i.replace("/", "").replace("/", "");
    t = r == "" ? t + "/dt0" : t + "/dt" + r.replace("/", "").replace("/", "");
    t = u == "" ? t + "/k=0" : t + "/k=" + u;
    t = t + "/s" + n;
    location.href = t
}

function getParameterByName(n, t) {
    t || (t = window.location.href);
    n = n.replace(/[\[\]]/g, "\\$&");
    var r = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)")
        , i = r.exec(t);
    return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
}



function FilterBargainList(n) {
    if (n >= 0) {
        var t = $("#ul_filterBargainList li[rel='" + n + "'] a").text();
        $("#ul_filterBargainList li a").removeClass("active");
        $("#ul_filterBargainList li[rel='" + n + "'] a").addClass("active");
        $("#label_filterBargainList").html(t + "<span class='caret'><\/span>")
    }
}
function SetFilterBargainListCookie(index) {
    var url = document.URL, arrHref, urlCookie, date;
    url = url.replace(new RegExp("/p([0-9]+)"), "");
    arrHref = url.split("/");
    urlCookie = "";
    arrHref.length > 3 && (urlCookie = arrHref[3]);
    date = new Date;
    date.setTime(date.getTime() + 864e5);
    switch (eval(index)) {
        case 0:
            document.cookie = "FilterBargainList=0;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        case 1:
            document.cookie = "FilterBargainList=1;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        case 2:
            document.cookie = "FilterBargainList=2;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        case 3:
            document.cookie = "FilterBargainList=3;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        case 127:
            document.cookie = "FilterBargainList=127;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        default:
            document.cookie = "FilterBargainList=127;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";"
    }
    location.href = url
}
function FilterBargainManager(n) {
    if (n >= 0) {
        var t = $("#ul_filterManager li[rel='" + n + "'] a").text();
        $("#ul_filterManager li a").removeClass("active");
        $("#ul_filterManager li[rel='" + n + "'] a").addClass("active");
        $("#label_filterManager").html(t + "<span class='caret'><\/span>")
    }
}
function SetFilterBargainManagerCookie(index) {
    var url = document.URL, arrHref, urlCookie, date;
    url = url.replace(new RegExp("/p([0-9]+)"), "");
    arrHref = url.split("/");
    urlCookie = "";
    arrHref.length > 3 && (urlCookie = arrHref[3]);
    date = new Date;
    date.setTime(date.getTime() + 864e5);
    switch (eval(index)) {
        case 0:
            document.cookie = "FilterBargainManager=0;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        case 127:
            document.cookie = "FilterBargainManager=127;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";";
            break;
        default:
            document.cookie = "FilterBargainManager=127;expires=" + date.toGMTString() + ";path=/" + urlCookie + ";"
    }
    location.href = url
}



function showImagePopup(n, t, i) {
    $("#popupImgDetail").fadeIn();
    loadImageInfo(n, t, i);
    $("#popupImgDetail .slide .image a").focus()
}
function closeImagePopup() {
    $("#popupImgDetail").fadeOut()
}
function loadImageInfo(n, t, i) {
    var u, r;
    $("#popupImgDetail .div-waiting").show();
    u = $($(".group-image-prd .group-thumb-img .slide-thumb .list-thumb .thumb.img a").get(t)).attr("big-image");
    $("#popupImgDetail .modal-body .title-name").text(n);
    $("#popupImgDetail .modal-body .control-slide .pull-left span").text(t + 1 + "/" + i);
    r = $("#popupImgDetail .modal-body .slide .image img");
    r.attr("src", u);
    $(r).one("load", function () {
        var n = $("#popupImgDetail .modal-body .slide");
        r.height() > n.height() ? r.height(n.height()) : r.width() > n.width() && r.width(n.width());
        $("#popupImgDetail .div-waiting").hide()
    });
    i > 1 ? t == 0 ? ($("#popupImgDetail .modal-body .slide a.slide-prev").attr("href", "javascript:loadImageInfo('" + n + "'," + (i - 1) + "," + i + ")"),
        $("#popupImgDetail .modal-body .slide a.slide-next").attr("href", "javascript:loadImageInfo('" + n + "'," + (t + 1) + "," + i + ")"),
        $("#popupImgDetail .modal-body .control-slide .pull-left a.icon-fast-bw").attr("href", "javascript:loadImageInfo('" + n + "'," + (i - 1) + "," + i + ")"),
        $("#popupImgDetail .modal-body .control-slide .pull-left a.icon-fast-fw").attr("href", "javascript:loadImageInfo('" + n + "'," + (t + 1) + "," + i + ")")) : t == i - 1 ? ($("#popupImgDetail .modal-body .slide a.slide-prev").attr("href", "javascript:loadImageInfo('" + n + "'," + (t - 1) + "," + i + ")"),
            $("#popupImgDetail .modal-body .slide a.slide-next").attr("href", "javascript:loadImageInfo('" + n + "',0," + i + ")"),
            $("#popupImgDetail .modal-body .control-slide .pull-left a.icon-fast-bw").attr("href", "javascript:loadImageInfo('" + n + "'," + (t - 1) + "," + i + ")"),
            $("#popupImgDetail .modal-body .control-slide .pull-left a.icon-fast-fw").attr("href", "javascript:loadImageInfo('" + n + "',0," + i + ")")) : ($("#popupImgDetail .modal-body .slide a.slide-prev").attr("href", "javascript:loadImageInfo('" + n + "'," + (t - 1) + "," + i + ")"),
                $("#popupImgDetail .modal-body .slide a.slide-next").attr("href", "javascript:loadImageInfo('" + n + "'," + (t + 1) + "," + i + ")"),
                $("#popupImgDetail .modal-body .control-slide .pull-left a.icon-fast-bw").attr("href", "javascript:loadImageInfo('" + n + "'," + (t - 1) + "," + i + ")"),
                $("#popupImgDetail .modal-body .control-slide .pull-left a.icon-fast-fw").attr("href", "javascript:loadImageInfo('" + n + "'," + (t + 1) + "," + i + ")")) : ($("#popupImgDetail .modal-body .slide a.slide-prev").hide(),
                    $("#popupImgDetail .modal-body .slide a.slide-next").hide())
}
function hoverx(n) {
    $(n).attr("src", $(n).attr("usrc"))
}
function unhoverx(n) {
    $(n).attr("src", $(n).attr("osrc"))
}
function autoPlaySlideDetail(n) {
    $(n).hasClass("icon-play") ? ($(n).attr("class", "icon-pause"),
        tid = setInterval(autoClick, 5e3)) : ($(n).attr("class", "icon-play"),
            clearInterval(tid))
}
function autoClick() {
    $("#popupImgDetail").is(":visible") ? window.location.href = $("#popupImgDetail .modal-body .slide a.slide-next").attr("href") : clearInterval(tid)
}
function loadSliderDetail() {
    $("#div_show .image-prd-large a").on("click", function () {
        var n = $(this).attr("title")
            , t = parseInt($(this).attr("rel"))
            , i = $(".group-image-prd .group-thumb-img .list-thumb .thumb.img").length;
        return showImagePopup(n, t, i),
            !1
    });
    $("#div_show .expired").on("click", function () {
        $("#div_show .image-prd-large a").trigger("click")
    });
    $("#popupImgDetail").keydown(function (n) {
        n.which == 39 ? location.href = $("#popupImgDetail a.slide-next").attr("href") : n.which == 37 ? location.href = $("#popupImgDetail a.slide-prev").attr("href") : n.which == 27 && (location.href = $("#popupImgDetail .control-slide a.close-slide").attr("href"))
    })
}
function slidePrevThumb() {
    var n = $(".group-image-prd .group-thumb-img .list-thumb .thumb.img.current");
    n.attr("pos") > 0 && (n.prev().show(),
        showImageToLarge(n.prev()))
}
function slideNextThumb() {
    var t = $(".group-image-prd .group-thumb-img .list-thumb .thumb.img"), u = t.length, r = $(".group-image-prd .group-thumb-img .list-thumb .thumb.img.current"), i = parseInt(r.attr("pos")), n;
    if (u && i < u - 1) {
        if (t.get(i + 4))
            r.hide();
        else if (i - 3 >= 0)
            for (n = i - 3; n >= 0; n--)
                t.get(n) && $(t.get(n)).hide();
        showImageToLarge(r.next())
    }
}
function showImageToLarge(n) {
    var i = n.attr("pos")
        , r = n.children("a").attr("slide-image")
        , u = n.children("a").attr("big-image")
        , f = n.find("img").attr("alt")
        , e = $(".group-image-prd .group-thumb-img .list-thumb .thumb.img").length
        , t = $("#div_show").find("img");
    t.length && (t.attr("src", r),
        t.attr("alt", f),
        t.parent().attr("rel", i),
        t.parent().attr("href", u));
    $("#indexCount").text(parseInt(i) + 1 + "/" + e);
    n.siblings().removeClass("current");
    n.addClass("current")
}


function readyListPage() {
    setcookies();
    $("#cbHasAvatar").on("click", function () {
        $(this).hasClass("active") ? SetFilterHaveImageCookie(!0) : SetFilterHaveImageCookie(!1)
    });
    $("#cbLovedSeller").on("click", function () {
        userId < 1 ? alert("Bạn phải đăng nhập để sử dụng chức năng này!") : $(this).hasClass("active") ? SetFilterLovedSellerCookie(!0) : SetFilterLovedSellerCookie(!1)
    });
    if ($("#ul_orderby li").click(function () {
        var n = $(this).attr("rel");
        SetFilterSortByCookie(n)
    }),
        $(".about-price").length > 0 && ($("#slider_price.isEvent").length > 0 ? loadPriceNoKey() : GetPriceGroup2()),
        $("#btnLoveSeller").length) {
        var n = $("#btnLoveSeller").attr("rel")
            , t = $("#btnLoveSeller").attr("isUserCrawler");
        checkLovedSeller(n, t)
    }
    getListLovedSellerByUserId(userId)
}
function CheckedRememberPage() {
    var n = $("#RememberMe").val();
    n == "false" ? $("#RememberMe").val("true") : $("#RememberMe").val("false")
}


function loadTotalUnread() {
    $(".lblMsgNotify_Count").load("/Member/MsgNotify_TotalUnread", function () {
        $(".lblMsgNotify_Count.number-notify").text() != "0" ? $(".lblMsgNotify_Count.number-notify").show() : $(".lblMsgNotify_Count.number-notify").hide()
    })
}
function checkBeforeUpdateUserInfo() {
    var n = checkValid("#div_UserProfile");
    return n && sendRealTimeFlag(userId),
        n
}


function loadPageManagerNotification() {
    var n = getQueryStrings()
        , i = n.notify
        , r = n.msgId
        , t = n.objId;
    i && r && t && ($(".notify-manage .notify-content").html(""),
        getNotifyInfoById(t, $(".notify-manage .notify-content")),
        $(".page").hide())
}
function loadPageUserProfile() {
    var n = getQueryStrings()
        , t = n.notify
        , i = n.msgId
        , r = n.objId;
    t && i && r
}
function loadPageManagerProduct() {
    var n = getQueryStrings()
        , t = n.notify
        , i = n.msgId
        , r = n.objId;
    t && i && r
}
function loadPageManagerFeedback() {
    var n = getQueryStrings()
        , i = n.notify
        , r = n.msgId
        , t = n.objId;
    i && r && t && ($("table.table.table-bordered tbody").html(""),
        getUserRateInfoById(t, $("table.table.table-bordered tbody")),
        $(".page").hide())
}
function loadPageProductDetail(n) {
    var t = getQueryStrings()
        , r = t.notify
        , u = t.msgId
        , i = t.objId;
    r && u && i && openPopupBargainInfoById(i, n)
}


function getQueryStrings() {
    var r = {}, u = function (n) {
        return decodeURIComponent(n.replace(/\+/g, " "))
    }, f = location.search.substring(1), t = f.split("&"), i, n;
    for (i in t)
        t.hasOwnProperty(i) && (n = t[i].split("="),
            n.length > 1 && (r[u(n[0])] = u(n[1])));
    return r
}

function closeCommonMessage(n) {
    $(n).parents(".message-box").hide();
    $("body").removeClass("no-scroll")
}

function SoldMessage(n, t) {
    var i;
    i = $(n).hasClass("on") ? "<br /><b>Chưa bán<\/b>" : "<b>Đã bán<\/b>";
    showCommonMessage(2, "", "Bạn có chắc chắn muốn chuyển tin rao sang trạng thái " + i + "?", 'toggleSold("' + n + '", "' + t + '")', "")
}



var lstOject, tid;
$(function () {

    $('input[type="text"], textarea').keyup(function () {
        $(this).val().length < 1 ? $(this).addClass("hint") : $(this).removeClass("hint")
    });
    
    $("#div_register").on("click", function (n) {
        n.target.closest && ($(n.target.closest(".modal-popup")).length || closeRegisterBox())
    });
   
    $("body").on("click", ".group-action:not('.disabled') .btn", function () {
        $(".group-action").not($(this).parent()).removeClass("open");
        $(this).parents(".group-action").toggleClass("open")
    });
    $(".nl_Text").on("keypress", function (n) {
        n.which === 13 && $(".nl_Submit").click()
    });
    $("body").on("click", function (n) {
        $(n.target).closest(".group-action").length || $(".group-action").removeClass("open");
        $(n.target).hasClass("bg-trans") && $(".group-action").removeClass("open");
        $(n.target).closest(".popup-update-success").length || ($(".divShadow").length > 0 ? ($(".divShadow").remove(),
            $("#div_area_nl").removeAttr("style"),
            $("#div_cate_nl").removeAttr("style")) : $(".popup-update-success").remove());
        $(".bl-category > li.open").length && $(n.target).hasClass("bg-trans") && $(".bl-category > li.open").removeClass("open");
        $(n.target).closest("#div_notify").length || $("#div_notify.open").length && ($("#div_notify").removeClass("open"),
            AutoScroll())
    });
    var n = $("#wrapper").length > 0 ? $("#wrapper").offset().top : 0;
    $(window).scroll(function () {
        if ($(".open .bg-trans").length <= 0 || !$(".open .bg-trans").is(":visible")) {
            var t = $(window).scrollTop();
            t > n ? ($("#header").addClass("fixed-header"),
                $("#top-search").removeClass("blue-style"),
                $("#div_trend").hide()) : ($("#header").removeClass("fixed-header"),
                    $("#div_trend").show(),
                    !$("#head-slide").length && $("#product-slide").length && $("#top-search").addClass("blue-style"))
        }
    });
    $(".modal-popup").each(function () {
        var n = $(this).parent().attr("id");
        n != "div_login" && n != "div_savedProduct" && n != "popupImgDetail" && n != "postForm" && $(this).css({
            "margin-top": $(this).outerHeight() / -2
        })
    });
    $(".inner-bl-prd").on("click", function (n) {
        if (!$(n.target).hasClass("icon-ok-2") && !$(n.target).hasClass("icon-download-alt") && !(n.target.tagName.toLowerCase() == "a" || $(n.target).parent("a").length > 0)) {
            var t = $(this).find("div.content h4 a").attr("href");
            t && (window.location.href = t)
        }
    });
    $("#div_register .agree-terms").on("click", function (n) {
        $(n.target).hasClass("disp-ib") || ($(this).toggleClass("icon-not"),
            $(".btnRegister").prop("disabled", !$(".btnRegister").prop("disabled")))
    });
    $("#cbRememberPage").click(function () {
        $(this).toggleClass("icon-not");
        CheckedRememberPage()
    });
    $("#btnReview").on("click", function () {
        $("#VerifyCode").removeClass("valid");
        checkValid("#postProduct") && $("html,body").animate({
            scrollTop: 0
        }, 500, function () {
            $(".create-news-box").fadeOut(function () {
                var htmlProperties, k;
                for ($("#viewTitle").text($("#Title").val()),
                    $("#viewPlace").text($("#div_area_nl #label_area").text()),
                    $("#viewPrice").text(($("#strPrice").val() + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + ".000"),
                    $("#viewDesc").text($("#Description").val()),
                    $("#tempUser").text($("#DisplayName").val()),
                    $("#tempMobile").text($("#Mobile").val()),
                    htmlProperties = "<li><span class='tit'>Nhóm sản phẩm<\/span><span class='cont'>" + $("#div_cate_nl .sub-category .active").text() + "<\/span><\/li>",
                    i = 1; i <= 20; i++) {
                    var item = $("#hddProperty" + i).val()
                        , groupName = ""
                        , valueProperty = "";
                    item > 0 && (i == 1 && $("#hsxPost").length > 0 ? (groupName = "Hãng sản xuất",
                        valueProperty = $("#hsxPost option:selected").text(),
                        $("#box_property #wr_modelPost .custom-combobox-input").hasClass("disabled") || (valueProperty += " - " + $("#modelPost option:selected").text())) : $('#box_property .checkPost[value="' + item + '"]').length > 0 ? (groupName = $("#box_property #group" + i).parent().prev().text(),
                            valueProperty = "Có") : (groupName = $("#box_property #group_" + i).parent().prev().text().replace(" *", ""),
                                valueProperty = $("#cb_" + item).text()),
                        htmlProperties += '<li><span class="tit">' + groupName + ':<\/span><span class="cont">' + valueProperty + "<\/span><\/li>")
                }
                $("#viewProperties").html(htmlProperties);
                var listImage = $("#InputUpload").val().split(",")
                    , galleryIMG = $(".group-image-prd")
                    , thumbIMG = ""
                    , thumbIMG_Slide = ""
                    , largeIMG = ""
                    , noImg = !1;
                for (k = 0; k < listImage.length; k++)
                    if (listImage[k])
                        thumbIMG += '<div class="thumb osgslideimg' + (k == 0 ? " osgslide-active" : "") + '">',
                            thumbIMG += '   <img rel="imagegallery-' + k + '" alt="' + $("#Title").val() + "-" + k + '" src="https://file.chodocu.com/crop/76x76/' + listImage[k] + '">',
                            thumbIMG += "<\/div>",
                            thumbIMG_Slide += '<span class="imageGallery" id="imagegallery-' + k + '" data-src="https://file.chodocu.com/' + listImage[k] + '" data-desc="' + $("#Title").val() + "-" + (listImage.length > 0 ? k + 1 + "" : "") + '">',
                            thumbIMG_Slide += '   <img src="https://file.chodocu.com/crop/76x76/' + listImage[k] + '" alt="' + $("#Title").val() + "-" + (listImage.length > 0 ? k + 1 + "" : "") + '" />',
                            thumbIMG_Slide += "<\/span>",
                            k == 0 && (largeIMG += '<a rel="nofollow" href="javascript:void(0)">',
                                largeIMG += '    <img alt="' + $("#Title").val() + '" rel="imagegallery-0" src="https://file.chodocu.com/crop/422x340/' + listImage[k] + '">',
                                largeIMG += "<\/a>",
                                largeIMG += '<span class="num-img"><span id="countimage">1<\/span>/' + listImage.length + "<\/span>"),
                            noImg = !1;
                    else
                        break;
                thumbIMG != "" ? (galleryIMG.html('<div class="group-image-prd-sl clearfix" id="osgslide"><div class="group-thumb-img"><div class="slide-thumb"><div class="list-thumb"><div class="content-listthumb">' + thumbIMG + '<\/div><\/div><div id="aniimated-thumbnials" style="display:none">' + thumbIMG_Slide + '<\/div><span class="slide-prev noneclick"><i class="icon-up-open-2"><\/i><\/span><span class="slide-next"><i class="icon-down-open-2"><\/i><\/span><\/div><\/div><div class="show-img main-img"><div class="image-prd-large">' + largeIMG + "<\/div><\/div><\/div>"),
                    $("#aniimated-thumbnials").lightGallery({
                        showThumbByDefault: !1
                    }),
                    $("#osgslide").osgslide("crop/76x76", "crop/422x340", 82.5, 5, eval("'" + listImage.length + "'"))) : galleryIMG.html('<div class="group-thumb-img"><div class="slide-thumb"><a class="slide-prev" href="javascript:slidePrevThumb()"><i class="icon-up-open-2"><\/i><\/a><div class="list-thumb"><div class="thumb"><a href="javascript:"><img src="/Images/no-image.png" width="76" title="' + $("#Title").val() + '" style="padding-top: 20px;" /><\/a><\/div><\/div><a class="slide-next" href="javascript:slideNextThumb()"><i class="icon-down-open-2"><\/i><\/a><\/div><\/div><div class="show-img"><div class="image-prd-large"><div class="show-img no-image"><div class="image-prd-large"><\/div><\/div><\/div><\/div>');
                $(".review-news-box").fadeIn()
            })
        })
    });
    $("#btnBackPost").on("click", function () {
        $("#VerifyCode").addClass("valid");
        $("html,body").animate({
            scrollTop: 0
        }, 500, function () {
            $(".review-news-box").fadeOut(function () {
                $(".create-news-box").fadeIn()
            })
        })
    });
    $("#btnPostItem").on("click", function () {
        return $("#VerifyCode").addClass("valid"),
            checkValid("#div_post") ? void 0 : ($(".review-news-box").fadeOut(function () {
                $(".create-news-box").fadeIn()
            }),
                !1)
    });
    $("#div_notify a.notify-bell").on("click", function () {
        var n = $(this).parent();
        n.hasClass("open") ? (n.removeClass("open"),
            AutoScroll()) : (n.addClass("open"),
                NoScroll(),
                n.find(".notify-content").scrollbar(),
                loadNotifyItems(n.find(".notify-content").last()))
    });  
});
lstOject = "";
$.fn.extend({
    formatPrice: function () {
        $(this).number(!0, 0, ",", ".")
    }
});
Array.prototype.indexOf || (Array.prototype.indexOf = function (n) {
    var i = this.length >>> 0
        , t = Number(arguments[1]) || 0;
    for (t = t < 0 ? Math.ceil(t) : Math.floor(t),
        t < 0 && (t += i); t < i; t++)
        if (t in this && this[t] === n)
            return t;
    return -1
}
);
typeof Array.prototype.forEach != "function" && (Array.prototype.forEach = function (n) {
    for (var t = 0; t < this.length; t++)
        n.apply(this, [this[t], t, this])
}
);
typeof String.prototype.trim != "function" && (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
}
);
$.fn.osgslide = function (n, t, i, r, u) {
    function s(i) {
        var u;
        e = i;
        var o = $("#" + f + " .osgslideimg:eq(" + i + ") img").attr("src")
            , s = $("#" + f + " .osgslideimg:eq(" + i + ") img").attr("rel")
            , r = $("#" + f + " .osgslideimg:eq(" + i + ") img").attr("class")
            , u = "";
        typeof r != typeof undefined && r !== !1 && (u = r);
        $("#" + f + " .show-img img").attr("src", o.replace(n, t)).attr("rel", s).attr("class", u);
        $("#" + f + " .osgslideimg").removeClass("osgslide-active");
        $("#" + f + " .osgslideimg:eq(" + i + ")").addClass("osgslide-active")
    }
    function h(n) {
        $("#countimage").html(n)
    }
    var f = $(this).attr("id")
        , o = 1
        , e = 0;
    $("#" + f + " .slide-next").click(function () {
        if ($(this).hasClass("noneclick") && (o = 0,
            e = -1,
            $(this).removeClass("noneclick")),
            $("#" + f + " .slide-prev").removeClass("noneclick"),
            e++ ,
            u > r && o <= u - r) {
            o++;
            var n = (o - 1) * -i;
            $("#" + f + " .content-listthumb").animate({
                left: n
            }, 500)
        }
        s(e);
        h(e + 1);
        e == u - 1 ? $(this).addClass("noneclick") : e == 0 && $("#" + f + " .slide-prev").addClass("noneclick")
    });
    $("#" + f + " .slide-prev").click(function () {
        var n = $("#" + f + " .list-thumb .osgslideimg").length, t;
        $(this).hasClass("noneclick") && (o = n - (r - 2),
            e = n,
            $(this).removeClass("noneclick"));
        $("#" + f + " .slide-next").removeClass("noneclick");
        e--;
        u > r && o > 1 && (o-- ,
            t = (o - 1) * -i,
            $("#" + f + " .content-listthumb").animate({
                left: t
            }, 500));
        s(e);
        h(e + 1);
        e == 0 ? $(this).addClass("noneclick") : e == n - 1 && $("#" + f + " .slide-next").addClass("noneclick")
    });
    $("#" + f + " .osgslideimg img").click(function () {
        var n = $(this).parent().index();
        s(n);
        n++;
        h(n);
        $("#" + f + " .slide-prev").removeClass("noneclick");
        $("#" + f + " .slide-next").removeClass("noneclick");
        n == 1 ? $("#" + f + " .slide-prev").addClass("noneclick") : n == $("#" + f + " .list-thumb .osgslideimg").length && $("#" + f + " .slide-next").addClass("noneclick")
    });
    $("#" + f + " .show-img img").click(function () {
        var n = $(this).attr("rel");
        $("#" + f + " #" + n).click()
    })
}
