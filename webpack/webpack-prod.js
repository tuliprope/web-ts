let webpack = require('webpack');
let path = require('path');
let base = require('./webpack.base');
const merge = require('webpack-merge');

const prod = {
	module: {
		rules: []
	},
	plugins: [

	],
	devtool: 'source-map'
}

module.exports = merge(base, prod);