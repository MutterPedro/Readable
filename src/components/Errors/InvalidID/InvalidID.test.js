import React from 'react';
import {shallow} from 'enzyme';
import InvalidID from './InvalidID';

it('renders without crashing', () => {
    expect(shallow(<InvalidID/>));
});
