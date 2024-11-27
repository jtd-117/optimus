/**
 * @file selectors.js
 * @description An enumeration of selector strings for use within `options` directory
 */

/**
 * @description A collection of session timer strings IDs
 */
const timerIds = Object.freeze({
    DISPLAY: "timer-display",

    EDIT: "timer-edit",
    EDIT_HH: "timer-edit-hours",
    EDIT_MM: "timer-edit-minutes",
    EDIT_SS: "timer-edit-seconds",
    EDIT_W: "timer-edit-warning",
    EDIT_S: "timer-edit-submit",
    EDIT_C: "timer-edit-cancel",

    RESET: "timer-reset",
    RESET_S: "timer-reset-submit",
    RESET_C: "timer-reset-cancel",
});

/**
 * @description A collection of website blocking strings IDs
 */
const blockingIds = Object.freeze({
    LIST: "block-list",

    EDIT: "block-edit",
    EDIT_TA: "block-list-edit",
    EDIT_S: "block-edit-submit",
    EDIT_C: "block-edit-cancel",

    RESET: "block-reset",
    RESET_S: "block-reset-submit",
    RESET_C: "block-reset-cancel",
});

/**
 * @description A collection of transfer settings strings IDs
 */
const transferIds = Object.freeze({
    EXPORT: "export-submit",
    IMPORT: "import-cancel",
    RESET: "total-reset",
});

/**
 * @description A collection of other strings IDs
 */
const otherSelectors = Object.freeze({
    NAV_BTNS: "nav-btns",
    ARTICLES: "main section.options#content article",
});

export {
    timerIds,
    blockingIds,
    transferIds,
    otherSelectors,
};
