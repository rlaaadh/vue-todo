import Vue from 'vue';
import Router from 'vue-router';
import TodoMain from '@/components/TodoMain.vue'; // 메인 페이지 컴포넌트
import TodoEdit from '@/components/TodoEdit.vue'; // 수정 페이지 컴포넌트

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
    }
  ]
});
