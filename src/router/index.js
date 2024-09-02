import Vue from 'vue';
import Router from 'vue-router';
import TodoMain from '@/pages/TodoMain.vue'; // 메인 페이지 컴포넌트
import TodoEdit from '@/pages/TodoEdit.vue'; // 수정 페이지 컴포넌트
import TodoSetting from '@/pages/TodoSetting.vue'; // 설정 페이지 컴포넌트

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-todo/',
      name: 'TodoMain',
      component: TodoMain
    },
    {
      path: '/vue-todo/edit/:id',
      name: 'TodoEdit',
      component: TodoEdit,
      props: true
    },
    {
      path: '/vue-todo/setting',
      name: 'TodoSetting',
      component: TodoSetting,
      props: true
    }
  ]
});
