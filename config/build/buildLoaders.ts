import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders(OPTIONS: BuildOptions): webpack.RuleSetRule[] {

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			OPTIONS.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: "[path][name]__[local]--[hash:base64:5]",
					}
				},
			},
			"sass-loader",
		],
	}

	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		typeScriptLoader, cssLoader,
	]
}