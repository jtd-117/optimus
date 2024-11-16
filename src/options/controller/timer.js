/**
 * @file timer.js
 * @description A collection of session timer CONTROLLER functions for options.js
 */

import sendMessage from "../../scripts/messaging";

import * as ems from "../utils/elements";

import optionsOps from "./operations";

/**
 * @description Ensures that sessionn timer settings does not have zero values for hours, minutes and seconds
 * @returns {Boolean} `true` if the timer valid, `false` otherwise
 */
const validateEditValues = () => {
    const hours = ems.getTimerElements().editHours.value
    const minutes = ems.getTimerElements().editMinutes.value;
    const seconds = ems.getTimerElements().editSeconds.value;

    if ((+hours === 0 && +minutes === 0 && +seconds === 0) || (hours === '' || minutes === '' || seconds === '') || 
        (+hours > 23 || +hours < 0) || (+minutes > 59 || +minutes < 0) || (+seconds > 59 || +seconds < 0)) {
        return false;
    }
    return true;
};

/**
 * @description HELPER - Sends a request to the background.js to perform an `operation` on session timer settings
 * @param {optionsOps.TIMER_S|optionsOps.TIMER_G} operation Either GET or SET session timer settings
 * @returns {Boolean} `true` if the `operation` request reaches background.js, `false` otherwise
 */
const requestSettings = async (operation, data) => {
    const [, error] = await sendMessage(operation, data);
    if (error) {
        console.error(`Failed to ${operation} in background.js`, error);
        return false;
    }
    return true;
};

/**
 * @description Sends a request to background.js to GET session timer settings
 * @returns {Boolean} `true` if the GET operation request reached background.js, `false` otherwise
 */
const getSettings = async () => {
    return await requestSettings(optionsOps.TIMER_G, null);
};

/**
 * @description Sends a request to background.js to SET session timer settings
 * @param {Object} newTimerSettings The new timer settings to send to background.js
 * @returns {Boolean} `true` if the SET operation request reached background.js, `false` otherwise
 */
const setSettings = async (newTimerSettings) => {
    return await requestSettings(optionsOps.TIMER_S, newTimerSettings);
};

export {
    validateEditValues,
    getSettings,
    setSettings,
};
