/* eslint-disable prefer-rest-params */
const person = require('../task1');

function observeObject(obj, callback) {
  const handler = {
    get(target, prop) {
      callback(target, prop, 'get');
      return Reflect.get(...arguments);
    },

    set(target, prop) {
      callback(target, prop, 'set');
      return Reflect.set(...arguments);
    },
  };

  const proxy = new Proxy(obj, handler);

  return proxy;
}

function log(obj, prop, operation) {
  console.log(` ${operation} called on an property ${prop}`);
}

const personProxy = observeObject(person, log);

module.exports = { observeObject, personProxy };
