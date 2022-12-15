import { Component } from '../../types/Component';

interface Button {
  handleClick: () => void;
  text?: string;
  className?: string;
  type?: keyof typeof types;
}

const types = {
  primary: 'btn btn-active btn-secondary',
  loading: 'btn loading',
  error: 'btn btn-error',
  successLoading: 'btn btn-success loading',
  success: 'btn btn-success',
  disabled: 'btn-disabled btn btn-active btn-secondary',
  circle: 'btn btn-circle',
  circleSuccess: 'btn btn-success btn-circle',
  circleError: 'btn btn-error btn-circle',
};

export const Button: Component<Button> = (props) => {
  const { text, className, type: propsType, handleClick, children } = props;

  const type = propsType || 'primary';

  const defaultClassName = types[type];

  return (
    <button
      disabled={type === 'disabled'}
      onClick={handleClick}
      className={`${defaultClassName} ${className}`}
    >
      {text || children}
    </button>
  );
};
