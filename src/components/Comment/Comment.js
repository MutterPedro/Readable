import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

class Comment extends Component {
    state = {
        editing: false
    };

    updateComment(){
        const {id, update} = this.props;

        this.setState({editing: false});
        update(id, {body: this.bodyInput.value});
    }

    render() {
        const {id, author, body, timestamp, voteScore, like, dislike, remove} = this.props;
        const {editing} = this.state;

        return (
            <li className="list-group-item comment-ctn">
                <div>
                    <p>
                        {"@" + author + " - "}
                        <small className="date-comment">{new Date(timestamp).toLocaleDateString()}</small>
                    </p>
                    {editing ?
                        <div className="input-group">
                            <textarea defaultValue={body} className="form-control" ref={(t) => this.bodyInput = t}/>
                        </div>
                        :
                        <div>
                            <p>{body}</p>
                            <p>
                                <a className="btn btn-success btn-sm comment-like-btn" onClick={() => like(id)}>
                                    <span className="glyphicon glyphicon-thumbs-up"/>
                                </a>
                                <a className="btn btn-danger btn-sm comment-like-btn" onClick={() => dislike(id)}>
                                    <span className="glyphicon glyphicon-thumbs-down"/>
                                </a>
                                {`${voteScore} votes`}
                            </p>
                        </div>
                    }
                </div>
                {editing ?
                    <div className="comment-options-ctn">
                        <span className="glyphicon glyphicon-check" title="confirm"
                              onClick={() => this.updateComment()}/>
                        <span className="glyphicon glyphicon-remove" title="cancel" onClick={() => this.setState({editing: false})}/>
                    </div>
                    :
                    <div className="comment-options-ctn">
                        <span className="glyphicon glyphicon-pencil" title="edit"
                              onClick={() => this.setState({editing: true})}/>
                        <span className="glyphicon glyphicon-trash" title="delete" onClick={() => remove(id)}/>
                    </div>
                }
            </li>
        );
    }
}

Comment.propTypes = {
    id: PropTypes.any.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    like: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
};

export default Comment;