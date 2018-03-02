import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: App', () => {
  // Temporarily disabling snapshot tests since UI is constantly changing.
  // it('should match its empty snapshot', () => {
  //   const tree = renderer.create(
  //     <App />
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
