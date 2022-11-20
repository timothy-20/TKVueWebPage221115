<template>
  <div id="app">
    <div class="container">
      <div class="header-wrapper">
        <TKHeaderSection />
      </div>
      <div class="main-wrapper">
        <div class="aside-content">
          <TKSideTableSection />
        </div>

        <div class="main-content">
          <HelloWorld />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@components/HelloWorld";
import TKHeaderSection from "@components/TKMainHeaderSection";
import TKSideTableSection from "@components/TKMainSideTableSection";

export default {
  name: 'App',
  components: {
    HelloWorld,
    TKHeaderSection,
    TKSideTableSection,
  }
}
</script>

<style src="./App.css" />
