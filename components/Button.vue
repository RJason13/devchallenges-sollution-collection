<template>
    <button :class="classes" 
            @click="$emit('click', $event)" 
            @mousedown="onMousedown" 
            @mouseenter="$data.$_hovered = true"
            @mouseleave="$data.$_hovered = false"
            @focus="$data.$_focused = true"
            @blur="$data.$_focused = false"
            :style="styles">
      <i v-if="typeof startIcon === 'string'" class="material-icons" style="margin-right: 5px;">{{ startIcon }}</i>
        <span>{{ text }}</span>
      <i v-if="typeof endIcon === 'string'" class="material-icons" style="margin-left: 5px;">{{ endIcon }}</i>
    </button>
</template>

<script lang="ts">
import Vue, { ComputedOptions } from 'vue';
import { Instance, Constructor as TinyColor } from "tinycolor2";

export default Vue.extend({
    props: {
        variant: {
            type: String,
            default: "default",
            validator: function (value) {
                return ['default', 'outlined', 'text'].includes(value);
            }
        },
        text: {
            type: String,
            required: true
        },
        disableShadow: {
            type: Boolean,
            default: false
        },
        startIcon: {
            type: String
        },
        endIcon: {
            type: String
        },
        size: {
            type: String,
            default: "md",
            validator: (value) => ['sm', 'md', 'lg'].includes(value)
        },
        color: {
            type: String,
            default: "default",
            validator: (value) => ['default', 'primary', 'secondary', "danger"].includes(value)
        }
    },

    data() {
        return {
            $_hovered: false,
            $_focused: false,
            $_mousedowned: false
        }

    },

    computed: {
        classes(): Array<string | object> {
            let { variant, color, size, disableShadow} = this;
            return [
                variant !== "default" ? variant : "", 
                color !== "default" ? color : "",
                size !== "md" ? size : "",
                { disableShadow }
            ];
        },
        styles(): { [key: string]: string | Instance } {
            let { variant, color, size, disableShadow } = this;
            let { $_hovered, $_focused, $_mousedowned } = this.$data;
            let { palette, tinycolor }= this.$theme;
            
            let mode = "dark";
            let colorBase = this.$theme.getBaseColor(color, mode);

            // background
            let bgColor: Instance = tinycolor(colorBase);
            let isOutlinedOrText = ["outlined", "text"].includes(variant);
            if ($_hovered || $_focused || $_mousedowned) {
                bgColor.darken();
                if ($_mousedowned){
                    bgColor.darken(20);
                    isOutlinedOrText && bgColor.setAlpha(0.2);
                } else {
                    isOutlinedOrText && bgColor.setAlpha(0.1);
                }
            } else {
                if (isOutlinedOrText) bgColor.setAlpha(0);
            }

            // foreground
            let fgColor: Instance | string = isOutlinedOrText ? color === "default" ? this.$theme.getBaseColor("primary", mode) : colorBase : "white";

            return {
                backgroundColor: bgColor,
                color: fgColor,
                borderColor: variant === "outlined" ? fgColor : "transparent"
            };
        }
    },

    methods: {
        onMousedown: function() {
            let { $data } = this;
            $data.$_mousedowned = true;
            var mouseupListener = ()=>{
                $data.$_mousedowned = false;
                window.removeEventListener("mouseup", mouseupListener)
            }
            window.addEventListener("mouseup", mouseupListener);
        }
    }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
    font-style: normal;
    background-color: #E0E0E0;
    cursor: pointer;
    user-select: none;
}

button > * {
    vertical-align: middle;
}

button.sm {
    padding: 6px 12px;
}

button.lg {
    padding: 11px 22px;
}

button:not(.outlined):not(.text):not(.disableShadow) {
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
}

button.outlined {
    border-radius: 6px;
    border: 1px solid;
}

button:disabled {
    box-shadow: none;
    opacity: 0.5;
}
</style>
