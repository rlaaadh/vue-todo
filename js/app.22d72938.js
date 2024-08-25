(function(){"use strict";var t={5744:function(t,e,o){var s=o(2856),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view"),t.showModal?e("Modal",{on:{close:function(e){t.showModal=!1}}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("알림")])]),e("p",{attrs:{slot:"body"},slot:"body"},[t._v("모든 기록이 초기화 되었습니다.")])]):t._e()],1)},l=[],i=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v("header")]})),e("i",{staticClass:"modal-close fas fa-times",on:{click:function(e){return t.$emit("close")}}})],2),e("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v("body")]}))],2)])])])])},n=[],r={},d=r,c=o(1656),u=(0,c.A)(d,i,n,!1,null,null,null),m=u.exports,p={data(){return{showModal:!1}},components:{Modal:m}},v=p,h=(0,c.A)(v,a,l,!1,null,null,null),f=h.exports,g=o(1594),I=function(){var t=this,e=t._self._c;return e("div",[e("TodoHeader",[t._v("오늘의 할일을 작성해보세요")]),e("TodoInput",{on:{addTodoItem:t.addOneItem}}),e("section",{staticClass:"today"},[e("div",{staticClass:"top"},[e("h2",{staticClass:"title"},[t._v("☁️ 오늘의 계획 ☁️")]),e("TodoSelect",{attrs:{selectedValue:t.incompleteSortOptions},on:{value:t.setIncompleteSortOptions}})],1),e("TodoList",{attrs:{propsdata:t.incompleteItems},on:{removeItem:t.removeOneItem,toggleItem:t.toggleOneItem,editItem:t.editTodoItem}}),t.incompleteItems.length?t._e():e("div",{staticClass:"empty-message"},[t._v(" 오늘의 할 일을 등록해보세요. ")])],1),e("section",[e("div",{staticClass:"top"},[e("h2",{staticClass:"title"},[t._v("☁️ 완료한 일 ☁️")]),e("TodoSelect",{attrs:{selectedValue:t.completedSortOptions},on:{value:t.setCompletedSortOptions}})],1),e("TodoList",{attrs:{propsdata:t.completedItems},on:{removeItem:t.removeOneItem,toggleItem:t.toggleOneItem}}),t.completedItems.length?t._e():e("div",{staticClass:"empty-message"},[t._v(" 완료한 일을 체크해보세요. ")])],1),e("TodoFooter",{on:{clearAll:t.clearAllItems}})],1)},_=[],y=(o(4114),function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._t("default"),t._v("📝 ")],2)])}),T=[],S={},O=(0,c.A)(S,y,T,!1,null,"048cad3d",null),w=O.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("form",{attrs:{action:""}},[e("div",[e("label",{attrs:{for:"titleFiled"}},[t._v("제목")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text",id:"titleFiled",placeholder:"제목을 입력해주세요"},domProps:{value:t.newTodoItem},on:{input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}})]),e("div",[e("label",{attrs:{for:"textFiled"}},[t._v("내용")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newTodoText,expression:"newTodoText"}],attrs:{name:"textFiled",id:"textFiled",cols:"30",rows:"4",placeholder:"내용을 입력해주세요"},domProps:{value:t.newTodoText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.stopPropagation(),t.addTodo.apply(null,arguments))},input:function(e){e.target.composing||(t.newTodoText=e.target.value)}}})]),e("button",{staticClass:"addContainer",on:{click:t.addTodo}},[e("i",{staticClass:"fa-solid fa-plus"})])]),t.showModal?e("Modal",{on:{close:function(e){t.showModal=!1}}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("경고")])]),e("p",{attrs:{slot:"body"},slot:"body"},[t._v("모든 입력창에 내용을 입력해주세요.")])]):t._e()],1)},x=[],b={data(){return{newTodoItem:"",newTodoText:"",showModal:!1}},methods:{addTodo(t){if(t.preventDefault(),""!==this.newTodoItem.trim()&&""!==this.newTodoText.trim())this.$emit("addTodoItem",this.newTodoItem,this.newTodoText),this.clearInput();else{const t=document.querySelector("input"),e=document.querySelector("textarea");t.blur(),e.blur(),this.showModal=!this.showModal}},clearInput(){this.newTodoItem="",this.newTodoText=""}},components:{Modal:m}},k=b,A=(0,c.A)(k,C,x,!1,null,"9d2d6b82",null),M=A.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"selectBox"},[e("select",{domProps:{value:t.selectedValue},on:{change:t.emitSelectedValue}},[e("option",{attrs:{value:"latest"}},[t._v("최신순")]),e("option",{attrs:{value:"oldest"}},[t._v("오래된순")]),e("option",{attrs:{value:"alphabetical"}},[t._v("가나다순")])])])},D=[],$={props:["selectedValue"],methods:{emitSelectedValue(t){this.$emit("value",t.target.value)}}},J=$,F=(0,c.A)(J,N,D,!1,null,null,null),P=F.exports,j=function(){var t=this,e=t._self._c;return e("div",[e("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.propsdata,(function(o){return e("li",{key:o.id,staticClass:"shadow",class:{completed:o.completed},on:{click:function(e){return t.toggleComplete(o.id)}}},[e("div",{staticClass:"contents"},[e("i",{staticClass:"fas fa-check checkBtn"}),e("div",{staticClass:"contents-text"},[e("div",{staticClass:"title"},[t._v(t._s(o.title))]),e("div",{staticClass:"text"},[t._v(t._s(o.text))])]),e("span",{staticClass:"modifyBtn",on:{click:function(e){return e.stopPropagation(),t.editTodo(o.id)}}},[e("i",{staticClass:"fas fa-pencil-alt"})]),e("span",{staticClass:"removeBtn",on:{click:function(e){return e.stopPropagation(),t.removeItem(o.id)}}},[e("i",{staticClass:"fas fa-trash-alt"})])]),e("div",{staticClass:"desc"},[e("div",{staticClass:"input-date"},[t._v("등록일시 : "+t._s(o.inputDate))]),o.modifyDate?e("div",{staticClass:"modify-date"},[t._v("수정일시 : "+t._s(o.modifyDate))]):t._e()])])})),0)],1)},E=[],V={props:{propsdata:Array},methods:{toggleComplete(t){this.$emit("toggleItem",t)},removeItem(t){this.$emit("removeItem",t)},editTodo(t){this.$emit("editItem",t)}}},B=V,L=(0,c.A)(B,j,E,!1,null,"d62f7c32",null),H=L.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"clearAllContainer shadow"},[e("span",{staticClass:"clearAllBtn",on:{click:function(e){return t.clearTodo()}}},[t._v("모두 지우기")])])},K=[],R={methods:{clearTodo(){this.$emit("clearAll")}}},z=R,G=(0,c.A)(z,q,K,!1,null,"09648765",null),Q=G.exports,U={data(){return{todoItems:[],incompleteSortOptions:"latest",completedSortOptions:"latest"}},computed:{incompleteItems(){return this.sortItems(this.todoItems.filter((t=>!t.completed)),this.incompleteSortOptions)},completedItems(){return this.sortItems(this.todoItems.filter((t=>t.completed)),this.completedSortOptions)}},methods:{getCurrentDateTime(){const t=new Date;return t.toLocaleString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})},addOneItem(t,e){const o={id:`TODO_${Date.now().toString()}`,title:t,text:e,inputDate:this.getCurrentDateTime(),modifyDate:null,completed:!1,deleted:!1};localStorage.setItem(o.id,JSON.stringify(o)),this.todoItems.push(o)},removeOneItem(t){let e=JSON.parse(localStorage.getItem(t));e&&(e.deleted=!0,localStorage.setItem(t,JSON.stringify(e)),this.todoItems=this.todoItems.filter((e=>e.id!==t&&!e.deleted)))},toggleOneItem(t){let e=JSON.parse(localStorage.getItem(t));e&&(e.completed=!e.completed,localStorage.setItem(t,JSON.stringify(e)),this.todoItems=this.todoItems.map((o=>o.id===t?{...o,completed:e.completed}:o)))},clearAllItems(){const t=Object.keys(localStorage);t.forEach((t=>{let e=JSON.parse(localStorage.getItem(t));e&&(e.deleted=!0,localStorage.setItem(t,JSON.stringify(e)))})),this.todoItems=[],this.showModal=!0},setIncompleteSortOptions(t){this.incompleteSortOptions=t,localStorage.setItem("incompleteSortOptions",JSON.stringify(t))},setCompletedSortOptions(t){this.completedSortOptions=t,localStorage.setItem("completedSortOptions",JSON.stringify(t))},sortItems(t,e){let o=[...t];switch(e){case"latest":o.sort(((t,e)=>(e.id||"").localeCompare(t.id||"")));break;case"oldest":o.sort(((t,e)=>(t.id||"").localeCompare(e.id||"")));break;case"alphabetical":o.sort(((t,e)=>(t.title||"").localeCompare(e.title||"")));break}return o},editTodoItem(t){this.$router.push({name:"TodoEdit",params:{id:t}})}},created(){const t=JSON.parse(localStorage.getItem("incompleteSortOptions")),e=JSON.parse(localStorage.getItem("completedSortOptions"));if(t&&(this.incompleteSortOptions=t),e&&(this.completedSortOptions=e),localStorage.length>0)for(let o=0;o<localStorage.length;o++){const t=localStorage.key(o);if(t&&"loglevel:webpack-dev-serve"!==t){const e=JSON.parse(localStorage.getItem(t));e&&!e.deleted&&this.todoItems.push(e)}}},components:{TodoHeader:w,TodoInput:M,TodoSelect:P,TodoList:H,TodoFooter:Q}},W=U,X=(0,c.A)(W,I,_,!1,null,"781a3f2a",null),Y=X.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"todo-edit"},[e("TodoHeader",[t._v("수정 페이지")]),e("form",{attrs:{action:""}},[e("div",[e("label",{attrs:{for:"titleFiled"}},[t._v("제목")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],attrs:{type:"text",id:"titleFiled",placeholder:"제목을 입력해주세요"},domProps:{value:t.todo.title},on:{input:function(e){e.target.composing||t.$set(t.todo,"title",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"textFiled"}},[t._v("내용")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todo.text,expression:"todo.text"}],attrs:{name:"textFiled",id:"textFiled",cols:"30",rows:"4",placeholder:"내용을 입력해주세요"},domProps:{value:t.todo.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.stopPropagation(),t.addTodo.apply(null,arguments))},input:function(e){e.target.composing||t.$set(t.todo,"text",e.target.value)}}})]),e("button",{staticClass:"addContainer",on:{click:t.updateTodo}},[e("i",{staticClass:"fa-solid fa-check"})])]),t.showModal?e("Modal",{on:{close:function(e){t.showModal=!1}}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("h3",[t._v("알림")])]),e("div",{attrs:{slot:"body"},slot:"body"},[e("p",[t._v("수정이 완료되었습니다.")])])]):t._e()],1)},tt=[],et={components:{TodoHeader:w,Modal:m},data(){return{todo:{title:"",text:"",inputDate:"",modifyDate:""},showModal:!1}},created(){const t=this.$route.params.id,e=JSON.parse(localStorage.getItem(t));e&&(this.todo={...e})},methods:{updateTodo(t){t.preventDefault(),this.todo.modifyDate=(new Date).toLocaleString("ko-KR"),localStorage.setItem(this.$route.params.id,JSON.stringify(this.todo)),this.showModal=!0,setTimeout((()=>{this.$router.push("/")}),1e3)}}},ot=et,st=(0,c.A)(ot,Z,tt,!1,null,"b5ee2ede",null),at=st.exports;s.Ay.use(g.Ay);var lt=new g.Ay({mode:"history",routes:[{path:"/",name:"TodoMain",component:Y},{path:"/edit/:id",name:"TodoEdit",component:at,props:!0}]});s.Ay.config.productionTip=!1,new s.Ay({router:lt,render:t=>t(f)}).$mount("#app")}},e={};function o(s){var a=e[s];if(void 0!==a)return a.exports;var l=e[s]={exports:{}};return t[s].call(l.exports,l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(e,s,a,l){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],a=t[c][1],l=t[c][2];for(var n=!0,r=0;r<s.length;r++)(!1&l||i>=l)&&Object.keys(o.O).every((function(t){return o.O[t](s[r])}))?s.splice(r--,1):(n=!1,l<i&&(i=l));if(n){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[s,a,l]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,l,i=s[0],n=s[1],r=s[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(r)var c=r(o)}for(e&&e(s);d<i.length;d++)l=i[d],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(c)},s=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(5744)}));s=o.O(s)})();
//# sourceMappingURL=app.22d72938.js.map