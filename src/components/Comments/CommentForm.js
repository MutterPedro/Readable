import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class CommentForm extends Component{

    render(){
        const {handleSubmit} = this.props;

        return(
            <form className="input-group comment-form" onSubmit={handleSubmit}>
                <Field
                    placeholder="Author"
                    className="form-control"
                    name="author"
                    component="input"
                />
                <Field
                    placeholder="Leave a comment"
                    className="form-control"
                    name="body"
                    component="textarea"
                />
                <button className="btn btn btn-primary btn-md" type="submit" title="send">
                    <span className="glyphicon glyphicon-comment"/>
                </button>
            </form>
        );
    }
}

export default reduxForm({form: "create-comment"})(CommentForm);