 
<template>
  <div class="page line anwser-process" style="min-height: 100vh">
        <div class="navbar ">
            <i class="iconfont icon-back-" @click="$router.back(-1)"></i>
            <div class="center">
                <div class="icon-button">
                    <div>
                        <img src="/assets/images/djs1.png" alt="">
                        <!-- <i class="iconfont icon-naozhong " style="line-height: 1rem"></i> -->
                        <span> 倒计时29:59</span></div>

                </div>

            </div>
            <div class="right">
                <i class="iconfont icon-aa"></i>
            </div>
        </div>
<div class="wrap">


        <!-- 单选题 -->
        <div class="single-anwser bg-white">
            <div class="type">单选题</div>
            <div class="title" style="text-indent: 2rem;">《中共中央国务院关于深化教育改革全面推进素质教育的决定》进一步强调指出:“全面推进素质教育,根本上要（）来保障”。</div>
        </div>
        <ul class="check-list bg-white">
            <li>
                <i class="iconfont icon-check1" style="color:#32cc77"></i>
                <div>A.靠法治、靠制度</div>
            </li>
            <li>
                <i class="iconfont icon-close" style="color:#ff5c46"></i>
                <div>B.靠社会</div>
            </li>
            <li>
                <i class="iconfont icon-circle" style="color:#CECECE"></i>
                <div>C.靠老师</div>
            </li>
            <li>
                <i class="iconfont icon-circle" style="color:#CECECE"></i>
                <div>D.靠家长</div>
            </li>

        </ul>

        <div class="bottom-bar bg-white">
            <div class="padding-half flex-space-between">
                <div style="padding: 0 .5rem;flex-shrink: 0;">
                    <!-- <i class="iconfont icon-menu normal"></i> -->
                    <img src="/assets//images/djs2.png" alt="">
                    <span class="normal" style="border-right: 1px solid  gray;padding-right: 1rem;"> 10 / 50</span>
                </div>
                <div class="flex-space-between" style="width: 100%;">
                    <div style="
                    display:  flex;
                ">
                        <span class="icon-button" style="display: inline-block">
                                <!-- <i class="iconfont icon-close" style="color:#c0c0c0;    font-size: .8rem;"></i> -->
                            <img src="/assets/images/djs3.png" alt="">
                                <span class="no" style="    font-size: .8rem;"> 0</span></span>
                        <span class="icon-button" style="display: inline-block">
                            <!-- <i class="iconfont icon-gou" style="color:#c0c0c0;font-size: .9rem"></i> -->
                           <img src="/assets/images/djs4.png" alt="">
                            <span class="yes" style="    font-size: .8rem;"> 0</span>

                        </span>

                    </div>
                    <button class="tabbar-btn">
                        <!-- <i class="iconfont icon-pencil2"></i> -->
                    <img src="/assets/images/djs5.png" alt="">
                        <span>交卷</span>
                    </button>
                </div>
            </div>
        </div>
        <!-- <div class="mask" style="">
            <div class="flex-center" style="">
                <div class="cj">
                    <p>
                        您的成绩为<span>999</span>分
                    </p>
                    <div>
                        <img src="/assets/images/djs6.png" alt="">还剩<span>48</span>道题未做
                    </div>
                    <div>
                        <img src="/assets/images/djs7.png" alt="">考错<span>2</span>题
                    </div>
                </div>
                <button class="continue-btn">继续答题</button>
                <button class=" submit-btn ">现在交卷</button>
            </div>
        </div> -->
        </div>
    </div>
</template>

<script lang="ts">
// import { Route } from "vue-router";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Page extends Vue {}
</script>



