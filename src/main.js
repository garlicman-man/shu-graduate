// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入组件库
import ElementUI from "element-ui"
// 导入样式
import "element-ui/lib/theme-chalk/index.css"
// 注册为全局组件
Vue.use(ElementUI)
import axios from 'axios'
Vue.prototype.$axios=axios //注意：挂载上去的名字不能等同于axios，使用$axio即可


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
