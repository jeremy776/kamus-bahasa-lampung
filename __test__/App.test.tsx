import React from 'react';
import renderer from 'react-test-renderer';
import {
  test,
  expect,
} from '@jest/globals';
import App from '../App';

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});