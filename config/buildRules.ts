import webpack from 'webpack'

export function buildRules(): webpack.RuleSetRule[] {
    const typeScriptLoaders = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        typeScriptLoaders,
    ]
}