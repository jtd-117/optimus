/**
 * @file responses.js
 * @description Handles asynchronous response operations from messages sent by background.js client files
 * @link {https://stackoverflow.com/questions/48107746/chrome-extension-message-not-sending-response-undefined}
 */

import * as msg from "../scripts/messaging";
import operations from "../scripts/operations";

import * as stg from "./storage";

/**
 * @description Sends session timer settings back to requesting file
 * @param {Callback} sendResponse The parameter callback part of chrome.runtime.onMessage
 */
const getTimerResponse = async (sendResponse) => {
    const timerData = await stg.getSessionTimerSettings();
    const opName = operations.TIMER_G;
    if (timerData === null) {
        sendResponse(msg.makeMessage(opName, false, timerData));
    } else {
        sendResponse(msg.makeMessage(opName, true, timerData));
    }
};

/**
 * @description Sends a boolean back to the file requesting to update session timer settings
 * @param {Callback} sendResponse The parameter callback part of chrome.runtime.onMessage
 * @param {Object} data Updated session timer data
 */
const setTimerResponse = async (sendResponse, data) => {
    const setStatus = await stg.setSessionTimerSettings(data);
    const opName = operations.TIMER_S;
    if (setStatus === false) {
        sendResponse(msg.makeMessage(opName, false, null));
    } else {
        sendResponse(msg.makeMessage(opName, true, null));
    }
};

/**
 * @description Sends website blocking settings back to requesting file
 * @param {Callback} sendResponse The parameter callback part of chrome.runtime.onMessage
 */
const getBlockListResponse = async (sendResponse) => {
    const blockList = await stg.getWebsiteBlockingSettings();
    const opName = operations.BLOCK_G;
    if (blockList === null) {
        sendResponse(msg.makeMessage(opName, false, blockList));
    } else {
        sendResponse(msg.makeMessage(opName, true, blockList));
    }
};

/**
 * @description Sends a boolean back to the file requesting to update the block list
 * @param {Callback} sendResponse The parameter callback part of chrome.runtime.onMessage
 * @param {Object} data Updated block list
 */
const setBlockListResponse = async (sendResponse, data) => {
    const setStatus = await stg.setWebsiteBlockingSettings(data);
    const opName = operations.BLOCK_S;
    if (setStatus === false) {
        sendResponse(msg.makeMessage(opName, false, null));
    } else {
        sendResponse(msg.makeMessage(opName, true, null));
    }
};

export {
    getTimerResponse,
    setTimerResponse,
    
    getBlockListResponse,
    setBlockListResponse,
};
