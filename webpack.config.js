const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: [
		'./index.js',
		// 'webpack/hot/dev-server.js',
		// 'webpack-dev-server/client/index.js?hot=true',
	],
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
			template: 'dist/index.html'
		}),
		// Plugin for hot module replacement
		// new webpack.HotModuleReplacementPlugin(),
	],
}