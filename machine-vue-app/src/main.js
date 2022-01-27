// Import css bundle.
import './App.scss'
import '../public/bootstrap-overrides.css'

// import Vue from 'vue'
// import VueBootstrap from 'bootstrap-vue';
import { createApp } from 'vue'

// Vue.use(VueBootstrap)

import App from './App.vue'
createApp(App).mount('#app')
