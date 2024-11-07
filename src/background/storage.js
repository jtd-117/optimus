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
const initSettings = async (initSettings = defaultSettingsTemplate) => {

    // NOTE: `initSettings` is validated in `options.js`
    const [,error] = await asyncWrapper(chrome.storage.local.set(initSettings));
    if (error) {
        console.error("Failed to save `initSettings` in `chrome.storage.local`", error);
        return false;
    }
    return true;
};

/**
 * @description Retrieves session timer settings from storage
 * @returns {Object} Contains the keys 'hours', 'minutes' and 'seconds'
 */
const getSessionTimerSettings = async () => {
    const [data, error] = await asyncWrapper(chrome.storage.local.get(settingsKeys.TIMER));
    if (error) {
        console.error("Failed to retrieve session timer settings from `chrome.storage.local`");
        return null;
    }
    return data[settingsKeys.TIMER];
};

/**
 * @description Retrieves website blocking settings from storage
 * @returns {Array<string>} Contains user-selected blocked website links as strings
 */
const getWebsiteBlockingSettings = async () => {
    const [data, error] = await asyncWrapper(chrome.storage.local.get(settingsKeys.BLOCK));
    if (error) {
        console.error("Failed to retrieve website blocking settings from `chrome.storage.local`");
        return null;
    }
    return data[settingsKeys.BLOCK];
};

/**
 * @description Updates session timer settings
 * @param {Object} newSettings Contains the keys 'hours', 'minutes' and 'seconds'
 * @returns {Boolean} `true` if update was successful, `false` otherwise
 */
const setSessionTimerSettings = async (newSettings) => {

    // NOTE: `newSettings` is validated in `options.js`
    const [,error] = await asyncWrapper(chrome.storage.local.set({
        timer : newSettings,
    }));
    if (error) {
        console.error("Failed to update session timer settings in `chrome.storage.local`", error);
        return false;
    }
    return true;
};

/**
 * @description Updates website blocking settings
 * @param {Array<string>} newSettings Contains user-selected blocked website links as strings
 * @returns {Boolean} `true` if update was successful, `false` otherwise
 */
const setWebsiteBlockingSettings = async (newSettings) => {

    // NOTE: `newSettings` is validated in `options.js`
    const [,error] = await asyncWrapper(chrome.storage.local.set({
        blocking: newSettings,
    }));
    if (error) {
        console.error("Failed to update website blocking settings in `chrome.storage.local`", error);
        return false;
    }
    return true;
}

export { 
    settingsKeys,
    initSettings,
    getSessionTimerSettings,
    getWebsiteBlockingSettings,
    setSessionTimerSettings,
    setWebsiteBlockingSettings,
};
