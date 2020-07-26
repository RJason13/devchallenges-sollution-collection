<template>
  <div class="buttons">
      <h2>Buttons</h2>
      <ul>
          <li v-for="(group, i) in groups" :key="i">
              <div class="button-group">
                <div class="button-wrapper" v-for="(button, j) in group" :key="j">
                    <span style="font-size: 14px;margin-bottom: 10px;margin-top: 20px;">{{ button.desc }}</span>
                    <Button v-if="button.onClick" v-bind="button.props" @click="button.onClick" />
                    <Button v-else v-bind="button.props" />
                </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '~/components/Button.vue';
export default Vue.extend({
    data: function() {
        return {
            groups: [
                [
                    { desc: '<Button />', props: { text: "Default" }, onClick: () => { console.log("test") } },
                    { desc: '<Button variant="outlined" />', props: { text: "Outlined", variant: "outlined" } },
                    { desc: '<Button variant="text" />', props: { text: "Text", variant: "text" } },
                ],
                [
                    { desc: '<Button disableShadow />', props: { text: "Default", disableShadow: true } },
                ],
                [
                    { desc: '<Button disabled />', props: { text: "Default", disabled: true } },
                    { desc: '<Button variant="outlined" disabled />', props: { text: "Outlined", variant: "outlined", disabled: true } },
                    { desc: '<Button variant="text" disabled />', props: { text: "Text", variant: "text", disabled: true } },
                ],
                [
                    { desc: '<Button startIcon="shopping_chart" />', props: { text: "Default", startIcon: "shopping_cart" } },
                    { desc: '<Button endIcon="shopping_chart" />', props: { text: "Default", endIcon: "shopping_cart" } }
                ],
                [
                    { desc: '<Button size="sm" />', props: { text: "Default", size: "sm" } },
                    { desc: '<Button size="md" />', props: { text: "Default", size: "md" } },
                    { desc: '<Button size="lg" />', props: { text: "Default", size: "lg" } }
                ],
                [
                    { desc: '<Button color="primary" />', props: { text: "Primary", color: "primary" } },
                    { desc: '<Button color="secondary" />', props: { text: "Secondary", color: "secondary" } },
                    { desc: '<Button color="danger" />', props: { text: "Danger", color: "danger" } }
                ],
                [
                    { desc: '<Button variant="outlined" color="primary" />', props: { text: "Primary", variant: "outlined", color: "primary" } },
                    { desc: '<Button variant="outlined" color="secondary" />', props: { text: "Secondary", variant: "outlined", color: "secondary" } },
                    { desc: '<Button variant="outlined" color="danger" />', props: { text: "Danger", variant: "outlined", color: "danger" } }
                ],
                [
                    { desc: '<Button variant="text" color="primary" />', props: { text: "Primary", variant: "text", color: "primary" } },
                    { desc: '<Button variant="text" color="secondary" />', props: { text: "Secondary", variant: "text", color: "secondary" } },
                    { desc: '<Button variant="text" color="danger" />', props: { text: "Danger", variant: "text", color: "danger" } }
                ]
            ]
        }
    },

    components: {
        Button
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons {
    padding: 20px;
    text-align: left;
}

.button-group {
    display: flex;
}

.button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width:250px;
    margin: 5px;
}
</style>
