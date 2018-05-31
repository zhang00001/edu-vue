 
<template>
 <div class="page">
        <div class="navbar icon-button">
            <i class="icon-back- iconfont " @click="$router.back(-1)"></i>
            <div class="center">新建笔记</div>
            <div class="right" style="font-size: .6rem">保存</div>
        </div>
        <div class="wrap">

       
        <div class="bg-white" style="padding: .5rem;padding-left: 1rem;">
            <span style="font-size: .7rem;"> 备课笔记</span>
        </div>
        <div class="line0"></div>
       
        <div class="weui-cell">
            <div class="weui-cell__bd" style="font-size: .7rem;position: relative;">
                <textarea class="weui-textarea" placeholder="在这里输入内容" rows="10" style="text-indent: 1rem;"></textarea>
                <div class="weui-textarea-prefix" style="position: absolute;left: 0;top:0;">
                    <i class="icon-note iconfont"></i>
                </div>
            </div>

        
        </div>
        <button class="weui-btn weui-btn_primary weui-btn_mini hidden-xs" style="display: flex">保存</button>
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

