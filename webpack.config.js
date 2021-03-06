const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
              test: /\.(png|jpg|gif|mp4)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {},
                },
              ],
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['eslint-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    resolve: {
      alias: {
        reducers: path.resolve(__dirname, 'src/reducers'),
        actions: path.resolve(__dirname, 'src/actions'),
        components: path.resolve(__dirname, 'src/components'),
        sagas: path.resolve(__dirname, 'src/sagas'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        selectors: path.resolve(__dirname, 'src/selectors')
      }
    }
}
