/**
 * @file controller.js
 * @description Updates storage in background.js and user interface in option.html
 * @note Functions in this file are exclusive to cases where both view and controller functions are needed
 * @see {timer.js} (same directory) for controller functions exclusive to the session timer
 * @see {blocking.js} (same directory) for controller functions exclusive to website blocking
 */

import * as ds from "../../scripts/default-settings";
import * as tr from "../../scripts/toaster";

import * as slr from "../utils/selectors";
import * as ems from "../utils/elements";
import * as vw from "../view/view";

import * as timer from "./timer";
import * as block from "./blocking";

/**
 * @description Logic for the session timer edit settings submit button
 * @param {Event} event Occurs when the timer editing form is submitted
 */
const handleTimerEditSubmission = async (event) => {

    // STEP 1: Ensure TIMER form has valid values
    const formValidity = timer.validateEditValues();
    vw.timer.handleEditError(formValidity);
    if (formValidity === false) {
        event.preventDefault();

    // STEP 2: Send a request to background.js to update timer settings
    } else {
        const newTimerSettings = {
            hours: ems.getTimerElements().editHours.value,
            minutes: ems.getTimerElements().editMinutes.value,
            seconds: ems.getTimerElements().editSeconds.value,
        };
        const submitStatus = await timer.setSettings(newTimerSettings);
        if (submitStatus === false) {
            tr.showError("Failed to UPDATE timer settings.");
            console.error("Failed to send 'set-timer-settings' request to 'background.js'");
        } else {
            tr.showSuccess("UPDATED timer settings.");
            vw.timer.updateDisplay(newTimerSettings);
        }
        vw.closeForm(slr.timerIds.EDIT_F, event);
    }
};

/**
 * @description Logic for the session timer reset settings submit button
 * @param {Event} event Occurs when the timer reset form is submitted
 */
const handleTimerResetSubmission = async (event) => {
    const defaultTimerSettings = ds.defaultSettings[ds.settingsKeys.TIMER]
    const submitStatus = await timer.setSettings(defaultTimerSettings);
    if (submitStatus === false) {
        tr.showError("Failed to RESET timer settings.");
        console.error("Failed to send 'set-timer-settings' request to 'background.js'");
    } else {
        tr.showSuccess("RESET timer settings.");
        vw.timer.updateDisplay(defaultTimerSettings);
    }
    vw.closeForm(slr.timerIds.EDIT_F, event);
};

/**
 * @description Initialises the options.html timer display by requesting timer settings
 */
const initTimerDisplay = async () => {

    const response = await timer.getSettings();
    if (response === null) {
        tr.showError("Timer settings update fail");
    } else {
        vw.timer.updateDisplay(response.data);
    }
};

export {
    timer,
    handleTimerEditSubmission,
    handleTimerResetSubmission,
    initTimerDisplay,

    block,
};
