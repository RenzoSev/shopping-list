import { Header } from '../../../components/Header';
import { Avatar } from '../../../server/avatar';
import { Component } from '../../../types/Component';

interface IHeaderWithCreateButton {
  avatar: Avatar;
  createProductModalId: string;
  buttonCreateText: string;
}

export const HeaderWithCreateButton: Component<IHeaderWithCreateButton> = (
  props
) => {
  const { avatar, createProductModalId, buttonCreateText } = props;

  return (
    <div className="flex flex-col gap-4">
      <Header img={avatar.img} name={avatar.name} />

      <label
        htmlFor={createProductModalId}
        className="btn self-center w-full bg-primary text-white border-0"
      >
        {buttonCreateText}
      </label>
    </div>
  );
};
