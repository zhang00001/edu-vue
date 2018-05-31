 
<template>

 
     <div>
         
     <transition :name="transitionName">
<router-view class="child-view"> </router-view>
</transition>

      <div class="weui-tabbar foot" style="position: fixed;">
        <router-link :to="{ path: '/home' }" class="weui-tabbar__item"  :active-class="'weui-bar__item_on'">
            
                <span style="display: inline-block;position: relative;">
                    <i class="iconfont icon-home weui-tabbar__icon"></i>
                 
                </span>
                <p class="weui-tabbar__label">首页</p>
             
            </router-link>
            <router-link :to="{ path: '/curriculum' }" class="weui-tabbar__item" :active-class="'weui-bar__item_on'">
       

                <i class="iconfont icon-subject weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">课程</p>
     
            </router-link>
            <router-link :to="{ path: '/friend' }" class="weui-tabbar__item" :active-class="'weui-bar__item_on'">
           
                <span style="display: inline-block;position: relative;">
                    <i class="weui-tabbar__icon icon-navig-quanzi iconfont"></i>
                
                </span>
                <p class="weui-tabbar__label">圈子</p>
            
            </router-link>
            <router-link :to="{ path: 'baoming' }" class="weui-tabbar__item" :active-class="'weui-bar__item_on'"> 
            
                <span style="display: inline-block;position: relative;">
                    <i class="weui-tabbar__icon icon-baoming iconfont "></i>
                </span>
                <p class="weui-tabbar__label">报名</p>
          
            </router-link>
            <router-link :to="{ path: 'person' }" class="weui-tabbar__item" :active-class="'weui-bar__item_on'">
             
                <span style="display: inline-block;position: relative;">
                    <i class="  weui-tabbar__icon iconfont icon-wode"></i>
                </span>
                <p class="weui-tabbar__label">我的</p>
           
</router-link>

        </div>
        </div>
     

    
</template>

<script lang="ts">
// import { Route } from "vue-router";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Page extends Vue {
  isActive = true;
  hasError = false;
  transitionName = "slide-left";
  async beforeCreate() {}
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      console.log(this.transitionName);
      next();
    });
  }
}
</script>

<style>

</style>
