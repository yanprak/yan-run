export default {
  client: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
  server: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
};
