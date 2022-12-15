import { Product } from '../server/product';

export function updateMoreLengthProduct(product: Product) {
  return {
    ...product,
    length: product.length + 1,
  };
}

export function updateLessLengthProduct(product: Product) {
  return {
    ...product,
    length: product.length - 1,
  };
}
