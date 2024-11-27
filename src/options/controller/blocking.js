/**
 * @file blocking.js
 * @description A collection of website blocking CONTROLLER functions for options.js
 */

import * as msg from "../../scripts/messaging";
import operations from "../../scripts/operations";

/**
 * @description Checks if a given string is a valid regex pattern
 * @param {string} str A string of the url to check the validity of
 * @returns {Boolean} `true` is the url is valid, `false` otherwise
 */
const isValidRegex = (str) => {
    try {
        new RegExp(str);
        return true;
    } catch (_) {
        return false;
    }
};

/**
 * @description Sends a request to background.js to GET website blocking settings
 * @returns {Promise<Array<string>>} An array of strings where each string represents a blocked website
 */
const getSettings = async () => {
    const [response, error] = await msg.sendMessage(operations.BLOCK_G, true, null);
    if (error || response.status === false) {
        console.error(`Failed to ${operations.BLOCK_G} from background.js.`, error);
        return null;
    }
    return response;
};

/**
 * @description Sends a request to background.js to SET website blocking settings
 * @param {Array<string>} newBlockSettings The new website blocking settings to send to background.js
 * @returns {Promise<Boolean>} `true` if the SET operation was successful, `false` otherwise
 */
const setSettings = async (newBlockSettings) => {
    const [response, error] = await msg.sendMessage(operations.BLOCK_S, true, newBlockSettings);
    if (error || response.status === false) {
        console.error(`Failed to ${operations.BLOCK_S} in background.js.`, error);
    }
    return response.status;
};

export {
    isValidRegex,
    getSettings,
    setSettings,
};
