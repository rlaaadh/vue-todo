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
      this.$emit('value', event.target.value);
    }
  }
}
</script>

<style>
  .selectBox{
    display: flex;
    justify-content: end;
    width: 100px;
    margin: 5px 10px;
    box-sizing: border-box;
  }
  .selectBox select{
    display:block;
    width: 100%;
    height: 100%;
    padding: 5px;
    font-size: 13px;
    line-height: 1;
    color: #222;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
  }
  .selectBox select:focus{
    border-color: #3fc7ff;
  }
</style>
