import React, { FC, memo } from 'react';
import Input from '../../components/input';
import { AvatarProps } from './types';

const ProfileSetAvatarForm: FC<AvatarProps> = (props: AvatarProps) => {
  const { image } = props;

  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
    const element = event.target as HTMLInputElement;
    const { files } = element;

    if (files && files.length !== undefined) {
      const newAvatarImage = files[0];
      window.console.info('Uploaded image', newAvatarImage);
    }
  }

  return (
    <div className="profile__avatar-form">
      <div className="profile-pic">
        {image && <img className="profile-pic__image" src={image} alt="profile-pic" />}
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
