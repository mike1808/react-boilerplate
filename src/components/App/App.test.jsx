import React from 'react';
import App from './App';

describe('App', () => {
  it('should render normally', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
