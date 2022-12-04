import { getAvatarFromStorage } from '../utils/getters';

export function useAvatar() {
  const avatar = getAvatarFromStorage();
  const hasAvatar = Boolean(avatar);

  return { avatar, hasAvatar };
}