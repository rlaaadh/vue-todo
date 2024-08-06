<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow" v-on:click="toggleComplete(todoItem, index)">
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>
        <span class="text" v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
        </li>
      </ul>
    </div>
  </template>

<script>
  export default{
    props: ['propsdata'],
    methods: {
      removeTodo : function(todoItem, index){
        this.$emit('removeItem', todoItem, index);
      },
      toggleComplete: function(todoItem, index){
        this.$emit('toggleItem', todoItem, index);
      }
    }
  }
</script>

<style scoped>
ul {
	list-style-type: none;
	padding: 0;
	margin: 0 10px;
	text-align: left;
}
li {
  position: relative;
	display: flex;
  align-content: center;
	min-height: 50px;
	line-height: 30px;
	margin: 0.5rem 0;
	padding: 10px 0.9rem;
	background: white;
	border-radius: 5px;
  box-sizing: border-box;
}
li:hover{
  background-color: #fbe5e5;
  cursor: pointer;
}
li:has(.checkBtnCompleted):hover{
  background-color: white;
}
.checkBtn {
  margin-right: 10px;
  line-height: 45px;
  color: inherit;
  color: rgb(249, 51, 133);
}
.checkBtnCompleted {
	color: #b3adad;
}
.checkBtnCompleted:hover{
  background-color:transparent;
}
.text{
  position: relative;
  z-index: 2;
  flex: 1;
  padding-top: 8px;
  color: #333;
  font-weight: 700;
  box-sizing: border-box;
}
.textCompleted {
	color: #7b7b7b;
  font-weight: 400;
	text-decoration: line-through;
}
.removeBtn {
  position: relative;
  z-index: 2;
  display: block;
  width: 14px;
  height: 30px;
  margin: 10px 0 0 10px;
	color: #9b9b9b;
  cursor: pointer;
}
</style>
