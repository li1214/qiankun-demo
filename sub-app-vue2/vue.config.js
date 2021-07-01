const {name} = require('./package.json');

module.exports = {
  devServer:{
    port:7002,
    host: 'localhost',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack:{
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  }
}