/* eslint-disable no-undef */
const { validateBigInt } = require('../../tasks/task7');

describe('Valid bigint', () => {
  test('should return boolean', () => {
    expect(typeof validateBigInt(2, 3)).toBe('boolean');
  });
  test('should return true in valid object - schema', () => {
    const value = 100n;
    const schema = { min: 10n, max: 100000n, value: 100n };
    expect(validateBigInt(value, schema)).toBeTruthy();
  });
  test('should return false invalid object - schema', () => {
    const value = 100n;
    const schema = { min: 1000n, max: 100000n, value: 100n };
    const schemaWrongMax = { min: 1n, max: 1n, value: 100n };
    const schemaWrongValue = { min: 1n, max: 100000n, value: 100111n };
    expect(validateBigInt(value, schema)).toBeFalsy();
    expect(validateBigInt(value, schemaWrongMax)).toBeFalsy();
    expect(validateBigInt(value, schemaWrongValue)).toBeFalsy();
  });
});
