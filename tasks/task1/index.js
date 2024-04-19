const { freezeProps } = require('./helpers');

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
};

freezeProps(person);

Object.defineProperty(person, 'updateInfo', {
  enumerable: true,
  value(info) {
    Object.entries(info).forEach(([key, value]) => {
      if (this[key] && Object.getOwnPropertyDescriptor(this, key).writable) {
        this[key] = value;
      } else {
        throw new Error(`Object property ${key} does not exist or close for updates`);
      }
    });
  },
});

Object.defineProperty(person, 'adress', {
  writable: true,
  value: {},
});
