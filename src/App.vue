<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput @addTodoItem="addOneItem"/>
    <TodoList 
    :propsdata="todoItems" 
    @removeItem="removeOneItem"
    @toggleItem="toggleOneItem"/>
    <TodoFooter
    @clearAll="clearAllItems"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoItems: [],
    }
  },
  methods:{
    addOneItem(todoItem){
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index){
      // completed 속성에 true라면 false로, false라면 true로 변환
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created(){
    if(localStorage.length > 0){
      for(let i=0; i < localStorage.length; i++){
        if(localStorage.key(i) != 'loglevel:webpack-dev-serve'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
}
</script>

<style>
  html{
    margin: 0;
  }
  body{
    font-family: "Nanum Gothic", sans-serif;
    text-align: center;
    background-color:#f6f6f6;
    margin: 0;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
