 
<template>

<div class="page anwser">


        <div class="navbar">
            <i class="iconfont icon-back-" @click="$router.back(-1)"></i>
            <div class="center">1&nbsp;/&nbsp;15</div>
            <div class="right">
                <i class="iconfont icon-aa"></i>
            </div>
        </div>
        <div class="wrap">


            <!-- 单选题 -->
            <div class="single-anwser bg-3f">
                <div class="type">单选题</div>
                <div class="title" style="text-indent: 3rem;">《中共中央国务院关于深化教育改革全面推进素质教育的决定》进一步强调指出:“全面推进素质教育,根本上要（）来保障”。</div>
            </div>
            <ul class="check-list bg-3f">
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
            <div class="padding bg-3f">
                <div class="kuang">
                    <div class="anwser-card">
                        <div class="title">正确答案是
                            <div class="yes">A</div>&nbsp; 您的答案是
                            <div class="no">B</div>
                        </div>
                        <strong class="no" style="font-size: .9rem">回答错误</strong>
                    </div>
                    <div class="padding">
                        <div class="analysis-card">
                            <div style="    margin-left: 6%;">
                                <a class="btn yes">全站统计</a>
                            </div>
                            <div class="data">
                                <div>
                                    <h6>15200</h6>
                                    <span>作答次数</span>
                                </div>
                                <div>
                                    <h6>85%</h6>
                                    <span>正确率</span>
                                </div>
                                <div>
                                    <h6 class="no">B</h6>
                                    <span>易错项</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="line"></div>
                <div class="news">
                    <img src="/assets/images/recommand-icon.png" alt="">
                    <h6>解析</h6>
                </div>

                <div class="padding">
                    <div class="green-panel">
                        去微信号“一起考教师”,回复“口诀”,领取教宗32条记忆口诀
                    </div>
                    <div style="font-size: .7rem;" class="jx">
                        解析:《决定》指出,全面推进素质教育,根本上要靠法治，靠制度保障。各级人民政府和各部门要切实做到依法行政,保证教育方针的全面贯彻执行。
                    </div>

                </div>
                <div class="line"></div>
                <div class="news">
                    <img src="/assets/images/recommand-icon.png" alt="">
                    <h6>考点</h6>
                </div>
                <div class="padding jx" style="font-size: .7rem;">教育观</div>
                <div class="line"></div>

                <div class="news">
                    <img src="/assets/images/recommand-icon.png" alt="">
                    <h6>来源</h6>
                </div>
                <div class="padding jx" style="font-size: .7rem;">
                    2012年山东-济南招教考试
                </div>
                <div class="line"></div>
                <img src="/assets/images/order.png" alt="" style="width: 100%">
                <div class="news">
                    <img src="/assets/images/recommand-icon.png" alt="">
                    <h6>精华点评</h6>
                </div>
                <ul class="comments">
                    <li>
                        <div class="flex-space-between">
                            <div class="info flex-center" style="">
                                <img src="/assets/images/avatar-small.png" alt="" class="avatar">
                                <span class="padding-right name" style="padding-right: 1rem;">潘玲</span>
                                <div class="state"><img src="/assets/images/anwser1.png" alt=""> 火热</div>
                            </div>
                            <div class="address" style="height: 2.3rem;line-height: 2.3rem;font-size: .5rem;">
                                <span style="
                    margin-right: 1rem;
                ">三小时</span>
                                <span>济南市</span>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <div class="avatar" style="
                display: inline-block;
                flex-shrink: 0;
            "></div>
                            <div class="pl">没问题的,么么哒</div>
                        </div>
                    </li>
                    <li>
                        <div class="flex-space-between">
                            <div class="info flex-center" style="">
                                <img src="/assets/images/avatar-small.png" alt="" class="avatar">
                                <span class="padding-right name" style="padding-right: 1rem;">潘玲</span>
                                <div class="state"><img src="/assets/images/anwser1.png" alt=""> 火热</div>
                            </div>
                            <div class="address" style="height: 2.3rem;line-height: 2.3rem;font-size: .5rem;">
                                <span style="
                        margin-right: 1rem;
                    ">三小时</span>
                                <span>济南市</span>
                            </div>
                        </div>
                        <div style="display: flex;">
                            <div class="avatar" style="
                    display: inline-block;
                    flex-shrink: 0;
                "></div>
                            <div style="" class="pl">没问题的,么么哒</div>
                        </div>
                    </li>
                </ul>

            </div>
            <div style="height: 2rem" class="line hidden-lg"></div>
            <div class="weui-tabbar" style="position: fixed;width: 100%;">
                <div class="padding" style="width: 100%;">
                    <div class="flex-space-between ">
                        <div class="flex-space-between" style="flex-shrink: 0">
                            <button class="tabbar-btn icon-button"> <img src="/assets/images/anwser2.png" alt=""> 只看错题</button>
                            <button class="tabbar-btn icon-button">  <img src="/assets/images/anwser3.png" alt=""> 答题卡</button>
                        </div>
                        <div class="flex-space-between dp" style="width: 100%;">
                            <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                                <span  class="dp_span">
                                    <img src="/assets/images/anwser4.png" alt="">
                                    <span class="weui-badge" >1</span>
                                </span>
                                <p class="weui-tabbar__label">点评</p>
                            </a>
                            <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                                <span   class="dp_span">
                                    <img src="/assets/images/anwser5.png" alt="">
                                       
                        </span>
                                <p class="weui-tabbar__label">纠错</p>
                            </a>
                            <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                                <span class="dp_span">
                                    <img src="/assets/images/anwser6.png" alt="">
                                                 </span>
                                <p class="weui-tabbar__label">

                                    收藏</p>
                            </a>
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

@Component
export default class Page extends Vue {}
</script>



