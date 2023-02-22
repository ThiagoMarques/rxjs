
const path = require('path');
module.exports = {
  /* Arquivo inicial index.ts */
  entry: {
    /* Modificação para aceitar mais de um arquivo */
    index: ['./src/index.ts']
  },
  module: {
    /* Toda vez que houver um arquivo TSX, usar o ts-loader com exceção dos arquivos node_modules */
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  /* Todo arquivo .tsx ou .ts será passado para .js */
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    /* O name é buscado de "entry" - no caso, o primeiro "index"*/
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
};