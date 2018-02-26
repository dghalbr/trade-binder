import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from '../src/scenes/Login/Login';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils'; 

configure({ adapter: new Adapter() });

describe('Component: Login', () => {
    it('should match its empty snapshot', () => {
        const tree = renderer.create(
            <Login />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should handle the click event', () => {
        // let handle = jest.fn();
        // let handle = () => {};reate(<Login handleLogin={ handle }/>)
        // const wrapper = shallow(<Login />);
        // wrapper.find(".LoginButton").simulate("click", { preventDefault() {} });

        const spy = jest.spyOn(Login.prototype, 'login');
const wrapper = mount(<Login  />);
wrapper.instance().methodName();
expect(spy).toHaveBeenCalled();

        // expect(handle).toHaveBeenCalled();
      });
});