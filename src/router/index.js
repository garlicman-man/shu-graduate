import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Pop from '@/components/Pop'
import Tab from '@/components/Tab'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
   {
        path: '/',
        name: 'Login',
        component: Login
      },
    {
      path: '/components/Tab',
      name: 'Tab',
      component: Tab
    },
    {
      path: '/components/Pop',
      name: 'Pop',
      component: Pop
    },
    {
      path: '/components/Table',
      name: 'Table',
      component: Table
    }
  ]
})
