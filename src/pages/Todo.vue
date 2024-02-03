<script setup lang="ts">
import { ref } from "vue"
import Button from "../components/atoms/Button.vue"
import TextField from "../components/atoms/TextField.vue"

const todoList = ref<{title: string, completed: boolean}[]>([])
const input = ref("")
const createTodo = () => {
  todoList.value = [...todoList.value, {title: input.value, completed: false}]
  input.value = ""
}
const removeTodo = (index: number) => {
  todoList.value = todoList.value.filter((_, i) => i !== index)
}
</script>

<template>
  <div class="root">
    <h1>TODO リスト管理</h1>
    <v-form id="" @submit.prevent="createTodo">
      <div class="add-todo">
        <TextField v-model="input" label="TODOタスクを入力" />
        <Button type="submit" label="追加する"></Button>
      </div>
    </v-form>
    <div class="todo-list-container">
      <div v-if="todoList.length === 0">
        TODOリストの要素がありません。<br/>
        TODOを追加してください。
      </div>
      <ul v-else>
        <li v-for="(todo, i) in todoList">
          <span>{{ todo.title }}</span>
          <Button class="remove-button" label="削除" @click.prevent="removeTodo(i)"></button>
        </li>
      </ul>
    </div>
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
  align-items: center;
}
.todo-list-container {
  margin-top: 20px;
}
.remove-button {
  margin-left: 8px
}
</style>
