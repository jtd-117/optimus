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

/**
 * @description An enum of settings keys used for updateSettings and getSettings functions
 */
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
 */
const initSettings = async (data = defaultSettingsTemplate) => {

    // STEP 1: If importing non-template settings, ensure all subkeys are valid

    // STEP 2: Initialise extension settings
    const [,error] = await asyncWrapper(chrome.storage.local.set(data));
    if (error) {
        console.error("Failed to save settings in chrome.storage.local", error);
    }
};

/**
 * @description Updates extension settings for either the timer or website blocking list
 * @param {string} key "timer" or "blocking"
 * @param {Object|Array<string>} keyData If `key` is "timer", keyData is Object, otherwise Array for "blocking"
 */
const updateSettings = async (key, keyData) => {

};

/**
 * @description 
 * @param {string} key (optional) either "timer" or "blocking"
 * @returns {Object|Array<strings>} If there is no `key`, returns entire settings as an Object, if key is "timer" returns an Object, otherwise Array for "blocking" 
 */
const getSettings = async(key = null) => {

};

export { 
    settingsKeys,
    initSettings,
    updateSettings,
    getSettings,
};
