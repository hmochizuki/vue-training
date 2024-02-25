<script setup lang="ts">
const props = defineProps<{
  stone: "black" | "white" | "empty"
}>()
</script>

<template>
  <div v-if="!!props.stone" class="stone" :class="props.stone"></div>
</template>

<style scoped>
.stone {
  width: 80%;
  height: 80%;
  border-radius: 100%;
}

.black {
  border: 1px solid black;
  background-color: black;
}

.white {
  border: 1px solid black;
  background-color: white;
}
</style>
