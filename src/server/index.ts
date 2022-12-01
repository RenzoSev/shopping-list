import { onValue, ref, database } from './connection';

export interface Products {
  firstUpdater: string;
  lastUpdater: string;
  name: string;
  length: number;
  hasBought: boolean;
}

export async function getAllProducts() {
  return onValue(ref(database, 'products'), (snapshot) => {
    if (!snapshot.exists()) return null;

    const rawValue = snapshot.val() as Record<string, Products>;
    return Object.entries(rawValue).map((entry) => entry[1]);
  });
}
