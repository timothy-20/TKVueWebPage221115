<template>
  <transition name="modal">
    <div class="modal-mask" v-on:click="actionDismiss">
      <div class="modal-wrapper">
        <div class="modal-container" v-on:click.stop>
          <div class="modal-header">
            <div class="title-wrapper">
              <div class="title">
                <span>{{ this.title }}</span>
              </div>

              <div class="sub-title">
                <span>:{{ this.subTitle }}</span>
              </div>
            </div>

            <button class="dismiss" v-on:click="actionDismiss">
              <div class="dismiss-image-wrapper">
                <img src="@assets/image/dismiss-icon.svg" alt="" class="dismiss-image">
              </div>
            </button>
          </div>

          <div class="modal-content">
            <slot name="modal-content"></slot>
          </div>

          <div class="modal-submit">
            <button class="cancel">
              <span>CANCEL</span>
            </button>

            <button class="confirm">
              <span>{{ this.confirmButtonTitle }}</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TKCategoryAdderModal",
  props: {
    title: {
      type: String,
      default: "Untitled"
    },
    subTitle: {
      type: String,
      default: "unspecified sub-title value"
    },
    confirmButtonTitle: {
      type: String,
      default: "CONFIRM"
    },
  },

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

<style scoped src="./TKGeneralModalFrame.css" />