/**
 * @file toaster.js
 * @description Handles logic for toaster functionality
 * @link {https://github.com/caroso1222/notyf}
 */

import { Notyf } from 'notyf';
import "../../node_modules/notyf/notyf.min.css";

/**
 * @description Instatiate the notyf and add custom styles
 */
const notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top',
    }
});

/**
 * @description Shows a SUCCESS notification
 * @param {string} message Text of the success toaster
 */
const showSuccess = (message) => notyf.success(message);

/**
 * @description Shows an ERROR notification
 * @param {string} message Text of the error toaster
 */
const showError = (message) => notyf.error(message);

export {
    showSuccess,
    showError,
};
