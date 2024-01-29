/**
 * Copyright 2024 Yuhui. All rights reserved.
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

/**
 * Checks that the value to operate on is valid for the operation.
 *
 * @param {Object} value The value to validate.
 * @param {String[]} expectedTypes (optional) One or more types that the value is expected to be.
 *
 * @returns {Boolean} `true` if the value is valid.
 *
 * @throws {Error} value is `undefined`.
 * @throws {TypeError} value is not any of the specified expected types.
 */
module.exports = function(value, expectedTypes = []) {
  if (value === undefined) {
    // skip undefined values because JSON doesn't operate on them
    throw new Error('value is undefined');
  } else if (expectedTypes.length > 0) {
    const valueType = Object.prototype.toString.call(value).toLowerCase();
    const isOneOfExpectedTypes = expectedTypes.some((expectedType) => {
      let isExpectedType = valueType === `[object ${expectedType}]`;

      // a number must not be NaN
      if (expectedType === 'number') {
        isExpectedType &= !Number.isNaN(value);
      }

      return isExpectedType;
    });
    if (!isOneOfExpectedTypes) {
      throw new TypeError(`value is not of type(s) ${expectedTypes.join(', ')}`);
    }
  }

  return true;
};
