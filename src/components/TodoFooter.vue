<template>
  <div class="clearAllContainer shadow">
    <span class="clearAllBtn" @click="clearTodo()">모두 지우기</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo(){
      this.$emit('clearAll')
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
	height: 30px;
	margin: 10px;
  font-size: 14px;
	line-height: 30px;
  font-weight: 700;
	background-color: white;
	border-radius: 5px;
  box-sizing: border-box;
}
.clearAllContainer:hover{
  background-color: #fbe5e5;
}
.clearAllBtn {
	display: block;
  font-size: 13px;
  color: white;
	background-color: rgb(157, 157, 157);
  border-radius: 5px;
  cursor: pointer;
}
</style>
