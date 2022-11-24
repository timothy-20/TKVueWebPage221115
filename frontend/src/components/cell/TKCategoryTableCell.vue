<template>
  <div id="root">
    <div class="cell-wrapper">
      <div class="category-container">
        <img src="@assets/image/chevron-icon.svg" alt="left chevron icon" class="chevron-icon">

        <h3 class="category-title">
          <div>{{ this.categoryName }}</div>
        </h3>

        <button type="button" v-on:click="presentModal" class="category-add">
<!--          <img src="@assets/image/plus-icon.svg" alt="plus icon that mean add category" class="plus-icon">-->
        </button>
      </div>

      <div class="category-content">
      </div>
    </div>

    <tk-general-modal-frame v-show="isModalShown" v-on:dismiss="dismissModal">
      <tk-add-category-content slot="modal-content" />
    </tk-general-modal-frame>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TKGeneralModalFrame from "@views/modal/TKGeneralModalFrame.vue";
import TKAddCategoryModalContent from "@views/modal/page/TKAddCategoryModalContent.vue";

export default Vue.extend({
  name: "TKCategoryTableCell",
  components: {
    "tk-general-modal-frame": TKGeneralModalFrame,
    "tk-add-category-content": TKAddCategoryModalContent,
  },

  props: {
    categoryName: {
      type: String,
      default: "Untitled"
    }
  },

  data: function () {
    return {
      isModalShown: false as Boolean,
    };
  },

  methods: {
    presentModal(): void {
      this.isModalShown = true;
    },

    dismissModal(): void {
      this.isModalShown = false;
    }
  },
});

</script>

<style scoped src="./TKCategoryTableCell.css" />