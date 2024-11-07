/**
 * @file background.js
 * @description The backend of the Chrome extension that has access to Chrome APIs.
 */

import * as stg from "./storage";

chrome.runtime.onInstalled.addListener(() => {
    stg.initSettings();
});

const data = await stg.getSettings();
console.log(data);
