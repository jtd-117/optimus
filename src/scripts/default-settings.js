/**
 * @file default-settings.js
 * @description Provides a template for the extension's default settings
 */

/**
 * @description An enumeration of keys for accessing `defaultSettings`
 */
const settingsKeys = Object.freeze({
    STATUS: "activeStatus",
    TIMER: "timer",
    TIMER_HH: "hours",
    TIMER_MM: "minutes",
    TIMER_SS: "seconds",
    BLOCK: "blocking",
})

/**
 * @description Provides the keys and initial data for the extension's settings
 */
const defaultSettings = {
    activeStatus: false,
    timer: {
        hours: 0,
        minutes: 25,
        seconds: 0,
    },
    blocking: [],
};

export {
    settingsKeys,
    defaultSettings,
};
