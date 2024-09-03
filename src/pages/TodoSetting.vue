<template>
  <div class="page setting">
    <TodoHeader :iconType="iconType">설정</TodoHeader>
    <dl>
      <dt>테마</dt>
      <dd>
        <ul class="setting-list">
          <li class="setting-item">
            <button type="button" class="skyblue" @click="selectTheme('skyblue')">Skyblue</button>
          </li>
          <li class="setting-item">
            <button type="button" class="pink" @click="selectTheme('pink')">Pink</button>
          </li>
          <li class="setting-item">
            <button type="button" class="yellow" @click="selectTheme('yellow')">Yellow</button>
          </li>
          <li class="setting-item">
            <button type="button" class="mint" @click="selectTheme('mint')">Mint</button>
          </li>
        </ul>
      </dd>
    </dl>
    <dl>
      <dt>폰트</dt>
      <dd>
        <ul class="setting-list type-font">
          <li class="setting-item">
            <button type="button" @click="selectFont('NanumGothic')">Nanum Gothic</button>
          </li>
          <li class="setting-item">
            <button type="button" @click="selectFont('NotoSansKR')">Noto Sans KR</button>
          </li>
        </ul>
      </dd>
    </dl>

    <!-- 모달 컴포넌트 -->
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="header">
        <h3>알림</h3>
      </div>
      <div slot="body">
        <p>수정이 완료되었습니다.</p>
      </div>
    </Modal>
    
    <TodoFooter @clickBtn="handlerFooter">저장하기</TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../components/layouts/TodoHeader.vue';
import TodoFooter from '@/components/layouts/TodoFooter.vue';
import Modal from '../components/common/commonModal.vue';

export default {
  components: {
    TodoHeader,
    TodoFooter,
    Modal,
  },
  data() {
    return {
      iconType: 'home',
      showModal: false,
      selectedTheme: null,
      selectedFont: null,
    }
  },
  methods: {
    selectTheme(theme) {
      this.selectedTheme = theme;
    },

    selectFont(font) {
      this.selectedFont = font;
    },

    applySettings() {
      if (this.selectedTheme) {
        const colorMap = {
          skyblue: ['#3fc7ff', '#daf6f995'],
          pink: ['#ffa5a5', '#faeded'],
          yellow: ['#f6d157', '#fcf9de'],
          mint: ['#a3e1ce', '#e5fbf5']
        };

        const [primaryColor, secondaryColor] = colorMap[this.selectedTheme];

        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
      }

      if (this.selectedFont) {
        const fonts = {
          NanumGothic: "Nanum Gothic",
          NotoSansKR: "Noto Sans KR",
        };
        const fontFamily = fonts[this.selectedFont];
        document.documentElement.style.setProperty('--font-family', fontFamily);
      }
    },

    handlerFooter() {
      this.applySettings(); // 저장하기 버튼 클릭 시 스타일 적용

      localStorage.setItem('theme', JSON.stringify(this.selectedTheme));
      localStorage.setItem('fontFamily', JSON.stringify(this.selectedFont));

      this.showModal = true; // 모달 표시
      setTimeout(() => {
        this.$router.push('/vue-todo/');
      }, 1000); // 모달이 1초간 보이도록 하고, 그 후에 페이지 이동
    }
  },
  created() {
    const savedTheme = localStorage.getItem('theme');
    const savedFont = localStorage.getItem('fontFamily');

    // savedTheme가 null이 아닌 경우에만 JSON.parse를 사용
    this.selectedTheme = savedTheme ? JSON.parse(savedTheme) : null;
    this.selectedFont = savedFont ? JSON.parse(savedFont) : null;

    // 페이지 로드 시 저장된 설정을 즉시 적용
    this.applySettings();
  }
}
</script>

<style scoped>
  dl {
    padding: 0 20px 10px;
  }
  dt {
    width: 50px;
    font-size: 0.8rem;
    line-height: 2rem;
    font-weight: 700;
    text-align: left;
  }
  dd {
    margin: 0;
  }
  .setting-list {
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .setting-item {
    position: relative;
    width: 52px;
    height: 52px;
    border-radius: 10px;
  }
  .type-font .setting-item {
    width: 130px;
  }
  .setting-item:hover {
    box-shadow: 0 0 1.38889vw rgba(0,0,0,.15);
  }
  button {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 12px;
    color: #222;
    text-align: center;
    background: #f5f5f5;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .skyblue {
    background-color: #3fc7ff;
  }
  .pink {
    background-color: #ffa5a5;
  }
  .yellow {
    background-color: #f6d157;
  }
  .mint {
    background-color: #a3e1ce;
  }
</style>
