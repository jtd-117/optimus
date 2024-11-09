/**
 * @file operations.js
 * @description Implements logic for options.js operatons.
 */

import asyncWrapper from "../scripts/utils";

/**
 * @description An enumeration for options messaging operations
 */
const msgOps = Object.freeze({
    TIMER_S: "set-timer-settings",
    TIMER_G: "get-timer-settings",
    TIMER_R: "reset-timer-settings",

    BLOCK_S: "set-blocking-settings",
    BLOCK_G: "get-blocking-settings",
    BLOCK_R: "reset-blocking-settings",

    EXPORT: "export-settings",
    IMPORT: "import-settings",
    TOTAL_R: "total-reset",
});

export {
    msgOps,
}
