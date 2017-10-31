import React from 'react';
import {shallow} from 'enzyme';
import PostDetail from './PostDetail';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

it('renders without crashing', () => {
    expect(shallow(<Provider store={createStore(() => ({}))}><PostDetail/></Provider>));
});
