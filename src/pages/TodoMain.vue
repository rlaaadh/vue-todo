<template>
  <div class="page main">
    <TodoHeader :iconType=iconType>오늘의 할일을 작성해보세요</TodoHeader>
    <TodoInput @addTodoItem="addOneItem" />
    <section class="today">
      <div class="top">
        <h2 class="title">☁️ 오늘의 계획 ☁️</h2>
        <TodoSelect :selectedValue="incompleteSortOptions" @value="setIncompleteSortOptions" />
      </div>
      <TodoList 
        :propsdata="incompleteItems" 
        @removeItem="removeOneItem"
        @toggleItem="toggleOneItem"
        @editItem="editTodoItem" />
      <div v-if="!incompleteItems.length" class="empty-message">
        오늘의 할 일을 등록해보세요.
      </div>
    </section>
    <section>
      <div class="top">
        <h2 class="title">☁️ 완료한 일 ☁️</h2>
        <TodoSelect :selectedValue="completedSortOptions" @value="setCompletedSortOptions" />
      </div>
      <TodoList 
        :propsdata="completedItems" 
        @removeItem="removeOneItem"
        @toggleItem="toggleOneItem" />
      <div v-if="!completedItems.length" class="empty-message">
        완료한 일을 체크해보세요.
      </div>
    </section>
    <TodoFooter @clickBtn="clearAllItems">모두 지우기</TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../components/layouts/TodoHeader.vue'
import TodoFooter from '../components/layouts/TodoFooter.vue'

import TodoInput from '../components/TodoInput.vue'
import TodoSelect from '../components/TodoSelect.vue'
import TodoList from '../components/TodoList.vue'

export default {
  data() {
    return {
      todoItems: [],
      incompleteSortOptions: 'latest',
      completedSortOptions: 'latest',
      iconType: 'setting'
    };
  },
  computed: {
    incompleteItems() {
      return this.sortItems(this.todoItems.filter(item => !item.completed), this.incompleteSortOptions);
    },
    completedItems() {
      return this.sortItems(this.todoItems.filter(item => item.completed), this.completedSortOptions);
    }
  },
  methods: {
    getCurrentDateTime() {
      const now = new Date();
      return now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    },
    addOneItem(todoTitle, todoText) {
      const obj = {
        id: `TODO_${Date.now().toString()}`,
        title: todoTitle,
        text: todoText,
        inputDate: this.getCurrentDateTime(),
        modifyDate: null,
        completed: false,
        deleted: false
      };
      localStorage.setItem(obj.id, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(id) {
      let item = JSON.parse(localStorage.getItem(id));
      if (item) {
        item.deleted = true;
        localStorage.setItem(id, JSON.stringify(item));
        this.todoItems = this.todoItems.filter(i => i.id !== id && !i.deleted);
      }
    },
    toggleOneItem(id) {
      let item = JSON.parse(localStorage.getItem(id));
      if (item) {
        item.completed = !item.completed;
        localStorage.setItem(id, JSON.stringify(item));
        this.todoItems = this.todoItems.map(i =>
          i.id === id ? { ...i, completed: item.completed } : i
        );
      }
    },
    clearAllItems() {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        const item = JSON.parse(localStorage.getItem(key));
        if (item && typeof item === 'object' && !Array.isArray(item) && item !== null) {
          item.deleted = true;
          localStorage.setItem(key, JSON.stringify(item));
        }
      });
      this.todoItems = [];
      this.showModal = true;
    },
    setIncompleteSortOptions(selectedValue) {
      this.incompleteSortOptions = selectedValue;
      localStorage.setItem('incompleteSortOptions', JSON.stringify(selectedValue));
    },
    setCompletedSortOptions(selectedValue) {
      this.completedSortOptions = selectedValue;
      localStorage.setItem('completedSortOptions', JSON.stringify(selectedValue));
    },
    sortItems(items, sortOption) {
      // 배열의 요소가 객체인지 확인
      if (items.every(item => typeof item !== 'object')) {
        console.warn('All items should be non-null objects');
        return [];
      }
      
      let sorted = [...items];
      switch (sortOption) {
        case 'latest':
          sorted.sort((a, b) => (b.id || '').localeCompare(a.id || ''));
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
    editTodoItem(id) {
      this.$router.push({ name: 'TodoEdit', params: { id } });
    },
  },
  created() {
    const savedIncompleteSortOption = JSON.parse(localStorage.getItem('incompleteSortOptions'));
    const savedCompletedSortOption = JSON.parse(localStorage.getItem('completedSortOptions'));

    if (savedIncompleteSortOption) {
      this.incompleteSortOptions = savedIncompleteSortOption;
    }
    if (savedCompletedSortOption) {
      this.completedSortOptions = savedCompletedSortOption;
    }

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key !== 'loglevel:webpack-dev-serve') {
          const item = JSON.parse(localStorage.getItem(key));
          if (item && !item.deleted) {
            this.todoItems.push(item);
          }
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoSelect,
    TodoList,
  }
}
</script>

<style scope>
  .page.main{
    padding-bottom: 50px;
  }
</style>
