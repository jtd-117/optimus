/**
 * @file elements.js
 * @description A collection of HTML elements for use within the `options` directory
 */

import * as slr from "./selectors";

/**
 * @description Generates an object of session timer elements
 */
const getTimerElements = () => ({
    display: document.getElementById(slr.timerIds.DISPLAY),

    edit: document.getElementById(slr.timerIds.EDIT),
    editForm: document.getElementById(slr.timerIds.EDIT_F),
    editHours: document.getElementById(slr.timerIds.EDIT_HH),
    editMinutes: document.getElementById(slr.timerIds.EDIT_MM),
    editSeconds: document.getElementById(slr.timerIds.EDIT_SS),
    editWarning: document.getElementById(slr.timerIds.EDIT_W),
    editSubmit: document.getElementById(slr.timerIds.EDIT_S),
    editCancel: document.getElementById(slr.timerIds.EDIT_C),

    reset: document.getElementById(slr.timerIds.RESET),
    resetForm: document.getElementById(slr.timerIds.RESET_F),
    resetSubmit: document.getElementById(slr.timerIds.RESET_S),
    resetCancel: document.getElementById(slr.timerIds.RESET_C),
});

/**
 * @description Generates an object of website blocking elements
 */
const getBlockingElements = () => ({
    list: document.getElementById(slr.blockingIds.LIST),

    edit: document.getElementById(slr.blockingIds.EDIT),
    editForm: document.getElementById(slr.blockingIds.EDIT_F),
    editSubmit: document.getElementById(slr.blockingIds.EDIT_S),
    editCancel: document.getElementById(slr.blockingIds.EDIT_C),

    reset: document.getElementById(slr.blockingIds.RESET),
    resetForm: document.getElementById(slr.blockingIds.RESET_F),
    resetSubmit: document.getElementById(slr.blockingIds.RESET_S),
    resetCancel: document.getElementById(slr.blockingIds.RESET_C),
});

/**
 * @description Generates an object of transfer settings elements
 */
const getTransferElements = () => ({
    export: document.getElementById(slr.transferIds.EXPORT),
    import: document.getElementById(slr.transferIds.IMPORT),
    totalReset: document.getElementById(slr.transferIds.RESET),
});

/**
 * @description Generates an object of other elements
 */
const getOtherElements = () => ({
    navBtns: document.getElementById(slr.otherSelectors.NAV_BTNS).querySelectorAll("button"),
    articles: document.querySelectorAll(slr.otherSelectors.ARTICLES),
});

export {
    getTimerElements,
    getBlockingElements,
    getTransferElements,
    getOtherElements,
};
