const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {

	entry: {
		app: path.resolve( __dirname, "src/index.js" ),
	},
	mode:"production",

	optimization: {
    minimizer: [
    	new TerserPlugin(),
    	new OptimizeCssAssetsPlugin()
    ]
  },

	output: {
		path: path.resolve( __dirname , "dist/" ),
		filename: "js/[name].[hash].js",
		publicPath: "http://localhost:3001/",
		chunkFilename: "js/[id].[chunkhash].js "
	},
	module: {

		rules: [

			{
				test: /\.css$/,
				use: [ 

					{
						loader: MiniCssExtractPlugin.loader 
					},
					
					"css-loader"
				]
			},
				/*Css Preprocessor END
		------------------------*/
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 50000, //limit bites of size
						name: "[hash].[ext]",
						outputPath: "assets"
					}				
				}	
			},
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [

		new MiniCssExtractPlugin({
			filename: "css/[name].[hash].css",
			chunkFilename: "css/[id].[hash].css"
		}),	

		new HtmlWebpackPlugin({
			minify: {
				collapseWhitespace: true
			},
			template:  path.resolve( __dirname, "public/index.html" )	
		}),

		new webpack.DllReferencePlugin({

			manifest: require("./modules-manifest.json")
		}),

		new AddAssetHtmlPlugin({ 
		 	filepath: path.resolve( __dirname, './dist/js/*.dll.js'),
		 	outputPath: "js",
		 	publicPath: "http://localhost:3001/js" 
		}),

		new CleanWebpackPlugin()
	]
}

//	npx  webpack --entry ./index.js --output ./bundle.js
// webpack por defecto cuando escribo nppc webpack ejecuta este archivo