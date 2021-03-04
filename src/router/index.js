import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Pop from '@/components/Pop'
import Tab from '@/components/Tab'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tab',
      component: Tab
    },
    {
      path: '/',
      name: 'Pop',
      component: Pop
    },
    {
      path: '/',
      name: 'Table',
      component: Table
    }

  ]
})
