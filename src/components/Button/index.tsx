interface Button {
  text: string;
  className?: string;
}

export const Button: React.FC<Button> = (props) => {
  const { text, className } = props;

  const defaultClassName = 'btn btn-active btn-secondary';

  return <button className={`${defaultClassName} ${className}`}>{text}</button>;
};
