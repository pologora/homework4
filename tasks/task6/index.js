function deepCloneObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepCloneObject);
  }

  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepCloneObject(obj[key]);
      return acc;
    }, {});
  }

  return obj;
}

module.exports = deepCloneObject;
