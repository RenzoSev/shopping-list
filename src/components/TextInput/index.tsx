import { Component } from '../../types/Component';

type IHTMLTextInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
interface ITextInput extends IHTMLTextInput {
  handleTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: keyof typeof types;
}

const types = {
  primary: 'input input-bordered w-full max-w-xs',
  error: 'input input-bordered input-error w-full max-w-xs',
  success: 'input input-bordered input-success w-full max-w-xs',
};

export const TextInput: Component<ITextInput> = (props) => {
  const { type: propsType, handleTextInput } = props;

  const type = propsType || 'primary';

  const defaultClassName = types[type];

  return (
    <input
      {...props}
      type="text"
      onChange={handleTextInput}
      className={defaultClassName}
    />
  );
};
