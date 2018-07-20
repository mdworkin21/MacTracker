module.exports = {
  entry: './client', // assumes your entry point is the index.js in the root of your project folder
  mode: 'development',
  output: {
    path: __dirname + '/public', // assumes your bundle.js will also be in the root of your project folder
    filename: 'bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
}