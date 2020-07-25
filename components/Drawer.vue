<template>
    <div class="drawer">
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
const Drawer = Vue.extend({
    props: {

    },
    data: function() {
        return {
            links: [
                { id: "home", title: "Home", icon: "home", uri: "/" },
                { id: "buttons", title: "Buttons", icon: "smart_button", uri: "/buttons" }
            ]
        }
    }
});

export default Drawer;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
