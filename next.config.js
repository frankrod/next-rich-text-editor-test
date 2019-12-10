const withCSS = require("@zeit/next-css");
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  [
    withCSS,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: "[name]__[local]___[hash:base64:5]"
      }
    }
  ],
  [withTM, { transpileModules: ["react-rte"] }]
]);
