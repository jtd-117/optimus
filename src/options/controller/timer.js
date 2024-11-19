/**
 * @file timer.js
 * @description A collection of session timer CONTROLLER functions for options.js
 */

import * as msg from "../../scripts/messaging";
import operations from "../../scripts/operations";

import * as ems from "../utils/elements";

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
 * @description Sends a request to background.js to GET session timer settings
 * @returns {Promise<Object>} An object of the timer data if GET operation was successful, `null` otherwise 
 */
const getSettings = async () => {
    const [response, error] = await msg.sendMessage(operations.TIMER_G, true, null);
    if (error || response.status === false) {
        console.error(`Failed to ${operations.TIMER_G} from background.js.`, error);
        return null;
    }
    return response;
};

/**
 * @description Sends a request to background.js to SET session timer settings
 * @param {Object} newTimerSettings The new timer settings to send to background.js
 * @returns {Promise<Boolean>} `true` if the SET operation was successful, `false` otherwise
 */
const setSettings = async (newTimerSettings) => {
    const [response, error] = await msg.sendMessage(operations.TIMER_S, true, newTimerSettings);
    if (error || response.status === false) {
        console.error(`Failed to ${operations.TIMER_S} in background.js.`, error);
    }
    return response.status;
};

export {
    validateEditValues,
    getSettings,
    setSettings,
};
