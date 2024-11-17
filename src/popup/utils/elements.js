/**
 * @file elements.js
 * @description A collection of HTML elements for use within the `popup` directory
 */

import popupSlrs from "./selectors";

/**
 * @description Generates an object of popup button elements
 */
const getPopupBtns = () => ({
    settings: document.getElementById(popupSlrs.SG),
    close: document.getElementById(popupSlrs.CE),
    replay: document.getElementById(popupSlrs.RY),
    play: document.getElementById(popupSlrs.PY),
    pause: document.getElementById(popupSlrs.PE),
    block: document.querySelector(popupSlrs.BL),
});

export default getPopupBtns;
