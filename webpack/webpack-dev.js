let webpack = require('webpack');
let path = require('path');
let base = require('./webpack.base');
const merge = require('webpack-merge');

const dev = {
	devtool: 'source-map',
	devServer: {
		hot: true,
		open: true,
		historyApiFallback: true,
		lazy: false,
		port: 8082,
		inline: true,
		contentBase: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: []
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

//@ts-ignore
module.exports = merge(base, dev);