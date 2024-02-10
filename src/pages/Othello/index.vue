<script setup lang="ts">
import { ref } from "vue"
import Board from "./Board.vue"
import { CellNumber, Game } from "./type";
import { initialGame } from "./models";
import Button from "../../components/atoms/Button.vue"
import { playStone, startGame } from "./logics";

const game = ref<Game>(initialGame)

const handleStartGame = () => {
  game.value = startGame()
}
const handleClickStone = (g: Game) => (row: CellNumber, col: CellNumber) => {
  game.value = playStone(g, row, col)
}
</script>

<template>
  <div class="othello">
    <h1>オセロ！！</h1>
    <p>{{ `ステータス：${game.status}` }}</p>
    <Button v-if="game.status === 'beforePlay'" label="ゲームを開始する" @click="handleStartGame"></Button>
    <p v-if="game.status === 'playing'">{{ `プレイヤー：${game.turn}の手番です。` }}</p>
    <p v-if="game.status === 'ending'">{{ `${game.winner}の勝利！！！！` }}</p>
    <p>{{ `黒：${game.board.counts.black}。白：${game.board.counts.white}。空：${game.board.counts.empty}。` }}</p>
    <Board :board="game.board" :handle-click-cell="handleClickStone(game)"></Board>
  </div>
</template>

<style scoped>
.othello {
  text-align: center;
}

</style>
