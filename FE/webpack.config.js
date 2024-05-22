const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
  },
  resolve: {
    extensions: [".ts", ".js", ".wasm"],
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: "webassembly/async",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  experiments: {
    asyncWebAssembly: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/app/some-component/some-component.module.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"],
    }),
  ],
};
