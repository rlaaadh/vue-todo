<template>
  <div class="selectBox">
    <select :value="selectedValue" @change="emitSelectedValue">
      <option value="latest">최신순</option>
      <option value="oldest">오래된순</option>
      <option value="alphabetical">가나다순</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['selectedValue'],
  methods: {
    emitSelectedValue(event) {
      this.$emit('selectedValue', event.target.value);
    }
  }
}
</script>

<style>
  .selectBox{
    display: flex;
    justify-content: end;
    margin: 10px;
  }
  .selectBox select{
    width: 100px;
    padding: 5px;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .selectBox select:focus,
  .selectBox select::selection{
    border-color: #f74083;
    outline: none;
  }
</style>
