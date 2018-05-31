// http://portal.vorwerk.com.cn/TM/Training/User/Login?back=http%253a%252f%252fportal.vorwerk.com.cn%252fTM%252fTraining%252fManageActivity%252fActivityList
// http://portal.vorwerk.com.cn/TM/Training/Scripts/View/common.js


if (document.documentElement.clientWidth < 960) {

    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                var fz = (100 * (clientWidth / 1600)).toString();
                if (fz.indexOf('.') != -1) {
                    fz = fz.substring(0, fz.indexOf('.') + 2);
                }
                // console.log(fz);
                docEl.style.fontSize = fz + 'px';
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
}


//js替换全部字符串
String.prototype.replaceAll = function(search, replace) {

    var str = this;
    while (str.indexOf(search) >= 0) {
        str = str.replace(search, replace);

    }
    return str;
}

String.prototype.replaceChar = function() {
    var str = this;
    str = str.replaceAll("^", "");
    str = str.replaceAll("~", "");
    str = str.replaceAll("|", "");
    str = str.replaceAll(",", "，");
    str = str.replaceAll("'", "\"");

    return str;
}

function newGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
}

function encodeHtml(str) {
    var s = "";
    if (str == null || str.length == 0) return "";

    s = str.replaceAll(/&amp;/g, "&");
    s = s.replaceAll(/&lt;/g, "<");
    s = s.replaceAll(/&gt;/g, ">");
    s = s.replaceAll(/&nbsp;/g, " ");
    s = s.replaceAll(/&#39;/g, "\"");
    s = s.replaceAll(/&quot;/g, "\"");
    s = s.replaceAll("'", "\""); //把单引号变为双引号

    s = s.replaceAll(/[\"\'][\s]*javascript:(.*)[\"\']/gi, "\"\"");
    s = s.replaceAll(/javascript/gi, "");
    s = s.replaceAll(/script/gi, "");
    s = s.replaceAll(/eval\((.*)\)/gi, "");
    s = s.replaceAll(/\(/gi, "（");
    s = s.replaceAll(/\)/gi, "）");

    return s;
}

function decodeHtml(str) {
    var s = "";
    if (str == null || str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");

    return s;
}

function removeHtmlNode(text) {
    //移除Html标签 1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement("div");
    //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
    temp.innerHTML = text;
    //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}

function dateFormat(fmt, date) { //author: meizz   
    var o = {
        "M+": date.getMonth() + 1, //月份   
        "d+": date.getDate(), //日   
        "h+": date.getHours(), //小时   
        "m+": date.getMinutes(), //分   
        "s+": date.getSeconds(), //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds() //毫秒   
    };

    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));

    return fmt;
}

var alertDom;

function weuialert(message) {

    toastr.remove();
    toastr.warning(message);
    return;
}

function weuialertclose() {
    if (alertDom != null)
        alertDom.hide();
}

function activityStatus(state) {
    if (state == 0) {
        return '活动初始化';
    }
    if (state == 1) {
        return '活动报名中';
    }
    if (state == 2) {
        return '活动报名结束';
    }
    if (state == 3) {
        return '活动已开始';
    }
    if (state == 4) {
        return '活动已关闭';
    }
    if (state == 5) {
        return '活动已结束';
    }

}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

function isIphoneBrowser() {

    var ua = navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(ua)) {

        return true;
    } else if (/android/.test(ua)) {

        return false;
    }

    return true;
}

function loginRedirect(back) {
    if (back == null) {
        back = '';
    }

    if (isWeiXin()) {
        window.location.href = virtualpath + "/User/WeiXinAuth/?back=" + back;
    } else {
        window.location.href = virtualpath + "/User/Login/?back=" + back;
    }
}

/*手机版导航栏*/
$(document).ready(function() {
    $('.mobile-navigation-icon').click(function() {
        var $check = $('#luxbar-checkbox');
        var $label = $('label.luxbar-hamburger');
        $label.click();
        $('body').animate({ scrollTop: 0 }, 500);
    });

    $("#luxbar-checkbox").change(function(e) {
        var $check = $(this);
        var nav = $('.mobile-navigation-icon');

        if ($check.is(":checked")) {
            nav.addClass('on');
        } else {
            nav.removeClass('on');
        }
    });
});