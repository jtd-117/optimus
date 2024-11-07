/**
 * @file utils.js
 * @description A compilation of utility functions used across different Chrome scripts
 */

/**
 * @description Provides a mechanism for abstracting asynchronous error handling
 * @param {Promise} promise An asynchronous operation
 * @returns {[Promise, Error]} [response, null] if the promise resolves, [null, error] if the promise rejects
 */
const asyncWrapper = async (promise) => {
    try {
        const response = await promise;
        return [response, null];
    } catch(error) {
        return [null, error]
    }
};

export default asyncWrapper;
