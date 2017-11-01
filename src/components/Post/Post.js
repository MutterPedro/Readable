import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Comments from "../Comments/Comments";
import './Post.css'

const Post = ({commentsEnabled, title, timestamp, id, body, author, voteScore, category, like, dislike, edit, remove, comments = []}) => (
    <div className="panel panel-primary textAlignJustify">
        <div className="panel-heading">
            <Link className="post-title" to={`/postDetail/${category}/${id}`}>{`@${author} - ${title}`}</Link>
            <span className="glyphicon glyphicon-trash action-post-btn" title="remove" onClick={remove}/>
            <span className="glyphicon glyphicon-pencil action-post-btn" title="edit" onClick={edit}/>
            <p>
                <i>{new Date(timestamp).toLocaleDateString()}</i>
            </p>
        </div>
        <div className="panel-body">
            <p>{body}</p>

            <br/><br/>
            <small><b>{`Category: ${category}`}</b></small>
            <hr/>
            <button className="btn btn-success vote-btn" onClick={like}>
                <span className="glyphicon glyphicon-thumbs-up"/>
            </button>
            <button className="btn btn-danger vote-btn" onClick={dislike}>
                <span className="glyphicon glyphicon-thumbs-down"/>
            </button>
            <small>{`${voteScore} votes`}</small>
        </div>
        {commentsEnabled && <Comments comments={comments}/>}
    </div>
);

Post.propTypes = {
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    like: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
};

export default Post;