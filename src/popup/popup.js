/**
 * @file popup.js
 * @description Controls the behaviour and functionality of the extension's popup interface.
 */

import "../scss/popup-scss/popup.scss";
import * as slr from "./popup-selectors";
import * as ctr from "./popup-controller";

const initEventListener = () => {
    const closeBtn = document.getElementById(slr.ids.CLOSE);

    closeBtn.addEventListener("click", (event) => ctr.closePopup(event));
};

document.addEventListener("DOMContentLoaded", initEventListener);
