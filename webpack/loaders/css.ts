import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  client: {
    test: /\.s[ac]ss$/,
    use: [
      // 'style-loader',
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
  server: {
    test: /\.s[ac]ss$/,
    loader: 'null-loader',
  },
};
