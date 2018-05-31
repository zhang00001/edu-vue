 
<template>
 <div class="page product-detail">


        <div class="navbar visible-xs">

            <i class="iconfont icon-back-" @click="$router.back(-1)"></i>
            <div class="center">课程详情</div>


        </div>
        <div class="wrap">


            <div class="preview-image">
                <img src="/assets/images/product-img.png" alt="">
                <div class="paly-now">
                    <img src="/assets/images/play-now.png" alt="">
                </div>
            </div>
            <div>
                <div class="title">

                    <p>Windows Server 2015 R2系统配置与管理视频课程</p>
                    <p style="
            font-size: .6rem;color: #b2b2b2
        "><i class=" iconfont icon-morentouxiang" style="color: #19CA70;margin-right: 0.2rem;"></i>盛博<span style="margin: 0 0.5rem;color: #212020">|</span>已开课，火热抢购中</p>

                </div>
                <div class="weui-cell" style="margin-bottom: 0.5rem;">
                    <div class="weui-cell__bd">
                        <p style="color: #ff4200">￥69</p>
                    </div>
                    <div class="weui-cell__ft" style="font-size: 0.8rem;color: #9c9c9c;">已有<i style="font-style: normal;color: #ff4200">41</i>人购买</div>
                </div>
            </div>
            <div>
                <a class="weui-cell weui-cell_access" href="javascript:;" style="padding: 0.5rem;margin-bottom: 0.5rem;">
                    <div class="weui-cell__hd" style="    background: #ff7646;
            color: #fff;
            border-radius: 15px;
            padding: 0rem 0.5rem;   margin-right: 0.2rem;">
                        赠
                    </div>
                    <div class="weui-cell__bd">
                        <p>科目二讲义：幼教/小学/中学</p>
                    </div>
                    <div class="weui-cell__ft">8个赠品</div>
                </a>
            </div>
            <div class="flex-space-around meun">
              
                <a    :class="{active:type==productType.induce}" @click="type=productType.induce">介绍</a> 
                <a    :class="{active:type==productType.meun}" @click="type=productType.meun">目录</a> 
                <a   :class="{active:type==productType.teacher}" @click="type=productType.teacher">教师</a>
            </div>
            <!-- 介绍 -->
            <div v-if="type==productType.induce">

            
            <section class="introduce" >
                <h3>使用人群</h3>
                <p>
                    系统工程师 微软认证考试人员 运维工程师 高等院校计算机专业人员
                </p>
                <h3>课程目标</h3>
                <p>
                    通过本章学习，可以掌握打印服务器的安装，调试 ，管理，可以理解打印服务器的相关技术术语，认识打印服务相...
                </p>
                <h3>课程简介</h3>
                <p>
                    全套购买，知识更系统，价格更优惠：Windows server 2015R2系统配置与管理（全套）-初级 ：</p>


            </section>

            <div>
                <a href="javascript:void(0);" style="background: #fafafa;" class="weui-cell weui-cell_access weui-cell_link flex-space-between note">
                    <div class="" style="    border-radius: 15px;
            border: 1px solid #19ca70;
            color: #19ca70;
            text-align: center;
            padding: 0 0.5rem;font-weight: 600;
         ">笔记(4)</div>
                    <span class="weui-cell__ft"></span>
                </a>
            </div>
            <div class="note_list">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title"><img src="assets/images/avatar-small.png" alt="" srcset=""> 牛大傻 <span>3小时前</span></h4>
                    <div style="clear: both;"></div>
                    <p class="weui-media-box__desc">
                        <span>
                学习了</span>
                        <img src="assets/images/product-summary.png" alt="">

                    </p>

                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title"><img src="assets/images/avatar-small.png" alt="" srcset=""> 牛大傻 <span>2018/04/15 12:05</span></h4>
                    <div style="clear: both;"></div>
                    <p class="weui-media-box__desc">
                        <span>
                    学习了</span>


                    </p>


                </div>
            </div>
           <router-link :to="{ path: 'share-note' }" class="edit-note"  tag="div"> 
             
                <img src="/assets/images/iconfontedit.png" alt="">
         </router-link></div>
            <!-- 目录 -->
        
            <div class="weui-cells Catalog" style="margin-bottom: 4rem;"   v-if="type==productType.meun">
            <div class="weui-cell" style="border-top:none;">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-bofang weui-tabbar__icon"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>1.本章内容介绍</p>
                </div>
                <div class="weui-cell__ft">06:30</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-bofang weui-tabbar__icon"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>2.打印服务概念机特点讲解</p>
                </div>
                <div class="weui-cell__ft">06:30</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-bofang weui-tabbar__icon"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>4.打印术语理解及打印服务器</p>
                </div>
                <div class="weui-cell__ft">06:30</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-bofang weui-tabbar__icon"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>4.安装打印服务器实战操作</p>
                </div>
                <div class="weui-cell__ft">06:30</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-bofang weui-tabbar__icon"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>5.安装USB接口，Iee</p>
                </div>
                <div class="weui-cell__ft">06:30</div>
            </div></div>
     
            <!-- 教师 -->
            <div class="teach-list" v-if="type==productType.teacher">
            <div class="li">


                <div class="weui-cell">
                    <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                        <img src="/assets/images/limei.png" style="width: 50px;display: block">
                        <span class="weui-badge" style=""><i class="iconfont icon-renzhengpeizhi"></i></span>
                    </div>
                    <div class="weui-cell__bd">
                        <p>李海<span style="    font-size: 13px;
                        color: #888888;margin-left: 0.3rem;">国家信息监理工程师</span></p>
                        <p style="font-size: 13px;color: #888888;">10年以上网络及运维实践、理论基础扎实，授课思路清晰</p>
                    </div>

                </div>

                <div class="evaluate">
                    深知学习的快乐和作用，数学学习的方法和技巧，还将从这些老师的瓶子中获得励志与品格的教育
                </div>
            </div>
            <div class="li">


                <div class="weui-cell">
                    <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                        <img src="/assets/images/limei.png" style="width: 50px;display: block">
                        <span class="weui-badge" style=""><i class="iconfont icon-renzhengpeizhi"></i></span>
                    </div>
                    <div class="weui-cell__bd">
                        <p>李海<span style="    font-size: 13px;
                        color: #888888;margin-left: 0.3rem;">国家信息监理工程师</span></p>
                        <p style="font-size: 13px;color: #888888;">10年以上网络及运维实践、理论基础扎实，授课思路清晰</p>
                    </div>

                </div>

                <div class="evaluate">
                    深知学习的快乐和作用，数学学习的方法和技巧，还将从这些老师的瓶子中获得励志与品格的教育
                </div>
            </div>
            <div class="li">


                <div class="weui-cell">
                    <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                        <img src="/assets/images/limei.png" style="width: 50px;display: block">
                        <span class="weui-badge" style=""><i class="iconfont icon-renzhengpeizhi"></i></span>
                    </div>
                    <div class="weui-cell__bd">
                        <p>李海<span style="    font-size: 13px;
                        color: #888888;margin-left: 0.3rem;">国家信息监理工程师</span></p>
                        <p style="font-size: 13px;color: #888888;">10年以上网络及运维实践、理论基础扎实，授课思路清晰</p>
                    </div>

                </div>

                <div class="evaluate">
                    深知学习的快乐和作用，数学学习的方法和技巧，还将从这些老师的瓶子中获得励志与品格的教育
                </div>
            </div>
        </div>

            <div class="weui-tabbar buy" style="">
                <div class="padding" style="width: 100%;">
                    <div class="flex-space-between ">
                        <div class="flex-space-between" style="width: 100%;">
                            <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                                <img src="/assets/images/down.png" alt="">
                                <p class="weui-tabbar__label" style="color: #4d4d4d">下载</p>
                            </a>
                            <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">


                                <img src="/assets/images/zx.png" alt="" style="">


                                <p class="weui-tabbar__label" style="color: #4d4d4d">咨询</p>
                            </a>
                            <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                                <img src="/assets/images/shopcar.png" alt="" style="width: 45;">
                                <p class="weui-tabbar__label" style="color: #4d4d4d">

                                    购物车</p>
                            </a>
                        </div>
                        <div class="flex-space-between" style="flex-shrink: 0">
                            <button class="tabbar-btn icon-button ">加入购物车</button>
                             <router-link :to="{ path: 'order-confirm' }" class="tabbar-btn icon-button"  tag="button"> 
                            
                                去购买
                             </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// import { Route } from "vue-router";
import { Vue, Component, Prop } from "vue-property-decorator";
enum productType {
  induce,
  meun,
  teacher
}
@Component
export default class Page extends Vue {
  type = productType.induce;
  productType = productType;
}
</script>
 <style>

</style>
 
