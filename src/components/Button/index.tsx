import { Component } from '../../types/Component';

interface Button {
  text: string;
  className?: string;
  handleClick: () => void;
  type?: keyof typeof types;
}

const types = {
  primary: 'btn btn-active btn-secondary',
  loading: 'btn loading',
  error: 'btn btn-error',
  success: 'btn btn-success loading',
  disabled: 'btn-disabled btn btn-active btn-secondary',
};

export const Button: Component<Button> = (props) => {
  const { text, className, type: propsType, handleClick } = props;

  const type = propsType || 'primary';

  const defaultClassName = types[type];

  return (
    <button
      disabled={type === 'disabled'}
      onClick={handleClick}
      className={`${defaultClassName} ${className} w-48`}
    >
      {text}
    </button>
  );
};
