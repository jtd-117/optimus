/**
 * @file options-controller.js
 * @description Handles the frontend for options.html
 */

export { 
    openForm, 
    closeForm, 
    sliceTimerFormValues
};

/**
 * @description Opens the modal of a dialog tag
 * @param {String} dialogId The ID of the dialog tag
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
 * @param {String} dialogId The ID of the dialog tag
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
