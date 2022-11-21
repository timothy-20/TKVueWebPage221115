<template>
  <div id="root">
    <div class="side-table-container">
      <section class="title">
        <div class="title-wrapper">
          <span class="title-text">Untitled</span>
          <button class="title-extension" type="button">
            <svg class="arrow-image" x="0" y="0" viewBox="0 0 100 100">
              <polyline points="10 30, 50 70, 90 30" />
            </svg>
          </button>
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
import TKCategoryTableCell from "@components/TKCategoryTableCell";

export default {
  name: "TKMainSideTableSection",
  components: {
    TKCategoryTableCell,
  },
}
</script>

<style scoped src="./TKMainSideTableSection.css"/>