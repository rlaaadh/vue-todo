<template>
  <div class="clearAllContainer shadow">
    <span class="clearAllBtn" v-on:click="clearTodo">모두 지우기</span>
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
	width: 8.5rem;
	height: 40px;
	margin: 30px auto;
  font-size: 14px;
	line-height: 40px;
  font-weight: 700;
	background-color: white;
	border-radius: 5px;
}
.clearAllContainer:hover{
  background-color: #fbe5e5;
}
.clearAllBtn {
	display: block;
	color: rgb(249, 51, 133);
  cursor: pointer;
}
</style>
