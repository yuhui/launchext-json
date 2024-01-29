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

describe('parse data element delegate', function() {
  beforeEach(function() {
    // eslint-disable-next-line quotes
    this.settings = {
      stringValue: '{"foo":1,"bar":2}',
    };
    this.turbine = mockTurbine();
    this.logger = this.turbine.logger;

    this.dataElementDelegate = proxyquire(
      '../../../src/lib/dataElements/parse',
      {
        '../controllers/turbine': this.turbine,
      }
    );
  });

  describe('with invalid "settings" argument', function() {
    it('logs a debug and returns nothing when "stringValue" is missing', function() {
      delete this.settings.stringValue;

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();

      const { debug: logDebug } = this.logger;
      expect(logDebug).toHaveBeenCalled();
    });

    it('logs an error and returns nothing when "stringValue" is not a valid string', function() {
      this.settings.stringValue = 123;

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();

      const { error: logError } = this.logger;
      expect(logError).toHaveBeenCalled();
    });

    it('logs an error and returns nothing when "reviver" is not a function', function() {
      this.settings.reviver = 'foo';

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();

      const { error: logError } = this.logger;
      expect(logError).toHaveBeenCalled();
    });
  });

  describe('with valid "settings" argument', function() {
    it('should be an Object when "stringValue" is valid', function() {
      const result = this.dataElementDelegate(this.settings);

      const expectedResult = JSON.parse(this.settings.stringValue);
      expect(result).toEqual(expectedResult);
    });

    it('should be an Object when "stringValue" and "reviver" are valid', function() {
      this.settings.reviver = function(k, v) {
        return v === 2 ? 'two' : v;
      };

      const result = this.dataElementDelegate(this.settings);

      const expectedResult = JSON.parse(
        this.settings.stringValue,
        this.settings.reviver
      );
      expect(result).toEqual(expectedResult);
    });

    it('should be undefined when "stringValue" is "undefined"', function() {
      this.settings.stringValue = 'undefined';

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();
    });

    it('logs an error when an error occurs', function() {
      this.settings.reviver = function() {
        throw 'die';
      };

      const result = this.dataElementDelegate(this.settings);

      expect(result).toBeUndefined();

      const { error: logError } = this.logger;
      expect(logError).toHaveBeenCalledWith('Parse: unexpected error occurred', 'die');
    });
  });
});
