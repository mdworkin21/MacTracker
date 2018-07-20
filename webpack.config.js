module.exports = {
  entry: "./client",
  mode: "development",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
        options: {
            presets: ['react', 'es2015']
        }
      },
    ]
  }
};