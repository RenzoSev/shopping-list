import { onValue, ref, database, remove } from './connection';

export interface Products {
  firstUpdater: string;
  lastUpdater: string;
  name: string;
  length: number;
  hasBought: boolean;
}

export async function getAllProducts(
  set: React.Dispatch<React.SetStateAction<Products[]>>
) {
  return onValue(ref(database, 'products'), (snapshot) => {
    if (!snapshot.exists()) return null;

    const rawValue = snapshot.val() as Record<string, Products>;
    const value = Object.entries(rawValue).map((entry) => entry[1]);

    return set(value);
  });
}

export async function removeProduct(productId: string): Promise<void> {
  remove(ref(database, `products/${productId}`));
}

// CRIAR PRODUTO

// ATUALIZAR QUANTIDADE

// RISCAR PRODUTO COMO FEITO