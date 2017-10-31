import Api from "../utils/api";

export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const VOTE_POST = 'VOTE_POST';
export const GET_POST = 'GET_POST';
export const GET_POSTS = 'GET_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const SHOW_CREATE_POST_MODAL = 'SHOW_CREATE_POST_MODAL';
export const CHANGE_ORDER_BY = 'CHANGE_ORDER_BY';
export const GET_CATEGORY_POST = 'GET_CATEGORY_POST';

function votePostAC(post) {
    return {
        type: VOTE_POST,
        post
    }
}

function getPostAC(post) {
    return {
        type: GET_POST,
        post
    }
}

function getPostsAC(posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

function addPostAC() {
    return {
        type: ADD_POST
    }
}

function updatePostAC() {
    return {
        type: UPDATE_POST
    }
}

function getCategoryPostsAC({posts, category}) {
    return {
        type: GET_CATEGORY_POST,
        posts,
        category
    }
}

export function showCreatePostModal(show, post) {
    return {
        type: SHOW_CREATE_POST_MODAL,
        show,
        post
    }
}

export function changeOrderBy(orderBy) {
    return {
        type: CHANGE_ORDER_BY,
        orderBy
    }
}

export function addPost(params) {
    return dispatch => Api.addPost(params).then(post =>
        dispatch(addPostAC())
    ).then(() => {
        dispatch(getPosts())
    });
}

export function updatePost(id, params) {
    return dispatch => Api.updatePost(id, params).then(post =>
        dispatch(updatePostAC())
    ).then(() => {
        dispatch(getPosts())
    });
}

export function votePost(id, option) {
    return dispatch => Api.votePost(id, option).then(post =>
        dispatch(votePostAC(post))
    );
}

export function getPost(id) {
    return dispatch => Api.getPost(id).then(post =>
        dispatch(getPostAC(post))
    );
}

export function getPosts() {
    return dispatch => Api.getPosts().then(posts =>
        dispatch(getPostsAC(posts))
    );
}

export function deletePost(id) {
    return dispatch => Api.deletePost(id).then(post =>
        dispatch(getPosts())
    );
}

export function categoryPosts(category) {
    return dispatch => Api.getCategoryPosts(category).then(posts =>
        dispatch(getCategoryPostsAC({category, posts}))
    );
}