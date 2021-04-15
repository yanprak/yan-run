import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import Input from '../../components/input';
import { AvatarProps } from './types';
import { useApiUser } from '../../hooks';
import { RESOURCES_URL } from '../../API';
import { User, UserState } from '../../store/user/types';

const ProfileSetAvatarForm: FC<AvatarProps> = () => {
  const user = useSelector<UserState, User>(
    state => state.user!,
  );

  const { handleChangeAvatar } = useApiUser();

  return (
    <div className="profile__avatar-form">
      <label className="profile-pic__title">Avatar</label>
      <div className="profile-pic">
        {user.avatar && <img className="profile-pic__image" src={`${RESOURCES_URL}${user.avatar}`} alt="profile-pic" />}
        <div className="profile-pic__edit">
          <span className="profile-pic__label">Загрузить аватар</span>
          <Input
            type="file"
            name="avatar"
            title="Аватар"
            className="profile-pic__input"
            onChange={handleChangeAvatar}
          />
        </div>
      </div>
    </div>
  );
};

export default memo<AvatarProps>(ProfileSetAvatarForm);
