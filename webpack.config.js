const path = require('path');

module.exports = [
  {
    context: path.join( __dirname, '/' ),
    entry: {
      'flickr': path.resolve(__dirname, 'src/app/flickr/src/index.js')
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'src/app/flickr/assets/js'),
      library: '[name]'
    },
    //resolve: {
      //// Add `.ts` and `.tsx` as a resolvable extension.
      //extensions: ['.ts', '.tsx', '.js', '.scss']
    //},  
    //module: {
      //rules: [
        //{ 
          //test: /\.tsx?$/, 
          //use: [
            //{
              //loader: 'ts-loader'
            //}
          //]
        //},
        //{ 
          //test: /\.scss$/, 
          //// loaders: ['style-loader', 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader', 'sass-loader']
          //loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        //},
        //{ 
          //test: /\.css$/, 
          //// loaders: ['style-loader', 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss-loader', 'sass-loader']
          //loaders: ['style-loader', 'css-loader', 'postcss-loader']
        //}
      //]
    //}
  }
]
