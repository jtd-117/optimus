/**
 * @file popup-controller.js
 * @description Handles the frontend for popup.html
 */

export { 
    closePopup,
    openOptions,
};

/**
 * @description Closes the Chrome extension popup from the menu
 * @param {event} event The action that caused the popup to close
 */
const closePopup = (event) => {
    event.preventDefault();
    window.close();
};

/**
 * @description Opens the options page from the popup menu
 * @param {event} event The action that caused the popup to close
 */
const openOptions = (event) => {
    event.preventDefault();
    chrome.runtime.openOptionsPage();
}
