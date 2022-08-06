const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir:'public/files/gt_brosur.pdf',
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
})
