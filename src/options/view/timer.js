/**
 * @file timer.js
 * @description A collection of session timer VIEW functions for options.js
 */

import * as ems from "../utils/elements";
import { timer } from "./view";

/**
 * @description Resets the timer form values after submission
 */
const resetEditUnits = () => {
    const timer = ems.getTimerElements();
    timer.editHours.value = '';
    timer.editMinutes.value = '';
    timer.editSeconds.value = '';
};

/**
 * @description Shows timer form message error given invalid inputs
 * @param {Boolean} timerFormValidity `true` if the timer form is valid, `false` otherwise
 */
const handleEditError = (timerFormValidity) => {

    const timer = ems.getTimerElements();
    if (timerFormValidity === false) {
        timer.editWarning.style.display = "inline";
        [timer.editHours, timer.editMinutes, timer.editSeconds].forEach((unit) => {
            unit.style.borderColor = "#ff0000";
        });
    } else {
        timer.editWarning.style.display = "none";
    }
}

/**
 * @description Limits user input to 2 numbers to the input tag of type number
 * @param {HTMLElement} timerUnit One of hours, minutes or seconds from src/options/utils/elements.js
 */
const sliceEditUnits = (timerUnit) => {
    timerUnit.value = timerUnit.value.slice(0, 2);
};

/**
 * @description HELPER - Adds a zero to numbers less than 10 for session timer data
 * @param {Object} timerData contains the keys hours, minutes and seconds
 * @returns {Object} Same as `timerData` but key values are formatted as strings with an extra zero if needed
 */
const formatData = (timerData) => {
    return Object.fromEntries(
        Object.entries(timerData).map(([key, value]) => [
            key,
            value < 10 ? String(value).padStart(2, '0') : String(value),
        ])
    );
};

/**
 * @description Updates the timer display via timer settings retrieved from background.js
 * @param {Object} timerData contains the keys hours, minutes and seconds
 */
const updateDisplay = (timerData) => {
    const timerDisplay = ems.getTimerElements().display;
    timerData = formatData(timerData);
    timerDisplay.textContent = `${timerData.hours}:${timerData.minutes}:${timerData.seconds}`;
};

export {
    resetEditUnits,
    handleEditError,
    sliceEditUnits,
    updateDisplay,
};
