module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "@babel/plugin-transform-export-namespace-from",
    "react-native-reanimated/plugin",
  ],
};
