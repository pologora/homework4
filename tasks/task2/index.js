/* eslint-disable no-shadow */
const product = {
  name: 'Laptop',
  price: 1000,
  quantity: 5,
};

// make the price and quantity properties non-enumerable and non-writable
Object.defineProperties(product, {
  price: {
    enumerable: false,
    writable: false,
    configurable: false,
  },
  quantity: {
    enumerable: false,
    writable: false,
    configurable: false,
  },
});

/**
 * Implement a function called getTotalPrice that takes the product object as an argument and
 *  returns the total price (calculated as price * quantity). Ensure that the function accesses
 * the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.
 */
function getTotalPrice(product) {
  const price = Object.getOwnPropertyDescriptor(product, 'price').value;
  const quantity = Object.getOwnPropertyDescriptor(product, 'quantity').value;

  return price * quantity;
  //   return product.price * product.quantity ==> still works;
}

function deleteNonConfigurable(obj, prop) {
  if (!Object.getOwnPropertyDescriptor(obj, prop).configurable) {
    throw new Error(`Property ${prop} is not configurable, impossible to  delete it`);
  }

  // eslint-disable-next-line no-param-reassign
  delete obj[prop];
}

module.exports = { deleteNonConfigurable, getTotalPrice, product };
