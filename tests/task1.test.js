/* eslint-disable no-undef */
const person = require('../tasks/task1');

describe('Test person object', () => {
  test('should change adress property', () => {
    const adressObject = { street: 'bol' };
    person.adress = adressObject;
    expect(person.adress).toEqual(adressObject);
  });
  test('read-only props should be not changable', () => {
    const { firstName } = person;
    console.log(firstName);
    person.firstName = 'Changed';
    expect(person.firstName).toEqual(firstName);
  });
  const descriptor = Object.getOwnPropertyDescriptor(person, 'firstName').configurable === false;
  test('person object props should be read-only and non-writable');
});
