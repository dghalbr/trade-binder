import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: NavBar', () => {
    it('should match its empty snapshot', () => {
        //DGH - The NavBar component contains <Link/> components that aren't wrapped
        //in a <Router/> component. This causes this test to fail because Link tags 
        //should always be wrapped in a Router tag. Since the NavBar component is
        //used in the App component, the App component wraps the NavBar component in
        //the correct Router tag. The test just can't see this. In the meantime we
        //can just do this for the tests to work, but there has to be a better way.
        const tree = renderer.create(
            <Router>
                <NavBar />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
