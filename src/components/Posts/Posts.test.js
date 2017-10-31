import React from 'react';
import {shallow} from 'enzyme';
import Posts from './Posts';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

it('renders without crashing', () => {
    expect(shallow(<Provider store={createStore(() => ({}))}><Posts/></Provider>));
});
