import React from 'react';
import {shallow} from 'enzyme';
import LoadingGauge from './LoadingGauge';

it('renders without crashing', () => {
    expect(shallow(<LoadingGauge/>));
});
