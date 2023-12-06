import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import User from '@/views/users/index.vue';
import Role from '@/views/roles/index.vue';
import Config from '@/views/configs/index.vue';
import { auth } from '@/stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/student',
      name: 'student',
      component: () => import('@/views/students/index.vue'),
    },
    {
      path: '/student/edit/:student_id',
      name: 'edit_student',
      component: () => import('@/views/students/edit.vue'),
    },
    {
      path: '/student/create',
      name: 'create_student',
      component: () => import('@/views/students/create.vue'),
    },
    {
      path: '/delegation/team',
      name: 'delegation_team',
      component: () => import('@/views/delegation_team/index.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
    },
    {
      path: '/audit_create',
      name: 'audit_create',
      component: () => import('@/views/audit_create/index.vue'),
    },
    {
      path: '/edit_audit',
      name: 'edit_audit',
      component: () => import('@/views/audit_form/index.vue'),
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('@/views/staffs/index.vue'),
    },
    {
      path: '/delegation', name: 'delegation', component: () => import('@/views/delegation/index.vue'),
    },
    {
      path: '/delegation/role', name: 'delegation_role', component: () => import('@/views/delegation_role/index.vue'),
    },
    {
      path: '/unit',
      name: 'unit',
      component: () => import('@/views/unit/index.vue'),
    },
    {
      path: '/entity',
      name: 'entity',
      component: () => import('@/views/entity/index.vue'),
    },
    {
      path: '/audit/qa',
      name: 'audit_qa',
      component: () => import('@/views/audit_qa/index.vue'),
    },
    {
      path: '/domain',
      name: 'domain',
      component: () => import('@/views/domain/index.vue'),
    },
    {
      path: '/permission',
      name: 'permission',
      component: () => import('@/views/permissions/index.vue'),
    },
    {
      path: '/permission_feature/:permission_id',
      name: 'permission_feature',
      component: () => import('@/views/permission_features/index.vue'),
    },
    {
      path: '/role',
      name: 'role',
      component: Role,
    },
    {
      path: '/role_permission/:role_id',
      name: 'role_permission',
      component: () => import('@/views/role_permissions/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auths/login.vue'),
    },
    {
      path: '/api-key',
      name: 'api_key',
      component: () => import('@/views/api_keys/index.vue'),
    },
    {
      path: '/config',
      name: 'config',
      component: Config,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/auths/not_found.vue'),
    }
  ]
});


router.beforeEach((to, from, next) => {
  const defineAuth = auth();
  defineAuth.init();

  if(to.name == 'login'){
    if(defineAuth.isAuth != true){
      next();
    } else {
      next({name : 'home'})
    }
  } else {
    if(to.name == 'notFound'){
      next();
    } else {
      if(defineAuth.isAuth == true){
        next();
      } else {
        next({ name : 'login' });
      }
    }
  }
});

export default router
