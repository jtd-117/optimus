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

    timerEdit.addEventListener("click", (event) => ctr.openForm(slr.ids.TIMER_F, event));
    timerCancel.addEventListener("click", (event) => ctr.closeForm(slr.ids.TIMER_F, event));

    blockEdit.addEventListener("click", (event) => ctr.openForm(slr.ids.BLOCK_F, event));
    blockCancel.addEventListener("click", (event) => ctr.closeForm(slr.ids.BLOCK_F, event));
};

document.addEventListener("DOMContentLoaded", initEventListeners);
