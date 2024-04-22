/* eslint-disable no-undef */
const { validateString } = require('../../tasks/task7');

describe('Validate string', () => {
  test('should return boolean', () => {
    expect(typeof validateString('', {})).toBe('boolean');
  });

  test('should return true on valid schema', () => {
    const string = 'John';
    const schema = {
      min: 1,
      max: 100,
      length: 4,
      value: 'John',
    };
    expect(validateString(string, schema)).toBeTruthy();
  });

  test('should return false on invalid schema', () => {
    const string = 'John';
    const schemaWrongMin = { min: 100, max: 100, length: 4 };
    const schemaWrongMax = { min: 1, max: 1, length: 4 };
    const schemaWrongLength = { min: 1, max: 100, length: 10 };
    const schemaWrongValue = {
      min: 1,
      max: 100,
      length: 4,
      value: 'fali',
    };

    expect(validateString(string, schemaWrongMin)).toBeFalsy();
    expect(validateString(string, schemaWrongMax)).toBeFalsy();
    expect(validateString(string, schemaWrongLength)).toBeFalsy();
    expect(validateString(string, schemaWrongValue)).toBeFalsy();
  });
});
