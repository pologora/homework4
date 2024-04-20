const product = {
  name: 'Laptop',
  price: 1000,
  quantity: 5,
};

Object.defineProperties(product, {
  price: {
    enumerable: false,
    writable: false,
  },
  quantity: {
    enumerable: false,
    writable: false,
  },
});

function getTotalPrice(product) {
  return product.price * product.quantity;
}

function deleteNonConfigurable(obj, prop) {
  if (!Object.getOwnPropertyDescriptor(obj, prop).configurable) {
    throw new Error(`Property ${prop} is not configurable, impossible to  delete it`);
  }
}

console.log(getTotalPrice(product));
