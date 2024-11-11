/**
 * @file options.js
 * @description Provides script functionality for options.html
 */

import "../scss/options-scss/options.scss";
import ids from "./selectors";
import * as vw from "./view";

const initEventListeners = () => {

    // STEP 1: Navigation Buttons
    const navBtns = document.getElementById(ids.NAV_BTNS).querySelectorAll("button");
    navBtns.forEach((navBtn) => {
        navBtn.addEventListener("click", () => {
            vw.handleNavDisplay(navBtn)
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
        vw.resetTimerValues();
        vw.openForm(ids.TIMER_F, event);
    });
    timerCancel.addEventListener("click", (event) => {
        vw.closeForm(ids.TIMER_F, event);
    });
    timerSubmit.addEventListener("click", (event) => {
        vw.handleTimerForm(ids.TIMER_F, event);
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

    // STEP 3: Block Settings Buttons
    const blockEdit = document.getElementById(ids.BLOCK_E);
    const blockCancel = document.getElementById(ids.BLOCK_C)

    blockEdit.addEventListener("click", (event) => {
        vw.openForm(ids.BLOCK_F, event);
    });
    blockCancel.addEventListener("click", (event) => {
        vw.closeForm(ids.BLOCK_F, event);
    });
};

document.addEventListener("DOMContentLoaded", initEventListeners);
