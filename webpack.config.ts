import webpack from 'webpack';
import { buildWebpackConfig } from './config/buildWebpackConfig';
import { BuildMode, BuildPaths, EnvOptions } from './config/types/config';
import path from 'path';

module.exports = (env: EnvOptions) => {
  const mode: BuildMode = env.mode || 'development';
  const port: number = env.port || 3000;

  const isDev: boolean = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
