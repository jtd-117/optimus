const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    // Each root-level JS file may have different dependency graphs
    entry: {
        background: "./src/background/background.js",
        content: "./src/content/content.js",
        options: "./src/options/options.js",
        popup: "./src/popup/popup.js",
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
            template: "./src/options/options.html",
            filename: "options.html",
            chunks: ["options"],
        }),

        new HtmlWebpackPlugin({
            template: "./src/popup/popup.html",
            filename: "popup.html",
            chunks: ["popup"],
        }),

        new CopyWebpackPlugin({
            patterns: [{ from: "./src/manifest.json", to: "" }],
        }),

        new CopyWebpackPlugin({
            patterns: [{ from: "./src/assets", to: "assets" }],
        }),
    ],

    // Tells Webpack how to process types of files (i.e. modules) to make them recognisable
    module: {
        rules: [
            // Process CSS files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Process SCSS files
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
