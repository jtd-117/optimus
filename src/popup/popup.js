/**
 * @file popup.js
 * @description Provides script functionality for popup.html
 */

import "../scss/popup-scss/popup.scss";
import * as slr from "./selectors";
import * as vw from "./view";

const initEventListener = () => {
    const settingsBtn = document.getElementById(slr.ids.SETTINGS);
    const closeBtn = document.getElementById(slr.ids.CLOSE);

    closeBtn.addEventListener("click", (event) => vw.closePopup(event));
    settingsBtn.addEventListener("click", (event) => vw.openOptions(event));
};

document.addEventListener("DOMContentLoaded", initEventListener());
