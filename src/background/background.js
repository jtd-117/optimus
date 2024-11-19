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
        
        // CASE 1: Timer ACTIVATE

        // CASE 2: Timer GET
        if (message.operation === operations.TIMER_G) {
            rps.getTimerResponse(sendResponse);

        // CASE 3: Timer SET
        } else if (message.operation === operations.TIMER_S) {
            rps.setTimerResponse(sendResponse, message.data);

        // CASE 4: Block GET   
        }
        // CASE 5: Block SET

        // CASE 6: Export Settings

        // CASE 7: Import Settings

        // CASE 8: Total Settings Reset

    }
    // Indicate that chrome.runtime.onMessage is asynchronous
    return true;
});
