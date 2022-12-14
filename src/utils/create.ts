import { Avatar } from '../server/avatar';
import { Product } from '../server/product';
import { uuid } from '../utils/uuid';

interface RawProduct {
  name: Product['name'];
  length: Product['length'];
  description: Product['description'];
  category: Product['category'];
}

export function createBaseProduct(
  product: RawProduct,
  avatar: Avatar
): Product {
  return {
    ...product,
    id: uuid(),
    createdBy: avatar.name,
    updatedBy: avatar.name,
    hasBought: false,
  } as Product;
}
