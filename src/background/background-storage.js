/**
 * @file background-storage.js
 * @description Responsible for all logic involving the Chrome storage API
 * @link {https://developer.chrome.com/docs/extensions/reference/api/storage}
 */

export { 
    defaultSettings, 
    transferSettings,
    setTimerSettings,
    setBlockingSettings,
    getTimerSettings,
    getBlockingSettings,
};

/**
 * @description A template for timer and website blocking settings
 * @note Used for initial bootup of extension
 */
const defaultSettings = {
    timer: {
        hours: 0,
        minutes: 25,
        seconds: 0,
    },
    blocking: [],
};

/**
 * @description Deletes all timer and website blocking settings
 */
const deleteSettings = async () => {

};

/**
 * @description Initialises extension settings upon download or via import
 * @param {Object} data The default settings of the extension
 */
const transferSettings = async (data = defaultSettings) => {

};

/**
 * @description Assigns new timer data for hours, minutes and seconds
 * @param {Object} data The new timer data
 */
const setTimerSettings = async (data) => {

};

/**
 * @description Assigns a new array of websites to block
 * @param {Array<string>} data An array of strings representing websites to block
 */
const setBlockingSettings = async (data) => {

};

/**
 * @description Retrieves timer data using the Chrome storage API
 */
const getTimerSettings = async () => {

};

/**
 * @description Retrieves the website blocking list using the Chrome storage API
 */
const getBlockingSettings = async () => {

}
