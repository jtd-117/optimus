/**
 * @file storage.js
 * @description Manages access or edits to the Chrome extension's storage
 * @link {https://developer.chrome.com/docs/extensions/reference/api/storage}
 */

import asyncWrapper from "../scripts/utils";

/**
 * @description A template for timer and website blocking settings
 * @note Used for initial bootup of extension
 */
const defaultSettingsTemplate = Object.freeze({
    timer: {
        hours: 0,
        minutes: 25,
        seconds: 0,
    },
    blocking: []
});

const settingsKeys = Object.freeze({
    TIMER: "timer",
    TIMER_HH: "hours",
    TIMER_MM: "minutes",
    TIMER_SS: "seconds",
    BLOCK: "blocking",
});

/**
 * @description Initialises extension settings upon download or via import
 * @param {Object} data The default settings of the extension
 * @returns {Boolean} `true` if operation was sucessful, `false` otherwise
 */
const initSettings = async (settings = defaultSettingsTemplate) => {

    // NOTE: `settings` is validated in `options.js`
    const [,error] = await asyncWrapper(chrome.storage.local.set(settings));
    if (error) return false;
    return true;
};

/**
 * @description An asynchronous wrapper function for the GET operation in Chrome's storage API
 * @param {settingsKeys} key A string being settingsKeys.TIMER or settingsKeys.BLOCK
 * @returns {Object|Array<string>|null} Object if settingsKeys.TIMER, array of strings of settingsKeys.BLOCK, `null` if reject
 */
const getLocalStorageWrapper = async (key) => {
    const [data, error] = await asyncWrapper(chrome.storage.local.get(key));
    if (error) return null;
    return data[key];
};

/**
 * @description Retrieves session timer settings from storage
 * @returns {Object} Contains the keys 'hours', 'minutes' and 'seconds'
 */
const getSessionTimerSettings = async () => {
    return getLocalStorageWrapper(settingsKeys.TIMER);
};

/**
 * @description Retrieves website blocking settings from storage
 * @returns {Array<string>} Contains user-selected blocked website links as strings
 */
const getWebsiteBlockingSettings = async () => {
    return getLocalStorageWrapper(settingsKeys.BLOCK);
};

/**
 * @description An asynchronous wrapper function for the SET operation in Chrome's storage API
 * @param {settingsKeys} key A string being settingsKeys.TIMER or settingsKeys.BLOCK
 * @param {Object/Array<string>} data If settingsKeys.TIMER an Object, otherwise an array for settingsKeys.BLOCK
 * @returns {Boolean} `true` if update was successful, `false` otherwise
 */
const setLocalStorageWrapper = async (key, data) => {

    // NOTE: `keyData` is validated in `options.js`
    const [,error] = await asyncWrapper(chrome.storage.local.set(data));
    if (error) {
        console.error(`Failed to update ${key} settings in 'chrome.storage.local'`, error);
        return false;
    }
    return true;
};

/**
 * @description Updates session timer settings
 * @param {Object} timerData Contains the keys 'hours', 'minutes' and 'seconds'
 * @returns {Boolean} `true` if update was successful, `false` otherwise
 */
const setSessionTimerSettings = async (timerData) => {
    const data = { timer: timerData };
    return setLocalStorageWrapper(settingsKeys.TIMER, data);
};

/**
 * @description Updates website blocking settings
 * @param {Array<string>} newSettings Contains user-selected blocked website links as strings
 * @returns {Boolean} `true` if update was successful, `false` otherwise
 */
const setWebsiteBlockingSettings = async (blockingData) => {
    const data = { blocking: blockingData };
    return setLocalStorageWrapper(settingsKeys.BLOCK, data);
};

export {
    defaultSettingsTemplate,
    settingsKeys,
    initSettings,
    getSessionTimerSettings,
    getWebsiteBlockingSettings,
    setSessionTimerSettings,
    setWebsiteBlockingSettings,
};
