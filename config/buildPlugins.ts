import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import { BuildOptions } from "./types/config"

export function buildPlugins({paths}: BuildOptions) {
    return [new HtmlWebpackPlugin({
        template: paths.html
      })]
}