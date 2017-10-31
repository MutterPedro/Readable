import React from 'react';
import {shallow} from 'enzyme';
import Post from './Post';

it('renders without crashing', () => {
    expect(shallow(
        <Post
            title={"test"}
            author={"author1"}
            voteScore={5}
            remove={() => undefined}
            timestamp={Date.now()}
            body={"teste2"}
            category={"A"}
            id={"q1e2c4"}
            edit={() => undefined}
            dislike={() => undefined}
            like={() => undefined}
        />
    ));
});
