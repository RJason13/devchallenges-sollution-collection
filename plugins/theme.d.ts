import { Constructor } from "tinycolor2";

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
    tinycolor: Constructor
}

export {
    Theme,
    Palette
}