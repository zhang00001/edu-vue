 
<template>
 <transition :name="'slide-left'">
<div class="page teacher-list1">


        <div class="navbar">

            <i class="iconfont icon-back-" @click="$router.back(-1)"></i>
            <div class="center">师训


            </div>


        </div>
        <div class="wrap">


            <div class="flex-space-between video bg-white" style="background: #f7f7f7">

                <a  :class="{active:type==LessonType.Base}" @click="type=LessonType.Base">
                    <img src="" alt=""> 基础课
                </a>
                <a :class="{active:type==LessonType.Common}" @click="type=LessonType.Common" >基本课</a>
                <a :class="{active:type==LessonType.High}" @click="type=LessonType.High">技术课</a>
            </div>
            <!-- 左边基础课 -->

            <div v-if="type==LessonType.Base">

 <p style="    text-align: center;
    padding: 0.5rem;background: #fff;">
                中经商品交易中心 
            </p>
            <div style=" background: #fff;">
                <div class="flex-space-between" style="   
margin: 0 1rem;
 
border: 1px solid #19ca70;
padding: 0.2rem 1rem;
box-shadow: 1px;
box-shadow: 1px 1px 5px #19ca703d;    font-size: 0.8rem;
color: #19ca70;">
                    <div class="">
                        <i class="iconfont icon-clock"></i>
                        <span style="color: #333">178课时</span> </div>
                    <div class="">
                        <i class=" " style="    font-style: normal;">|</i>
                    </div>
                    <div>
                        <i class="iconfont icon-yuedu"></i>
                        <span style="color: #333">
    阅读216</span>
                    </div>
                </div>
            </div>

            <div>
                <p style="  " class="cover_p">
                    国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右
                </p>
                <div class="cover" style="  "></div>
            </div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/assets/images/teacher-list.png" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">2013年法律硕士考研题库试题汇总</h4>
                        <p class="weui-media-box__desc">2018/04/12 14:57</p>
                    </div>
                </a>
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/assets/images/teacher-list.png" alt=""> </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">2013年法律硕士考研题库试题汇总</h4>
                        <p class="weui-media-box__desc">2018/04/12 14:57</p>
                    </div>
                </a>
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/assets/images/teacher-list.png" alt=""> </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">2013年法律硕士考研题库试题汇总</h4>
                        <p class="weui-media-box__desc">2018/04/12 14:57</p>
                    </div>
                </a>
            </div>
            </div>
           
           



            <!--基本课 -->
             <div v-if="type==LessonType.Common">

 <p style="    text-align: center;
    padding: 0.5rem;background: #fff;">
                中经商品交易中心 (基本课)
            </p>
            <div style=" background: #fff;">
                <div class="flex-space-between" style="   
margin: 0 1rem;
 
border: 1px solid #19ca70;
padding: 0.2rem 1rem;
box-shadow: 1px;
box-shadow: 1px 1px 5px #19ca703d;    font-size: 0.8rem;
color: #19ca70;">
                    <div class="">
                        <i class="iconfont icon-clock"></i>
                        <span style="color: #333">178课时</span> </div>
                    <div class="">
                        <i class=" " style="    font-style: normal;">|</i>
                    </div>
                    <div>
                        <i class="iconfont icon-yuedu"></i>
                        <span style="color: #333">
    阅读216</span>
                    </div>
                </div>
            </div>

            <div>
                <p style="  " class="cover_p">
                    国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右
                </p>
                <div class="cover" style="  "></div>
            </div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/assets/images/teacher-list.png" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">2013年法律硕士考研题库试题汇总</h4>
                        <p class="weui-media-box__desc">2018/04/12 14:57</p>
                    </div>
                </a>
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/assets/images/teacher-list.png" alt=""> </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">2013年法律硕士考研题库试题汇总</h4>
                        <p class="weui-media-box__desc">2018/04/12 14:57</p>
                    </div>
                </a>
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/assets/images/teacher-list.png" alt=""> </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">2013年法律硕士考研题库试题汇总</h4>
                        <p class="weui-media-box__desc">2018/04/12 14:57</p>
                    </div>
                </a>
            </div>
            </div>
            <!-- 技术课 -->
             <div v-if="type==LessonType.High">

 <p style="    text-align: center;
    padding: 0.5rem;background: #fff;">
                中经商品交易中心 (技术课)
            </p>
            <div style=" background: #fff;">
                <div class="flex-space-between" style="   
margin: 0 1rem;
 
border: 1px solid #19ca70;
padding: 0.2rem 1rem;
box-shadow: 1px;
box-shadow: 1px 1px 5px #19ca703d;    font-size: 0.8rem;
color: #19ca70;">
                    <div class="">
                        <i class="iconfont icon-clock"></i>
                        <span style="color: #333">178课时</span> </div>
                    <div class="">
                        <i class=" " style="    font-style: normal;">|</i>
                    </div>
                    <div>
                        <i class="iconfont icon-yuedu"></i>
                        <span style="color: #333">
    阅读216</span>
                    </div>
                </div>
            </div>

            <div>
                <p style="  " class="cover_p">
                    国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右国家司法考试是中华人民共和国司法部依据《中华人民共和国法官法》，《中华人民共和国检查法》，《中华人民共和国律师法》，《中华人民共和国公证法》的有关规定设立的职业证书考试。担任职业律师，法官，检察官和公证员必须通过国家自发考试。国家司法考试内年的通过率一般是在全国考生人数的10%左右
                </p>
                <div class="cover" style="  "></div>
            </div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/assets/images/teacher-list.png" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">2013年法律硕士考研题库试题汇总</h4>
                        <p class="weui-media-box__desc">2018/04/12 14:57</p>
                    </div>
                </a>
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/assets/images/teacher-list.png" alt=""> </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">2013年法律硕士考研题库试题汇总</h4>
                        <p class="weui-media-box__desc">2018/04/12 14:57</p>
                    </div>
                </a>
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="/assets/images/teacher-list.png" alt=""> </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">2013年法律硕士考研题库试题汇总</h4>
                        <p class="weui-media-box__desc">2018/04/12 14:57</p>
                    </div>
                </a>
            </div>
            </div>
            <div class="weui-tabbar" style="position: fixed;">

                <a href="javascript:;" class="weui-tabbar__item">

                    <i class="iconfont icon-book_icon weui-tabbar__icon"></i>
                    <p class="weui-tabbar__label">查看章节</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">

                    <i class="iconfont icon-wenjianjia weui-tabbar__icon"></i>
                    <p class="weui-tabbar__label">加入书架</p>
                </a>
                  <router-link :to="{ path: 'anwser' }"    class="weui-tabbar__item"> 
              
                
                    <span style="display: inline-block;position: relative;">
                <i class=" icon-qianbipencil83 iconfont weui-tabbar__icon"></i>
               </span>
                    <p class="weui-tabbar__label">考试</p>
               </router-link>


            </div>
        </div>
    </div>
    </transition>

</template>

<script lang="ts">
// import { Route } from "vue-router";
import { Vue, Component, Prop } from "vue-property-decorator";
enum LessonType {
  Base,
  Common,
  High
}

@Component
export default class Page extends Vue {
  type = LessonType.Base;
  LessonType = LessonType;
}
</script>



