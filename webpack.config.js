const webpack = require('webpack');

module.exports = {
  entry: "./index.jsx",

  output: {
    path: "./dist",
    filename: "ReactPageDiv.js",
    library: "ReactPageDiv",
    libraryTarget: "umd"
  },

  module: {
    loaders: [
      {
        test: /\.(jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel' // 'babel-loader' is also a legal name to reference
      }
    ]
  },

  externals: {
    'react': { commonjs: 'react', commonjs2: 'react', amd: 'react', root: 'React' }
  }
};