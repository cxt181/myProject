const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
});


css: {
  loaderOptions: {
    sass: {
      additionalData:  // 8版本用prependData:
          `
          @import "@/styles/variables.scss";  // scss文件地址
          @import "@/styles/mixin.scss";     // scss文件地址
        `
    }
  }
}
