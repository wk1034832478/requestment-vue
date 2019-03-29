
console.log( '正在生成配置。。。' )

module.exports = {
      //4.所有webpack的devServer的选项都支持
  devServer : {
    proxy : {
      '/api' : {
        target : 'http://localhost:8088/api',
        ws : true,
        changeOrigin : true,
        pathRewrite: {
            '^/api': ''
          }
      }
    }
  }
}