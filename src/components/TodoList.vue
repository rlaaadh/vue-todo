<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="todoItem in propsdata" :key="todoItem.id" class="shadow" :class="{completed: todoItem.completed}" @click="toggleComplete(todoItem.id)">
        <div class="contents">
          <i class="fas fa-check checkBtn"></i>
          <span class="text">{{ todoItem.contents }}</span>
          <span class="removeBtn" @click="removeTodo(todoItem.id, $event)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </div>
        <div class="desc">
          <span class="input-date">등록일시 : {{ todoItem.inputDate}}</span>
          <!-- <span class="modify-date">수정일시 : {{ todoItem.modifyDate }}</span> -->
        </div>
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
	min-height: 50px;
	line-height: 30px;
	margin: 0.5rem 0;
	padding: 10px 0.9rem;
	background: white;
	border-radius: 5px;
  box-sizing: border-box;
}
li .contents{
  display: flex;
  align-content: center;
}
li:hover{
  background-color: #fbe5e5;
  cursor: pointer;
}
.checkBtn {
  margin-right: 10px;
  line-height: 35px;
  color: inherit;
  color: rgb(249, 51, 133);
}
.text{
  position: relative;
  z-index: 2;
  flex: 1;
  padding-top: 3px;
  color: #333;
  font-weight: 700;
  box-sizing: border-box;
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
.desc{
  font-size: 12px;
  line-height: 1.2;
  color: #666;
}
.desc > span + span{
  margin-left: 10px;
}

/* completed */
.completed,
.completed:hover{
  background-color: #e0e0e0;
}
.completed .checkBtn {
	color: #b3adad;
}
.completed .checkBtn:hover{
  background-color:transparent;
}
.completed .text {
	color: #7b7b7b;
  font-weight: 400;
	text-decoration: line-through;
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
