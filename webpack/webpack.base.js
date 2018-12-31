const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ForkTSPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const context = path.resolve(__dirname, '../');
const devMode = process.argv.indexOf('--production') < 0;
const hash = devMode ? '[hash:8]' : '[chunkhash:8]';

module.exports = {
	context: context,
	entry: {
		'main': './ts/main.ts'
	},
	output: {
		path: path.join(__dirname, '../dist/'),
		filename: `js/[name]-${hash}.js`,
		sourceMapFilename: 'js/[name].map',
		chunkFilename: `[name]-${hash}.js`
	},
	resolve: {
		extensions: [
			'.ts', '.tsx', '.js'
		]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'src/[name]-[hash:8].[ext]'
				}
			},
			{
				test: /\.txt$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(le|c)ss$/,
				use: [
					devMode ? {
						loader: 'style-loader',
						options: {sourceMap: devMode ? true : false}
					} : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: devMode ? true : false,
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: devMode ? true : false
						}
					},
					{
						loader: 'less-loader',
						options: {
							sourceMap: devMode ? true : false
						}
					}
				],
			}

		]
	},
	externals: {

	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
			chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
		}),
		new webpack.NamedChunksPlugin(),
		/* new webpack.DllReferencePlugin({
			context,
			//@ts-ignore
			manifest: require('../dist/manifest.json')
		}), */
		new ForkTSPlugin(),
		new CleanPlugin('../dist'),
		new HtmlWebpackPlugin({
			title: 'Web TS',
			template: './index.html',
			favicon: './src/favicon.ico'
		})
	]
}