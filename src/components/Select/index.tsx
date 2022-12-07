interface ISelect {
  title: string;
  options: string[];
}

export const Select: React.FC<ISelect> = (props) => {
  const { title, options } = props;

  return (
    <select className="select select-bordered w-full max-w-xs">
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
