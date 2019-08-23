const path = require("path");
const webpack = require("webpack");

module.exports = {

	entry: {
		modules: [
		"react",
		"react-dom",
		"react-router-dom",
		"md5"
		]
	},
	mode:"production",

	output: {
		path: path.resolve( __dirname , "dist/" ),
		filename: "js/[name].[hash].dll.js",
		library: "[name]"
	},
	plugins: [
		new webpack.DllPlugin({
			name: "[name]",
			path: path.join(__dirname, "[name]-manifest.json")
		})
	]
}

//	npx  webpack --entry ./index.js --output ./bundle.js
// webpack por defecto cuando escribo nppc webpack ejecuta este archivo