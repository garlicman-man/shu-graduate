import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Pop from '@/components/Pop'
import Tab from '@/components/Tab'
import Login from '@/components/Login'
import Tob from '@/components/Tob'
import Tble from '@/components/Tble'
import Top from '@/components/Top'


import User from '@/components/User'
Vue.use(Router)

export default new Router({
  routes: [
   {
          path: '/',
          name: 'Login',
          component: Login
      },
  {
        path: '/user',
        name: 'User',
        component: User
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
    },
    {
      path: '/components/Tob',
      name: 'Tob',
      component: Tob
     },
     {
      path: '/components/Tble',
      name: 'Tble',
      component: Tble
      },
      {
      path: '/components/Top',
      name: 'Top',
      component: Top
           },
  ]
})
