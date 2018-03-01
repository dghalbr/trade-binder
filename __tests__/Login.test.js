import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../src/Login/Login';
import shallowToJson from 'enzyme-to-json';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils';

configure({ adapter: new Adapter() });

describe('Component: Login', () => {
  // Temporarily disabling snapshot tests since UI is constantly changing.
  // it('should match its empty snapshot', () => {
  //     const output = shallow(
  //         <Login />
  //     );
  //     expect(shallowToJson(output)).toMatchSnapshot();
  // });

  it('should handle the click event', () => {
    /* DGH - The login method calls for .value on these input fields
         * so this is an attempt to 'mock' them. I'm sure there is
         * a more correct way. I just don't know what it is yet.
         */
    document.body.innerHTML = '<div>' + '  <input id="username" />' + '  <input id="password" />' + '</div>';
    const fn = jest.fn();
    const spy = jest.spyOn(Login.prototype, 'login');
    const wrapper = shallow(<Login handleLogin={fn} />);
    wrapper.find('#login').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
