import Vue from 'vue';
import App from '../App.vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Music from '../views/Music.vue';
import About from '../views/About.vue';


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/music",
      name: "music",
      component: Music
    },
    {
      path: "/about",
      name: "about",
      component: () =>  import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});

Vue.component('loading',{ template: '<div>Loading!</div>'})

router.beforeEach((to, from, next) => {
  app.loading = true
    next()
})

router.afterEach(() => {
  setTimeout(() => app.loading = false, 1500) // timeout for demo purposes
})

export default router;
