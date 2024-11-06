/**
 * @file popup.js
 * @description Provides script functionality for popup.html
 */

import "../scss/popup-scss/popup.scss";
import * as slr from "./selectors";
import * as ctr from "./controller";

const initEventListener = () => {
    const settingsBtn = document.getElementById(slr.ids.SETTINGS);
    const closeBtn = document.getElementById(slr.ids.CLOSE);

    closeBtn.addEventListener("click", (event) => ctr.closePopup(event));
    settingsBtn.addEventListener("click", (event) => ctr.openOptions(event));
};

document.addEventListener("DOMContentLoaded", initEventListener());
