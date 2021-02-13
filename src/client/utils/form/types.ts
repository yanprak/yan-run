import { ReactElement } from 'react';
import { Props } from '../../components/input/types';

export type ReactText = string | number;
export type ReactChild = ReactElement<Props> | ReactText;

export type ResultCheckField = {
  test: boolean,
  message: string
};

export type Field = {
  value: string,
  type: string,
  name?: string
  errorMessage?: string
};

export type State = {
  [key in string]: Field
};

export type FormCB = (data:State) => void;
