const path = require('path');
/* eslint-disable */
module.exports = {
  mode: 'production',
  entry: [
    'babel-polyfill',
    './src/editor_index'
  ],
  devtool: 'eval-source-map',
  output: {
    publicPath: "",
    filename: 'bundle.js',
    clean: true,
  },
  externals: {
  },
  resolve: {
    extensions: [ '.js', '.json' ],
  },
  plugins: [],
  module: {
    rules: [
      { 
        test: /\.(js|jsx|es6)$/, 
        exclude: /node_modules(?![\\|/](macguffin|mc_))/, 
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {}],
            ],
            plugins: [
              "@babel/plugin-transform-modules-commonjs",
            ]
          },
        }]
      },
    ],
    parser: {
      javascript: {
        exportsPresence: false,
      },
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
    watchFiles: ['src/**/*.js'],
    hot: false,
    port: 9000,
    open: ['/editor'],
  }
}