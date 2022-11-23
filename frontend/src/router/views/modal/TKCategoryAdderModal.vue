<template>
  <transition id="root">
    <div class="modal-mask" v-on:click="actionDismiss">
      <div class="modal-container">
        <div class="modal-header">
          Modal header
        </div>

        <div class="modal-content">
          Modal content
        </div>

        <div class="modal-submit">
          Modal submit
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TKCategoryAdderModal",
  data: function () {
    return {

    };
  },

  methods: {
    actionDismiss(): void {
      this.$emit("dismiss");
    }
  }
});
</script>

<style scoped src="./TKCategoryAdderModal.css" />