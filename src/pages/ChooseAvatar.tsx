import { useEffect, useState } from 'react';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';
import { Toast, toastError, toastSuccess } from '../components/Toastify';
import { getAvatar } from '../server/avatar';
import { useNavigate } from 'react-router-dom';
import { useAvatar } from '../hooks/useAvatar';
import { useWillMountRedirect } from '../hooks/useWillMountRedirect';
import 'react-toastify/dist/ReactToastify.css';

export function ChooseAvatar() {
  const [avatarCode, setAvatarCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidAvatarCode, setIsInvalidAvatarCode] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);
  const { hasAvatar, avatar, setAvatar } = useAvatar();
  const navigate = useNavigate();

  const buttonType = getButtonType();

  function getButtonType() {
    if (!avatarCode) return 'disabled';
    if (isLoading) return 'loading';
    if (isInvalidAvatarCode) return 'error';
    if (hasSuccess) return 'success';

    return 'primary';
  }

  function handleChangeAvatarCode(e: React.ChangeEvent<HTMLInputElement>) {
    setAvatarCode(e.target.value);
  }

  function handleSaveAvatarCode() {
    setIsLoading(true);
  }

  function getButtonText() {
    if (buttonType === 'loading') return 'Carregando';
    if (buttonType === 'error') return 'ERRO';
    if (buttonType === 'success') return 'Redirecionando';

    return 'Salvar';
  }

  function successRedirect() {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }

  async function saveAvatarCode() {
    const avatar = await getAvatar(avatarCode);

    if (!avatar) {
      setIsInvalidAvatarCode(true);
      setIsLoading(false);
      setAvatarCode('');
      toastError('Código inválido 😭');
      return;
    }

    setHasSuccess(true);
    setAvatar(avatar);
    setIsLoading(false);
    toastSuccess(`Boas vindas, ${avatar.name}! 🪄`);
    successRedirect();
  }

  useWillMountRedirect({ url: '/', condition: hasAvatar });

  useEffect(() => {
    if (!isLoading) return;

    saveAvatarCode();
  }, [isLoading]);

  useEffect(() => {
    if (isInvalidAvatarCode) setIsInvalidAvatarCode(false);
  }, [avatarCode]);

  return (
    <>
      <Toast />

      <section className="py-6 w-full h-screen flex flex-col justify-between items-center">
        <h1 className="text-4xl font-bold">Avatar</h1>

        <div className="w-full flex flex-col justify-center items-center gap-16">
          <Avatar
            src={avatar?.img || 'https://placeimg.com/192/192/people'}
            className="w-24"
          />

          <TextInput
            placeholder="Digite seu código"
            value={avatarCode}
            handleTextInput={handleChangeAvatarCode}
          />
        </div>

        <Button
          text={getButtonText()}
          handleClick={handleSaveAvatarCode}
          type={buttonType}
          className="w-48"
        />
      </section>
    </>
  );
}
