module.exports = {
  entry: './src/components/app.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: './public',
    inline: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        secure: false
      }
    }
  },
  module: {
    loaders: [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel', // 'babel-loader' is also a valid name to reference
    query: {
      presets: ['es2015', 'react']
    }
  }
]
}
}
