const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    // Configurations specific for development
    mode: "development",

    // Helps Debugging
    devtool: "inline-source-map",
});
