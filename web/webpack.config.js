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

module.exports = (argv) => {
  return {
    entry: ["core-js/stable", "regenerator-runtime/runtime", path.resolve(appDirectory, "index.web.ts")],

    output: {
      clean: true,
      publicPath: "/",
      path: path.resolve(appDirectory, "build/web"),
      filename: "[name].[chunkhash].js",
      sourceMapFilename: "[name].[chunkhash].map",
      chunkFilename: "[id].[chunkhash].js",
    },

    module: {
      rules: [babelLoaderConfiguration, imageLoaderConfiguration],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(appDirectory, "web/index.html"),
      }),
      new CopyPlugin({
        patterns: [{ from: path.resolve(appDirectory, "web/public"), to: "" }],
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        __DEV__: argv.mode !== "production" || true,
        process: { env: {} },
      }),
    ],

    resolve: {
      alias: {
        "react-native$": "react-native-web",
        "react-native-svg": "react-native-svg-web",
      },
      extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".web.jsx", ".web.js", ".jsx", ".js"],
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "initial",
          },
        },
      },
    },

    devServer: {
      port: 8080,
      historyApiFallback: {
        index: "/",
        "**/*": "/index.html",
      },
    },
  };
};
