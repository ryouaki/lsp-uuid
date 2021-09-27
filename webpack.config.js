const path = require('path')

module.exports = (env) => {
  const plugins = [];

  return {
    entry: {
      "lsp-uuid": './index.js'
    },
    mode: 'production',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'lsp-uuid.umd.js',
      libraryTarget: 'umd',
      library: 'LspUUID'
    },
    target: ['web', 'es5'],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: plugins
  }
}