/**
 * @file popup-selectors.js
 * @description Stores the string enums for HTML classes and IDs in popup.html
 */

export { ids, classes };

/**
 * @description An enum of IDs used in the popup.html
 */
const ids = Object.freeze({
    CLOSE: "close",
    REPLAY: "replay",
    PLAY: "play",
    PAUSE: "pause",

    TIMER_D: "timer-display",
    BLOCK_D: "block-display",
});

/**
 * @description An enum of classes used in the popup.html
 */
const classes = Object.freeze({
    TIMER: "timer",
    MANUAL: "manual",
    BLOCK: "block",
});
