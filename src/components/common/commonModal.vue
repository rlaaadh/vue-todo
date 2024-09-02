<template>
  <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">header</slot>
                <i class="modal-close fas fa-times" @click="$emit('close')"></i>
              </div>
              <div class="modal-body">
                <slot name="body">body</slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {

}
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
  .modal-header {
    display: flex;
  }
  .modal-header > div{
    flex: 1;
  }
  .modal-header h3 {
    line-height: 20px;
    margin-top: 0;
    padding-top: 3px;
    color:  var(--primary-color);
  }
  .modal-body p{
    margin: 0 0 10px 0;
  }
  .modal-default-button {
    width: 100px;
    margin-bottom: 10px;
    padding: 10px 15px;
    border-radius: 5px;
    background: #e6e6e6;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
  }
  .modal-close{
  font-size: 20px;
  color: #333;
  width: 15px;
  height: 15px;
  cursor: pointer;
}
  .modal-default-button:hover{
    background: #fbe5e5;
  }
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
