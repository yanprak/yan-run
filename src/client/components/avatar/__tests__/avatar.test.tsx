import React from 'react';
import TestRenderer from 'react-test-renderer';
import Avatar from '../Avatar';

test('Avatar test', () => {
  const component = TestRenderer.create(
    <Avatar url="/avatar.png" size="small" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
