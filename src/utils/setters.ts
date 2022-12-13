import { Avatar } from '../server/avatar';

export function setAvatarInStorage(avatar: Avatar) {
  localStorage.setItem('avatar', JSON.stringify(avatar));
}
