/**
 * @file options.js
 * @description Provides script functionality for options.html
 */

import "../scss/options-scss/options.scss";
import ids from "./selectors";
import * as vw from "./view";
import * as ctr from "./controller";

document.addEventListener("DOMContentLoaded", () => {

    // STEP 1: Navigation buttons
    const navBtns = document.getElementById(ids.NAV_BTNS).querySelectorAll("button");
    navBtns.forEach((navBtn) => {
        navBtn.addEventListener("click", () => {
            vw.handleNavDisplay(navBtn)
        });
    });

    // STEP 2: Timer settings buttons
    const timerEdit = document.getElementById(ids.TIMER_E);
    const timerSubmit = document.getElementById(ids.TIMER_S);
    const timerCancel = document.getElementById(ids.TIMER_C);
    const timerHours = document.getElementById(ids.TIMER_HH);
    const timerMinutes = document.getElementById(ids.TIMER_MM);
    const timerSeconds = document.getElementById(ids.TIMER_SS);

    timerEdit.addEventListener("click", (event) =>{
        vw.resetTimerValues();
        vw.openForm(ids.TIMER_F, event);
    });
    timerCancel.addEventListener("click", (event) => {
        vw.closeForm(ids.TIMER_F, event);
    });
    timerSubmit.addEventListener("click", async (event) => {

        // STEP 1: Ensure TIMER form has valid values
        const formValidity = ctr.validateTimerFormValues();
        vw.handleTimerFormError(formValidity);
        if (formValidity === false) {
            event.preventDefault();
        
        // STEP 2: Send a request to background.js to update timer settings
        } else {
            const submitStatus = await ctr.setTimerSettingsRequest();
            vw.closeForm(ids.TIMER_F, event);
            if (submitStatus) {
                // Generate a GREEN (i.e. submit success message) toaster
            } else {
                // Generate a RED (i.e. submit fail message) toaster
            }
        }
    });
    timerHours.addEventListener("input", () => {
        vw.sliceTimerFormValues(ids.TIMER_HH);
    });
    timerMinutes.addEventListener("input", () => {
        vw.sliceTimerFormValues(ids.TIMER_MM);
    });
    timerSeconds.addEventListener("input", () => {
        vw.sliceTimerFormValues(ids.TIMER_SS);
    });

    // STEP 3: Block settings buttons
    const blockEdit = document.getElementById(ids.BLOCK_E);
    const blockCancel = document.getElementById(ids.BLOCK_C)

    blockEdit.addEventListener("click", (event) => {
        vw.openForm(ids.BLOCK_F, event);
    });
    blockCancel.addEventListener("click", (event) => {
        vw.closeForm(ids.BLOCK_F, event);
    });

    // STEP 4: Transfer settings buttons


    // STEP 5: Retrieve and display timer and blocking settings

});
