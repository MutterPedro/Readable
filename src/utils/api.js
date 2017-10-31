const api = "http://localhost:3001";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

const Api = {
    getCategories: () =>
        fetch(`${api}/categories`, {headers})
            .then(res => res.json())
            .then(data => data.categories),

    getCategoryPosts: (category) =>
        fetch(`${api}/${category}/posts`, {headers})
            .then(res => res.json()),

    getPosts: () =>
        fetch(`${api}/posts`, {headers})
            .then(res => res.json()),

    getPost: (id) =>
        fetch(`${api}/posts/${id}`, {headers})
            .then(res => res.json()),

    updatePost: (id, {title = '', body = ''}) =>
        fetch(`${api}/posts/${id}`, {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, body})
        }).then(res => res.json()),

    addPost: ({
                  id = Math.random().toString(36).substr(-6),
                  timestamp = Date.now(), title = '', body = '',
                  author = '', category = ''
              }) =>
        fetch(`${api}/posts`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, title, timestamp, body, author, category})
        }).then(res => res.json()),

    votePost: (id, option) =>
        fetch(`${api}/posts/${id}`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({option})
        }).then(res => res.json()),

    deletePost: (id) =>
        fetch(`${api}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()),

    getPostComments: (id) =>
        fetch(`${api}/posts/${id}/comments`, {headers})
            .then(res => res.json()),

    addComment: (parentId, {
        id = Math.random().toString(36).substr(-6),
        timestamp = Date.now(), body = '', author = ''
    }) =>
        fetch(`${api}/comments`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, timestamp, body, author, parentId})
        }).then(res => res.json()),

    getComment: (id) =>
        fetch(`${api}/comments/${id}`, {headers})
            .then(res => res.json()),

    voteComment: (id, option = 'upVote') =>
        fetch(`${api}/comments/${id}`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({option})
        }).then(res => res.json()),

    updateComment: (id, {body = '', timestamp = Date.now()}) =>
        fetch(`${api}/comments/${id}`, {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({body, timestamp})
        }).then(res => res.json()),

    deleteComment: (id) =>
        fetch(`${api}/comments/${id}`, {
            method: 'DELETE',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
};

export default Api;