
<template>
 <div class="page home">

        <div class="page__bd">
            <div class="search-bar">
                <i class="icon-sousuo iconfont icon-search"></i>
                <input type="text" class="search-input" :placeholder="placeholder"  @focus="placeholder=''" @blur="placeholder='搜科目、老师、课程、机构'">

 <router-link :to="{ path: 'curriculum' }"> 
                <img src="/assets/images/data.png" alt="" srcset="" style="    width: 1.5rem;
                float: right;    margin-top: 0.2rem;">
 </router-link>
            </div>

            <div class="banner">
                <img src="/assets/images/banner.png" alt="" class="img-responsive">
            </div>

            <div class="weui-cells searchbar-result" id="searchResult" style="display: none;">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>实时搜索文本</p>
                    </div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>实时搜索文本</p>
                    </div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>实时搜索文本</p>
                    </div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>实时搜索文本</p>
                    </div>
                </div>
            </div>

            <!-- 菜单 -->
            <ul class="menu container">
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/icon/wodeke.png" alt="">
                    <div>我的课</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/icon/dingjiaoshi.png" alt="">
                    <div>定教室</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/icon/xuexiying.png" alt="">
                    <div>学习营</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/icon/chengjibiao.png" alt="">
                    <div>成绩表</div>
                </li>
                 <router-link :to="{ path: 'teacher-list' }" tag="li"  class="col-lg-2 col-sm-3 col-xs-3"> 
              
                    <img src="/assets/images/icon/shixun.png" alt="">
                    <div>师训</div>
                 </router-link>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/icon/kaipeixun.png" alt="">
                    <div>开培训</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/icon/beike.png" alt="">
                    <div>备课</div>
                </li>
                <li class="col-lg-2 col-sm-3 col-xs-3">
                    <img src="/assets/images/icon/chabaobiao.png" alt="">
                    <div>查报表</div>
                </li>
            </ul>
            <div class="line" style="height:.5rem">

            </div>

            <div class="news new1" style="    display: flex;
    justify-content: space-between;
    align-items: center;">
                <img src="/assets/images/news-arrow.png" alt="">
                <h6>开启“互联网+教育”新模式</h6>
            </div>
            <div class="line" style="height: 1px;"></div>
            <div class="offline-edu">
                <img src="/assets/images/recommand-icon.png" alt="">
                <h6>好课推荐</h6>
            </div>
            <ul class="padding container good-lesson">

                <li class="card lesson-summary col-lg-6" v-for="lesson in lessones">
                    <figure>
                        <img :src="lesson.imageUrl" alt="">
                    </figure>
                    <div class="content">
                        <p style="font-size: .6rem">{{lesson.title}}</p>
                        <div   class="lesson-summary-meta">
                            <div>
                                <span class="price">￥{{lesson.price}}&nbsp;</span>
                                <span style="padding-right: .25rem;font-size: 0.6rem;font-weight: 600"> {{lesson.curriculumtype}}</span>
                                <span class="border-line"></span>
                                <span class="price"> {{lesson.curriculumnum}}课时</span>
                            </div>
                            <div style="color: #868686;">{{lesson.enrolment}}人已经报名</div>
                        </div>
                        <div style="color: #fff;display: inline-block;">
                           
                            <router-link :to="{ path: 'video-detail' }" class="bg-orange icon-button" style="color: #fff;    margin-top: 5px;" > 
                          
                                <i class="iconfont  icon-erji"></i>
                                <span style=" font-size: .6rem;line-height: 1rem;">进教室试听</span>
                            </router-link>
                        </div>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="line" style="height:.5rem"></div>
        <div class="news offline-edu">
            <img src="/assets/images/recommand-icon.png" alt="">
            <h6>线下培训</h6>
        </div>
        <div class="padding order good-lesson" style="margin-bottom: .5rem;">
            <img src="/assets/images/xianxiapeixun.png" alt="" class="img-responsive">
            <div class="cover">
                <div style="margin-bottom: .5rem">
                    <div class="address icon-button" style="font-size: .7rem">
                        <i class="iconfont icon-address" style="margin-top: 0.2rem;line-height: 100%;color:#02FFA7;margin-right: .25rem;"></i> 上海淮海路隆盛西餐厅</div>
                    <div class="date icon-button" style="font-size: .7rem">
                        <i class="iconfont icon-clock1" style="margin-top: 0.2rem;line-height: 100%;color:#02FFA7;margin-right: .25rem;"></i> 2018/04/25 8:30 至18:00</div>
                </div>
                <div class="sig-successed">
                    <img src="/assets/images/yibaoming.png" alt="" srcset="" style="width: 100%;">
                </div>
            </div>
        </div>
        <div class="line" style="height: .5rem;"></div>
        <div class="news offline-edu">
            <img src="/assets/images/recommand-icon.png" alt="">
            <h6>我的课程</h6>
        </div>
        <ul class="classes padding-half container">
            <li class="card classes-summary col-lg-3 col-sm-6 col-xs-6" v-for="mylessone in mylessones">


                <figure>
                    <img :src="mylessone.imageUrl" alt=""> </figure>


                <div class="class-title">{{mylessone.title}}
                    <div class="learn-process">已学习{{mylessone.learning}}%</div>
                </div>
                <div style="display: flex;justify-content: space-between">
                    <div class="icon-button no-padding gray">
                        <img src="/assets/images/oclick.png" alt="">
                        <span class="small gray"> {{mylessone.curriculumnum}}课程</span>
                    </div>
                    <div class="icon-button no-padding gray">
                        <img src="/assets/images/play.png" alt="">
                        <span class="small gray"> {{mylessone.learnnum}}人学习 </span>
                    </div>
                </div>
            </li></ul>
        <div class="line" style="    height: 2rem;
        margin-bottom: 1rem;"></div>

    </div>


