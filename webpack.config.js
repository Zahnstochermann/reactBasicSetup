var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, 'build'),
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
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!resolve-url!sass?sourceMap')
      },
      {
            // ASSET LOADER
            // Reference: https://github.com/webpack/file-loader
            // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
            // Rename the file using the asset hash
            // Pass along the updated reference to your code
            // You can add here any file extension you want to get copied to your output
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }
    ]
  },
  plugins: [
        new ExtractTextPlugin('bundle.css', {allChunks: true})
  ]
};
