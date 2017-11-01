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
        case UPDATE_POST:
            return {
                ...state,
                loadingPosts: true
            };
        case GET_POST:
            return {
                ...state,
                post: action.post
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts,
                post: undefined,
                showingCreateModal: false,
                loadingPosts: false
            };
        case DELETE_POST:
            return {
                ...state,
                post: undefined
            };
        case SHOW_CREATE_POST_MODAL:
            return {
                ...state,
                showingCreateModal: action.show,
                post: action.post
            };
        case CHANGE_ORDER_BY:
            return {
                ...state,
                orderBy: action.orderBy
            };
        case GET_CATEGORY_POST:
            return {
                ...state,
                posts: action.posts,
                loadingPosts: false,
                showingCreateModal: false
            };
        case VOTE_POST:
        default:
            return state;
    }
}