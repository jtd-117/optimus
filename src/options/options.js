/**
 * @file options.js
 * @description Provides script functionality for options.html
 */

import "../scss/options-scss/options.scss";

import * as slr from "./utils/selectors";
import * as ems from "./utils/elements";
import * as ctr from "./controller/controller";
import * as vw from "./view/view";

document.addEventListener("DOMContentLoaded", async () => {

    // STEP 1: Navigation buttons
    ems.getOtherElements().navBtns.forEach((navBtn) => {
        navBtn.addEventListener("click", () => {
            vw.handleNavDisplay(navBtn);
        });
    });

    // STEP 2: Timer settings buttons
    ems.getTimerElements().edit.addEventListener("click", (event) => {
        vw.timer.resetEditUnits();
        vw.openForm(slr.timerIds.EDIT_F, event);
    });
    [
        ems.getTimerElements().editHours, 
        ems.getTimerElements().editMinutes, 
        ems.getTimerElements().editSeconds,
    ].forEach((unit) => {
        unit.addEventListener("input", () => {
            vw.timer.sliceEditUnits(unit);
        });
    });
    ems.getTimerElements().editSubmit.addEventListener("click", async (event) => {
        await ctr.handleTimerEditSubmission(event);
    });
    ems.getTimerElements().editCancel.addEventListener("click", (event) => {
        vw.closeForm(slr.timerIds.EDIT_F, event);
    });
    ems.getTimerElements().reset.addEventListener("click", (event) => {
       vw.openForm(slr.timerIds.RESET_F, event); 
    });
    ems.getTimerElements().resetSubmit.addEventListener("click", async (event) => {
        await ctr.handleTimerResetSubmission(event);
    });
    ems.getTimerElements().resetCancel.addEventListener("click", (event) => {
        vw.closeForm(slr.timerIds.RESET_F, event);
    });

    // STEP 3: Block settings buttons
    ems.getBlockingElements().edit.addEventListener("click", async (event) => {
        await ctr.loadBlockEditTextArea();
        vw.openForm(slr.blockingIds.EDIT_F, event);
    });
    ems.getBlockingElements().editSubmit.addEventListener("click", async (event) => {
        ctr.handleBlockEditSubmission(event);
    });
    ems.getBlockingElements().editCancel.addEventListener("click", (event) => {
        vw.closeForm(slr.blockingIds.EDIT_F, event);
    });

    // STEP 4: Retrieve and display session timer settings and website blocking list
    await ctr.initTimerDisplay();
    await ctr.initBlockDisplay();

    // STEP 5: Transfer settings buttons

});
