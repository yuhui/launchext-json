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
 * Convert a JavaScript object or value to a JSON string.
 *
 * @param {Object} settings The data element settings object.
 * @param {String} settings.objectValue Object to convert to a JSON string.
 *
 * @returns {String} JSON string representing the given object.
 */
module.exports = function(settings) {
  try {
    validateValue(objectValue);
  } catch (e) {
    (objectValue === undefined ? logDebug : logError)(
      `Stringify: object ${e.message}`,
      objectValue
    );
    return;
  }


  var returnValue;
  try {
    returnValue = JSON.stringify(objectValue);
  } catch (e) {
    logError('Stringify: unexpected error occurred', e);
    return;
  }

  return returnValue;
};
