/**
 * @file messaging.js
 * @description Provides logic for Chrome extension files to communicvate with each other
 * @link {https://developer.chrome.com/docs/extensions/develop/concepts/messaging}
 */

import asyncWrapper from "./async-wrapper";

/**
 * @description HELPER - Makes a message object used by the sender
 * @param {string} opName The name of the operation to be sent to the target component
 * @param {Object} opData (optional) Any necessary data needed to perform `opName`
 * @returns {Object} The message to be sent via the chrome.runtime API
 */
const makeMessage = (opName, opData = {}) => {
    return {
        operation: opName,
        data: opData,
    };
};

/**
 * @description Sends a message to another Chrome extension component
 * @param {string} opName The name of the operation to be sent to the target component
 * @param {Object} opData (optional) Any necessary data needed to perform `opName`
 * @returns {[Promise, Error]} A response, if any, sent by the target component
 * @link {https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendMessage}
 */
const sendMessage = async (opName, opData) => {
    const message = makeMessage(opName, opData);
    return await asyncWrapper(chrome.runtime.sendMessage(message));
};

export default sendMessage;
