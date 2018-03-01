import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../src/NavBar/NavBar';
import renderer from 'react-test-renderer';
import shallowToJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Component: NavBar', () => {
    it('should match its empty snapshot', () => {
        //DGH - The NavBar component contains <Link/> components that aren't wrapped
        //in a <Router/> component. This causes this test to fail because Link tags 
        //should always be wrapped in a Router tag. Since the NavBar component is
        //used in the App component, the App component wraps the NavBar component in
        //the correct Router tag. The test just can't see this. In the meantime we
        //can just do this for the tests to work, but there has to be a better way.
        const output = shallow(
            <Router>
                <NavBar />
            </Router>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