</template>

<script lang="ts">
// import { Route } from "vue-router";
import { Vue, Component, Prop } from "vue-property-decorator";
// import {ClientApi } from "../service/api";
@Component
export default class home extends Vue {
  placeholder = "搜科目、老师、课程、机构";

  public lessones: any[] = [
    {
      title: "2018高考语文寒假系统强化班",
      price: 20,
      curriculumtype: "语文", //课程类型（语文数学）
      curriculumnum: 60, //60课时
      imageUrl: "/assets/images/product-summary.png",
      enrolment: 1724 //报名人数
    },
    {
      title: "2018高考语文寒假系统强化班",
      price: 20,
      curriculumtype: "语文", //课程类型（语文数学）
      curriculumnum: 60, //60课时
      imageUrl: "/assets/images/product-summary.png",
      enrolment: 1724 //报名人数
    }
  ];
  mylessones: any[] = [
    {
      title: "python高端实战班项目视频课",
      learning: 60, //学习进度
      curriculumnum: 60, //60课时
      imageUrl: "/assets/images/class-summary.png",
      learnnum: 8 //学习人数
    },
    {
      title: "python高端实战班项目视频课",
      learning: 60, //学习进度
      curriculumnum: 60, //60课时
      imageUrl: "/assets/images/class-summary.png",
      learnnum: 8 //学习人数
    },
    {
      title: "python高端实战班项目视频课",
      learning: 60, //学习进度
      curriculumnum: 60, //60课时
      imageUrl: "/assets/images/class-summary.png",
      learnnum: 8 //学习人数
    },
    {
      title: "python高端实战班项目视频课",
      learning: 60, //学习进度
      curriculumnum: 60, //60课时
      imageUrl: "/assets/images/class-summary.png",
      learnnum: 8 //学习人数
    }
  ];
  mounted() {
    //   debugger;
    console.log("create");
  }
}
</script>

<style>

</style>
