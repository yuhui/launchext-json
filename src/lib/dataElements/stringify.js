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

var jsonHelper = require('../helpers/json');

/**
 * Convert a JavaScript object or value to a JSON string.
 *
 * @param {Object} settings The data element settings object.
 * @param {String} settings.objectValue Object to convert to a JSON string.
 *
 * @returns {String} JSON string representing the given object.
 */
module.exports = function(settings) {
  if (!jsonHelper.hasJSON()) {
    return;
  }

  var objectValue = settings.objectValue;
  if (!jsonHelper.isValidValue(objectValue)) {
    return;
  }

  var returnValue;
  try {
    returnValue = JSON.stringify(objectValue);
  } catch (e) {
    turbine.logger.error(
      'unexpected error occurred with JSON.stringify(): ' +  e.message
    );
    return;
  }

  return returnValue;
};
