export default {
  client: {
    test: /\.(mov|mp4)$/,
    loader: 'file-loader',
    options: {
      name: 'assets/video/[name].[ext]',
    },
  },
  server: {
    test: /\.(mov|mp4)$/,
    loader: 'null-loader',
  },
};
