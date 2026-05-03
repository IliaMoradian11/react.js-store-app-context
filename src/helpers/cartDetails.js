function buildCount(cart) {
  return cart.reduce((acc, cur) => (acc += cur.count), 0);
}

function buildTotalPrice(cart) {
  return cart.reduce((acc, cur) => (acc += cur.count * cur.price), 0);
}

export { buildCount, buildTotalPrice };
