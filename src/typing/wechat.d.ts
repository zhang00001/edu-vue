declare var wx: WXBrowserNavigator;


/**
 * 
 *  微信浏览器特殊代理对象
 *  
 *  用于调用jssdk
 * 
 *  需要引用  "http://res.wx.qq.com/open/js/jweixin-1.2.0.js"
 * 
 *  开发者文档 http://qydev.weixin.qq.com/wiki/index.php?title=%E5%BE%AE%E4%BF%A1JS%E6%8E%A5%E5%8F%A3#.E6.AD.A5.E9.AA.A4.E4.B8.80.EF.BC.9A.E5.BC.95.E5.85.A5JS.E6.96.87.E4.BB.B6
 * 
 *  开发步骤: 
 *  1. 获取 jsticket ,一般从服务器获取返回ticket
 *  2. wx.config(ticket) ,测试模式下, ticket.debug=true
 *  3. wx.ready()
 * 
 */
interface WXBrowserNavigator {

    config: (ticket: WXTicket) => any;
    /**  config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。 */
    ready(callback: Function);
    /** config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。*/
    error(callback: Function);
    /**分享朋友圈 */
    onMenuShareTimeline(config: ShareConfig);
    /** 分享给朋友 */
    onMenuShareAppMessage(config: ShareConfig);
    /** 分享给微博 */
    onMenuShareWeibo(config: ShareConfig);
    /** 选择图片 */
    chooseImage(config: {
        count: number, // 默认9
        sizeType: string[], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ('album' | 'camera')[], // 可以指定来源是相册还是相机，默认二者都有
        /**
         * function (res) {
            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        }
        */
        success: Function;
    });
}

interface WXTicket {
    /** 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。 */
    debug: boolean;
    /** 必填，企业号的唯一标识，此处填写企业号corpid */
    appId: string;
    /** 必填，生成签名的时间戳 */
    timestamp: string;
    /**必填，生成签名的随机串 */
    nonceStr: string;
    /** 必填，签名 */
    signature: string,
    /** 必填，需要使用的JS接口列表，所有JS接口列表见附录2){} */
    jsApiList: string[]
}

interface ShareConfig {
    title: string, // 分享标题
    desc: string, // 分享描述
    link: string, // 分享链接
    imgUrl: string, // 分享图标
    type?: string, // 分享类型,music、video或link，不填默认为link
    dataUrl: string, // 如果type是music或video，则要提供数据链接，默认为空
    /** 用户确认分享后执行的回调函数 */
    success: Function,
    /** 用户取消分享后执行的回调函数 */
    cancel?: Function;
}