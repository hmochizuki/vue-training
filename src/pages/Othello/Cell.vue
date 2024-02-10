<script setup lang="ts">
import Stone from "./Stone.vue"
import { Game } from "./type";

const props = defineProps<{
  cell: Game["board"]["cells"][number][number]
}>()
</script>

<template>
  <button class="cell" :disabled="!cell.isValid" :class="cell.isValid && 'isValid'">
     <Stone :stone="props.cell.stone"></Stone>
  </button>
</template>

<style scoped>
.cell {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 0;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.isValid {
  opacity: 0.5;
}
</style>
