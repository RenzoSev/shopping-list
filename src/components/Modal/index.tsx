import { Component } from '../../types/Component';

interface IModal {
  id: string;
  buttonText: string;
  handleClick: (...args: any[]) => void;
  shouldDisableButton: boolean;
}

export const Modal: Component<IModal> = (props) => {
  const { id, buttonText, children, shouldDisableButton, handleClick } = props;

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />

      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {children}

          <label
            /* @ts-ignore */
            disabled={shouldDisableButton}
            htmlFor={id}
            className="btn w-full mt-6"
            onClick={handleClick}
          >
            {buttonText}
          </label>
        </label>
      </label>
    </>
  );
};
