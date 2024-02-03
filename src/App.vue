<template>
  <div class="app-root">
    <aside class="sidebar">
      <nav id="sidebar">
        <div class="sidebar-menu">
          <router-link class="sidebar-text" to="/">Home</router-link>
        </div>
        <div>
          <router-link class="sidebar-text" to="/todo">TODOs</router-link>
        </div>
      </nav>
    </aside>
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
}
</style>
