/*global.js Modified BY 痴情浪子 QQ:315065690 2017-12-29 13:28*/
var $$, $$$;
if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "") == "6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "") == "7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "") == "8.0") {
    $(function() {
        var logo = "/template/Atour/images/logo.png",
            title = "亚朵生活 - Life is A Tour",
            WX_IMG = "/template/Atour/images/top_WX_qrcode.png",
            APP_IMG = "/template/Atour/images/top_app_qrcode.png";
        var html = '<table class="table">' + "<tbody>" + "<tr>" + "<td>" + "<h2><img src=" + logo + " /></h2>" + "<h3>" + title + "</h3>" + "<h4>" + "<span><img src=" + WX_IMG + " /><i>微信二维码</i></span>" + "<span><img src=" + APP_IMG + " /><i>APP二维码</i></span>" + "</h4>" + "</td>" + "</tr>" + "</tbody>" + "</table>";
        $("body").html(html)
    })
} else {
    $$ = function(selector) {
        return document.querySelector(selector)
    };
    $$$ = function(selector) {
        return document.querySelectorAll(selector)
    };
    window.addEventListener("DOMContentLoaded", function() {
        if (window.location.href.split("/")[3] == "") {
            $$$("nav li")[0].className = "main_nav current"
        }
    })
};