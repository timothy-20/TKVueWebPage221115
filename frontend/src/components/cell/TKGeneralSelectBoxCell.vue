<template>
  <div id="root">
    <div class="container" ref="container">
      <div class="icon channel-type-icon">
        <img src="@assets/image/hash-icon.svg" alt="hash icon" />
      </div>

      <div class="description-title">{{ this.descriptionTitle }}</div>
      <div class="description-sub-title">{{ this.descriptionSubTitle }}</div>

      <div class="icon check-radio-icon">
        <img v-bind:src="require(`@assets/image/${this.radioIconName}.svg`)" alt="check radio icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TKGeneralSelectBoxCell",
  props: {
    descriptionTitle: {
      type: String,
      default: "Untitled"
    },
    descriptionSubTitle: {
      type: String,
      default: ":belongs to "
    },
    isChecked: {
      type: Boolean,
      default: false
    },
  },
  data: function() {
    return {
      radioIconName: "radio-button-off-icon",
    }
  },
  watch: {
    isChecked(newValue) {
      console.log("AAAAA");
      this.actionCheck(newValue);
    }
  },
  methods: {
    actionCheck(flag) {
      let container = this.$refs.container;

      if (flag) {
        container.style.backgroundColor = "#414141";
        container.onmouseover = () => container.style.backgroundColor = "#414141";
        container.onmouseleave = () => container.style.backgroundColor = "#414141";
        this.radioIconName = "radio-button-on-icon";

      } else {
        container.style.backgroundColor = "#252525FF";
        container.onmouseover = () => container.style.backgroundColor = "#3b3b3b";
        container.onmouseleave = () => container.style.backgroundColor = "#252525FF";
        this.radioIconName = "radio-button-off-icon";
      }
    },
  },
  mounted() {
    this.actionCheck(this.isChecked);
  }
}
</script>

<style scoped src="./TKGeneralSelectBoxCell.css" />