module.exports = {
  client: {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      outputPath: 'assets/images',
    },
  },
  server: {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'null-loader',
  },
};
