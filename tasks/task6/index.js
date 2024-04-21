function deepCloneObject(obj, cloneObject = new WeakMap()) {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCloneObject(item, cloneObject));
  }

  if (typeof obj === 'object' && obj !== null) {
    if (cloneObject.has(obj)) {
      return cloneObject.get(obj);
    }

    const clone = {};
    cloneObject.set(obj, clone);

    Object.keys(obj).forEach((key) => {
      clone[key] = deepCloneObject(obj[key], cloneObject);
    });

    return clone;
  }

  return obj;
}

module.exports = deepCloneObject;
