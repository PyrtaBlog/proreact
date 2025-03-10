import { WebpackConfiguration } from 'webpack-dev-server';

export type BuildMode = 'production' | 'development';

export interface EnvOptions {
    mode: BuildMode
    port: number
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number
}

