const webpack = require('webpack')

module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                }
            },
        },
    },
    publicPath: "./",
    devServer: {
        port: 9090
    },
    chainWebpack: config => {
        config.module
            .rule("pdf")
            .test(/\.pdf$/)
            .use("file-loader")
            .loader("file-loader");

        // config.plugins.store.delete('prefetch-app');
        // config.plugins.store.delete('preload-app');
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    }
}