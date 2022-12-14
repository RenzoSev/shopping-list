import { Component } from '../../types/Component';

interface ISelect {
  title: string;
  options: string[];
  handleOnChange: (...args: any[]) => void;
}

export const Select: Component<ISelect> = (props) => {
  const { title, options, handleOnChange } = props;

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      onChange={handleOnChange}
    >
      <option disabled selected>
        {title}
      </option>

      {options.map((opt, index) => {
        const key = opt + index;
        return <option key={key}>{opt}</option>;
      })}
    </select>
  );
};
