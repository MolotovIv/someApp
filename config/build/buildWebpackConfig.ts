import webpack from 'webpack';
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildWebpackDevServer';


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options;

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
		plugins: buildPlugins(options),
	}
}