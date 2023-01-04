function addToCart(lineItems) {
  var items = [];
  for (var i = 0; i < lineItems.length; i++) {
    var item = {
      variantId: lineItems[i].variant_id,
      quantity: lineItems[i].quantity
    }
    items.push(item);
  }
  cart.addVariants({ items: items });
}