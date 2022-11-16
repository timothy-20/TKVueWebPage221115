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
          <nav class="main-navigation">
            <ul class="navigation">
              <li><button class="home-menu" type="button">Home</button></li>
              <li><button class="board-menu" type="button">Board</button></li>
              <li><button class="profile-menu" type="button">Profile</button></li>
            </ul>
          </nav>
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

<style scoped src="./TKMainHeaderSection.css" />