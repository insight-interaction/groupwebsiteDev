import { createApp } from "vue";

// import { createHead } from '@vueuse/head'

import App from "./components/App.vue";
import store from "./store";

import {
    Checkbox, Tabs, Card, Tag, Menu, Affix, Popover, Tooltip, Collapse, Divider
} from "ant-design-vue";
import { createHead } from '@vueuse/head'
const head = createHead()

createApp(App)
    .use(head)
    .use(store)
    .use(Checkbox).use(Tabs).use(Card).use(Tag).use(Menu).use(Affix).use(Popover).use(Tooltip).use(Collapse).use(Divider)
    .mount("#app");

// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import Vuex from 'vuex'
// // import AsyncComputed from 'vue-async-computed'
// import BootstrapVue from 'bootstrap-vue'

// import App from './components/App.vue'
// // import router from './router'
// import store from './store'
// // import * as d3 from 'd3'
// // import * as _ from 'underscore'

// Vue.use(Vuex)
// // Vue.use(AsyncComputed)
// Vue.use(BootstrapVue)
// Vue.config.productionTip = false

// new Vue({
//     el: '#app',
//     store,
//     // router,
//     template: '<App/>',
//     components: { App }
// })
