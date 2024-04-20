const { makePropsReadOnly } = require('./helpers');

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
};

makePropsReadOnly(person);

Object.defineProperty(person, 'updateInfo', {
  enumerable: true,
  configurable: true,
  value(info) {
    Object.entries(info).forEach(([key, value]) => {
      if (!this[key]) {
        throw new Error(`No such property ${key} in object`);
      }

      const descriptor = Object.getOwnPropertyDescriptor(this, key);
      if (descriptor.configurable === false && descriptor.writable === false) {
        throw new Error(`Object property ${key} is closed for edition`);
      }

      Object.defineProperty(this, key, {
        value,
      });
    });
  },
});

Object.defineProperty(person, 'adress', {
  writable: true,
  value: {},
});

module.exports = person;
