<template>
  <div id="root">
    <div class="container">
      <section class="channel-type">
        <div class="channel-label set-type">
          <span>type</span>
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
        <div class="channel-label set-name">
          <span>name</span>
        </div>

        <div class="text-field-container">
          <div class="text-field-wrapper">
            <img src="@assets/image/hash-icon.svg" alt="hash icon" class="channel-type-icon"/>
            <input type="text" class="text-field" maxlength="100" placeholder="New channel" />
          </div>
        </div>
      </section>
      <section class="channel-private-mode">
        <div class="private-mode-wrapper">
          <img src="@assets/image/hash-icon.svg" alt="hash icon" class="channel-type-icon"/>
          <div class="title">
            <span>Private channel</span>
          </div>

          <div class="body">
            <span>Only selected members and roles will be able to view this channel.</span>
          </div>

          <button class="private-mode-switch">
            <img src="@assets/image/switch-off-icon.svg" alt="private mode switch icon" />
          </button>
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