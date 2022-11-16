<template>
  <div id="app">
    <div class="container">
      <div class="header-section"><TKHeaderSection /></div>

      <div class="content-section">
        <div class="side-table-section"><TKSideTableSection /></div>
        <div class="main-content-section"><HelloWorld msg="Welcome to Your Vue.js App"/></div>
      </div>

      <div class="footer-section">

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

<style>
@font-face {
  font-family: "NotoSansKR-Black";
  src: url("@assets/font/Noto_Sans_KR/NotoSansKR-Black.otf") format("opentype");
}

@font-face {
  font-family: "NotoSansKR-Bold";
  src: url("@assets/font/Noto_Sans_KR/NotoSansKR-Bold.otf") format("opentype");
}

@font-face {
  font-family: "NotoSansKR-Light";
  src: url("@assets/font/Noto_Sans_KR/NotoSansKR-Light.otf") format("opentype");
}

@font-face {
  font-family: "NotoSansKR-Medium";
  src: url("@assets/font/Noto_Sans_KR/NotoSansKR-Medium.otf") format("opentype");
}

@font-face {
  font-family: "NotoSansKR-Regular";
  src: url("@assets/font/Noto_Sans_KR/NotoSansKR-Regular.otf") format("opentype");
}

@font-face {
  font-family: "NotoSansKR-Thin";
  src: url("@assets/font/Noto_Sans_KR/NotoSansKR-Thin.otf") format("opentype");
}

* {
  margin: 0 auto;
  padding: 0;
  border: 0 solid;
  box-sizing: border-box;
  outline: none;
}

#app {
  --primary-bg-color: #343434;
  --primary-border-color: #101010;
  --primary-button-color: #000000;
  --primary-font-color: #ffffff;
  --primary-box-shadow-bottom: 0 1px 0 #262626, 0 1.5px 0 #333333, 0 2px 0 #363636;

  font-family: NotoSansKR-Regular, sans-serif;
  transform: rotate(0.04deg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
}

.container > * {
  width: inherit;
}

.header-section {
  height: 5rem;
  display: flex;
  z-index: 9999;
}

.content-section {
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
}

.content-section .side-table-section {
  min-width: 16rem;
  display: flex;
}

.content-section .main-content-section {
  flex-grow: 1;
}

.footer-section {
  min-height: 6rem;
  background-color: yellowgreen;
}
</style>
