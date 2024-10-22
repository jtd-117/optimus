/**
 * @file options.js
 * @description Manages the behaviour and functionality of the extension's settings page.
 */

import "../scss/options-scss/options.scss";
import * as ctr from "./options-controller";

const initEventListeners = () => {
    const timerEdit = document.getElementById("timer-edit");
    const timerCancel = document.getElementById("timer-cancel");

    const blockEdit = document.getElementById("block-edit");
    const blockCancel = document.getElementById("block-cancel");

    timerEdit.addEventListener("click", (e) => {
        e.preventDefault();
        ctr.openForm("timer-form");
    });
    timerCancel.addEventListener("click", (e) => {
        e.preventDefault();
        ctr.closeForm("timer-form");
    });

    blockEdit.addEventListener("click", (e) => {
        e.preventDefault();
        ctr.openForm("block-form");
    });
    blockCancel.addEventListener("click", (e) => {
        e.preventDefault();
        ctr.closeForm("block-form");
    });
};

document.addEventListener("DOMContentLoaded", initEventListeners);
