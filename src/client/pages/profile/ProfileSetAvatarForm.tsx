import React, { FC, memo } from 'react';
import Input from '../../components/input';
import { AvatarProps } from './types';
import { useUsersApi } from '../../hooks';
import { API_URL } from '../../constants';

const ProfileSetAvatarForm: FC<AvatarProps> = (props: AvatarProps) => {
  const { image } = props;
  const { changeAvatar } = useUsersApi();

  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
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
      })
      .catch((e: Error) => {
        const error = JSON.parse(e.message) as { status: string, message: string };
        window.console.log(error.status, error.message);
      });
  }

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
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default memo<AvatarProps>(ProfileSetAvatarForm);
