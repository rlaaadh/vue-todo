<template>
  <div>
    <form action="">
      <div>
        <label for="titleFiled">제목</label>
        <input type="text" v-model="newTodoItem" id="titleFiled" placeholder="제목을 입력해주세요">
      </div>
      <div>
        <label for="textFiled">내용</label>
        <textarea
          name="textFiled"
          id="textFiled"
          cols="30"
          rows="4"
          placeholder="내용을 입력해주세요"
          v-model="newTodoText"
          @keyup.enter.stop="addTodo">
        </textarea>
      </div>
      <button class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus"></i>
      </button>
    </form>

    <Modal v-if="showModal" @close="showModal = false">
      <div slot="header">
        <h3>경고</h3>
      </div>
      <p slot="body">모든 입력창에 내용을 입력해주세요.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/commonModal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      newTodoText: '',
      showModal: false
    };
  },
  methods: {
    addTodo(event){
      event.preventDefault();
      const input = document.querySelector('input');
      const textArea = document.querySelector('textarea');

      if(this.newTodoItem.trim() !== '' && this.newTodoText.trim() !== ''){
        this.$emit('addTodoItem', this.newTodoItem , this.newTodoText) ;
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }

      input.blur();
      textArea.blur();
    },
    clearInput(){
      this.newTodoItem = '';
      this.newTodoText = '';
    }
  },
  components: {
    Modal
  }
}
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
  background-color:  var(--primary-color);
  border: none;
  border-radius:15px;
  box-sizing: border-box;
  cursor: pointer;
}
.addContainer i{
  color: #fff;
}
</style>
