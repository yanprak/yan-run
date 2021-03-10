import React from 'react';
import { useSelector } from 'react-redux';
import ProfileEditInfoForm from './ProfileEditInfoForm';
import ProfileSetAvatarForm from './ProfileSetAvatarForm';
import ProfileChangePasswordForm from './ProfileChangePasswordForm';
import { UserState, User } from '../../store/user/types';
import Button from '../../components/button/Button';
import { useApiAuth } from '../../hooks';
import './profile.scss';

export default function Profile() {
  const { handleSignout } = useApiAuth();

  const user = useSelector<UserState, User>(
    state => state.user!,
  );

  return (
    <div className="page profile container container_center">
      <div className="profile__wrapper container_center margin_tb_s-10">
        <div className="profile__info">
          <ProfileEditInfoForm user={user} />
        </div>
        <div className="profile__misc">
          <ProfileSetAvatarForm image={user.avatar} />
          <ProfileChangePasswordForm />
          <Button
            type="submit"
            size="large"
            styleType="secondary"
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
