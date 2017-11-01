import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment, updateComment, voteComment, deleteComment} from '../../actions/Comments';
import CommentForm from './CommentForm';
import {toast} from 'react-toastify';
import Comment from "../Comment/Comment";
import './Comments.css';

class Comments extends Component {

    add = ({author = '', body = ''}, f, form) => {
        if(author.isEmpty() || body.isEmpty()){
            toast.error("You must fill all the fields to comment!");
            form.setSubmitFailed();
            return;
        }

        const parentId = this.props.post.id;
        this.props.addComment(parentId, {author, body})
            .then(() => form.reset()).catch((error) => toast.error(error.message));
    };

    vote = ({id, option}) => {
        this.props.voteComment(id, option).then(null).catch((error) => toast.error(error.message));
    };

    remove = ({id}) => {
        this.props.deleteComment(id).then(null).catch((error) => toast.error(error.message));
    };

    update = (id, params) => {
        this.props.updateComment(id, params)
            .then(() => toast.success("Comment edited with success!")).catch((error) => toast.error(error.message));
    };

    sortbyVotes(array){
        return array.sort((a,b) => b.voteScore - a.voteScore);
    }

    render() {
        const {comments} = this.props;
        return (
            <div>
                <p className="comments-text">Comments</p>
                <ul className="list-group marginBottom0">
                    {this.sortbyVotes(comments).map((comment) => (
                        <Comment
                            key={comment.id}
                            {...comment}
                            like={(id) => this.vote({id, option: 'upVote'})}
                            dislike={(id) => this.vote({id, option: 'downVote'})}
                            remove={(id) => this.remove({id})}
                            update={(id, params) => this.update(id, params)}
                        />
                    ))}
                    <li key="add-comment" className="list-group-item">
                        <CommentForm onSubmit={this.add}/>
                    </li>
                </ul>
            </div>
        );
    }
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        post: state.posts.post
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (parentId, params) => dispatch(addComment(parentId, params)),
        updateComment: (id, params) => dispatch(updateComment(id ,params)),
        voteComment: (id, option) => dispatch(voteComment(id, option)),
        deleteComment: (id) => dispatch(deleteComment(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);