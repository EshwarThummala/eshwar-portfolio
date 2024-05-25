const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/media/', // or a custom directory as needed
          publicPath: '/_next/static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};


module.exports = nextConfig;
