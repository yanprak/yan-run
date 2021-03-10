module.exports = {
  client: {
    test: /\.s[ac]ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
  server: {
    test: /\.s[ac]ss$/,
    loader: 'null-loader',
  },
};
