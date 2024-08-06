<template>
  <div class="clearAllContainer shadow">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo : function(){
      this.$emit('clearAll')
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
	width: 8.5rem;
	height: 50px;
	margin: 30px auto 0;
	line-height: 50px;
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
