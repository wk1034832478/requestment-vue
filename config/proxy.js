module.exports = {
    proxy: {
          '/api': {    //将www.exaple.com印射为/apis
              target: 'https://localhost:8082',  // 接口域名
              secure: false,  // 如果是https接口，需要配置这个参数
              changeOrigin: true,  //是否跨域
              pathRewrite: {
                  '^/api': ''   // 代替target里面的地址
              }              
          }
    }
  }