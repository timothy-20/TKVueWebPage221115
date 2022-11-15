<template>
  <div id="app">
    <div class="container">
      <div class="header-section">
        <TKHeaderSection />
      </div>

      <div class="content-section">
        <div class="aside-menu">

        </div>
        <div class="main-content">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
      </div>

      <div class="footer-section">

      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@components/HelloWorld"
import TKHeaderSection from "@components/TKMainHeaderSection"

export default {
  name: 'App',
  components: {
    HelloWorld,
    TKHeaderSection,
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
  border: 0px solid;
  box-sizing: border-box;
  outline: none;
}

#app {
  --primary-bg-color: #2d2d2d;
  --primary-border-color: #101010;
  --primary-button-color: #000000;
  --primary-font-color: #ffffff;

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
  align-items: stretch;
}

.content-section {
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
}

.content-section .aside-menu {
  min-width: 15rem;
  background-color: brown;
}

.content-section .main-content {
  flex-grow: 1;
}

.footer-section {
  min-height: 6rem;
  background-color: yellowgreen;
}
</style>
