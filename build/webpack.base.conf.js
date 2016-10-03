var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack');

var src = path.resolve(__dirname, '../src'); // 源码目录
var commonPath = {
    dist: path.resolve(__dirname, '../dist'), // build 后输出目录
    indexHTML: path.join(src, 'index.html'), // 入口基页
    staticDir: path.resolve(__dirname, '../static') // 无需处理的静态资源目录
};

module.exports = {
    commonPath: commonPath,
    entry: {
        app: path.join(src, 'app.js'),
        'babel-polyfill': 'babel-polyfill',
        // // 框架 / 类库 单独打包
        // vendor: [
        //
        // ]
    },
    externals: {
        'jquery': 'jQuery',
        'lodash': '_',
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'vue-resource': 'VueResource',

    },
    output: {
        path: path.join(commonPath.dist, 'static'),
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.less'],
        alias: {
            // 自定义路径别名
            components: path.join(src, 'components'),
            services: path.join(src, 'services'),
            views: path.join(src, 'views'),
            store: path.join(src, 'store'),
            assets: path.join(src, 'assets'),
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract("style", "css")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style", "css", "less")
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.(eot|woff|woff2|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
        }]
    },
    vue: {
        loaders: {
            js: 'babel',
            less: 'vue-style!css!less',
            sass: 'vue-style!css!sass'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'mainifest']
        }),
        new webpack.DefinePlugin({
            // 配置开发全局常量
            __DEV__: process.env.NODE_ENV.trim() === 'development',
            __PROD__: process.env.NODE_ENV.trim() === 'production'
        })
    ]
};
