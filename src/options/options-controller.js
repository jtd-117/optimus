/**
 * @file options-controller.js
 * @description Handles the frontend for options.html
 */

import * as slr from "./options-selectors";

export { 
    openForm, 
    closeForm, 
    sliceTimerFormValues,
    validateTimerValues,
};

/**
 * @description Opens the modal of a dialog tag
 * @param {string} dialogId The ID of the dialog tag
 */
const openForm = (dialogId, event) => {
    const dialog = document.getElementById(dialogId);
    event.preventDefault();
    if (dialog) {
        resetTimerValues();
        dialog.showModal();
    }
};

/**
 * @description Resets the timer form values after submission
 */
const resetTimerValues = () => {
    const hours = document.getElementById(slr.ids.TIMER_HH);
    const minutes = document.getElementById(slr.ids.TIMER_MM);
    const seconds = document.getElementById(slr.ids.TIMER_SS);
    hours.value = '';
    minutes.value = '';
    seconds.value = '';
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
 * @description Limits user input to 2 numbers to the input tag of type number
 * @param {String} timerValueId The ID of the input tag for the timer value
 */
const sliceTimerFormValues = (timerValueId) => {
    const timerValue = document.getElementById(timerValueId);
    timerValue.value = timerValue.value.slice(0, 2);
};

/**
 * @description Ensures that timer settings does not have zero values for hours, minutes and seconds
 * @returns {Boolean} `true` if the timer valid, `false` otherwise
 */
const checkNonZeroTimer = (timerSubmitId) => {
    const hours = document.getElementById(slr.ids.TIMER_HH);
    const minutes = document.getElementById(slr.ids.TIMER_MM);
    const seconds = document.getElementById(slr.ids.TIMER_SS);
    const warningMessage = document.getElementById(slr.ids.TIMER_FW);

    if (Number(hours.value) === 0 && Number(minutes.value) === 0 && Number(seconds.value) === 0) {
        warningMessage.style.display = "inline";
        return false;
    }
    warningMessage.style.display = "none";
    return true;
};

/**
 * @description Submits the timer form values if valid
 * @param {Event} event The event that caused this function to run
 */
const validateTimerValues = (event, timerSubmitId) => {

    // STEP 1: Check if the timer settings form has valid values
    const validity = checkNonZeroTimer();
    if (validity === false) {
        event.preventDefault();
        return;
    }
    // STEP 2: Only submit form details if values are valid
};
