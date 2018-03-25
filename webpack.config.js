const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  /**
   * mode can be "development" or "production"
   * "development" tells Webpack that we want fast incremental builds, easy code
   *   debugging and other development features
   * "production" tells that we want small JS file with optimized code
   */
  mode: env,

  /**
   * Entry is the head of our dependency graph
   */
  entry: { app: path.resolve('./src/index.jsx') },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/',
  },

  /**
   * Type of source mpas
   */
  devtool: 'cheap-module-source-maps',

  resolve: {
    /**
     * This array contains extensions which we can omit when importing a file
     */
    extensions: ['.js', '.jsx'],
  },

  /**
   * module section tells Webpack how to transform something into JS
   * in this case we want to transform JSX to JS so we use Babel for that
   */
  module: {
    rules: [{
      /**
       * If our file matches this RegExp that this rule is applied for file loading
       */
      test: /\.jsx?$/,
      /**
       * We don't want to transform code which is located in node_modules
       * because it is already transformed by library authors
       */
      exclude: /node_modules/,
      /**
       * Array of loaders used for transforming our file into JS
       */
      use: [{
        /**
         * babel-loader transform file using Babel
         */
        loader: 'babel-loader',
        options: {
          /**
           * Tells Babel to cache our results for faster builds
           */
          cacheDirectory: true,
        },
      }],
    }, {
      /**
       * rule for loading CSS files
       */
      test: /\.css$/,
      use: [
        /**
         * style-loader inserts our styles into <style> tag in the HTML head
         * for production we want to extract our styles into separate file
         * for that reason we use MiniCssExtractPlugin
         */
        (env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader),
        /**
         * css-loader converts CSS files into JS files containing styles
         */
        'css-loader',
      ],
    }, {
      /**
       * role for loading images
       * when you import some image in your code webpack returns a path to that image
       *
       * Example:
       *
       * import img from './logo.png';
       * const MyComponent = () => <img src={img} />;
       */
      test: /\.(png|jpe?g|gif|svg)/,
      use: [
        {
          /**
           * url-loader loads files as strings in Base64,
           * read about Base64 https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
           */
          loader: 'url-loader',
          options: {
            /**
             * When files size is >= 8192 bytes the file won't be loaded as base64, but as
             * a regular file
             */
            limit: 8192,
          },
        },
      ],
    }],
  },

  plugins: [
    /**
     * Webpack doesn't know how to work with HTML so we use HtmlWebpackPlugin to inject our JS code
     * into HTML
     */
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].css',
    }),
  ],

  /**
   * Options for webpack-dev-server
   */
  devServer: {
    /**
     * Server files from public directory
     */
    contentBase: path.resolve('./public'),
    /**
     * Open the browser when webpack-dev-server starts
     */
    open: true,
  },
};
