const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "node_modules/bootstrap/scss/bootstrap";
          @import "node_modules/bootstrap-vue/src/index.scss";
          @import "@/assets/scss/common/variables.scss";
          @import "@/assets/scss/common/mixins.scss";
        `,
      },
    },
  },
};
