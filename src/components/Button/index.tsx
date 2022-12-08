import { Component } from '../../types/Component';

interface Button {
  text: string;
  className?: string;
}

export const Button: Component<Button> = (props) => {
  const { text, className } = props;

  const defaultClassName = 'btn btn-active btn-secondary';

  return <button className={`${defaultClassName} ${className}`}>{text}</button>;
};
