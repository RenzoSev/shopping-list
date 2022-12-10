import { Component } from '../../types/Component';

interface ITextInput {
  placeholder: string;
}

export const TextInput: Component<ITextInput> = (props) => {
  const { placeholder } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs"
    />
  );
};
