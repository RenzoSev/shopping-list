import { onValue, ref, database, remove, update, set } from './connection';

export interface Product {
  id: string;
  createdBy: string;
  updatedBy: string;
  name: string;
  length: number;
  category: string;
  hasBought: boolean;
  description: string;
}

export async function getAllProducts(
  set: React.Dispatch<React.SetStateAction<Product[]>>
) {
  return onValue(ref(database, 'products'), (product) => {
    if (!product.exists()) return null;

    const rawValue = product.val() as Record<string, Product>;
    const value = Object.entries(rawValue).map((entry) => ({
      ...entry[1],
      id: entry[0],
    }));

    return set(value);
  });
}

export async function removeProduct(productId: string): Promise<void> {
  remove(ref(database, `products/${productId}`));
}

export async function createProduct(product: Product) {
  try {
    set(ref(database, `products/${product.id}`), product);
  } catch (e) { 
    console.error(e);
  }
}

export async function updateProduct(product: Product) {
  try {
    update(ref(database, `products/${product.id}`), product);
  } catch (e) { 
    console.error(e);
  }
}
