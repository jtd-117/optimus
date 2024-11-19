/**
 * @file messaging.js
 * @description Provides logic for Chrome extension files to communicvate with each other
 * @link {https://developer.chrome.com/docs/extensions/develop/concepts/messaging}
 */

import asyncWrapper from "./async-wrapper";

/**
 * @description HELPER - Makes a message object used by the sender
 * @param {string} opName The name of the operation to be sent to the target component
 * @param {Boolean} opStatus (optional) `true` if the operation was sucessful, `false` otherwise
 * @param {Object} opData (optional) Any necessary data needed to perform `opName`
 * @returns {Object} The message to be sent via the chrome.runtime API
 */
const makeMessage = (opName, opStatus = true, opData = null) => {
    return {
        operation: opName,
        status: opStatus,
        data: opData,
    };
};

/**
 * @description Sends a message to another Chrome extension component
 * @param {string} opName The name of the operation to be sent to the target component
 * @param {Boolean} opStatus (optional) `true` if the operation was sucessful, `false` otherwise
 * @param {Object} opData (optional) Any necessary data needed to perform `opName`
 * @returns {[Promise, Error]} A response, if any, sent by the target component
 * @link {https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendMessage}
 */
const sendMessage = async (opName, opStatus = true, opData = null) => {
    const message = makeMessage(opName, opStatus, opData);
    return await asyncWrapper(chrome.runtime.sendMessage(message));
};

export {
    makeMessage,
    sendMessage,
};
