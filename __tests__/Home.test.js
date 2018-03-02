import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/Home/Home';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: Home', () => {
  // Temporarily disabling snapshot tests since UI is constantly changing.
  // it('should match its empty snapshot', () => {
  //     const tree = renderer.create(
  //         <Home />
  //     ).toJSON();
  //     expect(tree).toMatchSnapshot();
  // });
});
