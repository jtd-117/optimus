/**
 * @file operations.js
 * @description An enumeration of the types of message requests sent to background.js
 */
const operations = Object.freeze({
    STATUS_G: "active-status-get",
    STATUS_S: "active-status-set",

    TIMER_G: "get-timer-settings",
    TIMER_S: "set-timer-settings",

    BLOCK_G: "get-block-settings",
    BLOCK_S: "set-block-settings",

    EXPORT: "export-settings",
    IMPORT: "import-settings",
    RESET: "total-reset",
});

export default operations;
