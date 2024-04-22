/* eslint-disable no-undef */
const { validateNumber } = require('../../tasks/task7');

describe('Validate number', () => {
  test('should return boolean', () => {
    expect(typeof validateNumber(3, {})).toBe('boolean');
  });
  test('should return true on valid schema', () => {
    const number = 100;
    const schema = { min: 1, max: 1000, value: 100 };

    expect(validateNumber(number, schema)).toBeTruthy();
  });
  test('should return false on invalid schema', () => {
    const number = 100;
    const schemaWrongMin = { min: 1000, max: 1000, value: 100 };
    const schemaWrongMax = { min: 1, max: 1, value: 100 };
    const schemaWrongValue = { min: 1, max: 1000, value: 300 };

    expect(validateNumber(number, schemaWrongMin)).toBeFalsy();
    expect(validateNumber(number, schemaWrongMax)).toBeFalsy();
    expect(validateNumber(number, schemaWrongValue)).toBeFalsy();
  });
});
