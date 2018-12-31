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
	mode: 'production'
}

module.exports = merge(base, prod);