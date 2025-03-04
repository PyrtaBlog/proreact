import webpack from 'webpack';
import { buildWebpackConfig } from './config/buildWebpackConfig';
import { BuildMode, BuildPaths } from './config/types/config';
import path from 'path';

const mode: BuildMode = 'development'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths
});

export default config;
