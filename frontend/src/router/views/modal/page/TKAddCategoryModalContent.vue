<template>
  <div id="root">
    <div class="container">
      <section class="channel-type">
        <div class="channel-label set-type">
          <span>type</span>
        </div>
        <div class="channel-type-selector">
          <ul class="channel-type-selector-table">
            <li class="channel-type-selector-table-cell"
                v-for="(selectBox, index) in this.selectBoxList" v-bind:key="index"
                v-on:click="updateCheckedCell(index)">
              <tk-general-select-box-cell class="channel-type-select-box"
                                          v-bind:description-title="selectBox.title"
                                          v-bind:description-sub-title="selectBox.subTitle"
                                          v-bind:is-checked="selectBox.isChecked"/>
            </li>
          </ul>
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
            <img v-on:click="channelInfo.isChannelPrivate = !channelInfo.isChannelPrivate"
                 v-bind:src="require(`@assets/image/${channelInfo.isChannelPrivate ? 'switch-on-icon' : 'switch-off-icon'}.svg`)"
                 alt="private mode switch icon" />
          </button>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
import TKGeneralSelectBoxCell from "@components/cell/TKGeneralSelectBoxCell.vue";

export default {
  name: "TKModalAddCategoryPage",
  components: {
    "tk-general-select-box-cell": TKGeneralSelectBoxCell,
  },
  props: {
    selectBoxList: {
      type: Array,
      default: function () {
        return [
          {
            title: "Text",
            subTitle: "Send message, image, GIF, emoticon, suggestion, joke",
            isChecked: true,
          },
          {
            title: "Voice",
            subTitle: "Share your voice, video, and screen",
            isChecked: false,
          },
        ];
      }
    }
  },
  data: function () {
    return {
      channelInfo: {
        channelType: "",
        channelName: "Untitled",
        isChannelPrivate: false,
      },
    };
  },
  methods: {
    updateCheckedCell(index) {
      console.log("Checked cell index: " + index);

      this.selectBoxList.map((selectBox, boxIndex) => {
        selectBox.isChecked = false;

        if (boxIndex === index) {
          selectBox.isChecked = true;
          this.channelInfo.channelType = selectBox.title;
        }

        return selectBox;
      });
    },
  },
}

</script>

<style scoped src="./TKAddCategoryModalContent.css" />