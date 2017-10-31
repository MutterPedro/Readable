import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Categories from './Categories';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../reducers';

if((typeof String.prototype.capitalize) === 'undefined'){
    // eslint-disable-next-line
    String.prototype.capitalize = function () {
        return this[0].toUpperCase() + this.substr(1);
    }
}

it('renders without crashing', () => {
    expect(shallow(
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Categories/>
        </Provider>
    ));
});

it('test change order by', () => {
    const test = mount(
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Categories/>
        </Provider>
    );
    test.find("#timestamp").simulate("click");

    expect(test.find(".btn-default").text()).toBe("Timestamp");
});

it('test change category', () => {
    const test = mount(
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Categories/>
        </Provider>
    );

    test.update().find("#react").simulate("click");
    expect(test.props().store.getState().categories.category).toBe("react");

    test.find("#all").simulate("click");
    expect(test.props().store.getState().categories.category).toBe("all");
});
