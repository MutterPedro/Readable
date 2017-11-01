import React, {Component} from "react";
import {connect} from "react-redux";
import {toast} from "react-toastify";

import {votePost, deletePost, getPosts, showCreatePostModal, categoryPosts} from "../../actions/Posts";
import Post from "../Post/Post";
import LoadingGauge from "../LoadingGauge/LoadingGauge";

import "./Posts.css";

class Posts extends Component {
    vote = (id, option = "upVote") => {
        if(!id){
            toast.error("null ID!");
        }

        this.props.votePost(id, option).then(() => this.fetchPosts(this.props.category)).catch(
            (error) => toast.error(error.message)
        );
    };

    remove = (id) => {
        if(!id){
            toast.error("null ID!");
        }

        this.props.deletePost(id).then(() => toast.success("Post deleted with success!")).catch(
            (error) => toast.error(error.message)
        );
    };

    sort = (posts) => {
        if(posts.length <= 0)
            return [];

        const {orderBy} = this.props;
        const type = typeof posts[0][orderBy];

        switch (type){
            case "number":
                return posts.sort((a,b) => b[orderBy] - a[orderBy]);
            case "string":
                return posts.sort((a,b) => a[orderBy].localeCompare(b[orderBy]));
            default:
                return posts;
        }
    };

    fetchPosts = (category = 'all') => {
        if (category !== 'all')
            this.props.categoryPosts(category).then(null).catch(
                (error) => toast.error(error.message)
            );
        else
            this.props.getPosts().then(null).catch(
                (error) => toast.error(error.message)
            );
    };

    showModal = (show, post) => {
        this.props.showModal(show, post);
    };

    componentDidMount() {
        const {category} = this.props;
        this.fetchPosts(category);
    }

    componentWillUpdate(nextProps) {
        const {category} = nextProps
        if(category !== this.props.category){
            this.fetchPosts(category);
        }
    }

    render(){
        const {loadingPosts, posts, showingModal} = this.props;

        if(loadingPosts){
            return <LoadingGauge/>
        }

        return (posts.length > 0 ?
            this.sort(posts).map(post => (
                <div key={post.id}>
                    <Post
                        {...post}
                        like={() => this.vote(post.id, "upVote")}
                        dislike={() => this.vote(post.id, "downVote")}
                        remove={() => this.remove(post.id)}
                        edit={() => this.showModal(!showingModal, post)}
                    />
                    <button className="btn btn-primary btn-lg add-post-btn" onClick={() => this.showModal(!showingModal)}>+</button>
                </div>
            )) :
            <div className="badge alert alert-info">
                <h3><i>There is no <b>posts</b> yet.<br/><br/></i></h3>
                <button onClick={() => this.showModal(!showingModal)} className="btn btn-success btn-md">
                    Create a new one!
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        showingModal: state.posts.showingCreateModal,
        orderBy: state.posts.orderBy,
        loadingPosts: state.posts.loadingPosts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts()),
        votePost: (id, option) => dispatch(votePost(id, option)),
        deletePost: (id) => dispatch(deletePost(id)),
        showModal: (show, post) => dispatch(showCreatePostModal(show, post)),
        categoryPosts: (category) => dispatch(categoryPosts(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);