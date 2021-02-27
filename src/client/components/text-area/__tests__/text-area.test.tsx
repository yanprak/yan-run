import React from 'react';
import TestRenderer from 'react-test-renderer';
import TextArea from '../TextArea';

describe('TextArea tests', () => {
  test('Snapshot:', () => {
    const component = TestRenderer.create(
      <TextArea resizable placeholder="Text" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
