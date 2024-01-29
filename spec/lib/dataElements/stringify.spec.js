/**
 * Copyright 2021-2024 Yuhui. All rights reserved.
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

const mockTurbine = require('../../specHelpers/mockTurbine');
const proxyquire = require('proxyquire').noCallThru();

describe('stringify data element delegate', function() {
  beforeEach(function() {
    this.settings = {
      objectValue: { foo: 1, bar: 2, 3: 'three'},
    };
    this.turbine = mockTurbine();
    this.logger = this.turbine.logger;

    this.dataElementDelegate = proxyquire(
      '../../../src/lib/dataElements/stringify',
      {
        '../controllers/turbine': this.turbine,
      }
    );
  });

  describe('with invalid "settings" argument', function() {
    it('logs a debug and returns nothing when "objectValue" is missing', function() {
      delete this.settings.objectValue;

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();

      const { debug: logDebug } = this.logger;
      expect(logDebug).toHaveBeenCalled();
    });

    it('logs an error and returns nothing when "replacer" is not a function nor array', function() {
      this.settings.replacer = 'foo';

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();

      const { error: logError } = this.logger;
      expect(logError).toHaveBeenCalled();
    });

    it('logs an error and returns nothing when "replacer" array is invalid', function() {
      this.settings.replacer = ['foo', 2, true];

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();

      const { error: logError } = this.logger;
      expect(logError).toHaveBeenCalledWith(
        'Stringify: replacer items must be strings or numbers',
        this.settings.replacer
      );
    });

    it('logs an error and returns nothing when "space" is not a string nor number', function() {
      this.settings.space = ['foo'];

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();

      const { error: logError } = this.logger;
      expect(logError).toHaveBeenCalled();
    });
  });

  describe('with valid "settings" argument', function() {
    it('should be a string when "objectValue" is valid', function() {
      const result = this.dataElementDelegate(this.settings);

      const expectedResult = JSON.stringify(this.settings.objectValue);
      expect(result).toEqual(expectedResult);
    });

    it('should be a string when "objectValue" and "replacer" function are valid', function() {
      this.settings.replacer = function(k, v) {
        return v === 2 ? 'two' : v;
      };

      const result = this.dataElementDelegate(this.settings);

      const expectedResult = JSON.stringify(
        this.settings.objectValue,
        this.settings.replacer
      );
      expect(result).toEqual(expectedResult);
    });

    it('should be a string when "objectValue" and "replacer" array are valid', function() {
      this.settings.replacer = ['foo', 3];

      const result = this.dataElementDelegate(this.settings);

      const expectedResult = JSON.stringify(
        this.settings.objectValue,
        this.settings.replacer
      );
      expect(result).toEqual(expectedResult);
    });

    it('should be a string when "objectValue" and numeric "space" are valid', function() {
      this.settings.space = 4;

      const result = this.dataElementDelegate(this.settings);

      const expectedResult = JSON.stringify(
        this.settings.objectValue,
        null,
        this.settings.space
      );
      expect(result).toEqual(expectedResult);
    });

    it('logs an error when an error occurs', function() {
      this.settings.replacer = function() {
        throw 'die';
      };

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();

      const { error: logError } = this.logger;
      expect(logError).toHaveBeenCalledWith('Stringify: unexpected error occurred', 'die');
    });
  });
});
