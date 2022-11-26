<template>
  <div id="root">
    <transition name="modal-background modal-mask">
      <div class="modal-mask" v-show="isShow" v-on:click="actionDismiss" />
    </transition>

<!--    <div class="modal-background modal-wrapper">-->
<!--      <transition>-->
<!--        <div class="modal-container" v-on:click.stop v-show="isShow">-->
<!--          <div class="modal-header">-->
<!--            <div class="title-wrapper">-->
<!--              <div class="title">-->
<!--                <span>{{ this.title }}</span>-->
<!--              </div>-->

<!--              <div class="sub-title">-->
<!--                <span>:{{ this.subTitle }}</span>-->
<!--              </div>-->
<!--            </div>-->

<!--            <button class="dismiss" v-on:click="actionDismiss">-->
<!--              <div class="dismiss-image-wrapper">-->
<!--                <img src="@assets/image/dismiss-icon.svg" alt="dismiss button icon" class="dismiss-image">-->
<!--              </div>-->
<!--            </button>-->
<!--          </div>-->

<!--          <div class="modal-content">-->
<!--            <slot name="modal-content"></slot>-->
<!--          </div>-->

<!--          <div class="modal-submit">-->
<!--            <button class="cancel">-->
<!--              <span>CANCEL</span>-->
<!--            </button>-->

<!--            <button class="confirm">-->
<!--              <span>{{ this.confirmButtonTitle }}</span>-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </transition>-->
<!--    </div>-->
  </div>

</template>

<script>
export default {
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
      isShow: false,
    };
  },

  watch: {
    isShow(newFlag, oldFlag) {
      console.log("Change show flag: " + oldFlag + " to " + newFlag);
    }
  },

  methods: {
    actionDismiss() {
      this.$emit("dismiss");
    },

    checkShow(flag) {
      console.log("This template is show? ", flag);

      this.isShow = flag;
    }
  },

  updated() {

  }
}
</script>

<style scoped src="./TKGeneralModalFrame.css" />