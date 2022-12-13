import { Component } from '../../types/Component';

interface IAvatar {
  src: string;
  className?: string;
}

export const Avatar: Component<IAvatar> = (props) => {
  const { src, className } = props;

  const defaultClassName = 'rounded-full';

  return (
    <div className="avatar">
      <div className={`${defaultClassName} ${className}`}>
        <img src={src} />
      </div>
    </div>
  );
};
