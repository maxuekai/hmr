const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		// clean: true,
	},
	devServer: {
		// contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    compress: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: './dist/index.html'
		}),
	],
}