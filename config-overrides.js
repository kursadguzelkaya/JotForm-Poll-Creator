const {
  override,
  addWebpackAlias,
  // addBundleVisualizer,
} = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    react: 'preact/compat',
    'react-dom': 'preact/compat',
  }),
  // addBundleVisualizer(),
);
