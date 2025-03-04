import { buildPlugins } from './buildPlugins';
import { buildRules } from './buildRules';
import { buildResolver } from './buildResolvers';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: buildRules(),
    },
    resolve: buildResolver(),
    plugins: buildPlugins(options),
  };
}
