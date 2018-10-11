import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// On refresh, this checks that the app doesn't crash
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
