<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="todoItem in propsdata" :key="todoItem.id" class="shadow" :class="{completed: todoItem.completed}" @click="toggleComplete(todoItem.id)">
        <div class="contents">
          <i class="fas fa-check checkBtn"></i>
          <div class="contents-text">
            <div class="title">{{ todoItem.title }}</div>
            <div class="text">{{ todoItem.text }}</div>
          </div>
          <span class="modifyBtn" @click.stop="editTodo(todoItem.id)">
            <i class="fas fa-pencil-alt"></i>
          </span>
          <span class="removeBtn" @click.stop="removeItem(todoItem.id)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </div>
        <div class="desc">
          <div class="input-date">등록일시 : {{ todoItem.inputDate }}</div>
          <div v-if="todoItem.modifyDate" class="modify-date">수정일시 : {{ todoItem.modifyDate }}</div>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    propsdata: Array
  },
  methods: {
    toggleComplete(id) {
      this.$emit('toggleItem', id);
    },
    removeItem(id) {
      this.$emit('removeItem', id);
    },
    editTodo(id) {
      this.$emit('editItem', id);
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
  min-height: 50px;
  line-height: 30px;
  margin: 0.5rem 0;
  padding: 10px 0.9rem;
  background: white;
  border-radius: 5px;
  box-sizing: border-box;
}
li:before{
  content:'';
  position:absolute;
  top:0;
  left: 0;
  bottom:0;
  width: 6px;
  background-color: var(--primary-color);
  border-radius: 5px 0 0 5px;
  z-index: 1;
}
li .contents {
  display: flex;
  align-content: center;
}
li:hover {
  background-color: #f2fdff;
  cursor: pointer;
}
.checkBtn {
  margin: 3px 10px 0 0;
  color: inherit;
  color: var(--primary-color);
}
.contents-text {
  flex: 1;
}
.title {
  position: relative;
  z-index: 2;
  margin: 0;
  padding-top: 3px;
  color: #333;
  font-weight: 700;
  box-sizing: border-box;
}
.text {
  margin-top: 5px;
}
.modifyBtn {
  position: relative;
  color: #9b9b9b;
  z-index: 2;
}
.removeBtn {
  position: relative;
  z-index: 2;
  display: block;
  width: 14px;
  margin-left: 10px;
  color: #9b9b9b;
  cursor: pointer;
}
.desc {
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.2;
  color: #666;
}
.desc .modify-date {
  margin-top: 5px;
}

/* completed */
.completed,
.completed:hover {
  background-color: #cecece;
}
.completed .checkBtn {
  color: #b3adad;
}
.completed .checkBtn:hover {
  background-color: transparent;
}
.completed .title,
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
.list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>

