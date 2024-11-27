const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const appDirectory = path.resolve(__dirname, "../");
const babelConfig = path.resolve(appDirectory, "babel.conrequirefig.js");

const babelLoaderConfiguration = {
  test: /\.(tsx|ts|jsx|js)?$/,
  include: [
    path.resolve(appDirectory, "index.web.ts"),
    path.resolve(appDirectory, "src"),
    path.resolve(appDirectory, "node_modules/react-native-uncompiled"),
  ],
  use: {
    loader: "babel-loader",
    options: {
      cacheDirectory: true,
      presets: babelConfig.presets,
      plugins: ["react-native-web", ...(babelConfig.plugins || [])],
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: "url-loader",
    options: {
      name: "[name].[ext]",
      esModule: false,
    },
  },
};

module.exports = {
  entry: [path.resolve(appDirectory, "index.web.ts")],

  output: {
    filename: "bundle.web.js",
    path: path.resolve(appDirectory, "dist"),
  },

  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(appDirectory, "web/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [{ from: path.resolve(appDirectory, "web/public"), to: "" }],
    }),
  ],

  resolve: {
    alias: {
      "react-native$": "react-native-web",
    },
    extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".web.jsx", ".web.js", ".jsx", ".js"],
  },
};
