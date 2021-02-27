import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

test('Renders without collision', () => {
  const component = document.createElement('div');
  ReactDOM.render(<App />, component);
  ReactDOM.unmountComponentAtNode(component);
});
