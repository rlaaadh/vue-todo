<template>
  <div class="clearAllContainer shadow">
    <span class="clearAllBtn" @click="clickButton()">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    clickButton(){
      this.$emit('clickBtn')
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
	padding: 10px;
  background-color: #fff;
  box-sizing: border-box
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
