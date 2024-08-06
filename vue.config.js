const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/vue-todo",
  outputDir: "dist",
  transpileDependencies: true
})
