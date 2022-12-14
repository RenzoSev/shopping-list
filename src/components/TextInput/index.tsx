import { Component } from '../../types/Component';

interface ITextInput {
  placeholder: string;
  value: string;
  handleTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: keyof typeof types;
}

const types = {
  primary: 'input input-bordered w-full max-w-xs',
  error: 'input input-bordered input-error w-full max-w-xs',
  success: 'input input-bordered input-success w-full max-w-xs',
};

export const TextInput: Component<ITextInput> = (props) => {
  const { placeholder, value, type: propsType, handleTextInput } = props;

  const type = propsType || 'primary';

  const defaultClassName = types[type];

  return (
    <input
      type="text"
      onChange={handleTextInput}
      placeholder={placeholder}
      className={defaultClassName}
      value={value}
    />
  );
};
