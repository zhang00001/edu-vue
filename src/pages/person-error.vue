<template>
 <div class="page  back_ECEDF1 peoson-error">
        <div class="navbar">

            <i class="iconfont icon-back-" @click="$router.back(-1)"></i>
            <div class="center">我的错误题目</div>


        </div>
<div class="wrap">

        <div class="Exam-success">
            <img src="/assets/images/success.png" alt="">
            <p>考试通过</p>
        </div>
        <div class="box-all">
            <div class="box-info">
                <div class="head-info flex-space-between" style="    padding-bottom: 1rem;
            border-bottom: 1px solid #ccc;
            margin: 0 0.5rem;padding-top: 0.5rem;">
                    <a href="javascript:;" class="weui-tabbar__item">

                        <img src="/assets/images/success_030.png" alt="" srcset="">
                
                        <p class="weui-tabbar__label title" >65:20</p>
                        <p class="weui-tabbar__label">答题时间</p>
                    </a>
                    <a href="" style="border-right: 1px solid #ccc;
                        height: 1.5rem;
                        margin-top: 13px;"></a>
                    <a href="javascript:;" class="weui-tabbar__item">
                        <img src="/assets/images/success_050.png" alt="" srcset="">
               
                        <p class="weui-tabbar__label title">100题</p>
                        <p class="weui-tabbar__label">本次答题数</p>
                    </a>
                    <a href="" style="border-right: 1px solid #ccc;
                            height: 1.5rem;
                            margin-top: 13px;"></a>
                    <a href="javascript:;" class="weui-tabbar__item">
                        <img src="/assets/images/success_070.png" alt="" srcset="">
                    
                        <p class="weui-tabbar__label title">56题</p>
                        <p class="weui-tabbar__label">正确答题</p>
                    </a>
                    <a href="" style="border-right: 1px solid #ccc;
                                height: 1.5rem;
                                margin-top: 13px;"></a>
                    <a href="javascript:;" class="weui-tabbar__item">
                        <img src="/assets/images/success_090.png" alt="" srcset="">
                
                        <p class="weui-tabbar__label title">56%</p>
                        <p class="weui-tabbar__label">正确率</p>
                    </a>
                </div>
                <div class="flex-space-between" style="    padding-bottom: 1rem;">

                <router-link :to="{ path: 'anwser-info' }" tag="li"  class="weui-btn weui-btn_primary weui-btn_loading weui-btn_round" style="    margin-top: 15px;">
                
                    
                        <img src="/assets/images/jx.png" alt="" style="    width: 1rem;    margin-top: -0.3rem; "> 查看解析
                 </router-link>
                    <a href="javascript:;" class="weui-btn weui-btn_primary weui-btn_loading weui-btn_round">
                        <img src="/assets/images/lx.png" alt="" style="    width: 1rem;    margin-right: 0.2rem;    margin-top: -0.3rem;">我要练习</a>
                </div>

            </div>
        </div>

        <div style="  " class="error-list">

            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/success_03.png" alt="">
                    </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>文字题

                        </p>
                    </div>
                    <span class="weui-cell__ft">9</span>
                </a>

            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/success_06.png" alt="">
                    </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>判断题

                        </p>
                    </div>
                    <span class="weui-cell__ft">9</span>
                </a>

            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd">
                        <img src="/assets/images/success_08.png" alt="">
                    </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>单选题

                        </p>
                    </div>
                    <span class="weui-cell__ft">9</span>
                </a>

            </div>
        </div>
        <div class="bottom-bar " style="background: #fff;">
            <div class="flex-space-between padding-half">


                <div class="flex-space-between" style="line-height: 2rem;">
                    <i class=" weui-tabbar__icon icon-chakanwenjian iconfont" style="    font-size: 1.3rem;
                                                    margin-right: 0.3rem;margin-top: -0.5rem;"></i>
                    <div style="font-size: .8rem;    margin-top: 0.4rem;">查看课程</div>
 </div>
 <div>
                    <button class="weui-btn weui-btn_primary " style="background: #19ca70;    padding-left: 20px; padding-right: 20px;">下一集&nbsp;&nbsp;</button>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script lang="ts">
// import { Route } from "vue-router";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class personError extends Vue {}
</script>

<style>
.weui-cells {
  margin-top: 0.5rem;
}

.box-all {
  position: relative;
  height: 7rem;
}

.box-info {
  position: absolute;
  top: -1.5rem;
  background: #fff;
  left: 2.5%;
  width: 95%;
}

.head-info img {
  width: 1.5rem;
}
</style>
 
