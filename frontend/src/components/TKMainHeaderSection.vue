<template>
  <div id="root">
    <div class="header-wrapper">
      <header class="header-content">
        <div class="logo-wrapper">
          <div class="logo-content">
            <a class="logo" href="#">
              <span class="logo-text">
                <p class="logo-text top-text">TIMOTHY</p>
                <p class="logo-text bottom-text">-20</p>
              </span>
              <div class="logo-bar-image" />
            </a>

          </div>
        </div>

        <div class="navigation-wrapper">
          <ul class="navigation">
            <li>Home</li>
            <li>Untitled</li>
            <li>Untitled</li>
            <li>Untitled</li>
          </ul>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "TKMainHeaderSection",
  props: {

  }
}
</script>

<style scoped>
* {
  text-decoration: none;
}

#root {
  width: 100%;
  border-bottom: 1px solid var(--primary-border-color);
  background-color: var(--primary-bg-color);
}

.header-wrapper {
  height: 100%;
  margin: 0 2rem;
  display: flex;
}

.header-content {
  max-width: 1440px;
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 1rem;
}

.header-content > div {
  height: 100%;
}

.header-content .logo-wrapper {
  flex-grow: 1;
  display: flex;
}

.logo-content {
  width: 5rem;
  height: 5rem;
  margin-left: 0;
  display: flex;
  background-color: var(--primary-button-color, black);
}

.logo-content a.logo {
  width: 100%;
  margin: 0.6rem 0.4rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  overflow: hidden;
}

.logo-text {
  font-family: NotoSansKR-Black;
  font-size: 14px;
  text-align: left;
  color: var(--primary-font-color);
}

.logo-text .bottom-text {
  font-size: 15px;
}

.logo-bar-image {
  width: 50%;
  height: 0.3rem;
  margin-left: 0;
  background-color: red;
}






.header-content .navigation-wrapper {
  background-color: blue;

}

</style>