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
                v-for="(selectBox, index) in this.boxCellInfos" v-bind:key="index"
                v-on:click="checkBoxCell(index)">
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
            <input type="text" class="text-field" maxlength="20" placeholder="New channel"
                   v-on:input="insertChannelName($event)" />
          </div>
        </div>
      </section>
      <section class="channel-private-mode">
        <div class="private-mode-wrapper">
          <img src="@assets/image/lock-icon.svg" alt="lock icon that mean private mode" class="channel-type-icon"/>
          <div class="title">
            <span>Private channel</span>
          </div>

          <div class="body">
            <span>Only selected members and roles will be able to view this channel.</span>
          </div>

          <button class="private-mode-switch">
            <img v-on:click="channelInfo.isPrivate = !channelInfo.isPrivate"
                 v-bind:src="require(`@assets/image/${channelInfo.isPrivate ? 'switch-on-icon' : 'switch-off-icon'}.svg`)"
                 alt="private mode switch icon" />
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import TKGeneralSelectBoxCell from "@/components/cell/TKGeneralSelectBoxCell.vue";

export default {
  name: "TKModalAddCategoryPage",
  components: {
    "tk-general-select-box-cell": TKGeneralSelectBoxCell,
  },
  data: function () {
    return {
      isEnableConfirm: false,
      channelInfo: {
        type: "",
        name: "",
        isPrivate: false
      },
      boxCellInfos: [
        {
          title: "Text",
          subTitle: "Send message, image, GIF, emoticon, suggestion, joke",
          isChecked: false,
        },
        {
          title: "Voice",
          subTitle: "Share your voice, video, and screen",
          isChecked: false,
        },
      ],
    };
  },
  methods: {
    checkBoxCell(index) {
      console.log("Checked cell index: " + index);

      this.boxCellInfos.map((selectBox, boxIndex) => {
        selectBox.isChecked = false;

        if (boxIndex === index) {
          selectBox.isChecked = true;
          this.channelInfo.type = selectBox.title;
        }

        return selectBox;
      });
    },
    insertChannelName(event) {
      this.channelInfo.name = event.currentTarget.value;
      this.isEnableConfirm = true;

      if (this.isEnableConfirm === true && this.channelInfo.name.length == 0) {
        this.isEnableConfirm = false;
      }

      this.$emit("updateEnableConfirm", this.isEnableConfirm);
    }
  },
  mounted() {
    this.checkBoxCell(0);
    this.$emit("updateModalContent", this.channelInfo);
    this.$emit("updateEnableConfirm", false);
  }
}

</script>

<style scoped src="./TKAddCategoryModalContent.css" />