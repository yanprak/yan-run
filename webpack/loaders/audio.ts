export default {
  client: {
    test: /\.mp3$/,
    loader: 'file-loader',
    options: {
      name: 'assets/audio/[name].[ext]',
    },
  },
  server: {
    test: /\.mp3$/,
    loader: 'null-loader',
  },
};
