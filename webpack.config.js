var path = require('path');
module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js'
  },
  // assumes all JavaScript files you edit will be in src/javascripts
  // when importing from src/javascripts/<file>.js, only need to specify as <file>
  resolve: {
    root: path.resolve('./src/js'), // must be absolute path
    extensions: ['', '.js']
  },
  devtool: 'source-map', // source maps to ease debugging
  module: {
    loaders: [
      {
        // pre-process every *.js file (except for ones in
        // node_modules/) with Babel:
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader', // auto-refreshes browser
          // invokes Babel to translate React and ES6
          'babel-loader?cacheDirectory&presets[]=react&presets[]=es2015'
        ]
      },
    ]
  }
};
