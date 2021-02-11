import React, {
  ChangeEvent,
  useState,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import { checkField, getProps } from './form.util';
import { ResultCheckField, State, FormProps, UseProps } from './types';

export default function Form(props: FormProps) {
  const [state, setState] = useState<State>(getProps(props.children));
  const [errorMessages, setErrorMessages] = useState<UseProps>({});
  const { cb } = props;
  let flag = true;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    Object.keys(state).forEach(name => {
      const [type, value] = state[name];
      const result: ResultCheckField = checkField({ type, value });
      if (result.test) {
        flag = false;
        errorMessages[name] = result.message;
        setErrorMessages({ ...errorMessages });
      }
    });
    if (flag && cb) {
      cb(state);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    flag = true;
    const { name, type, value } = event.target;
    state[name] = [type, value];
    setState({ ...state });
    delete errorMessages[name];
    setErrorMessages({ ...errorMessages });
  };

  const handleBlur = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, type, value } = event.target;
    const result: ResultCheckField = checkField({ type, value });

    if (result.test) {
      errorMessages[name] = result.message;
      setErrorMessages({ ...errorMessages });
    }
  };

  const renderChildren = () => Children.map(props.children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { error: errorMessages });
    }
    return (
      <div>
        А где инпуты?
      </div>
    );
  });

  return (
    <form onBlur={handleBlur} onChange={handleChange} onSubmit={onSubmit}>
      {renderChildren()}
    </form>
  );
}
