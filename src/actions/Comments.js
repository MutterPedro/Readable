import Api from '../utils/api';

export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';

function getPostCommentsAC(comments) {
    return {
        type: GET_POST_COMMENTS,
        comments
    }
}

export function getPostComments(id) {
    return dispatch => Api.getPostComments(id).then(comments =>
        dispatch(getPostCommentsAC(comments))
    );
}

export function addComment(parentId, params) {
    return dispatch => Api.addComment(parentId, params).then(() =>
        dispatch(getPostComments(parentId))
    );
}

export function updateComment(id, params) {
    return dispatch => Api.updateComment(id, params).then((comment) =>
        dispatch(getPostComments(comment.parentId))
    );
}

export function deleteComment(id) {
    return dispatch => Api.deleteComment(id).then((comment) =>
        dispatch(getPostComments(comment.parentId))
    );
}

export function voteComment(id, option) {
    return dispatch => Api.voteComment(id, option).then((comment) =>
        dispatch(getPostComments(comment.parentId))
    );
}