const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // Fixed path to your entry file
  output: {
    path: path.resolve(__dirname, "static/frontend"),
    filename: "[name].js",
  },
    module: {
    rules: [
        {
        test: /\.js$/, // Apply to all JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
            loader: "babel-loader", // Use Babel loader
            options: {
            presets: [
                "@babel/preset-env", // Transpile modern JavaScript
                "@babel/preset-react" // Transpile React JSX
            ],
            },
        },
        },
    ],
    },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"), // Ensure consistent NODE_ENV value
      },
    }),
  ],
  mode: "development",
  watch: true,
};