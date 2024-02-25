<script setup lang="ts">
import { CellNumber, Game } from "./type";
import Cell from "./Cell.vue"

const props = defineProps<{
  board: Game["board"]
  isValidTurn: boolean
  handleClickCell: (row: CellNumber, col: CellNumber) => void
}>()
</script>

<template>
  <div class="board">
    <div v-for="(row, rowNum) in props.board.cells" class="row" :key="rowNum">
      <div v-for="(cell, colNum) in row" class="col" :key="`${rowNum}-${colNum}`">
        <Cell :is-valid-turn="isValidTurn" :cell="cell" @click="handleClickCell(cell.row, cell.col)"></Cell>
      </div>
     </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
}
</style>
