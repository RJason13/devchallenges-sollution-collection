<template>
      <Nuxt />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style>
:root {
  /* layout */
  --navbar-height: 64px;
  --navbar-z-index: 1200;
  --drawer-width: 48px;
  --drawer-z-index: 1100;
  --footer-height: 28px;
  --footer-z-index: 1000;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas: 
    "header header"
    "drawer main";
  grid-template-rows: var(--navbar-height) minmax(0, 1fr);
  grid-auto-columns: var(--drawer-width) minmax(0, 1fr);
}

#app > header {
  grid-area: header;
  z-index: var(--navbar-z-index);
}

#app > aside {
  grid-area: drawer;
  z-index: var(--drawer-z-index);
}

#app > main {
  grid-area: main;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
}

#app > main > * {
  flex: 1;
}

#app > main > footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#ddd;
  color: black;
  z-index: var(--footer-z-index);
  height:  var(--footer-height);
  flex: 0 0 var(--footer-height);
}
</style>
