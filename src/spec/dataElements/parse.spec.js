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

describe('parse data element delegate', function() {
  var dataElementDelegate = require('../../lib/dataElements/parse');

  beforeEach(function() {
    this.expectedResult = {"foo": 1, "bar": 2};
    this.settings = {
      stringValue: JSON.stringify(this.expectedResult)
    };
  });

  describe('with invalid "settings" argument', function() {
    it(
      'should return undefined when "stringValue" is missing',
      function() {
        delete this.settings.stringValue;
        var result = dataElementDelegate(this.settings);
        expect(result).toBeUndefined();
      }
    );

    it(
      'should return undefined when "stringValue" is not a valid string',
      function() {
        this.settings.stringValue = 123;
        var result = dataElementDelegate(this.settings);
        expect(result).toBeUndefined();
      }
    );
  });

  describe('with valid "settings" argument', function() {
    it(
      'should be an Object when "stringValue" is valid',
      function() {
        var result = dataElementDelegate(this.settings);
        expect(result).toEqual(this.expectedResult);
      }
    );
  });
});
