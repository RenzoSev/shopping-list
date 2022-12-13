import { get, ref, database } from './connection';

export interface Avatar {
  img: string;
  name: string;
}

export async function getAvatar(avatarCode: string) {
  try {
    const rawAvatar = await get(ref(database, `avatar/${avatarCode}`));
    const avatar = rawAvatar.val() as Avatar | null;

    return avatar;
  } catch (e) {
    console.error(e);
    return null;
  }
}
