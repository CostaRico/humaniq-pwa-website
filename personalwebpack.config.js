import path from 'path'
import webpack from 'webpack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'

process.noDeprecation = true
const sourcePath = path.join(__dirname, './personalsrc');

export default {
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  entry:  [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './personalsrc/index.js'
  ],
  output: {
    path: path.join(process.cwd(), 'static', 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnWarning: false,
          failOnError: true
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: path.resolve(process.cwd(), "./personalsrc"),
          }
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            includePaths: path.resolve(__dirname, "./personalsrc"),
          }
        }
        ]
      }
    ]
  }
}