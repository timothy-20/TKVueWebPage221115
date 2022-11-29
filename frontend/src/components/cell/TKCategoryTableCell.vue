<template>
  <div id="root">
    <div class="category-container">
      <div class="category-content" role="button" v-on:click.stop="actionDropDown($event)">
        <img src="@assets/image/chevron-icon.svg" alt="left chevron icon" class="chevron-icon">

        <h3 class="category-title">
          <div>{{ this.categoryName }}</div>
        </h3>
      </div>

      <div class="category-add-wrapper">
        <button class="category-add" type="button" v-on:click="presentModal">
          <img class="plus-icon" src="@assets/image/plus-icon.svg" alt="plus icon that mean add category">
        </button>
      </div>
    </div>

    <div class="category-dropdown" v-if="!isCategoryFold">

    </div>
    <tk-general-modal-frame v-model="isModalShow"
                            v-bind:title="'Make channel'"
                            v-bind:sub-title="'belongs to ' + this.categoryName"
                            v-bind:confirm-button-title="'MAKE CHANNEL'">
      <template v-slot:modal-content="scope">
        <tk-add-category-modal-content v-on:updateModalContent="scope.updateModalContent"
                                       v-bind:channel-info="scope.bucket"
        />
        <h3>Channel result: {{scope.bucket}}</h3>
      </template>
    </tk-general-modal-frame>
  </div>
</template>

<script>
import TKGeneralModalFrame from "@views/modal/frame/TKGeneralModalFrame.vue";
import TKAddCategoryModalContent from "@views/modal/content/TKAddCategoryModalContent.vue";

export default {
  name: "TKCategoryTableCell",
  components: {
    "tk-general-modal-frame": TKGeneralModalFrame,
    "tk-add-category-modal-content": TKAddCategoryModalContent,
  },
  props: {
    categoryName: {
      type: String,
      default: "Untitled"
    }
  },
  data: function () {
    return {
      isModalShow: false,
      isCategoryFold: true,
    };
  },
  methods: {
    actionDropDown(event) {
      this.isCategoryFold = !this.isCategoryFold;
      let categoryContent = event.currentTarget;
      let chevronIcon = categoryContent.children.item(0);
      chevronIcon.style.transition = "rotate 0.3s";

      if (this.isCategoryFold) {
        chevronIcon.style.rotate = "90deg";

      } else {
        chevronIcon.style.rotate = "180deg";
      }
    },
    presentModal() {
      this.isModalShow = true;
    }
  },
};

</script>

<style scoped src="./TKCategoryTableCell.css" />