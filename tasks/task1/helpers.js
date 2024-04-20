function makePropsReadOnly(object) {
  Object.keys(object).forEach((key) => {
    Object.defineProperty(object, key, {
      configurable: true,
      writable: false,
    });
  });
}

module.exports = { makePropsReadOnly };
