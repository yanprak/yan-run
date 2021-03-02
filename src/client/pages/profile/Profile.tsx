import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/selectors';
import ProfileEditInfoForm from './ProfileEditInfoForm';
import ProfileSetAvatarForm from './ProfileSetAvatarForm';
import ProfileChangePasswordForm from './ProfileChangePasswordForm';
import './profile.scss';

export default function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="page profile container container_center">
      <div className="profile__wrapper container_center margin_tb_s-10">
        <div className="profile__info">
          <ProfileEditInfoForm user={user} />
        </div>
        <div className="profile__misc">
          <ProfileSetAvatarForm image={user.avatar} />
          <ProfileChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
