/**
 * Copyright 2021-2022 Yuhui. All rights reserved.
 *
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.gnu.org/licenses/gpl-3.0.html
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {
  logger: {
    debug: logDebug,
    error: logError,
  },
} = require('../controllers/turbine');
const validateValue = require('../helpers/validateValue');

/**
 * Construct the JavaScript value or object described by the JSON string.
 *
 * @param {Object} settings The data element settings object.
 * @param {String} settings.stringValue JSON string value to parse.
 * @param {Function} [settings.reviver] (optional) Function to transform the value.
 *
 * @returns {Object} The Object, Array, string, number, boolean, or null value
 *  corresponding to the given JSON string.
 */
module.exports = function({ stringValue, reviver = null } = {}) {
  try {
    validateValue(stringValue, ['string']);
  } catch (e) {
    (stringValue === undefined ? logDebug : logError)(
      `Parse: JSON string ${e.message}`,
      stringValue
    );
    return;
  }
  if (reviver) {
    try {
      validateValue(reviver, ['function']);
    } catch (e) {
      logError(`Parse: reviver ${e.message}`, reviver);
      return;
    }
  }

  if (stringValue === 'undefined') {
    /**
     * Special case: JSON actually throws an error when parsing "undefined".
     * So return undefined anyway.
     */
    return;
  }

  const { parse } = JSON;

  let returnValue;
  try {
    returnValue = parse(stringValue, reviver);
  } catch (e) {
    logError('Parse: unexpected error occurred', e);
    return;
  }

  return returnValue;
};
