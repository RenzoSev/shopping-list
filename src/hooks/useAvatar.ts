import { Avatar } from '../server/avatar';
import { getAvatarFromStorage } from '../utils/getters';
import { setAvatarInStorage } from '../utils/setters';

export function useAvatar() {
  const rawAvatar = getAvatarFromStorage();
  const hasAvatar = Boolean(rawAvatar);
  const avatar = rawAvatar || ({ img: String(), name: String() } as Avatar);

  return { avatar, hasAvatar, setAvatar: setAvatarInStorage };
}
