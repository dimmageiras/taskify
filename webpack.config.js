const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		path: __dirname + "/public/",
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: [".ts", ".tsx", ".js", ".json"],
				},
				use: "ts-loader",
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	resolve: {
		alias: {
			components: __dirname + "/src/components/",
			models: __dirname + "/src/models/",
		},
	},
};
