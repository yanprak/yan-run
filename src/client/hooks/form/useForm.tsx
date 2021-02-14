import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { FormSubmitHandler, ResultCheckField, FormState } from './types';
import { checkField } from './utils';

// fun: for working with form data
// checkField: for validation Input field

export const useForm = (initState: FormState, submitHandler?:FormSubmitHandler) => {
  const [state, setState] = useState<FormState>(initState);
  const onSubmit = useCallback(
    (event: FormEvent) => {
      let isValid = true;
      event.preventDefault();
      Object.keys(state).forEach(name => {
        const { type, value } = state[name];
        const result: ResultCheckField = checkField({ type, value });
        if (result.test) {
          isValid = false;
          setState((prevState: FormState) => ({
            ...prevState,
            [name]: { type, value, errorMessage: result.message },
          }));
        }
      });
      if (isValid && submitHandler) {
        submitHandler(state);
      }
    },
    [state, submitHandler],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { name, type, value } = event.target;
      setState((prevState: FormState) => ({
        ...prevState,
        [name]: { type, value },
      }));
    },
    [state],
  );

  const handleBlur = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { name, type, value } = event.target;
      const result: ResultCheckField = checkField({ type, value });

      if (result.test) {
        setState((prevState: FormState) => ({
          ...prevState,
          [name]: { type, value, errorMessage: result.message },
        }));
      }
    },
    [state],
  );
  const getErrorMessage = useCallback(
    (name: string) => (state[name] ? state[name].errorMessage : ''),
    [state],
  );

  return {
    state,
    onSubmit,
    handleChange,
    handleBlur,
    getErrorMessage,
  };
};
