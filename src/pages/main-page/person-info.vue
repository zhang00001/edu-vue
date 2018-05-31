
<template>

    <div class="page  back_ECEDF1 person-info">

        <div class="page__bd">
            <div class="search-bar flex-space-between">
                <i class="  iconfont  icon-shezhi1 weui-tabbar__icon" style="color: #fff"></i>

                <i class="  iconfont icon-rili weui-tabbar__icon" style="color: #fff"></i>
            </div>
            <div class="banner">


                <div class="head-img">
                    <div>
                        <img src="/assets/images/gogo.png" alt="">

                        <i class="iconfont icon-renzhengpeizhi"></i>
                    </div>

                    <p style="text-align: center;  ">陈大成</p>
                </div>
                <div class="head-info flex-space-between" style="padding-bottom: 1rem;">
                    <a href="javascript:;" class="weui-tabbar__item">

                        <i class="iconfont icon-clock" style="font-size: 0.8rem;color:#19CA70"></i>
                        <p class="weui-tabbar__label">学习记录</p>
                    </a>
                    <a href="" style="border-right: 1px solid #ccc;
                            height: 1.5rem;
                            margin-top: 13px;"></a>
                    <a href="javascript:;" class="weui-tabbar__item">

                        <i class="iconfont" style="font-size: 0.8rem;color:#19CA70">0</i>
                        <p class="weui-tabbar__label">已学时长</p>
                    </a>
                    <a href="" style="border-right: 1px solid #ccc;
                                height: 1.5rem;
                                margin-top: 13px;"></a>
                    <a href="javascript:;" class="weui-tabbar__item">

                        <i class="iconfont" style="font-size:0.8rem;color:#19CA70">0</i>
                        <p class="weui-tabbar__label">我的金币</p>
                    </a>
                </div>
            </div>



            <!-- 菜单 -->
            <ul class="menu container">
 <router-link :to="{ path: 'person-error' }" class="col-lg-2 col-sm-3 col-xs-3" tag="li"> 
                    <img src="/assets/images/wode1.png" alt="">
                    <div>我的错题</div>
                  </router-link>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/wode2.png" alt="">
                    <div>我的问答</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/wode3.png" alt="">
                    <div>我的发表</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/wode4.png" alt="">
                    <div>我的成绩</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/wode5.png" alt="">
                    <div>我的师训</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/wode6.png" alt="">
                    <div>我的培训</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/wode7.png" alt="">
                    <div>我的备课</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/wode8.png" alt="">
                    <div>抽奖红包</div>
                </li>
            </ul>
            <div class="weui-cells" style="position: relative;top: -4rem;">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/wode9.png" alt="">
                    </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>会员中心

                        </p>
                    </div>
                    <span class="weui-cell__ft">开通会员享优惠</span>
                </a>

            </div>
            <div class="weui-cells" style="position: relative;top: -4rem;">
                 <router-link :to="{ path: 'shopping-car' }"   class="weui-cell weui-cell_access"> 
                
                    <div class="weui-cell__hd">
                        <img src="/assets/images/wode10.png" alt=""></div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>购物车

                        </p>
                    </div>
                    <span class="weui-cell__ft"></span>
                 </router-link>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/wode11.png" alt=""> </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>购买记录

                        </p>
                    </div>
                    <span class="weui-cell__ft"></span>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/wode12.png" alt=""> </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>我的收藏

                        </p>
                    </div>
                    <span class="weui-cell__ft">已收藏2门课程</span>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/wode13.png" alt=""> </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>我的笔记

                        </p>
                    </div>
                    <span class="weui-cell__ft"></span>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/wode14.png" alt=""> </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>学分兑换

                        </p>
                    </div>
                    <span class="weui-cell__ft"></span>
                </a>
            </div>
            <div class="weui-cells" style="position: relative;
                    top: -4rem;">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/wode15.png" alt=""> </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>优惠券

                        </p>
                    </div>
                    <span class="weui-cell__ft">无可用</span>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/wode16.png" alt=""> </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>在线客服

                        </p>
                    </div>
                    <span class="weui-cell__ft">工作时间 9:00~21:00</span>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/wode17.png" alt=""> </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>意见反馈

                        </p>
                    </div>
                    <span class="weui-cell__ft"></span>
                </a>

            </div>

          
        </div>
    </div>
</template>

<script lang="ts">
import { Route } from "vue-router";
import { Vue, Component, Prop } from "vue-property-decorator";
// import {ClientApi } from "../service/api";
@Component
export default class Page extends Vue {
  async beforeCreate() {
    //  this.lessones = await this.api.articleIndex(1);
  }
  mounted() {
    // console.log(this["route"].path);
    console.log(this.$route.path);
  }
}
</script>

 <style>

</style>
