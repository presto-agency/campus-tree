const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'fonts/[name][ext]',
	},
	module: {
		rules: [
			/* JavaScript */
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			/* Styles */
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: '' },
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'],
			},
			/* Images */
			{
				test: /\.(gif|png|jpe?g|svg|jpg|webp)$/i,
				type: 'asset',
			},
			/* Fonts */
			{
				test: /\.(woff(2)?|eot|ttf|otf|)$/,
				type: 'asset/resource',
			},
		],
	},
	// mode: 'development',
	devServer: {
		historyApiFallback: true,
		static: path.resolve(__dirname, './dist'),
		open: false,
		compress: false,
		hot: true,
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/html/index.html'),
			filename: 'index.html',
			minify: {
				collapseWhitespace: false,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			},
		}),
		// new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	]
};