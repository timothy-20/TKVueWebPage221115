<template>
  <div id="root">
    <div class="container">
      <div class="icon channel-type-icon">
        <img src="@assets/image/hash-icon.svg" alt="hash icon" />
      </div>

      <div class="description-title">{{ this.descriptionTitle }}</div>
      <div class="description-sub-title">{{ this.descriptionSubTitle }}</div>

      <div class="icon check-radio-icon">
        <img src="@assets/image/radio-button-off-icon.svg" alt="check radio icon">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TKGeneralSelectBoxCell",
  props: {
    descriptionTitle: {
      type: String,
      default: "Untitled"
    },
    descriptionSubTitle: {
      type: String,
      default: ":untitled, but need some conditions."
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },

  data: function() {
    return {
      index: 0,
    }
  },

  created() {
    if (this.isChecked) {
      console.log("Created: This cell is checked.");

    } else {
      console.log("Created: This cell isn't checked.");
    }
  },

  mounted() {
    if (this.isChecked) {
      console.log("Mounted: This cell is checked.");

    } else {
      console.log("Mounted: This cell isn't checked.");
    }
  }
});
</script>

<style scoped src="./TKGeneralSelectBoxCell.css" />