/**
 * @file selectors.js
 * @description An enumeration of selector strings used in popup.html
 */

/**
 * @description An enum of IDs used in the popup.html
 */
const ids = Object.freeze({
    SETTINGS: "settings",
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

export { 
    ids, 
    classes,
};
