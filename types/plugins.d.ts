import Vue from 'vue';
import { Theme } from '~/plugins/theme';

declare module 'vue/types/vue' {
    interface Vue {
        $theme: Theme
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $theme: Theme
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $theme: Theme
    }
}