const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

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
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
					}]
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
			{
				test: /.\/src\/images\/icons\/.*\.svg$/,
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {
							extract: true,
							outputPath: 'images/sprite/',
							publicPath: 'images/sprite/',
						}
					},
					'svg-transform-loader',
					'svgo-loader'
				]
			}
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
		...buildHTML(['index', 'branch', 'people', 'leaf', 'faq', 'search-result']),
		// new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
		new SpriteLoaderPlugin(),
	]
};

function buildHTML(list) {
    const arr = [];
    for (let i = 0; i < list.length; i++) {
        arr.push(
          new HtmlWebpackPlugin({
              filename: `${list[i]}.html`,
              template: path.resolve(__dirname, 'src/html', `${list[i]}.html`),
              minify: {
                  collapseWhitespace: false
              },
          })
        );
    }
    return arr;
}