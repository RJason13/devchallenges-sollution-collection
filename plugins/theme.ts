import { Plugin } from '@nuxt/types';
import { Constructor as TinyColor } from "tinycolor2";
import { Theme } from './theme.d';

const tinycolor: TinyColor = require("tinycolor2");

const myPlugin: Plugin = (context, inject) => {
    
    const theme: Theme = {
        palette: {
            light: {
                primary: tinycolor("slategrey").toHexString(),
                secondary: tinycolor("lightskyblue").toHexString()
            },
            dark: {
                primary: tinycolor("slategrey").toHexString(),
                secondary: tinycolor("lightskyblue").toHexString()
            },
            default: tinycolor("#999999").toHexString(),
            info: tinycolor("#00acc1").toHexString(),
            success: tinycolor("#4caf50").toHexString(),
            warning: tinycolor("#ff9800").toHexString(),
            danger: tinycolor("#f44336").toHexString()
        },
        tinycolor: tinycolor
    }
    inject("theme", theme);
}

export default myPlugin