/**
 * @file operations.js
 * @description Implements logic for options.js operatons.
 */

import ids from "./selectors";
import asyncWrapper from "../scripts/utils";
import * as msg from "../scripts/messaging";

/**
 * @description An enumeration for options messaging operations
 */
const msgOps = Object.freeze({
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
 * @description Sends a request to background.js to update timer settings
 * @returns {Boolean} `true` if background.js successfully changed timer settings, `false` otherwise
 */
const setTimerSettings = async () => {
    const hh = document.getElementById(ids.TIMER_HH).value;
    const mm = document.getElementById(ids.TIMER_MM).value;
    const ss = document.getElementById(ids.TIMER_SS).value;
    const data = {
        hours: hh,
        minutes: mm,
        seconds: ss,
    };
    const [, error] = await asyncWrapper(msg.sendMessage(msgOps.TIMER_S, data));
    if (error) {
        console.error(`Failed to ${msgOps.TIMER_S} in background.js`);
        return false;
    }
    return true;
};

export {
    msgOps,
    setTimerSettings,
};
