var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './demo/app.js',
  output: {
    path: path.resolve(__dirname, '../public/app/js'),
    publicPath: '/',
    filename: 'app.js'
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  module: {
    rules: [
      {
        test: /\.sсss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: 'vue-svg-loader',
        include: path.resolve('./src/assets/svg'),
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: 'url-loader?limit=100000&name=[name].[ext]',
        exclude: path.resolve('./src/assets/svg'),
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
      index: '/dev/index.html',
    },
    overlay: {
      warnings: true,
      errors: true
    },
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map'
}
