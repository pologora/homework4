/* eslint-disable no-undef */
const { createImmutableObject } = require('../tasks/task4');

describe('Create immutable object copy', () => {
  test('should create immutable copy', () => {
    const obj = { name: 'Anna', adress: { street: 'Kolo', nr: 5, nested2: { prop1: 'hi', prop2: 'hello' } } };
    const clone = createImmutableObject(obj);
    const descriptors = Object.getOwnPropertyDescriptors(clone.adress);
    const descriptorsNested = Object.getOwnPropertyDescriptors(clone.adress.nested2);

    expect(descriptors.street.writable).toBeFalsy();
    expect(descriptors.street.configurable).toBeFalsy();
    expect(descriptors.nr.writable).toBeFalsy();
    expect(descriptors.nr.configurable).toBeFalsy();

    expect(descriptorsNested.prop1.writable).toBeFalsy();
    expect(descriptorsNested.prop1.configurable).toBeFalsy();
    expect(descriptorsNested.prop2.writable).toBeFalsy();
    expect(descriptorsNested.prop2.configurable).toBeFalsy();
  });
});
