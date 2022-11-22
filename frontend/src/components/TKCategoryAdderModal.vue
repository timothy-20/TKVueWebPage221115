<template>
  <transition id="root">
    <div class="modal-mask">
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
  name: "TKCategoryAdderModal"
});
</script>

<style scoped src="./TKCategoryAdderModal.css" />