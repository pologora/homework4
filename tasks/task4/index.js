const person = require('../task1');

function createImmutableObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(createImmutableObject);
  }

  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      Object.defineProperty(acc, key, {
        enumerable: true,
        writable: false,
        configurable: false,
        value: createImmutableObject(obj[key]),
      });

      return acc;
    }, {});
  }

  return obj;
}

const immutablePerson = createImmutableObject(person);

module.exports = { immutablePerson, createImmutableObject };
