import { Avatar } from '../server/avatar';

export function getAvatarFromStorage() {
  const rawAvatar = String(localStorage.getItem('avatar'));
  const avatar = JSON.parse(rawAvatar);

  if (!avatar) return null;

  return avatar as Avatar;
}
