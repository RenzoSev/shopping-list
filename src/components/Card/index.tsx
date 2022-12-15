import { useAvatar } from '../../hooks/useAvatar';
import { Component } from '../../types/Component';
import { Avatar } from '../Avatar';
import { Button } from '../Button';

interface IProductCard {
  name: string;
  length: number;
  category: string;
  src: string;
  handleClickFirstButton: (...args: any[]) => void;
  handleClickSecondButton: (...args: any[]) => void;
}

export const ProductCard: Component<IProductCard> = (props) => {
  const {
    name,
    length,
    category,
    src,
    handleClickFirstButton,
    handleClickSecondButton,
  } = props;

  return (
    <div className="border flex items-center rounded justify-between py-2 px-3">
      <div className="flex flex-col gap-1">
        <span className="text-xl font-bold break-words w-30">
          {name} <span className="text-lg opacity-70">({length})</span>
        </span>

        <Avatar src={src} className="w-5 h-5" />
      </div>

      <div className="flex gap-4 items-center">
        <Button
          handleClick={handleClickFirstButton}
          text="-"
          type="circleError"
          className="btn-sm text-xl"
        />
        <Button
          handleClick={handleClickSecondButton}
          text="+"
          type="circleSuccess"
          className="btn-sm text-xl"
        />
      </div>
    </div>
  );
};
