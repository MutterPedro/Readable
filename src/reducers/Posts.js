import {ADD_POST, GET_CATEGORY_POST, DELETE_POST, GET_POSTS, GET_POST, VOTE_POST, UPDATE_POST, SHOW_CREATE_POST_MODAL, CHANGE_ORDER_BY} from "../actions/Posts";

const initialState = {
    post: undefined,
    posts: [],
    showingCreateModal: false,
    orderBy: 'voteScore',
    loadingPosts: true
};

export function posts(state = initialState, action = {}) {
    switch (action.type){
        case ADD_POST:
            return Object.assign({}, state, {
                loadingPosts: true
            });
        case GET_POST:
            return Object.assign({}, state, {
                post: action.post
            });
        case GET_POSTS:
            return Object.assign({}, state, {
                posts: action.posts,
                post: undefined,
                showingCreateModal: false,
                loadingPosts: false
            });
        case DELETE_POST:
            return Object.assign({}, state, {
                post: undefined
            });
        case VOTE_POST:
            return state;
        case UPDATE_POST:
            return Object.assign({}, state, {
                loadingPosts: true
            });
        case SHOW_CREATE_POST_MODAL:
            return Object.assign({}, state, {
                showingCreateModal: action.show,
                post: action.post
            });
        case CHANGE_ORDER_BY:
            return Object.assign({}, state, {
                orderBy: action.orderBy
            });
        case GET_CATEGORY_POST:
            return Object.assign({}, state, {
                posts: action.posts,
                loadingPosts: false,
                showingCreateModal: false
            });
        default:
            return state;
    }
}