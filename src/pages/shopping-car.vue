 
<template>
   <div class="page shoping-car">
        <div class="navbar">
            <i class="iconfont icon-back-" @click="$router.back(-1)"></i>
            <div class="center">购物车</div>
            <i class="iconfont icon-edit" ></i>
        </div>
        <div class="wrap">


            <ul class="groups">
                <li class="bg-3f">
                    <div class="group-teacher icon-button">
                        <i class="iconfont icon-xuanzhong"></i>
                        <div>讲师: 李宁</div>
                    </div>
                    <ul>
                        <li class="group-product icon-button  padding-half " style="padding: .5rem">
                            <i class="iconfont icon-xuanzhong"></i>
                            <div class="product">
                                <figure>
                                    <img src="/assets/images/product-summary.png" alt="" class="img-responsive">
                                </figure>
                                <div>
                                    <p style="font-size: .7rem;">2018高考语文寒假系统强化班</p>
                                    <div class="price">￥20</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>

            </ul>
            <div class="line" style="height: .5rem;"></div>
            <ul class="groups">
                <li class="bg-3f">
                    <div class="group-teacher icon-button">
                        <i class="iconfont icon-circle green"></i>
                        <div>讲师: 李宁</div>
                    </div>
                    <ul>
                        <li class="group-product icon-button  padding-half " style="padding: .5rem">
                            <i class="iconfont icon-circle green product-gou"></i>
                            <div class="product">
                                <figure>
                                    <img src="/assets/images/product-summary.png" alt="" class="img-responsive">
                                </figure>
                                <div>
                                    <p style="font-size: .7rem;">2018高考语文寒假系统强化班</p>
                                    <div class="price">￥20</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>

            </ul>
            <div class="bottom-bar bg-3f">
                <div class="flex-space-between padding-half">
                    <div class="flex-space-between">
                        <span><i class="icon-circle iconfont" style="margin-right: 0rem;"></i> <span style="font-size: .7rem;margin-right: .6rem;"> 全选</span></span>
                        <div>
                            <div class="flex-space-between">
                                <div style="font-size: .7rem"> 合计</div>
                                <div class="price">￥40</div>
                            </div>
                            <div>
                                <div class=" small" style="color: #5e5e5e">总计 ￥20</div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button class="weui-btn weui-btn_primary " style="background: #19ca70;    padding-left: 20px;
                padding-right: 20px;">去结算&nbsp;&nbsp;(1)</button>
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
.groups li {
}

.group-teacher {
  padding: 0.5rem;
  font-size: 0.7rem;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
}

.group-teacher .icon-xuanzhong,
.group-teacher .icon-circle {
  line-height: 1.2rem;
}

.group-product {
}

.icon-xuanzhong,
.icon-circle {
  font-size: 1rem;
  margin-right: 0.5rem;
  color: #dadada;
}

.product {
  display: flex;
  justify-content: start;
}

.product-gou {
  display: flex;
  justify-content: center;
  align-items: center;
}

.price {
  color: #fc5300;
  font-size: 0.7rem;
}
</style>
 
