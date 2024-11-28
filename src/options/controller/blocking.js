/**
 * @file blocking.js
 * @description A collection of website blocking CONTROLLER functions for options.js
 */

import * as msg from "../../scripts/messaging";
import operations from "../../scripts/operations";


/**
 * @description Checks if a website's domain and path is valid
 * @param {string} website a string representing the website's domain and path
 * @returns {Boolean} `true` if website is valid, `false` otherwise
 */
const validateWebsite = (website) => {
    const pattern = /^((?!www\.)[a-z0-9-]+\.)+[a-z0-9]{2,6}(\/[^\s]*)?$/i;
    return pattern.test(website);
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
    validateWebsite,
    getSettings,
    setSettings,
};
