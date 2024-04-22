/* eslint-disable no-undef */
const { validateMethod } = require('../../tasks/task7');

describe('Validate method', () => {
  test('should return true', () => {
    expect(validateMethod()).toBeTruthy();
  });
});
