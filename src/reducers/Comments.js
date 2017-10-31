import {ADD_COMMENT, VOTE_COMMENT, GET_COMMENT, DELETE_COMMENT, UPDATE_COMMENT, GET_POST_COMMENTS} from "../actions/Comments";

const initialState = {
    comments: [],
    comment: undefined
};

export function comments(state = initialState, action = {}) {
    switch (action.type){
        case ADD_COMMENT:
            return {};
        case VOTE_COMMENT:
            return {};
        case GET_COMMENT:
            return {};
        case DELETE_COMMENT:
            return {};
        case UPDATE_COMMENT:
            return{};
        case GET_POST_COMMENTS:
            return Object.assign({}, state, {
                comments: action.comments
            });
        default:
            return state;
    }
}