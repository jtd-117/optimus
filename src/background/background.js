/**
 * @file background.js
 * @description The backend of the Chrome extension that has access to Chrome APIs.
 */

import { optionsOps } from "../options/controller";
import keyFiles from "../scripts/key-files";
import * as msg from "../scripts/messaging";
import * as stg from "./storage";

chrome.runtime.onInstalled.addListener(async () => {
    await stg.initSettings();
});

chrome.runtime.onMessage.addListener(async (message, sender) => {

    // Only ACCEPT messages from Optimus extension components
    const optimusId = chrome.runtime.id;
    if (sender.id === optimusId) {
        
        // CASE 1: Message from content.js
        if (sender.url && sender.url.includes(`${keyFiles.CT}.js`)) {

            console.log(`Message received from ${keyFiles.CT}.js`);

            // CASE 1A: get website blocking settings
        }
        // CASE 2: Message from popup.html
        if (sender.url && sender.url.includes(`${keyFiles.PP}.html`)) {

            console.log(`Message recieved from ${keyFiles.PP}.html`);

            // CASE 2A: get session timer settings


            // CASE 2B: get website blocking settings


            // CASE 2C: set website blocking settings
        }
        // CASE 3: Message from options.html
        if (sender.url && sender.url.includes(`${keyFiles.OS}.html`)) {
            
            // CASE 3A: set session timer settings
            if (message.operation === optionsOps.TIMER_S) {
                await stg.setSessionTimerSettings(message.data);
            }
            
            // CASE 3B: get session timer settings


            // CASE 3C: set website blocking settings


            // CASE 3D: get website blocking settings
        }
    }
});

chrome.storage.onChanged.addListener(async (changes, namespace) => {

    for (let [key, ] of Object.entries(changes)) {
        
        // CASE A: Send updated session timer settings to options.js and popup.js UI
        if (key === stg.settingsKeys.TIMER) {
            const timerData = await stg.getSessionTimerSettings();
            await msg.sendMessage(optionsOps.TIMER_S, timerData);
            //await msg.sendMessage(popupOps. UNKNWON , timerData);

        // CASE B: Send updated website blocking settings to options.js UI
        }

    }
});
