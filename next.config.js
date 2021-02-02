const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/Shadowhusky/shadowhusky.github.io/IOT-Project-Website/"
    : "",
});
