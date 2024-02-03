<script setup lang="ts">
import { pathNames } from "../../router/index"
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark"
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" title="Home" value="inbox" :to="pathNames.Home" />
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Todo" value="supervisors" :to="pathNames.Todo" />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>
