const webpackbar = require('webpackbar');
const CracoLessPlugin = require("craco-less");
const path = require('path');


module.exports = {
    webpack: {
        plugins: {
            add: [
                new webpackbar()
            ]
        },
        alias: {
            "@": path.join(__dirname, 'src')
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true
                    }
                },
                // modifyLessRule: function () {
                //     return {
                //         test: /\.module\.less$/,
                //         exclude: /node_modules/,
                //         use: [
                //             { loader: 'style-loader' },
                //             {
                //                 loader: 'css-loader',
                //                 options: {
                //                     modules: {
                //                         localIdentName: '[local]_[hash:base64:6]',
                //                     },
                //                 },
                //             },
                //             { loader: 'less-loader' },
                //         ],
                //     };
                // }
            }
        }
    ],
    style:{
        postcss:{
            mode:'file'
        }
    }
}

