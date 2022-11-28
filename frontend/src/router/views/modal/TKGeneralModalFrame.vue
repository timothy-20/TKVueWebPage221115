<template>
  <div id="modal-frame" v-if="isModalShow" v-on:click="actionDismiss">
    <transition name="modal-fade">
      <div class="modal-mask" v-show="isShow"></div>
    </transition>

    <transition name="modal-pop">
      <div class="modal-container" v-show="isShow" v-on:click.stop>
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
              <img src="@assets/image/dismiss-icon.svg" alt="dismiss button icon" class="dismiss-image">
            </div>
          </button>
        </div>

        <div class="modal-content">
          <slot name="modal-content" v-bind:isEnableConfirm="isEnableConfirm"></slot>
        </div>

        <div class="modal-submit">
          <button class="cancel"
                  v-on:click="actionDismiss"
                  v-on:mouseover="$event.currentTarget.style.textDecoration = 'underline'"
                  v-on:mouseleave="$event.currentTarget.style.textDecoration = 'none'">
            <span>CANCEL</span>
          </button>

          <button class="confirm">
            <span>{{ this.confirmButtonTitle }}</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TKCategoryAdderModal",
  model: {
      prop: "isModalShow",
      event: "updateModalShow",
  },
  props: {
    isModalShow: {
      type: Boolean,
      default: false,
    },
    isEnableConfirm: {
      type:Boolean,
      default: false,
      // require: true
    },
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
      isShow: false,
      timeout: null,
    };
  },
  watch: {
    isModalShow () {
      if (this.isModalShow) {
        this.$nextTick(() => {
          this.isShow = this.isModalShow;
        });
      }
    },
  },
  methods: {
    actionDismiss() {
      if (this.timeout) {
        clearTimeout(this.timeout);

        this.timeout = null;
      }

      this.isShow = false;
      this.timeout = setTimeout(() => {
        this.$emit("updateModalShow", false);
      }, 300);
    },
  },
}
</script>

<style scoped src="./TKGeneralModalFrame.css" />