import { useSelector, useDispatch } from 'react-redux';
import { User, UserState } from '../../store/user/types';
import { setHero } from '../../store/user/actions';

const useHero = () => {
  const user = useSelector<UserState, User>(
    state => state.user!,
  );
  const dispatch = useDispatch();
  const currentHero = user.heroId ? user.heroId : 0;

  const handleHero = (id:number) => {
    dispatch(setHero(id));
  };

  return {
    currentHero,
    handleHero,
  };
};

export default useHero;
