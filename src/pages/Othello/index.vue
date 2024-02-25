<script setup lang="ts">
import { ref } from "vue"
import StartModal from "./StartModal.vue"
import Board from "./Board.vue"
import { CellNumber, Game } from "./type";
import { initialGame } from "./models";
import { playStone, playStoneByAi, startGame } from "./logics";
import { watch } from "vue";

const colorTextMapper = {
  black: "黒",
  white: "白"
}

const game = ref<Game>(initialGame)
const turnText = ref<string>("")
const handleStartGame = (gameMode: Game["mode"], playerTurn?: "first" | "second") => {
  game.value = startGame(gameMode, playerTurn)
}
const handleClickStone = (g: Game) => (row: CellNumber, col: CellNumber) => {
  game.value = playStone(g, row, col)
}

watch(
  () => ({turn: game.value.turn, status: game.value.status}),
  (current) => {
    if(current.status !== "playing") return
    turnText.value = game.value.mode === "ai" ? game.value.turn === game.value.playerTurn ? "あなたの番です" : "AIが考え中..." : `${colorTextMapper[game.value.turn]}の番です`

    if(game.value.mode === "ai" && current.turn !== game.value.playerTurn) {
      setTimeout(() => game.value = playStoneByAi(game.value), 2000)
    }
  }
);

</script>

<template>
  <div class="othello">
    <StartModal :is-open="game.status === 'beforePlay'" :handle-game-start="handleStartGame"></StartModal>
    <h1>オセロ！！</h1>
    <p v-if="game.status === 'ending'">{{ `${game.winner}の勝利！！！！` }}</p>
    <h2>{{ turnText }}</h2>
    <div class="game-container">
      <div class="board-container">
        <Board :board="game.board" :is-valid-turn="game.mode==='ai' && game.playerTurn === game.turn" :handle-click-cell="handleClickStone(game)"></Board>
      </div>
      <div class="game-status-container">
        <p>{{ `モード: ${ game.mode === "ai" ? "AI対戦" : "対人戦" }` }}</p>
        <p v-if="game.mode==='ai'">{{ `あなた: ${colorTextMapper[game.playerTurn]}` }}</p>
        <div class="divider"></div>
        <p>{{ `手番：${colorTextMapper[game.turn]}` }}</p>
        <ul class="stone-count-list">
          <p>石の数</p>
          <li>{{ `黒：${game.board.counts.black}` }}</li>
          <li>{{ `白：${game.board.counts.white}` }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.othello {
  text-align: center;
}
.game-container {
  margin-top: 12px;
  display: flex;
  gap: 8px;
}
.board-container {}
.game-status-container {
  border: 1px solid black;
  padding: 8px;
  font-size: 0.8em;
  text-align: left;

  & :not(:first-child) {
    margin-top: 4px;
  }
}
.stone-count-list {
  list-style-type: disc;
  > li {
    margin-left: 16px;
  }
}
.divider {
  border-bottom: 1px solid black;
}

</style>
