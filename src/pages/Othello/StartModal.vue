<script setup lang="ts">
import { ref } from 'vue';
import { Game } from './type';

const props = defineProps<{
  isOpen: boolean
  handleGameStart: (gameMode: Game["mode"], playerTurn?: "first" | "second") => void
}>()


const gameMode = ref<"ai" | "player">("ai")
const playerTurn = ref<"first" | "second">("first")
</script>

<template>
<v-dialog v-model="props.isOpen" width="auto">
  <div class="card-container">
    ゲームモードを選択する
    <v-radio-group v-model="gameMode" inline>
      <v-radio label="AI対戦" value="ai"></v-radio>
      <v-radio label="対人戦" value="player"></v-radio>
    </v-radio-group>
    手番を選択する
    <v-radio-group v-model="playerTurn" inline :disabled="gameMode !== 'ai'">
      <v-radio label="先手" value="first"></v-radio>
      <v-radio label="後手" value="second"></v-radio>
    </v-radio-group>
    <v-spacer></v-spacer>
    <v-btn
      text="Start Game!!"
      @click="props.handleGameStart(gameMode, playerTurn)"
      ></v-btn>
  </div>
</v-dialog>
</template>

<style scoped>
.card-container {
  padding: 20px 8px;
  background-color: white;
  border-radius: 8px;
  text-align: center;
}
.label {
  font-size: 1em;
}
</style>
