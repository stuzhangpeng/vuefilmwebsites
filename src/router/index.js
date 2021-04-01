//配置路由
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
import login from 'components/common/login/login.vue'
import register from 'components/common/register/register.vue'
import index from 'views/index/index.vue'
import info from 'components/content/info/info.vue'
import videoPlayer from 'components/content/videoplayer/videoplay.vue'
import searchresult from 'components/content/searchresult/searchresult.vue'
import listmore from 'components/content/listmore/listmore.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}
const routes = [{
    path: "/",
    redirect: "/index",
    meta:{tittle:"index"}
}, {
    path: "/login",
    component: login,
    meta:{tittle:"login"}
}, {
    path: "/register",
    component: register,
    meta:{tittle:"register"}
}, {
    path: "/index",
    component: index,
    meta:{tittle:"index"}
}, {
    path: "/info/:message",
    component: info
}, {
    path: "/playVideo",
    component: videoPlayer,
    meta:{tittle:"playvideo"}
}, {
    path: "/searchvideo",
    component: searchresult,
    meta:{tittle:"searchresult"}
}, {
    path: "/listmore",
    component: listmore,
    meta:{tittle:"videolist"}
}];

const router = new VueRouter({
    routes,
    mode: 'history'
});
// 全局导航守卫,设置title
router.beforeEach((to,from,next)=>{
    document.title=to.meta.tittle;
    next();

});
export default router