<template>
  <nav id="sidebar">
    <div class="sidebar-menu">
      <router-link class="sidebar-text" to="/">Home</router-link>
    </div>
    <div>
      <router-link class="sidebar-text" to="/todo">TODOs</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
#sidebar {
  position: fixed;
  background-color: #42b883;
  width: 150px;
  height: 100%;
  left: 0;
  top: 0;

  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.sidebar-text {
  color: #fff;
}
</style>
