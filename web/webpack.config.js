const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const appDirectory = path.resolve(__dirname, "../");

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
      presets: [
        // "module:@react-native/babel-preset",
        [
          "@babel/preset-env",
          {
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
      plugins: [
        "react-native-web",
        "@babel/plugin-transform-export-namespace-from",
        "react-native-reanimated/plugin",
        "@babel/plugin-transform-class-properties",
        "@babel/plugin-transform-private-methods",
        "@babel/plugin-transform-private-property-in-object",
      ],
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
  entry: ["core-js/stable", "regenerator-runtime/runtime", path.resolve(appDirectory, "index.web.ts")],

  output: {
    filename: "bundle.web.js",
    path: path.resolve(appDirectory, "build"),
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
