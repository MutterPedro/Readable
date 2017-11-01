import {ADD_COMMENT, VOTE_COMMENT, GET_COMMENT, DELETE_COMMENT, UPDATE_COMMENT, GET_POST_COMMENTS} from "../actions/Comments";

const initialState = {
    comments: [],
    comment: undefined
};

export function comments(state = initialState, action = {}) {
    switch (action.type){
        case ADD_COMMENT:
        case VOTE_COMMENT:
        case GET_COMMENT:
        case DELETE_COMMENT:
        case UPDATE_COMMENT:
            return {};
        case GET_POST_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };
        default:
            return state;
    }
}