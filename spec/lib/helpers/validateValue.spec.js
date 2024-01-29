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

describe('validateValue helper delegate', function() {
  beforeEach(function() {
    this.testArray = ['foo', 42];
    this.testFunction = jasmine.createSpy();
    this.testNumber = 42;
    this.testString = 'foo';
    this.testObject = {
      foo: 1,
      bar: 2,
    };
    this.helperDelegate = require('../../../src/lib/helpers/validateValue');
  });

  it('throws an error when "value" is undefined', function() {
    expect(() => {
      this.helperDelegate(undefined);
    }).toThrowError(Error, 'value is undefined');
  });

  it('throws an error when "value" is not of an expected type', function() {
    const expectedTypes = ['number'];
    expect(() => {
      this.helperDelegate(this.testString, expectedTypes);
    }).toThrowError(TypeError, `value is not of type(s) ${expectedTypes.join(', ')}`);
  });

  it('throws an error when "value" is not of expected types', function() {
    const expectedTypes = ['number', 'string'];
    expect(() => {
      this.helperDelegate(this.testObject, expectedTypes);
    }).toThrowError(TypeError, `value is not of type(s) ${expectedTypes.join(', ')}`);
  });

  it('throws an error when "value" is NaN', function() {
    const expectedTypes = ['number', 'string'];
    expect(() => {
      this.helperDelegate(Number(this.testString), expectedTypes);
    }).toThrowError(TypeError, `value is not of type(s) ${expectedTypes.join(', ')}`);
  });

  it('returns true when "value" is null', function() {
    const result = this.helperDelegate(null);
    expect(result).toBeTrue();
  });

  it('returns true when "value" is an object', function() {
    const result = this.helperDelegate(this.testObject);
    expect(result).toBeTrue();
  });

  it('returns true when "value" is of expected type "array"', function() {
    const expectedTypes = ['array'];
    const result = this.helperDelegate(this.testArray, expectedTypes);
    expect(result).toBeTrue();
  });

  it('returns true when "value" is of expected type "function"', function() {
    const expectedTypes = ['function'];
    const result = this.helperDelegate(this.testFunction, expectedTypes);
    expect(result).toBeTrue();
  });

  it('returns true when "value" is of expected type "string"', function() {
    const expectedTypes = ['string'];
    const result = this.helperDelegate(this.testString, expectedTypes);
    expect(result).toBeTrue();
  });

  it('returns true when "value" is of expected types "number" or "string"', function() {
    const testValues = [this.testNumber, `${this.testNumber}`];
    const expectedTypes = ['number', 'string'];
    testValues.forEach((testValue) => {
      const result = this.helperDelegate(testValue, expectedTypes);
      expect(result).toBeTrue();
    });
  });
});
