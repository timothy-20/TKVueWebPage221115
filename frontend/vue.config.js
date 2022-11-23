const path = require("path")
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        "@router": path.resolve(__dirname, "src/router/"),
        "@store": path.resolve(__dirname, "src/store/"),
        "@layouts": path.resolve(__dirname, "src/router/layouts/"),
        "@views": path.resolve(__dirname, "src/router/views/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@assets": path.resolve(__dirname, "src/assets/"),
      }
    }
  },
  transpileDependencies: true,
  lintOnSave: false
})
