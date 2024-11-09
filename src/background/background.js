/**
 * @file background.js
 * @description The backend of the Chrome extension that has access to Chrome APIs.
 */

import * as stg from "./storage";

chrome.runtime.onInstalled.addListener(async () => {
    await stg.initSettings();
});
