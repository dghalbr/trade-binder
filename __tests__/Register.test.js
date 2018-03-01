import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../src/Register/Register';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils'; 

configure({ adapter: new Adapter() });

describe('Component: Register', () => {
    it('should match its empty snapshot', () => {
        const tree = renderer.create(
            <Register />
        ).toJSON();

        expect(tree).toMatchSnapshot();
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