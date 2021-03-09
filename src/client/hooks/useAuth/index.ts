import { useSelector } from 'react-redux';
import { User, UserState } from '../../store/user/types';
import { Nullable } from '../../types';

export default function useAuth(): boolean {
  const user = useSelector<UserState, Nullable<User>>(
    state => state.user,
  );
  return !!user;
}
