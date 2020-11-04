export default function priceformat(price) {
  const productPrice = price;
  const prices = productPrice.toString().split('');
  prices.splice((prices.length - 2), 0, '.');
  return `$${prices.join('')}`;
}
