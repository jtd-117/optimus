/**
 * @file options-selectors.js
 * @description Stores the string enums for HTML classes and IDs in options.html
 */

export { ids };

/**
 * @description An enum of IDs used in the options.html
 */
const ids = Object.freeze({
    TIMER_E: "timer-edit",
    TIMER_S: "timer-submit",
    TIMER_C: "timer-cancel",
    TIMER_F: "timer-form",

    TIMER_HH: "timer-hours",
    TIMER_MM: "timer-minutes",
    TIMER_SS: "timer-seconds",

    BLOCK_E: "block-edit",
    BLOCK_S: "block-submit",
    BLOCK_C: "block-cancel",
    BLOCK_F: "block-form",

    EXPORT_S: "export-submit",
    IMPORT_S: "import-submit",
});
