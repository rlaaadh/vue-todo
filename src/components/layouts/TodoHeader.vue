<template>
  <div class="header">
    <h1>
      <slot/>
    </h1>
    <span v-if="iconType === 'setting'" class="icon setting" @click.stop="pageTo('TodoSetting')">
      <i class="fa-solid fa-gear"></i>
    </span>
    <span v-if="iconType === 'home'" class="icon home" @click.stop="pageTo('TodoMain')">
      <i class="fa-solid fa-house"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    iconType: {
      type: String,
      required: true
    }
  },
  methods: {
    pageTo(page) {
      this.$router.push({ name: page });
    }
  }
}
</script>

<style scoped>
  .header{
    position: fixed;
    z-index: 999;
    width: 100%;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    background-color :#fff;
    border-bottom: 1px solid #dfdfdf;
  }
  h1{
    flex: 1;
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
    color:#434448;
    text-align: left;
    padding: 0 20px;
  }
  .icon{
    cursor: pointer;
  }
  .icon > *{
    color: #a8a8a8;
    margin-right: 20px;
  }
</style>
