/**
 * @file view.js
 * @description Handles logic for user interactions in options.html
 */

import ids from "./selectors";

/**
 * @description Displays the selected section from options page's menu
 * @param {string} navBtn The navBtn that has been clicked on to hide other articles
 */
const handleNavDisplay = (navBtn) => {
    const articles = document.querySelectorAll("main section.options#content article");
    articles.forEach((article) => {        
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

/**
 * @description Resets the timer form values after submission
 */
const resetTimerValues = () => {
    const hours = document.getElementById(ids.TIMER_HH);
    const minutes = document.getElementById(ids.TIMER_MM);
    const seconds = document.getElementById(ids.TIMER_SS);
    hours.value = '';
    minutes.value = '';
    seconds.value = '';
};

/**
 * @description Limits user input to 2 numbers to the input tag of type number
 * @param {String} timerValueId The ID of the input tag for the timer value
 */
const sliceTimerFormValues = (timerValueId) => {
    const timerValue = document.getElementById(timerValueId);
    timerValue.value = timerValue.value.slice(0, 2);
};

export {
    handleNavDisplay,
    openForm, 
    closeForm,
    resetTimerValues,
    sliceTimerFormValues,
};
