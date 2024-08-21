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
	margin: 10px;
}
.clearAllBtn {
	display: block;
  font-size: 13px;
	line-height: 35px;
  color: white;
  font-weight: 700;
	background-color: rgb(79 79 79);
  border-radius: 15px;
  cursor: pointer;
}
</style>
