import { Avatar } from '../server/avatar';

export function getAvatarFromStorage() {
  const rawAvatar = String(localStorage.getItem('avatar'));
  const avatar = JSON.parse(rawAvatar);

  if (!avatar) return null;

  return avatar as Avatar;
}
export function getProductToBeCreated(
  productCategory: string,
  productLength: string,
  productName: string
) {
  return {
    category: productCategory,
    length: Number(productLength),
    name: productName,
  };
}