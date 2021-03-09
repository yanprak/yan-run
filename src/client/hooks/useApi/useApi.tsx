import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { FormState } from '../useForm/types';
import { initLoginThunk } from '../../store/user/thunks';

const useApi = () => {
  const dispath = useDispatch();
  const submitHandlerLogin = useCallback((data: FormState) => {
    const {
      login: { value: login },
      password: { value: password },
    } = data;
    dispath(initLoginThunk({ login, password }));
  }, [dispath]);
  return {
    submitHandlerLogin,
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  useApi,
};
