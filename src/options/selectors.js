/**
 * @file selectors.js
 * @description An enumeration of selector strings used in options.html
 */

/**
 * @description An enum of IDs used in the options.html
 */
const ids = Object.freeze({

    // Session Timer
    TIMER_D: "timer-display",

    TIMER_E: "timer-edit",
    TIMER_E_F: "timer-edit-form",
    TIMER_E_HH: "timer-edit-hours",
    TIMER_E_MM: "timer-edit-minutes",
    TIMER_E_SS: "timer-edit-seconds",
    TIMER_E_W: "timer-edit-warning",
    TIMER_E_S: "timer-edit-submit",
    TIMER_E_C: "timer-edit-cancel",

    TIMER_R: "timer-reset",
    TIMER_R_F: "timer-reset-form",
    TIMER_R_S: "timer-reset-submit",
    TIMER_R_C: "timer-reset-cancel",

    // Website Blocking
    BLOCK_L: "block-list",

    BLOCK_E: "block-edit",
    BLOCK_E_F: "block-edit-form",
    BLOCK_E_S: "block-edit-submit",
    BLOCK_E_C: "block-edit-cancel",

    BLOCK_R: "block-reset",
    BLOCK_R_F: "block-reset-form",
    BLOCK_R_S: "block-reset-submit",
    BLOCK_R_C: "block-reset-cancel",

    // Settings Transfer
    EXPORT_S: "export-submit",
    IMPORT_S: "import-submit",
    SETTINGS_TR: "total-reset",

    // Miscellaneous
    NAV_BTNS: "nav-btns",
});

export default ids;
