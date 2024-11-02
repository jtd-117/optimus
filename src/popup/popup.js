/**
 * @file popup.js
 * @description Controls the behaviour and functionality of the extension's popup interface.
 */

import "../scss/popup-scss/popup.scss";
import * as slr from "./popup-selectors";
import * as ctr from "./popup-controller";

const initEventListener = () => {
    const settingsBtn = document.getElementById(slr.ids.SETTINGS);
    const closeBtn = document.getElementById(slr.ids.CLOSE);

    closeBtn.addEventListener("click", (event) => ctr.closePopup(event));
    settingsBtn.addEventListener("click", (event) => ctr.openOptions(event));
};

document.addEventListener("DOMContentLoaded", initEventListener());
