import { Constructor } from "tinycolor2";

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

interface ThemeMode {
    primary: string,
    secondary: string
}

interface Palette {
    light: ThemeMode,
    dark: ThemeMode,
    default: string
    info: string,
    success: string,
    warning: string,
    danger: string
}

interface Theme {
    palette: Palette,
    tinycolor: Constructor,
    getBaseColor: (color: string, mode: string)=>string
}

export {
    Theme,
    Palette,
    ThemeMode
}