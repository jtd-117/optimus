/**
 * @file background.js
 * @description The backend of the Chrome extension that has access to Chrome APIs.
 */

import operations from "../scripts/operations";

import * as stg from "./storage";
import * as rps from "./responses";

chrome.runtime.onInstalled.addListener(async () => {
    await stg.initSettings();
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    // Only ACCEPT messages from Optimus extension components
    if (sender.id === chrome.runtime.id && sender.url) {
        
        // CASE 1: activeStatus GET
        if (message.operation === operations.STATUS_G) {
            console.log(`Operation received: ${operations.STATUS_G}`);

        // CASE 2: activeStatus SET
        } else if (message.operation === operations.STATUS_S) {
            console.log(`Operation received: ${operations.STATUS_S}`);

        // CASE 3: Timer GET
        } else if (message.operation === operations.TIMER_G) {
            rps.getTimerResponse(sendResponse);

        // CASE 4: Timer SET
        } else if (message.operation === operations.TIMER_S) {
            rps.setTimerResponse(sendResponse, message.data);

        // CASE 5: Block GET   
        } else if (message.operation === operations.BLOCK_G) {
            rps.getBlockListResponse(sendResponse);

        // CASE 6: Block SET
        } else if (message.operation === operations.BLOCK_S) {
            rps.setBlockListResponse(sendResponse, message.data);

        // CASE 7: Export Settings
        } else if (message.operation === operations.EXPORT) {
            console.log(`Operation received: ${operations.EXPORT}`);

        // CASE 8: Import Settings
        } else if (message.operation === operations.IMPORT) {
            console.log(`Operation received: ${operations.IMPORT}`);

        // CASE 9: Total Settings Reset
        } else if (message.operation === operations.RESET) {
            console.log(`Operation received: ${operations.RESET}`);
        }
    }
    // Indicate that chrome.runtime.onMessage is asynchronous
    return true;
});
