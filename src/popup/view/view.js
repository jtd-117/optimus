/**
 * @file view.js
 * @description Handles logic for user interaction in popup.html via popup.js
 */

import * as timer from "./timer";
import * as block from "./blocking";

/**
 * @description Opens the extension's options page
 * @param {Event} event The event that caused this action to occur
 */
const openOptions = (event) => {
    event.preventDefault();
    chrome.runtime.openOptionsPage();
};

/**
 * @description Closes the extension's popup window
 * @param {Event} event The event that caused this action to occur
 */
const closePopup = (event) => {
    event.preventDefault();
    window.close();
};

export {
    openOptions,
    closePopup,
    timer,
    block,
};
