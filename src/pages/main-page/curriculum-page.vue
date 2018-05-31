
    <!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
<div class="page bg-gray">
        <div class="navbar icon-button">
            <i class="icon-back- iconfont " @click="$router.back(-1)"></i>
            <div class="center">备课</div>
        </div>
        <div class="wrap">

       
        <div id="date"></div>
        <div class="input-append date" style="display: none;">
            <input type="text" class="span2">
            <span class="add-on">
                <i class="icon-th"></i>
            </span>
        </div>
        <div class="bg-gray padding-half" style="margin-top: 290px;">
            <!-- <div class="bg-white padding-half">
                <h6 style="font-weight: 100;">今天的课程主要是学习如何进行软件的操作,受用匪浅!</h6>
                <div class="flex-space-between" style="font-size: .5rem;">
                    <div>
                        <span class="gray"> 刚刚</span>
                    </div>
                    <div class="flex-space-between green" style="line-height: 1rem;">
                        <div class="icon-button ">
                            <i class="iconfont icon-share"></i>
                            <span>分享</span>
                        </div>
                        <div class="icon-button">
                            <i class="iconfont icon-clock2"></i>
                            <span>设置提醒</span>
                        </div>
                        <div class="icon-button ">
                            <i class="iconfont icon-shanchu"></i>
                            <span>删除</span>
                        </div>


                    </div>
                </div>
            </div> -->
            <div class="flex-center" style="margin-top:1rem">
                <img src="/assets/images/no-note.png" alt="" style="max-width: 120px;margin-bottom: .5rem">

            </div>
            <div class="text-center" style="font-size: .8rem;">您还没有相关的课程安排</div>

            <div class="padding-half flex-center">
               
               <router-link :to="{ path: 'creat-note' }" class="icon-button create-note-btn"  tag="button"> 
                    <i class="icon-plus iconfont" style="    font-size: .5rem;margin-right: .3rem;    line-height: 0.8rem;"></i>
                    <span>创建笔记</span>
                
                </router-link>
            </div>
        </div> </div>
    </div>
</template>

<script lang="ts">
// import { Route } from "vue-router";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Page extends Vue {}
</script>

 <style>
.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left {
  display: block !important;
  position: static;
  width: 100%;
  text-align: center;
  top: 2rem;
  padding: 0 !important;
  border: none;
  box-shadow: none;
  -webkit-box-shadow: none;
}

.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left
  .table-condensed {
  width: 100%;
}

.table-condensed thead {
  color: #19ca70;
}

.old.day {
  color: #d4d4d4 !important;
}

.active.day {
  background: #19ca70 !important;
  border-radius: 50% !important;
  color: #fff;
  background: #19ca70 !important;
  border-radius: 50% !important;
  display: inline-block;
  width: 35px;
  height: 35px;
  line-height: 35px;
  padding: 0;
}

.table-condensed > tbody > tr > td,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > td,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > thead > tr > th {
  padding: 0 !important;
}

.datepicker table tr td,
.datepicker table tr th {
  text-align: center;
  width: 35px;
  line-height: 35px;
}
/* 消除左上角的三角符号 */

.datepicker-dropdown:after {
  display: none !important;
}

.datepicker-dropdown.datepicker-orient-bottom:before {
  display: none !important;
}

.create-note-btn {
  text-align: center;
  border: 1px solid #19ca70;
  border-radius: 50px;
  color: #19ca70;
  background: #fff;
  padding: 0.5rem 1rem;
}

@media (min-width: 960px) {
  .datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-right.datepicker-orient-bottom {
    display: block;
    width: 100%;
  }
  .datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-right.datepicker-orient-bottom
    tbody
    tr,
  thead tr,
  .datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-right.datepicker-orient-bottom
    tbody
    tr,
  tbody tr {
    width: 960px;
    display: flex;
    justify-content: space-around;
  }
  #date {
    position: relative;
    top: 13rem;
    max-width: 960px;
    height: 6rem;
  }
  .datepicker-switch {
    line-height: auto !important;
    word-break: keep-all !important;
  }
}
</style>

 
