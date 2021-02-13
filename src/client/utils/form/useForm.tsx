import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { FormCB, ResultCheckField, State } from './types';
import { checkField } from './form.util';

// fun: for working with form data
// checkField: for validation Input field

export const useForm = (initState: State, fun?:FormCB) => {
  const [state, setState] = useState<State>(initState);
  const onSubmit = useCallback(
    (event: FormEvent) => {
      let isValid = true;
      event.preventDefault();
      Object.keys(state).forEach(name => {
        const { type, value } = state[name];
        const result: ResultCheckField = checkField({ type, value });
        if (result.test) {
          isValid = false;
          state[name] = { type, value, errorMessage: result.message };
          setState({ ...state });
        }
      });
      if (isValid && fun) {
        fun(state);
      }
    },
    [
      state,
    ],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { name, type, value } = event.target;
      state[name] = { type, value };
      setState({ ...state });
    },
    [
      state,
    ],
  );

  const handleBlur = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { name, type, value } = event.target;
      const result: ResultCheckField = checkField({ type, value });

      if (result.test) {
        state[name] = { type, value, errorMessage: result.message };
        setState({ ...state });
      }
    },
    [
      state,
    ],
  );
  const errorMessage = useCallback(
    (name: string) => (state[name] ? state[name].errorMessage : ''),
    [state],
  );

  return {
    state,
    onSubmit,
    handleChange,
    handleBlur,
    errorMessage,
  };
};
