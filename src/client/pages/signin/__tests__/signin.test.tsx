import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Signin from '../Signin';

const setup = () => {
  const utils = render(<Signin />);
  const input = utils.getByPlaceholderText('Ваш логин');
  // const input = utils.getByLabelText('Логин');
  return {
    input,
    ...utils,
  };
};

test('The input field must contain the text "Hercules"', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'Hercules' } });
  expect((input as HTMLInputElement).value).toBe('Hercules');
});
