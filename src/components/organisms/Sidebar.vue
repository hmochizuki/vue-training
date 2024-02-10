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
          <v-btn icon="mdi-cog" variant="text" size="small" :to="pathNames.Othello"></v-btn>
        </v-list-item>
          <v-divider />
          <v-list-item prepend-icon="mdi-home" title="Home" :to="pathNames.Home" />
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Todo" :to="pathNames.Todo" />
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="オセロ" :to="pathNames.Othello" />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
</style>