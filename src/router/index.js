import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import StudentTable from '@/components/StudentTable'
import StudentDelete from '@/components/StudentDelete'
import StudentChoose from '@/components/StudentChoose'

import TeacherTable from '@/components/TeacherTable'
import TeacherDelete from '@/components/TeacherDelete'
import TeacherChoose from '@/components/TeacherChoose'
import TeacherOpen from '@/components/TeacherOpen'
import TeacherProject from '@/components/TeacherProject'



import Login from '@/components/Login'
//
// import Tob from '@/components/Tob'
// import Tble from '@/components/Tble'
// import Top from '@/components/Top'


import User from '@/components/User'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      // meta: {title: '首页'}
    },
    {
      path: '/components/StudentChoose',
      name: 'StudentChoose',
      component: StudentChoose
    },

    {
      path: '/components/StudentDelete',
      name: 'StudentDelete',
      component: StudentDelete
    },
    {
      path: '/components/StudentTable',
      name: 'StudentTable',
      component: StudentTable
    },
    {
      path: '/components/TeacherChoose',
      name: 'TeacherChoose',
      component: TeacherChoose
    },

    {
      path: '/components/TeacherDelete',
      name: 'TeacherDelete',
      component: TeacherDelete
    },
    {
      path: '/components/TeacherTable',
      name: 'TeacherTable',
      component: TeacherTable
    },
    {
      path: '/components/TeacherOpen',
      name: 'TeacherOpen',
      component: TeacherOpen
    },
    {
      path: '/components/TeacherProject',
      name: 'TeacherProject',
      component: TeacherProject
    },
      //
      //
      // {
      //   path: '/components/Tob',
      //   name: 'Tob',
      //   component: Tob
      //  },
      //  {
      //   path: '/components/Tble',
      //   name: 'Tble',
      //   component: Tble
      //   },
      //   {
      //   path: '/components/Top',
      //   name: 'Top',
      //   component: Top
      //   },
  ]
})
