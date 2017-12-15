// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as directives from './directives'
import './utils/axios'
import './assets/js/validate'

Vue.config.productionTip = false

// register global utility directives.
Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key]);
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})