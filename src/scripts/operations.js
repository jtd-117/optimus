/**
 * @file operations.js
 * @description An enumeration of the types of message requests sent to background.js
 */
const operations = Object.freeze({
    TIMER_A: "activate-timer",
    TIMER_G: "get-timer-settings",
    TIMER_S: "set-timer-settings",

    BLOCK_G: "get-block-settings",
    BLOCK_S: "set-block-settings",

    EXPORT: "export-settings",
    IMPORT: "import-settings",
    RESET: "total-reset",
});

export default operations;
