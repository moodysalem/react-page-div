var webpack = require('webpack');

module.exports = {
    entry: "./index.js",

    output: {
        path: "./dist",
        filename: "ReactPageDiv.js",
        library: "ReactPageDiv",
        libraryTarget: "umd"
    },

    externals: {
        'react': {commonjs: 'react', commonjs2: 'react', amd: 'react', root: 'React'}
    }
};