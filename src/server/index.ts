import { onValue, ref, database, remove, set } from './connection';
import { uuid } from '../utils/uuid';

export interface Product {
  createdBy: string;
  updatedBy: string;
  name: string;
  length: number;
  hasBought: boolean;
}

export async function getAllProducts(
  set: React.Dispatch<React.SetStateAction<Product[]>>
) {
  return onValue(ref(database, 'products'), (product) => {
    if (!product.exists()) return null;

    const rawValue = product.val() as Record<string, Product>;
    const value = Object.entries(rawValue).map((entry) => entry[1]);

    return set(value);
  });
}

export async function removeProduct(productId: string): Promise<void> {
  remove(ref(database, `products/${productId}`));
}

export async function createProduct(product: Product) {
  try {
    const productId = uuid();

    set(ref(database, `products/${productId}`), product);
  } catch (e) { 
    console.error(e);
  }
}

// ATUALIZAR QUANTIDADE

// RISCAR PRODUTO COMO FEITO