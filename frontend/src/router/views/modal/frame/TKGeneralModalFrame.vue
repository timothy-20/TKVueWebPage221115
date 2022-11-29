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
          <slot name="modal-content"
                v-bind:isModalShow="isModalShow"
                v-bind:updateModalContent="updateModalContent"
                v-bind:updateEnableConfirm="updateEnableConfirm" />
        </div>

        <div class="modal-submit">
          <button class="cancel"
                  v-on:click="actionDismiss"
                  v-on:mouseover="$event.currentTarget.style.textDecoration = 'underline'"
                  v-on:mouseleave="$event.currentTarget.style.textDecoration = 'none'">
            <span>CANCEL</span>
          </button>

          <button class="confirm"
                  ref="confirmButton"
                  v-on:click="actionConfirm">
            <span>{{ this.confirmButtonTitle }}</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TKGeneralModalFrame",
  model: {
    prop: "isModalShow",
    event: "updateModalShow",
  },
  props: {
    isModalShow: {
      type: Boolean,
      default: false
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
      content: null
    };
  },
  watch: {
    isModalShow () {
      if (this.isModalShow) {
        this.$nextTick(() => this.isShow = this.isModalShow);
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
    actionConfirm() {
      this.$emit("sendModalContent", this.content);
    },
    updateModalContent(content) {
      console.log("VAVAV: " + content);
      this.content = content;

      if (content.isPrivate) {
        this.$refs.confirmButton.nodeValue = "AAAA";
      }
    },
    updateEnableConfirm(flag) {
      let confirmButton = this.$refs.confirmButton;

      if (flag) {
        confirmButton.disabled = false;
        confirmButton.style.opacity = "1";
        confirmButton.style.cursor = "default";
        confirmButton.onmouseover = () => confirmButton.style.backgroundColor = "#666666";
        confirmButton.onmouseleave = () => confirmButton.style.backgroundColor = "#808080";

      } else {
        confirmButton.disabled = true;
        confirmButton.style.opacity = "0.5";
        confirmButton.style.cursor = "not-allowed";
      }
    }
  },
}

</script>

<style scoped src="./TKGeneralModalFrame.css" />