import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileEditInfoForm from './ProfileEditInfoForm';
import ProfileSetAvatarForm from './ProfileSetAvatarForm';
import ProfileChangePasswordForm from './ProfileChangePasswordForm';
import { UserState, User } from '../../store/user/types';
import './profile.scss';
import Button from '../../components/button/Button';
import { removeUser } from '../../store/user/actions';
import { useAuthApi } from '../../hooks';

export default function Profile() {
  const { signout } = useAuthApi();
  const dispatch = useDispatch();

  const user = useSelector<UserState, User>(
    state => state.user!,
  );

  const handleSignOut = () => {
    signout()
      .then(() => {
        dispatch(removeUser());
      })
      .catch((e: Error) => {
        const error = JSON.parse(e.message) as { status: string, message: string };
        window.console.log(error.status, error.message);
      });
  };

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
            onClick={handleSignOut}
          >
            Выход
          </Button>
        </div>
      </div>
    </div>
  );
}
