import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Register } from '../src/scenes/Register/Register';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: Register', () => {
    it('should match its empty snapshot', () => {
        const tree = renderer.create(
            <Register />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});