import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../src/Register/Register';
import renderer from 'react-test-renderer';
import shallowToJson from 'enzyme-to-json';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({ adapter: new Adapter() });

describe('Component: Register', () => {
    it('should match its empty snapshot', () => {
        const output = shallow(
            <Register />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('should handle the click event', () => {
        document.body.innerHTML =
            '<div>' +
            '  <input id="username" />' +
            '  <input id="password" />' +
            '</div>';
        const fn = jest.fn();
        const spy = jest.spyOn(Register.prototype, "register");
        const wrapper = shallow(<Register handleRegister={fn}/>);
        wrapper.find("#register").simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});