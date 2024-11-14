/**
 * @file controller.js
 * @description Updates storage in background.js and user interface in option.html
 */

import ids from "./selectors";
import * as msg from "../scripts/messaging";

/**
 * @description An enumeration for options messaging operations
 */
const optionsOps = Object.freeze({
    TIMER_S: "set-timer-settings",
    TIMER_G: "get-timer-settings",

    BLOCK_S: "set-blocking-settings",
    BLOCK_G: "get-blocking-settings",

    EXPORT: "export-settings",
    IMPORT: "import-settings",
    SETTINGS_TR: "total-reset",
});

/**
 * @description Ensures that timer settings does not have zero values for hours, minutes and seconds
 * @returns {Boolean} `true` if the timer valid, `false` otherwise
 */
const validateTimerFormValues = () => {
    const hh = document.getElementById(ids.TIMER_E_HH).value;
    const mm = document.getElementById(ids.TIMER_E_MM).value;
    const ss = document.getElementById(ids.TIMER_E_SS).value;

    if ((+hh === 0 && +mm === 0 && +ss === 0) || (hh === '' || mm === '' || ss === '') || 
        (+hh > 23 || +hh < 0) || (+mm > 59 || +mm < 0) || (+ss > 59 || +ss < 0)) {
        return false;
    }
    return true;
};

/**
 * @description Sends a request to background.js to get timer settings
 * @returns {Boolean} `true` if background.js sends timer settings, `false` otherwise
 */
const getTimerSettingsRequest = async () => {
    const [, error] = await msg.sendMessage(optionsOps.TIMER_G, null);
    if (error) {
        console.error(`Failed to ${optionsOps.TIMER_G} in background.js`, error);
        return false;
    }
    return true;
}

/**
 * @description Sends a request to background.js to update timer settings
 * @param {Object} data the new timer settings with fields hours, minutes and seconds 
 * @returns {Boolean} `true` if background.js successfully changed timer settings, `false` otherwise
 */
const setTimerSettingsRequest = async (data) => {
    const [, error] = await msg.sendMessage(optionsOps.TIMER_S, data);
    if (error) {
        console.error(`Failed to ${optionsOps.TIMER_S} in background.js`, error);
        return false;
    }
    return true;
};

export {
    optionsOps,
    validateTimerFormValues,
    getTimerSettingsRequest,
    setTimerSettingsRequest,
};
