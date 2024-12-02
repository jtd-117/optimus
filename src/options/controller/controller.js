/**
 * @file controller.js
 * @description Updates storage in background.js and user interface in options.html
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
const handleTimerEdit = async (event) => {

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
            console.error("Failed to send 'set-timer-settings' request to 'background.js'.");
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
const handleTimerReset = async (event) => {
    const defaultTimerSettings = ds.defaultSettings[ds.settingsKeys.TIMER];
    const submitStatus = await timer.setSettings(defaultTimerSettings);
    if (submitStatus === false) {
        tr.showError("Failed to RESET timer settings.");
        console.error("Failed to send 'set-timer-settings' request to 'background.js'.");
    } else {
        tr.showSuccess("RESET timer settings.");
        vw.timer.updateDisplay(defaultTimerSettings);
    }
    vw.closeForm(slr.timerIds.EDIT_F, event);
};

/**
 * @description Initialises the options.html timer display
 */
const initTimerDisplay = async () => {

    const response = await timer.getSettings();
    if (response === null) {
        tr.showError("Failed to GET timer settings.");
        console.error("Failed to send 'get-timer-settings' request to 'background.js'.");
    } else {
        vw.timer.updateDisplay(response.data);
    }
};

/**
 * @description Loads blocked websites as strings in the textarea block edit form
 */
const loadEditableBlockList = async () => {

    const response = await block.getSettings();
    if (response === null) {
        tr.showError("Failed to GET block list.");
        console.error("Failed to send 'get-block-settings' request to 'background.js'.");
    } else {
        vw.block.updateEditTextArea(response.data);
    }
};

/**
 * @description Logic for the website blocking edit settings submit button
 * @param {Event} event Occurs when the website blocking edit form is submitted
 */
const handleBlockEdit = async (event) => {

    // STEP 1: Extract textarea content into array and filter invalid regex
    const websites = ems.getBlockingElements().editTextArea.value.split('\n');
    const blockList = block.processWebsites(websites);

    // STEP 2: Send request to background.js to update website blocking settings
    const submitStatus = await block.setSettings(blockList);
    if (submitStatus === false) {
        tr.showError("Failed to UPDATE block list.");
        console.error("Failed to send 'set-block-settings' request to 'background.js'.");
    } else {
        tr.showSuccess("UPDATED block list.");
        vw.block.updateDisplay(blockList);
    }
    vw.closeForm(slr.blockingIds.EDIT_F, event);
};

/**
 * @description Logic for the website blocking reset settings submit button
 * @param {Event} event Occurs when the website blocking reset form is submitted
 */
const handleBlockReset = async (event) => {
    const defaultBlockSettings = ds.defaultSettings[ds.settingsKeys.BLOCK];
    const submitStatus = await block.setSettings(defaultBlockSettings);
    if (submitStatus === false) {
        tr.showError("Failed to RESET block list.");
        console.error("Failed to send 'set-block-settings' request to 'background.js'.");
    } else {
        tr.showSuccess("RESET block list.");
        vw.block.updateDisplay(defaultBlockSettings);
    }
    vw.closeForm(slr.blockingIds.EDIT_F, event);
};

/**
 * @description Initialises the options.html block list display
 */
const initBlockDisplay = async () => {

    const response = await block.getSettings();
    if (response === null) {
        tr.showError("Failed to GET block list.");
        console.error("Failed to send 'get-block-settings' request to 'background.js'.");
    } else {
        vw.block.updateDisplay(response.data);
    }
};

/**
 * @description Logic for resetting both the session timer and website blocking settings
 * @param {Event} event Occurs when the website total reset form is submitted
 */
const handleTotalReset = async (event) => {

    const defaultTimerSettings = ds.defaultSettings[ds.settingsKeys.TIMER];
    const submitTimerStatus = await timer.setSettings(defaultTimerSettings);

    const defaultBlockSettings = ds.defaultSettings[ds.settingsKeys.BLOCK];
    const submitBlockStatus = await block.setSettings(defaultBlockSettings);

    if (submitTimerStatus === false || submitBlockStatus === false) {

        if (submitTimerStatus === false && submitBlockStatus === false) {
            tr.showError("Failed to RESET extension settings.");

        } else if (submitTimerStatus === false) {
            tr.showError("Failed to RESET timer settings.");

        } else {
            tr.showError("Failed to RESET block list.");
        }
        console.error("Failed to send 'set-timer-settings' or 'set-block-settings' request to 'background.js'.");

    } else {
        tr.showSuccess("RESET extension settings.");
        vw.timer.updateDisplay(defaultTimerSettings);
        vw.block.updateDisplay(defaultBlockSettings);
    }
    vw.closeForm(slr.transferIds.RESET_F, event);
};

export {
    timer,
    handleTimerEdit,
    handleTimerReset,
    initTimerDisplay,

    block,
    loadEditableBlockList,
    handleBlockEdit,
    handleBlockReset,
    initBlockDisplay,

    handleTotalReset,
};
