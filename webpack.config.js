module.exports= {
  entry: [
    './src/index.js'
  ],
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
   },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
              query: {
                  presets: ['react', 'es2015','stage-1']       
              }
    }
    ,{ test: /\.css$/, loader: 'style-loader!css-loader'}]
  }
}