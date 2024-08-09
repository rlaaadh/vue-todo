<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" ref="inputField">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <div slot="header">
        <h3>경고</h3>
        <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
      </div>
      <p slot="body">입력창에 내용을 입력해주세요.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/commonModal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    };
  },
  methods: {
    addTodo(){
      if(this.newTodoItem.trim() !== ''){
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      }else{
        this.$refs.inputField.blur();
        this.showModal = !this.showModal;
      }
    },
    clearInput(){
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
input:focus {
	outline: none;
}
.inputBox {
  display: flex;
	height: 50px;
  margin: 0 10px;
	line-height: 50px;
	background: white;
	border-radius: 5px;
}
.inputBox input {
  flex: 1;
  padding: 0 1rem;
	border: 1px solid white;
	font-size: 0.9rem;
  border-radius: 5px;
  box-sizing:border-box;
}
.inputBox input:focus{
  border-color: #f74083 transparent #f74083 #f74083;
  border-radius: 5px 0 0 5px;
}
.addContainer {
	float: right;
	background: linear-gradient(to right, #feafcc, #f74083);
	display: block;
	width: 3rem;
	border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
	color: white;
	vertical-align: middle;
}
.closeModalBtn{
  font-size: 20px;
  color: #333;
  width: 15px;
  height: 15px;
  cursor: pointer;
}
</style>
