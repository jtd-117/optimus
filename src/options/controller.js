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
    const hours = document.getElementById(ids.TIMER_HH);
    const minutes = document.getElementById(ids.TIMER_MM);
    const seconds = document.getElementById(ids.TIMER_SS);
    const warningMessage = document.getElementById(ids.TIMER_FW);

    if (Number(hours.value) === 0 && Number(minutes.value) === 0 && Number(seconds.value) === 0) {
        warningMessage.style.display = "inline";
        [hours, minutes, seconds].forEach((unit) => {
            unit.style.borderColor = "#ff0000";
        });
        return false;
    }
    warningMessage.style.display = "none";
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
