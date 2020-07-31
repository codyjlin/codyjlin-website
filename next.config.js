const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");
const withOptimizedImages = require("next-optimized-images");

module.exports = withPlugins([[withSass], [withOptimizedImages]], {
	webpack(config, options) {
		config.resolve.modules.push(path.resolve("./"));
		return config;
	},
});
