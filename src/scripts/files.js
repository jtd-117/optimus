/**
 * @file files.js
 * @description An enumeration of key Chrome extension files.
 */

/**
 * @description A collection of the Chrome extension's HTML files
 * @see {manifest.json} at `default_popup` and `options_page` keys
 */
const markup = Object.freeze({
    PP: "popup.html",
    OS: "options.html",
});

/**
 * @description A collection of the Chrome extension's JavaScript files
 * @see {webpack.common.js} at the `entry` key
 */
const scripts = Object.freeze({
    CT: "content.js",
    PP: "popup.js",
    OS: "options.js",
    BD: "background.js",
});

export {
    markup,
    scripts,
}
