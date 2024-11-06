/**
 * @file options.js
 * @description Manages the behaviour and functionality of the extension's settings page.
 */

import "../scss/options-scss/options.scss";
import ids from "./options-selectors";
import * as ctr from "./controller";

const initEventListeners = () => {

    // STEP 1: Navigation Buttons
    const navBtns = document.getElementById(ids.NAV_BTNS).querySelectorAll("button");
    navBtns.forEach((navBtn) => {
        navBtn.addEventListener("click", () => {
            ctr.handleNavDisplay(navBtn)
        });
    });

    // STEP 2: Timer Settings Buttons
    const timerEdit = document.getElementById(ids.TIMER_E);
    const timerSubmit = document.getElementById(ids.TIMER_S);
    const timerCancel = document.getElementById(ids.TIMER_C);
    const timerHours = document.getElementById(ids.TIMER_HH);
    const timerMinutes = document.getElementById(ids.TIMER_MM);
    const timerSeconds = document.getElementById(ids.TIMER_SS);

    timerEdit.addEventListener("click", (event) =>{
        ctr.openForm(ids.TIMER_F, event);
    });
    timerCancel.addEventListener("click", (event) => {
        ctr.closeForm(ids.TIMER_F, event);
    });
    timerSubmit.addEventListener("click", (event) => {
        ctr.validateTimerValues(event);
    });
    timerHours.addEventListener("input", () => {
        ctr.sliceTimerFormValues(ids.TIMER_HH);
    });
    timerMinutes.addEventListener("input", () => {
        ctr.sliceTimerFormValues(ids.TIMER_MM);
    });
    timerSeconds.addEventListener("input", () => {
        ctr.sliceTimerFormValues(ids.TIMER_SS);
    });

    // STEP 3: Block Settings Buttons
    const blockEdit = document.getElementById(ids.BLOCK_E);
    const blockCancel = document.getElementById(ids.BLOCK_C)

    blockEdit.addEventListener("click", (event) => {
        ctr.openForm(ids.BLOCK_F, event);
    });
    blockCancel.addEventListener("click", (event) => {
        ctr.closeForm(ids.BLOCK_F, event);
    });
};

document.addEventListener("DOMContentLoaded", initEventListeners);
