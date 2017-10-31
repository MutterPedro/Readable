import React, {Component} from "react";
import {connect} from "react-redux";

import Modal from "react-modal";
import {toast} from "react-toastify";
import Form from "./Form";

import {addPost, showCreatePostModal, updatePost} from "../../actions/Posts";
import "./CreatePostModal.css";


class CreatePostModal extends Component {
    state = {
        newPostCategory: undefined
    };

    createPost = ({author = '', title = '', body = ''}) => {
        const editing = !!this.props.post;
        if ((!editing && (author.isEmpty() || !this.state.newPostCategory)) ||
            title.isEmpty() || body.isEmpty()) {
            toast.error("You must fill all fields!");
            return;
        }

        this.setState({loading: true, newPostCategory: undefined});
        if(editing){
            this.props.updatePost(this.props.post.id, {title, body}).then((data) => {
                toast.success("Edited with success!");
            }, (error) => {
                console.error(error);
                toast.error(error.message);
            });
        } else {
            this.props.addPost({author, title, body, category: this.state.newPostCategory}).then((data) => {
                toast.success("Posted!");
            }, (error) => {
                console.error(error);
                toast.error(error.message);
            });
        }
    };

    closeModal = () => {
        this.setState({newPostCategory: undefined});
        this.props.showModal(false);
    };

    render(){
        const {post, showingModal} = this.props;
        return (
            <Modal
                className="custom-modal"
                overlayClassName="overlay"
                isOpen={showingModal}
                onRequestClose={() => this.closeModal()}
                contentLabel="Modal"
            >
                <Form
                    {...this.props}
                    newPostCategory={this.state.newPostCategory}
                    initialValues={post}
                    onSubmit={this.createPost}
                    changeCategory={(c) => this.setState({newPostCategory: c.name})}
                />
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showingModal: state.posts.showingCreateModal,
        categories: state.categories.categories,
        post: state.posts.post
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (params) => dispatch(addPost(params)),
        updatePost: (id, params) => dispatch(updatePost(id, params)),
        showModal: (show, props) => dispatch(showCreatePostModal(show, props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostModal);
