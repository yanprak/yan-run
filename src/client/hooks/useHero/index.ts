// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User, UserState } from '../../store/user/types';
import { setHero } from '../../store/user/actions';

const useHero = () => {
  const user = useSelector<UserState, User>(
    state => state.user!,
  );
  const dispath = useDispatch();
  const currentHero = user.heroId ? user.heroId : 0;

  const handlerHero = (id:number) => {
    dispath(setHero(id));
  };

  return {
    currentHero,
    handlerHero,
  };
};

export default useHero;
