/**
 * @file popup.js
 * @description Provides script functionality for popup.html
 */

import "../scss/popup-scss/popup.scss";

import getPopupBtns from "./utils/elements";
import * as ctr from "./controller/controller";
import * as vw from "./view/view";

document.addEventListener("DOMContentLoaded", async () => {

    getPopupBtns().settings.addEventListener("click", (event) => {
        vw.openOptions(event);
    });
    getPopupBtns().close.addEventListener("click", (event) => {
        vw.closePopup(event);
    });
});
