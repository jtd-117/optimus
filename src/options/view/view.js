/**
 * @file view.js
 * @description Handles logic for user interaction in options.html via options.js
 */

import * as ems from "../utils/elements";

import * as timer from "./timer";
import * as block from "./blocking";

/**
 * @description Displays the selected navigation menu item page in options.html
 * @param {HTMLElement} navBtn One of manual, timer, blocking, and transfer buttons
 */
const handleNavDisplay = (navBtn) => {
    ems.getOtherElements().articles.forEach((article) => {
        if (article.className === navBtn.className) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
};

/**
 * @description Opens the modal of a dialog tag
 * @param {string} dialogId The ID of the dialog tag
 */
const openForm = (dialogId, event) => {
    const dialog = document.getElementById(dialogId);
    event.preventDefault();
    if (dialog) {
        dialog.showModal();
    }
};

/**
 * @description Closes the modal of a dialog tag
 * @param {string} dialogId The ID of the dialog tag
 */
const closeForm = (dialogId, event) => {
    const dialog = document.getElementById(dialogId);
    event.preventDefault();
    if (dialog) {
        dialog.close();
    }
};

export {
    handleNavDisplay,
    openForm,
    closeForm,
    timer,
    block,
};
