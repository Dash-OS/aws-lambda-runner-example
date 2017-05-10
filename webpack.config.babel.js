// NOTE: paths are relative to each functions folder
import path from 'path';
import Webpack from 'webpack';

// Resolves folders with /{name}/{name}.js first then falls back to /{name}/index.js
import { factory as componentResolver } from 'component-webpack-resolver-plugin'
// Reduce lodash size generally by 90% or more (depends on how many functions used).
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

export default {
  entry: [
    // included instead of polyfill to reduce build size
    'regenerator-runtime/runtime',
    // relative to each functions directory
    './src/index.js',
  ],
  target: 'async-node',
  output: {
    path: path.join(process.cwd(), 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    modules: [
      // Allows us to use the "shared" directory to resolve our common / shared code
      // similar -- exactly how node_modules is resolved.  
      'shared',
      'node_modules',
    ],
    // Allow us to import a folder and have it look for the matching filename
    // for example
    // import Component from 'shared/components/MyComponent' would find
    // shared/components/MyComponent/MyComponent.js
    plugins: [
      componentResolver('existing-directory', 'undescribed-raw-file')
    ],
  },
  externals: ['aws-sdk'],
  module: {
    rules: [
      {
        test:     /\.js$/,
        exclude: /node_modules/,
        use:     [ {
          loader: 'babel-loader' ,
          options: {
            // Don't use the babelrc file!
            babelrc: false,
            presets: [
              'stage-0',
              // Setup for TreeShaking
              ['env', {
                modules: false,
              }],
            ],
            plugins: [
              'lodash'
            ]
          }
        } ],
      },
    ],
  },
  plugins: [
    new Webpack.NoEmitOnErrorsPlugin(),
    new LodashModuleReplacementPlugin,
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new Webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      sourceMap: false,
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
  ],
}