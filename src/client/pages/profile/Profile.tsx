import React from 'react';
import ProfileEditInfoForm from './ProfileEditInfoForm';
import ProfileSetAvatarForm from './ProfileSetAvatarForm';
import ProfileChangePasswordForm from './ProfileChangePasswordForm';
import './profile.scss';

export default function Profile() {
  return (
    <div className="page profile container container_center">
      <div className="profile__wrapper container_center margin_tb_s-10">
        <div className="profile__info">
          <ProfileEditInfoForm />
        </div>
        <div className="profile__misc">
          <ProfileSetAvatarForm image="https://cdn2.thecatapi.com/images/1FV1DG2SH.jpg" />
          <ProfileChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
