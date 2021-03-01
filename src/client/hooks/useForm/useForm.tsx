import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { FormSubmitHandler, ResultCheckField, FormState } from './types';
import checkField from './checkField';

// submitHandler: for working with useForm data
// checkField: for validation Input field

const useForm = (initState: FormState, submitHandler?:FormSubmitHandler) => {
  const [state, setState] = useState<FormState>(initState);

  const setError = useCallback((message:string) => {
    const newState: FormState = { ...state };
    Object.keys(state).forEach(name => {
      newState[name] = { ...state[name], errorMessage: message };
    });
    setState(newState);
  }, [state]);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      let isValid = true;
      event.preventDefault();
      const newState: FormState = { ...state };
      Object.keys(state).forEach(name => {
        const { type, value } = state[name];
        const result: ResultCheckField = checkField({ type, value });
        if (result.test) {
          isValid = false;
          newState[name] = { type, value, errorMessage: result.message };
        }
      });
      setState(newState);
      if (isValid && submitHandler) {
        submitHandler(state);
      }
    },
    [state, submitHandler],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { name, type, value } = event.target;
      setState({
        ...state,
        [name]: { type, value },
      });
    },
    [state],
  );

  const handleBlur = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { name, type, value } = event.target;
      const result: ResultCheckField = checkField({ type, value });
      if (result.test) {
        setState({
          ...state,
          [name]: { type, value, errorMessage: result.message },
        });
      }
    },
    [state],
  );

  const getErrorMessage = useCallback(
    (name: string) => (state[name] ? state[name].errorMessage : ''),
    [state],
  );

  const getFieldValue = useCallback(
    (name: string) => (state[name] ? state[name].value : ''),
    [state],
  );

  return {
    state,
    setError,
    handleSubmit,
    handleChange,
    handleBlur,
    getErrorMessage,
    getFieldValue,
  };
};

export default useForm;
