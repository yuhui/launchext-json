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

module.exports = {
  /**
   * Checks that the JSON object exists.
   *
   * @return {boolean} `true` if the JSON object exists, `false` otherwise.
   */
  hasJSON: function() {
    var result = true;

    if (!JSON || !JSON.parse || !JSON.stringify) {
      turbine.logger.error('JSON not available');
      result = false;
    }

    return result;
  },

  /**
   * Checks that the value to operate on is valid for the operation.
   *
   * @param {Object} value The value to validate.
   * @param {boolean} isString (optional) `true` if the value is a string.
   *
   * @return {boolean} `true` if the value is valid, `false` otherwise.
   */
  isValidValue: function(value, isString) {
    var result = true;

    if (value === undefined || value === null) {
      // skip undefined and null values
      // because this module could have been called in Rules that don't actually have the dependent
      // data elements
      turbine.logger.debug('the value to operate on is undefined or null');
      result = false;
    } else {
      if (!value) {
        turbine.logger.error('the value to operate on is invalid');
        result = false;
      }

      if (value && isString) {
        var valueType = Object.prototype.toString.call(value).slice(8, -1);
        if (valueType !== 'String') {
          turbine.logger.error('the value to parse is not a string');
          result = false;
        }
      }
    }

    return result;
  }
};
