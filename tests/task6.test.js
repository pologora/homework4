/* eslint-disable no-undef */
const deepCloneObject = require('../tasks/task6');

const originalObj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

describe('Deep Cloning', () => {
  test('should create a clone', () => {
    const obj1 = { name: 'lis' };
    const obj2 = { name: 'bug' };
    obj1.refToObj2 = obj2;
    obj2.refToObj1 = obj1;

    const cloneObject = deepCloneObject(originalObj);
    const cloneObj2 = deepCloneObject(obj2);

    expect(cloneObject).toEqual(originalObj);
    expect(originalObj === cloneObject).toBeFalsy();
    expect(cloneObj2).toEqual(obj2);
    expect(cloneObj2 === obj2).toBeFalsy();
  });
});
