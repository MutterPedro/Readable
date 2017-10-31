import React from 'react';
import {shallow} from 'enzyme';
import CreatePostModal from './CreatePostModal';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

it('renders without crashing', () => {
    expect(shallow(<Provider store={createStore(() => ({}))}><CreatePostModal/></Provider>));
});
