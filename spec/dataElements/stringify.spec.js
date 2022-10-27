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

describe('stringify data element delegate', () => {
  const dataElementDelegate = require('../../src/lib/dataElements/stringify');

  beforeEach(() => {
    this.expectedResult = '{"foo":1,"bar":2}';
    this.settings = {
      objectValue: JSON.parse(this.expectedResult),
    };
  });

  describe('with invalid "settings" argument', () => {
    it(
      'should return undefined when "objectValue" is missing',
      () => {
        delete this.settings.objectValue;
        const result = dataElementDelegate(this.settings);
        expect(result).toBeUndefined();
      }
    );
  });

  describe('with valid "settings" argument', () => {
    it(
      'should be an Object when "objectValue" is valid',
      () => {
        const result = dataElementDelegate(this.settings);
        expect(result).toEqual(this.expectedResult);
      }
    );
  });
});
