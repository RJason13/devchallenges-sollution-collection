<template>
  <div class="navbar" :style="styles">
      RJ | Dev Challenges Solutions
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Instance, Constructor as TinyColor } from "tinycolor2";

export default Vue.extend({
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;
  height: 100%;
}
</style>
