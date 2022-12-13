import { Component } from '../../types/Component';

interface ITextInput {
  placeholder: string;
  value: string;
  handleTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: Component<ITextInput> = (props) => {
  const { placeholder, value, handleTextInput } = props;

  return (
    <input
      type="text"
      onChange={handleTextInput}
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs"
      value={value}
    />
  );
};
