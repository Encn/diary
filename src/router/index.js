import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
    // {
    //   path: '/',
    //   name: 'tpl',
    //   component: resolve => require(['@/views/tpl'], resolve)
    // },
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/login'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/views/register'], resolve)
    },
    {
      path: '/forget',
      name: 'forget',
      component: resolve => require(['@/views/forget'], resolve)
    },
    {
      path: '/resetCode',
      name: 'resetCode',
      component: resolve => require(['@/views/reset_code'], resolve)
    },
    {
      path: '/list',
      name: 'list',
      component: resolve => require(['@/views/list'], resolve)
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['@/views/search'], resolve)
    },
    {
      path: '/searchRes',
      name: 'searchRes',
      component: resolve => require(['@/views/search_result'], resolve)
    },
    {
      path: '/add',
      name: 'add',
      component: resolve => require(['@/views/add'], resolve)
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => require(['@/views/detail'], resolve)
    },
    {
      path: '/user',
      name: 'userCommon',
      component: resolve => require(['@/views/user/user_common'], resolve),
      children: [
        {
          path: '/',
          name: 'userIndex',
          component: resolve => require(['@/views/user/user_index'], resolve),
        },
        {
          path: 'advice',
          name: 'userAdvice',
          component: resolve => require(['@/views/user/user_advice'], resolve),
        },
        {
          path: 'resume',
          name: 'userResume',
          component: resolve => require(['@/views/user/user_resume'], resolve),
        },
        {
          path: 'editsex',
          name: 'editSex',
          component: resolve => require(['@/views/user/edit_sex'], resolve),
        },
        // {
        //   path: 'editaccount',
        //   name: 'editAccount',
        //   component: resolve => require(['@/views/user/edit_account'], resolve),
        // },
        {
          path: 'version',
          name: 'version',
          component: resolve => require(['@/views/user/version'], resolve),
        },
        {
          path: 'setting',
          name: 'setting',
          component: resolve => require(['@/views/user/setting'], resolve),
        },
        {
          path: 'editPasswd',
          name: 'editPasswd',
          component: resolve => require(['@/views/user/edit_passwd'], resolve),
        }

      ]
    }
]

const router = new Router({
    routes
})

export default router
