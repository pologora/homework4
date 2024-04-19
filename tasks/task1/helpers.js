function freezeProps(object) {
  Object.keys(object).forEach((key) => {
    Object.defineProperty(object, key, {
      configurable: false,
      writable: false,
    });
  });
}

module.exports = { freezeProps };
