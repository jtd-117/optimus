/**
 * @file controller.js
 * @description Updates storage in background.js and user interface in option.html
 */

import ids from "./selectors";
import asyncWrapper from "../scripts/utils";
import * as msg from "../scripts/messaging";

/**
 * @description An enumeration for options messaging operations
 */
const optionsOps = Object.freeze({
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

/**
 * @description Ensures that timer settings does not have zero values for hours, minutes and seconds
 * @returns {Boolean} `true` if the timer valid, `false` otherwise
 */
const validateTimerFormValues = () => {
    const hh = document.getElementById(ids.TIMER_HH).value;
    const mm = document.getElementById(ids.TIMER_MM).value;
    const ss = document.getElementById(ids.TIMER_SS).value;

    if ((+hh === 0 && +mm === 0 && +ss === 0) || (hh === '' || mm === '' || ss === '') || 
        (+hh > 23 || +hh < 0) || (+mm > 59 || +mm < 0) || (+ss > 59 || +ss < 0)) {
        return false;
    }
    return true;
};

/**
 * @description Sends a request to background.js to update timer settings
 * @returns {Boolean} `true` if background.js successfully changed timer settings, `false` otherwise
 */
const setTimerSettingsRequest = async () => {
    const hh = document.getElementById(ids.TIMER_HH).value;
    const mm = document.getElementById(ids.TIMER_MM).value;
    const ss = document.getElementById(ids.TIMER_SS).value;
    const data = {
        hours: hh,
        minutes: mm,
        seconds: ss,
    };
    const [, error] = await asyncWrapper(msg.sendMessage(optionsOps.TIMER_S, data));
    if (error) {
        console.error(`Failed to ${optionsOps.TIMER_S} in background.js`, error);
        return false;
    }
    return true;
};

export {
    optionsOps,
    validateTimerFormValues,
    setTimerSettingsRequest,
};
