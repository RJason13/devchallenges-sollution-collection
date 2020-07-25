<template>
  <button :class="classes" ><i v-if="typeof endIcon === 'string'"></i>{{ text }}<i v-if="typeof endIcon === 'string'"></i></button>
</template>

<script lang="ts">
import Vue from 'vue';
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
    computed: {
        classes: function() {
            let { variant, color, size, disableShadow} = this;
            return [
                variant !== "default" ? variant : "", 
                color !== "default" ? color : "",
                size !== "md" ? size : "",
                { disableShadow }
            ];
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
}

button.sm {
    padding: 6px 12px;
}

button.lg {
    padding: 11px 22px;
}

button:focus, 
button:hover:not(:disabled) {
    background-color: #AEAEAE;
}

button:not(.outlined):not(.text):not(.disableShadow) {
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
}

button.primary {
    color: var(--primary-text-contrast);
    background-color: var(--primary-color);
}

button.primary:focus, 
button.primary:hover:not(:disabled) {
    background-color: var(--primary-focus-color);
}

button.secondary {
    color: var(--secondary-text-contrast);
    background-color: var(--secondary-color);
}

button.secondary:focus, 
button.secondary:hover:not(:disabled) {
    background-color: var(--secondary-focus-color);
}

button.danger {
    color: var(--danger-text-contrast);
    background-color: var(--danger-color);
}

button.danger:focus, 
button.danger:hover:not(:disabled) {
    background-color: var(--danger-focus-color);
}

button.outlined, button.text {
    background-color: transparent;
    color: var(--primary-color);
}

button.outlined {
    border-radius: 6px;
    border: 1px solid var(--primary-color);
}

button.outlined:disabled, 
button.outlined:disabled {
    border-color: rgba(41, 98, 255, 0.1);
}

button.outlined:focus, 
button.outlined:hover:not(:disabled), 
button.text:focus, 
button.text:hover:not(:disabled) {
    background-color: var(--primary-focus-opacity-color);
}

button.outlined.secondary, button.text.secondary {
    background-color: transparent;
    color: var(--secondary-color);
}

button.outlined.secondary {
    border-radius: 6px;
    border: 1px solid var(--secondary-color);
}

button.outlined.secondary:focus, 
button.outlined.secondary:hover:not(:disabled), 
button.text.secondary:focus, 
button.text.secondary:hover:not(:disabled) {
    background-color: var(--secondary-focus-opacity-color);
}

button.outlined.danger, button.text.danger {
    background-color: transparent;
    color: var(--danger-color);
}

button.outlined.danger {
    border-radius: 6px;
    border: 1px solid var(--danger-color);
}

button.outlined.danger:focus, 
button.outlined.danger:hover:not(:disabled), 
button.text.danger:focus, 
button.text.danger:hover:not(:disabled) {
    background-color: var(--danger-focus-opacity-color);
}

button:disabled {
    box-shadow: none;
    color: #9E9E9E;
}
</style>
