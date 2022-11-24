<template>
  <div id="root">
    <div class="container">
      <section class="channel-type">
        <div class="channel-label define-type">
          <span>channel type</span>
        </div>

        <div class="channel-type-selector">
          <tk-general-select-box-cell class="channel-type-text"
                                      descriptionTitle="Text"
                                      descriptionSubTitle="Send message, image, GIF, emoticon, suggestion, joke"
                                      isCheck=true />
          <tk-general-select-box-cell class="channel-type-voice"
                                      descriptionTitle="Voice"
                                      descriptionSubTitle="Share your voice, video, and screen"
                                      isCheck=false />
        </div>
      </section>

      <section class="channel-name">
        <div class="channel-label define-name">
          <span>channel name</span>
        </div>
      </section>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from "vue";

import TKGeneralSelectBoxCell from "@components/cell/TKGeneralSelectBoxCell.vue";

export default Vue.extend({
  name: "TKModalAddCategoryPage",
  components: {
    "tk-general-select-box-cell": TKGeneralSelectBoxCell,
  }
});

</script>

<style scoped src="./TKAddCategoryModalContent.css" />