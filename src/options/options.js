/**
 * @file options.js
 * @description Manages the behaviour and functionality of the extension's settings page.
 */

import "../scss/options-scss/options.scss";
import * as slr from "./options-selectors";
import * as ctr from "./options-controller";

const initEventListeners = () => {
    const timerEdit = document.getElementById(slr.ids.TIMER_E);
    const timerCancel = document.getElementById(slr.ids.TIMER_C);

    const blockEdit = document.getElementById(slr.ids.BLOCK_E);
    const blockCancel = document.getElementById(slr.ids.BLOCK_C);

    timerEdit.addEventListener("click", (e) => {
        e.preventDefault();
        ctr.openForm(slr.ids.TIMER_F);
    });
    timerCancel.addEventListener("click", (e) => {
        e.preventDefault();
        ctr.closeForm(slr.ids.TIMER_F);
    });

    blockEdit.addEventListener("click", (e) => {
        e.preventDefault();
        ctr.openForm(slr.ids.BLOCK_F);
    });
    blockCancel.addEventListener("click", (e) => {
        e.preventDefault();
        ctr.closeForm(slr.ids.BLOCK_F);
    });
};

document.addEventListener("DOMContentLoaded", initEventListeners);
