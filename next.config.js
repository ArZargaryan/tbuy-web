/** @type {import("next").NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tbuy.run", "tbuy.am"] // временные домены для теста
  },
  trailingSlash: true,
  i18n,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    const prefix = config.assetPrefix ?? config.basePath ?? "";
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]"
          }
        }
      ]
    });

    return config;
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
