import React, { FC, memo, useCallback } from 'react';
import { Dispatch, Action } from 'redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/input';
import { AvatarProps } from './types';
import { useUsersApi } from '../../hooks';
import { API_URL } from '../../constants';

import { setUser } from '../../store/user/actions';
import { User } from '../../store/user/types';
import showNotification from '../../utils/notification';

const ProfileSetAvatarForm: FC<AvatarProps> = (props: AvatarProps) => {
  const { image } = props;
  const { changeAvatar } = useUsersApi();
  const dispatch: Dispatch<Action> = useDispatch();

  const changeAvatarWithDispatch = useCallback(
    (user: User) => dispatch(setUser(user)),
    [dispatch],
  );

  const handleFileUpload = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;
    const { files } = element;

    if (!files || files.length === undefined) {
      return;
    }

    const avatar = files[0];
    const formData = new FormData();
    formData.append('avatar', avatar);

    changeAvatar(formData)
      .then(r => {
        window.console.log(typeof r);
        window.console.dir(r);
        // TODO(anton.kagkain) should gone with thunk implementation
        // TODO(anton.kagkain) cause no request hooks will be presented
        changeAvatarWithDispatch(r as User);
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        showNotification('success', 'Аватар обновлён');
      })
      .catch((e: Error) => {
        const error = JSON.parse(e.message) as { status: string, message: string };
        window.console.log(error.status, error.message);
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        showNotification('error', 'Ошибка: не удалось обновить аватар');
      });
  }, [changeAvatar, changeAvatarWithDispatch]);

  return (
    <div className="profile__avatar-form">
      <div className="profile-pic">
        {image && <img className="profile-pic__image" src={`${API_URL}${image}`} alt="profile-pic" />}
        <div className="profile-pic__edit">
          <span className="profile-pic__label">Загрузить аватар</span>
          <Input
            type="file"
            name="avatar"
            title="Аватар"
            className="profile-pic__input"
            onChange={handleFileUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default memo<AvatarProps>(ProfileSetAvatarForm);
