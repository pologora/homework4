/* eslint-disable no-undef */
const { validateObject } = require('../../tasks/task7');

describe('Validate object', () => {
  test('should return boolean', () => {
    expect(typeof validateObject({}, {})).toBe('boolean');
  });
  test('empty objects should return true', () => {
    expect(validateObject({}, {})).toBeTruthy();
  });
  test('empty schema object should return true with any  objects', () => {
    expect(validateObject({ name: 'John' }, {})).toBeTruthy();
  });
  test('should return true if property are the same in object and schema', () => {
    const obj = { name: 'John', adress: { street: 'Big', post: 2020 } };
    const schema = { name: { type: 'string' } };
    expect(validateObject(obj, schema)).toBeTruthy();
  });
  test('should return true if property is an object the same in object and schema', () => {
    const obj = { name: 'John', adress: { street: 'Big', post: 2020 } };
    const schema = { adress: { type: 'object', value: { street: { type: 'string' } } } };
    expect(validateObject(obj, schema)).toBeTruthy();
  });
  test('should return true object 2 level down valid schema', () => {
    const obj = {
      name: 'John',
      adress: {
        street: 'Big',
        post: {
          number: 33,
        },
      },
    };
    const schema = {
      adress: {
        type: 'object',
        value: {
          street: { type: 'string' },
          post: {
            type: 'object',
            value: { number: { type: 'number' } },
          },
        },
      },
    };
    expect(validateObject(obj, schema)).toBeTruthy();
  });
});
