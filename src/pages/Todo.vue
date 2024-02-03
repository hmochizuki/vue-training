<script setup lang="ts">
import { ref } from "vue"

const todoList = ref<{title: string, completed: boolean}[]>([])
const input = ref("")
const createTodo = () => {
  todoList.value = [...todoList.value, {title: input.value, completed: false}]
}
const removeTodo = (index: number) => () => {
  todoList.value = todoList.value.filter((_, i) => i !== index)
}

</script>

<template>
  <div class="root">
    <div class="add-todo">
      <input v-model="input" />
      <button @click="createTodo">追加する</button>
  </div>
  <div v-if="todoList.length === 0">
    TODOリストの要素がありません。<br/>
    TODOを追加してください。
  </div>
  <ol v-else class="todo-lists">
    <li v-for="(todo, i) in todoList">
      {{ console.log(todoList) }}
      <span>{{ todo.title }}</span>
      <button @click="removeTodo(i)">削除</button>
    </li>
  </ol>
</div>
</template>

<style scoped>
.root {
  margin: auto;
  text-align: center;
}
.add-todo {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.todo-lists {
  display: flex;
  gap: 4px;
}

</style>
