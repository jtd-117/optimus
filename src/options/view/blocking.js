/**
 * @file blocking.js
 * @description A collection of website blocking VIEW functions for options.js
 */

import * as ems from "../utils/elements";

/**
 * @description HELPER - Resets the value of a blocking element
 * @param {HTMLElement} element The element to reset the value of
 */
const clearValue = (element) => {
    element.value = "";
};

/**
 * @description HELPER - Resets the text content of a blocking element
 * @param {HTMLElement} element The element to reset the text content of
 */
const clearTextContent = (element) => {
    element.textContent = "";
};

/**
 * @description Loads the website blocking textarea 
 * @param {Array<string>} websites An array of strings representing user-selected blocked websites
 */
const updateEditTextArea = (websites) => {
    const textArea = ems.getBlockingElements().editTextArea;
    clearValue(textArea);

    if (websites.length > 0) {
        textArea.value = websites.join("\n");
    }
};

/**
 * @description Updates the block list display via block settings retrieved from background.js
 * @param {Array<string>} websites An array of strings representing user-selected blocked websites
 */
const updateDisplay = (websites) => {
    const blockList = ems.getBlockingElements().list;
    clearTextContent(blockList);

    if (websites.length === 0) {
        const emptyList = document.createElement("li");
        emptyList.textContent = "No blocked websites";
        blockList.appendChild(emptyList);

    } else {
        websites.forEach((website) => {
            const bulletPoint = document.createElement("li");
            bulletPoint.textContent = website;
            blockList.appendChild(bulletPoint);
        });
    }
};

export {
    updateEditTextArea,
    updateDisplay,
};
