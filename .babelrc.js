module.exports = {
  presets: [
    /**
     * @babel/preset-env with disabled modules so Webpack can track the dependencies
     */
    ['@babel/env', {
      modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
      targets: {
        browsers: ['last 2 versions', 'ie >= 11'],
      },
      shippedProposals: true,
      useBuiltIns: 'entry',
    }],
    /**
     * @babel/preset-react for transforming JSX into React.createElement
     */
    '@babel/react',
  ],
  /**
   * Plugin for using class properties syntax
   */
  plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel'],
}
