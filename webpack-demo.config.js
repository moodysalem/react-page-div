const webpack = require('webpack');

module.exports = {
  entry: "./demo.jsx",

  output: {
    path: "./dist",
    filename: "Demo.js"
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
    'react': 'React',
    'react-dom': 'ReactDOM',
    'draft-js': 'Draft',
    'immutable': 'Immutable',
    'jspdf': 'jsPDF'
  }
};