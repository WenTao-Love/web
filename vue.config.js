module.exports = {
    publicPath: './', //process.env.NODE_ENV === 'production'?'/vue/user/':'/',
    //outputDir:'dist',
    assetsDir: 'v2dist/',
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack: {
        //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
        resolve: {
            symlinks: false
        }
    },
    transpileDependencies: [
        '@coreui/utils',
        '@coreui/vue'
    ],

    devServer: {
        host: '0.0.0.0', // 允许外部ip访问
        disableHostCheck: true, //允许外网
        port: 8080, // 端口
        https: false, // 启用https
        proxy: {
            '/jjenkins/api': {
                target: 'http://localhost:8030',
                changeOrigin: true,
                secure: false,
                /* pathRewrite: {
                  '^/api': '/api'
                } */
            }
        }
    }
}