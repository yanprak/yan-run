import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../Button';

test('button test', () => {
  const component = TestRenderer.create(
    <Button size="small" styleType="secondary">Кнопка</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
