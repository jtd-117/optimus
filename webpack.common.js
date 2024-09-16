const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    // Each root-level JS file may have different dependency graphs
    entry: {
        main: "./src/main.js",
    },

    // Refers to the compiled `dist` directory
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    // Allows 3rd party software (e.g. HTML, ESLint, etc...) to integrate with Webpack
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/main.html",
            filename: "main.html",
            chunks: ["main"],
        }),

        new CopyWebpackPlugin({
            patterns: [{ from: "src/manifest.json", to: "" }],
        }),
    ],

    // Tells Webpack how to process types of files (i.e. modules) to make them recognisable
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                        ],
                    },
                },
            },
        ],
    },
};
