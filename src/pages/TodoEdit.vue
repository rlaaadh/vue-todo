<template>
  <div class="page edit">
    <TodoHeader :iconType=iconType>할 일 수정</TodoHeader>
    <form action="">
      <div>
        <label for="titleFiled">제목</label>
        <input type="text" v-model="todo.title" id="titleFiled" placeholder="제목을 입력해주세요">
      </div>
      <div>
        <label for="textFiled">내용</label>
        <textarea
          name="textFiled"
          id="textFiled"
          cols="30"
          rows="4"
          placeholder="내용을 입력해주세요"
          v-model="todo.text"
          @keyup.enter.stop="addTodo">
        </textarea>
      </div>
      <button class="addContainer" v-on:click="updateTodo">
        <i class="fa-solid fa-check"></i>
      </button>
    </form>


    <!-- 모달 컴포넌트 -->
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="header">
        <h3>알림</h3>
      </div>
      <div slot="body">
        <p>수정이 완료되었습니다.</p>
      </div>
    </Modal>
  </div>
</template>

<script>
import TodoHeader from '../components/layouts/TodoHeader.vue';
import Modal from '../components/common/commonModal.vue';

export default {
  components: {
    TodoHeader,
    Modal
  },
  data() {
    return {
      todo: {
        title: '',
        text: '',
        inputDate: '',
        modifyDate: '',
      },
      showModal: false,
      iconType: 'home',
    };
  },
  created() {
    const id = this.$route.params.id;
    const todoItem = JSON.parse(localStorage.getItem(id));
    if (todoItem) {
      this.todo = { ...todoItem };
    }
  },
  methods: {
    updateTodo(event) {
      event.preventDefault();
      
      this.todo.modifyDate = new Date().toLocaleString('ko-KR'); // 수정 날짜 업데이트
      localStorage.setItem(this.$route.params.id, JSON.stringify(this.todo));
      this.showModal = true; // 모달 표시
      setTimeout(() => {
        this.$router.push('/vue-todo/');
      }, 1000); // 모달이 1초간 보이도록 하고, 그 후에 페이지 이동
    },
  }
};
</script>

<style scoped>
form {
  margin: 10px;
  padding: 20px;
  background-color: var(--secondary-color);
  border-radius: 10px;
  box-sizing: border-box;
}
form div{
  display: flex;
  align-content: flex-start;
  list-style:none;
  text-align: left;
}
form div + div{
  margin-top:10px;
}
form label{
  width: 30px;
  margin-right: 10px;
  font-size: 13px;
  line-height: 36px;
}
form input,
form textarea {
  display: block;
  width: 100%;
  padding: 5px;
  font-size: 13px;
  line-height: 26px;
  border: 1px solid #fff;
	outline: none;
  border-radius: 5px;
  box-sizing: border-box;
}
form input:focus,
form textarea:focus{
  border:1px solid var(--primary-color);
}
.addContainer{
  width: 100%;
  height: 35px;
  margin-top:15px;
  padding: 5px;
  font-size: 13px;
  background-color: var(--primary-color);
  border: none;
  border-radius:15px;
  box-sizing: border-box;
  cursor: pointer;
}
.addContainer i{
  color: #fff;
}
</style>
