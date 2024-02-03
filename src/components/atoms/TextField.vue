<script setup lang="ts">
  const props = defineProps<{label: string}>()
</script>
<template>
  <v-text-field :label="props.label" variant="outlined" hide-details="auto"></v-text-field>
</template>