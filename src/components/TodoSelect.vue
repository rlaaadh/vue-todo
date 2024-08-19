<template>
  <div class="selectBox">
    <select @change="selectedValue">
    <option value="latest">최신순</option>
    <option value="oldest">오래된순</option>
    <option value="alphabetical">가나다순</option>
  </select>
  </div>
</template>

<script>
export default {
  methods: {
    selectedValue(event) {
    if (event && event.target) {
        const selectedValue = event.target.value;
        this.$emit('selectedValue', selectedValue);
      } else {
        console.error('Event object or target is undefined.');
      }
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
    padding: 10px 5px;
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
