import Vue from 'vue'
import Router from 'vue-router'

import NewSong from '../components/containers/NewSong/NewSong.vue'
import Rank from '../components/containers/Rank/Rank.vue'
import Singer from '../components/containers/Singer/Singer.vue'
import SongSheet from '../components/containers/SongSheet/SongSheet.vue'


//全局注册插件
Vue.use(Router)


let router = new Router({
  mode: 'history',
  routes: [//路由表
    // {path:'',component:Home},//默认路由
    { path: '/', redirect: '/newSong' },//重定向
    {
      path: '/newSong',
      name: 'new-song',
      component: NewSong
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/songSheet',
      name: 'songSheet',
      component: SongSheet
    }
  ]

})

// router.beforeEach((to, from, next) => {
//   console.log('router is changed',to,from)
//   next()
// })


export default router
