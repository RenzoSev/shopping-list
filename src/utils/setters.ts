import { Avatar } from '../server/avatar';

export function setAvatarInStorage(avatar: Avatar) {
  localStorage.setItem('avatar', JSON.stringify(avatar));
}

export function setGlobalThemeInStorage(theme: string) {
  localStorage.setItem('theme', theme);
}

export function setGlobalDataThemeHTML(theme: string) {
  const html = document.querySelector('html');
  html?.setAttribute('data-theme', theme);
}
