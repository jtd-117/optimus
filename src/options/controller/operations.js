/**
 * @file operations.js
 * @description An enumeration of options CONTROLLER operations represented as strings
 */
const optionsOps = Object.freeze({
    TIMER_S: "set-timer-settings",
    TIMER_G: "get-timer-settings",

    BLOCK_S: "set-blocking-settings",
    BLOCK_G: "get-blocking-settings",

    EXPORT: "export-settings",
    IMPORT: "import-settings",
    RESET: "total-reset",
});

export default optionsOps;
