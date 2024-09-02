<template>
  <div id="app">
    <router-view></router-view>
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="header">
        <h3>알림</h3>
      </div>
      <p slot="body">모든 기록이 초기화 되었습니다.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './components/common/commonModal.vue'

export default {
  data() {
    return {
      showModal: false
    };
  },
  components: {
    Modal
  }
}
</script>

<style>
:root {
  --primary-color: #3fc7ff;
  --secondary-color: #daf6f995;
  
  --font-family : "Nanum Gothic";
}
html {
  margin: 0;
}
body {
  font-family: var(--font-family);
  text-align: center;
  margin: 0;
  overflow-x: hidden;
}
.page{
  padding-top: 65px;
}
section {
  margin: 10px;
  padding: 10px;
  background-color: #eaeaea;
  border-radius: 10px;
  box-sizing: border-box;
}
section.today {
  background-color: var(--secondary-color);
}
section .top {
  display: flex;
}
.title {
  flex: 1;
  font-size: 15px;
  line-height: 1.2;
  text-align: left;
  margin: 10px 0;
}
.text {
  font-size: 13px;
  line-height: 1.2;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
.empty-message {
  margin: 30px 0;
  font-size: 13px;
}
</style>
