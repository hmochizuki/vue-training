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
  width: 40px;
  height: 40px;
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
