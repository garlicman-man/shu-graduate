import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import StudentTable from '@/components/StudentTable'
import StudentDelete from '@/components/StudentDelete'
import StudentChoose from '@/components/StudentChoose'
import StudentInfo from '@/components/StudentInfo'
import StudentSearchTeacherInfo from '@/components/StudentSearchTeacherInfo'

import TeacherTable from '@/components/TeacherTable'
import TeacherDelete from '@/components/TeacherDelete'
import TeacherChoose from '@/components/TeacherChoose'
import TeacherOpen from '@/components/TeacherOpen'
import TeacherProject from '@/components/TeacherProject'
import TeacherInfo from '@/components/TeacherInfo'
import TeacherSearchStudentInfo from '@/components/TeacherSearchStudentInfo'


import AdminStudent from '@/components/AdminStudent'
import AdminTeacher from '@/components/AdminTeacher'
import StudentRank from '@/components/StudentRank'
import TeacherProjectCount from '@/components/TeacherProjectCount'
import ProjectStudentCount from '@/components/ProjectStudentCount'
import OpenProjectStudentRank from '@/components/OpenProjectStudentRank'

import Login from '@/components/Login'


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
      path: '/components/StudentSearchTeacherInfo',
      name: 'StudentSearchTeacherInfo',
      component: StudentSearchTeacherInfo,
    },
    {
      path: '/components/TeacherSearchStudentInfo',
      name: 'TeacherSearchStudentInfo',
      component: TeacherSearchStudentInfo,
    },
    {
      path: '/components/TeacherInfo',
      name: 'TeacherInfo',
      component: TeacherInfo,
    },
    {
      path: '/components/AdminTeacher',
      name: 'AdminTeacher',
      component: AdminTeacher,
    },
    {
      path: '/components/StudentInfo',
      name: 'StudentInfo',
      component: StudentInfo,
    },
    {
      path: '/components/AdminStudent',
      name: 'AdminStudent',
      component: AdminStudent,
    },
    {
      path: '/components/StudentRank',
      name: 'StudentRank',
      component: StudentRank,
    },
    {
      path: '/components/TeacherProjectCount',
      name: 'TeacherProjectCount',
      component: TeacherProjectCount,
    },
    {
      path: '/components/ProjectStudentCount',
      name: 'ProjectStudentCount',
      component: ProjectStudentCount,
    },
    {
      path: '/components/OpenProjectStudentRank',
      name: 'OpenProjectStudentRank',
      component: OpenProjectStudentRank,
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
      // path:'/',
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
    }
  ]
})
