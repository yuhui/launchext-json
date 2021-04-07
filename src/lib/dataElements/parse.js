/**
 * Copyright 2021 Yuhui. All rights reserved.
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

var jsonHelper = require('../helpers/json');

/**
 * Construct the JavaScript value or object described by the JSON string.
 *
 * @param {Object} settings The data element settings object.
 * @param {string} settings.stringValue JSON string value to parse.
 *
 * @returns {Object} The Object, Array, string, number, boolean, or null value
 *  corresponding to the given JSON string.
 */
module.exports = function(settings) {
  if (!jsonHelper.hasJSON()) {
    return;
  }

  var stringValue = settings.stringValue;
  if (!jsonHelper.isValidValue(stringValue, true)) {
    return;
  }

  var returnValue;
  try {
    returnValue = JSON.parse(stringValue);
  } catch (e) {
    turbine.logger.error(
      'unexpected error occurred with JSON.parse(): ' +  e.message
    );
    return;
  }

  return returnValue;
};
