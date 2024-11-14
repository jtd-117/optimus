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
 * @description Shows timer form message error given invalid inputs
 * @param {Boolean} timerFormValidity `true` if the timer form is valid, `false` otherwise
 */
const handleTimerFormError = (timerFormValidity) => {

    const hours = document.getElementById(ids.TIMER_HH);
    const minutes = document.getElementById(ids.TIMER_MM);
    const seconds = document.getElementById(ids.TIMER_SS);
    const warningMessage = document.getElementById(ids.TIMER_FW);

    if (timerFormValidity === false) {
        warningMessage.style.display = "inline";
        [hours, minutes, seconds].forEach((unit) => {
            unit.style.borderColor = "#ff0000";
        });
    } else {
        warningMessage.style.display = "none";
    }
}

/**
 * @description Limits user input to 2 numbers to the input tag of type number
 * @param {String} timerValueId The ID of the input tag for the timer value
 */
const sliceTimerFormValues = (timerValueId) => {
    const timerValue = document.getElementById(timerValueId);
    timerValue.value = timerValue.value.slice(0, 2);
};

/**
 * @description HELPER - Adds a zero to numbers less than 10 for session timer data
 * @param {Object} timerData contains the keys hours, minutes and seconds
 * @returns {Object} Same as `timerData` but key values are formatted as strings with an extra zero if needed
 */
const formatTimerData = (timerData) => {
    return Object.fromEntries(
        Object.entries(timerData).map(([key, value]) => [
            key,
            value < 10 ? String(value).padStart(2, '0') : String(value),
        ])
    );
};

/**
 * @description Updates the display timer via timer settings retrieved from background.js
 * @param {Object} timerData contains the keys hours, minutes and seconds
 */
const updateTimerDisplay = (timerData) => {
    const timerDisplay = document.getElementById(ids.TIMER_D);
    timerData = formatTimerData(timerData);
    timerDisplay.textContent = `${timerData.hours}:${timerData.minutes}:${timerData.seconds}`;
};

export {
    handleNavDisplay,
    openForm, 
    closeForm,
    resetTimerValues,
    handleTimerFormError,
    sliceTimerFormValues,
    updateTimerDisplay,
};
