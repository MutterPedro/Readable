import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPost, votePost, deletePost, showCreatePostModal} from "../../actions/Posts";
import {getPostComments} from "../../actions/Comments";

import {toast} from "react-toastify";

import Post from "../Post/Post";
import LoadingGauge from "../LoadingGauge/LoadingGauge";
import CreatePostModal from "../CreatePostModal/CreatePostModal";
import {Redirect} from "react-router-dom";
import InvalidID from "../Errors/InvalidID/InvalidID";

import './PostDetail.css';

class PostDetail extends Component {

    state = {
        back: false
    };

    vote = (id, option = "upVote") => {
        if(!id){
            toast.error("null ID!");
        }

        this.props.votePost(id, option).then(
            () => this.props.getPost(id)
        ).catch(
            (error) => toast.error(error.message)
        );
    };

    remove = (id) => {
        if(!id){
            toast.error("null ID!");
        }

        this.props.deletePost(id).then(() => {
            toast.success("Post deleted with success!");
            this.setState({back: true});
        });
    };

    showModal = (show, post) => {
        this.props.showModal(show, post);
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getPost(id).then(() => this.props.getPostComments(id)).catch(
            (error) => toast.error(error.message)
        );
    }

    componentDidUpdate(){
        if(!this.props.post){
            const {id} = this.props.match.params;
            this.props.getPost(id).then(() => this.props.getPostComments(id)).catch(
                (error) => toast.error(error.message)
            );
        }
    }

    render() {
        const {post, comments = [], showingModal} = this.props;

        if(this.state.back){
            return <Redirect to='/'/>
        }

        if(!post){
            return <LoadingGauge/>
        }

        if(!post.id){
            return <InvalidID/>
        }

        return (
            <div className="post-detail">
                <Post
                    {...post}
                    like={() => this.vote(post.id, "upVote")}
                    dislike={() => this.vote(post.id, "downVote")}
                    remove={() => this.remove(post.id)}
                    edit={() => this.showModal(!showingModal, post)}
                    comments={comments}
                    commentsEnabled={true}
                />
                <CreatePostModal/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments,
        post: state.posts.post,
        showingModal: state.posts.showingCreateModal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostComments: (id) => dispatch(getPostComments(id)),
        getPost: (id) => dispatch(getPost(id)),
        votePost: (id, option) => dispatch(votePost(id, option)),
        deletePost: (id) => dispatch(deletePost(id)),
        showModal: (show, post) => dispatch(showCreatePostModal(show, post))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);