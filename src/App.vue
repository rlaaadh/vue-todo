<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput @addTodoItem="addOneItem"/>
    <TodoSelect @selectedValue="sortAllItems"/>
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
import TodoSelect from './components/TodoSelect.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoItems: [],
      sortOptions: '',
    }
  },
  methods:{
    addOneItem(todoItem){
      const obj = {
        id: `TODO_${Date.now().toString()}`,
        contents: todoItem,
        completed: false,
        deleted: false
      };
      localStorage.setItem(obj.id, JSON.stringify(obj));
      this.todoItems = [...this.todoItems, obj]; // 배열을 새 배열로 업데이트
    },
    removeOneItem(id){
      // 1) id값으로 item 데이터값을 가져옴.
      let item = JSON.parse(localStorage.getItem(id));

      // 2) 해당 id값이 있는 경우
      if (item) {
        // 2-1) deleted 값을 true로 설정
        item.deleted = true;

        // 2-2) 수정된 아이템 배열을 로컬스토리지에 저장
        localStorage.setItem(id, JSON.stringify(item));

        // 2-3) 상태를 필터링하여 새 배열로 업데이트
        this.todoItems = this.todoItems.filter(i => i.id !== id && !i.deleted);
      }
  },
    toggleOneItem(id){
      let item = JSON.parse(localStorage.getItem(id));

      // 1) 아이템이 존재하면 완료 상태를 토글
      if (item) {
        item.completed = !item.completed;

        // 2) 수정된 아이템을 로컬스토리지에 저장
        localStorage.setItem(id, JSON.stringify(item));

        // 3) 데이터 배열을 업데이트하여 화면에 반영
        this.todoItems = this.todoItems.map(i =>
          i.id === id ? { ...i, completed: item.completed } : i
        );
      }
    },
    clearAllItems(){
    // 1) 모든 로컬 스토리지 항목의 키를 가져오기
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
      // 2) 항목의 데이터를 가져와서 JSON 파싱하기
      let item = JSON.parse(localStorage.getItem(key));
      
      // 3) `deleted` 속성을 "true"로 설정
      item.deleted = true;
      
      // 4) 수정된 데이터를 다시 로컬 스토리지에 저장하기
      localStorage.setItem(key, JSON.stringify(item));

      // 5) 상태를 필터링하여 새 배열로 업데이트
      this.todoItems = [];
    });
    },
    sortAllItems(selectedValue){
      this.sortOptions = selectedValue;
      let sorted = [...this.todoItems];
      
      switch(this.sortOptions){
        case 'latest' : 
          sorted.sort((a, b) => b.id.localeCompare(a.id));
          break;

        case 'oldest' : 
          sorted.sort((a, b) => a.id.localeCompare(b.id));
          break;

        case 'alphabetical' : 
          sorted.sort((a, b) => a.contents.localeCompare(b.contents));
          break;
      }

      this.todoItems = sorted;
    }
  },
  created(){
    if(localStorage.length > 0){
      for(let i=0; i < localStorage.length; i++){
        const key = localStorage.key(i);

        if(key && key !== 'loglevel:webpack-dev-serve'){
          const item = JSON.parse(localStorage.getItem(key));
          if (item && !item.deleted) {
            this.todoItems.push(item);
          }
        }
      }
    }
  },
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoSelect,
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
