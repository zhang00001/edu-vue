
<template>
<div class="page share-note">


        <div class="navbar">

            <i class="iconfont icon-back-" @click="$router.back(-1)"></i>
            <div class="center">共享笔记</div>


        </div>

        <div class="preview-image">
            <img src="/assets/images/product-img.png" alt="">
            <div class="paly-now">
                <img src="/assets/images/play-now.png" alt="">
            </div>
        </div>

        <div style="" class="flex-space-between share-note-butt">

            <div style="  ">

                <img src="assets/images/add0-note.png" alt="" style="">共享笔记</div>
            <a href="javascript:;" class="weui-btn weui-btn_plain-primary weui-btn_mini" style=" ">保存</a>
        </div>
        <div style="" class="textarea">
            <textarea name="" id="" placeholder="输入笔记" style="" value="输入笔记">


        </textarea>
            <div class="weui-uploader__bd">
                <ul class="weui-uploader__files" id="uploaderFiles">



                    <li class="weui-uploader__file">
                        <img src="/assets/images/add-note.png" alt="">
                        <i class="iconfont icon-close"></i>
                    </li>




                </ul>
                <div class="  add-img">
                    <!-- <input type="file"> -->
                    <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
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


 
