/**
 * @file storage.js
 * @description Manages access or edits to the Chrome extension's storage
 * @link {https://developer.chrome.com/docs/extensions/reference/api/storage}
 */

import asyncWrapper from "../scripts/async-wrapper";
import * as ds from "../scripts/default-settings";

/**
 * @description Initialises extension settings upon download or via import
 * @param {Object} data The default settings of the extension
 */
const initSettings = async (settings = ds.defaultSettings) => {

    // NOTE: `settings` is validated in `options.js`
    const [,error] = await asyncWrapper(chrome.storage.local.set(settings));
    if (error) {
        console.error(`Failed to set 'ds.defaultSettings' to 'chrome.storage.local'.`, error);
    }
};

/**
 * @description An asynchronous wrapper function for the GET operation in Chrome's storage API
 * @param {settingsKeys} key A string being settingsKeys.TIMER or settingsKeys.BLOCK
 * @returns {Promise<Object|Array<string>|null>} Object if settingsKeys.TIMER, array of strings of settingsKeys.BLOCK, `null` if reject
 */
const getLocalStorageWrapper = async (key) => {
    const [storage, error] = await asyncWrapper(chrome.storage.local.get(key));
    if (error) {
        console.error(`Failed to get '${key}' settings from 'chrome.storage.local'`, error);
        return null;
    }
    return storage[key];
};

/**
 * @description Retrieves session timer settings from storage
 * @returns {Promise<Object|null>} Contains the keys 'hours', 'minutes' and 'seconds'
 */
const getSessionTimerSettings = async () => {
    return await getLocalStorageWrapper(ds.settingsKeys.TIMER);
};

/**
 * @description Retrieves website blocking settings from storage
 * @returns {Promise<Array<string>|null>} Contains user-selected blocked website links as strings
 */
const getWebsiteBlockingSettings = async () => {
    return await getLocalStorageWrapper(ds.settingsKeys.BLOCK);
};

/**
 * @description Retrieves the status of the chrome extension
 * @returns {Promise<Boolean>|null} `true` if the session timer and block list is active, `false` otherwise
 */
const getActiveStatus = async () => {
    return await getLocalStorageWrapper(ds.settingsKeys.STATUS);
};

/**
 * @description An asynchronous wrapper function for the SET operation in Chrome's storage API
 * @param {settingsKeys} key A string being settingsKeys.TIMER or settingsKeys.BLOCK
 * @param {Object/Array<string>} data If settingsKeys.TIMER an Object, otherwise an array for settingsKeys.BLOCK
 * @returns {Promise<Boolean>} `true` if update was successful, `false` otherwise
 */
const setLocalStorageWrapper = async (key, data) => {

    // NOTE: `data` is validated in `options.js`
    const [,error] = await asyncWrapper(chrome.storage.local.set(data));
    if (error) {
        console.error(`Failed to update '${key}' settings in 'chrome.storage.local'`, error);
        return false;
    }
    return true;
};

/**
 * @description Updates session timer settings
 * @param {Object} timerData Contains the keys 'hours', 'minutes' and 'seconds'
 * @returns {Promise<Boolean>} `true` if update was successful, `false` otherwise
 */
const setSessionTimerSettings = async (timerData) => {
    return await setLocalStorageWrapper(ds.settingsKeys.TIMER, { timer: timerData });
};

/**
 * @description Updates website blocking settings
 * @param {Array<string>} newSettings Contains user-selected blocked website links as strings
 * @returns {Promise<Boolean>} `true` if update was successful, `false` otherwise
 */
const setWebsiteBlockingSettings = async (blockingData) => {
    return await setLocalStorageWrapper(ds.settingsKeys.BLOCK, { blocking: blockingData });
};

/**
 * @description Updates the active status of the extension
 * @param {Boolean} status `true` if the session timer and block list is active, `false` otherwise
 * @returns {Promise<Boolean>} `true` if update was successful, `false` otherwise
 */
const setActiveStatus = async (status) => {
    return await setLocalStorageWrapper(ds.settingsKeys.STATUS, { activeStatus: status })
};

export {
    initSettings,
    getSessionTimerSettings,
    getWebsiteBlockingSettings,
    getActiveStatus,
    setSessionTimerSettings,
    setWebsiteBlockingSettings,
    setActiveStatus,
};
