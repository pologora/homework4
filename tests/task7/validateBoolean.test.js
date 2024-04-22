/* eslint-disable no-undef */
const { validateBoolean } = require('../../tasks/task7');

describe('Validate boolean', () => {
  test('should return boolean', () => {
    expect(typeof validateBoolean(true, { value: false })).toBe('boolean');
  });
  test('should return false', () => {
    expect(validateBoolean(false, { value: true })).toBeFalsy();
    expect(validateBoolean(true, { value: false })).toBeFalsy();
  });
  test('should return true', () => {
    expect(validateBoolean(true, { value: true })).toBeTruthy();
    expect(validateBoolean(false, { value: false })).toBeTruthy();
  });
});
