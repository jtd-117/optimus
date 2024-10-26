/**
 * @file popup-controller.js
 * @description Handles the frontend for popup.html
 */

export {
    closePopup,
}

/**
 * @description Closes the Chrome extension popup from the menu
 * @param {event} event The action that caused the popup to close
 */
const closePopup = (event) => {
    event.preventDefault();
    window.close();
};
