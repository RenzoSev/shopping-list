export function getAvatarFromStorage() {
  const avatar = localStorage.getItem('avatar');
  return avatar;
}