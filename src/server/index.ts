import { onValue, ref, database } from './connection';

export interface Products {
  firstUpdater: string;
  lastUpdater: string;
  name: string;
  length: number;
  hasBought: boolean;
}

export async function getAllProducts(): Promise<Products[]> {
  return onValue(ref(database, 'products'), (snapshot) => {
    if (!snapshot.exists()) return null;

    const rawValue = snapshot.val() as Record<string, Products>;
    const value = Object.entries(rawValue).map((entry) => entry[1]);

    return value;
  }) as unknown as Products[];
}
