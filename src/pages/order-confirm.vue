 
<template>
 <div class="page bg-gray order-confirm">
        <div class="navbar" style="    margin-bottom: 0;">
            <i class="iconfont icon-back-" @click="$router.back(-1)"></i>
            <div class="center">订单确认</div>
            <i class="iconfont icon-edit"></i>
        </div>
        <div class="wrap">


            <ul class="groups bg-white">
                <li>

                    <ul>
                        <li class="group-product icon-button  padding-half" style="padding: .5rem">
                            <div class="product">
                                <figure class="flex-center">
                                    <img src="/assets/images/product-summary.png" alt="" style="    ">
                                </figure>
                                <div style="padding-left: .5rem">
                                    <p style="  font-weight: 600;">第0章互联网的概述(发展历史+接入方法+应用)视频课程</p>
                                    <p style="color:gray;">讲师:申博</p>
                                    <div class="price" style="color:#ff6a27">￥20</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>

            </ul>
            <div class="bottom-bar bg-white conunt">

                <div class="primary flex-space-between padding-half" style="">
                    <span style="    white-space: nowrap;">
                    <span style="color: #19ca70;    font-weight: 600;"> 学分抵用</span>
                    <span class="small gray">可用0学分(可抵0元)</span>
                    </span>
                    <span class="flex">
                    <div class="border flex" >
                        <span>
                            <i class="iconfont  icon-jian"></i>
                        </span>
                    <input class="sequire">
                    <span>
                            <i class="iconfont icon-plus"></i>
                        </span>

                </div>
                <span style="
        vertical-align: middle;
        align-items: center;
        display: flex;
    "> 学分</span>
                </span>
            </div>
            <div class="weui-cell primary" style="font-size: .7rem">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label field-border" style="color: #19ca70">优惠券</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" value="" placeholder="" disabled>
                </div>
                <div class="weui-cell__ft" style="height: .8rem;">
                    无可用优惠券
                    <i class=" iconfont icon-right"></i>
                </div>
            </div>
            <div class="padding-half flex-space-between pay">
                <div class="flex" style="line-height: 2rem;">
                   
                    <div>应支付:</div>
                    <div class="price" style="color:#ff6a27;">￥99</div>

                </div>
                <div>
                    <button class="weui-btn weui-btn_primary bg-green" style="line-height: 1.6rem;font-size: .7rem;     background: #19ca70; padding: 0.2rem 0.5rem;">提交订单</button>
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

<style>

