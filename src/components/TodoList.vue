<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="todoItem in propsdata" v-bind:key="todoItem.id" class="shadow" v-on:click="toggleComplete(todoItem.id)">
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>
        <span class="text" v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.contents }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem.id, $event)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo(id, event){
      event.stopPropagation(); // 이벤트 전파 방지
      this.$emit('removeItem', id);
    },
    toggleComplete(id){
      this.$emit('toggleItem', id);
    },
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

/* transition */
.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
</style>
