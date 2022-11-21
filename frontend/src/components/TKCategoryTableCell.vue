<template>
  <div id="root">
    <div class="cell-wrapper">
      <div class="category-label">
        <div class="category-title">
          <svg class="chevron-icon"
               xmlns="http://www.w3.org/2000/svg"
               xml:space="preserve"
               x="0px" y="0px"
               viewBox="0 0 512.001 512.001"
               style="enable-background:new 0 0 512.001 512.001;">
            <path d="M388.819,239.537L156.092,6.816c-9.087-9.089-23.824-9.089-32.912,0.002
	c-9.087,9.089-9.087,23.824,0.002,32.912l216.27,216.266L123.179,472.272c-9.087,9.089-9.087,23.824,0.002,32.912
	c4.543,4.544,10.499,6.816,16.455,6.816c5.956,0,11.913-2.271,16.457-6.817L388.819,272.45c4.366-4.364,6.817-10.283,6.817-16.455
	C395.636,249.822,393.185,243.902,388.819,239.537z"/>
          </svg>
          <span>Untitled</span>
        </div>

        <div class="button-container">
          <button class="add-children" type="button" v-on:click="select($event)">
            <svg class="plus-icon"
                 xmlns="http://www.w3.org/2000/svg"
                 xml:space="preserve"
                 x="0px" y="0px"
                 viewBox="0 0 455 455"
                 style="enable-background:new 0 0 455 455;">
              <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5
	455,242.5 "/>
            </svg>
          </button>
        </div>
      </div>

      <div class="category-content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TKCategoryTableCell",
  methods: {
    select: function (event) {
      const targetClass = event.currentTarget.class;
      console.log(event);
      console.log(targetClass);
    }
  }
}
</script>

<style scoped src="./TKCategoryTableCell.css" />