import Vue from "vue";
import Home from "./pages/main-page/home.vue";
import Main from "./pages/main-page/nav-footer.vue";
import baoming from "./pages/main-page/baoming.vue";
import curriculum from "./pages/main-page/curriculum-page.vue";
import friend from "./pages/main-page/friend-page.vue";
import person from "./pages/main-page/person-info.vue";
// import HelloComponent from "./com/Hello.vue"
import VueRouter from "vue-router";
import personError from "./pages/person-error.vue";
import shopCar from "./pages/shopping-car.vue";
import videoDetail from "./pages/video-detail.vue";
import creaNote from "./pages/creat-note.vue";
import shareNote from "./pages/share-note.vue"; //共享笔记 评论
import orderConfirm from "./pages/order-confirm.vue"; //订单确认
import teacherList from "./pages/teacher-list.vue"; //师训列表页
import anwser from "./pages/anwser.vue"; //考试页
import anwserInfo from "./pages/anwser-info.vue"; //考试答案解析页
Vue.use(VueRouter);
// debugger;
let v = new Vue({
  router: new VueRouter({
    routes: [
      {
        path: "/",
        component: Main,
        children: [
          { path: "/", redirect: "/home" },
          { path: "/home", component: Home },
          {
            path: "/baoming",
            component: baoming
          },
          {
            path: "/curriculum",
            component: curriculum
          },
          {
            path: "/friend",
            component: friend
          },
          {
            path: "/person",
            component: person
          }
        ]
      },
      {
        path: "/person-error",
        component: personError //我的错题
      },
      {
        path: "/shopping-car",
        component: shopCar //购物车
      },
      {
        path: "/video-detail",
        component: videoDetail //视屏详情
      },
      {
        path: "/share-note",
        component: shareNote
      },
      {
        path: "/creat-note",
        component: creaNote
      },
      {
        path: "/order-confirm",
        component: orderConfirm
      },
      {
        path: "/teacher-list",
        component: teacherList
      },
      {
        path: "/anwser",
        component: anwser
      },
      {
        path: "/anwser-info",
        component: anwserInfo
      }
      //  {
      // path: "/hello", component:HelloComponent,
      // }
    ]
  }),
  el: "#app",
  template: `
    <transition name="slide-left">
    
  <router-view class="child-view"></router-view>
  </transition>

        `,
  data: { name: "World", transitionName: "slide-left" },
  components: {
    Home
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
});
