const path = require('path')
const WebpackObfuscator = require('webpack-obfuscator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DefinePlugin = require('webpack').DefinePlugin

const timestamp = + Date.now()

let config = {
    mode: 'development',
    entry: './src/Game.js',
    output: {
        filename: 'cpforever.js',
        path: path.resolve(__dirname, 'assets/scripts/client')
    },
    optimization : {
        minimize: false
    },
    devServer: {
        static: {
            directory: path.join(__dirname),
            publicPath: '/'
        },
        devMiddleware: {
            writeToDisk: true
        },
        proxy: {
            '/world/login': {
                target: 'http://localhost:6111',
                pathRewrite: { '^/world/login': '' },
                ws: true
            },

            '/world/blizzard': {
                target: 'http://localhost:6112',
                pathRewrite: { '^/world/blizzard': '' },
                ws: true
            },

            '/world/snowball': {
                target: 'http://localhost:6113',
                pathRewrite: { '^/world/snowball': '' },
                ws: true
            },

            '/create/scripts/php': 'http://localhost:80'
        },
        host: 'localhost',
        port: 8080,
        hot: false
    },
    resolve: {
        alias: {
            '@engine': path.resolve(__dirname, 'src/engine'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@components': path.resolve(__dirname, 'src/scenes/components'),
            '@rooms': path.resolve(__dirname, 'src/scenes/rooms'),
            '@games': path.resolve(__dirname, 'src/scenes/games'),
            '@igloos': path.resolve(__dirname, 'src/scenes/igloos'),
            '@parties': path.resolve(__dirname, 'src/scenes/parties')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            TIMESTAMP: timestamp
        })
    ]
}

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.output.filename = 'cpforever.min.js'
        config.optimization.minimize = true

        if (env.obfuscate === 'true') {
            config.plugins.push(
                new WebpackObfuscator({
                    rotateStringArray: true,
                    reservedStrings: ['\s*']
                }, []),
                new HtmlWebpackPlugin({
                    filename: 'index.html',
                    inject: false,
                    template: 'index.ejs',
                    templateParameters: {
                        timestamp: timestamp
                    }
                }),
            )
        }
    }

    return config
}
