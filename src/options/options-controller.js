/**
 * @file options-controller.js
 * @description Handles the frontend for options.html
 */

export {
    openForm,
    closeForm,
};

/**
 * @description Opens the modal of a dialog tag
 * @param {String} dialogId The ID of the dialog tag
 */
const openForm = (dialogId) => {
    const dialog = document.getElementById(dialogId);
    if (dialog) {
        dialog.showModal();
    }
}

/**
 * @description Closes the modal of a dialog tag
 * @param {String} dialogId The ID of the dialog tag
 */
const closeForm = (dialogId) => {
    const dialog = document.getElementById(dialogId);
    if (dialog) {
        dialog.close();
    }
}
