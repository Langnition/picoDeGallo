import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
    it('should render correctly', () => {

        const component = shallow(<Dashboard />);

        expect(component).toBeDefined();
    });
});