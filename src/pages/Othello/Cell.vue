<script setup lang="ts">
import Stone from "./Stone.vue"
import { Game } from "./type";

const props = defineProps<{
  cell: Game["board"]["cells"][number][number]
  isValidTurn: boolean
}>()
</script>

<template>
  <button class="cell" :disabled="!cell.isValid || !props.isValidTurn" :class="cell.isValid && 'isValid'">
     <Stone :stone="props.cell.stone"></Stone>
  </button>
</template>

<style scoped>
.cell {
  width: 35px;
  height: 35px;
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
