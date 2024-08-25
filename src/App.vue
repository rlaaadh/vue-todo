<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput @addTodoItem="addOneItem"/>
    <section class="today">
      <div class="top">
        <h2 class="title">☁️ 오늘의 계획 ☁️</h2>
        <TodoSelect :selectedValue="incompleteSortOptions" @value="setIncompleteSortOptions"/>
      </div>
      <TodoList 
      :propsdata="incompleteItems" 
      @removeItem="removeOneItem"
      @toggleItem="toggleOneItem"/>
      <!--  할 일이 없는 경우 -->
      <div v-if="!incompleteItems.length" class="empty-message">
        오늘의 할 일을 등록해보세요.
      </div>
    </section>

    <section>
      <div class="top">
        <h2 class="title">☁️ 완료한 일 ☁️</h2>
        <TodoSelect :selectedValue="completedSortOptions" @value="setCompletedSortOptions"/>
      </div>
      <TodoList 
      :propsdata="completedItems" 
      @removeItem="removeOneItem"
      @toggleItem="toggleOneItem"/>
      <!-- 조건부 렌더링으로 완료된 일이 없는 경우 문구 표시 -->
      <div v-if="!completedItems.length" class="empty-message">
        완료한 일을 체크해보세요.
      </div>
    </section>

    <TodoFooter
      @clearAll="clearAllItems"/>

      <Modal v-if="showModal" @close="showModal = false">
        <div slot="header">
          <h3>알림</h3>
        </div>
        <p slot="body">모든 기록이 초기화 되었습니다.</p>
      </Modal>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoSelect from './components/TodoSelect.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import Modal from './components/common/commonModal.vue'

export default {
  data(){
    return{
      todoItems: [],
      incompleteSortOptions: 'latest', // 기본값 설정
      completedSortOptions: 'latest', // 기본값 설정
      showModal: false
    }
  },
  computed: {
    incompleteItems() {
      return this.sortItems(this.todoItems.filter(item => !item.completed), this.incompleteSortOptions);
    },
    completedItems() {
      return this.sortItems(this.todoItems.filter(item => item.completed), this.completedSortOptions);
    }
  },
  methods:{
    getCurrentDateTime() {
      const now = new Date();
      return now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // 24시간 형식
      });
    },
    addOneItem(todoTitle, todoText){
      const obj = {
        id: `TODO_${Date.now().toString()}`,
        title: todoTitle,
        text: todoText,
        inputDate: this.getCurrentDateTime(),
        // modifyDate: '수정날짜',
        completed: false,
        deleted: false
      };
      localStorage.setItem(obj.id, JSON.stringify(obj));
      this.todoItems.push(obj); // 배열을 새 배열로 업데이트
      
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

      // 6) 알림 모달창 출력
      this.showModal = true;
    });
    },
    setIncompleteSortOptions(selectedValue) {
      this.incompleteSortOptions = selectedValue;
      localStorage.setItem('incompleteSortOptions', JSON.stringify(selectedValue));
    },
    setCompletedSortOptions(selectedValue) {
      this.completedSortOptions = selectedValue;
      localStorage.setItem('completedSortOptions', selectedValue);
      localStorage.setItem('completedSortOptions', JSON.stringify(selectedValue));
    },
    sortItems(items, sortOption) {
    let sorted = [...items];
    switch(sortOption) {
      case 'latest':
        sorted.sort((a, b) => (a.id || '').localeCompare(b.id || ''));
        break;
      case 'oldest':
        sorted.sort((a, b) => (a.id || '').localeCompare(b.id || ''));
        break;
      case 'alphabetical':
        sorted.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        break;
    }
    return sorted;
  },

  },
  created(){
    // 로컬스토리지에서 정렬 옵션 값을 가져옴
    const savedIncompleteSortOption = JSON.parse(localStorage.getItem('incompleteSortOptions'));
    const savedCompletedSortOption = JSON.parse(localStorage.getItem('completedSortOptions'));

    if (savedIncompleteSortOption) {
      this.incompleteSortOptions = savedIncompleteSortOption;
    }
    if (savedCompletedSortOption) {
      this.completedSortOptions = savedCompletedSortOption;
    }

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
    Modal,
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
    margin: 0;
    overflow-x: hidden;
  }
  section{
    margin: 10px;
    padding:10px;
    background-color:#eaeaea;
    border-radius: 10px;
    box-sizing: border-box;
  }
  section.today{
    background-color:#daf6f995;
  }
  section .top{
    display:flex;
  }
  .title{
    flex:1;
    font-size: 15px;
    line-height: 1.2;
    text-align: left;
    margin: 10px 0;
  }
  .text{
    font-size: 13px;
    line-height: 1.2;
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
  .empty-message{
    margin:30px 0;
    font-size: 13px;
  }
</style>
