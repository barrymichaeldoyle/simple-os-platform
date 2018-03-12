const webpack = require('webpack');

const path = require('path');
// eslint-disable-next-line no-undef
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

// eslint-disable-next-line no-undef
module.exports = {
  entry: {
    app: './lib/index.js',
  },

  resolve: {
    extensions: ['.jsx', '.js'],
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /^(?!.*\.test\.jsx?$).*\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV),
        NODE_ENV: JSON.stringify(ENV),
      },
    }),
  ],

  output: {
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, '/build/'),
    filename: 'index.js',
    library: 'ipf-helpers',
    libraryTarget: 'umd'
  },

  optimization: {
    minimize: true,
  },
};
