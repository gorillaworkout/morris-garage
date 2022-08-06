const { defineConfig } = require('@vue/cli-service')
// const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(csv|xlsx|xls|pdf)$/,
          loader: 'file-loader',
          options: {
            name: `files/[name].[ext]`
          }
        }
      ],
     },
  },
})
