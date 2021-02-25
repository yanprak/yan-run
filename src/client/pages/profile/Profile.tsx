import React from 'react';
import ProfileEditInfoForm from './ProfileEditInfoForm';
import ProfileSetAvatarForm from './ProfileSetAvatarForm';
import ProfileChangePasswordForm from './ProfileChangePasswordForm';
import './profile.scss';

// <-- TEMP -->
import { UserInfo } from '../../hooks/useAuthApi/types';

const sampleUser: UserInfo = {
  id: 12345,
  login: 'john.doe',
  email: 'john.doe@gmail.com',
  phone: '+71234567890',
  first_name: 'John',
  second_name: 'Doe',
  display_name: '1337_H@ck3r',
  avatar: '/api/v2/uploads/d0f3f01c-ea63-40c6-a4bf-6d511fb21319/photo_2020-10-30_18-12-48.jpg',
};
// <-- /TEMP -->

export default function Profile() {
  return (
    <div className="page profile container container_center">
      <div className="profile__wrapper container_center margin_tb_s-10">
        <div className="profile__info">
          <ProfileEditInfoForm user={sampleUser} />
        </div>
        <div className="profile__misc">
          <ProfileSetAvatarForm image={sampleUser.avatar} />
          <ProfileChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
