<template>
  <div id="root">
    <div class="container">
      <div class="title-bar" style="z-index: 3">
        <div class="title-wrapper">
          <span class="title"><p>Untitled title</p></span>
          <button class="title-extension" type="button">
            <svg class="arrow-image" x="0" y="0" viewBox="0 0 100 300">
              <polyline points="10 130, 50 170, 90 130" />
            </svg>
          </button>
        </div>
      </div>

      <div class="table-wrapper" style="z-index: 2">
        MAIN TABLE
      </div>

      <div class="info-wrapper" style="z-index: 1">
        USER INFO
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TKMainSideTableSection",
  props: {

  }
}
</script>

<style scoped src="./TKMainSideTableSection.css"/>