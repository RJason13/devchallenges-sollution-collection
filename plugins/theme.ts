import { Plugin } from '@nuxt/types';
import { Constructor as TinyColor } from "tinycolor2";
import { Theme, ThemeMode, Palette } from "./theme.d";

const tinycolor: TinyColor = require("tinycolor2");
  
const myPlugin: Plugin = (context, inject) => {
    inject('theme', <Theme>{
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
        tinycolor: tinycolor,
        getBaseColor: function(color: string, mode: string) {
            return (color in this.palette) ? 
                <string>this.palette[<keyof Palette>color] : 
                color in <object>this.palette[<keyof Palette>mode] ? 
                    (this.palette[mode as keyof Palette] as ThemeMode)[color as keyof ThemeMode] : 
                    this.palette.default
        },
        
    })
}

export default myPlugin;