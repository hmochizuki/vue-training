<script setup lang="ts">
import { ref } from "vue"

const todoList = ref<{title: string, completed: boolean}[]>([])
</script>

<template>
  <div>
    <div v-if="todoList.length === 0">
      TODOリストの要素がありません。
    </div>
    <ol v-else>
      <li v-for="todo in todoList">{{ todo.title }}</li>
    </ol>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
</style>
