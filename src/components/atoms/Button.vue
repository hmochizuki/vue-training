<script setup lang="ts">
const props = defineProps<{label: string}>()
</script>

<template>
  <v-btn>{{ props.label }}</v-btn>
</template>
