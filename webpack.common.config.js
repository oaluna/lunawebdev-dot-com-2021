const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
//  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//  const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
 module.exports = {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
     }),
    //  new MiniCssExtractPlugin({
    //    filename: 'main.css',
    //    chunkFileName: 'main.398422d4.chunk.css'

    //  }),
     optimization: {
    //   minimizer: [
    //     For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
    //      `...`,
    //   ],
    // },
    //  new CssMinimizerPlugin({

    //  })
   ],
   output: {
    //  filename: '[name].bundle.js',
    //  path: path.resolve(__dirname, 'dist'),
    //  clean: true,
   },
 };