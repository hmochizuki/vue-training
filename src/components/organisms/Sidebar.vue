<script setup lang="ts">
import { pathNames } from "../../router/index"
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer permanent>
        <v-list nav>
          <v-list-item
            prepend-icon="mdi-account"
            title="YourName: Coming Soon"
          >
          <v-btn icon="mdi-cog" variant="text" size="small"></v-btn>
        </v-list-item>
          <v-divider />
          <v-list-item prepend-icon="mdi-home" title="Home" :to="pathNames.Home" />
          <v-list-item prepend-icon="mdi-format-list-bulleted" title="Todo" :to="pathNames.Todo" />
          <v-list-item prepend-icon="mdi-checkerboard" title="オセロ" :to="pathNames.Othello" />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
</style>