/**
 * @file options.js
 * @description Provides script functionality for options.html
 */

import "../scss/options-scss/options.scss";
import keyFiles from "../scripts/key-files";
import ids from "./selectors";
import * as vw from "./view";
import * as ctr from "./controller";
import { defaultSettingsTemplate } from "../background/storage";

document.addEventListener("DOMContentLoaded", async () => {

    // STEP 1: Navigation buttons
    const navBtns = document.getElementById(ids.NAV_BTNS).querySelectorAll("button");
    navBtns.forEach((navBtn) => {
        navBtn.addEventListener("click", () => {
            vw.handleNavDisplay(navBtn)
        });
    });

    // STEP 2: Timer settings buttons
    const timerEdit = document.getElementById(ids.TIMER_E);
    const timerEditHours = document.getElementById(ids.TIMER_E_HH);
    const timerEditMinutes = document.getElementById(ids.TIMER_E_MM);
    const timerEditSeconds = document.getElementById(ids.TIMER_E_SS);
    const timerEditSubmit = document.getElementById(ids.TIMER_E_S);
    const timerEditCancel = document.getElementById(ids.TIMER_E_C);

    timerEdit.addEventListener("click", (event) =>{
        vw.resetTimerValues();
        vw.openForm(ids.TIMER_E_F, event);
    });
    timerEditCancel.addEventListener("click", (event) => {
        vw.closeForm(ids.TIMER_E_F, event);
    });
    timerEditSubmit.addEventListener("click", async (event) => {

        // STEP 1: Ensure TIMER form has valid values
        const formValidity = ctr.validateTimerFormValues();
        vw.handleTimerFormError(formValidity);
        if (formValidity === false) {
            event.preventDefault();
        
        // STEP 2: Send a request to background.js to update timer settings
        } else {
            const submitStatus = await ctr.setTimerSettingsRequest({
                hours: timerEditHours.value,
                minutes: timerEditMinutes.value,
                seconds: timerEditSeconds.value,
            });
            vw.closeForm(ids.TIMER_E_F, event);
            if (submitStatus) {
                // Generate a GREEN (i.e. submit success message) toaster
            } else {
                // Generate a RED (i.e. submit fail message) toaster
            }
        }
    });
    timerEditHours.addEventListener("input", () => {
        vw.sliceTimerFormValues(ids.TIMER_E_HH);
    });
    timerEditMinutes.addEventListener("input", () => {
        vw.sliceTimerFormValues(ids.TIMER_E_MM);
    });
    timerEditSeconds.addEventListener("input", () => {
        vw.sliceTimerFormValues(ids.TIMER_E_SS);
    });

    // STEP 3: Block settings buttons
    const blockEdit = document.getElementById(ids.BLOCK_E);
    const blockEditCancel = document.getElementById(ids.BLOCK_E_C)

    blockEdit.addEventListener("click", (event) => {
        vw.openForm(ids.BLOCK_E_F, event);
    });
    blockEditCancel.addEventListener("click", (event) => {
        vw.closeForm(ids.BLOCK_E_F, event);
    });

    // STEP 4: Retrieve and display timer and blocking settings
    await ctr.getTimerSettingsRequest();
    //await ctr.getBlockingSettingsRequest();

    // STEP 5: Transfer settings buttons
});

chrome.runtime.onMessage.addListener((message, sender) => {

    const optimusId = chrome.runtime.id;
    if (sender.id === optimusId && sender.url && sender.url.includes(`${keyFiles.BD}.js`)) {
        
        // CASE A: Update session timer display
        if (message.operation === ctr.optionsOps.TIMER_S || 
            message.operation === ctr.optionsOps.TIMER_G) {
            vw.updateTimerDisplay(message.data);
        }
        // CASE B: Update the block list
        
    }
});
