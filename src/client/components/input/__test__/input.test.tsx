import React from 'react';
import TestRenderer from 'react-test-renderer';
import Input from '../Input';

test('Input test', () => {
  const component = TestRenderer.create(
    <Input title="Name" errorMessage="Error text" name="name" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
