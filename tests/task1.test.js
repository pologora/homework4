/* eslint-disable no-undef */
const person = require('../tasks/task1');

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     email: 'john.doe@example.com',
//   };

describe('Test person object', () => {
  test('props should not be changable directly', () => {
    person.lastName = '';
    person.age = '';
    person.email = '';
    person.firstName = '';

    expect(person.lastName).toBe('Doe');
    expect(person.age).toBe(30);
    expect(person.email).toBe('john.doe@example.com');
    expect(person.firstName).toBe('John');
  });

  test('props could be change by using method updateInfo', () => {
    const updatedInfo = {
      lastName: 'Change',
      firstName: 'Sucha',
      age: 33,
      email: 'mail@mai.com',
    };
    person.updateInfo(updatedInfo);
    expect(person).toMatchObject({
      lastName: 'Change',
      firstName: 'Sucha',
      age: 33,
      email: 'mail@mai.com',
    });
  });
  test('prop adress should be non-enumerable and non-configurable', () => {
    const descriptors = Object.getOwnPropertyDescriptor(person, 'adress');
    expect(descriptors.configurable).toBeFalsy();
    expect(descriptors.enumerable).toBeFalsy();
    expect(descriptors.writable).toBeTruthy();
  });
  test('should throw if using updateInfo method with a key that does not exist', () => {
    expect(() => person.updateInfo({ test: 'ttt' })).toThrow();
  });
});
