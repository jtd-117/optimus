/**
 * @file background.js
 * @description The backend of the Chrome extension that has access to Chrome APIs.
 */

import optionsOps from "../options/controller/operations";
import sendMessage from "../scripts/messaging";
import * as files from "../scripts/files";

import * as stg from "./storage";

chrome.runtime.onInstalled.addListener(async () => {
    const initStatus = await stg.initSettings();
});


chrome.runtime.onMessage.addListener(async (message, sender) => {

    // Only ACCEPT messages from Optimus extension components
    const optimusId = chrome.runtime.id;
    if (sender.id === optimusId && sender.url) {
        
        // CASE 1: Message from content.js
        if (sender.url.includes(files.scripts.CT)) {

            console.log(`Message received from ${files.scripts.CT}`);

            // CASE 1A: get session timer settings

        }
        // CASE 2: Message from popup.html
        if (sender.url.includes(files.markup.PP)) {

            console.log(`Message received from ${files.markup.PP}`);

            // CASE 2A: get session timer settings

            // CASE 2B: get website blocking settings

            // CASE 2C: set website blocking settings

        }
        // CASE 3: Message from options.html
        if (sender.url.includes(files.markup.OS)) {
            
            // CASE 3A: set session timer settings
            if (message.operation === optionsOps.TIMER_S) {
                await stg.setSessionTimerSettings(message.data);
            }
            // CASE 3B: get session timer settings
            if (message.operation === optionsOps.TIMER_G) {
                const timerData = await stg.getSessionTimerSettings();
                await sendMessage(optionsOps.TIMER_G, timerData);
            }
            // CASE 3C: set website blocking settings

            // CASE 3D: get website blocking settings

        }
    }
});

chrome.storage.onChanged.addListener(async (changes, namespace) => {

    for (let [key, {oldValue, newValue}] of Object.entries(changes)) {
        
        // CASE A: Send updated session timer settings to options.js and popup.js UI
        if (key === stg.settingsKeys.TIMER) {
            const timerData = await stg.getSessionTimerSettings();
            await sendMessage(optionsOps.TIMER_S, timerData);
        }
        // CASE B: Send updated website blocking settings to options.js UI
        
    }
});
