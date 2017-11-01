import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon'
import Comments from './Comments';
import CommentForm from './CommentForm';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../reducers';

if((typeof String.prototype.isEmpty) === 'undefined'){
    // eslint-disable-next-line
    String.prototype.isEmpty = function () {
        return this.trim() === '';
    }
}

it('renders Comments without crashing', () => {
    expect(shallow(
        <Provider store={createStore(() => ({}))}>
            <Comments comments={[
                {
                    author: "Teste",
                    id: "a1s23d3",
                    body: "Teste component",
                    timestamp: Date.now(),
                    voteScore: 1
                }
            ]}/>
        </Provider>));
});

it('submit CommentForm without crashing', () => {
    const onSubmit = jest.fn();
    const test = mount(
        <Provider store={createStore(() => ({}))}>
            <CommentForm onSubmit={onSubmit}/>
        </Provider>
    );

    test.find("form").simulate("submit");
    expect(onSubmit).toHaveBeenCalledTimes(1);
});

it('run comments action without crash', () => {
    let comment = {
        author: "Teste",
        id: "a1s23d3",
        body: "Teste component",
        timestamp: Date.now(),
        voteScore: 1
    };
    let post = {
        id: 123
    };
    const test = mount(
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Comments comments={[comment]}/>
        </Provider>
    );
    test.props().store.getState().fetchPosts.post = post;

    let instance = test.childAt(0).childAt(0).instance();
    const spyAdd = sinon.spy(instance, "add");
    const spyRemove = sinon.spy(instance, "remove");
    const spyUpdate = sinon.spy(instance, "update");
    const spyVote = sinon.spy(instance, "vote");

    test.find(".btn-success").simulate("click");
    test.find(".btn-danger").simulate("click");
    expect(spyVote.callCount).toBe(2);

    test.find(".glyphicon-trash").simulate("click");
    expect(spyRemove.callCount).toBe(1);

    test.find(".glyphicon-pencil").simulate("click");
    test.find(".glyphicon-check").simulate("click");
    expect(spyUpdate.callCount).toBe(1);

    test.find("form").simulate("submit");
    test.find("textarea").simulate("change", {target: {name: "body", value: "test"}});
    test.find("input").simulate("change", {target: {name: "author", value: "test"}});
    test.find("form").simulate("submit");
    expect(spyAdd.callCount).toBe(1);
});