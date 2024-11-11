/**
 * @file background.js
 * @description The backend of the Chrome extension that has access to Chrome APIs.
 */

import { optionsOps } from "../options/controller";
import * as stg from "./storage";

const clientFiles = Object.freeze({
    CONTENT: "content.js",
    POPUP: "popup.html",
    OPTIONS: "options.html",
});

chrome.runtime.onInstalled.addListener(async () => {
    const initStatus = await stg.initSettings();
    if (initStatus === null) {
        console.error("Failed to save `defaultSettingsTemplate` in `chrome.storage.local`");
    }
});

chrome.runtime.onMessage.addListener(async (message, sender) => {

    // Only ACCEPT messages from Optimus extension components
    const optimusId = chrome.runtime.id;
    if (sender.id === optimusId) {
        
        // Message from content.js
        if (sender.url && sender.url.includes(clientFiles.CONTENT)) {

            console.log(`Message from ${clientFiles.CONTENT}`);
        }
        // Message from popup.html
        if (sender.url && sender.url.includes(clientFiles.POPUP)) {

            console.log(`Message from ${clientFiles.POPUP}`);
        }
        // Message from options.html
        if (sender.url && sender.url.includes(clientFiles.OPTIONS)) {
            
            if (message.operation === optionsOps.TIMER_S) {
                const updateStatus = await stg.setSessionTimerSettings(message.data);
                if (updateStatus === false) {
                    console.error(console.error(`Failed to update ${key} settings in 'chrome.storage.local'`));
                }
            }
        }
    }
});

/* NOTE: Need to update FRONTEND of options.js and popup.js upon storage change
chrome.storage.onChanged.addListener((changes, namespace) => {

});
*/
