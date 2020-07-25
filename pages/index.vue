<template>
  <div id="app">
    <header>
      <navbar />
    </header>
    <aside>
      <drawer />
    </aside>
    <main>
      <nuxt-child />
      <footer>Copyright© 2020 by Richard Jason</footer>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from "../components/Navbar.vue";
import Drawer from "../components/Drawer.vue";

export default Vue.extend({
  components: {
    Navbar,
    Drawer
  }
})
</script>

<style>
:root {
  /* pallete */
  --primary-color: slategrey;
  --primary-focus-color: rgb(81, 92, 104);
  --primary-focus-opacity-color: rgba(81, 92, 104, 0.1);
  --primary-text-contrast: white;
  --primary-light-color: lightslategrey;
  --primary-light-text-contrast: black;
  --primary-dark-color: darkslategrey;
  --primary-dark-text-contrast: white;
  --secondary-color: lightskyblue;
  --secondary-focus-color: rgb(107, 161, 196);
  --secondary-focus-opacity-color: rgba(107, 161, 196, 0.1);
  --secondary-text-contrast: black;
  --danger-color: #D32F2F;
  --danger-focus-color: #9A0007;
  --danger-focus-opacity-color: rgba(154, 0, 7, 0.1);
  --danger-text-contrast: white;
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
  background-color: var(--primary-dark-color);
  color: var(--primary-dark-text-contrast);
  z-index: var(--navbar-z-index);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;
}

#app > aside {
  grid-area: drawer;
  background-color: var(--primary-color);
  color: var(--primary-text-contrast);
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
