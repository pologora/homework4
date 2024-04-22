/* eslint-disable no-undef */
const { validateArray } = require('../../tasks/task7');

describe('Validate array', () => {
  test('return true if array is valid to schema', () => {
    const array = [1, 2, 3];
    const schema = { min: 1, max: 10, length: 3 };
    expect(validateArray(array, schema)).toBeTruthy();
  });
  test('return false if array is not valid to schema', () => {
    expect(validateArray([1, 2, 'st'], { min: 5 })).toBeFalsy();
    expect(validateArray([1, 2, 'st'], { max: 1 })).toBeFalsy();
    expect(validateArray([1, 2, 'st'], { length: 6 })).toBeFalsy();
  });
});
