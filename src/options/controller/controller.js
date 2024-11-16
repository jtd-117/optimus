/**
 * @file controller.js
 * @description Updates storage in background.js and user interface in option.html
 * @note Functions in this file are exclusive to cases where both view and controller functions are needed
 * @see {timer.js} (same directory) for controller functions exclusive to the session timer
 * @see {blocking.js} (same directory) for controller functions exclusive to website blocking
 */

import * as slr from "../utils/selectors";
import * as ems from "../utils/elements";
import * as vw from "../view/view";

import * as timer from "./timer";
import * as block from "./blocking";

/**
 * @description Logic for the session timer edit settings submit button
 * @param {Event} event Occures when the timer editing form is submitted
 */
const handleTimerEditSubmission = async (event) => {

    // STEP 1: Ensure TIMER form has valid values
    const formValidity = timer.validateEditValues();
    vw.timer.handleEditError(formValidity);
    if (formValidity === false) {
        event.preventDefault();

    // STEP 2: Send a request to background.js to update timer settings
    } else {
        const submitStatus = await timer.setSettings({
            hours: ems.getTimerElements().editHours.value,
            minutes: ems.getTimerElements().editMinutes.value,
            seconds: ems.getTimerElements().editSeconds.value,
        });
        vw.closeForm(slr.timerIds.EDIT_F, event);
        if (submitStatus === false) {
            // Generate a RED (i.e. submit fail message) toaster
            console.error("Failed to send 'set-timer-settings' request to 'background.js'");
        } else {
            // Generate a GREEN (i.e. submit success message) toaster
        }
    }
};

/**
 * @description Initialises the options.html timer display by requesting timer settings
 */
const initTimerDisplay = async () => {
    const reqStatus = await timer.getSettings();
    if (reqStatus === false) {
        // Generate a RED (i.e. submit fail message) toaster
        console.error("Failed to send 'get-timer-settings' request to 'background.js'");
    } else {
        // Generate a GREEN (i.e. submit success message) toaster
    }
};

export {
    timer,
    handleTimerEditSubmission,
    initTimerDisplay,

    block,
};
