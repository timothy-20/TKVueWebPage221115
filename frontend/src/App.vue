<template>
  <div id="app">
    <div class="container">
      <div class="header-wrapper">
        <tk-header-section />
      </div>

      <div class="main-wrapper">
        <div class="aside-content">
          <tk-side-table-section />
        </div>

        <div class="main-content">
          <hello-world />
        </div>
      </div>

      <portal-target name="portal-app-component">
      </portal-target>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { PortalTarget } from "portal-vue";
import HelloWorld from "@components/HelloWorld.vue";
import TKHeaderSection from "@components/TKMainHeaderSection.vue";
import TKSideTableSection from "@components/TKMainSideTableSection.vue";

@Component({
  components: {
    "portal-target": PortalTarget,
    "hello-world": HelloWorld,
    "tk-header-section": TKHeaderSection,
    "tk-side-table-section": TKSideTableSection,
  },
})

export default class App extends Vue {}
</script>

<style src="./App.css" />
