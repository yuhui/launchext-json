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

describe('json helper delegate', function() {
  global.turbine = {
    logger: jasmine.createSpyObj('', ['debug', 'info', 'warn', 'alert', 'error']),
  };
  var helperDelegate = require('../../lib/helpers/json');

  describe('has JSON', function() {
    it(
      'should always be true',
      function() {
        var result = helperDelegate.hasJSON();
        expect(result).toBeTrue();
      }
    );
  });

  describe('check for valid values', function() {
    it(
      'should log an error message and return false when "value" is falsy',
      function() {
        var result = helperDelegate.isValidValue(null);
        expect(result).toBeFalse();
        var logResult = global.turbine.logger.error;
        expect(logResult).toHaveBeenCalledWith('the value to operate on is invalid');
      }
    );

    it(
      'should return true when "value" is truthy',
      function() {
        var result = helperDelegate.isValidValue({"foo": 1, "bar": 2});
        expect(result).toBeTrue();
      }
    );

    it(
      'should log an error message and return false when "value" is not a string',
      function() {
        var result = helperDelegate.isValidValue({"foo": 1, "bar": 2}, true);
        expect(result).toBeFalse();
        var logResult = global.turbine.logger.error;
        expect(logResult).toHaveBeenCalledWith('the value to parse is not a string');
      }
    );

    it(
      'should return true when "value" is a string',
      function() {
        var result = helperDelegate.isValidValue('{"foo": 1, "bar": 2}', true);
        expect(result).toBeTrue();
      }
    );
  });
});
