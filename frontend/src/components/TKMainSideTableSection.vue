<template>
  <div id="root">
    <div class="side-table-container">
      <section class="title" aria-expanded="false" v-on:click="actionCategory($event)">
        <div class="title-wrapper">
          <div class="title-label">
            <span>Category</span>
          </div>

          <div class="chevron-down">
            <img class="chevron-down-icon" src="@assets/image/chevron-icon.svg" alt="chevron down icon" />
          </div>
        </div>
      </section>

      <section class="table">
        <div class="table-wrapper">
          <TKCategoryTableCell />
        </div>
      </section>

      <section class="footer">
        <div class="footer-wrapper">
          <div class="user-info-container">
            <img src="@assets/image/person-icon.svg" alt="user profile image" class="user-profile" />
            <div class="user-info">
              <div class="user-name"><span>Unknown</span></div>
              <div class="user-description"><span>unknown description</span></div>
            </div>
          </div>

          <div class="button-container">
            <button class="setting" type="button">
              <div class="image-wrapper">
                <img src="@assets/image/cogwheel-icon.svg" alt="setting icon" class="setting-image" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TKCategoryTableCell from "@components/cell/TKCategoryTableCell.vue";

export default {
  name: "TKMainSideTableSection",
  components: {
    TKCategoryTableCell,
  },

  methods: {
    actionCategory(event) {
      let categoryElement = event.currentTarget;

      console.log(categoryElement.ariaChecked);
    }
  }
}
</script>

<style scoped src="./TKMainSideTableSection.css"/>