<script setup lang="ts">
import Sidebar from "./components/organisms/Sidebar.vue"
</script>
<template>
  <div class="app-root">
    <Sidebar />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.app-root {
  display: flex;
}

.sidebar {
  flex: 1;
  background-color: #42b883;
  width: 150px;
  min-height: 100vh;

  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.sidebar-text {
  color: #fff;
  text-align: center;
}
main {
  flex: 4;
  padding: 80px 40px;
}
</style>
