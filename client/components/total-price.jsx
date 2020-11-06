import PriceFormat from './priceFormat';

export default function TotalPrice(array) {
  let total = 0;
  array.forEach(item => {
    total += item.price;
  });
  return PriceFormat(total);
}
