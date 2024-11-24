/**
 * @file blocking.js
 * @description A collection of website blocking VIEW functions for options.js
 */

import * as ems from "../utils/elements";

/**
 * @description HELPER - Removes all bullet point list tags in the block list element
 */
const clearBlockList = () => {
    const blockList = ems.getBlockingElements().list;
    blockList.textContent = "";
};

/**
 * @description Updates the block list display via block settings retrieved from background.js
 * @param {Array<string>} websites An array of strings representing user-selected blocked websites
 */
const updateDisplay = (websites) => {
    const blockList = ems.getBlockingElements().list;
    clearBlockList();

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
    clearBlockList,
    updateDisplay,
};
