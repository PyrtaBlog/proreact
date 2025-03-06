import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config';

export function buildPlugins({ paths }: BuildOptions) {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].[contenthash:5].css",
      chunkFilename: "[id].css",
      
    }),
  ];
}
