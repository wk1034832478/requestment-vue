
console.log( '正在生成配置。。。' )

module.exports = {
    build: {
        env: {NODE_ENV: '"production"'},
        // index: path.resolve(__dirname, '../happyfri/index.html'),
        // assetsRoot: path.resolve(__dirname, '../happyfri'),
        // assetsSubDirectory: 'static',
        // assetsPublicPath: '/happyfri/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {NODE_ENV: '"development"'},
        port: 8081,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: { 
            '/api': {  //使用"/api"来代替"http://f.apiplus.c" 
              target: 'http://localhost:8088/', //源地址 
              changeOrigin: true, //改变源
              pathRewrite: { 
                '^/api': '/' //路径重写 
                } 
            } 
        },          
        context: [ //代理路径

        ],
        proxypath: 'https://mainsite-restapi.ele.me',
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}