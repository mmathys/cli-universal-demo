const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './src/server.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
   externals: [nodeExternals({
     whitelist: [
       /^@angular\/material/,
       /^@ngx-translate\/core/
     ]
   })],
  node: {
    __dirname: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
