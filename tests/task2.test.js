/* eslint-disable no-undef */
const { deleteNonConfigurable, getTotalPrice, product } = require('../tasks/task2');

// const product = {
//   name: 'Laptop',
//   price: 1000,
//   quantity: 5,
// };

describe('Task nr2', () => {
  test('getTotalPrice should return total price', () => {
    expect(getTotalPrice(product)).toBe(5000);
  });

  test('should delete props if descriptop is configurable', () => {
    deleteNonConfigurable(product, 'name');
    expect(product.name).toBeUndefined();
  });

  test('should throw if trying to delete non-cofigurable prop', () => {
    Object.defineProperty(product, 'test', {
      writable: true,
      enumerable: true,
      value: 'test-delete',
    });
    expect(() => deleteNonConfigurable(product, 'test')).toThrow();
  });
});
