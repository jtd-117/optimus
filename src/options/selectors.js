/**
 * @file selectors.js
 * @description An enumeration of selector strings used in options.html
 */

/**
 * @description An enum of IDs used in the options.html
 */
const ids = Object.freeze({

    TIMER_D: "timer-display",
    TIMER_E: "timer-edit",
    TIMER_F: "timer-form",
    TIMER_F_HH: "timer-form-hours",
    TIMER_F_MM: "timer-form-minutes",
    TIMER_F_SS: "timer-form-seconds",
    TIMER_F_W: "timer-form-warning",
    TIMER_F_S: "timer-form-submit",
    TIMER_F_C: "timer-form-cancel",
    TIMER_R: "timer-reset",

    BLOCK_L: "block-list",
    BLOCK_E: "block-edit",
    BLOCK_F: "block-form",
    BLOCK_F_S: "block-form-submit",
    BLOCK_F_C: "block-form-cancel",
    BLOCK_R: "block-reset",

    EXPORT_S: "export-submit",
    IMPORT_S: "import-submit",
    SETTINGS_TR: "total-reset",

    NAV_BTNS: "nav-btns",
});

export default ids;
