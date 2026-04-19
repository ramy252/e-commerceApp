export function calcDiscount(price, priceAfterDiscount) {


  const discountPercent = ((price - priceAfterDiscount) / price) * 100;

  return Math.round(discountPercent); // لو عايزها بدون كسور
}
