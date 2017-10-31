import React from 'react';
import {shallow, mount} from 'enzyme';
import Comment from './Comment';

it('renders without crashing', () => {
    expect(shallow(
        <Comment
            author="Teste"
            id="a1s23d3"
            body="Teste component"
            timestamp={Date.now()}
            voteScore={1}
            update={() => ({})}
            remove={() => ({})}
            dislike={() => ({})}
            like={() => ({})}
        />
    ));
});

it('comment actions', () => {
    const update = jest.fn();
    const remove = jest.fn();
    const like = jest.fn();
    const dislike = jest.fn();

    const test = mount(
        <Comment
            author="Teste"
            id="a1s23d3"
            body="Teste component"
            timestamp={Date.now()}
            voteScore={1}
            update={update}
            remove={remove}
            dislike={dislike}
            like={like}
        />
    );

    test.find(".btn-success").simulate("click");
    expect(like).toHaveBeenCalledTimes(1);

    test.find(".btn-danger").simulate("click");
    expect(dislike).toHaveBeenCalledTimes(1);

    test.find(".glyphicon-pencil").simulate("click");
    expect(test.state().editing).toBe(true);

    test.find(".glyphicon-check").simulate("click");
    expect(update).toHaveBeenCalledTimes(1);

    test.find(".glyphicon-pencil").simulate("click");
    test.find(".glyphicon-remove").simulate("click");
    expect(test.state().editing).toBe(false);

    test.find(".glyphicon-trash").simulate("click");
    expect(remove).toHaveBeenCalledTimes(1);
});