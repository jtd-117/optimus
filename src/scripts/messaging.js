/**
 * @file messaging.js
 * @description Provides logic for Chrome extension files to communicvate with each other
 * @link {https://developer.chrome.com/docs/extensions/develop/concepts/messaging}
 */

import asyncWrapper from "./utils";

/**
 * @description Makes a message object
 * @param {string} opName The name of the operation to be sent to the target file
 * @param {Object} opData (optional) Any necessary data needed to perform `opName`
 * @returns {Object} The message to be sent via the chrome.runtime API
 */
const makeMessage = (opName, opData = {}) => {
    return {
        operation: opName,
        ...opData,
    };
}

export {
    makeMessage,
};
