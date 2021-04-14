import React from 'react';
import { useSelector } from 'react-redux';
import ProfileEditInfoForm from './ProfileEditInfoForm';
import ProfileSetAvatarForm from './ProfileSetAvatarForm';
import ProfileChangePasswordForm from './ProfileChangePasswordForm';
import { UserState, User } from '../../store/user/types';
import Button from '../../components/button/Button';
import { useApiAuth } from '../../hooks';
import './profile.scss';
import useTheme from '../../hooks/useTheme';

export default function Profile() {
  const { handleSignout } = useApiAuth();

  const { toggleTheme, current } = useTheme();

  const user = useSelector<UserState, User>(
    state => state.user!,
  );

  return (
    <div className="page profile container container_center">
      <div className="profile__wrapper container_center container_is-column margin_tb_s-10">
        <div className="container container_sb profile__tools padding_tb_s-3">
          <h3 className="h3">{`Theme: ${!current ? '' : current.name}`}</h3>
          <Button
            size="large"
            styleType="secondary"
            onClick={toggleTheme}
          >
            {`На ${current!.id === 1 ? 'светлую' : 'темную'} сторону`}
          </Button>
        </div>
        <div className="container profile__tools padding_tb_s-2">
          <div className="profile__info">
            <ProfileEditInfoForm user={user} />
          </div>
          <div className="profile__misc">
            <ProfileSetAvatarForm image={user.avatar} />
            <ProfileChangePasswordForm />
          </div>
        </div>
        <div className="container container_center-items">
          <Button
            type="submit"
            size="large"
            styleType="primary"
            className="margin_t_s-5"
            onClick={handleSignout}
          >
            Выход
          </Button>
        </div>
      </div>
    </div>
  );
}
