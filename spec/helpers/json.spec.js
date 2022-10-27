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

describe('json helper delegate', () => {
  global.turbine = {
    logger: jasmine.createSpyObj('', ['debug', 'info', 'warn', 'alert', 'error']),
  };
  const helperDelegate = require('../../src/lib/helpers/json');

  describe('has JSON', () => {
    it(
      'should always be true',
      () => {
        const result = helperDelegate.hasJSON();
        expect(result).toBeTrue();
      }
    );
  });

  describe('check for valid values', () => {
    it(
      'should log a debug message and return false when "value" is undefined',
      () => {
        const result = helperDelegate.isValidValue(undefined);
        expect(result).toBeFalse();
        const logResult = global.turbine.logger.debug;
        expect(logResult).toHaveBeenCalledWith('the value to operate on is undefined');
      }
    );

    it(
      'should return true when "value" is truthy',
      () => {
        const testObject = {
          foo: 1,
          bar: 2,
        };
        const result = helperDelegate.isValidValue(testObject);
        expect(result).toBeTrue();
      }
    );

    it(
      'should log an error message and return false when "value" is not a string',
      () => {
        const testObject = {
          foo: 1,
          bar: 2,
        };
        const result = helperDelegate.isValidValue(testObject, true);
        expect(result).toBeFalse();
        const logResult = global.turbine.logger.error;
        expect(logResult).toHaveBeenCalledWith('the value to operate on is not a string');
      }
    );

    it(
      'should return true when "value" is a string',
      () => {
        const testString = '{"foo": 1, "bar": 2}';
        const result = helperDelegate.isValidValue(testString, true);
        expect(result).toBeTrue();
      }
    );
  });
});
