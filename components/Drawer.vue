<template>
    <div class="drawer" :style="styles">
        <div id="nav">
            <ul>
                <li v-for="link in links" :key="link.id" class="nav-link">
                    <NuxtLink :to="link.uri" :title="link.title">
                        <i class="material-icons md-18">{{ link.icon }}</i>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Instance, Constructor as TinyColor } from "tinycolor2";
const Drawer = Vue.extend({
    props: {
      shade: {
        type: String,
        default: "dark",
        validator: (value) => ['dark', 'mid', 'light'].includes(value)
      },
      color: {
        type: String,
        default: "primary",
        validator: (value) => ['default', 'primary', 'secondary', "danger"].includes(value)
      }
    },
    data() {
        return {
            links: [
                { id: "home", title: "Home", icon: "home", uri: "/" },
                { id: "buttons", title: "Buttons", icon: "smart_button", uri: "/buttons" }
            ]
        }
    },
    computed: {
      styles() : {[key: string]: string | Instance} {
        let { color, shade } = this;
        let { palette, tinycolor } = this.$theme;
        let mode = "dark";
        let colorBase = this.$theme.getBaseColor(color, mode);
        let bgColor: Instance = tinycolor(colorBase);
        
        switch(shade) {
          case "dark":
            bgColor.darken();
            break;
          case "light":
            bgColor.lighten();
            break;
        }
        return {
            backgroundColor: bgColor,
            color: (<TinyColor>tinycolor).mostReadable(bgColor, ["white", "black"])
        }
      }
    }
});

export default Drawer;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drawer {
    height: 100%;
}

.nav-link {
    height: var(--drawer-width);
}

.nav-link > a{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--primary-text-contrast);
}

.nav-link > a:hover {
    background-color: rgba(180, 180, 180, 0.2);
}

.nav-link > a.router-link-exact-active {
    background-color: rgba(180, 180, 180, 0.3);
}
</style>
