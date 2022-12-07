interface IAvatar {
  src: string;
}

export const Avatar: React.FC<IAvatar> = (props) => {
  const { src } = props;

  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={src} />
      </div>
    </div>
  );
};
