import Vue from 'vue';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import App from './App.vue';
import router from './router';
import store from './store';

import firebase from './firebase'

import Router from 'vue-router'

import NProgress from 'vue-nprogress'

import popmotion from 'popmotion'
import VuePopmotion from 'vue-popmotion'
import pose from 'popmotion-pose';
import posed from "vue-pose";

import 'bootstrap';
import '@/assets/app.scss'
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
library.add(faUserSecret)

Vue.use(Router);
Vue.use(VuePopmotion, popmotion)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
